import React from 'react'

const mainHead = {
    margin: '50px 0'
}
const title = {
    fontSize: '30px',
    color: '#333'
}

function Header(){
    return (
        <div style={mainHead}>
            <h1 style={title}>Breaking Bad Random Quotes</h1>
        </div>
    )
}
export default Header