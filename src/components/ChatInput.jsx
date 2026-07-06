import React from "react";
import {Chatbot} from 'supersimpledev';
import './ChatInput.css';
import dayjs from 'dayjs';



export function ChatInput({data,setData}){
            const [inputText,setInputText]=React.useState('');
            const [isLoading,SetIsLoading]=React.useState(false);

            function saveInputText(event){
                setInputText(event.target.value);
            }
            async function sendMessage(){
                if(isLoading || inputText===''){
                    return
                }
                SetIsLoading(true);
                setInputText("");
                const newChatMessages=([
                    ...data, {
                        message: inputText,
                        sender: "user",
                        id: crypto.randomUUID(),
                        time: dayjs().format('h:mm A')
                    }
                ])
                setData([
                ...newChatMessages,{
                    message:"Loading",
                    sender:"robot",
                    id:crypto.randomUUID(),
                    time: ''
                }
                
                ]);
                const response=await Chatbot.getResponseAsync(inputText);
                setData([
                    ...newChatMessages, {
                        message: response,
                        sender: "robot",
                        id: crypto.randomUUID(),
                        time: dayjs().format('h:mm A')
                    }
                ])
                SetIsLoading(false);
                
            }
            function checkEnter(event){
                if (event.key==='Enter'){
                    sendMessage()

                }
                else if(event.key==='Escape'){
                    setInputText("");

                }
            }
            
    function cc(){
        setData([]);
    }

            return (
                <div
                className="chat-input-container">
                    <   input type="text" 
                        placeholder="Send a message to chatbot" 
                        size="30"
                        onChange={saveInputText}
                        value={inputText}
                        onKeyDown={checkEnter}
                        className="chat-input"
                    />
                    <button onClick={sendMessage}
                    className="send-button">
                        Send
                    </button>
                    <button onClick={cc}>Clear</button>
                </div>
            );
        }