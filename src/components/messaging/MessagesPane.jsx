import * as React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import AvatarWithStatus from './AvatarWithStatus';
import ChatBubble from './ChatBubble';
import MessageInput from './MessageInput';
import MessagesPaneHeader from './MessagesPaneHeader';

export default function MessagesPane({ chat, socket, user }) {
  const [chatMessages, setChatMessages] = React.useState([]);
  const [textAreaValue, setTextAreaValue] = React.useState(""); 

  // Handle case where chat is null or undefined
  React.useEffect(() => {
    if (chat && chat.messages) {
      setChatMessages(chat.messages);
    }
  }, [chat]);

  // Listen for new messages from WebSocket
  React.useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received WebSocket message:", data); // Debugging log

      if (data.type === 'chat_message' && data.message) {
        setChatMessages((prevMessages) => [...prevMessages, data.message]); 
      }
    };
      
    return () => {
      socket.onmessage = null; // Cleanup listener when unmounting
    };
  }, [socket]);

  // Send Message via WebSocket
  const sendMessage = () => {
    console.log("Current chat state before sending:", chat);

    if (textAreaValue.trim() && chat?.id) {  
        const messageData = {
            chat_id: chat.id,  
            sender: { name: "You" },  // Mock sender for UI
            receiver: chat.id,  // The selected patient's ID should be the receiver
            message: textAreaValue,
        };

        console.log("Sending WebSocket message:", messageData);

        // Update UI immediately
        setChatMessages((prevMessages) => [...prevMessages, messageData]);

        // Send message via WebSocket
        socket?.send(JSON.stringify(messageData));

        // Clear input field
        setTextAreaValue('');
    } else {
        console.log("No patient selected or empty message!");
    }
};




  // Handle case where chat is null
  if (!chat) {
    return <div>Loading chat...</div>; // Show loading state
  }

  return (
    <Sheet
      sx={{
        height: { xs: 'calc(100dvh - var(--Header-height))', md: '100dvh' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.level1',
       
      }}
    >
      <MessagesPaneHeader sender={chat?.sender || { name: "Unknown" }} />

      <Box
        sx={{
          display: 'flex',
          flex: 1,
          minHeight: 0,
          px: 2,
          py: 3,
          overflowY: 'scroll',
          flexDirection: 'column-reverse',
        }}
      >
        <Stack spacing={2} sx={{ justifyContent: 'flex-end' }}>
          {chatMessages.map((message, index) => {
            const isYou = message.sender === user?.id;
            return (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                sx={{ flexDirection: isYou ? 'row-reverse' : 'row' }}
              >
                {message.sender?.online && (
                <AvatarWithStatus online={message.sender.online} src={message.sender?.avatar} />
                )}
            
            <ChatBubble
  key={index}
  content={message.message}
  sender={message.sender}
  variant={message.sender.name === 'You' ? 'sent' : 'received'}
  timestamp={message.timestamp}
/>

              </Stack>
            );
          })}
        </Stack>
      </Box>
      <MessageInput
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
        onSubmit={sendMessage} // Send message on submit
      />
    </Sheet>
  );
}
