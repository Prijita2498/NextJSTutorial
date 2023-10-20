import {redirect} from 'next/navigation'

export default function Page(){
    redirect('/users')
    return(
        <div>
            <h1>Redirection Example</h1>
        </div>
    )
}