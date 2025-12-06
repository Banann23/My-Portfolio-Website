import Navbar from './components/Navbar/Navbar.jsx'
import SettingButton from './components/SettingButton/SettingButton.jsx'
import Header from './components/Header/Header.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import AboutMeCards from './components/AboutMe/AboutMeCards/AboutMeCards.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import { ThemeProvider } from './context/ThemeProvider.jsx'
import LangPopup from './components/LangPopup/LangPopup.jsx'
import CVPopup from './components/CVPopup/CVPopup.jsx'
import Faq from './components/Faq/Faq.jsx'

import './App.css'
import './styles/globals.css'
import './styles/variables.css'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'

function App() {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <LangPopup />
        <CVPopup />
        <Navbar />
        <SettingButton />
        <div id="container">
          <section id="top">
            <Header />
          </section>
          <main> {/* Main content goes here */}
            <section id="about-me"> {/* About Me Section */}
              <AboutMe />
              <AboutMeCards />
            </section>
            <section id="skills"> {/* Skills Section */}
              <Skills />
            </section>
            <section id="projects"> {/* Projects Section */}
              <Projects />
            </section>
            <section id="contact"> {/* Contact Section */}
              <Contact />
            </section>
            <section id="faq"> {/* FAQ Section */}
              <Faq />
            </section>
          </main>
        </div>
        <Footer />
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default App
