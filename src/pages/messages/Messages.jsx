import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import MessagesPane from '../../components/messaging/MessagesPane';
import ChatsPane from '../../components/messaging/ChatsPane';
import axios from 'axios';

export default function Messages() {
  const [chats, setChats] = React.useState([]); // Store chat list
  const [selectedChat, setSelectedChat] = React.useState(null);
  const socketRef = React.useRef(null);

  // Fetch chats from backend
  React.useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve token
  
    axios.get('https://dermacare-group.vercel.app/messaging/messages/', {
      headers: {
        Authorization: `Token ${token}`,
      },
      withCredentials: true, // Ensure cookies are sent if using sessions
    })
      .then(response => {
        setChats(response.data);
        if (response.data.length > 0) {
          setSelectedChat(response.data[0]); // Set first chat
        }
      })
      .catch(error => {
        console.error('Error fetching chats:', error);
      });
  }, []);
  

  // Set up WebSocket connection
  React.useEffect(() => {
    socketRef.current = new WebSocket('ws://127.0.0.1:8080/ws/chat/general/');

    socketRef.current.onopen = () => {
      console.log("✅ WebSocket connected!");
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("📩 WebSocket Message Received:", data); // Debugging

      if (data.type === "chat_message") {
        setChats((prevChats) =>
          prevChats.map(chat =>
            chat.id === data.chat_id
              ? { ...chat, messages: [...chat.messages, data] }
              : chat
          )
        );
      }
    };

    socketRef.current.onclose = () => console.log("❌ WebSocket disconnected");

    return () => {
      socketRef.current.close();
    };
  }, []);

  return (
    <Sheet
      sx={{
        flex: 1,
        width: '100%',
        mx: 'auto',
        pt: { xs: 'var(--Header-height)', md: 0 },
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'minmax(min-content, min(30%, 400px)) 1fr',
        },
      }}
    >
      <Sheet
        sx={{
          position: { xs: 'fixed', sm: 'sticky' },
          transform: {
            xs: 'translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))',
            sm: 'none',
          },
          transition: 'transform 0.4s, width 0.4s',
          zIndex: 100,
          width: '100%',
          top: 52,
        }}
      >
        <ChatsPane
          chats={chats}
          selectedChatId={selectedChat?.id}
          setSelectedChat={setSelectedChat}
        />
      </Sheet>

      {/* Only render MessagesPane if a chat is selected */}
      {selectedChat ? (
        <MessagesPane chat={selectedChat} socket={socketRef.current} />
      ) : (
        <div>Loading chats...</div>
      )}
    </Sheet>
  );
}
