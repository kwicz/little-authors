import React, { Component } from 'react';
import axios from 'axios';

export default class CreateBook extends Component {

  constructor(props) {
    super(props);

    this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
    this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
    this.onChangeBookDescription = this.onChangeBookDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        book_title: '',
        book_author: '',
        book_description : '',
        book_completed: false, 
    }
  }

  onChangeBookTitle(e) {
    this.setState({
        book_title: e.target.value
    });
}

onChangeBookAuthor(e) {
    this.setState({
        book_author: e.target.value
    });
}

onChangeBookDescription(e) {
    this.setState({
        book_description: e.target.value
    });
}

onSubmit(e) {
  e.preventDefault();
  
  console.log(`Form submitted:`);
  console.log(`Book Title: ${this.state.book_title}`);
  console.log(`Book Author: ${this.state.book_author}`);
  console.log(`Book Description: ${this.state.book_description}`);

  const newBook = {
      book_title: this.state.book_title,
      book_author: this.state.book_author,
      book_description: this.state.book_description,
      book_completed: this.state.book_completed, 
      book_pages: []
  };

  axios.post('http://localhost:4000/books/add', newBook)
    .then(res => console.log(res.data));
  
  this.setState({
      book_title: '',
      book_author: '',
      book_description: '',
      book_completed: false
  })
}

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Book</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.book_title}
                                onChange={this.onChangeBookTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Author: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.book_author}
                                onChange={this.onChangeBookAuthor}
                                />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.book_description}
                                onChange={this.onChangeBookDescription}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create New Book" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}