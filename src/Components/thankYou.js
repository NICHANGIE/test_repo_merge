// After the donation is successful, you can add the following code to express gratitude with an alert:

if (response.ok) {
    // Donation successful, you can handle this as needed (e.g., show a success message)
    console.log('Donation successful');
    alert('Thank you for your donation! We appreciate your support.');
    navigate('/success'); // Redirect to the success route
  } else {
    // Handle errors here (e.g., display an error message)
    console.error('Error donating:', response.statusText);
  }
  