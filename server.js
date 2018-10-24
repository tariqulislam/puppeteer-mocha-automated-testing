const express = require('express');
const app = express();
const path = require('path');
const port = 9988;
app.use(express.static(__dirname +'/mochawesome-report'));
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname+"/mochawesome-report"+"/mochawesome.html"));
});
app.listen(port, () => console.log(`Test Report shows on port ${port}`));

