import { useEffect, useState } from "react";
import hero from "../assets/hero-bg.webp";
import axios from "axios"
import { Link, useLocation } from "react-router-dom";
function Home() {
  const cat = useLocation().search;
  console.log(cat)

 const [posts, setPosts] = useState([]) ;

 useEffect(()=>{
  const fetchData  =  async ()=>{
    try {
      const response  =  await axios.get(`http://localhost:8800/api/posts${cat}`)
      setPosts(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  fetchData();
 },[cat])
 
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Customizing Apis",
  //     description:
  //       "SQL still stands today, over 50 years after its inception, as one of the most popular ways of interacting with databases. But in those 50 years, the software development landscape has shifted in ways that have catalyzed the popularity of other approaches too.",
  //     img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 2,
  //     title: "SQL vs NoSQL",
  //     description:
  //       "the software development landscape has shifted in ways that have catalyzed the popularity of other approaches too.",
  //     img: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   },
  // ];

  return (
    <>
      <div className="relative h-full w-full">
        <div className="container">
          <div className="bg-opacity-100">
            <img src={hero} alt="" className="w-full" />
          </div>
          <div className="mt-0  px-3 text-center absolute top-0 bottom-0 left-0 right-0 text-[#f6f6f6] flex flex-col justify-center items-center">
            <h2 className="font-custom text-5xl uppercase md:text-7xl font-bold ">
              Nova Notion{" "}
            </h2>
            <p className="text-slate-300 text-sm md:text-lg">
              Exploring forks in the road of software design , documents for
              engineering teams
            </p>
            <span className="underline text-slate-200 ">
              Subscribe for updates
            </span>
          </div>
        </div>
      </div>
      {/* posts */}
      <div className="posts mt-10 p-5 text-[#f6f6f6] space-y-9">
        {/* post */}
        {posts && posts.map((post) => (
          <>
            <div
              className="flex flex-col space-y-2 space-x-0 md:flex-row md:space-x-2 md:space-y-0 "
              key={post.id}
            >
              <div className="md:w-1/3">
                <img className="rounded-lg" src={post.img} alt="" />
              </div>
              <div className="md:px-5 md:w-1/2">
                <Link to={`/post/${post.id}`}>
                  <h2 className="text-white font-custom text-4xl md:text-6xl">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-xs md:text-sm text-[#aaaaaa]">
                  {post.description}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Home;
