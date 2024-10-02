import { useNavigate } from "react-router-dom";

const AddTodo = () => {
   const navigate = useNavigate();

    const saveTodo = (event) => {
        event.preventDefault();
        // post data to do api
        // Go to homepage
        navigate('/');
    }

    return (
        <div>
            <h1>Add A New Todo</h1>
            <form onSubmit={saveTodo}>
                <input type="text" placeholder="Enter Text" required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo; 