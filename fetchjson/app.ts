import Axios from "axios";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// interfaces are used to define the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


axios.get(url)
  .then((res) => {
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
      The Todo with id: ${id}
      Has a title of: ${title}
      Is it completed? ${completed}
    `)
  })
  .catch(console.log);