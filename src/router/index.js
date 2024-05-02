import App from "../App";
import TodoList from "../components/todo/Todo-list";
import First from "../components/First";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home-page/Home";
import Game from "../components/puzzle/Game";
import Products from "../components/products/Products";

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
                element: <First />
            },
            {
                path: 'puzzle',
                element: <Game />
            },
            {
                path: 'products',
                element: <Products />
            },
        ]
    }
]);