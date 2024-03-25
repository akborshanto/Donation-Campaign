import React, { useEffect, useState } from 'react'

const UseDontation = () => {
const [data,setData]=useState([])
/* sppiner */
const [loading,setLoading]=useState(true)

useEffect(()=>{
setLoading(true)
const fetchData=async ()=>{

    const res=await fetch('/public/data.json')
    const data =await res.json()
    setData(data)
    setLoading(false)
}
return fetchData
},[])



  return {data,loading}
}

export default UseDontation
