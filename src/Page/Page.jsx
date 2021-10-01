import { string } from 'prop-types'

import './Page.css'

export function Page({ image, title }) {
  return (
    <>
      <h1>{title}</h1>
      <section className="section-page">
        <img
          className="item-container img-fluid"
          src={`img/${image}`}
          alt=""
        />
        <p>Blabla</p>
      </section>
    </>
  )
}

Page.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
}
