import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const FooterBanner = ({footerBanner: {
  discount, largeText1, largeText2, saleTime, smallText, midText, buttonText, image, desc
}}) => {
  return (
    // <div className='footer-banner-container'>
    //   <div>
    //     <p className='beats-solo'>{footerBanner.smallText}</p>
    //     <h3>{footerBanner.midText}</h3>
    //     <h1>{footerBanner.largeText1}</h1>
    //     <img src={urlFor(footerBanner.image)} alt="headphones" className='footer-banner-image'/>
    //   </div>
    //   <Link href={"/product/${footerBanner.product}"}>
    //     <button type="button">{footerBanner.buttonText}</button>
    //   </Link>
    //   <div className='desc'>
    //     <h5>Description</h5>
    //     <p>{footerBanner.desc}</p>
    //   </div>
    // </div>
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href="{'/product/${product}'}">
              <button type='button'>{buttonText}</button>
          </Link>
        </div>

        <img src={urlFor(image)}
        className='footer-banner-image'/>
      </div>
    </div>
  )
}

export default FooterBanner
