import React, { useEffect, useState } from 'react'
import './Card.css'
import { useDispatch, useSelector } from 'react-redux'
import { serveurCurrent } from '../../JS/userSlice/userSlice'
import { updatecommande } from '../../JS/CommandeSlice/commandeSlice'

const Card = ({data}) => {
	const isAuth = localStorage.getItem("token");
    const dispatch=useDispatch()
	const [testetat, settestetat] = useState(false)
	console.log(testetat)
	const [third, setthird] = useState(false)
	console.log(third)
	useEffect(() => {
		if (isAuth) {
			dispatch(serveurCurrent());
		  }
	}, [third])
	const serveur=useSelector((store)=>store.user?.serveur)
	console.log(serveur)
	const [commandeup,setcommandeup]=useState({
		serveur:"khaoula",
		etat:""
	})
	const handleetat=(x)=>{
if(x==false){
	setcommandeup({...commandeup,etat:"encours"})
}
else
setcommandeup({...commandeup,etat:"traitée"})
	}
	useEffect(() => {
		handleetat(testetat)

	}, [third])


  return (
    <div>
  <div class="product-card">
  {data?.product?.map((el)=>
  (<>
		<div class="badge">New</div>
		<div class="product-tumb">
			
			<img src={el?.photo} alt="majitich" />
		</div>
		<div class="product-details">
			<span class="product-catagory">{data?.etat}</span>
			<h4><a href="">{el?.name}</a></h4>
			{testetat?(<p>{serveur?.name}</p>):null}
			<div class="product-bottom-details">
				<div class="product-price">{el?.price}dt </div>
				<div class="product-links">
					{
						!testetat? (
							<i class="fa-solid fa-pen-to-square fa-xl" style={{color:"orange",cursor: "pointer"}} onClick={()=>(settestetat(!testetat),setthird(!third))}></i>

						):
						<i class="fa-solid fa-check fa-xl" style={{color:"green"}} onClick={()=>dispatch(updatecommande({id:data?._id,user:commandeup}))}></i>
					}
				</div>
			</div>
		</div>
		</>))}
	</div>
    </div>
  )
}

export default Card
