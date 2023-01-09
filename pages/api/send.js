const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_KEY);

export default async function handler(req, res) {
  const { name, email, message } = req.body;
  console.log(name, email, message);
  const msg = {
    to: "kevinhl_2998@hotmail.com", // Change to your recipient
    from: "kevinhldev@gmail.com", // Change to your verified sender
    subject: "Contact",
    html: `<p><strong>name: </strong>${name}</p>
      <p><strong>email: </strong>${email}</p>    
      <p><strong>message: </strong>${message}</p>`,
  };
  await sgMail.send(msg);
  console.log("email sent");
  res.status(200).json({ success: true });
}
