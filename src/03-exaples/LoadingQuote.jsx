import { DotSpinner } from '@uiball/loaders'

export const LoadingQuote = () => {
  return (
    <div className='loading'>
      <DotSpinner size={100} speed={0.9} color="black"/>
    </div>
  )
}
