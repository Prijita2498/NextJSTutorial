const AboutStudent = () =>{
    return(
        <div>
            <h1 className="heading">About Student Page</h1>
        </div>
    )
}

export default AboutStudent

export function generateMetadeta({params}){
    return{
        title:"About Page Title"
    }
}