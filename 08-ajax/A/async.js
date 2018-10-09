var http = new XMLHttpRequest();

http.open('GET', '/data/file.json');

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        let data = JSON.stringify(http.responseText);
        console.log(data);
    } else {
        console.log('error occurred' + http.status);
    }
}
// onreadystatechange should be before http.send()
http.send();

