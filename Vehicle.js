// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


module.exports = class Vehicle{
    constructor(){

     this.Car ={
      superCarName :"CAR",
	  superCarSpeed : "20",
	  superCarCrateTime : "3",
	  superCarWeather : ["Sunny", "Rainy", "Windy" ],
	 }
	 this.Bike ={
	 	superBikeName : "BIKE",
	 	 superBikeSpeed : "10",
	 	superBikeCrateTime : "2",
		 superBikeWeather :  [ "Sunny", "Windy"]
	 }
	 this.Tuktuk = {

		superTuktukName : "TUKTUK",
		superTuktukSpeed : "12",
		superTuktukCrateTime : "1",
		superTuktukWeather :  [ "Sunny", "Rainy" ],
	 }
	}
     getCarDetails() {
        return this.Car;
	}
	 
	 setCarDetails  (carname,speed,cratetime,) {
		 this.superCarSpeed = speed ;
		 this.superCarCrateTime = cratetime;
		 this.superCarName = carname;
	 }
	 
	
	 getBikeDetails  () {
		return this.Bike;
	}
	
	setBikeDetails (bikename,speed,cratetime)  {
		this.superCarSpeed = speed ;
		this.superBikeName = bikename;
		this.superBikeCrateTime = cratetime;
	}
	
	getTuktukDetails(){
		return this.Tuktuk;
	}
	
	setTuktukDetails  (tuktukname,speed,cratetime)  {
		this.superTuktukSpeed = speed ;
		this.tuktukcratetime = cratetime;
		this.tuktukname = tuktukname;
	}
	

};



