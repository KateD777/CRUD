import { connectDb } from "@/database/db";
import { Employee } from "@/models/Employee";
import { NextResponse } from "next/server";

connectDb();
export async function GET(request) {
    try {
        //get employee
        const getEmployee = await Employee.find()
        return NextResponse.json(getEmployee)
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: "Failed to get employee"
            },
            {
                status: 404
            }
        )
    }
}

export async function POST(request) {
    //data
    const { name, email, address, salary } = await request.json();

    //validation
    if (!name || !email || !address || !salary) {
        return NextResponse.json(
            {
                error: "All fields and required"
            },
            {
                status: 404
            }
        )
    }

    //employee find
    const employee = await Employee.findOne({ email });

    //condition
    if (employee) {
        return NextResponse.json(
            {
                error: "Employee already exists"
            },
            {
                status: 404
            }
        )
    }

    //create employee
    const newEmployee = new Employee({
        name, email, address, salary
    })

    try {
        const savedEmployee = await newEmployee.save();
        return NextResponse.json(
            {
                savedEmployee,
                message: "Employee create successfully"
            },
            {
                status: 200
            }
        )
        
    } catch (error) {
        console.log(error)
        //return error and status
        return NextResponse.json(
            {
                error: "Failed to save employee",
            },
            {
                status: 404
            }
        )
        
    }
}