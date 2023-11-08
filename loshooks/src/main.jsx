import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './App'
import StateCompo from './StateCompo'
import Footer from './Footer'
import Decrement from './Decrement'
import UseRef from './UseRef'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <StateCompo>
      <center>
    <Header />
    </center>
    <br />
    <br />
    <center>
    <Footer/>
    </center>
    <center>
      <Decrement/>
    </center>
   
    </StateCompo> */}

    <center>
    <UseRef/>
    </center>
  </React.StrictMode>,
)
