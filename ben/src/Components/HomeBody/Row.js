import React from 'react'

function Row(props) {
  return (
    <div className='mt'>
        <div className='col'>
                {props.h1 &&<div className='col-h1'>{props.h1}</div>}
                {props.p1 &&<div className='col-p'>{props.p1}</div>}
                {props.p2 &&<div className='col-p'>{props.p2}</div>}
                {props.p3 &&<div className='col-p'>{props.p3}</div>}
                {props.p4 &&<div className='col-p'>{props.p4}</div>}
                {props.p5 &&<div className='col-p'>{props.p5}</div>}
                {props.p6 &&<div className='col-p'>{props.p6}</div>}
                {props.h2 &&<div className='col-h2'>{props.h2}</div>}
                {props.p7 &&<div className='col-p'>{props.p7}</div>}
                {props.h3 &&<div className='col-h3'>{props.h3}</div>}
                {props.p8 &&<div className='col-p'>{props.p8}</div>}
                {props.p9 &&<div className='col-p'>{props.p9}</div>}
                {props.p10 &&<div className='col-p'>{props.p10}</div>}
                {props.p11 &&<div className='col-p'>{props.p11}</div>}
                {props.p12 &&<div className='col-p'>{props.p12}</div>}
                {props.p13 &&<div className='col-p'>{props.p13}</div>}
                {props.isFooter && <div>
                  <div className='col-h4 fh1'>{props.h4}</div>
                  {props.p14 &&<div className='col-p'>{props.p14}</div>}
                  {props.p15 &&<div className='col-p'>{props.p15}</div>}
                  {props.p16 &&<div className='col-p'>{props.p16}</div>}
                  {props.p17 &&<div className='col-p'>{props.p17}</div>}
                </div>}
                
          </div>
    </div>
  )
}

export default Row