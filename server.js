const express = require('express');
const app = express();

app.get('/leads',(req, res) => {
    res.json(
        {
            name: 'Frank Bowels',
            age: 30
        }
    );
});

app.listen(PORT,() => {console.log(`Server is running on port ${PORT}`)});