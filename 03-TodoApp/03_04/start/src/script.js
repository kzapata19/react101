var Todo = React.createClass({

    render: function() {

           return (
            <div>

                  <li className="todo">{this.props.children}</li>

            </div>
       );
    },


});


React.render(<div>
                <h1>Things to DO</h1>

                <div className="form-inline">

                    <div className="form-group">
                        <input className="form-control" placeholder="Add Todo" />
                        <button className="btn btn-default btn-sm">+</button>
                    </div>

                </div>

                    <ul>
                        <Todo>Call Henry</Todo>
                        <Todo>Pay phone bill</Todo>
                        <Todo>Make Dentist Appt</Todo>
                    </ul>

            </div>, document.getElementById('todo'));
