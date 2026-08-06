export async function submitWeb3Form(formData) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY';

  const {
    formType = 'Contact Form Submission',
    name = '',
    email = '',
    phone = '',
    course = '',
    cityCountry = '',
    age = '',
    preferredTime = '',
    message = '',
  } = formData;

  const payload = {
    access_key: accessKey,
    subject: `[${formType}] Submission from ${name || email || 'Website Visitor'}`,
    from_name: 'Noor Sphere Quran Academic',
    name: name,
    email: email,
    phone: phone,
    course: course,
    city_country: cityCountry,
    student_age: age,
    preferred_time: preferredTime,
    message: message,
  };

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Web3Forms Error:', error);
    return { success: false, message: error.message };
  }
}
