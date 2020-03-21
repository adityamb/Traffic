// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


module.exports = class Orbit{
    constructor(){
    
       this.Orbit1 = {
         NumberOfCraters: '20',
         Distance : '18',
       }
       this.Orbit2 = {
         NumberOfCraters: '10',
         Distance : '20',
       }
    }
       getOrbit1(){
         return this.Orbit1;

       }
       getOrbit2 (){
        return this.Orbit2;
       }
       setOrbit1  (dist,crater)  {
         this.Orbit1.Distance = dist;
         this.Orbit1.NumberOfCraters =crater;
       }
       setOrbit2 (dist,crater)  {
        this.Orbit2.Distance = dist;
        this.Orbit2.NumberOfCraters =crater;
      }
 
};
