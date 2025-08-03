import type { UserProps } from "../type/user"
import { useState } from "react"
import Search from "../components/Search"
import Erro from "../components/Erro"
import User from "../components/User"

function Home() {
    const [user, setUser] = useState<UserProps | null>(null)
    const [erro, setErro] = useState(false)

    const loadUser = async (userName: string) => {
        setErro(false)
        setUser(null)

        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json()

        if(res.status === 404) {
            setErro(true)
            return
        }
        
        if (res.ok) {
            const { avatar_url, login, location, followers, following } = data

            const userData: UserProps = {
                avatar_url,
                login,
                location,
                followers,
                following
            }
            setUser(userData)
        } else {
      
            setUser(null);
            console.error('Usuário não encontrado.');
        }
    }

    return (
        <div>
            <Search loadUser={loadUser} />
            {user && <User {...user} />}
            {erro && <Erro />}
        </div>
    )
}

export default Home