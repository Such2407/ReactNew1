import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function DropdownNav(props) {
const [drop, setdrop] = useState(false)
function toggle(){
    console.log(drop);
    setdrop(predrop => !predrop)
}
  return (
    <div>
            <div className='menu'onMouseEnter={toggle} onMouseLeave={()=> setdrop(false)} key={props.id}>
                  {/* {props.img &&<Link to="/"><img src={props.img}/></Link>} */}
                  {props.title &&<Link to={props.path}>{props.title}</Link>}
                  {props.dpIcon && <div className='dropdown-icon'><i className={props.dpIcon}></i></div>}
                  {drop && props.text && <div>{props.text}</div>}
            </div>
            
    </div>
  )
}

export default DropdownNav