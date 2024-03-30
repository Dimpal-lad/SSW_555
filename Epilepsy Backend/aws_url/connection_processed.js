const { MongoClient } = require('mongodb');

async function insertData() {
  const uri = 'mongodb+srv://bgohel:Bhumiti2811@epilepsy.cuj9k1p.mongodb.net/';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('epilepsy');
    const collection = database.collection('processed_data');

    // Example list of EEG image URLs
    const eegImageUrls = [
     'https://epilepsydataset.s3.amazonaws.com/processed_data/Test_result_evoked_LA.mat',
     'https://epilepsydataset.s3.amazonaws.com/processed_data/Test_result_evoked_LV.mat'

      // Add more as needed...
    ];

    // Prepare documents to insert
    const documents = eegImageUrls.map(url => ({ url }));

    // Insert documents into collection
    await collection.insertMany(documents);
    console.log("EEG dataset URLs inserted into MongoDB.");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

insertData().catch(console.error);
