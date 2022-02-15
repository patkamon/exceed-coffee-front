import axios from 'axios'

async function getEstimateTime() {
  const res = await axios.get(
    `https://ecourse.cpe.ku.ac.th/exceed01/api/get_time`
  )
  return res.data
}
