
import React, { useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
   
import { Button } from '@material-tailwind/react'
import UseDontation from './../../Hoook/UseDontation';
import { saveStored } from '../../utils/LocalStorage';

const DonationDetails = () => {
    /* singleData */
    const [singleData,setSingleData]=useState({})
const {data,loading}=UseDontation()
/*  */
const {id}=useParams()


useEffect(()=>{

if(data){
    
const singleDatas=data.find((item)=> item.id ==id)
//console.log(singleData)
setSingleData(singleDatas)
}

},[data,id])
// console.log(singleData)



const {ititle,image}=singleData || {}
const handleDonate=()=>{
saveStored(singleData)
  
 }
  return (
    <div>
    <Card className="w-full overflow-hidden">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="m-0 rounded-lg "
    >
      <img
        src={singleData?.image}
        alt="ui/ux review check"
        className='bg-cover w-full'
      />
    </CardHeader>
    <CardBody>

    <Button className=' bg  bg-orange-800' onClick={handleDonate}>Donatea &{singleData?.price}</Button>
      <Typography variant="h4" color="blue-gray">
        {singleData?.title}
      </Typography>
      <Typography variant="lead" color="gray" className="mt-3 font-normal">
     {singleData?.description}
      </Typography>
    </CardBody>

  </Card>

 <Link to='/'>   <Button className='btn btn-primary bg-purple-500'>GO Back</Button></Link>
    </div>
  )
}

export default DonationDetails
