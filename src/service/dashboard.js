import axios from 'axios'

//waitfor backend
export async function getQueueList(token) {
  const res = await axios.get(
    'https://ecourse.cpe.ku.ac.th/exceed01/api/pat/1/getqueue',
    { headers: { Authorization: `Bearer ${token}` } }
  )
  return res.data
}

export async function removeQueue(token, no) {
  const res = await axios.delete(
    `https://ecourse.cpe.ku.ac.th/exceed01/api/pat/1/deletequeue/${no}`,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  return res.data
}
