function checkpal(){

 let str = "RRR";
 Var bag1 ='';
 Var bag2 ='';
  
 for(var i=0; i<str.length; i++){
     
     bag1=bag1+str[i];
 }
 for(var j=str.length-1; j>=0; j--){
     
     bag2=bag2+str[j];
 }
  
 if(bag1==bag2){
   
   console.log("Yes palindrome");
  
 }else{
    
   console.log("Not palindrome");

 }
 


}
