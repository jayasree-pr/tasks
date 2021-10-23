const Product = require('../model/product')

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({featured:true})
    res.status(200).json(products);
}
const getAllProducts = async (req, res) => {
    res.status(200).json("something2");
}

module.exports = {getAllProducts,getAllProductsStatic}