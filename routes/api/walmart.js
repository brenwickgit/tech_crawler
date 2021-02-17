const express = require('express');
const router = express.Router();
const { spawn } = require('child_process')


  router.post('/', async (req, res) => {
    console.log('Request for walmart.py');
    console.log(req.body);

    var largeDataset = [];

    // Generates the arguments in the format needed to exec child process
    const scriptLocation = ['./scripts/walmart_scraper.py']
    var argsList = req.body.string.split(' ');
    mergedList = scriptLocation.concat(argsList)

    //  Spawn new child process to call the python script
    const script = spawn('python', mergedList);

    // Collect data from script
    script.stdout.on('data', function (data) {
        console.log('Piping data from python script...');
        largeDataset.push(data);
        if(data){
          console.log('Walmart Data');
          console.log(data);
        }
    });

    // In close event we are sure that stream from child process is closed
    script.on('close', (code) => {
        console.log(`Child process close all stdio with code ${code}`);
        // send data to browser
        res.send(largeDataset.join(""))
        console.log('---------Request Complete-----');
    })

  });

module.exports = router;