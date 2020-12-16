const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(express.json()); //req.body
app.use(cors());

// Routes
// params => http://localhost:5000/:id => req.params
// query params => http://localhost:5000/?name=henry =req.query

app.get("/users", async (req, res) => {
  try {
    const { name } = req.query;
    // first_name last_name => %{}%
    // "Henry ly" => %ly%
    //|| => OR SQL || concat
    // ILIKE => search in all uppercase and lower case items
    const users = await pool.query(
      "SELECT * FROM users WHERE first_name || ' ' || last_name ILIKE $1",[`%${name}%`]
    );
    
    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server listening to PORT 5000");
});
