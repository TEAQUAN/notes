


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

let input = document.querySelector(".forms");
let button = document.querySelector(".success");

button.disabled = true; //setting button state to disabled

input.addEventListener("change", stateHandle);

function stateHandle() {
    if (document.querySelector(".forms").value === "") {
        button.disabled = true; //button remains disabled
    } else {
        button.disabled = false; //button is enabled
    }
}
    
	
