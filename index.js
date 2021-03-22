const express = require('express');
const app = express();
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`SERVER running`);
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});