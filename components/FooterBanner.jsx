import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const FooterBanner = ({footerBanner}) => {
  return (
    <div className='footer-banner-container'>
      <div>
        <p className='beats-solo'>{footerBanner.smallText}</p>
        <h3>{footerBanner.midText}</h3>
        <h1>{footerBanner.largeText1}</h1>
        <img src={urlFor(footerBanner.image)} alt="headphones" className='footer-banner-image'/>
      </div>
      <Link href={"/product/${footerBanner.product}"}>
        <button type="button">{footerBanner.buttonText}</button>
      </Link>
      <div className='desc'>
        <h5>Description</h5>
        <p>{footerBanner.desc}</p>
      </div>
    </div>
  )
}

export default FooterBanner
