function createCard(title, author, price, image) {
let html = `<div class="card">
                        <div class="image">
                                <img src="${image}" alt=""/>
                        </div>
                        <div class="text">
                                <h1>${title}</h1>
                                <div class="info">
                                        <div class="author">${author}</div>
                                        <div class="price">Rs. ${price}</div>
                                </div>
                        </div>
                </div>`;
document.querySelector(".container").insertAdjacentHTML("beforeend", html);
}
// use this function to automatically style and insert a card to diaplay a book cover, name, author, and price
// createCard("To Kill A Mocking Bird", "Harper Lee", 240, "https://th.bing.com/th/id/OIP.86saHbx18iltkDCl1G6OSgHaLJ?w=189&h=285&c=7&r=0&o=5&dpr=1.1&pid=1.7")
// createCard("The Lord of the Rings: The Fellowship of the Ring", "J. R. R. Tolkien", 560, "https://m.media-amazon.com/images/I/A107128OO2L._AC_UY327_FMwebp_QL65_.jpg")