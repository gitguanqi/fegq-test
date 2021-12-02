const $ = require('jquery');

function addCon () {  
    $('#content').html('<h1>hello</h1>');
}

function add (a,b) {  
    return a+b;
}

const test = {
    addCon,
    add,
}

module.exports = test;
