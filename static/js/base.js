var navigation = document.querySelector('.navigation'),
    main = document.querySelector('.main'),
    bars = document.querySelector('.bars')

function toggleNavigation() { navigation.classList.toggle('--open') }
function closeNavigation() { navigation.classList.remove('--open') }

bars.onclick = () => { toggleNavigation() }

const swup = new Swup({
    containers: ['#main'],
    plugins: [
        new SwupPreloadPlugin(),
        new SwupScrollPlugin({
            doScrollingRightAway: false,
            animateScroll: {
                betweenPages: false,
                samePageWithHash: true,
                samePage: true
            }            
        })
    ]
});

function scrollTop() { 
    window.scroll(0, 0) 
    // swup.scrollTo(0, false)
}

swup.on('animationOutStart', closeNavigation);
swup.on('contentReplaced', init);
swup.on('animationOutDone', scrollTop);

const lazyLoadInstance = new LazyLoad({
    elements_selector: '.--lazy'
});

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
    document.querySelector('.footer blockquote p').innerHTML = `“${quote.text}”`;
    document.querySelector('.footer blockquote cite').innerHTML = quote.author ? quote.author : '';
})();


function init() {
    var timeWrapper = document.querySelector('.time')
    
    function getCurrentTime() {
        const options = { timeZone: 'Europe/Berlin', hour: "numeric",
        minute: "numeric" };
        const today = new Date();
    
        timeWrapper.innerHTML = Intl.DateTimeFormat("de-DE", options).format(today).replace(/:/g, '.') + " local time";
    }

    if (timeWrapper) { setInterval(getCurrentTime, 100); }

    var navigation = document.querySelector('.navigation'),
        main = document.querySelector('.main')

    function setNavigationHeight() {
        document.querySelector(':root').style.setProperty('--navigation-height', `${navigation.clientHeight}px`)
    }setNavigationHeight()

    document.body.onresize = () => { setNavigationHeight() }
    window.onscroll = () => {
        if (window.scrollY > (main.getBoundingClientRect().top - navigation.clientHeight)) {
            navigation.classList.add('--muted')
        } else {
            navigation.classList.remove('--muted')
        }
    }

    var clipboard = new ClipboardJS('.copy-to-clipboard')

    clipboard.on('success', (e) => {
        var hex = e.trigger.firstElementChild.firstElementChild.textContent;
        e.trigger.firstElementChild.firstElementChild.textContent = "Copied!"
        setTimeout(() => {
            e.trigger.firstElementChild.firstElementChild.textContent = hex
        }, 1000)
    })

    lazyLoadInstance.update();
}init()