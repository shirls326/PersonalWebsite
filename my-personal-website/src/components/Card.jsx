import "./Card.css";

export default function Card({projectName, des, imgSrc}) {
  return (
    <div className="projectCard">
      <div className="projectImg">
        <img src={imgSrc} alt="projectImgLarge"/>
      </div>
      <div className="projectText">
        <h2>{projectName}<span className="twinkle"> ✦</span></h2>
        <p>{des}</p>
      </div>
    </div>
  )
}
