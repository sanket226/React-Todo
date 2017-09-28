var React = require('react');

var AddTodo = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var todo = this.refs.todo.value;
    if(todo.length > 0) {
      this.refs.todo.value= '';
      this.props.onEdit(todo);
    }
    else {
      this.refs.todo.focus();
    }
  },

  render: function(){
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="todo" placeholder="What do you need to do?"/>
            <button className="button expanded">Add Todo</button>
          </form>
        </div>
    )
  }
});

module.exports = AddTodo;
