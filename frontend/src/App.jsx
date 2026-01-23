import Header from './components/Header'
import './App.css'
import Login from './components/Login'
import TrendingNow from './components/TrendingNow'
import FeatureComponent from './components/FeatureContainer'

function App() {
  return (
    <>
      <Header></Header>
      <Login></Login>
      <TrendingNow></TrendingNow>
      <FeatureComponent></FeatureComponent>
    </>
  )
}

export default App
