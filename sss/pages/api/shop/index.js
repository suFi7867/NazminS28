// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



import main from "../../database/connection"
import ShopS from "../../database/schema"


export default async (req, res)=>{
  
    const { method } = req
  
	// Connect to database
    await main()

	

   //if (method === "POST") {
	//	console.log("POST")
	//}

	if (method === "GET") {
		try {
			const ShopList = await ShopS.find();
		return res.status(200).json({ data: ShopList });
		} catch (error) {
			console.log(error);
		return res.status(500).json({ message: "Internal Server Error" });
		
		}
	}
     

   
  }
  