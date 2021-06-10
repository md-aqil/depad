// import logo from './logo.svg';
import Header from "./components/layouts/Header"
import Almuni from './components/layouts/Almuni'
import Footer from "./components/layouts/footer"
import { useState } from "react"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import AllPools from './components/AllPools';
import Home from "./components/Home";
import PresaleVoting from "./components/PresaleVoting";
import Stats from "./components/Stats";
import ApplyForm from './components/ApplyForm';
import Detail from "./components/Detail";
import Modal from './components/modal';



function App() {
  const [mode, setMode] = useState('light');

  return (
    <Router>
      <div className={`${mode}-mode`}>
      <div className="line-image">
        </div>
      <Header setMode={setMode} mode={mode} ></Header>  

        {/* routing */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/de-pad"  component={Home}></Route>
          <Route path="/all-pools" component={AllPools}></Route>
          <Route path="/stats" component={Stats}></Route>
          <Route path="/presale-voting" component={PresaleVoting}></Route>
          <Route path="/form-presale" component={ApplyForm}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Route path="/model" component={Modal}></Route>
        </Switch>
        
       {/* end routing */}

        
       
   
       
        <Footer></Footer>
      </div>
    </Router>
 
  );
}
export default App;
