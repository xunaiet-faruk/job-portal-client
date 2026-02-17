import {
    createBrowserRouter,

} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Homepages from "../layout/Homepages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children : [
            {
                index : true,
                element : <Homepages/>
            }
        ]
    },
]);