import React from "react";
import { useParams } from "react-router-dom";

const PostPage = ({posts}) => {

 const {id} = useParams()

 const post = posts.find(post => (post.id).toString() === id);
 console.log(post);

 return(
  <main className="postPage">
   <h2>{post.title}</h2>
   <p className="postData">
    {post.datetime}
   </p>
   <p className="postBody">
    {post.body}
   </p>
  </main>
 )


}

export default PostPage;