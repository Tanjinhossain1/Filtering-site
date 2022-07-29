import React from 'react';

const FilteringForm = ({allCategories,filterSearch}) => {
    return (
        <div>
               <form onSubmit={filterSearch} className='grid grid-cols-1 p-5 my-6 rounded-lg md:grid-cols-2 lg:grid-cols-5 bg-white gap-8'>
                    {/* location   */}
                    <div className='  border-r-2 '>
                        <p className='text-gray-400 '>location</p>
                        <p className='font-bold'>New York, USA</p>
                    </div>

                    <div className='  border-r-2 '>
                        <p className='text-gray-400 '>Category</p>
                        <select name='category' class="font-bold">
                            {
                                allCategories.map(category => <option key={category}>{category}</option>)
                            }
                        </select>
                    </div>
                    <div className='  border-r-2 '>
                        <p className='text-gray-400 '>Rate</p>
                        <select name='rate' class="font-bold">
                            {/* <option>All</option> */}
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className='  border-r-2 '>
                        <p className='text-gray-400 '>Price</p>
                        <select name='price' class="font-bold">
                            {/* <option value={0}>$0-500</option> */}
                            <option value={100}>$0-300</option>
                            <option value={500}>$300-500</option>

                        </select>
                    </div>
                    <div>
                        <input className='border-2 border-blue-700 font-semibold text-white ml-3 bg-blue-700 py-2 px-6 hover:bg-white hover:text-blue-700 rounded-lg' type="submit" value="Search" />
                    </div>
                </form>
        </div>
    );
};

export default FilteringForm;