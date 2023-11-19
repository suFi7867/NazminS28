import axios from "axios";

import Link from 'next/link'


export default function Home({data}) {

  //console.log(data)
  return (
    <div style={{width:"60%", margin:"auto"}}  >
    
    <h1>WELCOME TO OUR STORE</h1>
    
    <table>
              <thead>
                  <tr>
                      <th scope="col">No</th>
                      <th scope="col">Prodcut Name</th>
                      <th scope="col">Brand Name</th>
                      <th scope="col">Availability</th>
                      <th scope="col">View</th>
                  </tr>
              </thead>

              <tbody>
                {
                 data?.map((el,i)=>(
                  <tr  >
                  <td>{i+1} </td>
                  <td>{el.name} </td>
                  <td>{el.brand}</td>
                  <td>{el.qty}</td>
                  <td >
                  <Link  href={`/${el._id}`} >
                    <button>VIEW</button>
                  </Link>
                    </td>
                </tr>
  
                 ))
                }

              </tbody>

    </table>

    <h2>100% WORKING LIVE UPDATE IN MONGODB</h2>

    </div>
  )
}





export const getServerSideProps = async () => {

	const { data } = await axios.get("http://localhost:3000/api/shop");
 // console.log(data)
	return {
		props: {
			data: data.data,
		},
	};
};