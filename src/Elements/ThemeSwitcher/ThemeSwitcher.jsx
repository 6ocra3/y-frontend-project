import { useEffect } from 'react';
import s from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = ({theme, setTheme}) => {

  useEffect(() => {
    let th = localStorage.getItem('th');
    if (th == null) {
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        localStorage.setItem('th', 'light')
        document.body.style.backgroundColor = '#ffffff'
        setTheme('light')
      } else {
        localStorage.setItem('th', 'dark')
        document.body.style.backgroundColor = '#1a1e29'
        setTheme('dark')
      }
    } else {
      if (th == 'dark') {
        document.body.style.backgroundColor = '#1a1e29'
        setTheme('dark')
        localStorage.setItem('th', 'dark')
      } else if (th == 'light') {
        document.body.style.backgroundColor = '#ffffff'
        setTheme('light')
        localStorage.setItem('th', 'light')
      }
    }
  })

  function switchTheme() {
    let th = localStorage.getItem('th');
    if (th == 'dark') {
      document.body.style.backgroundColor = '#ffffff'
      setTheme('light')
      localStorage.setItem('th', 'light')
    } else if (th == 'light') {
      document.body.style.backgroundColor = '#1a1e29'
      setTheme('dark')
      localStorage.setItem('th', 'dark')
    }
  }

  return (
  <div className={s.toggle} onClick={switchTheme}>
    <div className={theme == 'light' ? s.toggle__switch + " " + s.checked : s.toggle__switch}></div>
  </div>
  )
}