import React from 'react'
import { Link } from 'react-router-dom'
import { navRight } from './NavItems'
function DropdownText(props) {
        
      
      // const dpN =navRight.map(dp =>{
      //   return{
      //     dp
      //   }
      // })
      // console.log(dpN.leftDrop);
  return (
    <div className='dropdown-text'>
      <div className='row2'>
          <div className={props.leftDrop ===false ? "dp-none" :"drop-left"}>
            <div className='row2 hover-effect'>
              {props.icon1 && <div className='drop-icon'><img src={props.icon1}/></div>}
              <Link className='drop-body'>
                {props.icon1Head && <h3>{props.icon1Head}</h3>}
                {props.icon1Body && <p className='db'>{props.icon1Body}</p>}
              </Link>
            </div>
            <div className='row2 hover-effect'>
              {props.icon2 && <div className='drop-icon'><img src={props.icon2}/></div>}
              <Link className='drop-body'>
              {props.icon2Head && <h3>{props.icon2Head}</h3>}
              {props.icon2Body && <p className='db'>{props.icon2Body}</p>}
              </Link>
            </div>
            <div className='row2 hover-effect'>
            {props.icon3 && <div className='drop-icon'><img src={props.icon3}/></div>}
              <Link className='drop-body'>
              {props.icon3Head && <h3>{props.icon3Head}</h3>}
              {props.icon3Body && <p className='db'>{props.icon3Body}</p>}
              </Link>
            </div>
            <div className='row2 hover-effect'>
            {props.icon4 && <div className='drop-icon'><img src={props.icon4}/></div>}
              <Link className='drop-body'>
              {props.icon4Head && <h3>{props.icon4Head}</h3>}
              {props.icon4Body && <p className='db'>{props.icon4Body}</p>}
              </Link>
            </div>
          </div>
          <div className={props.leftDrop ===false ?'drop-right2' : "drop-right"}>
            {props.rightH1 && <div className='right-h1'>{props.rightH1}</div>}
            {props.rightB1 && <div className='drop-right-text'>{props.rightB1}</div>}
            {props.rightB2 && <div className='drop-right-text'>{props.rightB2}</div>}
            {props.rightB3 && <div className='drop-right-text'>{props.rightB3}</div>}
            {props.rightB4 && <div className='drop-right-text'>{props.rightB4}</div>}
            {props.rightB5 && <div className='drop-right-text'>{props.rightB5}</div>}
            {props.rightB6 && <div className='drop-right-text'>{props.rightB6}</div>}
            {props.rightH2 && <div className='right-h2'>{props.rightH2}</div>}
            {props.rightB7 && <div className='drop-right-text'>{props.rightB7}</div>}
            {props.rightB8 && <div className='drop-right-text'>{props.rightB8}</div>}
            {props.rightB9 && <div className='drop-right-text'>{props.rightB9}</div>}
          </div>
      </div>
    </div>
  )
}

export default DropdownText