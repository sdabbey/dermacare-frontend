import * as React from "react";
import { useEffect, useState } from "react";
import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { Box, Chip, IconButton, Input } from "@mui/joy";
import List from "@mui/joy/List";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChatListItem from "./ChatListItem";
import { toggleMessagesPane } from "../../utils/utils";

export default function ChatsPane(props) {
  const { chats, setSelectedChat, selectedChatId } = props;
  const [patients, setPatients] = useState([]);

  // Fetch patients from backend
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/accounts/patients/");
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error("Failed to fetch patient data:", error);
      }
    };

    fetchPatients();
  }, []);

  // Merge patients and chats while ensuring props match ChatListItem expectations
  const mergedChats = patients.map((patient) => {
    const existingChat = chats.find((chat) => chat.id === patient.id);
    return {
      id: patient.id,
      sender: patient.user, // Ensuring 'sender' exists
      messages: existingChat ? existingChat.messages : [], // Ensuring 'messages' exist
      online: existingChat ? existingChat.online : false, // Ensuring 'online' exists
    };
  });
  
  const handleSelectChat = (patient) => {
    setSelectedChat({
        id: patient.id,  // This might be empty for new chats
        sender: patient.name,
        receiverId: patient.id,  // Ensure this is set correctly
        messages: [],
    });
};


  return (
    <Sheet
      sx={{
        borderRight: "1px solid",
        borderColor: "divider",
        height: { sm: "calc(100dvh - var(--Header-height))", md: "100dvh" },
        overflowY: "auto",
      }}
    >
      <Stack direction="row" spacing={1} sx={{ alignItems: "center", justifyContent: "space-between", p: 2, pb: 1.5 }}>
        <Typography component="h1" endDecorator={<Chip variant="soft" color="primary" size="md">{mergedChats.length}</Chip>} sx={{ fontSize: { xs: "md", md: "lg" }, fontWeight: "lg", mr: "auto" }}>
          Messages
        </Typography>
        <IconButton variant="plain" aria-label="edit" color="neutral" size="sm" sx={{ display: { xs: "none", sm: "unset" } }}>
          <EditNoteRoundedIcon />
        </IconButton>
        <IconButton variant="plain" aria-label="edit" color="neutral" size="sm" onClick={toggleMessagesPane} sx={{ display: { sm: "none" } }}>
          <CloseRoundedIcon />
        </IconButton>
      </Stack>
      <Box sx={{ px: 2, pb: 1.5 }}>
        <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" aria-label="Search" />
      </Box>
      <List sx={{ py: 0, "--ListItem-paddingY": "0.75rem", "--ListItem-paddingX": "1rem" }}>
        {mergedChats.length > 0 ? (
          mergedChats.map((chat) => (
            <ChatListItem
                key={chat.id}
                id={chat.id}
                sender={chat.sender}
                messages={chat.messages}
                online={chat.online} // ✅ Ensuring 'online' is provided
                setSelectedChat={setSelectedChat}
                selectedChatId={selectedChatId}
                />

           
          ))
        ) : (
          <Typography sx={{ p: 2 }}>No chats available</Typography>
        )}
      </List>
    </Sheet>
  );
}
