import React from 'react';
import { Avatar, Icon, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
// import FolderIcon from '@mui/icons-material/Folder';

const Chats = ({ name }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar> <Icon /> </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default Chats;