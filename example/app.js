var render = require('react-dom').render;
var createFactory = require('react').createFactory;

var Inspector = require('..');
var inspector = createFactory(Inspector);
var InteractiveSelection = require('./interactive-selection');
var interactiveSelection = createFactory(InteractiveSelection);

var data = require('./database');

document.addEventListener('DOMContentLoaded', function() {
    
    var onClick = (data) => {
        console.log('inspector click', data);
    }
    
    render(
        inspector({
            data: data,
            onClick: onClick,
            // onClick: console.log.bind(console),
            interactiveLabel: interactiveSelection
        }),
        document.getElementById('inspector')
    );
});
