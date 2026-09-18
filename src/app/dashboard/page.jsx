import { headers } from "next/headers";
import { auth } from "../lib/auth"; // path to your Better Auth server instance
import { redirect } from "next/navigation";

const dashboardPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const accountUser = session?.user
    if (!accountUser) {
        redirect('/auth/signin')
    } else {
        return (
            <div>
                <div className="w-70 my-20 mx-auto justify-center items-center"><h1 className="text-2xl font-bold">This is dashboard page</h1></div>
            </div>
        );
    }


};

export default dashboardPage;