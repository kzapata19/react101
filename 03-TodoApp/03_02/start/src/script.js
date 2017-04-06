var Todo = React.createClass({

    render: function() {

           return (
            <div>

                <h1>Things to DO</h1>
                <div className="form-inline">

                  <div className ="form-group">
                    <input className="form-control" placeholder='Add Todo' />
                    <button className='btn btn-default btn-sm'>+</button>
                  </div>
                </div>

                <ul>
                  <li className="todo">Call Karen</li>
                  <li className="todo">Pay Phone Bill</li>
                </ul>
            </div>
       );
    },


});


React.render(<Todo />, document.getElementById('todo'));
