/**
 * This script scrolls back to the top when the button at the bottom is clicked. It uses the jQuery library.
 */

$(document).ready(function() {
    $( "#back-to-top-button" ).click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});
