import { BsSearch } from "react-icons/bs"

function Search() {
    return(
        <div>
            <h2>Busque por um usuário</h2>
            <p>Conheça seus Repositorios</p>
            <div>
            <input type="text" name="" id="" placeholder="Busque por um usuário"/>
            <button><BsSearch></BsSearch></button>
            </div>
        </div>
    )
}

export default Search