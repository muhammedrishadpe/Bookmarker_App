// Lisen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e){
    console.log('its works');
    // Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    
    var Bookmark = {
        name: siteName,
        url: siteUrl
    }

    // Local storage Test


    // Test if bookmark is null
    if(localStorage.getItem('bookmarks') === null){
        // init array
        var bookmarks = [];
        // add to arry
        bookmarks.push(bookmark);
        // set to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from LocalStorage
       var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
       // add bookmark to array
       bookmarks.push(bookmark);
       // Re-set back to localStorage
       localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    // Prevent form  from submitting
    e.preventDefault();
}