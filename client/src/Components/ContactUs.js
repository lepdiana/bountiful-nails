import React from 'react'

const ContactUs = () => {
    return(
        <div>
            <div className="parallax"></div>
            <div>
                <section>
                    section 1 - Intended for the location
                    <h1>Location</h1>
                    <p>325 South 500 West, Suite C</p>
                    <p>Bountiful, UT 84010</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.794297273112!2d-111.89428763581608!3d40.88562071636212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f7d664495a53%3A0xced4e62f1dade08c!2sBountiful%20Nails!5e0!3m2!1sen!2sus!4v1574630800400!5m2!1sen!2sus"></iframe>
                </section>
                <section>
                    section 2 - Intended for the hours
                    <h1>Hours</h1>
                    <p>Sun: CLOSED</p>
                    <p>Mon - Sat: 9:30am - 7:00pm</p>
                    <p>Walk-ins are welcomed.</p>
                    <p>**Hours are subject to change during the holidays.**</p>
                </section>
                <section>
                    section 3 - Intended for the phone number
                    <h1>Please reach out to us if you would like schedule an appointment or if you have any questions.</h1>
                    <p>Phone: 801-295-5368</p>
                </section>
            </div>

            <div className="parallax"></div>
        </div>
    )
}

export default ContactUs