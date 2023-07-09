'use client';
import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"
const baseURL = "http://localhost:3000/";
const RemoveBtn = ({id}) => {
  const router = useRouter();
  const removeTopic = async()=>{
    const isConfirm = confirm("Data can't be recovered later. Are you sure to DELETE!")
    if(isConfirm){
      const res = await fetch(`${baseURL}api/topics?id=${id}`,{
        method: "DELETE"
      });
      if(res.ok){
        router.refresh();
      }
    }
  };
  return (
    <button 
    onClick={removeTopic}
    className="text-red-400">
    <HiOutlineTrash size={28}/>
    </button>
  )
}

export default RemoveBtn