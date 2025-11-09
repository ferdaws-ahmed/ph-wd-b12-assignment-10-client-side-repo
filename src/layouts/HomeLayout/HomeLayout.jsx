import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
       <>
       
       <div>
           <header >
               <section  className='w-10/12 mx-auto '>
                <Navbar></Navbar>
               </section>
           </header>



           <main>
            <section className='w-10/12 mx-auto'>
                <Outlet></Outlet>
            </section>
           </main>


           <footer>

           </footer>
       </div>
       
       </>
    );
};

export default HomeLayout;
