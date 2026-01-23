import Header from './components/Header'
import './App.css'
import './Media.css'
import Login from './components/Login'
import TrendingNow from './components/TrendingNow'
import FeatureComponent from './components/FeatureContainer'
import FAQ from './components/Faq'

function App() {
  return (
    <>
      <Header></Header>
      <Login></Login>
      <TrendingNow></TrendingNow>
      <FeatureComponent></FeatureComponent>
      <FAQ></FAQ>
    </>
  )
}

export default App
