$(document).ready(() => {
    $('a').click((tag) => {
        let href = tag.target.href
        href = href.split('#')[1]

        let selectedLink = $('#' + href);
        let selectedContent = selectedLink.position();
        let top = selectedContent.top;

        $('html, body').stop(true, false).animate({
            scrollTop: top
        }, 1000);
    })
})