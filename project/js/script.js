import {PageFlip} from 'page-flip';

// const pageFlip = new PageFlip("wrapper");

// // or if you're using a script tag and page-flip.browser.js:
// const pageFlip = new St.PageFlip("wrapper");

// pageFlip.loadFromHtml(items);

const pageFlip = new PageFlip(document.getElementById('book'),
    {
        width: 400, // required parameter - base page width
        height: 600,  // required parameter - base page height
        showCover: true
    }
);

pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

pageFlip.on('flip', (e) => {
        console.log("Current page: " + e.data);
        // callback code
    }
);