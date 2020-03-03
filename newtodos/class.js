class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count = 0
        }
        addOne =() => {
            this.setState((prevState) => {
                return {
                    count: prevState.count + 1
                }
            })
        }
        minusOne = () => {
            this.setState((prevState) => {
                return {
                    count: prevState.count -1
                }
            })
        }

        reset = () => {
            this.setState(() => {
                return {
                    count: 0
                }
            })
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