// import logo from './logo.svg';
import { useState, useEffect } from "react"
import Header from "./components/layouts/Header"
import Almuni from './components/layouts/Almuni'
import Footer from "./components/layouts/footer"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import AllPools from './components/AllPools';
import Home from "./components/Home";
import PresaleVoting from "./components/PresaleVoting";
import Stats from "./components/Stats";
import ApplyForm from './components/ApplyForm';
import Detail from "./components/Detail";
import Modal from './components/modal';
import { EthereumProvider } from "./hooks/ethereum"

function App() {
  const [mode, setMode] = useState('light');
  // const [idoFactory,setIdoFactory] = useState(null)
  
  

  useEffect(() => {
    // getContractManager()
  }, [])
  
  return (
    <EthereumProvider>
    <Router>
      <div className={`${mode}-mode`}>
      <div className="line-image">
        </div>
      <Header
        setMode={setMode} mode={mode} ></Header>  
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/depad"  component={Home}></Route>
          <Route path="/all-pools" component={AllPools}></Route>
          <Route path="/stats" component={Stats}></Route>
          <Route path="/presale-voting" component={PresaleVoting}></Route>
          <Route path="/form-presale" component={ApplyForm}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Route path="/model" component={Modal}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
    </EthereumProvider>
  )
}

function Apps() {
  // const onConnectWallets = async()=>{
  //   const ethereum = window.ethereum
  //   let web3;
  //   if(ethereum ) {
  //     web3 = new Web3(ethereum)
  //     await ethereum.enable()
  //   }else if(window.web3){
  //     web3 = new Web3(window.web3.currentProvider)
  //   }
  //   const accounts = await web3.eth.getAccounts()
  //   //get contract manager instance from contract abi
  //   //after that call ido factory function and get ido address
  //   //take idoabi and address and get ido factory instance
  //   //after that call  create function and get
  //   const idoFactory = new web3.eth.Contract(IIDO_FACTORY_ABI,IIDO_FACTORY_ADDRESS)
  //   setIdoFactory(idoFactory)
  //   console.log("idofactory",idoFactory)
  //   setAccounts(accounts)
  //   // idoFactory.methods.create({tokenContract:"sdjf",tokenPrice:10}).send({ from: accounts[0] })
  //   //     .once('receipt', (receipt) => {
  //   //         console.log("receipt",receipt)
  //   //       this.setState({ loading: false })
  //   //     })
  // }
  
}
export default App;
