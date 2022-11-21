import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'


const Cars = () => {
    const [cars, setCars] = useState([]);
    const doApi = async () => {
        try {
            let url = `https://project-yarin.herokuapp.com/cars?perPage=99`
            const { data } = await axios(url)
            console.log(data);
            setCars(data);
        }
        catch (err) {
            console.log(err.response);
        }
    }

    useEffect(() => {
        doApi();
    }, [])



    return (
        <div>
            <h1 className='disply-3 text-center' >cars</h1>

            <div style={{color:"blue"}} className='container' >
                <div className="row">
                    
                {cars?.map((item, i) => (
                    <div key={i} className='shadow p-2 mt-3 my-3 border col-12 col-md-6 col-lg-3 border'>
                        <p > {item.model}</p>
                        <p > {item.company}</p>
                    </div>
                ))}
                </div>
            </div>




           
        </div>
    )
}

export default Cars
