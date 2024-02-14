import {useState} from 'react'
import {Heading} from './styledComponents'
const text =
  'Hooks solve a wide vareity of seemingly unconnected problems in react that we have encountered over five years of writing and maintaining tens of thousands of components for curious readers, we have prepared a detailed RFC Hooks allow you to Reuse stateful logic without changing your component herarchy. Hooks work side-by-side with existing code so you can adopt them gradualy.'
const slicedText = text.slice(0, 171)
const ReadMore = () => {
  const [isShow, set] = useState(false)
  const changeIndex = () => set(prevState => !isShow)
  return (
    <div>
      <Heading>React Hooks</Heading>
      <p>Hooks are a new addition to React</p>
      <img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <p>{isShow ? text : slicedText}</p>
      <button onClick={changeIndex}>
        {isShow ? 'Read Less' : 'Read More'}{' '}
      </button>
    </div>
  )
}
export default ReadMore
