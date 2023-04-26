window.onscroll = () => {
    var navigation = document.querySelector('.navigation')

    if (window.scrollY > (160 - navigation.clientHeight)) {
        navigation.classList.add('--muted')
    } else {
        navigation.classList.remove('--muted')
    }
}