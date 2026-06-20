const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ status: "Success", message: "CI/CD Pipeline is working perfectly!" });
});

app.get('/test', (req, res) => {
    res.json({ status: "Passed" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
