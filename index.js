
// index page

let noteListElement = document.getElementById("note-list")
let noteListElementBootstrap = document.getElementById("note-list-bootstrap")
console.log(notes)


// save to db from note.data.js
//if( localStorage.length === 0 ){
  //  for( note of notes ){
    //    saveIntoDb( note )
    //}
//}


// go to fetch
if( localStorage.length !== 0 ){

    for( let index = 0; index < localStorage.length; index++ ){

        let key = localStorage.key(index)
        console.log({key})
        const value  = JSON.parse( localStorage.getItem(key) )


        let noteItemContainer = document.createElement("li")
        noteItemContainer.setAttribute("class", "list-group-item")
        noteItemContainer.setAttribute("id", "note" + key)

       

        let noteItemContent = document.createElement("div")
        noteItemContent.setAttribute("class", "ms-2 me-auto")

        let noteItemContentTitle = document.createElement("div")
        noteItemContentTitle.setAttribute("class", "fw-bold")
        noteItemContentTitle.textContent = value.title

        let noteItemContentDescription = document.createElement("p")
        noteItemContentDescription.textContent = value.content

        let noteItemContentId = document.createElement("span")
        noteItemContentId.setAttribute("class", "badge bg-primary rounded-pill")
        //noteItemContentId.textContent = key

        let buttonContainer = document.createElement("div")
        buttonContainer.setAttribute("class", "row")

        let deleteButtonElement = document.createElement("button")
        deleteButtonElement.innerHTML = "Delete"    
        deleteButtonElement.setAttribute("class", "btn btn-danger")
        deleteButtonElement.setAttribute("type", "button")
        deleteButtonElement.setAttribute("id", "delete" + key)
        deleteButtonElement.setAttribute("name", key)
        
        let lightButtonElement = document.createElement("button")
        lightButtonElement.innerHTML = "Edit"    
        lightButtonElement.setAttribute("class", "btn btn-secondary")
        lightButtonElement.setAttribute("type", "button")
        lightButtonElement.setAttribute("id", "edit" + key)
        lightButtonElement.setAttribute("name", key)

        buttonContainer.appendChild(lightButtonElement)
        buttonContainer.appendChild(deleteButtonElement)
        noteItemContent.appendChild(noteItemContentTitle)
        noteItemContent.appendChild(noteItemContentDescription)
        noteItemContainer.appendChild(noteItemContent)
        noteItemContent.appendChild(buttonContainer)
        noteItemContainer.appendChild(noteItemContentId)
        //buttonContainer.prepend( noteItemContainer)
        noteItemContainer.appendChild(noteItemContent)

        noteListElementBootstrap.appendChild(noteItemContainer)

    }


}
// noteListElement.appendChild

let newTabButtonElement = document.getElementById("new-tab")
newTabButtonElement.addEventListener("click", (e) => {
     window.open("create.html", '_blank').focus()
     var windowObjectReference;
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



