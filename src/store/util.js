function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
}

function capitalizarPalabras(texto) {
    if (texto == undefined) return ''
    
    const palabras = texto.toLowerCase().split(' ')

    const palabrasCapitalizadas = palabras.map(palabra => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1)
    })
  
    return palabrasCapitalizadas.join(' ');
}

function sendWtsp(code, celular, msg){
    const base = `https://wa.me/${code}${celular.replace(/\s/g,'')}?text=`
    const wtsp = base + msg.replace(/\s/g,'%20')
    window.open(wtsp, '_blank')
}

export {
    deepCopy, capitalizarPalabras, sendWtsp
}