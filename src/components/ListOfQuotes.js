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
            <div>
                {
                    posts.length ?
                posts.map(post => <div key={post.quote_id}><h3>{post.quote}</h3><br/><p>-{post.author}</p></div>) : 
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null }
            </div>
        )
    }
}

export default ListOfQuotes
