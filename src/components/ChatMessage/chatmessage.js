import React from "react";
import './chatMessage.css'
import Avatar from "../../assets/avatar";

//  user (user / chatgpt)
// message - aonde vai estar o prompt

//{
 //   user: 'gpt'
  //  message: 'crie um nome de artigo'
//}
export const chatMenssage = ({message})=> {
    return (
   <div className ={ 
    `chat-message $ {message.user ==='gpt' } &&  "chatgpt"`}
    >
       
        <div className= "chat-massege-center"> 
            <div className= { 
                `avatar 
                ${message.user=== 'gpt'&& "chatgpt"}` }
                > 
            
            </div>
            
             <div className="message">
                {message.message}
             </div>
       
 </div>
 </div>
    )
}