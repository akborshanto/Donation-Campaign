import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-center text-8xl mt-16 text-red-500'>
    <h1>OPPPS!!!!!!!!!!!!!!!!!!!!</h1>

<Link to='/'>    <Button className='btn btn-warning bg-purple-300'>Go Back</Button>
</Link>
    </div>
  )
}

export default Error
