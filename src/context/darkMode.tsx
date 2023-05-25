import { createContext, useState } from 'react'

const darkModeInitialState = {
  darkMode: true,
  setDarkMode: (): void => {}
}

export interface DarkModeInterface {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const DarkmodeContext = createContext<DarkModeInterface>({ ...darkModeInitialState })

interface Props {
  children: React.ReactNode
}

export const DarkModeProvider = ({ children }: Props): JSX.Element => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <DarkmodeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`homepage${darkMode ? '-darkmode' : ''}`}>
        {children}
      </div>
    </DarkmodeContext.Provider>
  )
}
