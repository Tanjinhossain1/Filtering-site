import React, { useEffect, useState } from 'react';
import Cloth from './Cloth';

const Filtering = () => {
    const allCategories = ["Men's Sneaker", "Men's Pants", "Men's Boot","Bag","Cap","Earphones","Bottle"]
    const [cloths,setCloths] = useState([])
    useEffect(()=>{
        fetch('cloths.json')
        .then(res=>res.json())
        .then(data=>setCloths(data))
    },[])
    
    return (
        <div className=' bg-[#f8f7fd]'>
            <div className=' w-3/4 mx-auto'>
                {/* searching input field  */}
                <div className='lg:flex justify-between items-center pt-12'>
                    <h1 className='text-4xl font-semibold'>Search properties to rent</h1>
                    <input type="text" placeholder="Search With Search Bar" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className='grid grid-cols-1 p-5 my-6 rounded-lg md:grid-cols-2 lg:grid-cols-5 bg-white gap-8'>
                    {/* location   */}
                    <div className='  border-r-2 '>
                        <p className='text-gray-400 '>location</p>
                        <p className='font-bold'>New York, USA</p>
                    </div>

                    <div className='  border-r-2 '>
                        <p className='text-gray-400 '>Category</p>
                        <select name='category' class="font-bold">
                            {
                                allCategories.map(category=> <option>{category}</option>)
                            }                          
                        </select>
                    </div>
                    <div className='  border-r-2 '>
                        <p className='text-gray-400 '>Rate</p>
                        <select name='rete' class="font-bold">
                            <option>What is the best TV show</option>
                        </select>
                    </div>
                    <div className='  border-r-2 '>
                        <p className='text-gray-400 '>Price</p>
                        <select name='price' class="font-bold">
                            <option>What is the best TV show</option>
                        </select>
                    </div>
                    <div>
                        <input className='border-2 border-blue-700 font-semibold text-white ml-3 bg-blue-700 py-2 px-6 hover:bg-white hover:text-blue-700 rounded-lg' type="submit" value="Search" />
                    </div>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-lg'>
            {
                cloths.map(cloth=><Cloth key={cloth.id} cloth={cloth} />)
            }
            </div>
            </div>
        </div>
    );
};

export default Filtering;