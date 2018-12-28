import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    static propTypes ={
        title:React.propTypes.string,
        poster:React.PropTypes.string
      }



    render(){
       
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
              
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        console.log(this.props)
        return(
<img src={this.props.poster}/>
            )
    }
}



export default Movie