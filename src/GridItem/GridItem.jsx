import { Link } from 'react-router-dom'
import { string } from 'prop-types'

import './GridItem.css'

export function GridItem({ image, slug, title }) {
  return (
    <figure className="grid-item">
      <Link to={`/website/${slug}`}>
        <img src={`${process.env.PUBLIC_URL}/img/${image}`} alt="" />
        <figcaption>{title}</figcaption>
      </Link>
    </figure>
  )
}

GridItem.propTypes = {
  image: string.isRequired,
  slug: string.isRequired,
  title: string.isRequired,
}
