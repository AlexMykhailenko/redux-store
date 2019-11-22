import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        const data = this.props.bookstoreService.getBooks();

        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
