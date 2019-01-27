import React, { Component, Children, cloneElement } from 'react';
import Transition from "react-transition-group/Transition";

export default class SlideTransition extends Component {
 constructor(props) {
  super(props);
  // Default style
  this.defaultstyle = {
   // transitionProperty: 'opacity',
   'opacity': '0',
   // 'transform': 'scale(.37) translateX(-100%)',
   // 'z-index': '1',
   transition: `${this.props.duration}ms ease-in-out`
  };
  this.transitionStyle = {
   entering: { 
    'opacity': '1',
    transformProperty: 'scale(1) translateX(-100%)',
    transitionProperty: 'all 0.5s ease- out',
    'color': 'red'
   },
   entered: { 
    transformProperty: 'scale(1) translateX(0%)',
    transitionProperty: 'all 0.5s ease- out',
    'color': 'red'
    // 'opacity': '1'
    // transitionDelay: '700ms' 
   },
   exiting: { 'opacity': '1' },
   exited: { 'opacity': '0' }
  };
 }
 render() {
  return (
   <Transition 
      appear={this.props.appear}
      timeout={this.props.duration} 
      className={this.props.className}
   >
    {/* {this.props.children} */}
    {(status) => {
     if (status === 'exited') return null;
     // 
     return Children.map(this.props.children, (child, idx) => {
      return cloneElement(child, {
       style: Object.assign({}, this.defaultStyle, this.transitionStyle[status])
      });
     });
    }}
   </Transition>
  )
 }
}
