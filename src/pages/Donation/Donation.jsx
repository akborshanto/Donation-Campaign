import React, { useState } from 'react'
import UseLocalStorage from '../../utils/UseLocalStorage'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import DontationCard from './DonationCard/DontationCard'

const Donation = () => {
const {localData}=UseLocalStorage()

const [show,setShow]=useState(false)

const handleSHow=()=>{
setShow(!show)

console.log('dskf')
}
if(localData.length === 0){

  return <h1 className=' text-center text-4xl  bg-red-400'>NO DATA FOUND ....................................................</h1>
}



  return (
    <div>
<div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10'>

{

  localData?.slice(0,show? localData.length:4).map((donate=><DontationCard key={donate.id} donate={donate}></DontationCard>))
}

</div>


{
  localData.length > 4  && <div className={`text-center}`}>

  <Button className={`bg-orange-800 my-4 ${!show? "bg-green-400":" disabled"}`} onClick={handleSHow} >
  
  {!show? "showALL":"showLess"}
  </Button>
  </div>
}




      </div>
  )
}

export default Donation
