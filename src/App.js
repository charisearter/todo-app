import { gql, useQuery } from "@apollo/client";

//list todos
const GET_TODOS = gql`
query getTodos {
  todos {
    completed
    created_at
    id
    text
  }
}

`;
//add todos
//toggle todos
//delete todos

function App() {
	const { loading, data } = useQuery(GET_TODOS);
console.log(GET_TODOS)
console.log(useQuery(GET_TODOS))
	if (loading) return <div>"Loading..."</div>;

	return (
		<div className="App">
			{data.todos.map(todo => (
        <p key={todo.id}>
          <span>
            {todo.text}
          </span>
          <button> &times; </button>
        </p>
      ))}
		</div>
	);
}

export default App;
