const express = require('express');
const app = express();
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`SERVER running`);
});
app.get('/product', (req, res) => {
    res.json([
        {
            "id":"1",
            "name":"iphone "
        }
    ]);
});
//git push -u origin main
//git remote add origin https://github.com/cobebandiem/testnodejs.git