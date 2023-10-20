import getUsers from "../../../../services/getUsers"

export default async function Page(props) {
    const getUsersList = getUsers();
    const users = await getUsersList;
    const currentId = props.params.userId;
    const userData = users[currentId - 1];
    console.log(users[currentId - 1]);
    return (
        <div>
            <h3>User Detail Page</h3>
            <h4>ID: {userData.id}</h4>
            <h4>Name : {userData.name}</h4>
            <h4>UserName : {userData.username}</h4>
            <h4>Email : {userData.email}</h4>
        </div>
    )
}

export async function generateStaticParams() {
    const getUsersList = getUsers();
    const users = await getUsersList;
    return users.map(user => ({
        userId: user.id.toString()
    }))
}