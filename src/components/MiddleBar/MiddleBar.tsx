import React from 'react'
import style from './MiddleBar.module.css'

function MiddleBar() {
    return (
        <div  className="middleBar__container">
            <img src="/images/midBarAdvert.png" alt="" className={style.midBarAdvert}/>
        </div>
    )
}

export default MiddleBar
