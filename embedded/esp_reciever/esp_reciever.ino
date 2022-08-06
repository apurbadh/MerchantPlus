
void setup() 
{
  Serial.begin(9600);
  
  // put your setup code here, to run once:

}

void loop() {
  boolean messageRead = false;
  while(messageRead == false){
    String message = "";
    if(Serial.available()){
      message = Serial.readString();
      Serial.println("This is the obtained Message ::");
      Serial.println(message);
      }
    }
//  Serial.println(Serial.readString());
  // put your main code here, to run repeatedly:

}
