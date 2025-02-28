import { useEffect, useState } from "react"

interface AuthorProps{
  name:string,
  isFollowing:boolean,
  image:string,
}

const TopSellers = () => {

  const [authors,setAuthors]= useState<AuthorProps[]>([])


  useEffect(()=>{
    const fetchData = async ()=>{
      try{
          const response = await fetch(`https://randomuser.me/api/?results=5`)
          const resData = await response.json()

          const authorData : AuthorProps[] = resData.results.map((user:any)=>({
            name:`${user.name.first} ${user.name.last}`,
            isFollowing: false,
            image:user.picture.medium
          }))

          setAuthors(authorData)
      }catch(error){
        console.error(`Error fetching authors: ${error}`)
      }
    }

    fetchData()
  },[])


  const handleFollowClick =(index:number)=>{
    setAuthors(prevAuthor => prevAuthor.map((author,i)=> i ===index ? {...author, isFollowing: !author.isFollowing} : author))
  }

  return (
    <div className="bg-white p-5 mx-5 mt-[5rem] border w-[23rem] rounded">
      <h2 className="text-xl font-bold mb-5">Top Sellers</h2>

      <ul>
        {authors.map((author,index)=> (
          <li key={index} className="flex items-center justify-between mb-4">
            <section className="flex justify-center items-center">
              <img src={author.image} alt={author.name}  className="w-[25%] h-[25%] justify-center rounded-full"/>
              <span className="ml-4">{author.name}</span>
            </section>

            <button onClick={()=> handleFollowClick(index)} className={`py-1 px-3 rounded ${author.isFollowing ? 'bg-rose-600 text-white' : 'bg-black text-white' }`}>{author.isFollowing ? "Unfollow" : "Follow"}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TopSellers