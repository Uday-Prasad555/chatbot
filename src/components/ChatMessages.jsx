import React from 'react';
import {ChatMessage} from './ChatMessage';
import './ChatMessages.css';
function useAutoScroll(dependency) {
            const ref = React.useRef(null);
            React.useEffect(() => {
                if (ref.current) {
                    ref.current.scrollTop = ref.current.scrollHeight;
                }
            }, [dependency]);
            return ref;
        }
        export function ChatMessages({data}){
            const messageRef=useAutoScroll(data);
            return(<div className="chat-messages-container" ref={messageRef}>
            {
                data.map((chatMessage) => {
                    return (<ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id} 
                        time={chatMessage.time}/>);
                })
            }</div>)

        }
 export default ChatMessages;