import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { active, toggle, reset } = this.props;
    return (
      <div
        style={{
          display: "flex"
        }}
      >
        {!active ? (
          <button onClick={toggle}>Start</button>
        ) : (
          <button onClick={toggle}>Stop</button>
        )}
        <button onClick={reset}>Reset</button>
        <style jsx>
          {`
            button {
              flex: 1;
              padding: 10px;
              font-size: 16px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Footer;
