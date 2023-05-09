import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ViewDogImages from '../../Views/ViewDogImages'

export default function Dogs() {

    const dogs = useSelector((state)=> state.dogs.dogs)
    useEffect(()=>{

            

    },[])

    console.log(dogs)
  return (
    <ViewDogImages data={dogs} />
  )
}
