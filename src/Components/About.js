import React, { Component } from 'react';

class About extends Component {
  render() {

   var linkedin = "www.linkedin.com/in/erik-adames-564b17bb";

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var project = this.props.data.project;
      var github = this.props.data.github;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city} {state}<br /></span>
						   {/* <span>{phone}</span><br /> */}
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
            <ul className="social">
               <a href={project} className="button btn github-btn" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" ></i>Linkedin</a>
               <a href={github} className="button btn project-btn" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
