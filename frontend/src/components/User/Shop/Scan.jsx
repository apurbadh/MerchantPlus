import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import ShopNavBar from '../NavBar/ShopNavBar'


export default function Scan() {

    const navigate = useNavigate();

    const ws = new WebSocket("ws://127.0.0.1:7071", 'a')

    ws.onopen = () => {
        Swal.fire("Waiting for the connection")
    }

    ws.onmessage =  message => {
        
        if (message.data == "done")
        {
            Swal.fire("Transaction done").then(() => {
                navigate('/shop/dashboard')
            })
            
        }
        console.log(message)
    }

    return<div> 
    <section className='mainshps'>
        <div>
            <ShopNavBar />
        </div>
        
        </section>
        <h2 style={{textAlign: "center", marginTop: "20rem", color: "white", fontSize: "60px" }}>Waiting for the user to scan.... </h2>
        <p style={{ textAlign: "center", color: "black", marginTop: "46%" }}> Waiting for the user to scan....</p>
    </div>
}