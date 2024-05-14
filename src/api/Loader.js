import axios from "axios";

export const loader = async () => { 
    const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    return data;
}

export const getUser = async ({params}) => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    return data;
}