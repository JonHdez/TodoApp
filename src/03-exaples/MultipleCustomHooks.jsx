
import { useCounter, useFetch } from '../hooks'; 
import { LoadingQuote, Quote } from './index';
import './styles.css'

export const MultipleCustomHooks = () => {
  
  const {counter, increment,} = useCounter(1);
  const {data, isLoading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${counter}`)
  
  return (
    <>
      <h1>Json Placeholder</h1>
      <hr />

      {
        isLoading 
        ? <LoadingQuote/>
        : <Quote quote = {data.body}/>
      }

      <button className='btn btn-success' disabled={isLoading} onClick={() => increment()}>Next</button>
    </>
  )
}
