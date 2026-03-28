// ===== CONTACT FORM SUBMISSION =====
    // Function: handleContactSubmit()
    // Purpose: Capture enquiry details and provide a smooth confirmation flow
    // Triggers: Form submit on the contact form
    document.getElementById('contact-form').addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const name = String(formData.get('name') || '').trim();
      const phone = String(formData.get('phone') || '').trim();
      const eventType = String(formData.get('event_type') || '').trim();
      const eventDate = String(formData.get('event_date') || '').trim();
      const message = String(formData.get('message') || '').trim();

      const summary = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Event Type: ${eventType}`,
        `Event Date: ${eventDate}`,
        `Message: ${message}`
      ].join('\n');

      alert('Thank you for reaching out to PhotoCentre Studio. We will contact you soon.\n\n' + summary);
      e.target.reset();
    });