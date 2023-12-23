import React from "react"

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location ==="Online") {
    badgeText = "ONLINE"
  }
  return (
    <section className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--img" src={`../public/assets/${props.coverImg}`} alt="cardImg" />
      <section className="bottom">
        <section className="rating--section">
          <img className="star" src="../public/assets/star.png" alt="star" />
          <span className="rating"> {props.stats.rating} </span>
          <span className="review--count">({props.stats.reviewCount}) • </span>
          <span className="country">{props.location}</span>
        </section>
        <span className="title">{props.title}</span>
        <span><span className="bold">From ${props.price}</span> / person</span>
      </section>
    </section>
  )
}