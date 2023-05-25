(function ($, window, document) {
  ("use strict");

  var Header = {
    init: function () {
      this.cacheElements();
      this.setSearchFocus();
      this.applyVariant();
      this.bindEvents();
    },
    cacheElements: function () {
      this.$window = $(window);
      this.$topbar = $("[data-topbar]");
      this.$correctSearch = $("[data-correct-search]");
      this.$searchBox = $("[data-search-box]");
      this.$topbarNav = $("[data-topbar-nav]");
    },
    bindEvents: function () {
      // $(window).on("scroll resize", this.handleScroll.bind(this));
    },
    setSearchFocus: function () {
      if (this.$correctSearch.length) {
        this.$searchBox.find(".search").html(this.$correctSearch.html());
        this.$searchBox.find("#query").focus();
      }
    },
    applyVariant: function () {
      if (LotusUtils.isHomePage() || LotusUtils.isSearchResultsPage()) {
        this.$topbar.addClass(LotusConfig.css.topbarLarge);
      } else {
        this.$topbar.addClass(LotusConfig.css.topbarSmall);
      }

      this.$topbar.removeClass(LotusConfig.css.hiddenClass);
      $(window).trigger("resize");
    },
    handleScroll: function () {
      var scrolled = this.$window.scrollTop();

      if (scrolled > this.$topbarNav.outerHeight()) {
        this.$topbarNav.addClass(LotusConfig.css.topbarScroll);
      } else {
        this.$topbarNav.removeClass(LotusConfig.css.topbarScroll);
      }
    },
  };

  window.Header = Header;
})(jQuery, window, document);

const GlobalSearch = (props) => {
  useEffect(() => {
    searchForm.style.display = "flex";
    if (articleElement === null) {
      searchForm.style.display = "none";
      document.addEventListener("scroll", (e) => {
        if (
          articleElement === null &&
          document.scrollingElement.getBoundingClientRect().y < -300
        ) {
          console.log(searchFormHero);
          if (searchForm) searchForm.style.display = "flex";
        } else {
          if (searchForm) searchForm.style.display = "none";
        }
      });
    }
    document.addEventListener("click", (e) => {
      const removeSearch = (e) => {
        if (!e.target.closest("#modal")) {
          document.querySelector("#search-modal").classList.toggle("active");
          document.removeEventListener("click", removeSearch);
        }
      };
      if (
        e.target.closest("#search-form") ||
        e.target.closest("#search-form-hero")
      ) {
        console.log("Clicked search");
        document.querySelector("#search-modal").classList.toggle("active");
        document.addEventListener("click", removeSearch);
      }
    });
  }, []);

  return createPortal(props.children, modalRoot);
};
