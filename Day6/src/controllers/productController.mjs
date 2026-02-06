import productModel from "../models/productModel.mjs";
// create
const createProduct = async (req, res) => {
    try {
        let data = req.body;
        let product = await productModel.create(data);
        return res.send({ message: "ok", data: product })
    } catch (error) {
        return res.send({ message: "failed" })
    }
}
const uploadProducts = async (req, res) => {
    try {
        let products = req.body;
        let response = await productModel.insertMany(products);
        return res.send({ message: "ok", data: response })
    } catch (error) {
        return res.send({ message: "failed" })
    }
}
//read
const readProducts = async (req, res) => {
    try {
        let { minPrice } = req.query;
        let products = await productModel.find({ $and: [{ price: { $lte: Number(minPrice) } }, { isDelete: false }] });
        return res.send({ message: "ok", data: products })
    } catch (error) {
        return res.send({ message: "failed" })
    }
}
const productById = async (req, res) => {
    try {
        let { productid } = req.params;
        let product = await productModel.findById({_id:productid});
        return res.send({ message: "ok", data: product })
    } catch (error) {
        return res.send({ message: "failed", err: error })
    }
}
const productByName = async (req, res) => {
    try {
        let { title } = req.params;
        let product = await productModel.findOne({ title: title });
        return res.send({ message: "ok", data: product })
    } catch (error) {
        return res.send({ message: "failed" })
    }
}
// update
const updateProduct = async (req, res) => {
    try {
        let { title, productId, price } = req.body;
        // updates the first matched document
        let product = await productModel.updateOne({ productId: productId }, { $set: { title: title, price: price } })
        return res.send({ message: "ok", data: product })
    } catch (error) {
        return res.send({ message: "failed" })
    }
}
const updateProducts = async (req, res) => {
    try {
        let { author, category } = req.body;
        let product = await productModel.updateMany({ author }, { $set: { category } })
        return res.send({ message: "ok", data: product })
    } catch (error) {
        return res.send({ message: "failed" })
    }
}
const updateProductById = async (req, res) => {
    try {
        let data = req.body;
        let { id } = req.params;
        let product = await productModel.findByIdAndUpdate({ _id: id }, { $set: data })
        return res.send({ message: "ok", data: product })
    } catch (error) {
        return res.send({ message: "failed", err: error })
    }
}
// delete product 
const deleteProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let product = await productModel.findByIdAndUpdate({ _id: id }, { $set: { isDelete: true } })
        return res.send({ message: "ok", data: product })
    } catch (error) {
        return res.send({ message: "failed", err: error })
    }
}
// permanent delete
const permanentDelete= async (req,res)=>{
    try {
         let { id } = req.params;
         let product= await productModel.findByIdAndDelete(id);
          return res.send({ message: "ok", data: product })
    } catch (error) {
         return res.send({ message: "failed", err: error })
    }
}
export { createProduct, uploadProducts, readProducts, productById, productByName, updateProduct, updateProducts, updateProductById, deleteProduct,permanentDelete }