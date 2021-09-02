
document.getElementById('error-massage').style.display = "none";
const searchBook = () => {
    const inputField = document.getElementById('input-field');
    const searchFieldText = inputField.value;
    inputField.value = '';

    // Error massage and Handle
    if (searchFieldText === "") {
        displayError();
    }
    else {
        document.getElementById('error-massage').style.display = "none";

        const url = `https://openlibrary.org/search.json?q=${searchFieldText}`
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => displayBookSelf(data))
    }

}

// get error massage function
const displayError = () => {
    document.getElementById('error-massage').style.display = "block";
    document.getElementById('total-books').style.display = "none";
    document.getElementById('search-book-result').textContent = "";

}

// get book search result

const displayBookSelf = selfs => {
    document.getElementById('total-books').innerText = "";
    document.getElementById('error-massage').style.display = "block";
    const searchBookResult = document.getElementById('search-book-result');
    searchBookResult.textContent = "";
    const bookList = selfs.docs;

    // error Massage and handle
    if (selfs.numFound === 0) {
        displayError();
    }
    else {
        document.getElementById('error-massage').style.display = "none";
        document.getElementById('total-books').innerText = `Total Book ${bookList.length}`;

        // loop use(forEach)
        bookList.forEach(self => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                 <div class="card h-100">
                    <div>
                    <img id="display-image"  src="https://covers.openlibrary.org/b/id/${self.cover_i}-L.jpg" class="card-img-top" alt="">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">Book: <br>${self.title}</h5> <hr>
                        <h5 class="card-title text-center">Author: <br> ${self.author_name}</h5> <hr>
                        <h5 class="card-title text-center"><u>Publisher</u>: ${self.first_publish_year}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
        `;
            searchBookResult.appendChild(div);
        })
    }

}
