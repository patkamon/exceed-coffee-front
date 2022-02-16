import axios from "axios"

//waitfor backend
export async function checkQueueExist(queue) {
    // check that queue still exist
    const res = await axios.post("here", queue)
    return res.data
  }
  
export async function checkCurrentQueue(queue) {
    // check what is current queue
    const res = await axios
    .post("here", queue)
    return res.data
}
