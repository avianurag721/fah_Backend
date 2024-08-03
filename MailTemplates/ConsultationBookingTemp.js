exports.consultUsEmail = ({ email, fullName, phone, message, date, time }) => {
  return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Contact Form Confirmation</title>
        <style>
            body {
                background-color: yellow;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
            .container>h1{
            color: #2b7a78;
            }
    
            .logo {
                max-width: 200px;
				margin-bottom: 20px;
				background-color: #fbbc04;
				font-weight: bold;
				padding: 10px 20px;
				border-radius: 5px;
				color: black;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
        <h1>Fah health Care PVT. LTD.</h1>
            <div class="message">Consultations Booking Confirmation</div>
            <div class="body">
                <p>Dear ${fullName} ,</p>
                <p>Thank you for Booking Consultation with us. We have received your Request and will respond to you as soon as possible.
                </p>
                <p>Here are the details you provided:</p>
                <p>Full Name: ${fullName} </p>
                <p>Email: ${email}</p>
                <p>Phone Number:+91${phone}</p>
                <p>Message: ${message?`${message}`:"Please Get in touch with us at 8433377712"}</p>
                <p>Booking date and time: ${date}/${time}</p>
                <p>We appreciate your Patience and will get back to you shortly. </p>
            </div>
            <div class="support">If you have any further questions or need immediate assistance, please feel free to reach
                out to us at <a href="mailto:info@fahhealthcare.in">info@fahhealthcare.in</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`;
};
