import axios from "axios"

export async function adminLogin(obj) {

  // change format from json object to x-www-urlencoded
  var data = [];
  for (var key in obj) {
         if (obj.hasOwnProperty(key)) {
               data.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))                  
               console.log(key + " -> " + obj[key]);
     }
    }
  data= data.join("&");
  const res = await axios.post("here", data)
  return res.data
}

export async function queueLogin(obj) {

  // change format from json object to x-www-urlencoded
  var data = [];
  for (var key in obj) {
         if (obj.hasOwnProperty(key)) {
               data.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))                  
               console.log(key + " -> " + obj[key]);
     }
    }
  data= data.join("&");
  const res = await axios.post("here", data)
  return res.data
}