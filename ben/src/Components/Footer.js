import React from 'react'
import Row from './HomeBody/Row'

function Footer() {
  return (
    <div className='box'>
        <div className='footer'>
        <div className='hr'></div>
        <div className='row2 sm-row md-row-grid'>
            <div className='mt'>
                <div className='col'>
                    <div className='col-h1'>Contact</div>
                    <div className='col-fp'>hello@paystack.com</div>
                    <div className='row small-row'>
                        <i class="fa-brands fa-facebook media-icon"></i>
                        <i class="fa-brands fa-twitter media-icon ms"></i>
                        <i class="fa-brands fa-instagram media-icon ms"></i>
                        <i class="fa-brands fa-linkedin media-icon ms"></i>
                        <i class="fa-brands fa-square-youtube media-icon ms"></i>
                    </div>
                </div>
            </div>
            <Row 
            isFooter={true}
            h1="Lagos"
            p1="126 Joel Ogunnaike Street,"
            p2="Ikeja GRA, Ikeja,"
            p3="Lagos, Nigeria"
            p4="+234 163 16160"
            h4="Accra"
            p14="AfricaWorks,"
            p15="35 Patrice Lumumba Road,"
            p16="Airport Residential Area,"
            p17="Accra, Ghana"
            />
            <Row 
            isFooter={true}
            h1="San Francisco"
            p1="354 Oyster Point Blvd.,"
            p2="South San Francisco,"
            p3="CA 94080"
            p4="United States"
            h4="Dubai"
            p14="Office 215,"
            p15="Building 3,"
            p16="Dubai Internet City, Dubai,"
            p17="United Arab Emirates"
            />
            <Row 
            isFooter={true}
            h1="Cape Town"
            p1="Wework (1st Floor),"
            p2="80 Strand Street,"
            p3="Cape Town City Centre,"
            p4="Cape Town, 8001,"
            h4="Johannesburg"
            p14="South Africa"
            p15="45 Kingfisher Drive,"
            p16="Fourways,"
            p17="Johannesburg,"
            />
            
            
        </div>
        </div>
    </div>
  )
}

export default Footer