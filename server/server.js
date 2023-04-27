const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs'); // Import file system module
const path = require('path'); // Import path module
const app = express();

app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   if (req.url.endsWith('.svg')) {
//     res.header('Content-Type', 'image/svg+xml');
//   }
//   next();
// });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'michaelkolawole25@gmail.com', // Replace with your email address
    pass: 'gwnqamysvkkulvdm' // Replace with your email password
  }
});

app.post('/api/subscribe', async (req, res) => {
  const email = req.body.email;
  console.log('Email:', email);

  // if (!email) {
  //   // Check if email is provided in the request body
  //   return res.status(400).json({ success: false, message: 'Email is required' });
  // }

  // Save the subscriber to the database
  // ... (code for saving to MongoDB or any other database)

  // Compose and send a "Thank you for subscribing" email
  const thankYouMailOptions = {
    from: 'michaelkolawole25@gmail.com', // Replace with your email address
    to: email, // Email address provided by the user
    subject: 'Thank you for subscribing!', // Subject of the email
    text: 'Thank you for subscribing to BBWE! We look forward to sending you exciting updates.' // Body of the email
  };

  // Compose and send a "New subscriber" email to your own email address
  const newSubscriberMailOptions = {
    from: 'michaelkolawole25@gmail.com', // Replace with your email address
    to: 'michaelkolawole25@gmail.com', // Your email address
    subject: 'New subscriber!', // Subject of the email
    text: `You have a new subscriber! Email: ${email}` // Body of the email
  };

  transporter.sendMail(thankYouMailOptions, (error, info) => {
    if (error) {
      console.error('Failed to send "Thank you for subscribing" email:', error);
      // Handle error, e.g., send error response to frontend
      res.status(500).json({ success: false, message: 'Failed to send email' });
    } else {
      console.log('Email sent:', info);
      // Handle success, e.g., send success response to frontend
      res.json({ success: true, message: 'Thank you for subscribing!' });
    }
  });

  transporter.sendMail(newSubscriberMailOptions, (error, info) => {
    if (error) {
      console.error('Failed to send "New subscriber" email:', error);
      // Handle error, e.g., send error response to frontend
    } else {
      console.log('Email sent:', info);
      // Handle success, e.g., log the success or send success response to frontend
    }
  });
});


// Serve static files from the 'public' directory
const clientPath = path.join(__dirname, 'client');
app.use(express.static(clientPath));

// Serve the coming.html file as the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'bbwe', 'index.html'));
});

// Serve the SVG files with sendFile()
app.get('/images/*', (req, res) => {
  const filePath = path.join(__dirname, 'client', 'bbwe', req.params[0]);
  res.sendFile(filePath);
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});







// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const fs = require('fs'); // Import file system module
// const app = express();

// app.use(cors());
// app.use(express.json());

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'michaelkolawole25@gmail.com', // Replace with your email address
//     pass: 'gwnqamysvkkulvdm' // Replace with your email password
//   }
// });

// app.post('/api/subscribe', async (req, res) => {
//   const email = req.body.email;

//   // if (!email) {
//   //   // Check if email is provided in the request body
//   //   return res.status(400).json({ success: false, message: 'Email is required' });
//   // }

//   // Save the subscriber to the database
//   // ... (code for saving to MongoDB or any other database)

//   // Compose and send an email
//   const mailOptions = {
//     from: 'michaelkolawole25@gmail.com', // Replace with your email address
//     to: 'michaelkolawole25@gmail.com', // Recipient email address
//     subject: 'New Subscriber', // Subject of the email
//     text: `A new user has subscribed with the email: ${email}`  //'Thank you for subscribing to BBWE! This is a test mail.' // Body of the email
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Failed to send email:', error);
//       // Handle error, e.g., send error response to frontend
//       res.status(500).json({ success: false, message: 'Failed to send email' });
//     } else {
//       console.log('Email sent:', info);
//       // Handle success, e.g., send success response to frontend
//       res.json({ success: true, message: 'Thank you for subscribing!' });
//     }
//   });
// });

// const port = 5500;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });





// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer'); // Import nodemailer package
// const app = express();

// app.use(cors());
// app.use(express.json());

// const transporter = nodemailer.createTransport({
//   // Set up the transporter with your email service provider's configuration
//   service: 'gmail',
//   auth: {
//     user: 'michaelkolawole25@gmail.com', // Replace with your email address
//     pass: 'gwnqamysvkkulvdm' // Replace with your email password
//   }
// });

// app.post('/api/subscribe', async (req, res) => {
//   const email = req.body.email;

//   // Save the subscriber to the database
//   // ... (code for saving to MongoDB or any other database)

//   // Compose and send an email
//   const mailOptions = {
//     from: 'michaelkolawole25@gmail.com', // Replace with your email address
//     to: 'selinamarius@gmail.com', // Recipient email address
//     subject: 'Thank you for subscribing!', // Subject of the email
//     text: 'Thank you for subscribing to BBWE! This is a test mail.' // Body of the email
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Failed to send email:', error);
//       // Handle error, e.g., send error response to frontend
//       res.status(500).json({ success: false, message: 'Failed to send email' });
//     } else {
//       console.log('Email sent:', info);
//       // Handle success, e.g., send success response to frontend
//       res.json({ success: true, message: 'Thank you for subscribing!' });
//     }
//   });
// });

// const port = 5500;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });









// const express = require('express');
// const cors = require('cors'); // Import cors package
// const app = express();

// app.use(cors()); // Enable CORS

// // Middleware to parse JSON request body
// app.use(express.json());

// // Serve static files from the parent directory
// app.use(express.static('..'));

// // Define endpoint for /api/subscribe with POST method
// app.post('/api/subscribe', (req, res) => {
//   const email = req.body.email; // Get email from request body

//   // Handle form data, for example, save to a database or send notifications

//   // Send response with feedback
//   res.json({ success: true, message: 'Thank you for subscribing!' });
// });

// // Start server
// const port = 5500; // or any desired port number
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });




// const express = require('express');
// const cors = require('cors'); // Import cors package
// const app = express();

// app.use(cors()); // Enable CORS

// // Middleware to parse JSON request body
// app.use(express.json());

// // Define endpoint for /api/subscribe with POST method
// app.post('/api/subscribe', (req, res) => {
//   const email = req.body.email; // Get email from request body

//   // Handle form data, for example, save to a database or send notifications

//   // Send response with feedback
//   res.json({ success: true, message: 'Subscription successful' });
// });

// // Start server
// const port = 5500; // or any desired port number
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });







// const express = require('express');
// const app = express();

// // Define endpoint for /api/subscribe with POST method
// app.post('/api/subscribe', (req, res) => {
//   // Handle form data and send response
// });

// // Start server
// const port = 3000; // or any desired port number
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
