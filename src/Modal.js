import React, { useState } from 'react'

function Modal() {  

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");


    const handleForm = (e)=>{
        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let errMsg = "";
        if (!emailRegex.test(email)) {
            errMsg = "Invalid email. Please check your email address."; 
        }else if(phone.length!==10){
            errMsg = "Invalid phone number. Please enter a 10-digit phone number.";
        }else if(new Date(dob)>=new Date()){
            errMsg = "Invalid date of birth. Date of birth cannot be in future.";
        }

        if(errMsg!==""){
            e.preventDefault();
            alert(errMsg);             
        } 

    };

    function isNumberKey(e) {
        const newValue = e.target.value; 
        if (/^\d*$/.test(newValue)) {
            setPhone(newValue); 
        }
    }

    return (
        <div>
            <h2>Fill Details</h2>
            <form onSubmit={handleForm}>
                <div className="input-group">
                    <label className='label'>Username:</label>
                    <input type="text" id="username" className='input' onChange={(e)=>setUsername(e.target.value)} value={username} required/>
                </div>
                <div className="input-group">
                    <label className='label'>Email Address:</label>
                    <input type="email" id="email" className='input' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                </div>
                <div className="input-group">
                    <label className='label'>Phone Number:</label>
                    <input type="text" id="phone" className='input' maxLength={10} onChange={(e)=>isNumberKey(e)} value={phone} required/>
                </div>
                <div className="input-group">
                    <label className='label'>Date of Birth:</label>
                    <input type="date" id="dob" className='input' onChange={(e)=>setDob(e.target.value)} value={dob} required/>
                </div>
                <div>
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Modal;