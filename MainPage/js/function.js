cpf.pinreset("[\"resetPin\"],[\"setPinMode\", \"analog\", 0,\"INPUT\"],[\"setPinMode\", \"analog\", 1,\"INPUT\"],[\"setPinMode\", \"analog\", 2,\"INPUT\"],[\"setPinMode\", \"analog\", 3,\"INPUT\"],[\"setPinMode\", \"digital\", 2,\"OUTPUT\"],[\"setPinMode\", \"digital\", 3,\"OUTPUT\"],[\"setPinMode\", \"digital\", 4,\"OUTPUT\"],[\"setPinMode\", \"digital\", 7,\"OUTPUT\"],[\"setPinMode\", \"digital\", 8,\"OUTPUT\"]");

cpf.uireset("[\"uiresetPin\"],[\"analog\", 0,\"INPUT\",\"Moisture Sensor\",\"img-moisture\"],[\"analog\", 1,\"INPUT\",\"Alcohol Sensor(A)\",\"img-alcohol\"],[\"analog\", 2,\"INPUT\",\"Light Sensor\",\"img-ext_lightsensor\"],[\"analog\", 3,\"INPUT\",\"Loudness Sensor\",\"img-loudness\"],[\"digital\", 2,\"OUTPUT\",\"SPDT Relay \",\"img-spdt_relay\"],[\"digital\", 3,\"OUTPUT\",\"SPDT Relay \",\"img-spdt_relay\"],[\"digital\", 4,\"OUTPUT\",\"SPDT Relay \",\"img-spdt_relay\"],[\"digital\", 7,\"OUTPUT\",\"SPDT Relay \",\"img-spdt_relay\"],[\"digital\", 8,\"OUTPUT\",\"SPDT Relay \",\"img-spdt_relay\"]");

var Moisture1, Moisture2, Moisture3, Moisture4;

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



  Moisture1 = MoistureSensorGet();
  Moisture2 = ALACOHOL_Sensor_Get();
  Moisture3 = LightSensorGet();
  Moisture4 = LoundnessSensorGet();
  ui.set("title",'electroNEUterix');
  if (Moisture1 >= 0 && Moisture1 <= 650) {
    cpf.set("D2",1);
    ui.set("D2",1);
    cpf.set("D3",1);
    ui.set("D3",1);
  } else {
    cpf.set("D2",0);
    ui.set("D2",0);
    cpf.set("D3",0);
    ui.set("D3",0);
  }
  if (Moisture2 >= 0 && Moisture2 <= 650) {
    cpf.set("D4",1);
    ui.set("D4",1);
  } else {
    cpf.set("D4",0);
    ui.set("D4",0);
  }
  if (Moisture3 >= 0 && Moisture3 <= 650) {
    cpf.set("D7",1);
    ui.set("D7",1);
  } else {
    cpf.set("D7",0);
    ui.set("D7",0);
  }
  if (Moisture4 >= 0 && Moisture4 <= 650) {
    cpf.set("D8",1);
    ui.set("D8",1);
  } else {
    cpf.set("D8",0);
    ui.set("D8",0);
  }

cpf.repeat();
