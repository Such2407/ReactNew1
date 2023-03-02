import React from 'react'

function HeaderSec(props) {
  return (
    <div className='header-sec container'>
        {props.para2 &&<div className='header-para'>
            {props.para2}
        </div>}
        {props.header && <div className='big-header'>{props.header}</div>}
        {props.para && <div className='header-para'>
            {props.para}
        </div>}
    </div>
  )
}

export default HeaderSec