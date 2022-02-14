export function getObjForm(target) {
  
    const data = new FormData(target)
    const dataObj = {}
   
    data.forEach((value, key) => {
      dataObj[key] = value
    })
    return dataObj
  }