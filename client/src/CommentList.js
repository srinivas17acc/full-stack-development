import React, { useEffect, useState } from "react";
import axios from "axios";

export default ({ comments })=> {
     const renderedComments = comments.map(Comment => {
        return <li key={Comment.id}>{Comment.content}</li>;
     });

    return <ul>{renderedComments}</ul>;
}