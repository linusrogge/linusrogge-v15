var navigation = document.querySelector('.navigation'),
    main = document.querySelector('.main')

document.querySelector(':root').style.setProperty('--navigation-height', `${navigation.clientHeight}px`)

window.onscroll = () => {
    if (window.scrollY > (main.getBoundingClientRect().top - navigation.clientHeight)) {
        navigation.classList.add('--muted')
    } else {
        navigation.classList.remove('--muted')
    }
}

(function() {
    var quotes = [
        {
            text: "You will never influence the world by trying to be like it.",
            author: "Travis Scott"
        },
        {
            text: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
            author: "Albert Einstein"
        },
        {
            text: "Knowing what you admire in others is a wonderful mirror into your deepest, as yet unborn, self.",
            author: "Gretchen Rubin"
        },
        {
            text: "We accept the love we think we deserve",
            author: "From: The Perks of Being a Wallflower"
        },
        {
            text: "Always deliver more than expected.",
            author: "Larry Page"
        },
        {
            text: "A [person] who suffers before it is necessary, suffers more than is necessary",
            author: "Seneca"
        }
    ]
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector('.footer blockquote p').innerHTML = quote.text;
    document.querySelector('.footer blockquote cite').innerHTML = quote.author ? quote.author : '';
})();

var timeWrapper = document.querySelector('.time')

function getCurrentTime() {
    const options = { timeZone: 'Europe/Berlin', hour: "numeric",
    minute: "numeric" };
    const today = new Date();

    timeWrapper.innerHTML = Intl.DateTimeFormat("de-DE", options).format(today).replace(/:/g, '.') + " local time";
}
if (timeWrapper) { setInterval(getCurrentTime, 100); }