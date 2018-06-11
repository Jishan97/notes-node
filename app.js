console.log('hi');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
 const notes = require('./notes.js');

 var command = process.argv[2];

 const argv = yargs.argv;


 console.log('Command:',command);
console.log('yargs',argv);

if (command === 'add') {

  var note = notes.addNote(argv.title,argv.body);

}



else if(command === 'list') {
	notes.getAll();
}



else if(command === 'read') {
	notes.getNote(argv.title);

}

else if(command === 'remove') {
	 notes.removeNote(argv.title);

}




else {
	console.log('not found');
}