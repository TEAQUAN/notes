
// index page

let noteListElement = document.getElementById("note-list")
let noteListElementBootstrap = document.getElementById("note-list-bootstrap")
console.log(notes)

for( note of notes ){
    // localStorage.setItem(note.unique, JSON.stringify( {"title" : note.title, "content" : note.content} ))
    saveIntoDb( note )
    
    // localStorage.setItem(`${note.unique}`,  `${note.title}`)
}

if( localStorage.length !== 0 ){

    for( let index = 0; index < localStorage.length; index++ ){
        let key = localStorage.key(index)
        console.log({key})
        const value  = JSON.parse( localStorage.getItem(key) )
        let div = document.createElement("div")
        div.setAttribute("class","note-item")
        div.setAttribute("id","note" + key)

        let p = document.createElement("p")
        p.textContent = value.title

        div.appendChild(p)

        let anotherDiv = document.createElement("div")
        anotherDiv.setAttribute("class", "note-item-action")
    
        let editButton = document.createElement("button")    
        editButton.innerHTML = "Edit"
        editButton.setAttribute("class", "edit")
        editButton.setAttribute("id", "edit"+ key)
        editButton.setAttribute("name", key)

        let deleteButton = document.createElement("button")
        deleteButton.innerHTML = "Delete"    
        deleteButton.setAttribute("class", "delete")
        deleteButton.setAttribute("id", "delete"+ key)
        deleteButton.setAttribute("name",  key)

        anotherDiv.appendChild(editButton)
        anotherDiv.appendChild(deleteButton)

        div.appendChild(anotherDiv)

        //let txtarea = document.createElement("textarea")
        //txtarea.setAttribute("class", "ADDNOTE")
        //txtarea.setAttribute(id, "addNote"+ key)
        //txtarea.placeholder("TYPE HERE")

        noteListElement.appendChild(div)
    } 



}
// noteListElement.appendChild

let newTabButtonElement = document.getElementById("new-tab")
newTabButtonElement.addEventListener("click", (e) => {
     window.open("create.html", '_blank').focus()
     var windowObjectReference;
//var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
   // window.open("http://www.cnn.com/", "CNN_WindowName", windowFeatures);
})

document.addEventListener("click", (e) => {
    // console.log( e.target )
    const action = e.target.textContent
    console.log( action )

    if( action === "Delete" ){
        const key = e.target.getAttribute("name")
        localStorage.removeItem(key)
        document.getElementById("note" + key).remove()
    }

    if ( action === "Edit" ){
        const key = e.target.getAttribute("name")
        const content = localStorage.getItem(key) 
        // document.getElementById("edit-note").value = content.title
        // window.open("edit.html", '_blank').focus()
        let query = `id=${key}&note=${content}` 
        window.location.href = `edit.html?${query}` 
    }
})



