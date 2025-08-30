import React, { Component } from "react";

class WelcomeMessage extends Component {
    render() {
        const { username, greeting } = this.props;

        return (
            <div>
                { }
                <style>{`
          .welcome-container {
            font-size: 20px;
            color: #2c3e50;
            margin: 12px 0;
            font-weight: 500;
          }
        `}</style>

                <p className="welcome-container">
                    {greeting}, {username}!
                </p>
            </div>
        );
    }
}

WelcomeMessage.defaultProps = {
    greeting: "Hello",
};

export default WelcomeMessage;
