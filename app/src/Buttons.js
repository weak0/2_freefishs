import './Buttons.css'

const Buttons = (props) => {
    return ( <div className='buttons'><button className="btnPositive" onClick={props.correct}> Y </button> <button className="btnNegative" onClick={props.misstake}> N </button></div> );
}
 
export default Buttons;