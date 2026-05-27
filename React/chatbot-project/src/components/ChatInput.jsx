import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css'

export function ChatInput({chatMessages,setChatMessages}){

        const [inputText,setInputText] = useState('');

        function saveInputText(event){
          setInputText(event.target.value);
        }

        function sendMessage(){
          const newChatMessages = [
            ...chatMessages,
            {
              message : inputText,
              sender : 'user',
              id : crypto.randomUUID()
            }
          ]
          setChatMessages (newChatMessages);
          setInputText('');

          const response = Chatbot.getResponse(inputText);

          setChatMessages([
            ...newChatMessages,
            {
              message:response,
              sender:'robot',
              id:crypto.randomUUID()
            }
          ])
        }


        return (
          <div 
            className='chat-input-container'
          >
            <input 
              onChange={saveInputText}
              placeholder = "Send a message to Chatbot" 
              size="30"
              value={inputText}
              className='chat-input'
            />
            <button 
            onClick={sendMessage}
            className='send-button'
            >
            Send</button>
          </div>
        )
      }