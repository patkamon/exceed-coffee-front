import axios from 'axios'

export async function adminLogin(obj) {
  // change format from json object to x-www-urlencoded
  var data = []
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      data.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }
  }
  data = data.join('&')
  const res = await axios.post(
    'https://ecourse.cpe.ku.ac.th/exceed01/api/login',
    data
  )
  return res.data
}

export async function queueLogin(obj) {
  console.log(obj)
  obj.willsit = parseInt(obj.willsit)
  console.log(obj)
  const res = await axios.post(
    'https://ecourse.cpe.ku.ac.th/exceed01/api/pat/1/insertqueue',
    obj
  )
  return res.data
}
