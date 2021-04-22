import React from 'react';
import logo from './logo.svg';


import CustomHeader,{ addNumber } from './Components/CustomHeader'
import Counter from './Components/Counter';
import ChildComponent from './Components/ChangeNumber';

const App = () => {
  //const addedNumber = addNumber(1,2);
  const [changeNumber,setChangedNumber]=React.useState(0);
  
  const handleNumberChange = (newNumber: number) => {
    setChangedNumber(newNumber);
  }
  const lowerThanZero = (liczba:number)=>{
    if(liczba<0)
    {
      return (<div>liczba jest mniejsza od 0</div>)
    }
  }
  return (
    <div className="App">
      <CustomHeader>        
        {/* <Counter onNumberChange={(newNumber)=>{ console.log(newNumber) }}/> */}
        <Counter onNumberChange={handleNumberChange}/>
        {
          changeNumber > 0 && (<div> liczba jest wieksza od 0</div>)
        }
        {lowerThanZero(changeNumber)}
      </CustomHeader>
      <ChildComponent></ChildComponent>
      
        
    </div>
  );
}
export default App;
