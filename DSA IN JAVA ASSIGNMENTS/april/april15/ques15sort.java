package march;

 //Number Of Sorted Row 
public class ques15sort {

     public static boolean checksorter(int arr[]){
            int i=0;
            while(i<arr.length-1){
                if(arr[i]>arr[i+1]){
                    return false;
                }
                i++;
            }
    
            return true;
        }
    
        public static void main(String args[]){
            int arr[][] = {{1,2,3},{4,0,6},{7,8,9}};
            int count =  0;
            for(int i=0;i<arr.length;i++){
                if(checksorter(arr[i])){
                    count++;
                }
            }
            System.out.println(count);
        }
        
    
    
}
