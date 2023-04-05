import { Fullnames, Usernames } from "./types"

// const BACKEND_URL = "http://127.0.0.1:3001"
const BACKEND_URL = "https://2d5bd6a2aefb38b0aa3c0d7d82d51b76.up.railway.app"

export const fetchUsernames = async () => {
  return await fetch(`${BACKEND_URL}/usernames`).then(
    (res) => res.json() as Promise<Usernames>
  )
}

export const fetchFullnames = async () => {
  return await fetch(`${BACKEND_URL}/fullnames`).then(
    (res) => res.json() as Promise<Fullnames>
  )
}
