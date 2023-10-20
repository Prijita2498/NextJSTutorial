async function userList() {
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
}
export default async function Page() {

    let users = await userList();
    console.log(users);
    return (
        <div>
            <h1>User Name List</h1>
            {/* <table className='border'>
                <thead>
                    <tr>
                        <th> First Name</th>
                        <th>Last Name</th>
                        <th>Age (in years)</th>
                        <th>Gender</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index) => (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table> */}
            {
                users.map((user, index) => (
                    <div key={index}><h2>User Name : {user.firstName}</h2></div>
                ))}

        </div>
    )
}