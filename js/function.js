/* [Variable Declarations] */
var moisture_1 = document.getElementById("_moisturedata1");
var moisture_2 = document.getElementById("_moisturedata2");
var moisture_3 = document.getElementById("_moisturedata3");
var moisture_4 = document.getElementById("_moisturedata4");

var mdt1 = document.getElementById("_moisturedatatext1");
var mdt2 = document.getElementById("_moisturedatatext2");
var mdt3 = document.getElementById("_moisturedatatext3");
var mdt4 = document.getElementById("_moisturedatatext4");

/*
var __moisturecpf1;
var __moisturecpf2;
var __moisturecpf3;
var __moisturecpf4;
*/

var __solenoidcpf1;
var __solenoidcpf2;
var __solenoidcpf3;
var __solenoidcpf4;

var tmp1 = true;
var tmp2 = true;
var tmp3 = true;
var tmp4 = true;

function setup(){
    if(cpf){
        cpf.setPinMode('["resetPin"],["setPinMode", "analog", 0, "INPUT"],["setPinMode", "analog", 1,"INPUT"],["setPinMode", "digital", 4,"INPUT"]');
    }
}

setup();

function MoistureSensorGet() {
  var MoistureSensorGetValue = cpf.get("A0");
  ui.set("A0", MoistureSensorGetValue);
  return  MoistureSensorGetValue;
}

function ALACOHOL_Sensor_Get() {
  var ALACOHOL_Sensor_GetValue = cpf.get("A1");
  ui.set("A1", ALACOHOL_Sensor_GetValue);
  return  ALACOHOL_Sensor_GetValue;
}

function LightSensorGet() {
  var LightSensorGetValue = cpf.get("A2");
  ui.set("A2", LightSensorGetValue);
  return  LightSensorGetValue;
}

function LoundnessSensorGet() {
  var LoundnessSensorGetValue = cpf.get("A3");
  ui.set("A3", LoundnessSensorGetValue);
  return  LoundnessSensorGetValue;
}

__moisturecpf1 = MoistureSensorGet();
__moisturecpf2 = ALACOHOL_Sensor_Get();
__moisturecpf3 = LightSensorGet();
__moisturecpf4 = LoundnessSensorGet();
ui.set("title",'electroNEUterix');

function sensor_cycle() {
    if(cpf) {
        /* Moisture Sensor Variables */
        /*__moisturecpf1 = cpf.get("a0");
        __moisturecpf2 = cpf.get("a1");
        __moisturecpf3 = cpf.get("a2");
        __moisturecpf4 = cpf.get("a3");*/
        /* Solenoid Variables */
        __solenoidcpf1 = cpf.get("d2");
        __solenoidcpf2 = cpf.get("d3");
        __solenoidcpf3 = cpf.get("d4");
        __solenoidcpf4 = cpf.get("d7");
        /* index.html placeholder texts (to be replaced by data from cpf) */
        moisture_1.innerHTML = __moisturecpf1;
        moisture_2.innerHTML = __moisturecpf2;
        moisture_3.innerHTML = __moisturecpf3;
        moisture_4.innerHTML = __moisturecpf4;

        /*------------*/
        /* [Sensor 1] */
        /*------------*/
        if (__moisturecpf1 <= 670) {
            // Wet
            mdt1.innerHTML = "I'm currently wet and fine for now!";
            __solenoidcpf1 = false;
        }
        else if (__moisturecpf1 <= 720 && __moisturecpf1 >= 671) {
            // Moist
            mdt1.innerHTML = "I'm now moist and starting to dry up.";
            __solenoidcpf1 = false;
        }
        else if (__moisturecpf1 >= 721) {
            // Dry
            mdt1.innerHTML = "I'm dry and need to be watered.";
            __solenoidcpf1 = true;
        }
        /*------------*/
        /* [Sensor 2] */
        /*------------*/
        if (__moisturecpf2 <= 670 ) {
            // Wet
            mdt2.innerHTML = "I'm currently wet and fine for now!";
            __solenoidcpf2 = false;
        }
        else if (__moisturecpf2 <= 720 && __moisturecpf2 >= 671 ) {
            // Moist
            mdt2.innerHTML = "I'm now moist and starting to dry up.";
            __solenoidcpf2 = false;
        }
        else if (__moisturecpf2 >= 721 ) {
            // Dry
            mdt2.innerHTML = "I'm dry and need to be watered.";
            __solenoidcpf2 = true;
        }
        /*------------*/
        /* [Sensor 3] */
        /*------------*/
        if (__moisturecpf3 <= 670 ) {
            // Wet
            mdt3.innerHTML = "I'm currently wet and fine for now!";
            __solenoidcpf3 = false;
        }
        else if (__moisturecpf3 <= 720 && __moisturecpf3 >= 671 ) {
            // Moist
            mdt3.innerHTML = "I'm now moist and starting to dry up.";
            __solenoidcpf3 = false;
        }
        else if (__moisturecpf3 >= 721 ) {
            // Dry
            mdt3.innerHTML = "I'm dry and need to be watered.";
            __solenoidcpf3 = true;
        }
        /*------------*/
        /* [Sensor 4] */
        /*------------*/
        if (__moisturecpf4 <= 670 ) {
            // Wet
            mdt4.innerHTML = "I'm currently wet and fine for now!";
            __solenoidcpf4 = false;
        }
        else if (__moisturecpf4 <= 720 && __moisturecpf4 >= 671 ) {
            // Moist
            mdt4.innerHTML = "I'm now moist and starting to dry up.";
            __solenoidcpf4 = false;
        }
        else if (__moisturecpf4 >= 721 ) {
            // Dry
            mdt4.innerHTML = "I'm dry and need to be watered.";
            __solenoidcpf4 = true;
        }

    }

}

sensor_cycle();
