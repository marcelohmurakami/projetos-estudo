import styled from 'styled-components';
import Button from './ui/Button';
import Input from './ui/Input';

const StyledApp = styled.div `
  padding: 3em;
  background-color: red;
`

const H1 = styled.h1 `
  font-size: 3em;
  font-weight: bold;
  background-color: yellow;
`

function App() {
  return (
    <StyledApp>
      <H1>The-Wild-Oasis</H1>
      <Button>Check-in</Button>
      <Button>Check-out</Button>
      <Input></Input>
    </StyledApp>
  )
}

export default App
