const { MongoClient } = require('mongodb');

async function insertData() {
  const uri = 'mongodb+srv://bgohel:Bhumiti2811@epilepsy.cuj9k1p.mongodb.net/';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('epilepsy');
    const collection = database.collection('real_model');

    // Example list of EEG image URLs
    const eegImageUrls = [
      'https://epilepsydataset.s3.amazonaws.com/model/sample/real_model/net_params_100.pkl',
      'https://epilepsydataset.s3.amazonaws.com/model/sample/real_model/net_params_50.pkl',
      'https://epilepsydataset.s3.amazonaws.com/model/sample/real_model/net_params_best.pkl',
      'https://epilepsydataset.s3.amazonaws.com/model/sample/real_model/Train_loss_all.png',
      'https://epilepsydataset.s3.amazonaws.com/model/sample/real_model/training_log.txt'
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
