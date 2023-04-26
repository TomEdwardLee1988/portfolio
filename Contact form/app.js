const form = document.querySelector('#contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  // send email using a backend script like PHP
  const data = {
    name,
    email,
    message,
  };

  console.log(data);
  try {
    const response = await fetch('send-email.php', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();

    console.log(responseData);
  } catch (error) {
    console.error(error);
  }

  // clear form fields
  form.reset();
});
