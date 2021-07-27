import React from 'react'
import GetProductIndex from './home/GetProductIndex'
import SlideAndBannerHeader from './home/SlideAndBannerHeader'
const HomePageComponent = () => {
    return (
        <div className="col-12">
            <SlideAndBannerHeader/>
            <GetProductIndex/>

        </div>
    )
}

export default HomePageComponent
