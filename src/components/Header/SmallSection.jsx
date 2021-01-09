import React from 'react'

function SmallSection(props) {
    return (
        <div className='question_wrap'>
            <span className='qstnIcon'>{props.icon}</span>
            
            <div className='questionText_wrap'>
            <p>{props.txt_headrOne}</p>
            <p>{props.txt_headrTwo}</p>
            </div>
          </div>
    )
}

export default SmallSection
