import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title} target="_blank" rel="noopener noreferrer">
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5><b>{projects.title}</b></h5>
                    <p>{projects.category}</p>
                    <br/>
                    <p><b>Technology: </b>{projects.tech}</p>
                  </div>
                </div>
              </a>
            </div>
            <br/>
            <a href={projects.repo} target="_blank" rel="noopener noreferrer"> Github Repo </a>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
