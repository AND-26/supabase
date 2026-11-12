import express from "express";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`servidor listo http://localhost:${port}`);
});