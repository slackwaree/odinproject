const container = document.querySelector('.container')
const formContainer = document.querySelector('.form-container');
const submitBtn = document.querySelector('.add-book-submit');
const docFrag = document.createDocumentFragment();

const newBookBtn = document.querySelector('.new-book-btn');
newBookBtn.addEventListener('click', () => {
    formContainer.classList.toggle('hidden');
});

const myLibrary = [];

class Book {
    constructor(title, author, pages, crypto) {
        this.title = title,
        this.author = author,
        this.pages = pages;
        this.crypto = crypto;
    }
    pushBook() {
        myLibrary.push(this);
    }
}
submitBtn.addEventListener('click', () => { // Function to create book entry
    const getBookTitle = document.getElementById('title').value;
    const getBookAuthor = document.getElementById('author').value;
    const getBookPageCount = document.getElementById('pages').value;
    const getBookIsRead = document.getElementById('isRead').checked;

    if (getBookTitle != '' &&
        getBookAuthor != '' &&
        getBookPageCount >= 1) { // form validation
        let newBookEntry = document.createElement('div');
        newBookEntry.classList.add('grid-item');
        container.appendChild(newBookEntry);
        
        const bookContents = document.createElement('div');
        bookContents.classList.add('book-contents');
    
        newBookEntry.appendChild(bookContents);
        bookContents.appendChild(docFrag);

        const removeBookBtn = document.createElement('div');
        removeBookBtn.classList.add('remove-book-btn');
        removeBookBtn.addEventListener('click', () => {
            console.log(book.crypto)
            myLibrary.splice(myLibrary.indexOf(book), 1)
            console.log(myLibrary)
            removeBookBtn.parentElement.parentElement.remove();
        })
        bookContents.appendChild(removeBookBtn);

        const book = new Book(getBookTitle, getBookAuthor, getBookPageCount, crypto.randomUUID());
        for (let key in book) {
            let h3Create = document.createElement('h3');
            h3Create.textContent = `${book[key]}`;
            bookContents.appendChild(h3Create);
        }
        bookContents.lastChild.remove(); // remove crypto

        const createBtnContainer = document.createElement('div');
        createBtnContainer.classList.add('btn-container');
        bookContents.appendChild(createBtnContainer);
    
        const createBtn = document.createElement('button');
        if (getBookIsRead) { // if getBookIsRead.checked()
            createBtn.classList.add('is-read');
        }
        createBtn.addEventListener('click', () => {
            createBtn.classList.toggle('is-read');
        })
        createBtnContainer.appendChild(createBtn);
        formContainer.classList.toggle('hidden');
        book.pushBook();
    }
    else {
        window.alert('Please fill out all fields. Minimum page count is 1.');
    }
});