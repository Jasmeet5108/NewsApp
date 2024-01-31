import React from 'react'

const Newscard = (props) => {
    const { Img, title, desc, url } = props;
    return (
        <div className="w-80 h-auto sm:w-96 rounded border-2 border-black mt-4 p-4 shadow-md">
            <img src={Img} alt="image" width={400} className='block mx-auto' />
            <h1 className='font-bold text-xl truncate mt-3'>{title}</h1>
            <p className='mt-3'>{desc}</p>
            <p className='mt-5'>
                <a href={url} target='_blank' className='bg-blue-500 text-white p-2 rounded text-lg'>Read More</a>
            </p>
        </div>

    )
}

export default Newscard