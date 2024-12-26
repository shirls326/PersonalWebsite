import React from 'react'
import './css/ResumeCard.css'

export default function ResumeCard({timeFrame, jobTitle, des}) {
  return (
    <div className='ResumeCard'>
      <div className='leftResume'>
        <h3>{timeFrame}</h3>
      </div>
      <div className='info'>
          <h3>{jobTitle}</h3>   
          <p>{des}</p>
      </div>

        
    </div>
  )
}
