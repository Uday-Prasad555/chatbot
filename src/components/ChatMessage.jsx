import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';


export function ChatMessage({message,sender,time}){
            /*if using props as parameters message=<props class="message"
            const {message,sender}=props...
            if(sender==="robot"){
            return(
                <div>
                    <img src="robot.png" width="2.5%"></img>
                    {message}
                </div>)}
            else{return(
                <div>
                    {message}
                    <img src="user.png" width="2.5%"></img>
                </div>)

            }*/
            return(
                <div className={sender==="user" ? 'chat-message-user':
                    'chat-message-robot'}>
                    {sender==="robot" && 
                    (<img src={RobotProfileImage} className="chat-message-profile" />)}
                    <div className="chat-message-text">
                        {message}
                        <p className="chat-message-time">{time}</p>
                    </div>
                    {sender === "user" && 
                    (<img id="user-profile" src={UserProfileImage} className="chat-message-profile" />)}
                </div>
            )
            
            ;
        }