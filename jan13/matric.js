const matrixOne = [  [4, 3, 2, 4],
                     [9, 1, 5, 6],   
                     [2, 7, 9, 8], 
                     [8, 5, 2, 0], 
                     ];
                    let sum=x(matrixOne);
                      function x([]){
                        let sum=0;
                        
                        for(i=0;i<4;i++){
                            for(j=0;j<4;j++){
                                if(i==j){
                                    sum=sum+matrixOne[i][j];
                                }
                            }
                        }
                        return sum;
                      }               
                    console.log(sum);
                    document.write(sum);