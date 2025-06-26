const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

require("dotenv").config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection string with env variables
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2i7tcvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    const shareCollection = client.db("GardenHub").collection("shareTips");
    const profileCollection = client.db("GardenHub").collection("profile");

    // Example route using MongoDB
    app.get("/shareTips", async (req, res) => {
      try {
        const result = await shareCollection
          .find({ availability: "public" }) // only public tips
          .sort({ like: -1 }) // sort by like descending
          .toArray();

        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Failed to fetch share tips" });
      }
    });

    app.get("/profile", async (req, res) => {
      const result = await profileCollection.find().toArray();
      res.send(result);
    });

    app.get("/shareTips/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await shareCollection.findOne(query);
      res.send(result);
    });

    // all post method

    app.post("/shareTips", async (req, res) => {
      const tips = req.body;
      const result = await shareCollection.insertOne(tips);
      res.send(result);
    });

    // update tips
    app.put("/shareTips/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateTips = req.body;
      const updatedDoc = {
        $set: updateTips,
      };
      const result = await shareCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    // update specific property
    app.patch("/shareTips/:id/like", async (req, res) => {
      try {
        const { id } = req.params;

        const result = await shareCollection.findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $inc: { like: 1 } },
          { returnDocument: "after" } // To return updated document
        );

        if (!result) {
          return res.status(404).json({ error: "Tip not found" });
        }

        res.status(200).json({
          success: true,
          like: result.like,
        });
      } catch (error) {
        console.error("Error incrementing like:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // all delete method
    app.delete("/shareTips/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await shareCollection.deleteOne(query);
      res.send(result);
    });

    console.log("MongoDB connected and server ready.");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
}

run();

app.get("/", (req, res) => {
  res.send("GardenHub server is getting hotter");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
