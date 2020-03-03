class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count = 0
        }
        addOne() {
            this.setState()
        }
    }
    render () {
    return (
        <div>
          <h1>The current count is {count}</h1>
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setCount(count - 1)}>-1</button>
          <button onClick={() => setCount(0)}>reset</button>
        </div>
      )
}