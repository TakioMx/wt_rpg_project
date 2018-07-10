// routes/note_routes.js
module.exports = function(app, db) {
  app.post('/player', (req, res) => {
    const note = { name: req.body.name, password: req.body.password, x: req.body.x, y: req.body.y };
    db.collection('player').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
