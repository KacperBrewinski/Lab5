exports.getBooks = (req, res) => {
    const books = [{ title: 'Informatyka' }];
    res.render('books', { books });
  };
  