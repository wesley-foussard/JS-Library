//Import models
const Book = require('./book');
const Publisher = require('./publisher');
const Reader = require('./reader');
const Author = require('./author');
const Genre = require('./genre');

//ESTABLISHING ASSOCIATIONS
/*----------------------------------*/
//Publisher <-> book : One-to-Many
Publisher.hasMany(Book, {
    foreignKey: "publisher_id",
    as: "published"
});
Book.belongsTo(Publisher, {
    foreignKey: "publisher_id",
    as: "published_by"
});

//Book <-> genre : Many-to-Many
Book.hasMany(Genre, {
    as: "genres_of_book",
    through: "book_has_genre",
    foreignKey: "book_id",
    otherKey: "genre_id"
});
Genre.hasMany(Book, {
    as: "books_with_genre",
    through: "book_has_genre",
    foreignKey: "genre_id",
    otherKey: "book_id"
});

// Book <-> Author : Many-to-Many
Book.hasMany(Author, {
    as: "written_by_many",
    through: "book_has_author",
    foreignKey: "book_id",
    otherKey: "author_id"
});
Author.hasMany(Book, {
    as: "wrote",
    through: "book_has_author",
    foreignKey: "author_id",
    otherKey: "book_id"
});

//Book <-> Reader : Many-to-Many
Book.hasMany(Reader, {
    as: "readers",
    through: "book_has_reader",
    foreignKey: "book_id",
    otherKey: "reader_id"
});
Reader.hasMany(Book, {
    as: "shelf",
    through: "book_has_reader",
    foreignKey: "book_id",
    otherKey: "genre_id"
});
module.exports = { Book, Publisher, Reader, Author };

