import { useCallback, useEffect, useState } from 'react'
import { Moon, Sun } from '../icons'
import './Header.css'

export function Header() {
  const localTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(localTheme)
  const isThemeDark = theme === 'dark'

  const setMode = useCallback(mode => {
    localStorage.setItem('theme', mode)
    document.body.classList.toggle('dark', isThemeDark)
    setTheme(mode)
  }, [isThemeDark])

  const onClick = () => setMode(isThemeDark ? 'light' : 'dark')

  useEffect(() => {
    if (window.matchMedia && !localTheme) {
      const userPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      setMode(userPrefersDark ? 'dark' : 'light')
    } else if (localTheme) {
      setMode(localTheme)
    } else {
      setMode('light')
    }
  }, [localTheme, setMode])

  return (
    <header>
      <div className="wrapper">
        <div>
          <h1>
            <a href="/" className="brand">
              Mireille Campourcy
            </a>
          </h1>
          <p>Javascript developer</p>
        </div>
        <button onClick={onClick} name="switch-theme" type="button">
          {isThemeDark ? <Sun /> : <Moon />}
          <span>Passer en thème {isThemeDark ? 'clair' : 'foncé'}</span>
        </button>
      </div>
    </header>
  )
}
