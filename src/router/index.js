import App from "../App";
import TodoList from "../components/todo/Todo-list";
import First from "../components/First";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home-page/Home";
import Game from "../components/puzzle/Game";
import Products from "../components/products/Products";
import Counters from "../components/Counters/Counters";
import Users from "../components/users/Users";
import { getUser, loader } from "../api/Loader";
import User from "../components/users/User";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>Page Not Found</h1>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'todo',
                element: <TodoList />
            },
            {
                path: 'first',
                element: <Counters />
            },
            {
                path: 'puzzle',
                element: <Game />
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'users',
                loader: loader,
                element: <Users />,
                children: [
                    {
                        path: ':id',
                        loader: getUser,
                        element: <User />
                    },
                ]
            },

        ]
    }
]);