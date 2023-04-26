window.onscroll = () => {
    var navigation = document.querySelector('.navigation')

    if (window.scrollY > (160 - navigation.clientHeight)) {
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
            text: "What you admire in others exist within you"
        },
        {
            text: "We accept the love we think we deserve",
            author: "From: The Perks of Being a Wallflower"
        },
        {
            text: "Always deliver more than expected.",
            author: "Larry Page"
        }
    ]
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector('.footer blockquote p').innerHTML = quote.text;
    document.querySelector('.footer blockquote cite').innerHTML = quote.author ? quote.author : '';
})();

