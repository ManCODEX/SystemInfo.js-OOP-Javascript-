
 "use strict";

// Master Class
class laptopSystem{
    constructor(screensize, webcam, operatingSystem, batteryType){
        this.screensize = screensize;
        this.webcam = webcam;
        this.operatingSystem = operatingSystem;
        this.batterType = batteryType;
    }
    

  systemspecs(){
        return ` your system specifications are \n 
                Screen Size: ${this.screensize} \n
                Operating Sytem: ${this.operatingSystem}\n
                Battery Type: ${this.batterType}\n`;             
    }
}

   // Sub-Class
class BrandedSystem extends laptopSystem{
    
    constructor ( brandname, processor, bodytype, chargingport,screensize, webcam, operatingSystem, batteryType){

        super(screensize, webcam, operatingSystem, batteryType );
        this.brandname = brandname;
        this.proccessor = processor;
        this.bodytype = bodytype;
        this.chargingport = chargingport;
        
    }

      //This Function adds a unique greeting to any brandname
    
    systemspecs(){
        super.systemspecs();
    }
    
    greet(message){
        return message;
    }
    
}
  
     let Apple = new BrandedSystem('Apple', 'octa-core','stell','usb-mode','1650 by 750','1080Mpixels','ios','Leadpower');
      console.log (Apple.greet('Hello am Apple and i am reliable and good for programmers,below are my specifications'));  
       Apple;
  