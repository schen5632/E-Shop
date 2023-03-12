const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MgGBQEutmLY32PUv481i0hCausJaKD7sGUZMltDEikSuhKOLDlkyzkROcRuRan7ma8UEdDhZwipubCSWfIllRuc00OlF7Sl27"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

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
    success_url: "http://localhost:3000/",
    cancel_url: "http://localhost:3000/",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("listening on port 4000"));
