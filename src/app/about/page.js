'use client'
import { useRouter } from "next/navigation"

const About = () => {
    const router = useRouter()
    return (
        <div>
            <h1 className="heading ">About us Page</h1>
            <button onClick={() => router.push("/about/aboutstudent")}>Go To About Student Page</button>
        </div>
    )
}

export default About