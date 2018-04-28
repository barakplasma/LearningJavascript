/*
 
 
 Note that this sketch uses LED_BUILTIN to find the pin with the internal LED
*/

int touchSensor = 10;
int sensorReading = 0;

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);     // Initialize the LED_BUILTIN pin as an output
  pinMode(touchSensor, INPUT);
  Serial.begin(115200);
}

// the loop function runs over and over again forever
void loop() {
  sensorReading = digitalRead(touchSensor);

  Serial.println();             // debug value
  if (sensorReading == 1) {
    turnOnLed();
  } else {
    turnOffLed();
  }
}

void turnOnLed () {
  digitalWrite(LED_BUILTIN, LOW);   // Turn the LED on (Note that LOW is the voltage level
                                    // but actually the LED is on; this is because 
                                    // it is active low on the ESP-01)
}

void turnOffLed () {
  digitalWrite(LED_BUILTIN, HIGH);  // Turn the LED off by making the voltage HIGH
}

