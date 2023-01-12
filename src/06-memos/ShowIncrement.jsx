export const ShowIncrement = ({increment}) => {
  
  console.log('Me volvi a generar :(');
  
  return (
    <button
      className="btn btn-success"
      onClick={ ()=>increment() }
    >
      Incrementar
    </button>
  )
}
