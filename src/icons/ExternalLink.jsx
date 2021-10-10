import { bool, string } from 'prop-types'

export function ExternalLink({ hidden, title }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={hidden}
      focusable="false"
    >
      {title && <title>{title}</title>}
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

ExternalLink.propTypes = {
  hidden: bool,
  title: string,
}

ExternalLink.defaultValue = {
  hidden: false,
  title: undefined,
}
