import React, { useEffect }  from "react";
import { useState } from "react";



function Count2({countP}) {

    const [count, setCount] = useState(0);

    const increment = () =>{

    const newCount = count + 1;

        setCount(newCount);
    }

    useEffect(() => {

      const count1 = countP

      console.log(count1);
      
      setCount(countP);
      
    }, [countP])
    

    return(
    <div className="App">

    <h2>Count2:{count}</h2>

    <button onClick={increment}>Increment</button>

  </div>
  );

}
export default Count2;