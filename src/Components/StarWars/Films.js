import React from 'react';
import FilmItem from "./FilmItem.js";
import Axios from 'axios';

class Films extends React.Component{
    constructor(props){
        super(props);
        this.state= {films:false, message:"Loading..."}
    }
    componentDidMount(){
        Axios.get("http://swapi.co/api/films")
            .then((response)=>{
                this.setState({
                    films:response.data.results,
                    message:""
                })
            }).catch((err)=>{
                console.log("error message");
            })
    }
    render(){
        if(this.state.films){
            var movies= this.state.films.map((movie)=>{
                return <FilmItem key={movie.episode_id} filmData={movie}  />
            })    
            return(
                 <div>
                    <h1>Films</h1>
                    {movies}
                </div>    
        )
        }else{
            return <h1>{this.state.message}</h1>
        }

    }
}
export default Films;