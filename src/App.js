import { useState } from "react";
import Count2 from "./Count2";

  
function App() {
 
  const [count, setCount] = useState(0);

  const increment = () =>{

    const newCount = count + 1;

    setCount(newCount);
  }

  return (
    <div className="App">

      <h2>Count:{count}</h2>

      <button onClick={increment}>Increment</button>

      <Count2 countP={count} />
    </div>
  );

}

export default App;
