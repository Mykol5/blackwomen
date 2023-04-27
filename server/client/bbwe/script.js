// // Get form element and add submit event listener
// const subscribeForm = document.getElementById('subscribeForm');
// subscribeForm.addEventListener('submit', async (event) => {
//   event.preventDefault(); // Prevent default form submission

//   // Get form data
//   const emailInput = document.getElementById('emailInput');
//   const email = emailInput.value;

//   // Send form data to backend
//   const response = await fetch('/api/subscribe', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email: email })
//   });

//   // Handle response
//   if (response.ok) {
//     // Success: do something
//     const responseData = await response.json();
//     if (responseData.success) {
//       // Display success message to the user
//       console.log(responseData.message);
//       // Update DOM with success message
//       const successMessage = document.getElementById('successMessage');
//       successMessage.textContent = responseData.message;
//       successMessage.classList.remove('hidden');
//     } else {
//       // Handle server-side error
//       console.error(responseData.message);
//     }
//   } else {
//     // Error: do something
//     console.error('Failed to submit form');
//   }
// });






// // Get form element and add submit event listener
// const subscribeForm = document.getElementById('subscribeForm');
// subscribeForm.addEventListener('submit', async (event) => {
//   event.preventDefault(); // Prevent default form submission

//   // Get form data
//   const emailInput = document.getElementById('emailInput');
//   const email = emailInput.value;

//   // Send form data to backend
//   const response = await fetch('/api/subscribe', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email: email })
//   });

//   // Handle response
//   if (response.ok) {
//     // Success: do something
//     const responseData = await response.json();
//     if (responseData.success) {
//       // Display success message to the user
//       const successMessage = document.getElementById('successMessage');
//       successMessage.textContent = responseData.message;
//       successMessage.classList.remove('hidden');
//     } else {
//       // Handle server-side error
//       console.error(responseData.message);
//     }
//   } else {
//     // Error: do something
//     console.error('Failed to submit form');
//   }
// });

// Get form element and add submit event listener
const subscribeForm = document.getElementById('subscribeForm');
subscribeForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value;

  // Request permission to show notifications
  if (Notification.permission !== 'granted') {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.log('Notification permission denied');
      return;
    }
  }

  // Send form data to backend
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email })
  });

  // Handle response
  if (response.ok) {
    // Success: show feedback message to user
    const result = await response.json();
    console.log(result.message); // Subscription successful

    // Show notification to the user
    if (Notification.permission === "granted") {
      const notification = new Notification("Thank you for subscribing!", {
        body: "You will now receive our newsletter."
      });
    }

    // Display the feedback message to the user, e.g., update DOM with success message
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = result.message;
    successMessage.classList.remove('hidden'); // Show the success message
  } else {
    // Error: show error feedback to user
    console.error('Failed to submit form');
  }
});



// // Get form element and add submit event listener
// const subscribeForm = document.getElementById('subscribeForm');
// subscribeForm.addEventListener('submit', async (event) => {
//   event.preventDefault(); // Prevent default form submission

//   // Get form data
//   const emailInput = document.getElementById('emailInput');
//   const email = emailInput.value;

//   // Send form data to backend
//   const response = await fetch('/api/subscribe', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email: email })
//   });

//   // Handle response
//   if (response.ok) {
//     // Success: show feedback message to user
//     const result = await response.json();
//     console.log(result.message); // Subscription successful
//     // Display the feedback message to the user, e.g., update DOM with success message
//     const successMessage = document.getElementById('successMessage');
//     successMessage.textContent = result.message;
//     successMessage.classList.remove('hidden'); // Show the success message
//   } else {
//     // Error: show error feedback to user
//     console.error('Failed to submit form');
//   }
// });






// document.getElementById('subscribeForm').addEventListener('submit', async (event) => {
//   event.preventDefault(); // Prevent form submission
//   const emailInput = document.getElementById('emailInput');
//   const successMessage = document.getElementById('successMessage');

//   // Fetch API to submit form data
//   const response = await fetch('/api/subscribe', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email: emailInput.value }),
//   });

//   if (response.ok) {
//     const data = await response.json();
//     console.log(data.message); // Display feedback message in console
//     successMessage.classList.remove('hidden'); // Show success message on the page
//     emailInput.value = ''; // Clear email input field
//   } else {
//     console.error('Form submission failed');
//   }
// });





// // Get form element and add submit event listener
// const subscribeForm = document.getElementById('subscribeForm');
// subscribeForm.addEventListener('submit', async (event) => {
//   event.preventDefault(); // Prevent default form submission

//   // Get form data
//   const emailInput = document.getElementById('emailInput');
//   const email = emailInput.value;

//   // Send form data to backend
//   const response = await fetch('/api/subscribe', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email: email })
//   });

//   // Handle response
//   if (response.ok) {
//     // Success: do something
//     console.log('Form submitted successfully!');
//   } else {
//     // Error: do something
//     console.error('Failed to submit form');
//   }
// });
