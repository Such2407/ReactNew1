import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSec from './HeaderSec'
import Row from './Row'

function LastSsc() {
  return (
    <div className='card-sec'>
        <div className='box'>
            <div className='row sm-row'>
                <HeaderSec
                para2="Try Paystack Now"
                header="Start accepting payments in just 30 minutes"
                />
                <div className='btn-sec'>
                    <div className='hero-btn'>
                        <Link>Create a free accout</Link>
                    </div>
                </div>
            </div>
            <div className='row2 row-grid md-row-grid'>
            <Row 
            isFooter={false}
            h1="Why Paystack"
            p1="Why Choose Paystack"
            p2="Success Rates"
            p4="For Entrepreneurs"
            p5="For Corporates"
            p6="For International Companies"
            p7="For Startups"
            p9="For Fintechs"
            p10="For Schools"
            p11="For Betting"
            />
            <Row 
            isFooter={false}
            h1="Pricing"
            h2="Customers"
            h3="Learn"
            p1="Nigeria"
            p2="Ghana"
            p3="South Africa"
            p7="Testimonials"
            p8="Blog"
            p9="Guides"
            p10="Video Tutorials"
            p11="Decode Fintech"
            p12="Commerce"
            p13="Terminal"
            />
            <Row 
            isFooter={false}
            h1="Developers"
            h2="Community"
            h3="Support"
            p1="Overview"
            p2="Documentation"
            p3="Integrations"
            p4="Status Page"
            p7="Nigeria Logos"
            p8="Help Desk"
            p9="Contact Us"
            p10="Why Was I Debited?"
            />
            <Row 
            isFooter={false}
            h1="About"
            p1="Company"
            p2="Subscribe"
            p3="Compliance"
            p4="Careers"
            p5="Media Kit"
            p6="Privacy & Terms"
            />
            </div>
        </div>
    </div>
  )
}

export default LastSsc