import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    
    // Lodash, currently included via this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    
    return element;
}

document.body.appendChild(component());