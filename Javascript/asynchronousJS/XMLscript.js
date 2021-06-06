var xhr = new XMLHttpRequest();

// Herhangi bir değişiklikte (hata, onay vb.) bu komut çalışır
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {

        if (xhr.status === 200) {
            console.log(xhr.responseText);

        } else if (xhr.status === 404) {
            console.log('Page not found');
        }

    }
}

xhr.onprogress = function() {
    console.log('On progressing');

    
}

// Asenkron veri çağırma
xhr.open('GET', 'msg.txt', true);

// Senkron veri çağırma
// xhr.open('GET', 'msg.txt', false);

// Veri upload veya update ederken 'POST'
// xhr.open('POST', 'msg.txt');

xhr.send();

console.log('Hello there')

/*

readyState :
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

status :
200: "OK"
403: "Forbidden"
404: "Page not found"

*/