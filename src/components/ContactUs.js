import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Tel: <a href='https://wa.me/+5584999828379'>+55 (84) 99982-8379</a></h4>
                <h4>Email: 
                  <a href='mailto:arycleniox@ufrn.edu.br'> {resumeData.linkedinId}</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}