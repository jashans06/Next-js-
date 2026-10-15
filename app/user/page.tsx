import axios from "axios";
import { Suspense } from "react";

 async function GetUser(){
    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
    const users= response.data;
    return(
          <div>
            {users.name}
            {users.email}
         </div>
    )
}

export default function Users(){
        return (
            <Suspense fallback={<div>Loading blogs...</div>}>
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