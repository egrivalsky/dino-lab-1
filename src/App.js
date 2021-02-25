import './App.css';
import React, { Component } from 'react';
import Comment from './Comment';

class App extends Component {
  state = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Checkout out this body property",
    comments: ['First!', 'Great post', 'Hire this author now!']
  }
  //make a method tu ipdate body's state

  changeBody = () => {
    const userInput = prompt('Give a new body:')
    //update body state
    this.setState({
      body: userInput
    })
  }

  addComment = () => {
    const newComment = prompt('How say you?')
    this.state.comments.push(newComment);
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    //map returns an array 
    const comments = this.state.comments.map((comment, index)=> (<Comment text={comment} key={index}/>))
  
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <p>by {this.state.author}</p>
        <p>{this.state.body}</p>
        <h3>Comments:</h3>
        { comments }
        <button onClick={this.changeBody}>Don't click here</button>
        <br></br>
        <button onClick={this.addComment}>Add a comment</button>
      </div>
    );
      // name and sotre variables before return statement
  }  
}


export default App;
