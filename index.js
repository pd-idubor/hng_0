const express = require('express');


const app = express();
const PORT = 3000;

app.get('/me', async (req, res) => {
  const now = new Date();
  const isoString = now.toISOString();

  async function getCatFact(){
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const content = await response.json();
      return content.fact;
    } catch (error) {
	console.error('Error fetching cat fact:', error);
    }
  }

  const data = {
    "status": "success",
    "user": {
      "email": "preciousidubor@gmail.com",
      "name": "Precious Idubor",
      "stack": "Node.js/Express",
    },
    "timestamp": isoString,
    "fact": await getCatFact(),
  };

  res.json(data);
});

app.listen(PORT, () => {
  //console.log(`App listening on port ${PORT}`);
});
