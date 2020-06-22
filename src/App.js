import React, {Component} from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeypadComponent from './components/KeypadComponent';



class App extends Component {
  constructor(){
    super();

    this.state = {
      result: ""
    }
  }

  //The onclick function simple, reads the argument, which is name of the button clicked, and changes the state appropriately depending on the input that is passed.
  onClick = button => {

    if(button === "="){
      this.calculate()
    }

    else if(button === "C"){
      this.reset()
    }

    else if(button === "CE"){
      this.backspace()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  //this.Calculate => Calculate the result of our expression, this is triggered, when “=” button is pressed.
  calculate = () => {
    try {
      this.setState({
        result:(eval(this.state.result) || "") + ""
      })
    }catch(e){
      this.setState({
        result: "error"
      })
    }
  };

  //this.Reset => Clear our output, this is trigered when “C” is pressed.
  reset = () => {
    this.setState({
      result:""
    })
  };


  //this.Backspace => Clear the last character that was pressed. triggered on “CE”.
  backspace = () => {
    this.setState({
      result:this.state.result.slice(0, -1)
    })
  };


  render() {
    return(
      <div>
        <div className = "calculator-body">
          <h1>React Calculator</h1>
          <ResultComponent result={this.state.result}/>
          <KeypadComponent onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}


export default App;