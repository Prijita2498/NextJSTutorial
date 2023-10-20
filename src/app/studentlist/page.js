import Link from 'next/link';
import Student from './[student]/page';

export default function StudentList(){
    const students = ["prijitha","bhavesh","jeel","nidhi","heema"]
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                {
                    students.map((student,index)=>(
                        <li key={index}>
                            <Link href="/studentlist/[name]" as={`/studentlist/${student}`}>{student}</Link>
                        </li>
                    ))
                }
                {/* <li><Link href="/studentlist/prijitha">Prijitha</Link></li>
                <li><Link href="/studentlist/bhavesh">Bhavesh</Link></li>
                <li><Link href="/studentlist/jeel">Jeel</Link></li>
                <li><Link href="/studentlist/nidhi">Nidhi</Link></li>
                <li><Link href="/studentlist/heema">Heema</Link></li>
            */}</ul> 
        </div>
    )
}