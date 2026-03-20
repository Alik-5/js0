const express = require('express');
const app = express();

const PORT = 3000;
app.get('/leads',(req, res) => {
    res.json(
        {
            name: 'Frank Bowels',
            age: 30
        }
    );
});

app.listen(PORT,() => {console.log(`Server is running on port ${PORT}`)});;