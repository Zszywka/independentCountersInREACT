//--------------------------------COUNTER---------------------------------------
var Counter = React.createClass({
  // -----------------------------STATE-----------------------------------------
  // determine the initial state of our component(return object)
  getInitialState: function() {
    return {
      counter: 0
    };
  },
  //---------------------------FUNCTIONS----------------------------------------
  // functions change the state
  increment: function() {
    // method .setState (change the state)
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    })
  },

  // only for the exercise:
  getDefaultProps: function() {
    console.log('ustawianie domyslnych {}');
  },
  componentWillMount: function() {
    console.log('robienie operacji na {} i stanie przed renderowaniem');
  },
  componentDidMount: function() {
    console.log('zaladowanie DOM - mozna robic na nim rozne operacje, komponent widnieje na stronie,');
  },
  componentWillReceiveProps: function() {
    console.log('W momencie pojawienia się nowych {} możemy wykonać różne operacje dotyczące state mając dostęp do wartości nowych, ale także starych {}');
  },
  shouldComponentUpdate: function() {
    console.log('Możeby zmienić na false, jeśli nie chcemy, żeby aplikacja wywołała zmiany spowodowane przez zminę {} lub stanu');
    // this constructor should returned true or false !!!
    return true;
  },
  componentWillUpdate: function() {
    console.log('operowanie na DOM, ale bez modyfikacji stanu');
  },
  componentWillUnmount: function() {
    console.log('mozna anulować EventListenery/zapytanie sieciowe');
  },

  //
  // we use this.stater -> reference to the object(created in line 4)
  // render: function() {
  //   return React.createElement('div', {className: 'counter'},
  //     React.createElement('span', {}, 'Licznik' + this.state.counter)
  //   );
  // }

  render: function() {
    return (
      React.createElement('div', {className: 'counter'},
        React.createElement('span', {}, 'Counter: ' + this.state.counter),
        React.createElement('div', {},
          React.createElement('button', {className: 'incr_button', onClick: this.increment }, 'Increment counter (+)'),
          React.createElement('button', {className: 'decr_button', onClick: this.decrement}, 'Decrement counter (-)')
        )
      )
    );
  }
});

//------------------------WHOLE ELEMENT-----------------------------------------
// var element = React.createElement(Counter);
var element = React.createElement('div', {className: 'counters'},
  React.createElement('h1', {}, 'Independent Counters'),
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter)
);

//-----------------------CONNECT ELEMENT-----------------------------------------
ReactDOM.render(element, document.getElementById('app'));
