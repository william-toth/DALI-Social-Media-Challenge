/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, BreadCrumb, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.scss';
import ReactMarkdown from 'react-markdown';
import { fetchPost, updatePost } from '../actions';
import editImg from '../img/edit.png';
import data from '../constant/DALI_Data.json';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  backToProfiles = () => {
    this.props.history.push('/profiles');
  }

  render() {
    const { prof } = this.props;
    return (
      <div>
        <button type="button" onClick={() => { this.backToProfiles(); }} className="back">&#8592; Back to Profiles</button>
        <Card className="indiv-prof" style={{ background: 'linear-gradient(135deg, rgba(70,255,130,1) 10%, rgba(50,209,220,1) 82%)' }}>
          <Card.Body>
            <Card.Title style={{ fontSize: '1.5rem' }}>{prof.name} {prof.year}</Card.Title>
            <Card.Text>{prof.role}</Card.Text>
            <Card.Img style={{
              width: '70%', height: '35vw', borderRadius: '50%', marginLeft: '15%',
            }}
              src={prof.picture}
              className="indiv-prof-photo"
            />
            <Card.Text />
            <Card.Text>Hometown: {prof.home}</Card.Text>
            <Card.Text>Major: {prof.major}</Card.Text>
            <Card.Text>Birthday: {prof.birthday}</Card.Text>
            <Card.Text>Favorite Artist: {prof.favoriteArtist}</Card.Text>
            <Card.Text>Quote: {prof.quote}</Card.Text>
          </Card.Body>
        </Card>
        <button type="button" onClick={() => { this.backToProfiles(); }} className="back-bottom">&#8592; Back to Profiles</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  prof: reduxState.post.prof,
});

export default connect(mapStateToProps, null)(Profile);
