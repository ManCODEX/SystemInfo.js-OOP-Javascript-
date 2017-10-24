"use strict";

// Master Class
class laptop{
    
    constructor(screensize, webcam, opreratingSystem, batteryType){
        this.screensize = screensize;
        this.webcam = webcam;
        this.operatingSystem = operatingSystem;
        this.battertype = batterytype;
    }
    

  laptopspecs(){
        return ` your laptop specifications are \n 
                Screen Size: ${this.screensize} \n
                webcam : ${this.webcam} \n
                Operating Sytem: ${this.operatingSystem}\n
                Operating Sytem: ${this.batterType}\n`             
    }
}

   // Sub-Class
class brandedSystem extends laptop{
    
    constructor ( brandname, processor, bodytype, chargingport, screensize, webcam, opreratingSystem, batteryType, ){
        super(screensize, webcam, opreratingSystem, batteryType );
        this.brandname = brandname;
        this.agproccessor = processor;
        this.bodytype = bodytype;
        this.chargingport = chargingport;
        
    }
      //This Function adds a unique greeting to any brandname
    
    laptopspecs(){
        super.laptopspecs();
    }
    
    greet(message){
        return message;
    }
    
  
            


let Hp = new brandedSystem('Hp', 'octa-core','steel','usb-mode');
hp.greet('Hello am HP i love .net Apps');