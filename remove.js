jQuery(document).ready(function () {
    if($("h1:contains('Joe Soucheray')").length) {
        $("h1").html("Something Dumb");
        $("#articleBody").html("<p>Extended Dumb Shit... Just Ignore.</p>");
    }
});