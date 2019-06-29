import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
        console.log(`submitted`);
      event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id="gform" className="contactform" name="contact" method="POST" action="https://script.google.com/macros/s/AKfycbwmkwAtAWuPmPkm2eBVEicDp6v7XDa4nTcJGiuRDf2pHYsELsE/exec">
            Name:<br />
            <input className="formbox" type="text" name="name" id="a-name" defaultValue={this.state.value} onChange={this.handleChange} />
            <br />
            Email:<br />
            <input className="formbox" type="text" name="email" id="email"  defaultValue={this.state.value} onChange={this.handleChange} />
            <br />
            Message:<br />
            <textarea className="message" type="text" name="message" id="message" defaultValue={this.state.value} onChange={this.handleChange} ></textarea>
            <br />
            <input className="button" type="submit" value="Submit" id="send-btn" />
        </form>
        );
      }
    }


    export default ContactForm;