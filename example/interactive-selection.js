var React = require('react');
var input = React.DOM.input;

module.exports = React.createClass({
    getDefaultProps: function() {
        return {
            value: ''
        };
    },
    getInitialState: function(){
       return {
           value: this.props.value
       }
    },
    
    render: function() {
        return input({
            className: 'json-inspector__selection',
            value: this.state.value,
            size: Math.max(1, this.props.value.length),
            spellCheck: false,
            onClick: this.onClick,
            onFocus: this.onFocus,
            onChange: this.onChange
        });
    },
    onChange: function(event) {
        var value = event.target.value;
        this.setState({
            value: value
        });
        console.log('change:', value);
    },
    onClick: function(e) {
        console.log('onClick');
        e.stopPropagation();
    },
    onFocus: function(e) {
        e.target.select();
    }
});
