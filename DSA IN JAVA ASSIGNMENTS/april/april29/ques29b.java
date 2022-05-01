package assimnt4;

class Solution {
    public int calculate(String s) {
        
        s = s.replace(" ", "");
        Stack<Integer> stack = new Stack<Integer>();
        int currentNumber = 0; 
        char operation = '0';
        for(Character c : s.toCharArray()){
            if(Character.isDigit(c)){
                currentNumber = (currentNumber * 10) + (c - '0');
            }
            else{
                if(operation != '0' && operation != '+'){
                    if(operation == '*'){
                        int val = stack.pop(); 
                        currentNumber = currentNumber * val; 
                        operation = '0';
                    }
                    else if(operation == '/'){
                        int val = stack.pop(); 
                        currentNumber = val / currentNumber; 
                        operation = '0';
                    }
                    else{
                        currentNumber = -currentNumber; 
                        operation = '0';
                    }
                }
                stack.push(currentNumber);
                currentNumber = 0; 
                operation = c; 
                    continue;   
            }
        }
         if(operation != '0' && operation != '+'){
                    if(operation == '*'){
                        int val = stack.pop(); 
                        currentNumber = currentNumber * val; 
                    }
                    else if(operation == '/'){
                        int val = stack.pop(); 
                        currentNumber = val / currentNumber; 
                    }
                    else{
                        currentNumber = -currentNumber; 
                    }
                }
                stack.push(currentNumber);
        
        int sum = 0; 
        
        while(!stack.isEmpty()){
            sum+=stack.pop();
        }
        return sum; 
    }
}
