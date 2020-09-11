import axios from 'axios'
export default function ajax (url, data={}, type='GET') {

  return new Promise(function (resolve, reject) {//执行异步 Ajax请求 成功了调用resolve 失败了调用reject
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {//把对象的数据拼串拼到url上
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } 
    
    else {
      // 发送post请求
      promise = axios.post(url, data)
    }

  // 外层的promise的回调函数
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)//向外界返回data 
    }).catch(function (error) {
      //失败了调用reject()
      reject(error)
    })
  })
}

