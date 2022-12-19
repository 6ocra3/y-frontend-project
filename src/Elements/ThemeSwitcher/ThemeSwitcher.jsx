import { useEffect } from 'react';
import s from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = ({theme, setTheme}) => {

  useEffect(() => {
    let th = localStorage.getItem('th');
    if (th == null) {
      localStorage.setItem('th', 'dark')
    } else {
      if (th == 'dark') {
        setTheme('dark')
      } else if (th == 'light') {
        setTheme('light')
      }
    }
  })

  function switchTheme() {
    let th = localStorage.getItem('th');
    if (th == 'dark') {
      setTheme('light')
      localStorage.setItem('th', 'light')
    } else if (th == 'light') {
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