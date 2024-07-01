import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import moment from "moment";
function Post() {
  const { currentUser } = useContext(AuthContext);
  const [post, setPost] = useState({});
  const postId = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/posts/${postId}`
        );
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);
  return (
    <div className="container max-w-6xl p-4 mt-5 relative">
      <div className="content">
        <div>
          <img src={post.img} alt="" />
        </div>
        <div className="content">
          <div className="w-32">
            <img
              src={post.userImg}
              alt=""
              className="w-full"
            />
          </div>
          <div className="usern">
            <span className="font-bold text-white">{post.username}</span>
            <span>{moment(post.date).fromNow()}</span>
            {currentUser.username === post.username && (
              <div className="space-x-3">
                <Link to={`/write?edit=${postId}`}>
                  <button className="bg-[#f6f6f6] px-3 font-semibold rounded-md capitalize">edit</button>
                </Link>
                <button className="bg-[#f6f6f6]  px-3 rounded-md font-semibold capitalize">Delete</button>
              </div>
            )}
          </div>
        </div>
        <h1 className="font-custom text-5xl text-[#f6f6f6]">{post.title}</h1>
        <p className="text-[#f6f6f6] font-sans">
          {post.description}
        </p>
      </div>
    </div>
  );
}

export default Post;
