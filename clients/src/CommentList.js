import React, { useEffect, useState } from "react";
import axios from "axios";

export default ({ postId })=> {
     const [comments, setComments] = useState([]);

     const fetchData = async ()=> {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data);
     };

     useEffect(() => {
        fetchData();
     },[]);

     const renderedComments = comments.map(Comment => {
        return <li key={Comment.id}>{Comment.content}</li>;
     });

    return <ul>{renderedComments}</ul>;
}