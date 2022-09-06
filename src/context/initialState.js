import { fetchUser } from "../utils/localStorage"

const userInfo = fetchUser()
export const initialState = {
    user: userInfo,
}

