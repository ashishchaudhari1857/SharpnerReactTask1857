import { useState } from "react";
import "./index.css";
import "./App.css";
// import x  from './components/Expenseitem'
import Expenseitem from "./components/Expenseitem";
import Userinput from "./components/Userinput";
import Classcompnet from './components/Classcompnet';

function App() {
  const [count, setCount] = useState(0);
  // const obj = {
  //   name: "ashish",
  //   age: 13
  // };
  const User = [
    { name: "ashis", amount: "20" },
    { name: "rakesh", amount: "120" },
    { name: "brother", amount: "200" },
    { name: "kgf", amount: "500" },
    { name: "rrr", amount: "700" }
    
  ];
  const check = ()=>{
    console.log("expenseItems")
    alert("hey bro")
   
  }
  
  const expenseItems = User.map((item, i) => { 
    return <Expenseitem data={item} key={i} />;
  });
  console.log(expenseItems)

  
    

  return (
    <>
     
          {expenseItems}
   <button  onClick={check}> it's me </button>
  
    <Classcompnet></Classcompnet>
      {/* <Expenseitem info={obj} /> */}
      <Userinput />
    </>
  );
}

export default App;
