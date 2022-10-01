const urlField = document.querySelector('.field input')
const previewArea = document.querySelector('.preview-area')
const imgTag = document.querySelector('.thumbnail')

urlField.addEventListener('keyup', () => {
    let imgUrl = urlField.value
    previewArea.classList.add('active')

    if (imgUrl.indexOf('https://www.youtube.com/watch?v=') != -1) {
        let vidId = imgUrl.split('v=')[1].substring(0, 11)
        let ytThumbUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`
        imgTag.src = ytThumbUrl
    } else if (imgUrl.indexOf('https://youtu.be/') != -1) {
        let vidId = imgUrl.split('be/')[1].substring(0, 11)
        let ytThumbUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`
        imgTag.src = ytThumbUrl
    } else if (imgUrl.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) {
        imgTag.src = imgUrl
    } else {
        imgTag.src = ''
        previewArea.classList.remove('active')
    }
})

console.log(imgTag)
