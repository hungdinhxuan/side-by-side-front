export function getIdYoutube(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    if(!url)
        return ''
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}

export function formatMoney(money){
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}