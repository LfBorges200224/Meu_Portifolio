import { ContactPortifolio } from './components/contactPortifolio'
import { FooterPortifolio } from './components/footerPortifolio'
import { HeaderPortifolio } from './components/headerPortifolio'
import { MiddlePortifolio } from './components/middlePortifolio'
import { ProjectsPortifolio } from './components/projectsPortifolio'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  return (
    <>
    <GlobalStyle />
    <HeaderPortifolio />
    <MiddlePortifolio />
    <ProjectsPortifolio />
    <ContactPortifolio />
    <FooterPortifolio />
    </>
  )
}

export default App
