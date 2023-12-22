import React from "react"

export default function Card(props) {
  return (
    <section className="card">
      <img className="card--img" src={`../public/assets/${props.img}`} alt="cardImg" />
      <section className="bottom">
        <section className="rating--section">
          <img className="star" src="../public/assets/star.png" alt="star" />
          <span className="rating"> {props.rating} </span>
          <span className="review--count">({props.reviewCount}) • </span>
          <span className="country">{props.location}</span>
        </section>
        <span className="title">{props.title}</span>
        <span><span className="bold">From ${props.price}</span> / person</span>
      </section>
    </section>
  )
}