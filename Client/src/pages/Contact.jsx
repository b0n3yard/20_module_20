import { useState } from "react"

export default function Contact(){
    const [message, setmessage] = useState({
        name: '',
        email: '',
        message: ''
    })
    const[inputvalues, setinputvalues] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleblur = (e) =>{
        const {name, value, id} = e.target
        if(!value){
            setmessage((prevmessage)=>({
                ...prevmessage,
                [name]: `lost focus on ${name}` 

            }))
        
    }else{
        setmessage((prevmessage)=>({
            ...prevmessage,
            [name]: ''
        })
        
    )
}

    }
    
    const handlefocus= ()=>{
        setmessage('')
    }
    const handlechange=(e)=>{
        const {name, value, id} = e.target
        setinputvalues((previnputvalues)=>({
            ...previnputvalues,
            [name]: value
        }))
    }
    return (
        <main>
        <form action="">
            <input id="name" type="text" placeholder="name" name="name" className="border-2 border-black space-y-4" value={inputvalues.name} onChange={handlechange}onBlur={handleblur} onFocus={handlefocus}/>
            <p>{message.name}</p>
            <input id="email" type="text" name="email" placeholder="email" className="border-2 border-black space-y-4" value={inputvalues.email} onChange={handlechange} onBlur={handleblur} onFocus={handlefocus}/>
            <p>{message.email}</p>
            <textarea name="message" id="message" placeholder="message" className="border-2 border-black space-y-4" value={inputvalues.message}cols="30" rows="10" onChange={handlechange} onBlur={handleblur} onFocus={handlefocus}></textarea>
            <p>{message.message}</p>
            <a href="mailto:michaellklein305@gmail.com?subject =Feedback&body = Message"><button>Submit</button> </a>
            


        </form>
        </main>
    )
}