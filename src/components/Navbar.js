import React from 'react';

const Navbar = () => {
    const navItem = <>
        <li><li>Rent</li></li>
        <li><li>Buy</li></li>
        <li><li>sell</li></li>
        <li><li>Manage Property</li></li>
        <li> <li>Resources</li></li>
        <li> <li className='border-2 border-blue-700 font-semibold text-blue-700 py-2 px-6 hover:bg-blue-700 hover:text-white'>Login</li></li>
        <li> <li className='border-2 border-blue-700 font-semibold text-white ml-3 bg-blue-700 py-2 px-6 hover:bg-white hover:text-blue-700'>SignUp</li></li>
    </>
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <li class="btn btn-ghost normal-case text-xl">Shopping</li>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-xl">
                        {navItem}
                    </ul>
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;