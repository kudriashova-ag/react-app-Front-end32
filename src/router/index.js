import App from "../App";
import TodoList from "../components/todo/Todo-list";
import First from "../components/First";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>Page Not Found</h1>,
        children: [
            {
                path: 'todo',
                element: <TodoList />
            },
            {
                path: 'first',
                element: <First />
            }
        ]
    }
]);