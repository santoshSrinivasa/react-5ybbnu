import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Login from "./Login.js";

class Welcome extends React.Component
{
  constructor()
  {
    super();
    this.state={name:"ruchi"};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e)
  {
    e.preventDefault();
    this.setState({name:"santosh"});
  }
  render()
  {
    return(
      <div>
      <Login name={this.state.name}/>
      <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

render(<Welcome />,document.getElementById('root'));
