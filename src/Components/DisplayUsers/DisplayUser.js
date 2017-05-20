import React from "react";
import "./DisplayUser.css"
import Axios from 'axios';

class DisplayUser extends React.Component{
    constructor(props){
        super(props);
        this.state={listusers:[]}
    }
    componentDidMount(){
        Axios.get("http://54.245.42.196/users")
            .then((result)=>{
                console.log(result.data);
                this.setState({
                    listusers: result.data
                })
            }).catch((err)=>{
                console.log("error message");
            })
    }
    render(){
        
       let List = this.state.listusers.map((value,index)=> {
            return(
                <tr key={index}>
                    <td>{value.username}</td>
                    <td>{value.createdAt}</td>
                </tr> 
            )       
        })
        return(
            <div className="user-list">
                
                    <h1>User Table</h1>
                    <table >
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        {List}       
                   </table>         
            </div>    
        )
    }
}
export default DisplayUser;