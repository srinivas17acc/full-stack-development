import React, { useEffect, useState } from "react";
import axios from "axios";

export default ({ comments })=> {
  
     const renderedComments = comments.map(comment => {

      let content;
   
      if (comment.status === 'approved') {
        content = comment.content;
      }
 
      if (comment.status === 'pending') {
        content = 'waiting for Moderation'
      }
 
      if (comment.status === 'rejected') {
        content = 'commend has been rejected'
      }
 
        return <li key={Comment.id}>{content}</li>;
     });

    return <ul>{renderedComments}</ul>;
}