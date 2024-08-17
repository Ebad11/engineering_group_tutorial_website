import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, mobileNo, courses, subject } = body;

    // Create a Nodemailer transporter using your email service
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or another email service like 'Yahoo', 'Outlook', etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address (use environment variables for security)
        pass: process.env.EMAIL_PASS, // Your email password (use environment variables for security)
      },
    });

    // Determine whether to use singular or plural forms
    const courseLabel = courses.length === 1 ? 'Course' : 'Courses';
    const subjectLabel = subject.length === 1 ? 'Subject' : 'Subjects';

    // Construct the email content
    let emailSubject = `New Contact Form Submission`;
    let emailText = `You have a new contact form submission:\n\nName: ${name}\nMobile No: ${mobileNo}\n${courseLabel}: ${courses.map(course => course.title).join(', ')}`;
    let emailHtml = `<p>You have a new contact form submission:</p>
                     <p><strong>Name:</strong> ${name}</p>
                     <p><strong>Mobile No:</strong> ${mobileNo}</p>
                     <p><strong>${courseLabel}:</strong> ${courses.map(course => course.title).join(', ')}</p>`;

    // Include the subject only if it is provided
    if (subject && subject.length > 0) {
      emailSubject += ` - ${subjectLabel}: ${subject.map(sub => sub.title).join(', ')}`;
      emailText += `\n${subjectLabel}: ${subject.map(sub => sub.title).join(', ')}`;
      emailHtml += `<p><strong>${subjectLabel}:</strong> ${subject.map(sub => sub.title).join(', ')}</p>`;
    }
   
    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // Admin's email address
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, message: 'Error sending email' }), { status: 500 });
  }
}
