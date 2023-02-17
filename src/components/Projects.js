import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>Projects</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">
              <Card style={{width: '33%', height: '75rem' }}>
                <Card.Img variant="top" src="https://i.ibb.co/vBy51V3/proj1.png" />
                <Card.Body>
                  <Card.Title style={{fontSize: '50px'}}>College Comparison Website</Card.Title>
                  <Card.Text style={{fontSize: '25px'}}>
                    We built this simple college comparison website that lets you search two different schools and compare them directly based on tuition and acceptance rate among other things.
                  </Card.Text>
                  <a href="https://github.com/NickJ13/Project-07" target="_blank" style={{fontSize: '50px'}}>Github</a>
                </Card.Body>
              </Card>
              <Card style={{width: '33%', height: '75rem' }}>
                <Card.Img variant="top" src="https://i.ibb.co/fx0zgFN/Proj2.png" />
                <Card.Body>
                  <Card.Title style={{fontSize: '50px'}}>Boston Street Food Blog</Card.Title>
                  <Card.Text style={{fontSize: '25px'}}>
                    We built this website to allow users in Boston to view all of the hottest street food vendors in Boston. Using our website, you can view the exact location as well as lots of other information on different street food vendors.
                  </Card.Text>
                  <a href="https://github.com/ekirbs/street-food-blog" target="_blank" style={{fontSize: '50px'}}>Github</a>
                </Card.Body>
              </Card>
              <Card style={{width: '33%', height: '75rem' }}>
                <Card.Img variant="top" src="https://i.ibb.co/ftdZxnT/Proj3.png" />
                <Card.Body>
                  <Card.Title style={{fontSize: '50px'}}>Game Watcher Website</Card.Title>
                  <Card.Text style={{fontSize: '25px'}}>
                    We built this website using react and the rawg api to allow users to view information on all of their favorite games. Users are able to wishlist games as well as view the different stores the games can be purchased at.
                  </Card.Text>
                  <a href="https://github.com/ogwalrus/Game-Info-App" target="_blank" style={{fontSize: '50px'}}>Github</a>
                </Card.Body>
              </Card>
            </div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
