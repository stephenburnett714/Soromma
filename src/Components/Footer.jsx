import React from 'react'
import date from 'date-and-time';


export default function Footer() {
    const now = new Date();
     const year = date.format(now, 'YYYY');
    return(
        <div className="footer">
                <div className="footer-text">©2020 - {year} Soromma Technologies, LLC. All Rights Reserved.</div>
        </div>
    )
}