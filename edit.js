let query = decodeURIComponent(window.location.search)
let values =  query.substring(1).split("&")  

let noteId = values[0].split("=")[1]
let note = JSON.parse( values[1].split("=")[1] )

document.getElementById("note-id").textContent = noteId
document.getElementById("title").value = note.title
document.getElementById("description").value = note.content 


let saveButtonElement = document.getElementById("save")

saveButtonElement.addEventListener("click", (e) => {
    e.preventDefault()

    let note = {
        "unique" : noteId,
        "title" : document.getElementById("title").value,
        "content" : document.getElementById("description").value
    }

    console.log(note);

    saveIntoDb(note)
    window.location.href = "index.html"
})



