import React, { useState } from 'react'

const Tcard = ({ name, image, role, message }) => {
    const [Readmore, setReadmore] = useState(false);

    const handleread = () => {
        setReadmore(!Readmore);
    }
    return (
        <div className='flex flex-col justify-between items-center m-4 p-4 rounded-lg h-full shadow-2xl hover:shadow-cyan-500 '>
            <div className='flex items-center flex-col'>
                <img className='rounded-[50%] object-cover' src={image} alt="" />
            </div>
            <div className=' flex items-center flex-col'>
                <h1 className='font-bold text-xl'>
                    {name}
                </h1>
                <h4>{role}</h4>
            </div>
            <div className='mt-3 text-center h-[96px] text-sm text-gray-600 overflow-auto'>
                {Readmore ?
                    <p className='text-sm text-gray-600'>{message}</p> : (message.slice(0, 90)) + " ..."}
                <button
                    className='text-sm font-medium text-gray-900'
                    onClick={handleread}>
                    {Readmore ? "Read Less" : "Read more"}
                </button>
            </div>
        </div>
    )
}

export default Tcard