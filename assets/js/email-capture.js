const emailField = document.getElementById("emailInput"),
  emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  var email = emailField.value;
  try {
    const res = await axios.post(
      "https://hngmailapi.herokuapp.com/api/emails/",
      {
        email: email,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token 678a9821fb4363ea32d837376c29040041ea159b",
        },
      }
    );
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Your Email could not be saved",
    });
    emailField.value = "";
    return;
  }
  Swal.fire({
    icon: "success",
    title: "Success",
    text: "Email Saved Successfully",
  });
});
