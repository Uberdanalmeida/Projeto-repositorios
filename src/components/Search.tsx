type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { useState } from "react"
import { BsSearch } from "react-icons/bs"
import classes from './Search.module.css'

function Search({loadUser}: SearchProps) {

    const [userName, setUserName] = useState("")

    return(
        <div className={classes.search}>
            <h2>Busque por um usuário</h2>
            <p>Conheça seus Repositorios</p>
            <div className={classes.search_container}>
            <input type="text" name="" id="" placeholder="Busque por um usuário" onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={() => loadUser(userName)}><BsSearch></BsSearch></button>
            </div>
        </div>
    )
}

export default Search