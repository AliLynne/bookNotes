import React from 'react'

import './quote.css'

const Quote = (props) => {
  const quote = props.quote
  return (
    <div className="quote">
      <blockquote>"{quote.content}" - Page {quote.page}</blockquote>
      <div className="quote__detail">

        <p>My thoughts: </p>
        <p>{quote.comment}</p>
      </div>

    </div>
  )
}

export default Quote
