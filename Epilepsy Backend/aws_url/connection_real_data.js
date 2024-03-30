const { MongoClient } = require('mongodb');

async function insertData() {
  const uri = 'mongodb+srv://bgohel:Bhumiti2811@epilepsy.cuj9k1p.mongodb.net/';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('epilepsy');
    const collection = database.collection('real_data');

    // Example list of EEG image URLs
    const eegImageUrls = [
     'https://epilepsydataset.s3.amazonaws.com/raw_data/data/real_data/evoked_eeg_LA.mat',
     'https://epilepsydataset.s3.amazonaws.com/raw_data/data/real_data/evoked_eeg_LA.png',
     'https://epilepsydataset.s3.amazonaws.com/raw_data/data/real_data/evoked_eeg_LV.mat',
     'https://epilepsydataset.s3.amazonaws.com/raw_data/data/real_data/evoked_eeg_RA.mat',
     'https://epilepsydataset.s3.amazonaws.com/raw_data/data/real_data/evoked_eeg_RV.mat'

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
