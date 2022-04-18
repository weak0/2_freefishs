import './Add.css'

const Add = () => {

    const activeForm = () => {
        document.querySelector('.addform').classList.toggle('unactive')
    }

    return ( <div>
        <div className='btn' onClick={activeForm}>+</div>
        <div className="addform unactive">
            <form >
                <label> Dodaj nowe słowo </label>
                <input type="text"  placeholder="po polsku"/>
                <input type="text"  placeholder="po angielsku"/>
                <button>Dodaj</button>
            </form>
        </div>
    </div> );
}
 
export default Add ;