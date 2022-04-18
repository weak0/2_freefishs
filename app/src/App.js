import './App.css';
import World from './World'
import TranslateWord from './TranslateWord'
import Buttons from './Buttons'
import Add from './Add'
import Counter from './Counter'
import React from 'react';
import {Component} from 'react'
import Vocublary from './Vocublary'


class App extends Component {


  state = {

    pl: '',
    eng: '',
    corects: 0,
    wrongs: 0,
    showWord: false,
    nClick:0,
    yClick: 0,

  }

  words = [
    {
      id :0,
      pl: 'cygan',
      eng: 'gypsy',
    },
    {
      id :1,
      pl: 'opikować sie',
      eng: 'look after',
    },
    {
      id :2,
      pl: 'truskawka',
      eng: 'strawbery',
    },
    {
      id :3,
      pl: 'żenujący',
      eng: 'embarasing',
    },
    {
      id :4,
      pl: 'chleb',
      eng: 'bread',
    },
    {
      id :5,
      pl: 'mood',
      eng: 'nastój',
    },
    {
      id :6,
      pl: 'sugar',
      eng: 'cukier',
    },
    {
      id :7,
      pl: 'płeć',
      eng: 'sex',
    }
  ]

  choseWorld = () => {
    const index = Math.floor(Math.random() * this.words.length)
    const chosenWorld = this.words.filter( word => word.id === index) 
    const wordEng = chosenWorld[0].eng
    const wordPl = chosenWorld[0].pl

    this.setState({
      pl: wordPl,
      eng: wordEng,
    })
    
  }

  componentDidMount = () => {
    
    this.choseWorld()

  }

  wrongAnwser = () => {
    this.setState({
      nClick: this.state.nClick+1,
      showWord: true
      
    })
    if(this.state.nClick>=1) {
      
      this.setState({
        nClick: 0,
        showWord: false,
        wrongs: this.state.wrongs+1
        
      })
      this.choseWorld()
      
    }
  }

  corectAnswser = () => {
    this.setState({
      yClick: this.state.yClick+1,
      showWord: true
      
    })
    if(this.state.yClick >= 1) {
      
      this.setState({
        yClick: 0,
        showWord: false,
        corects: this.state.corects+1
        
      })
      this.choseWorld()
      
    }
  }


render() {
  return (
    <div className="App"> <div className="logo">Freefishs</div>
    <div className="Vocublary">< Vocublary words = {this.words} /></div>
    <div className="add"><Add /></div>
    <div className="wordbox" >
    < World word={this.state.eng} showWord={this.state.showWord} />
    </div>
    <div className="translatebox" >
    < TranslateWord word={this.state.pl} />
    </div>
    <div>
    < Buttons correct = {this.corectAnswser} misstake = {this.wrongAnwser} />
    </div>
    <div className='counter'> <Counter state={this.state} />
    </div>
    <footer>FreeFishes 1.0 by Maciej Gorzela</footer>
    </div>
  );
}
}

export default App;
