// URL = https://medium.com/tag/' + medium_topic + '/latest
function grabArticlesLinks() {
    const all_articles = document.querySelectorAll(".gy.l");
    let table = [];
    all_articles.forEach((element) => {
        table.push(element.querySelector("a").href);
    });
    const linksTable = []; // a table of 10 links (artciles)
    for (let i = 0; i < table.length; i++)
        linksTable.push(table[i].substring(0, table[i].indexOf('?')));
    return linksTable;
}


// URL = https://medium.com/{Article_URL}
function getArticleAndFilter() {
    const upgradeBtn = document.querySelector('#root > div > div.s > div.s.c > div > div > div > h4 > div.n.lz.ma > div > div');
    const isPremuim = upgradeBtn != null ? true : false;
    const title = document.querySelectorAll("h1")[0].innerText;
    const articleElement = document.querySelector('#root > div > div.s > article > div');
    articleElement.querySelector('section > div > div > div > div').remove(); // some cleaning
    // changing the the dir (text direction) of pre tags
    articleElement.querySelectorAll('pre').forEach((pre) => {
        pre.dir = 'ltr';
    });
    // better the quality of the images
    articleElement.querySelectorAll('img').forEach((img) => {
        if (img.src == "") img.remove();
        else img.src = img.src.replace(/max\/[0-9]+\//, 'max/700/');
    });
    const article = articleElement.innerHTML;
    const img = articleElement.querySelectorAll('img')[0];
    const thumbnail = img == null ? "../static/img/default-thumbnail.jpg" : img.src;
    const url = location.pathname;
    const pathname = url.substr(url.lastIndexOf('/'));
    let meta_description = "";
    document.querySelectorAll('meta').forEach((meta) => {
        if (meta.name == 'description') meta_description = meta.content;
    });
    if (meta_description.indexOf('"') != -1) meta_description.replace(/"/g, '');
    const origin = location.href;
    return {
        title: title,
        article: article,
        thumbnail: thumbnail,
        pathname: pathname,
        description: meta_description,
        isPremuim: isPremuim,
        origin: origin
    };   
}
