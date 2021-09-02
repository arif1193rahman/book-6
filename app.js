const searchBook = () => {
    const inputField = document.getElementById('input-field');
    // const displayImage = document.getElementById('display-image');
    // console.log(inputField.value)
    const searchFieldText = inputField.value;
    // const displayImageId = displayImage.innerHTML;
    inputField.value = '';

    // const url1 = `https://covers.openlibrary.org/b/id/${displayImageId}-M.jpg`
    const url = `https://openlibrary.org/search.json?q=${searchFieldText}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayBookSelf(data))
}

const displayBookSelf = selfs => {
    // console.log(self)
    const searchBookResult = document.getElementById('search-book-result');
    searchBookResult.textContent = "";
    const bookList = selfs.docs;
    // console.log(bookList.length);
    document.getElementById('total-books').innerText = `Total Book ${bookList.length}`;
    bookList.forEach(self => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                 <div class="card h-100">
                    <div>
                    <img id="display-image" src="https://covers.openlibrary.org/b/id/${self.cover_i}-L.jpg" class="card-img-top" alt="">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h5 class="card-title">Book NAme: ${self.title}</h5>
                        <h5 class="card-title">Author NAme: ${self.author_name}</h5>
                        <h5 class="card-title">Publisher: ${self.first_publish_year}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
        `;
        searchBookResult.appendChild(div);
    })
}

// const imageResult = images => {
//     // console.log(images)
// }
