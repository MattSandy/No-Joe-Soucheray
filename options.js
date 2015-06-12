jQuery(document).ready(function () {
    $("#toggle-joe").click(function(){
        if($('#toggle-joe').prop('checked')!=false) {
            chrome.storage.sync.set({
                enabled: true
            });
            chrome.tabs.getSelected(null, function(tab) {
                // Send a request to the content script.
                chrome.tabs.sendRequest(tab.id, {action: "remove_content"}, function(response) {
                    //Some fun notification on success?
                });
            });
        } else {
            chrome.storage.sync.set({
                enabled: false
            });
        }
    });
});
function restore_options() {
    chrome.storage.sync.get(function(options) {
        if(options.enabled==false) {
            $('#toggle-joe').prop('checked', false);
        }
    });
}
document.addEventListener('DOMContentLoaded', restore_options);