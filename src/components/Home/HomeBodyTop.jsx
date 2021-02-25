import React from 'react'
import LeftSideBar from './LeftSideBar'
import MiddleBar from './MiddleBar'
import RightSideBar from './RightSideBar'

function HomeBodyTop() {
    return (
            <div className='hmbcontainer'>
                <div className='grid__Container'>
                    <div className='griditem'>
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
