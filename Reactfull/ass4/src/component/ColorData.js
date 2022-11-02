
import Main from "./Main";
const ColorData=()=>{
    const colors=
  [
    {
      color:"#FF6663",name:"Pink"
    },
    {  
      color:"#333333",name:"Gray"
    },
    {  
      color:"#000000",name:"Black"
    },
    {  
      color:"#38BB14",name:"Green"
    },
    {
      color:"#C90B0B",name:"Red"
    },
    {
      color:"#FF8000",name:"Orange"
    },
    {
      color:"#FFF500",name:"Yellow"
    },
    {
      color:"#CCCCCC",name:"Light Gray"
    },
    {
      color:"#7E41A2",name:"Purple"
    },
    {
      color:"#C14911",name:"Brown"
    },
  ];
   
  return(
    
    <div>
      {colors.map((e, idx) =>{
        return(
            <Main color={e.color} name={e.name} key={idx}/>  
        )
      })}
    </div>
    
  )
}
export default ColorData;