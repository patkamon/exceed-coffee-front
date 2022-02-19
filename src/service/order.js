



import axios from "axios"

//waitfor backend
export async function insertOrder(obj) {
    // check that queue still exist
    const res = await axios.post(`https://ecourse.cpe.ku.ac.th/exceed01/api/pat/1/insertorder`,obj)
    return res.data
}


//check is order already
export async function checkOrder(phone) {
    // check that queue still exist
    const res = await axios.get(`https://ecourse.cpe.ku.ac.th/exceed01/api/pat/1/order/${phone}`)
    return res.data
}

