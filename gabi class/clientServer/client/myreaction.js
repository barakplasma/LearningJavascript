var HeaderComponent = React.createClass({
    render: function () {
            return (
                <div>
                    <h1>{this.props.text}</h1>
                </div>
            );
    }
})

ReactDOM.render(
    <HeaderComponent text="Hello Class" />,
    document.querySelector('#Header')
);

ReactDOM.render(
    <HeaderComponent text="Another H1" />,
    document.querySelector('#SITE-CONTAINER')
);