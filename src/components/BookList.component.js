import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Book   = props => (
    <tr>
        <td>{props.book.book_title}</td>
        <td>{props.book.book_author}</td>
        <td>{props.book.book_description}</td>
        <td>
            <Link to={"/edit/"+props.book._id}>Edit</Link>
        </td>
    </tr>
)

export default class BooksList extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/books/')
            .then(response => {
                this.setState({ books: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    bookList() {
        return this.state.books.map(function(currentBook, i){
            return <Book book={currentBook} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Book List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>author</th>
                            <th>description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.bookList() }
                    </tbody>
                </table>
            </div>
        )
    }
}