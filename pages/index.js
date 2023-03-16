import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ranjit | FullStack Developer</title>
        <meta name="description" content="I specialize in building responsive web applications by seamlessly
            integrating front-end technologies with back-end technologies." />
        
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
