
// Call getTime to get values for Hours, Minutes, and Seconds
function getTheTime() {
  hr = timeSnapshot('hour');
  mn = timeSnapshot('minute');
  //sc = timeSnapshot('second');
  //var res = hr + ':' + mn + ':' + sc;
  var res = hr + ':' + mn;
  document.getElementById("time").innerHTML = res; // Print the current time
}

// Uses moment.js
function timeSnapshot(whatToGet) {
  theTime = moment();
  if (whatToGet === 'hour') {
      res = theTime.format('hh');
  } else if (whatToGet === 'minute') {
    res = theTime.format('mm');
  } else if (whatToGet === 'second') {
    res = theTime.format('ss');
  } else {
    document.write('Uh oh! Invalid parameter passed to getTime');
  }
  return res;
}
