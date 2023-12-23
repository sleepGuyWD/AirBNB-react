import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'
import data from './data'
import TopFaves from './components/topfaves'


function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })
  
  return (
    <div className="container">
      <TopFaves />
      <Navbar />
      <Hero /> 
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
