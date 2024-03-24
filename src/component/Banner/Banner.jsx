import React from 'react'
import { Typography } from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";
 
const Banner = () => {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
   
  return (
    <div className=' lg:h-[450px]   relative flex flex-col  justify-center  items-center border border-green-300 mt-4 '>
    <div className='  absolute  inset-0  bg-[url("/resource/bg.png")] bg-center  bg-cover bg-no-repeat opacity-10   '>
    </div>
    <Typography variant="h2" className='mb-4'>Material Tailwind</Typography>
    <div className="relative flex w-full max-w-[24rem]">
    
    <Input
      type="email"
      label="Email Address"
      value={email}
      onChange={onChange}
      className="pr-20"
      containerProps={{
        className: "min-w-0",
      }}
    />
    <Button
      size="sm"
      color={email ? "gray" : "blue-gray"}
      disabled={!email}
      className="!absolute right-1 top-1 rounded"
    >
      Invite
    </Button>
  </div>


 
    </div>
  )
}

export default Banner
