import React from 'react'
import { useState } from 'react'
import Chaild from './chaild'
import Chaild2 from './chaild2'

const Parent = (props) => {
const [date,setDate] = useState('2022-11-14')

  return (
    <div>
        <Chaild date={date}/>
        <Chaild2 data={date}/>
    </div>
  )
}

export default Parent