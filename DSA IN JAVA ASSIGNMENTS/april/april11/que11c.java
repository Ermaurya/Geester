package assim2;

class Compute {
    public String isSubset( long a1[], long a2[], long n, long m) {
       int l=0,k=0;
       for(int i=0;i<n;i++){
           if(k==m)
               {
                   l=1;
                   break;
               }
           if(a1[i]==a2[k]){
              k++;
           }
       }
       if(k==m)
           l=1;
       if(l==1)
           return "Yes";
       else
           return "No";
   


        
    }
}