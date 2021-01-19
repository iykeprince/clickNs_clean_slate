import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import MiddleBar from '../MiddleBar/MiddleBar'
import RightSideBar from '../RightSideBar/RightSideBar'

function HomeBodyTop() {
    return (
            <div className='hmbcontainer'>
                <div className='grid__Container'>
                    <div class='griditem'>
                    <LeftSideBar className='leftSideBar'/>
                    </div>

                    <div className='griditem'>
                    <MiddleBar  className='middleBar'/>
                    </div>

                    <div className='griditem'>
                    <RightSideBar className='rightSideBar'/>
                    </div>
                </div>
            </div>

    )
}

export default HomeBodyTop
