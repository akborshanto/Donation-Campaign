import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const CardDefault = ({item}) => {
const {id,title,image,category,blog,cardBg,textColor}=item || {}
  return (
    <div>
    <Card style={{backgroundColor:cardBg}} className=" p-9 mt-6 w-96 overflow-hidden"  >
    <CardHeader  color="blue-gray" className=" mx-auto ">
      <img className='w-ful'
        src={image}
        alt={title}
      />
    </CardHeader>
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-2">
  {title}
      </Typography>
      
    </CardBody>
    <CardFooter className="pt-0 ">
   
<Link to={  `/donationDetails/${id}`}><button className='btn'>Details</button></Link>
    </CardFooter>
  </Card>
    </div>
  )
}

export default CardDefault
