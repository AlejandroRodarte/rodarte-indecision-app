class Counter extends React.Component {

    constructor(props) {

        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };

    }

    componentDidMount() {
        const count = +localStorage.getItem('count') || 0;
        this.setState(() => ({ count }));
    }

    componentDidUpdate() {
        localStorage.setItem('count', this.state.count);
    }

    // call setState to set the new state values and automatically re-render
    // the callback function has access to the previous state values
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>
                    Count: { this.state.count }
                </h1>

                <button onClick={ this.handleAddOne }>
                    +1
                </button>

                <button onClick={ this.handleMinusOne }>
                    -1
                </button>

                <button onClick={ this.handleReset }>
                    Reset
                </button>
            </div>
        );
    }

}

ReactDOM.render(<Counter />, document.getElementById('app'));