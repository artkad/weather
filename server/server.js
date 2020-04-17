const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
app.use('/', express.static('public'));

app.get('/api', (req, res) => {
  fs.readFile('server/db/weather2.json', 'utf-8', (err, data) => {
    if(err){
      res.sendStatus(404, JSON.stringify({result: 0, text: err}))
    } else {
      res.send(data);
    }
  })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server run ${PORT}  port ...`));
