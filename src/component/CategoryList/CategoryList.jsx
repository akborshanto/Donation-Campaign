import React from 'react'
import UseDontation from '../../Hoook/UseDontation'
import CardDefault from './CardDefault/CardDefault'

const CategoryList = () => {
    const {data,loading}=UseDontation()

  return (
    <div>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 '>
  
  {
    data.map( (item)=>(<CardDefault item={item} key={item.id}></CardDefault>))
  }
  </div>
    </div>
  )
}

export default CategoryList
