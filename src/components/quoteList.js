import React from 'react'

import Quote from './quote'

const QuoteList = ({ quotes }) => {
  return (
    <ul>
      {quotes.map((quote, index) => <Quote quote={quote} key={index} />)}
    </ul>
  )
}

export default QuoteList
