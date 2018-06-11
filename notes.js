console.log('Starting notes');
const fs = require('fs');
 
 var fetchNotes= ()=>{

try{
	var notesString = fs.readFileSync('notes-data.json');
	return JSON.parse(notesString);

}
catch(e) {
	return [];
}

 };


 var saveNotes= (notes)=>{

   fs.writeFileSync('notes-data.json',JSON.stringify(notes)); 

 };


var addNote = (title,body) =>{
  var notes = fetchNotes();

  var note = {
  	title,
  	body
  };



var duplicateNotes = notes.filter((note)=> note.title === title);


if (duplicateNotes.length === 0) {

   
notes.push(note);
 saveNotes(notes);
 return note;

}





};

var getAll = function () {
	console.log('Getting all notes');
}


 var getNote = (title) => {

   
     console.log('title:',title);
 	

 };



   var removeNote = ()=>{
   	console.log('Removing',title);
   }

module.exports = {
	//addNote:addNote;
	addNote,
	getAll,
	getNote,
	removeNote
};