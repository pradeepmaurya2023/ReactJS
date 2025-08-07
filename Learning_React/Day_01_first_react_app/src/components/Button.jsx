import './Button.css';

const Button = (props) => {
  return (
    <button type="button" className='btn-class'>{props.text}</button>
  )
}

export default Button