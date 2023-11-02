const express = require('express');
const bodyParser = require('body-parser');
// const chrome = require('chrome-aws-lambda');
require('dotenv').config()

const app = express();


// const chrome= require('chrome-aws-lambda');
const puppeteer = require('puppeteer');

app.use(bodyParser.json());


app.post('/submit', async (req, res) => {
  const userInfo = req.body;
  console.log(userInfo);

  try {
    // const browser = await puppeteer.launch();
  
    const browser = await puppeteer.launch({ headless: 'new' });

    const page = await browser.newPage();

    await page.goto('https://acumens.crm.acumensinc.com/webform/view/652d6d2996eaf5.63189600');

    // Fill out the form
    // NOTE: You'll have to replace the selectors with actual ones from the webpage.
    await page.type('#lead_company_name', userInfo.CompanyName); // Replace '#firstNameInput' with actual selector from the CRM form
    await page.type('#lead_firstname', userInfo.userFirstName);
    await page.type('#lead_lastname', userInfo.userLastName);
    await page.type('#lead_email', userInfo.userEmail);
    await page.type('#lead_phone', userInfo.userPhnNo)

    // Submit the form
    await page.click('#submitButton');

    await browser.close();

    res.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
app.post('/submitForm', async (req, res) => {
  const userInfo = req.body;
  console.log(userInfo);

  try {
    // const browser = await puppeteer.launch();
  
    const browser = await puppeteer.launch({ headless: 'new' });

    const page = await browser.newPage();

 await page.goto('https://acumens.crm.acumensinc.com/webform/view/652d748f4d0141.10786234');
    // Fill out the form
    // NOTE: You'll have to replace the selectors with actual ones from the webpage.
    await page.type('#lead_company_name', userInfo.CompanyName); // Replace '#firstNameInput' with actual selector from the CRM form
    await page.type('#lead_firstname', userInfo.userFirstName);
    await page.type('#lead_lastname', userInfo.userLastName);
    await page.type('#lead_email', userInfo.userEmail);
    await page.type('#lead_phone', userInfo.userPhnNo)

    // Submit the form
    await page.click('#submitButton');

    await browser.close();

    res.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.get('/', (req, res) => {
  res.send('Hello User')
})
const port=process.env.PORT;
app.listen(port, () => {
  console.log(`server running on port ${process.env.PORT}`)
})
