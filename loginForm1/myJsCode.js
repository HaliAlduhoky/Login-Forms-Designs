$("document").ready(function() {
    // Common variables
    // You can change these values as you set it in css file
    const openBoxSize = 950; // result of calculation of --leftBoxWidth + --rightBoxWidth (look at css)
    const closedCircleSize = 350; // same number of --leftBoxWidth (look at css)

    // when click on login
    $("#loginClick").click(function() {
        $(".loginForm").removeClass("addClassOpenFormCircle");
        $(".login").fadeOut({ queue: false, duration: 'slow' });
        $(".login").animate({ top: "-=30px" });
        setTimeout(function() {
            $(".loginForm").addClass("addClassOpenFormFull");
            $(".loginText").delay(500).animate({ "left": "30px" });
            $(".CopyRights>.by").delay(600).animate({ "margin-left": 0 });
            $(".CopyRights>.name").delay(800).animate({ "margin-left": 0 });
        }, 100);
        setTimeout(function() {
            $(".loginForm").animate({ width: openBoxSize + "px" });
            $(".closeIcon").delay(1000).fadeIn();
        }, 2000);
    });

    // when click on login
    $("#closeClick").click(function() {
        $(".loginForm").animate({ width: closedCircleSize + "px" });
        setTimeout(function() {
            $(".loginText").delay(500).animate({ "left": "-200px" });
            $(".CopyRights>.by").delay(600).animate({ "margin-left": "-200px" });
            $(".CopyRights>.name").delay(800).animate({ "margin-left": "-200px" });
            $(".closeIcon").delay(500).fadeOut();
        }, 100);
        setTimeout(function() {
            $(".loginForm").removeClass("addClassOpenFormFull");
            $(".loginForm").addClass("addClassOpenFormCircle");
        }, 1000);
        setTimeout(function() {
            $(".login").fadeIn({ queue: false, duration: 'slow' });
            $(".login").animate({ top: "+=30px" });
        }, 1000);
    });
});