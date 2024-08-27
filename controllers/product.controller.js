const Product = require('../model/product.model');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch (erorr) {
        res.status(500).send({ message: erorr.message });
    }


}
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    }
    catch (erorr) {
        res.status(500).send({ message: erorr.message });
    }
}

const productcreate = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({ message: 'Product created successfully', product });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const updateproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body); // Correct method name and variable
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }

}

const deleteproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }
        res.status(200).json({ message: "Product deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getProducts,
    getProduct,
    productcreate,
    updateproduct,
    deleteproduct
}