<!-- This script scrolls back to the top when the button at the bottom is clicked. -->
$(document).ready(function() {
    console.log("ready!");
    $( "#back-to-top-button" ).click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});
