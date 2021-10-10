import { Link } from 'react-router-dom'
import { string } from 'prop-types'
import { ArrowLeft, ExternalLink } from '../icons'

import './Page.css'

export function Page({ codesource, description, image, site, slides, tech, title, video }) {
  return (
    <section className="section-page">
      <img
        className="item-container img-fluid"
        src={`img/${image}`}
        alt=""
      />
      <article>
        <Link to="/website" className="navigation-link">
          <ArrowLeft hidden />
          Retour à la page d&apos;accueil
        </Link>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {tech && (
          <p>
            <strong>Technologies:</strong> {tech}
          </p>
        )}
        {site && (
          <a href={site} className="external-link">
            Voir le site web<ExternalLink title="Lien externe" target="_blank" />
          </a>
        )}
        {slides && (
          <a href={slides} className="external-link">
            Voir les slides<ExternalLink title="Lien externe" target="_blank" />
          </a>
        )}
        {video && (
          <a href={video} className="external-link">
            Voir la vidéo<ExternalLink title="Lien externe" target="_blank" />
          </a>
        )}
        {codesource && (
          <a href={codesource} className="external-link">
            Voir le code source<ExternalLink title="Lien externe" target="_blank" />
          </a>
        )}
      </article>
    </section>
  )
}

Page.propTypes = {
  codesource: string,
  description: string,
  image: string,
  site: string.isRequired,
  slides: string,
  tech: string,
  title: string.isRequired,
  video: string,
}

Page.defaultValue = {
  codesource: undefined,
  description: undefined,
  site: undefined,
  slides: undefined,
  tech: undefined,
  video: undefined,
}
