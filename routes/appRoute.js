const appRoute = require('express').Router()

const restaurantController = require("../controller/restaurantController")

appRoute.post("/filterRestaurant" , restaurantController.filterRestaurantData)


module.exports = appRoute