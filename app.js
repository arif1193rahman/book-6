const searchBook = () => {
    const inputField = document.getElementById('input-field');
    // console.log(inputField.value)
    const searchFieldText = inputField.value;
    inputField.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchFieldText}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayBookSelf(data.docs[0]))
}

const displayBookSelf = (self) => {
    // console.log(self)
    const searchBookResult = document.getElementById('search-book-result');

}
