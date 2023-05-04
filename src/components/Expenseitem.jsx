import styles from "./Expenseitem.module.css";
import "./Expense.css";
import { useState } from "react";
const Expenseitem = (props) => {
  const obj = {
    color: "white",
    fontSize: "20px",
    fontFamily: "Sans-Serif",
  };
  const [Name, setName]= useState(props.data.name)
  //  using state in functional componnet;
  // const  state=useState();
  const [value, setvalue] = useState(1000);
  let [flag, setflag] = useState(true);
    
  // console.log(props.name);
  const show = () => {
    setflag(!flag);
    setName("kriti");
  };
  return (
    <div>
      <h1>{value}</h1>
      {/* inline css */}
      <h1 style={{ color: "red" }}>Expense Items</h1>
      Food Rs 10 <br />
      {/* you can object also */}
      <div style={obj}>
        Petrol Rs 10000
        <br />
      </div>
      Movies Rs 200
       <button onClick={show}>toggle</button>
      {flag === true ? (
        <h1 style={obj}>
         {Name}  {props.data.amount}{" "}
        </h1>
      ) : (
        ""
      )}  
      {/* <h1>{state.value}</h1> */}
      {/* this was a module.css */}
      {/* <h1 className={styles.justtrying}>{props.info.name}</h1> */}
      {/* <h1>{props.name}</h1> */}
      {/* <button onClick={() => setvalue(value + 1)}>click</button>; */}
    </div>
  );
};

export default Expenseitem;
