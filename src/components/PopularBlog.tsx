import { FaThumbsUp } from "react-icons/fa"
import { FiMessageCircle } from "react-icons/fi"


const PopularBlog = () => {

  const blogs = [
    {
      title:"My amazing Blog title 1",
      author:"Rico",
      likes: 3243434,
      comments: 4345,
    },
    {
      title:"My amazing Blog title 1",
      author:"Jumbo",
      likes: 123443,
      comments: 423,
    },
    {
      title:"My amazing Blog title 1",
      author:"Puerto Rico",
      likes: 9484839,
      comments: 77677,
    },
    {
      title:"My amazing Blog title 1",
      author:"Jump",
      likes: 125676,
      comments: 3456,
    },
    {
      title:"My amazing Blog title 1",
      author:"Beee",
      likes: 657677,
      comments: 9987,
    },
    
  ]

  return (
    <div className="bg-white p-5 w-[23rem] mt-4 border ml-5 rounded">
        <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
        <ul>
          {blogs.map((blog,index)=>(
            <li key={index} className="mb-4">
              <div className=" flex justify-between items-center">
                <span className="font-bold mb-2">{blog.title}</span>

              </div>
              <span className="text-gray-600">Published by {blog.author}</span>
              <div className="flex items-center mt-2">
                <FiMessageCircle size={16}/>
                <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>

                <FaThumbsUp  size={16}/>
                <span className="text-gray-500 mr-2 ml-2">{blog.comments}</span>
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default PopularBlog