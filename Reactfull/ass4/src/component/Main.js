const Main = (props) => {
  
      return(
        <>
            <div className="text">
            <div className="color_box" style={{backgroundColor: props.color,height:200}}>
            </div>
            <div className="color-element">
                <h5>{props.color}</h5>
                  <p style={{fontSize:"20px",color: props.color,fontWeight:"bold"}}>{props.name}</p>
              </div>
            </div>
          </>
      )
  }
  
  export default Main;