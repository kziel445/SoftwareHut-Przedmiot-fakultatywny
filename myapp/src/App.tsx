import React from 'react';
import logo from './logo.svg';

import CustomHeader,{ addNumber } from './Components/CustomHeader';
import Counter from './Components/Counter';

const App = () => {
  //const addedNumber = addNumber(1,2);
  const [changeNumber,setChangedNumber]=React.useState(0);
  
  const handleNumberChange = (newNumber: number) => {
    setChangedNumber(newNumber);
  }
  const lowerThanZero = (liczba:number)=>{
    if(liczba<0){return (<div>liczba jest mniejsza od 0</div>)}
  }
  const greaterThanZero = (liczba:number)=>{
    if(liczba>0){return (<div>liczba jest wieksza od 0</div>)}
  }
  const lowerThanMinus10 = (liczba:number)=>{
    if(liczba<-10){return (<div>liczba jest mniejsza od -10</div>)}
  }
  const greaterThan = (liczba:number)=>{
    if(liczba>15){return (<div>liczba przekroczona</div>)}
    if(liczba>10){return (<div>liczba jest wieksza od 10</div>)}
  }
  return (
    <div className="App">
      <CustomHeader>        
        {/* <Counter onNumberChange={(newNumber)=>{ console.log(newNumber) }}/> */}
        <Counter onNumberChange={handleNumberChange} />
        {greaterThanZero(changeNumber)}
        {lowerThanZero(changeNumber)}
        {lowerThanMinus10(changeNumber)}
        {greaterThan(changeNumber)}
      </CustomHeader>
      
        
    </div>
  );
}
export default App;
