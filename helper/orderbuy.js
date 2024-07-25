const product = require("../model/products");

const order = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const product_detail = await product.findById(productId);
        if (!product_detail) {
            return res.status(404).json({ message: "Product not found" });
        }
        if (product_detail.quantity < quantity) {
            return res.status(400).json({ message: "Insufficient quantity" });
        }
        const total_price = product_detail.price * quantity;
        product_detail.quantity -= quantity;
        await product_detail.save();
        res.status(200).json({ message: "Order placed successfully", total_price });
    } catch (error) {
        res.status(400).json({ message: "Error placing order", error: error.message });
    }
}

module.exports = {
    order
}