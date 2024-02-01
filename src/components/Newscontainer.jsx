import React, { useEffect, useState } from 'react'
import Newscard from './Newscard'

const Newscontainer = (props) => {

    const { apiKey, category, heading, country } = props;

    const [data, setData] = useState([])

    const getData = () => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => setData(data.articles))
            .catch(err => console.log(`Error Occured => ${err}`))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className='p-2 text-3xl my-4 text-center'>{`Top News headlines - ${heading}`}</div>

            <div className='flex flex-wrap gap-8 justify-center pb-8'>
                {/* Card */}
                {data && data.map((item, index) =>
                    <div key={index}>
                        <Newscard Img={item.urlToImage ? item.urlToImage : "No Image"} title={item.title} desc={item.description} url={item.url} />
                    </div>
                )}
            </div>
        </>
    )
}

export default Newscontainer