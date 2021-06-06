// UI vars
var models = [
    {
        name: 'gray',
        image: '/img/ios-11-01.jpeg',
        link: 'https://www.apple.com/'
    },

    {
        name: 'white',
        image: '/img/ios-11-03.jpeg',
        link: 'https://www.apple.com/'
    },

    {
        name: 'blue',
        image: '/img/ios-11-04.jpeg',
        link: 'https://www.apple.com/'
    },

    {
        name: 'green',
        image: '/img/ios-11-05.jpeg',
        link: 'https://www.apple.com/'
    }

];

var settings = {
    duration: '1000',
    random: false
}

var index = 0;
var slideCount = models.length;
var interval;

init(settings);

// Arrows
document.querySelector('.fa-arrow-left').addEventListener('click', function () {
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-right').addEventListener('click', function () {
    index++;
    showSlide(index);
    console.log(index);

});

document.querySelector('#btn-id').setAttribute('target', '_blank');

function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slideCount - 1;
    }

    if (i >= slideCount) {
        index = 0;
    }

    // Content
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('#btn-id').setAttribute('href', models[index].link);
}

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    });
});

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings);
    });
});

function init(settings) {

    // 2 saniyeden sonra döngü/fonksiyon durur
    // setTimeout(() => {        
    // }, timeout);

    var prev;
    interval = setInterval(function () {

        if (settings.random) {

            // random index
            do {
                index = Math.floor(Math.random() * slideCount);
            } while (index == prev);
            prev = index;
        }
        else {
            // artan index
            if (slideCount == index + 1) {
                index = 0;
            }
            else {
                showSlide(index);
                index++;
            }
        }
        showSlide(index);

    }, settings.duration);

}
