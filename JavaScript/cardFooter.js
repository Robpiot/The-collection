function cardFooter() {
    const article = document.getElementById('card');
    const footer = document.createElement('div');
    const link = document.createElement(a);
    const img = document.createElement('img');

    footer.id = 'card-footer';
    img.src='../Assets/spotify.svg'
    link.href = 'https://www.spotify.com';

    link.append(img);
    footer.append(link);
    article.append(footer)
}

export {cardFooter}