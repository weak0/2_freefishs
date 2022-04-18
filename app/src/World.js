import React from 'react';
import './World.css'


const World = (props) => {



   const changeLetters = () => {

        const chars = props.word.split('');
        const numberOfLetter = chars.length
        let spaceIndex = chars.indexOf(' ')


            if(spaceIndex === -1){

                
    
        for(let i = 0; i< numberOfLetter ;i++ ){
            chars[i] = "_" 
            

        }

        const changedWord = chars.join(' ')
            return changedWord

    }else if(spaceIndex >= -1){

        for(let i = 0; i< numberOfLetter ;i++ ){
            if( i === spaceIndex){
            }else{
            chars[i] = "_" 
            }
            

        }


        const changedWord = chars.join('')
            return changedWord
    }

   
    }
   

        return(
            <div className='word'>{props.showWord ? props.word : changeLetters()}</div>
        )
    }


export default World; 