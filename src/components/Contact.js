import React, {useEffect} from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';



function Contact() {
    useEffect(() => {
        const envelope = document.querySelector(".envelope");
    
        const toggleFold = () => {
            envelope.classList.toggle("fold");
        };
    
        const foldInterval = setInterval(toggleFold, 3000); 
    
        envelope.addEventListener("click", toggleFold);
    
        return () => {
            clearInterval(foldInterval);
            envelope.removeEventListener("click", toggleFold);
        };
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        // eslint-disable-next-line
        emailjs.sendForm('service_na389gt', 'template_ne9hrwn', e.target, 'LY3TwkgTk7wyeTOKT')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!❀');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email. Please try again later.');
            });

        e.target.reset();
    };


    return (
        <div className='contact'>
            <h1>Contact</h1>
            <h2>I'd love to hear from you</h2>

            <br></br>

            <div className='contact-content'>
                <div class="envelope">
                    <div class="top"></div>
                    <div class="left"></div>
                    <div class="back">
                        <div class="paper">
                        <span class="line one"></span>
                        <span class="line two"></span>
                        <span class="line three"></span>
                        <span class="line two"></span>
                        <span class="line one"></span>
                        </div>
                    </div>
                    <div class="right"></div>
                    <div class="bottom"></div>
                </div>


                {/* Contact Form */}
                <div className='contact-form'>
                    <form onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input type='text' name='from_name' required />

                        <label>Email:</label>
                        <input type='email' name='email' required />

                        <label>Message:</label>
                        <textarea name='message' required />

                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>

            <br></br>
            <br></br>

        </div>
    );
}

export default Contact;
