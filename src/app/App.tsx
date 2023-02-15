import { useCallback, useState } from 'react'

import { Container, LogosContainer } from './styles'

function App() {
  const [isDark, setIsDark] = useState<boolean>(false)

  const handleClick = useCallback(() => {
    setIsDark(!isDark)
  }, [isDark])

  return (
    <Container backgroundColor={`${isDark ? 'var(--gunmetal)' : 'var(--slate-gray)'}`}>
      <h1>Vite + React</h1>
      <LogosContainer>
        <img src="/logo.svg" alt="" />
        <img src="/logo-two.svg" alt="" />
      </LogosContainer>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p>Click on the Vite and React logos to learn more</p>
      <button type="button" onClick={handleClick}>{`${isDark ? 'light' : 'dark'}`}</button>
    </Container>
  )
}

export default App
