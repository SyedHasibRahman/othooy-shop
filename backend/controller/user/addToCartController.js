const addToCartModel = require("../../models/cartProduct")

const addToCartController = async (req, res) => {
    try {
        const { productId } = req?.body;
        const currentUser = req.userId;
        // console.log(currentUser)
        const userCartItems = await addToCartModel.find({ userId: currentUser });

        // console.log('All Cart Items for the User:', userCartItems);

        // Step 2: Find a specific document by productId for the current user
        const specificCartItem = await addToCartModel.findOne({ userId: currentUser, productId });

        // console.log('Specific Cart Item:', specificCartItem);

        // const isProductAvailable = await addToCartModel.findOne({ productId })

        // console.log("isProductAvailabl   ", isProductAvailable)

        if (specificCartItem) {
            return res.json({
                message: "Already exits in Add to cart",
                success: false,
                error: true
            })
        }

        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser,
        }

        const newAddToCart = new addToCartModel(payload)
        const saveProduct = await newAddToCart.save()


        return res.json({
            data: saveProduct,
            message: "Product Added in Cart",
            success: true,
            error: false
        })


    } catch (err) {
        res.json({
            message: err?.message || err,
            error: true,
            success: false
        })
    }
}


module.exports = addToCartController