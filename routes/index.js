var express = require('express');
var router = express.Router();
var axios = require('axios');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { BlobServiceClient, StorageSharedKeyCredential } = require('@azure/storage-blob');

const containerName = 'file-upload';
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', async function(req, res, next) {
  try {
    const azureFunctionUrl = 'https://function-trigger-run-master.azurewebsites.net/api/HttpTrigger/';
    const response = await axios.get(azureFunctionUrl, {
      params: {
        locationCityCountry: 'people'
      }
    });

    const data = response.data;

    res.render('index', { title: 'Star Wars Characters', data: data });
  } catch (error) {
    res.status(500).send('Error calling Azure Function');
  }
});

router.post('/upload', upload.single('image'), async function(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }

    const blobServiceClient = BlobServiceClient.fromConnectionString(``);
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // Generate a unique identifier (random number) for the filename
    const uniqueId = uuidv4();

    const fileExtension = req.file.originalname.split('.').pop();
    const blobName = `uploaded-image-${uniqueId}.${fileExtension}`;

    const blobClient = containerClient.getBlockBlobClient(blobName);

    const content = req.file.buffer;
    const uploadBlobResponse = await blobClient.upload(content, content.length);

    console.log(`Uploaded block blob ${blobName} successfully`, uploadBlobResponse.requestId);

    res.send('Image uploaded successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading image');
  }
});

module.exports = router;
