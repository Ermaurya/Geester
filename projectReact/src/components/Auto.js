import React, {useState,useEffect} from 'react';
 function Auto(){
    const[data,setData]=useState(5);
   const name=()=>{setData(data+1);
   };
    // useEffact(()=>{
    //     const interval = setInterval(() => {
    
    //             //   setData(data === data.length-1?data+1:data-1);
    //               setData(data => data+1);
    //             }, 2000);
    //              console.log(interval);
    //             return () => clearInterval(interval);
        
          
    // })
    useEffect(() => {
        console.log("count click")
        // return () => {
        //     cleanup
        // };
    }, [data]);
    return(
        <>
            <p> {data}</p>
            <button onClick={name}>update</button>

        </>
    )
}
export default Auto;

console.log("hello")