import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () =>{
    return(
        <div className='gpt3__header section__padding' id='home'>
         <div clasName='gpt3__header-content'>
          <h1 className='gradient__text'>Lets's Build Something with GPT3 OPENAI</h1>
          <p>OpenAI is an American artificial intelligence (AI) organization consisting of the non-profit OpenAI, Inc.[4] registered in Delaware and its for-profit subsidiary corporation OpenAI Global, LLC</p>
          <div className='gpt3__header-content_input'>
            <input type='email' placeholder="your email address"/>
            <button type='button'>Get Started</button>
          </div>
          <div className='gpt3__header_content__people'>
            <img src={people} alt='people'/>
            <p>1600 people requested access</p>
          </div>
         </div>
         <div className='gpt3__header-image'>
            <img src={ai} alt="ai"/>
          </div>
        </div>
    )
}

export default Header;