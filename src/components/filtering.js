import React, { useEffect, useState } from 'react';
import Cloth from './Cloth';

const Filtering = () => {
    const allCategories = ["Men's Sneaker", "Men's Pants", "Men's Boot", "Bag", "Cap", "Earphones", "Bottle"]
    const [cloths, setCloths] = useState([]);
    const [searchValue,setSearchValue] = useState('')
    const [category, setCategory] = useState('');
    const [rate, setRate] = useState('');
    const [price, setPrice] = useState('');
    useEffect(() => {
        fetch('cloths.json')
            .then(res => res.json())
            .then(data => setCloths(data))
    }, [])
    // console.log({ price, category, rate })
    let mainFilteringCloth = cloths.filter(c => c.category == category && c.ratings == rate && price === '100' && c.price < 300 || price == '500' && c.price > 300 & c.price < 500)
    const filterSearch = (event) => {
        event.preventDefault();
        const category = event.target.category.value;
        setCategory(category)
        const rate = event.target.rate.value;
        setRate(rate)
        const price = event.target.price.value;
        setPrice(price)
    }
const searchFilteringCloths = mainFilteringCloth.filter(c=>c.name.includes(searchValue))
const searchCloths = cloths.filter(c=>c.name.includes(searchValue))

    return (
        <div className=' bg-[#f8f7fd]'>
            <div className=' w-3/4 mx-auto'>
                {/* searching input field  */}
                <div className='lg:flex justify-between items-center pt-12'>
                    <h1 className='text-4xl font-semibold'>Search properties to rent</h1>
                    <input onChange={(event)=>setSearchValue(event.target.value)} type="text" placeholder="Search With Name" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
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
                                allCategories.map(category => <option>{category}</option>)
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-lg'>
                    {
                        mainFilteringCloth.length ? mainFilteringCloth.map(cloth => <Cloth key={cloth.id} cloth={cloth} />) && searchFilteringCloths? searchFilteringCloths.map(cloth => <Cloth key={cloth.id} cloth={cloth} />):mainFilteringCloth.map(cloth => <Cloth key={cloth.id} cloth={cloth} />) :
                        searchCloths?  searchCloths.map(cloth => <Cloth key={cloth.id} cloth={cloth} />):
                            cloths.map(cloth => <Cloth key={cloth.id} cloth={cloth} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default Filtering;