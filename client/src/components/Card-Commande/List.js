import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcommande } from '../../JS/CommandeSlice/commandeSlice'
import Card from './Card'
import './Card.css'
import Navbar from '../Navbar/Navbar'

const List = () => {
    const dispatch=useDispatch()
    useEffect(() => {
   dispatch(getcommande())
    }, [])
    const commandes=useSelector((store)=>store.commande?.commande)
    console.log(commandes)
  return (
    <>
    <Navbar />
    <div className='list-product'>

    {commandes?.map((el)=><Card  data={el}/>)}
  </div>
  </>
  )
}

export default List
