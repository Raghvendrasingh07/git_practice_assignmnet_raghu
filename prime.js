function checkprime(num){
  let fac=0
 for(let i = 0; i <= 10; i++){
   if(num%i==0){
      fac=fac+1
   }
 }
 if(fac===2){
  console.log("prime")}
 else{
  console.log(" not prime")
     }
    

}
checkprime(5);
