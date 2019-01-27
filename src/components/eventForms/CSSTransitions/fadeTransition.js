import React, { Component, Children, cloneElement } from 'react'; 
import Transition from "react-transition-group/Transition";

export default class fadeTransition extends Component {
 constructor(props){
  super(props);
  // Default style
  this.defaultstyle = {
   transitionProperty: 'opacity',
   transition: `${this.props.duration}ms ease-in-out`
  };
  this.transitionStyle = {
   entering: {'opacity': '0'},
   entered: { 'opacity': '1', transitionDelay: '700ms'},
   exiting: { 'opacity': '1'},
   exited: { 'opacity': '0'}
  };
 }
  render() {
    return (
      <Transition in={this.props.isOpen} timeout={this.props.duration} >
       {(state) =>{
         if(state === 'exited') return null;

          return Children.map(this.props.children,(child, idx)=>{
            return cloneElement(child, { 
               style: Object.assign({}, this.defaultStyle, this.transitionStyle[state])
            });
         });
       }}
      </Transition>
    )
  }
}
