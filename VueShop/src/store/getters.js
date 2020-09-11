/*
包含多个基于state的getter计算属性的对象
 */
export default {

    totalCount (state) {
        //educe() 方法接收一个函数作为累加器，0为初始值
      return state.cartFoods.reduce((preTotal, food) => preTotal + food.count , 0)
    },
  
    totalPrice (state) {
      return state.cartFoods.reduce((preTotal, food) => preTotal + food.count*food.price , 0)
    },
  
    positiveSize (state) {
      return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType===0?1:0) , 0)
    }
  }