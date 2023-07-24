const restaurantModel = require("../model/restaurantModel")


module.exports.filterRestaurantData = async (request , response) => {

try {

    let {mealType , cuisine , location , hCost , lCost , page , sort} = request.body

    let filter = {}
    
const itemPerPage = 2;

// filter["prop_name"] = value

  if(mealType !== undefined){filter["mealtype_id"] = mealType}
  if(location !== undefined){filter["location_id"] = location}
  if(lCost !== undefined && hCost !== undefined){filter["min_price"] = {$lt : hCost , $gt : lCost}}
  if(cuisine !== undefined){filter["cuisine_id"] = {$in : cuisine}}

  let restaurantList = await restaurantModel.find(filter).sort({
       min_price : sort

  }).limit(itemPerPage).skip((page - 1) * itemPerPage)

  // above logic is right cause we just want to show only two item per page
 
  //  let restaurantList;

  // page !== undefined ? 
  // restaurantList = await restaurantModel.find(filter).limit(itemPerPage).skip((page - 1) * itemPerPage) 
  // : restaurantList = await restaurantModel.find(filter).sort({
  //        min_price : sort
  
  //   })


  let sendData = {
    status : restaurantList.length === 0 ? false : true,
    count : restaurantList.length,
    list : restaurantList

  }

  response.send(sendData)
    
} catch (error) {

    let errorObj = {

        status : false , error
    }
 
    response.send(errorObj)
}


//find




}