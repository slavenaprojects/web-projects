var Cookielaw = {

    createCookie: function (name, value, days) {
        var date = new Date(),
            expires = '';
        if (days) {
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    },

    createCookielawCookie: function () {
        this.createCookie('cookielaw_accepted', '1', 10 * 365);

        if (typeof (window.jQuery) === 'function') {
            jQuery('#CookielawBanner').slideUp();
        } else {
            document.getElementById('CookielawBanner').style.display = 'none';
        }
    }

};

$("#top h1").on("mouseleave", function() {
    var t = this;
    setTimeout(function() {
        $("span span", t).text(captxt[Math.random() * captxt.length | 0])
    }, 100)
}).find("span span").text(captxt[Math.random() * captxt.length | 0]), $("nav .toggle").on("click", function() {
    $(this).closest("nav").toggleClass("open")
}), $(window).on("load", function() {
    $("#player img").each(function() {
        this.naturalWidth <= 120 && (this.src = this.src.replace("maxres", "hq"))
    })
