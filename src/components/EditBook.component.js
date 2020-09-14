import React, { Component } from 'react';
import axios from 'axios';

export default class EditBook extends Component {

    constructor(props) {
        super(props);

        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookDescription = this.onChangeBookDescription.bind(this);
        this.onChangeBookCompleted = this.onChangeBookCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            book_title: '',
            book_author: '',
            book_description: '',
            book_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/books/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    book_title: response.data.book_title,
                    book_author: response.data.book_author,
                    book_description: response.data.book_description,
                    book_completed: response.data.book_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeBookCompleted(e) {
        this.setState({
            book_completed: !this.state.book_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            book_title: this.state.book_title,
            book_author: this.state.book_author,
            book_description: this.state.book_description,
            book_completed: this.state.book_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/books/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }
    

    render() {
        return (
            <div>
                <h3 align="center">Update Book</h3>
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
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeBookCompleted}
                                checked={this.state.book_completed}
                                value={this.state.book_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Book" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}