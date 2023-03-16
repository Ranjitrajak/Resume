import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I’m passionate about the impact my skills can have in the real world, and firmly believe
            that I can create innovative solutions to business processes
            and problems which will ultimately lead to a better user experience.
            I possess an in-depth understanding of both front end and back end technologies,
            and am very good at defining what success looks like. Furthermore
            I am proficient in Web Technologies such as
            Javascript,TypeScript,Node.js,Nest.js, SQL Server,MongoDb, Redis,AwsS3,Docker,HTML,CSS,React.
          </p>
          <p className='py-2 text-gray-600'>
            My ambition is to reach the very top of my profession and to work with
            other leading developers in this field. On a personal level I am able to both give and take feedback.
            Furthermore I am committed to constantly improving myself by learning new technologies and frameworks.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
