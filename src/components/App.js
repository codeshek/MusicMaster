import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import user_profile from '../assets/user_profile.png';
import Title from './Title';
import Jokes from './Jokes';

class App extends Component {

    state = { displayBio:false };

    // constructor() {
    //     super();
    //     this.state = { displayBio: false } ;
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render() {

        return (
            <div>
                <img src={user_profile} alt='user_profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Abhishek.</p>
                 { this.state.displayBio ? <Title /> : null}
                <p>I'm always looking forward to working on legendary projects. </p>
            {
                this.state.displayBio ? (
            <div>
                <p>I live in Delhi, and code most of time.</p>
                <p>My favorite language is Javascript, and I think React.js is awesome</p>
                <p>Besides coding, I also love Cricket and movies.</p>
                <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
        ) : ( 
            <div>
                <button onClick={this.toggleDisplayBio}>Read More </button>
            </div>
        ) }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
        <hr />
        <Jokes />
        </div>
        )
    }
}

export default App;