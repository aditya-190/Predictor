const loadImageFromUrl = (imageUrl) => {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas')
            canvas.width = img.width
            canvas.height = img.height
            const ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0)
            canvas.toBlob((blob) => {
                resolve(new File([blob], 'image.png', {type: 'image/png'}))
            }, 'image/png', 1)
        };
        img.onerror = reject
        img.src = imageUrl
    })
}

const loadImageFromBase64 = tempUrl => {
    const type = tempUrl.substring(tempUrl.indexOf('/') + 1, tempUrl.indexOf(';'))
    const b64Data = tempUrl.substring(tempUrl.indexOf(',') + 1)
    const decodedData = atob(b64Data)
    const buffer = new ArrayBuffer(decodedData.length)
    const view = new Uint8Array(buffer)
    for (let i = 0; i < decodedData.length; i++) {
        view[i] = decodedData.charCodeAt(i)
    }
    const blob = new Blob([view], {type})
    return new File([blob], 'image.' + type.split('/')[1], {type});
}


export {loadImageFromBase64, loadImageFromUrl}