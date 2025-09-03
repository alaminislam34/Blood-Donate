import nodemailer from "nodemailer";

export const sendEamil = async ({ eamil, emailType, eamilId }: any) => {
  try {
    // Create a test account or replace with real credentials.
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });
    const mailOptions = {
      from: "alaminislam4122.bd@gmail.com",
      to: eamil,
      subject:
        emailType === "VERIFY" ? "Verify your eamli" : "Reset your password",
      html: "<b>Hello world?</b>", // HTML body
    };

    const mailResponse = await transporter.sendEamil(mailOptions);
  } catch (err: any) {
    throw new Error(err.message)
  }
};
