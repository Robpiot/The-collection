function badge () {
    const badge = document.getElementById('badge');
    badge.className = ''
    Genre.forEach(element =>{
        const span = document.createElement('span');
        span.innerHTML = element;
        badge.appendChild(span)

    } )
}
export {badge}