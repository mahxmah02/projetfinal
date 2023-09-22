import React, { useEffect, useState } from 'react'
import  './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { userCurrent } from '../../JS/userSlice/userSlice'
import Navbaradmin from './Navbar-admin/Navbaradmin'
import { Link } from 'react-router-dom'
import { deletecommande, getcommande } from '../../JS/CommandeSlice/commandeSlice'

const ProfilUsers = () => {
  const dispatch=useDispatch()
  const [ping, setping] = useState(true)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
dispatch(getcommande())
  }, [ping])
  const commandes=useSelector((store)=>store.commande?.commande)

  return (
    <div>
      <Navbaradmin />
      <div className='box-menu'>
<div className='menu'>
    <ul className='link'>
     <li><i class="fa-solid fa-address-card"></i><Link to="/dashbord"> Profil</Link></li>
        <li><i class="fa-solid fa-users"></i><Link to="/produits"> Gestion Commandes</Link></li>
        <li><i class="fa-solid fa-paste"></i><Link to='/users'> Gestion serveur</Link></li>
        <li><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</li>
    </ul>
</div>
       <div className="table">
                
                    <tr>
                        <th>Name product</th>
                        <th>price</th>
                        {/* <th>client</th>   */}
                        <th>Serveur</th>
                        <th>Etat</th>
                        <th>action</th>
                    </tr> 
                    {commandes?.map((el)=>(
                    <tr>
                      {el?.product.map((p)=>(
                      <>
                        <td> {p?.name} </td>
                        <td>{p?.price} </td>
                        </>
                        ))}
                        {/* {el?.details.map((c)=>(
                      <>
                        <td> {c?.name}</td>
                        </>
                        ))} */}
                        <td>{el?.serveur} </td>
                        <td>{el?.etat} </td>
                        <td>
                        <i class="fa-solid fa-trash fa-xl" style={{color:"red"}} onClick={()=>(dispatch(deletecommande(el._id)),setping(!ping))}></i></td>
                    </tr>
                 ))}
                  
     </div>

    </div>
    {show? (
  <>
  <input type='text' placeholder='name'></input>
  </>
 ):null}
    </div>
  )
}

export default ProfilUsers
                          