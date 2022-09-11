import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import { Component } from 'react'
import News from './components/News';
import Footer from './components/Footer';
import Navbar from './components/Navbar';



export class App extends Component {

constructor(){
 super();
 this.state = {
  backgroundColor:'white',
  color:'black',
  navbar:'dark',
  newsItembg:'white',
  newsItembtn:'dark',
  icons:'white',
  badge:'warning',
  
  
  
 }

}

 darkMode = () =>{

   if(this.state.backgroundColor === 'white'){
     this.setState(
      {  backgroundColor:'#212529',
          color:'white',
          navbar:'light',
          newsItembg:'dark',
          newsItembtn:'light',
          icons:'black',
          badge:'danger',
          
          
          
        }
     )
    
   }
   else{
    this.setState({
      backgroundColor: 'white',
      color: 'black',
      navbar:'dark',
      newsItembg:'light',
      newsItembtn:'dark',
      icons:'white',
      badge:'warning',
     
      
      
      })
      
   }
}




  render() {
    return (
      <Router>
        <div style={this.state}>
          <Navbar navbar={this.state.navbar} darkMode={this.darkMode} />
          {/* <Switch /> */}
          <Routes>
            <Route exact path='/' element={<News key="general" pageArticles={9} category='general' newsItembg={this.state.newsItembg} newsItembtn={this.state.newsItembtn} badge={this.state.badge}/>}/>
            <Route exact path='/technology' element={<News key="technology" pageArticles={9} category='technology' newsItembg={this.state.newsItembg} newsItembtn={this.state.newsItembtn} badge={this.state.badge} />} />
            <Route exact path='/sports' element={<News key="sports" pageArticles={9} category='sports' newsItembg={this.state.newsItembg} newsItembtn={this.state.newsItembtn} badge={this.state.badge} />} />
            <Route exact path='/science' element={<News key="science" pageArticles={9} category='science' newsItembg={this.state.newsItembg} newsItembtn={this.state.newsItembtn} badge={this.state.badge} />} />
            <Route exact path='/entertainment' element={<News key="entertainment" pageArticles={9} category='entertainment' newsItembg={this.state.newsItembg} newsItembtn={this.state.newsItembtn} badge={this.state.badge} />} />
            <Route exact path='/health' element={<News key="health" pageArticles={9} category='health' newsItembg={this.state.newsItembg} newsItembtn={this.state.newsItembtn} badge={this.state.badge} />} />
          </Routes>
          <Footer navbar={this.state.navbar} icons={this.state.icons} />
        </div>
      </Router>
    )
  }
}

export default App
