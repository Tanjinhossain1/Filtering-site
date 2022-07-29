import React from 'react';

const Filtering = () => {
    return (
        <div className=' bg-[#f8f7fd]'>
            <div className=' w-3/4 mx-auto'>
                {/* searching input field  */}
                <div className='lg:flex justify-between items-center pt-12'>
                    <h1 className='text-4xl font-semibold'>Search properties to rent</h1>
                    <input type="text" placeholder="Search With Search Bar" class="input input-bordered input-primary w-full max-w-xs" />
                </div>

            </div>
        </div>
    );
};

export default Filtering;