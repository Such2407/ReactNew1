import React from 'react'

function Card(props) {
  return (
    <div className='card-box'>
        <div><img src={props.img} className={props.isBigIcon ? 'card-imgs' : 'card-imgs2'}/></div>
        {props.header1 &&<div className='card-header'>{props.header1}</div>}
        {props.header2 &&<div className='card-header'>{props.header2}</div>}
        <div className='card-para'>{props.para}</div>
        {!props.isBigIcon &&<div className='share-holders-row'>
          <img src={props.shareHolderImg} className='share-holders'/>
          <idv className="share-holders-name-box">
            <div className='share-holders-name'>{props.shareHolderName}</div>
            <div className='share-holders-position'>{props.shareHolderPosition}</div>
          </idv>
        </div>}

    </div>
  )
}

export default Card