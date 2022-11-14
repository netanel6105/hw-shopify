import React from 'react'

const Chaild2 = (props) => {
    const date=props.date;
  return (
    <div className='d-flex'>
        <input defaultValue={date} type="date" className='form-control w-50'/>
        <button className='btn btn-primary ms-2'>change date</button>
    </div>
  )
}

export default Chaild2