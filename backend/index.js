const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "1c4327c1-0a8b-489c-a021-9a0e9177a90d"}}
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      // Handle the error when 'e.response' is defined
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Handle the error when 'e.response' is undefined
      return res.status(500).json({ error: "An internal server error occurred." });
    }
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);