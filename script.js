function showMessage() {
  const showMessage = document.getElementById("showMessage");
  const message = document.getElementById("message");
  showMessage.classList.remove("hidden");

  message.classList.add("active");
}

function submitResponse() {
  const replyMessage = document.getElementById("reply").value;
  emailjs
    .send("service_e6gabkp", "template_o48frbr", {
      to_name: "Hazhim",
      from_name: "Dhea",
      subject: "Confess Complete",
      message: replyMessage,
    })
    .then(alert("Terimakasih atas jawabannya :)"));
  const message = document.getElementById("message");
  message.classList.remove("active");
}
