/*
包含n个能操作mongodb数据库集合的model的模块
1. 连接数据库
  1.1. 引入mongoose
  1.2. 连接指定数据库(URL只有数据库是变化的)
  1.3. 获取连接对象
  1.4. 绑定连接完成的监听(用来提示连接成功)
2. 定义对应特定集合的Model
  2.1. 字义Schema(描述文档结构)
  2.2. 定义Model(与集合对应, 可以操作集合)
3. 向外暴露获取Model的方法
 */
// 1. 连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/vueshop')
const conn = mongoose.connection
conn.on('connected', function () {
  console.log('数据库连接成功!')
})

// 2. 得到对应特定集合的Model: UserModel
const userSchema = mongoose.Schema({
  // 用户名
  'name': {type: String},
  // 密码
  'pwd': {type: String},
  // 类型
  'phone': {'type': String}
})
UserModel = mongoose.model('user', userSchema)

const categorySchema = mongoose.Schema({
  'id': {type: String},
  'is_in_serving': {type: Boolean},
  'description': {type: String},
  'title': {type: String},
  'link': {type: String},
  'image_url': {type: String},
  'icon_url': {type: String},
  'title_color': {type: String},
})
categoryModel = mongoose.model('category',categorySchema,'categorys')

const shopSchema = mongoose.Schema({
  'name': {type: String},
  "address": {type: String},
  "id": {type: Number},
  "latitude": {type: String},
  "longitude": {type: String},
  "location":{type: Object},
  "phone": {type: String},
  "category": {type: String},
  "supports":{type: Object},
  "status": {type: String},
  "recent_order_num": {type: String},
  "rating_count": {type: String},
  "rating": {type: Number},
  "promotion_info": {type: String},
  "piecewise_agent_fee": {type: Object},
  "opening_hours":  {type: String},
  "license": {type: Object},
  "is_new": {type: Boolean},
  "is_premium": {type: Boolean},
  "image_path": {type: String},
  "identification": {type: Object},
  "float_minimum_order_amount": {type: String},
  "float_delivery_fee": {type: String},
  "distance": {type: String},
  "order_lead_time": {type: String},
  "description": {type: String},
  "delivery_mode": {type: Object},
  "activities": {type: String},
})
shopModel = mongoose.model('shop', shopSchema,'shops')


// 3. 向外暴露
module.exports = {
  getModel(name) {
    return mongoose.model(name)
  },
}

