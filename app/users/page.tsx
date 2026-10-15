import axios from "axios";
import { Suspense } from "react";
import Loader from "./loading";
async function GetUser() {
    const response = await axios.get("http://localhost:3000/api/v1/user/details");
    await new Promise(r => setTimeout(r, 5000))

    const users = response.data;
    return (
        <div>
            User Page <br></br>
            {users.user}
            <br></br>
            {users.email}
        </div>
    )
}

export default function Users() {
    return (
        <Suspense fallback={<Loader />}>
            <GetUser />
            {/* //<Userdetail/> */}
        </Suspense>
    );
}

// async function Userdetail(){
//     const users=await getUser();
//     return(
//         <div>
//             {users.name}
//             {users.email}
//         </div>
//     )
// }