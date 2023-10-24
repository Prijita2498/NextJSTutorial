export default function Page(){

    //Will display all the environment variables of the system.
    console.log(process.env)
    //Will display the environment variable of the node modules.
    console.log(process.env.NODE_ENV);
    //Accessing custom environment variable
    console.log(process.env.SERVER_PASSWORD)
    return(
        <div>
            {
                process.env.NODE_ENV=="development"?
                <h1>You are in development mode</h1>
                : <h1>You are in Production mode</h1>
            }
            <h1>Environment Variable</h1>
        </div>
    )
}