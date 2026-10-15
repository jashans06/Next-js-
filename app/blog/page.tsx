import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { Suspense } from "react";

async function getBlogs() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    return response.data;
}

export default function Blogs() {
    return (
        <Suspense fallback={<div>Loading blogs...</div>}>
            <BlogList />
        </Suspense>
    );
}

async function BlogList() {
    const blogs = await getBlogs();

    return <div>
        {blogs.map((blog: ITodo) => <Todo title={blog.title} completed={blog.completed} key={uuidv4()}/>)}
    </div>
}

interface ITodo {
    title: string;
    completed: boolean;
}

function Todo({title, completed}: ITodo) {
    return <div>
        {title} {completed ? "done!" : "not done!"}
    </div>
}