import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Marvin",
        bio: "I am a software development student at GoMyCode. I enjoy learning JavaScript and React and building projects one step at a time.",
        imgSrc: process.env.PUBLIC_URL + "/profile.svg",
        profession: "Aspiring Full-Stack Developer",
      },
      shows: false,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.mountedAt = Date.now();
    this.timer = setInterval(() => {
      this.setState({
        seconds: Math.floor((Date.now() - this.mountedAt) / 1000),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleProfile = () => {
    this.setState((previousState) => ({ shows: !previousState.shows }));
  };

  render() {
    const { Person, shows, seconds } = this.state;

    return (
      <div className="App">
        <header className="site-header">
          <a href="#main" className="brand">M / PROFILE</a>
          <span>REACT STATE CHECKPOINT</span>
        </header>
        <main id="main">
          <p className="eyebrow">A LITTLE INTRODUCTION</p>
          <h1>A face behind<br /><span>the code.</span></h1>
          <p className="intro">Get to know the person building, learning, and growing.</p>
          <div className="controls">
            <button type="button" onClick={this.toggleProfile} aria-expanded={shows} aria-controls="profile-region">
              {shows ? "Hide profile" : "Show profile"}
            </button>
            <p className="timer">Time since mount: <strong>{seconds}</strong> seconds</p>
          </div>
          <div id="profile-region">
            {shows ? (
              <article className="profile-card" aria-label="Person profile">
                <div className="portrait-panel">
                  <img src={Person.imgSrc} alt={Person.fullName + " illustrated avatar"} />
                  <span>ALWAYS LEARNING</span>
                </div>
                <div className="profile-details">
                  <p className="eyebrow">HELLO, I'M</p>
                  <h2>{Person.fullName}</h2>
                  <p className="profession">{Person.profession}</p>
                  <p className="bio">{Person.bio}</p>
                  <p className="profile-note">Small steps. Real progress.</p>
                </div>
              </article>
            ) : (
              <div className="empty-state">
                <span aria-hidden="true">M</span>
                <h2>A quick hello awaits.</h2>
                <p>Click Show profile to reveal my story.</p>
              </div>
            )}
          </div>
        </main>
        <footer>Made by Marvin · React class components &amp; state</footer>
      </div>
    );
  }
}

export default App;
