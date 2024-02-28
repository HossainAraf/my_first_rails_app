let HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
});

// export default HelloWorld;

// Register the component globally
window.HelloWorld = HelloWorld;
