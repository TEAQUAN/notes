


// create page

let saveButtonElement = document.getElementById("save")
saveButtonElement.addEventListener("click", (e) => {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value ;

    let note = 
    {  
        "unique" : localStorage.length + 1,
        "title" : title,
        "content" : description
    }

    saveIntoDb(note)

    window.location.href = "index.html"
})

    
	