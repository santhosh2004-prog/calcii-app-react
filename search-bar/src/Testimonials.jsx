import React from 'react'
import { useState } from 'react'
import "./index.css"

const Testimonials = () => {
    const [currentindex,setIndex]=useState(0)
     const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];
  const prevclick=()=>{
   setIndex((currentindex+testimonials.length-1)%testimonials.length)
  }
   const nextclick=()=>{
    setIndex((currentindex+1)%testimonials.length)
  }
  return (
    <div className='testimonials'>
        <div className="testimonials-quote">
            {testimonials[currentindex].quote}
        </div>
        <div className="testimonials-author">{testimonials[currentindex].author}
</div>

   <div className="testimonials-nav">
    <button onClick={prevclick} >prev</button>
    <button onClick={nextclick} >next</button>
   </div>
    </div>
  )
}

export default Testimonials