import './Counter.css'

const Counter = (props) => {
    return ( <div><label>Twoje odpowiedzi </label> <span>Poprawne: {props.state.corects}</span> <span>Błędne: {props.state.wrongs}</span></div> );
}
 
export default Counter;