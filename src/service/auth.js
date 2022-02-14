import axios from "axios"

export async function login(user) {
  const res = await axios.post("here", user)
  return res.data
}