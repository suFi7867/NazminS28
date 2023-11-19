import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from "axios"
import Link from 'next/link'




export default function Home({product}) {

  if(!product){
    return <h1>PRODUCT not found</h1>
  }


  const [Pro, setPro] = useState(product)
  const [req, setReq] = useState(false)

const BuyNow = async () => {
    try {
 
        const { data } = await axios.put("http://localhost:3000/api/shop" + "/" + Pro._id, {
            qty: Pro.qty-1,
        });

       
        setPro(data.data);
        console.log(data.message);
    } catch (error) {
        console.log(error);
    }

    setReq(!req)

    alert("PURCHASE SUCCESSFULL..")
};


    




  return (
    <div>
     

      <div    >
        <h1> Product Name :  {Pro.name} </h1>
        <h1> Product Brand :  {Pro.brand} </h1>
        <h1> Product Qty :  {Pro.qty} </h1>
        <Link href="/" >  <button onClick={BuyNow} style={{fontSize:"40px", backgroundColor:"white", color:"blue"}} >BUY NOW</button></Link>

<br />
<h2>100% WORKING LIVE UPDATE IN MONGODB</h2>

        
      </div>
      
    </div>
  )
}


export const getServerSideProps = async (context) => {

    const id = (context.query.id)

	const { data } = await axios.get(`http://localhost:3000/api/shop/${id}`);
 console.log(data)
	return {
		props: {
			product: data,
		},
	};
};