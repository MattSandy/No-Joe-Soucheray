jQuery(document).ready(function () {
    chrome.storage.sync.get(function(options) {
        if(options.enabled!=false) {
            remove_content();
        }
    });
});
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.action == "remove_content") {
        sendResponse({dom: "Removing Content"});
        remove_content();
    } else {
        sendResponse({}); // Send nothing..
    }
});
function remove_content() {
    if($("h1:contains('Joe Soucheray')").length) {
        $("h1").html("Something Dumb");
        $("#articleBody").html("<p>Extended Dumb Shit... Just Ignore.</p>");
    }
    $("#toggle-joe").click(function(){
        chrome.storage.sync.set({
            enabled: true
        });
    });
}