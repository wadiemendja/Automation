// URL = https://medium.com/tag/' + medium_topic + '/latest
function grabArticlesLinks () {
    const all_articles = document.querySelectorAll(".gy.l");
    let table = [];
    all_articles.forEach((element) => {
        table.push(element.querySelector("a").href);
    });
    const linksTable = []; // a table of 10 links (artciles)
    for (let i = 0; i < table.length; i++)
        linksTable.push(table[i].substring(0, table[i].indexOf('?')));
    return  linksTable;
}