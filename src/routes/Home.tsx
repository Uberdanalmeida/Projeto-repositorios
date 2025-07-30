import type { UserProps } from "../type/user"
import { useState } from "react"
import Search from "../components/Search"

function Home() {
    const [user, setUser] = useState<UserProps | null>(null)

    const loadUser = async(userName: string) => {
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json()
        const {url, login, location, seguidores, seguindo} = data

        const userData: UserProps = {
            url,
            login,
            location,
            seguidores,
            seguindo
        }
    }

    return(
        <div>
            <Search loadUser = {loadUser}></Search>
        </div>
    )
}

export default Home