const express = require('express');
const app = express();

app.get('/leads',(req, res) => {
    res.json([
        {name: "Frank",age: 30},
        {name: "John",age: 25}
    ]);
});

app.listen(PORT,() => {console.log(`Server is running on port ${PORT}`)});