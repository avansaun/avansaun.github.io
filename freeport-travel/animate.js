
function showAdditionalForm() {
    var elem = document.getElementById('extraInfoContent');
    var submitBasicBtn = document.getElementById('submitBasicBtn');
    if (elem.style.display === 'none') {
        elem.style.display = 'block';
        submitBasicBtn.style.display = 'none';
    } else {
        elem.style.display = 'none';
        submitBasicBtn.style.display = 'block';
    }
}

function showBasicMessage() {
  var sumitNotifBasic = document.getElementById('submitNotifBasic');
  var sumitNotifExtra = document.getElementById('submitNotifExtra');
  submitNotifBasic.style.color = 'green';
  submitNotifExtra.style.color = 'white';
}

function showExtraMessage() {
  var sumitNotifExtra = document.getElementById('submitNotifExtra');
  var sumitNotifBasic = document.getElementById('submitNotifBasic');
  submitNotifExtra.style.color = 'green';
  submitNotifBasic.style.color = 'white';
}

function exploreScrollDown() {
  var targetY = document.getElementById('billB').scrollHeight;
}
