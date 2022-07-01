import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xgerbnbk');

  if (state.succeeded) {
    return <p>Thanks for contacting me, I will get back to you shortly!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='contact-form' id='contactForm'>
      <label htmlFor='email'>Your email address</label>
      <input id='email' type='email' name='email' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />

      <label htmlFor='message'>Your message</label>
      <textarea id='message' name='message' />
      <ValidationError prefix='Message' field='message' errors={state.errors} />

      <button
        type='submit'
        disabled={state.submitting}
        className='btn submit-btn'
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
