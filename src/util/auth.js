import { redirectDocument } from "react-router-dom"

export function getToken() {
    const token = localStorage.getItem("token")
    return token
}

export function AuthLogout() {
    localStorage.removeItem("token")
    return redirectDocument("/")
}

export function TokenLoader() {
    return getToken()
}