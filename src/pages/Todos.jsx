import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";

const Todos = () => {
    return (
        <div>
            <h1>All Todos</h1>
            <div>
                <TodoTile title={'creating a react app'}/>
                <TodoTile title={'Install Tailwind css '}/>
                <TodoTile title={'Choose a dress for me'}/>
                <TodoTile title={'Get me a phone'}/>
            </div>
         <Link to={'/add'}>Add Todo</Link>

        </div>
    );
}

export default Todos;