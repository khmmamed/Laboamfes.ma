import * as React from 'react';

export interface ContactUsProps {
}

export default class ContactUs extends React.PureComponent<ContactUsProps> {
  public render() {
    return (
        <section id="ContactUs">
            <div className="light-bg">
                <div className="container-fluid">
                    <div className="row contact-container">
                        <div className="col-sm-6 map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13224.41767775578!2d-4.995804782153757!3d34.04119247948243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8bc31af11adb%3A0x9e14215adca351f0!2sLABORATOIRE%20FES!5e0!3m2!1sfr!2sma!4v1577694658832!5m2!1sfr!2sma" width="100%" height="500"  style={{border: 0}} ></iframe>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="title-content">
                                        <h1>Laisser Nous un Message</h1>
                                        <hr /><hr />
                                    </div>
                                    {/* <ContactFormApp /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
