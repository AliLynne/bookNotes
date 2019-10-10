import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import QuoteList from '../components/quoteList'
import EventList from '../components/eventList'
import PersonList from '../components/personList'

import books from '../data/booknotes.json'
const IndexPage = () => {
  const [book, setBook] = useState(books.IBMHolocaust)
  return (
    <>
      <Layout>
        <SEO title="Home" />

        <div>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Date Published: {book.datePublished}</p>
          <p>Format: {book.format}</p>
        </div>
        <h3>Notable Quotes</h3>
        <QuoteList quotes={book.quotes} />
        <h3>Notable Events</h3>
        <EventList events={book.timeline} />
        <h3>Notable People</h3>
        <PersonList people={book.people} />
      </Layout >

    </>
  )
}

export default IndexPage
