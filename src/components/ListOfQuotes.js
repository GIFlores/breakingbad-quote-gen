import React, { Component } from 'react'
import axios from 'axios'

class ListOfQuotes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: ''
        }
    }
    
    componentDidMount(){
        axios.get('https://www.breakingbadapi.com/api/quote/random')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data!'})
        })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div className='mainCard'> 
                {
                    posts.length ?
                posts.map(post => <div key={post.quote_id}><h3>{post.quote}</h3><p>-{post.author}</p><br/></div>) : 
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null }
                <button>New Quote</button>
            </div>
        )
    }
}

export default ListOfQuotes
