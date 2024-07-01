const express = require("express");
var cors = require("cors");
require("dotenv").config();
//console.log("api key: ", process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) =>
    lineItems.push({
      price: item.price,
      quantity: item.quantity,
    })
  );

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: process.env.PROD_URL,
    cancel_url: process.env.PROD_URL,
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(port, () => console.log("listening on port ", port));
