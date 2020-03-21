const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class GeekTrust{
    constructor(){
        this.route = new (require('./Orbit'))
        this.getvehicle = new (require('./Vehicle'))
    }
     
    processInput (input)  {
        let weather = input.split(' ')[0] ? input.split(' ')[0].trim().toLowerCase() : ''
        
        let o1 = input.split(' ')[1] ? input.split(' ')[1].trim() : ''
        let o2 = input.split(' ')[2] ? input.split(' ')[2].trim() : ''
        
               var res = this.getOrbit1(weather,o1);
               var res2 = this.getOrbit2(weather,o2);
               if ( res2[2] > res[2])
                {
                console.log(res[0]+ " " + res[1] );
                }
                 else {console.log(res2[0]+ " " + res2[1] );
                }
    }

    getOrbit1 (weather,dspeed) {
        var orb1 = this.route.getOrbit1();
        if(weather == 'sunny')
        {   /*
             Time for Bike
             */
            let superbike = this.getvehicle.getBikeDetails();

            let bikeMaxSpeed = dspeed > superbike.superBikeSpeed ?  superbike.superBikeSpeed : dspeed;

            var bikeTime = ( (Number(orb1.Distance) / bikeMaxSpeed)*60) + ((Number(orb1.NumberOfCraters) - Number((orb1.NumberOfCraters * 10 / 100 )))* superbike.superBikeCrateTime );
            
            //Time for Car

            let supercar = this.getvehicle.getCarDetails();

            let carMaxSpeed = dspeed > supercar.superCarSpeed ? supercar.superCarSpeed : dspeed;

            var carTime =  ( (Number(orb1.Distance) / carMaxSpeed)*60) + ((Number(orb1.NumberOfCraters) - (Number(orb1.NumberOfCraters * 10 / 100 )))* supercar.superCarCrateTime );
            
            // Time for tuktuk

            let superTuktuk = this.getvehicle.getTuktukDetails();

            let tuktukMaxSpeed = dspeed > superTuktuk.superTuktukSpeed ? superTuktuk.superTuktukSpeed : dspeed;

            var tuktukTime = ( (Number(orb1.Distance) / tuktukMaxSpeed)*60) + ((Number(orb1.NumberOfCraters) - (Number(orb1.NumberOfCraters * 10 / 100 )))* superTuktuk.superTuktukCrateTime );

        
                if (bikeTime < carTime && bikeTime < tuktukTime) {

                    return [superbike.superBikeName,  "ORBIT1" , bikeTime ];

                 }
                 else if (carTime < tuktukTime && carTime < bikeTime ) {

                return [supercar.superCarName , "ORBIT1" , carTime ];

                 }
                else {

                    return [superTuktuk.superTuktukName,  "ORBIT1", tuktukTime];
                }
           
        }  
        if(weather == 'rainy')
        {   
            //Time for Car

            let supercar = this.getvehicle.getCarDetails();

            let carMaxSpeed = dspeed > supercar.superCarSpeed ? supercar.superCarSpeed : dspeed;

            var carTime =  ( (Number(orb1.Distance) / carMaxSpeed)*60) + ((Number(orb1.NumberOfCraters) + (Number(orb1.NumberOfCraters * 20 / 100 )))* supercar.superCarCrateTime );
            
            // Time for tuktuk

            let superTuktuk = this.getvehicle.getTuktukDetails();

            let tuktukMaxSpeed = dspeed > superTuktuk.superTuktukSpeed ? superTuktuk.superTuktukSpeed : dspeed;

            var tuktukTime = ( (Number(orb1.Distance) / tuktukMaxSpeed)*60) + ((Number(orb1.NumberOfCraters) + (Number(orb1.NumberOfCraters * 20 / 100 )))* superTuktuk.superTuktukCrateTime );

           
            return tuktukTime > carTime
					?  [supercar.superCarName , "ORBIT1"  ,carTime ]
					:  [superTuktuk.superTuktukName , "ORBIT1" , tuktukTime ];

           
        }  
        if(weather == 'windy')
        {   /*
             Time for Bike
             */
            let superbike = this.getvehicle.getBikeDetails();

            let bikeMaxSpeed = dspeed > superbike.superBikeSpeed ?  superbike.superBikeSpeed : dspeed;

            var bikeTime = ( (Number(orb1.Distance) / bikeMaxSpeed)*60) + ((Number(orb1.NumberOfCraters) * superbike.superBikeCrateTime ));
            
            //Time for Car

            let supercar = this.getvehicle.getCarDetails();

            let carMaxSpeed = dspeed > supercar.superCarSpeed ? supercar.superCarSpeed : dspeed;

            var carTime =  ( (Number(orb1.Distance) / carMaxSpeed)*60) + (Number(orb1.NumberOfCraters) * supercar.superCarCrateTime );
            
            
            return bikeTime > carTime
            ?  [supercar.superCarName , "ORBIT1" ,carTime ]
            :  [superbike.superBikeName, "ORRBIT1" , bikeTime];
        }  
    }
    

    getOrbit2(weather,dspeed) {

        var orb2 = this.route.getOrbit2();
        if(weather == 'sunny')
        {   /*
             Time for Bike
             */
            let superbike = this.getvehicle.getBikeDetails();

            let bikeMaxSpeed = dspeed > superbike.superBikeSpeed ?  superbike.superBikeSpeed : dspeed;

            var bikeTime = ( (Number(orb2.Distance) / bikeMaxSpeed)*60) + ((Number(orb2.NumberOfCraters) - (Number(orb2.NumberOfCraters * 10 / 100 ))* superbike.superBikeCrateTime) );
            
            //Time for Car

            let supercar = this.getvehicle.getCarDetails();

            let carMaxSpeed = dspeed > supercar.superCarSpeed ? supercar.superCarSpeed : dspeed;

            var carTime =  ( (Number(orb2.Distance) / carMaxSpeed)*60) + (((Number(orb2.NumberOfCraters) - (Number(orb2.NumberOfCraters * 10 / 100 )))* supercar.superCarCrateTime ));
           
            // Time for tuktuk

            let superTuktuk = this.getvehicle.getTuktukDetails();

            let tuktukMaxSpeed = dspeed > superTuktuk.superTuktukSpeed ? superTuktuk.superTuktukSpeed : dspeed;

            var tuktukTime = ( (Number(orb2.Distance) / tuktukMaxSpeed)*60) + (((Number(orb2.NumberOfCraters) - (Number(orb2.NumberOfCraters * 10 / 100 )))* superTuktuk.superTuktukCrateTime ));

            if (bikeTime < carTime && bikeTime < tuktukTime) {

                return [superbike.superBikeName, "ORBIT2" , bikeTime ];

             }
             else if (carTime < tuktukTime && carTime < bikeTime ) {

            return [supercar.superCarName ,"ORBIT2" , carTime ];

             }
            else {

                return [superTuktuk.superTuktukName ,"ORBIT2" ,  tuktukTime];
            }
           
        }  
        else if(weather == 'rainy')
        {   
            //Time for Car

            let supercar = this.getvehicle.getCarDetails();

            let carMaxSpeed = dspeed > supercar.superCarSpeed ? supercar.superCarSpeed : dspeed;
            
            var carTime =  ( (Number(orb2.Distance) / carMaxSpeed)*60) + (((Number(orb2.NumberOfCraters) + Number((orb2.NumberOfCraters * 20 / 100 )))* supercar.superCarCrateTime ));
            
            // Time for tuktuk

            let superTuktuk = this.getvehicle.getTuktukDetails();
            
            let tuktukMaxSpeed = dspeed > superTuktuk.superTuktukSpeed ? superTuktuk.superTuktukSpeed : dspeed;
            
            var tuktukTime = ( (Number(orb2.Distance) / tuktukMaxSpeed)*60) + (((Number(orb2.NumberOfCraters) + Number((orb2.NumberOfCraters * 20 / 100 )))* superTuktuk.superTuktukCrateTime) );
             
            return tuktukTime > carTime
					?  [supercar.superCarName,  "ORBIT2" , carTime ]
					:  [superTuktuk.superTuktukName , "ORBIT2" , tuktukTime ];
           
        }  
        else if(weather == 'windy')
        {   /*
             Time for Bike
             */
            let superbike = this.getvehicle.getBikeDetails();

            let bikeMaxSpeed = dspeed > superbike.superBikeSpeed ?  superbike.superBikeSpeed : dspeed;

            var bikeTime = ( (Number(orb2.Distance) / bikeMaxSpeed)*60) + (Number(orb2.NumberOfCraters) * superbike.superBikeCrateTime );
            
            //Time for Car

            let supercar = this.getvehicle.getCarDetails();

            let carMaxSpeed = dspeed > supercar.superCarSpeed ? supercar.superCarSpeed : dspeed;

            var carTime =  ( (Number(orb2.Distance) / carMaxSpeed)*60) + (Number(orb2.NumberOfCraters) * supercar.superCarCrateTime );
           
            return bikeTime > carTime
            ?  [supercar.superCarName  ,"ORBIT2" , carTime ]
            :  [superbike.superBikeName,"ORBIT2" ,  bikeTime];
           
        }  
        
        

    }
    
};


let result = new GeekTrust();
rl.question('What is the weather and speed?  (Weather Orbit1speed Orbit2speed) \n', (input) => {
     result.processInput(input);

     rl.close();
   });
  // Make sure we got a filename on the command line.
// if (process.argv.length < 3) {
    
//     process.exit(1);
//   }
  
//   var fs = require('fs')
//     , filename = process.argv[2];
//   fs.readFile(filename, 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data)
//     result.processInput(data)
    
//   });
