import Link from "next/link";
import getUsers from "../../../services/getUsers"

export default async function Page(){
    const getUsersList = getUsers();
    const users = await getUsersList;
    console.log(users);
    return(
        <div>
            <h1>Users List with SSG comcept</h1>
            {
                users.map((item)=>(
                  <div key={item.id}>
                      {/* <h3>UserName: {item.name}</h3> */}
                      <Link href={`/userssg/${item.id}`}>{item.name}</Link>
                  </div>  
                ))
            }
        </div>
    )
}