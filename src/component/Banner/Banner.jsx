import React from 'react'
import { Typography } from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";
 
const Banner = ({setState,handleSearch,state}) => {
const emptyInput=()=>{
  setState("")
}
  return (
    <div className=' lg:h-[450px]   relative flex flex-col  justify-center  items-center border border-green-300 mt-4 '>
    <div className='  absolute  inset-0  bg-[url("/resource/bg.png")] bg-center  bg-cover bg-no-repeat opacity-10   '>
    </div>
    <Typography variant="h2" className='mb-4'>Material Tailwind</Typography>
    <div className="relative flex w-full max-w-[24rem]">
    
    <Input
      type="email"
      label="Search here."
     value={state}
      onChange={(e)=>setState(e.target.value)}
      className="pr-20"
      containerProps={{
        className: "min-w-0",
      }}
    />
    <Button
      size="sm"
   onClick={()=>{handleSearch(),
    emptyInput();
  
  
  }}
      className="!absolute right-1 top-1 rounded"
    >
      Search
    </Button>
  </div>


 
    </div>
  )
}

export default Banner
