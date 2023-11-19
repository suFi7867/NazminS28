import main from "../../database/connection";
import ShopS from "../../database/schema";


export default async (req, res) => {
	const { method } = req;
	const { id } = req.query;
    const { qty : oldQty } = req.body;

  // console.log(id)

	// Connect to database
	await main();

    
 if (method === "PUT") {
    try {
        
       const result = await ShopS.findByIdAndUpdate(id,{ "qty": oldQty}); 

      return  res
            .status(200)
            .json({ data: result, message: "Product Purchase Successfully" });
    } catch (error) {
      return  res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
}


	if (method === "GET") {
		try {
			let Product = await ShopS.findById(id);
			return res.status(200).json( Product );
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: "No Product Found" });
		}
	}
};