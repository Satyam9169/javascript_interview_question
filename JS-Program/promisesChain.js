const cart = ["shoes", "pants", "kurta"]

const promises = createOrder(cart)

promises.then(function(orderId) {
    console.log(orderId);
})

// Promises

function createOrder(cart) {
    
    const pr = new Promise((resolve, reject) => {
        // create order
        // valiate order
        // orderId

        if (!validateCart(cart)) {
            const err = new Error('Cart is empty')
            reject(err)
        }

        // logic for createOrder
        const orderId = "12345";
        if (orderId) {
            setTimeout(() => {
               resolve(orderId) 
            }, 5000);
        }
    })

    return pr;
}

function validateCart (cart) {
    return true;
}