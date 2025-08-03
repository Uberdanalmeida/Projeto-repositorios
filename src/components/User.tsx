import type{ UserProps } from "../type/user"
import { MdLocationPin } from 'react-icons/md'
import classes from "./User.module.css"
import { Link } from "react-router-dom"

function User({ avatar_url, login, location, followers, following }: UserProps) {
  
  return (
    <div className="classes.user">
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className="classes.location">
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className="classes.stats">
        <div>
          <p>Seguidores:</p>
          <p className="classes.number">{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className="classes.number">{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver Projetos</Link>
    </div>
  )
}

export default User