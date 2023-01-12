const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del alma',
  done: false
}];

const newTodo = {
  id: 2,
  todo: 'Matar a Iron Man',
  done: false
}

const addTodoAction = {
  type: '[TODO], add todo',
  payload: newTodo
}

const todoReducer = (state = initialState, action = {} ) => {

  if (action.type === '[TODO], add todo') {
    return [...state, action.payload];
  }
  return state
}

let todo = todoReducer();

todo = todoReducer(todo, addTodoAction);

console.log({state: todo})