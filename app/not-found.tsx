"use client"
import { useRouter } from 'next/navigation'


const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <div>Page Not Found</div>
      <button onClick={()=>router.push("/")}>Go Home</button>
      <button onClick={()=>router.back()}>Go Back</button>
    </>
  )
}

export default NotFound