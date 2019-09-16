import React, { Component } from 'react';

const TITLES = [ 
    'A Software Engineer',
    'A Developer',
    'An Enthusiastic learner',
    'A Cricket Lover'
];

class Title extends Component {

    state= { titleIndex: 0 , fadeIn: true };

    componentDidMount() {
        this.timeOut = setTimeout(() => this.setState({ fadeIn:false }),2000);

        this.animateTitles();
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut);
        clearInterval(this.titleInterval);
    }

    animateTitles = () => {
      this.titleInterval =  setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length ;

            this.setState({ titleIndex, fadeIn: true }) ;

            this.timeOut = setTimeout(() => this.setState({ fadeIn:false }),2000);
        },4000);
    }

    render() {
        
        const { fadeIn,titleIndex } = this.state;
        const title = TITLES[titleIndex];

        return (
            <p className={ fadeIn? 'title-fade-in': 'title-fade-out' }>I am {title} .</p>
        )
    }
}

export default Title;