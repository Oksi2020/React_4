import React, { Component } from 'react';
import './App.css';
import Canvas from './canvas/canvas';

import { ThemeContext } from './context/context.helper';
import { Toggler, TogglerItem } from './context/toggler';
import { Input } from './context/input';
import { ControlledForm } from './controlledForm/controlledForm';
import { List } from './Lists/list'

import Button from './context/button'

class App extends Component {

  state ={
    buttonTheme: '',
    togglerActive: 'red',
    inputTheme: '',
    inputValue: ''
  }

  changeTeamButton = value => _ => {
    this.setState({buttonTheme: value})
  }

  changeTogglerTheme = value => _ => {
    this.setState({togglerActive: value})
  }
  changeInputTheme = value => e => {
    let newValue = e.target.value;
    console.log(newValue)
    this.setState({inputValue: newValue})
    if( newValue ==='red'|| newValue==='purple' || newValue==='lightGreen') {
      this.setState({inputTheme: newValue ,inputValue:''});
    }
  }

  render = () =>{
    let { buttonTheme, togglerActive, inputTheme, inputValue } = this.state;


    return (
      <div className="App">
        {/* <Canvas/> */}
        {/* <ThemeContext.Provider value = {buttonTheme}>
          <Button action = {this.changeTeamButton('red')}>Red</Button>
          <Button action = {this.changeTeamButton('purple')}>Purple</Button>
          <Button action = {this.changeTeamButton('lightgreen')}>Light green</Button>
        </ThemeContext.Provider>

        <ThemeContext.Provider value = {togglerActive}>
          <Toggler 
            name = 'Theme' 
            active = {this.state.togglerActive} 
            action = {this.changeTogglerTheme}
          >
            <TogglerItem value = 'red'>Red</TogglerItem>
            <TogglerItem value = 'purple'>Purple</TogglerItem>
            <TogglerItem value = 'lightGreen'>Light Green</TogglerItem>
          </Toggler>
        </ThemeContext.Provider>
        <ThemeContext.Provider value = {inputTheme}>
          <Input
            data = {{type:'text', value: inputValue, name:'Change theme' }}
            placeholder = 'Write theme please'
            handler =  {this.changeInputTheme}
          ></Input>
        </ThemeContext.Provider> */}
        {/* <ControlledForm></ControlledForm> */}
        <List></List>
      </div>
    );
  }

}

export default App;
