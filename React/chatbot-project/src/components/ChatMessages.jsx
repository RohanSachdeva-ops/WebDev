import { useRef,useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'
function ChatMessages({chatMessages}){

const chatMessagesRef = useRef(null);
useEffect(()=>{
  const containerElem = chatMessagesRef.current;
  if(containerElem) {
    containerElem.scrollTop = containerElem.scrollHeight;
  }
},[chatMessages]);

return (
  <div
    ref = {chatMessagesRef}
    className = "chat-messages-container"
  >
  {
    
      chatMessages.map((chatMessages) => {
        return (
          <ChatMessage 
            message = {chatMessages.message}
            sender = {chatMessages.sender}
            key= {chatMessages.id}
          />
        );
    })}
    </div>
);
}


export default ChatMessages;