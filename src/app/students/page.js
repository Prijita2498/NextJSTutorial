export default function Student(){
    return(
        <main>
            <h1>Student Page</h1>
        </main>
    )
}

export function generateMetadata({params}){
    return{
        title:"Student Component Page Title",
        description : "Student Component description"
    }
}