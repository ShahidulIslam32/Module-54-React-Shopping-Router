import { useEffect, useState } from "react"

const useTshirts = () =>{
    const [tshirts , setTshirts] = useState([])
    useEffect( () => {
        let url =  `https://fakestoreapi.com/products`
        fetch(url)
        .then(res => res.json())
        .then(data => setTshirts(data))
    }, [])
    return [tshirts, setTshirts]
}

export default useTshirts;