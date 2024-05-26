import { Link } from "react-router-dom"
import '../styles/GeneralHeader.css'

const GeneralHeader = () => {
  return (


    <header className="header_container">
        <h1 className="header_title"><Link to= '/'><span className="header_title_hotels">Hotels</span> <span className="header_title_app">App</span> </Link></h1>
        <nav className="header_nav">
            <ul className="header_ul">
             <li className="header_item"><Link to='/reservations' >Reservations </Link></li>
             <li className="header_item"><Link to='/register' >Register</Link></li>
             <li className="header_item"><Link to='/login' >Login </Link></li>
             
            </ul>
        </nav>

    </header>
  )
}

export default GeneralHeader 
