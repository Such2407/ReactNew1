import React from 'react'
import HeaderSec from './HeaderSec'
import RowImgs from './RowImgs'

function PoweringSec() {
  return (
    <div className='powering-sec'>
        <div className='box mb'>
            <HeaderSec 
                header="Powering growth for amazing businesses"
                para="Paystack is a growth engine for a new generation of innovative, forward-looking organizations operating in Africa."
            />
            <RowImgs 
                img1="pictures/Air-Peace-Stack-Blue_200305_154114.svg"
                img2="pictures/FilmHouse-Stack-Blue_200304_153641.svg"
                img3="pictures/Piggyvest-Stack-Blue_200304_153734.svg"
                img4="pictures/Ibom-Air-Stack-Blue_200304_154259.svg"
                img5="pictures/kuda-Stack-Blue_200304_154345.svg"
                img6="pictures/Ariiya-Stack-Blue_200304_155307.svg"
            />
            <RowImgs 
                img1="pictures/Dominos-Plain.svg"
                img2="pictures/MTN-Plain.svg"
                img3="pictures/FilmHouse-Stack-Blue_200304_153641.svg"
                img4="pictures/Bolt-Stack-Blue_200304_153027.svg"
                img5="pictures/paystackIcon.png"
                img6="pictures/Smile-Plain_180827_172218.svg"
            />
            <RowImgs 
                img1="pictures/Axa-mansard-_-Plain.svg"
                img2="pictures/paystackIcon.png"
                img3="pictures/GIGM-Plain_180827_172142.svg"
                img4="pictures/IrokoTV-Plain.svg"
                img5="pictures/Smile-Plain_180827_172218.svg"
                img6="pictures/Cowrywise-dark.svg"
            />
        </div>
    </div>
  )
}

export default PoweringSec