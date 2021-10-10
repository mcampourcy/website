import { bool, string } from 'prop-types'

export function ArrowLeft({ hidden, title }) {
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
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

ArrowLeft.propTypes = {
  hidden: bool,
  title: string,
}

ArrowLeft.defaultValue = {
  hidden: false,
  title: undefined,
}
