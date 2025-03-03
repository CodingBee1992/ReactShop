import { Link, useNavigate } from "react-router-dom"


interface Props {
    id:string,
    title:string,
    image:string,
    price:number,
    
}
const BookCard = ({id,title,image,price}:Props) => {

  const navigate = useNavigate()

  return (
    <div className="border p-4 rounded" onClick={()=> navigate(`/ReactShop/product/${id}`)}>
        {/* <Link to={`/ReactShop/product/${id}`}> */}

        <img src={image} alt={title} className="w-full h-32 object-cover mb-2"/>

        <h2 className="font-bold">{title}</h2>
        <p>${price}</p>

        {/* </Link> */}
        
    </div>
  )
}

export default BookCard