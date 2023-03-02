import React from 'react'

function RowImgs(props) {
  return (
    <div className='row-box'>
        <div className='row row-imgs row-grid'>
            <div><img src={props.img1} className='power-icon'/></div>
            <div><img src={props.img2} className='power-icon'/></div>
            <div><img src={props.img3} className='power-icon'/></div>
            <div><img src={props.img4} className='power-icon'/></div>
            <div><img src={props.img5} className='power-icon'/></div>
            <div><img src={props.img6} className='power-icon'/></div> 
        </div>
    </div>
  )
}

export default RowImgs