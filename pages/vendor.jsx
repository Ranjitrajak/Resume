import Image from 'next/image';
import React from 'react';
import vendorImg from '../public/assets/projects/vendor.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const vendor = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={vendorImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Vendor Market</h2>
          <h3>React JS / Typescript / Nest Js/ Postgresql</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A Web app for combining many shops in a particular market. As we know,
            some of the market shops sell more than others, so the product might expire
            before being sold. The idea is to connect all the shops in a market so that the
            products that are not being sold can be transferred to other shops where they
            have higher chances of being sold.
          </p>
          <a
            href='https://github.com/Ranjitrajak/V-Market.git'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Typescript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Nest Js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Postgresql
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sequelize
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default vendor;
