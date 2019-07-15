setup();
/* [Variable Declarations] */
var moisture_1 = document.getElementById("_moisturedata1");
var moisture_2 = document.getElementById("_moisturedata2");
var moisture_3 = document.getElementById("_moisturedata3");
var moisture_4 = document.getElementById("_moisturedata4");

var mdt1 = document.getElementById("_moisturedatatext1");
var mdt2 = document.getElementById("_moisturedatatext2");
var mdt3 = document.getElementById("_moisturedatatext3");
var mdt4 = document.getElementById("_moisturedatatext4");

var __moisturecpf1;
var __moisturecpf2;
var __moisturecpf3;
var __moisturecpf4;

var __solenoidcpf1;
var __solenoidcpf2;
var __solenoidcpf3;
var __solenoidcpf4;

var tmp1 = true;
var tmp2 = true;
var tmp3 = true;
var tmp4 = true;

function sensor_cycle() {
    if (cpf) {
        /* Moisture Sensor Variables */
        __moisturecpf1 = cpf.get("a0");
        __moisturecpf2 = cpf.get("a1");
        __moisturecpf3 = cpf.get("a2");
        __moisturecpf4 = cpf.get("a3");
        /* Solenoid Variables */
        __solenoidcpf1 = cpf.get("D2");
        __solenoidcpf2 = cpf.get("D3");
        __solenoidcpf3 = cpf.get("D4");
        __solenoidcpf4 = cpf.get("D7");
        /* index.html placeholder texts (to be replaced by data from cpf) */
        document.getElementById("_moisturedata1").innerHTML = __moisturecpf1;
        document.getElementById("_moisturedata2").innerHTML = __moisturecpf2;
        document.getElementById("_moisturedata3").innerHTML = __moisturecpf3;
        document.getElementById("_moisturedata4").innerHTML = __moisturecpf4;

        function SDT(x,y,z) {
            if (x <= 670 && tmp1) {
                // Wet
                y = "I'm currently wet and fine for now!";
                z = false;
            }
            else if (x <= 720 && x >= 671 && tmp1) {
                // Moist
                y = "I'm now moist and starting to dry up.";
                z = false;
            }
            else if (x >= 721 && tmp1) {
                // Dry
                y = "I'm dry and need to be watered.";
                z = true;
            }
        }

        SDT(__moisturecpf1, mdt1, __solenoidcpf1);
        SDT(__moisturecpf2, mdt2, __solenoidcpf2);
        SDT(__moisturecpf3, mdt3, __solenoidcpf3);
        SDT(__moisturecpf4, mdt4, __solenoidcpf4);

    }

}
