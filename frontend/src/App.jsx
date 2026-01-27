import Header from './components/Header'
import './App.css'
import './Media.css'
import Login from './components/Login'
import TrendingNow from './components/TrendingNow'
import FeatureComponent from './components/FeatureContainer'
import FAQ from './components/Faq'
import Footer from './components/Footer'
import SignIn from './components/SignIn'

function App() {
  return (
    <>
      <Header></Header>
      <Login></Login>
      <TrendingNow></TrendingNow>
      <FeatureComponent></FeatureComponent>
      <FAQ></FAQ>
      <Footer></Footer>
      <SignIn></SignIn>
    </>
  )
}

export default App
