"use client"
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';

const Home = () => {
  console.log("I am Client component");

  const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        setIsModalOpen(true);
    }, []);
  
  return (
    <div className=' flex justify-center items-center h-screen'>
      {/* main  */}
      <div className="">
      {/* View Employee Details button */}
        <Link href='/employee/employeelist'>
          <button
            className='border border-gray-400 rounded-lg font-medium px-3 py-1.5 mx-2'>
            Список сотрудников
          </button>
        </Link>

        {/* Add Employee button */}
        <Link href='/employee/addemployee'>
          <button
            className='border border-gray-400 rounded-lg font-medium px-3 py-1.5'>
            Добавить сотрудника
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;