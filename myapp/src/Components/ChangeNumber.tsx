import React from 'react';
import logo from '../logo.svg';
import '../App.css';


const ChildComponent: React.FC = () => {  
    return <p>I'm the 1st child!</p>; 
  };

class ParentComponent extends React.Component{
    render(){
        return (
            <h1>Cześć
                <ChildComponent/>
            </h1>
        );
    }
}
const Nani: React.FC = ({ children }) => {
    return (
      <div>
        <p>Custom header</p>
        {children}
      </div>
    );
  };

  export default ChildComponent;