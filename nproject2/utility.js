function saveIntoDb ( note ) {
    localStorage.setItem(note.unique, JSON.stringify( {"title" : note.title, "content" : note.content} ))
}