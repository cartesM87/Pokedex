import react from 'react'
import Searcher from '../components/Searcher'
import Header from '../components/Header'
import Footer from '../components/Footer'
function Home() {

  return <>
    <Header />
    <Searcher clases={"md:my-10"} />
    <Footer/>
  </>
}

export default Home
