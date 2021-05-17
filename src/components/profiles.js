/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, BreadCrumb, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.scss';
import ReactMarkdown from 'react-markdown';
import { fetchPost, updatePost, showProf } from '../actions';
import editImg from '../img/edit.png';
import data from '../constant/DALI_Data.json';

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  setProfile = (profile) => {
    this.props.showProf(profile);
    this.props.history.push(`/profiles/${profile.name}`);
  }

  render() {
    return (
      <div>
        <h2 style={{ fontSize: '2.5rem' }}>DALI PROFILES</h2>
        <div className="profiles">
          {data.map((prof) => {
            return (
              <Card className="profile">
                <Card.Img className="prof-photo" src={prof.picture} />
                <Card.Body>
                  <Card.Title>{prof.name}</Card.Title>
                  <Card.Text>{prof.role}</Card.Text>
                  <Card.Text>{prof.home}</Card.Text>
                  <Button onClick={() => { this.setProfile(prof); }}>Full Profile</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(null, { showProf })(Profiles);
