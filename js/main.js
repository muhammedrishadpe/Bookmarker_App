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
    console.log(Bookmark);

    // Prevent form  from submitting
    e.preventDefault();
}