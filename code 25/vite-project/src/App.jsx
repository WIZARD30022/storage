import react from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {

  return (
    <>
      <Navbar/>
      <div className='cards'>
      <Card title = "Card 1" description = "Card 1 description" img = "https://tse1.mm.bing.net/th?id=OIP.Rrqz5_pBIblPFee4tFHF8gHaE7&pid=Api&rs=1&c=1&qlt=95&w=156&h=103"/>
      <Card title = "Card 2" description = "Card 2 description" img = "https://tse1.mm.bing.net/th?id=OIP.cWFY-f2HWyewx55rTukOOgHaEK&pid=Api&rs=1&c=1&qlt=95&w=185&h=103"/>
      <Card title = "Card 3" description = "Card 3 description" img = "https://tse1.mm.bing.net/th?id=OIP.VZ91mJ3dAckMQ1_z-n7z6wHaEK&pid=Api&rs=1&c=1&qlt=95&w=185&h=103"/>
      <Card title = "Card 4" description = "Card 4 description" img = "https://tse4.mm.bing.net/th?id=OIP.r8IqnZvajmcmfws6fDgfvwHaEo&pid=Api&P=0&h=180"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
