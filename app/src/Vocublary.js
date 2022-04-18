import './Vocublary.css'


const Vocublary = (props) => {

const words = props.words
const vocublary = () => words.map( word=> (

<li key={word.id}>{word.id+1}. {word.pl} - {word.eng} </li>

))

const unactive = () => {
    console.log('dziala')
    document.querySelector('.vocabstatus').classList.add('unactive')
}

const active = () => {
    document.querySelector('.vocabstatus').classList.remove('unactive')
}
    return ( 
    <div> <span className="vocab" onClick={active}> Vocublary</span>
    <div className='vocabstatus unactive'>
        <div className='blackboard'></div> 
            <div className='btnClose' onClick={unactive}>X</div>
            <div  className='list'>
                <ul>
                    {vocublary()}
                </ul>
            </div>
            </div>
    </div> );
}
 
export default Vocublary;