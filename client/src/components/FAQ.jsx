import React, { useState } from 'react';



const FAQ = (props) => {
  return (
    <div>
      <h3 className="question">{props.question}</h3>
      <p className="answer">{props.answer}</p>
    </div>
  )
}

export default FAQ