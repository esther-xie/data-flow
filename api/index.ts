import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { MongoClient, MongoClientOptions } from 'mongodb';

const app = express();
const port = 3000;

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080'); // Replace with your frontend origin
   res.setHeader('Access-Control-Allow-Methods', 'GET'); // Specify the allowed HTTP methods
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Specify the allowed headers
   next();
 });
 
 app.use(bodyParser.json());

const uri = "mongodb+srv://esthxie:perMes17@cluster0.rtz2u0l.mongodb.net/?retryWrites=true&w=majority";

(async () => {
   try {
     const client = await MongoClient.connect(uri);
     console.log("Connected to MongoDB");
     const db = client.db("your_database_name");
     const termNewCollection = db.collection('test.term_new');
     const fullServiceCollection = db.collection('test.full_service');
 
     app.get('/api/terms', async (req, res) => {
      try {
        const termNewData = await termNewCollection.find().toArray();
        const result = await Promise.all(
          termNewData.map(async (term) => {
            const fullServiceData = await fullServiceCollection.findOne({ caseid: term.caseid });

            if (fullServiceData) {
              return {
                title: fullServiceData.title,
                url: fullServiceData.url,
                carescore: term.carescore,
                category: term.category,
              };
            } else {
              return null;
            }
          })
        );

        res.status(200).json(result.filter((item) => item !== null));
      } catch (err) {
        res.status(500).json({ error: 'An error occurred while fetching data.' });
      }
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
})();