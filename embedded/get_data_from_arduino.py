import serial
import time
from websocket import create_connection

def send_data_to_server(rfid_data:str,url:str):
    from websocket import create_connection
    print(rfid_data)
    ws = create_connection("ws://{}/api/rfid_card?card={}".format(url,rfid_data))
    # print "Sending 'Hello, World'..."
    ws.send(str(rfid_data))
    # print(recv)



def connect_with_com(port,url):
    with serial.Serial(port,9600,timeout=1)as con:
        print("Please Put Your RFID Card now ::")
        time.sleep(2)
        data = con.read(10000)
        data = data.decode()
        print("RFID-DATA:"+data)
    send_data_to_server(data,url)

        
if __name__ == "__main__":
    connect_with_com('/dev/ttyACM0','192.168.1.76:8000')


connect_with_com()