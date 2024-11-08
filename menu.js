
        // Hide Header on on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5; // 동작의 구현이 시작되는 위치
        var navbarHeight = $('.menu_home').outerHeight(); // 영향을 받을 요소를 선택
        
        // 스크롤시에 사용자가 스크롤했다는 것을 알림
        $(window).scroll(function(event){
            didScroll = true;
        });
        
        // hasScrolled()를 실행하고 didScroll 상태를 재설정
        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);
        
        // 동작을 구현
        function hasScrolled() {
            // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
            var st = $(this).scrollTop();
            
            // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
            if(Math.abs(lastScrollTop - st) <= delta){
                return;
            }
            
            // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('.menu_home').addClass('nav-up');
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('.menu_home').removeClass('nav-up');
                }
            }
            // lastScrollTop 에 현재 스크롤위치를 지정한다.
            lastScrollTop = st;
        }
        // home

        var rightScroll;
        var lastScrollRight = 0;
        var delta2 = 5;
        var navRight = $('.menu_about').outerHeight();

        $(window).scroll(function(event){
            rightScroll = true;
        });

        setInterval(function(){
            if(rightScroll){
                hasScrolled2();
                rightScroll = false;
            }
        }, 250);

        function hasScrolled2(){
            var st = $(this).scrollTop();
            if(Math.abs(lastScrollRight - st) <= delta2){
                return;
            }
            if(st > lastScrollRight && st > navRight){
                $('.menu_about').addClass('nav-right');
            } else {
                if(st + $(window).height() < $(document).height()){
                    $('.menu_about').removeClass('nav-right');
                }
            }
            lastScrollRight = st;
        };
        // about

        var bottomScroll;
        var lastScrollBottom = 0;
        var delta3 = 5;
        var navBottom = $('.menu_project').outerHeight();

        $(window).scroll(function(event){
            bottomScroll = true;
        });
        
        setInterval(function() {
            if (bottomScroll) {
                hasScrolled3();
                bottomScroll = false;
            }
        }, 250);

        function hasScrolled3() {
            var st = $(this).scrollTop();
            if(Math.abs(lastScrollBottom - st) <= delta3){
                return;
            }
            if (st > lastScrollBottom && st > navBottom){
                $('.menu_project').addClass('nav-bottom');
            } else {
                if(st + $(window).height() < $(document).height()) {
                    $('.menu_project').removeClass('nav-bottom');
                }
            }
            lastScrollBottom = st;
        };
        // project

        var leftScroll;
        var lastScrollLeft = 0;
        var delta4 = 5;
        var navLeft = $('.menu_contact').outerHeight();

        $(window).scroll(function(event){
            leftScroll = true;
        });

        setInterval(function(){
            if(leftScroll){
                hasScrolled4();
                leftScroll = false;
            }
        }, 250);

        function hasScrolled4(){
            var st = $(this).scrollTop();
            if(Math.abs(lastScrollLeft - st) <= delta4){
                return;
            }
            if(st > lastScrollLeft && st > navLeft){
                $('.menu_contact').addClass('nav-left');
            } else {
                if(st + $(window).height() < $(document).height()){
                    $('.menu_contact').removeClass('nav-left');
                }
            }
            lastScrollLeft = st;
        };
        // contact
        var leftScroll;
        var lastScrollLeft = 0;
        var delta4 = 5;
        var navLeft = $('.menu_contact').outerHeight();

        $(window).scroll(function(event){
            leftScroll = true;
        });

        setInterval(function(){
            if(leftScroll){
                hasScrolled0();
                leftScroll = false;
            }
        }, 250);

        function hasScrolled0(){
            var st = $(this).scrollTop();
            if(Math.abs(lastScrollLeft - st) <= delta4){
                return;
            }
            if(st > lastScrollLeft && st > navLeft){
                $('.menu_contact').addClass('nav-left');
            } else {
                if(st + $(window).height() < $(document).height()){
                    $('.menu_contact').removeClass('nav-left');
                }
            }
            lastScrollLeft = st;
        };
        // contact
        