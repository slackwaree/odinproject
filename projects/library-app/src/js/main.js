const container = document.querySelector('.container')
const formContainer = document.querySelector('.form-container');

const docFrag = document.createDocumentFragment();

const submitBtn = document.querySelector('.add-book-submit');
submitBtn.addEventListener('click', () => { // Function to create book entry
    const getBookTitle = document.getElementById('title').value;
    const getBookAuthor = document.getElementById('author').value;
    const getBookPageCount = document.getElementById('pages').value;
    const getBookIsRead = document.getElementById('isRead').checked;

    if (getBookTitle != '' && getBookAuthor != '' && getBookPageCount != '') {
        let newBookEntry = document.createElement('div');
        newBookEntry.classList.add('grid-item');
        container.appendChild(newBookEntry);
        
        const bookContents = document.createElement('div');
        bookContents.classList.add('book-contents');
    
        newBookEntry.appendChild(bookContents);
        bookContents.appendChild(docFrag);

        const book = new Book(getBookTitle, getBookAuthor, getBookPageCount, getBookIsRead);
        for (let key in book) {
            let h3Create = document.createElement('h3');
            h3Create.textContent = `${book[key]}`;
            bookContents.appendChild(h3Create);
        }
        const createBtnContainer = document.createElement('div');
        createBtnContainer.classList.add('btn-container');
        bookContents.appendChild(createBtnContainer);
    
        const createBtn = document.createElement('button');
        createBtn.classList.add('isRead-btn');
        createBtnContainer.appendChild(createBtn);
    
        if (getBookIsRead) { // if getBookIsRead checked
            createBtn.classList.add('is-read');
        }
        formContainer.classList.toggle('hidden');
    
        let isReadBtn = document.querySelectorAll('.isRead-btn'); // update node list;
        isReadBtn.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('is-read');
            })
        })
    }
});

const newBookBtn = document.querySelector('.new-book-btn');
newBookBtn.addEventListener('click', () => {
    formContainer.classList.toggle('hidden');
});

function Book(title, author, pages) {
    this.title = 'Title: ' + title,
    this.author = 'Author: ' + author,
    this.pages = pages + ' pages';
}

/* 
TODO:
- validate form data before submission
- kms :joy: :v:
*/