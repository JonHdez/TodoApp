import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {
  
  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  })

  const onFormSubmit = () => {
    event.preventDefault()
    if ( description.length <= 1 ) return

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description
    }

    onNewTodo(newTodo)
  }
  
  return (
    <form onSubmit={ onFormSubmit }>
      <input
        type="text"
        placeholder="Que Hay que hacer?"
        className="form-control"
        name="description"
        value={ description }
        onChange={ onInputChange }
      />
      <button type="submit" className="btn btn-primary mt-3">
        Agregar
      </button>
    </form>
  );
};
