const product = require("../model/products");

const product_add = async (req, res) => {
    try {
        const { name, description, price, quantity } = req.body;
        const newProduct = new product({ name, description, price, quantity });
        await newProduct.save();
        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        res.status(400).json({ message: "Error creating product", error: error.message });
    }
};

const display = async (req, res) => {
    try {
        const products = await product.find();
        res.status(200).json({ message: "Products retrieved successfully", products });
    } catch (error) {
        res.status(400).json({ message: "Error retrieving products", error: error.message });
    }
};

const displaybyid = async (req, res) => {
    try {
        const productId = req.params.id;
        const product_detail = await product.findById(productId);
        if (!product_detail) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product retrieved successfully", product_detail });
    } catch (error) {
        res.status(400).json({ message: "Error retrieving product", error: error.message });
    }
};


const deletebyid = async (req, res) => {
    try {
        const productId = req.params.id;
        const product_detail = await product.findByIdAndDelete(productId);
        if (!product_detail) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully", product_detail });
    } catch (error) {
        res.status(400).json({ message: "Error deleting product", error: error.message });
    }
};  


const update = async (req, res) => {
    try {
        const productId = req.params.id;
        const { name, description, price, quantity } = req.body;
        const updatedProduct = await product.findByIdAndUpdate(
            productId,
            { name, description, price, quantity },
            { new: true, runValidators: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(400).json({ message: "Error updating product", error: error.message });
    }
};

const update_quantity = async (req, res) => {
    try {
        const productId = req.params.id;
        const { quantity } = req.body;
        const updatedProduct = await product.findByIdAndUpdate(
            productId,
            { quantity },
            { new: true, runValidators: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product quantity updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(400).json({ message: "Error updating product quantity", error: error.message });
    }
}



module.exports = {
    product_add ,
    display,
    displaybyid,
    deletebyid,
    update  ,
    update_quantity
}