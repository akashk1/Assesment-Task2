const express = require("express");
const cron = require("node-cron");
const mongoose = require("mongoose");
const Collection1 = require("./Models/Collection1");
const Collection2 = require("./Models/Collection2");
const Routes = require("./Routes/sendMessage");
const app = express();
app.use(express.json());
const url =
  "mongodb+srv://test123:test123@cluster0.snlcs.mongodb.net/Dummy?retryWrites=true&w=majority";

mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 3030;
app.listen(port, (req, res) => {
  console.log(`Running in port ${port} `);
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb connection is established");
});

app.use("/", Routes);
Collection1.watch().on("change", (data) => {
  const d = data.fullDocument.day.split("/");
  const time = data.fullDocument.time.split(":");
  const date = d[1];
  const year = d[2];
  const month = d[0];
  const day = new Date(data.fullDocument.day).getDay();
  const min = time[1];
  const hr = time[0];
  const c = ` 0 ${min} ${hr} ${date} ${month} ${day}`;

  cron.schedule(c, () => {
    const collection2 = new Collection2({
      message: data.fullDocument.message,
      day: data.fullDocument.day,
      time: data.fullDocument.time,
    });
    collection2.save((err, res) => {
      if (err) console.log(err);
      else console.log(res);
    });
  });
  console.log(data.fullDocument, "Collection1 changed");
});

// mm/dd/yy
