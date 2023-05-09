import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCatsFetch } from '../../reducers/catReducer'
import ViewCatImages from '../../Views/ViewCatImages'

export default function Cats() {

    const cats = useSelector((state)=> state.cats.cats)
    const dispatch = useDispatch()
    useEffect(()=>{

            dispatch(getCatsFetch())

    },[dispatch])

    console.log(cats)
  return (
    <ViewCatImages data={cats} />
  )
}
