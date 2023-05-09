import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogsFetch } from '../../reducers/dogReducer'
import ViewDogImages from '../../Views/ViewDogImages'

export default function Dogs() {

    const dogs = useSelector((state)=> state.dogs.dogs)
    const dispatch = useDispatch()
    useEffect(()=>{

            dispatch(getDogsFetch())

    },[dispatch])

    console.log(dogs)
  return (
    <ViewDogImages data={dogs} />
  )
}
