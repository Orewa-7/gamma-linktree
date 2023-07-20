import { useEffect, useState } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Linktree from "./Pages/Linktree.jsx";


export default function App() {
    const [mouseCoordinate, setMouseCoordinate] = useState({
        x: 0,
        y: 0,
    })

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home mouse={mouseCoordinate} />,
        },
        {
            path: "/linktree",
            element: <Linktree />
        }
    ]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.x / window.innerWidth - 0.5;
            const y = e.y / window.innerHeight - 0.5;
            setMouseCoordinate({
                x,
                y
            })
        }
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])
    return <>
        <RouterProvider router={router} />
    </>
}