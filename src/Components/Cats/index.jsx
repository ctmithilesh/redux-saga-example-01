import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ViewCatImages from '../../Views/ViewCatImages'

export default function Cats() {

    const cats = useSelector((state)=> state.cats.cats)
    
    useEffect(()=>{

          

    },[])

    console.log(cats)
  return (
    <ViewCatImages data={cats} />
  )
}
