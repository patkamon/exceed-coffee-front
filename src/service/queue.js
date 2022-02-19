import axios from 'axios'

//waitfor backend
export async function checkQueueExist(phone) {
    // check that queue still exist
    const res = await axios.get(`https://ecourse.cpe.ku.ac.th/exceed01/api/pat/1/get_number_byphone/${phone}`)
    return res.data
}

export async function checkCurrentQueue() {
  // check what is current queue
  const res = await axios.get(
    'https://ecourse.cpe.ku.ac.th/exceed01/api/pat/1/countqueue'
  )
  return res.data
}

export async function checkCurrentPPL() {
  // check current amount of ppl in cafe
  const res = await axios.get(
    'https://ecourse.cpe.ku.ac.th/exceed01/api/pat/1/get_number_sit'
  )
  return res.data
}
