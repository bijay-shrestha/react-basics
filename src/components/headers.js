import React from 'react'

const Header = (props) => {

    function inputChange(e) {
        props.newsSearch(e.target.value);
    }

    return (
        <header className='header'>
            <div className='logo'
                 onClick={() => {
                     console.log('clicked')
                 }}>Logo
            </div>
            <input onChange={(e) => inputChange(e)}/>
        </header>
    )
}

export default Header;