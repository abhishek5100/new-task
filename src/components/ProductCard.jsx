import React, { useState } from 'react'
import { useProductData } from './services'
import { Link } from 'react-router-dom'


const ProductCard = () => {

    const { data: productData, isLoading, error } = useProductData()
    const [currentPage, setCurrentPage] = useState(0)
    const [removeIndex, setRemoveIndex] = useState(0)
    const [toggle , setToggle] = useState(0)

    const totalProduct = productData?.slice(0, 18).length;
    const pageSize = 6;
    const totalPages = Math.ceil(totalProduct / pageSize);

    const start = currentPage * pageSize;
    const end = start + pageSize

    const handlePagination = (val) => {
        setCurrentPage(val)
        setRemoveIndex(0)
    }

    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    return (
        <div>
      
            <div className="border p-5 flex flex-col gap-4 items-center">
          
            <h1>Toggle</h1>
             <div  className='flex gap-5'>
           <button  onClick={()=>setToggle(1)} className={`border ${toggle === 1 ? "bg-blue-300 text-white":""} boder-gray-500 rounded-lg px-5 cursor-pointer`}>Cards </button>
           <button onClick={()=>setToggle(0)} className={`border ${toggle === 0 ? "bg-blue-300 text-white":""} boder-gray-500 rounded-lg px-5 cursor-pointer`}>List </button>
           <Link to ="/feedback"  className={`border  boder-gray-500 rounded-lg px-5 cursor-pointer`}>Feedback</Link>
             </div>
                {productData && productData.slice(start + removeIndex, end).map((ele, index) => (
                    <div className={`border ${toggle ? "max-w-[400px]": "max-w-[1000px]"}  rounded-lg relative p-4 shadow-md`}>
                        <button
                            className="absolute top-2 right-2 border rounded-full  text-red-500 p-2 text-lg cursor-pointer"
                            onClick={() => setRemoveIndex(index + 1)}
                        >
                            X
                        </button>
                        <div className="mb-4">
                            <span className="font-semibold">Title:</span> {ele.title}
                        </div>
                        <div>
                            <span className="font-semibold text-black">Body: </span>
                            {ele.body}
                        </div>
                    </div>
                ))}

                <div className="flex gap-3 mt-5">
                    {[...Array(totalPages).keys()].map((ele) => (
                        <div
                            key={ele}
                            className={`border rounded-full p-3 text-center w-8 h-8 flex items-center justify-center cursor-pointer 
                        ${currentPage === ele ? "bg-blue-500 text-white" : "bg-white text-black"}`}
                            onClick={() => handlePagination(ele)}
                        >
                            {ele + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default ProductCard
