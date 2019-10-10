class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: '',
      interval: {},
      items: [
        { text: "Build something awesome", done: true }
      ]
    }
    this.setTime.bind(this);
    this.getTime.bind(this);
  }

  setTime(time) {
    let tim = this.getTime();
    const interval = setInterval(this.setState({ time: tim }), 1000);
  }
  getTime() {
    let now = moment().format('HH:mm:ss A');
    return now;
  }


  render() {
    return (
      <div>
        <h2>Clock:</h2>
        <ol>
          {this.state.items.map(item => (
            <li key={item.id}>
              <label>
                <span>{moment().format('HH:mm:ss A')}{this.state.time}</span>
              </label>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.querySelector("#app"))
