<!--动态浏览器标签-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/favicon-32x32-next.png");
         document.title = "Waiting...";
         clearTimeout(titleTime);
     }
     else {
         document.title = "Welcome Back !";
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 400);
     }
 });

