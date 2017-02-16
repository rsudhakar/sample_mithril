var o = require("ospec")
var cart = require("../../src/models/cart")

o("should calculate the total cost of items in the cart", function() {
    cart.items = [{cost: 10}, {cost: 20}]
    o(cart.total()).equals(30)
})
