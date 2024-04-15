exports.getAuthors = (req, res) => {
    const authors = [{ name: 'Kacper Brewiński' }];
    res.render('authors', { authors });
  };
  