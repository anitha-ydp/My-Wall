import React from 'react';
import Axios from 'axios';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state= {listuserposts:[]}
    }
    componentDidMount(){
      Axios.get(`http://54.245.42.196/posts/${this.props.match.params.userId}`, {headers: {
            Authorization: localStorage.getItem("jw-token")}
            }).then((result)=>{
                console.log(result.data.posts);
                this.setState({
                    listuserposts: result.data.posts
                })
            }).catch((err)=>{
                console.log("error message");
            })
    
    }
     handleSubmit = (e) => {
        e.preventDefault()        
        Axios({
            method: "post",
            url: `http://54.245.42.196/posts/${this.props.match.params.userId}`,
            data: {username: "cool name", password: "great password" },
            headers: {Authorization: localStorage.getItem("jw-token")}
        }).then((result) => {
            this.setState({
                listuserposts:result.data.posts
            })
            console.log("successful")
        }).catch((err) => {
            console.log("unsuccessful");
        })
    }
    
    render(){
        let ListOfUsers = this.state.listuserposts.map((value,index)=>{
            console.log(value)
            return(
                <div key={index}>
                    
                    <h3>Author: {value._author.username} | Created: {value.createdAt} </h3>
                    <p>{value.post}</p>
                </div>    
            )
        })
        return(
            <div>
                <h1>The Wall</h1>
                <label><h2>New Post</h2></label>
                <textarea rows="4" cols="110"></textarea>
                {ListOfUsers}
                
            </div>    
        )
    }
}
export default Dashboard;