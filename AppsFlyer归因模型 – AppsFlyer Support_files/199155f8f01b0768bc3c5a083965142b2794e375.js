$(function () {

}),
  $(function () {
    $.magnificPopup
      ? ($(".image-with-lightbox").magnificPopup({
          type: "image",
          closeOnContentClick: !0,
          closeBtnInside: !1,
          fixedContentPos: !0,
          mainClass: "mfp-with-zoom",
          image: { verticalFit: !0 },
          zoom: { enabled: !0, duration: 300 },
        }),
        $(".image-with-video-icon").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: !1,
          fixedContentPos: !1,
        }))
      : console.error(
          'jquery.magnific-popup.js is not included. Include this code:\n<link rel="stylesheet" href="//cdn.jsdelivr.net/jquery.magnific-popup/1.0.0/magnific-popup.css" />\n<script src="//cdn.jsdelivr.net/jquery.magnific-popup/1.0.0/jquery.magnific-popup.min.js"></script>'
        );
  }),
  $(function () {
    $(".fa-spin").empty();
  }),
  $(function () {
    function i() {
      $("img.custom-block__image, [data-svg]").each(function () {
        var t = $(this),
          n = t.attr("id"),
          s = t.attr("class"),
          i = t.attr("src") + "?reset";
        $.get(
          i,
          function (i) {
            var e = $(i).find("svg");
            void 0 !== n && (e = e.attr("id", n)),
              void 0 !== s && (e = e.attr("class", s + " replaced-svg")),
              (e = e.removeAttr("xmlns:a")),
              t.replaceWith(e);
          },
          "xml"
        );
      });
    }
    i(), window.LS && setTimeout(i, 100);
  });
