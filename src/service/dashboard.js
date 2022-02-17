import axios from "axios"

//waitfor backend
export async function getQueueList(token) {
    // check that queue still exist
    const res = await axios.get("https://ecourse.cpe.ku.ac.th/exceed01/api/pat/1/getqueue",{ headers: {"Authorization" : `Bearer ${token}`} })
    return res.data
}