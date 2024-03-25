import React, { useEffect, useState } from 'react'
import { getStored } from './LocalStorage'

const UseLocalStorage = () => {
const [localData,setLocalData]=useState([])

useEffect(()=>{
setLocalData(getStored())


},[])



  return {localData}
}

export default UseLocalStorage
