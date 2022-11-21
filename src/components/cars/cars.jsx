import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const Cars = () => {

    const doApi = async () => {
        try{
            let url = `https://project-yarin.herokuapp.com/cars?perPage=99`
            const {data} = await axios(url)
            console.log(data);
        }
        catch(err){
            console.log(err.response);
        }
    }
       
    useEffect(()=>{
        doApi();
    },[])



    return (
        <div>
      <h1 className='disply-3 text-center' >cars</h1>
        </div>
    )
}

export default Cars
