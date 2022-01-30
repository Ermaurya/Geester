function searchUni(uni){
    url = `http://universities.hipolabs.com/search?country=${uni}`;
        fetch(url)
          .then(res=>{
              res.json().then(
                  data=>{
                      console.table(data); 
                      if(data.length>0){
                          var ptr ="";
                          data.forEach((e)=> {
                              ptr +="<tr>";
                               ptr+="<td>"+e.country+"</td>";
                               ptr+="<td>"+e.name+"</td>";
                          });
                          document.getElementById("data").innerHTML=ptr;
                      }
                  }
              )
          })
       }
          window.onload = () =>{
       const search = document.querySelector("#input");
       search.onkeypress = (event) => {
           searchUni(search.value);
       }
   }