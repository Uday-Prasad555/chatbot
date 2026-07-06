import React from 'react';
import {ChatInput} from './components/ChatInput';
import {ChatMessage} from './components/ChatMessage';
import ChatMessages from './components/ChatMessages';
import {Chatbot} from "supersimpledev";
import './App.css';
import dayjs from 'dayjs';
const time=dayjs().format('h:mm A');


function App(){
    React.useEffect(()=>{
        Chatbot.addResponses({
            "??":"?-?",
            "Uday?":"Goat<>"
        })
    
},[])




                const arr = React.useState(JSON.parse(localStorage.getItem('messages')) || []);
                const [data, setData] = arr;
                //const setData=arr[1];
                    React.useEffect(()=>{
                    localStorage.setItem('messages', JSON.stringify(data));
                    

                    },[data]);
                
                return(
                    <div
                    className="app-container">
                    {data.length===0?<p className="no-messages">No messages yet {time}</p>:
                        <ChatMessages 
                        data={data}
                        />
                    }
                        <ChatInput
                            data={data}
                            setData={setData}
                        />
                    </div>)
                }

export default App
