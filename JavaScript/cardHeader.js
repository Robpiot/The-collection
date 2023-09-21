function cardHeader(link) {
    const section = document.getElementById('main');
    const article = document.createElement('article');
    const div = document.createElement('div');
    const img = document.createElement('img');
    article.id ='card'
    img.src = link;
    
    section.append(article);
    article.append(div)
    div.append(img);

}

export {cardHeader}