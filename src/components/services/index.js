import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const getProductData = async ()=>{
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return result.data
}

export const  useProductData = ()=>{
      return useQuery({
          queryKey:["product"],
          queryFn:getProductData
      })
}