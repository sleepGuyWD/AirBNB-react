import React from "react"

export default function Navbar() {
  return (
      <nav>
        <section className="navLeft">
          <img src="./public/assets/react-icon-small.png" alt="" />
          <span className="navTitle">ReactFacts</span>
        </section>
        <section className="navRight">
          <span className="courseTitle">React Course - Project 1</span>
        </section>
      </nav>
    )
}