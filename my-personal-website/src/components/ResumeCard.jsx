import './ResumeCard.css'

export default function ResumeCard({ timeFrame, jobTitle, company, bullets }) {
  return (
    <div className='ResumeCard'>
      <div className='leftResume'>
        <h3>{timeFrame}</h3>
      </div>
      <div className='info'>
          <h3>{jobTitle}</h3>
          <h4>{company}</h4>
          <ul>
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
      </div>
    </div>
  )
}
