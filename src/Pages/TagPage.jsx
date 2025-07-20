import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div className='w-full'>
            <Header />
            <div className='max-w-[700px] mx-auto mt-[90px] flex flex-row-reverse relative bg-white'>
                <div className='fixed'>
                    <button className="text-white hover:bg-black bg-slate-500 rounded-md pt-2 pb-2 pr-5 pl-5" onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2 className='fixed font-bold text-2xl left-[250px]'>
                    Blog Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default TagPage