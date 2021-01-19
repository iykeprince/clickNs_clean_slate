import React from 'react'

function CatBannerImage(props) {
    return (
        <div className="top_badge">
              <img
                src={props.bannerImageSource}
                className="top_banner_img"
                alt="top_banner_image"
              />
            </div>
    )
}

export default CatBannerImage
