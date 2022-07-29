import React, { useEffect, useState } from 'react';
import Cloth from './Cloth';
import FilteringForm from './filteringForm';

const Filtering = () => {
    const allCategories = ["Men's Sneaker", "Men's Pants", "Men's Boot", "Bag", "Cap", "Earphones", "Bottle"]

    // all hooks 
    const [cloths, setCloths] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [category, setCategory] = useState('');
    const [rate, setRate] = useState('');
    const [price, setPrice] = useState('');
    // fetch the data 
    useEffect(() => {
        fetch('cloths.json')
            .then(res => res.json())
            .then(data => setCloths(data))
    }, [])

    // main filtering 
    let mainFilteringCloth = cloths.filter(c => c.category == category && c.ratings == rate && price === '100' && c.price < 300 || price == '500' && c.price > 300 & c.price < 500);

    // form function 
    const filterSearch = (event) => {
        event.preventDefault();
        const category = event.target.category.value;
        setCategory(category)
        const rate = event.target.rate.value;
        setRate(rate)
        const price = event.target.price.value;
        setPrice(price)
    }

    // search filters 
    const searchFilteringCloths = mainFilteringCloth.filter(c => c.name.includes(searchValue))
    const searchCloths = cloths.filter(c => c.name.includes(searchValue))

    return (
        <div className=' bg-[#f8f7fd]'>
            <div className=' w-3/4 mx-auto'>
                {/* searching input field  */}
                <div className='lg:flex justify-between items-center pt-12'>
                    <h1 className='text-4xl font-semibold'>Search properties to rent</h1>
                    <input onChange={(event) => setSearchValue(event.target.value)} type="text" placeholder="Search With Name" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <FilteringForm filterSearch={filterSearch} allCategories={allCategories} />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-lg'>
                    {
                        mainFilteringCloth.length ? mainFilteringCloth.map(cloth => <Cloth key={cloth.id} cloth={cloth} />) && searchFilteringCloths ? searchFilteringCloths.map(cloth => <Cloth key={cloth.id} cloth={cloth} />) : mainFilteringCloth.map(cloth => <Cloth key={cloth.id} cloth={cloth} />) :
                            searchCloths ? searchCloths.map(cloth => <Cloth key={cloth.id} cloth={cloth} />) :
                                cloths.map(cloth => <Cloth key={cloth.id} cloth={cloth} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Filtering;