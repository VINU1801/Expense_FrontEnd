import { Link } from "react-router-dom"

const Header =()=>{
    return(
    
      <div class="header">
    
      <div>logo</div>
      <ul>
     <li><Link to="/home">Home</Link></li>
     <li><Link to="/about">about</Link></li>
     <li><Link to="/contact">contact</Link></li> 
     </ul>
     </div>
    )
  }
  export default Header