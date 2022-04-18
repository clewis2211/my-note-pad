//Get the form and textarea
let form = document.getElementById('form')
let submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click',addNote)
let resetBtn = document.getElementById('resetBtn')



// form.addEventListener('submit', addNote)

//Function that capture the value in the textarea and addes it to the note area
function addNote(e){
    e.preventDefault()
    let newNote = document.getElementById('textArea').value
    document.getElementById('textArea').value = '';
    let noteDiv = document.getElementById('noteDiv')
    // noteDiv.innerText = newNote


    //Time and Date
    let newDate = new Date();
    let toDate = newDate.getDate()
    let toHour = newDate.getHours();
    let toMinutes = newDate.getMinutes();
    // let toSeconds = newDate.getSeconds();
    let toTime = newDate.toLocaleTimeString();
    let session = 'AM';
    let hrMinSec = toDate +'  '+toHour +":"+toMinutes
    // +":"+toSeconds
    let h3 = document.createElement('h6')
    h3.innerText = hrMinSec


   
 


    //Getting the div in the document that containes the container for all of the notes
    let listOfNotes = document.getElementById('noteDiv')
    


     //Delete Button on the note
     let deleteBtn = document.createElement('button');
     deleteBtn.addEventListener('click', function() {
         noteDiv.removeChild(text)
     })
     deleteBtn.className = "btn btn-primary btn-sm float-right delete";
     deleteBtn.id = 'deleteBtn';
     deleteBtn.style.float = "right";
     deleteBtn.style.marginBottom = '10px'
     let deleteIcon = document.createTextNode('X')
     deleteBtn.appendChild(deleteIcon)
     // li.appendChild(deleteBtn)

    //  noteDiv.appendChild(deleteBtn)
    //new container to caputre the value and delete button
    let text = document.createElement('div');
    text.className = 'noteText'
    text.innerText = newNote
    text.appendChild(h3)
    text.appendChild(deleteBtn)
    noteDiv.appendChild(text)


}

// //Delete item (delete button)
// function removeItem(e){
//     //check to see if what we are clicking has the class notes in it
//     if(e.target.classList.contains('delete')){
//         let li = e.target.parentElement;
//         todoItems.removeChild(li)
//     }
// }
