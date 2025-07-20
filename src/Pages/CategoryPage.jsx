import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div className='w-full'>
            <Header />
            <div className='mx-auto max-w-[600px] relative'>
                <div>
                    <button className="text-white absolute hover:bg-black bg-slate-500 rounded-md pt-2 pb-2 pr-5 pl-5 right-[100px] bottom-[8px]" onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2>
                    Blogs On <span>{category}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination />
        </div>
    )
}

export default CategoryPage