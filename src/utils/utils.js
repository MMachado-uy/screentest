function debounce (fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}

const getScreenDimensions = () => ({
    width: window.screen.width * window.devicePixelRatio,
    height: window.screen.height * window.devicePixelRatio
})

export {
    debounce,
    getScreenDimensions
}
