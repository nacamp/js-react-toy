// https://react.vlpt.us/redux/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todos from './Todos';
import {addTodo, toggleTodo} from '../modules/todos';

class TodosContainerClass extends Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }

  onCreate = (text) => {
    // this.props.TodoActions.addTodo(text);
    this.props.addTodo(text);
  };

  onToggle(id) {
    // this.props.TodoActions.toggleTodo(id);
    this.props.toggleTodo(id);
  }

  render() {
    return (
        <Todos
            todos={this.props.todos}
            onCreate={this.onCreate}
            onToggle={this.onToggle}
        />
    );
  }
}

// import { bindActionCreators } from 'redux';
// import * as todoActions from '../modules/todos';
// export default connect(
//   (state) => ({
//     todos: state.todos,
//   }),
//   (dispatch) => ({
//     TodoActions: bindActionCreators(todoActions, dispatch),
//   }),
// )(TodosContainerClass);

export default connect(
    (state) => ({todos: state.todos}),
    {
      addTodo,
      toggleTodo,
    },
)(TodosContainerClass);
