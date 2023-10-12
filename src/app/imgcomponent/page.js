import Image from "next/image"
import Profile from '@../../public/vercel.svg'
export default function Page(){

    //console.log(Profile)
    return(
        <main>
            <h1>Image Optimization in Next.js</h1>
            {/* <Image src={Profile}/>
            <img src={Profile.src}/> */}
            <Image 
            src={"https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"}
            width={200} height={200}/>
        </main>
    )
}

export function generateMetadata({params}){
    return{
        title:"Image Component Page Title",
        description : "Img Component demo"
    }
}