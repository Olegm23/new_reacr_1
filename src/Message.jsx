import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Message = ({ author, text }) => {
  return (
    <div className='message-text'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant='h5' component="div" color="primary">{author}:</Typography>
          <Typography variant='body2'>{text}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;