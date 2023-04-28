(function() {
    window.addEventListener('resize', function() {
        scrllHdr()
    });
    
    function scrllHdr() {
        window.addEventListener('scroll', function() {
            let plyHdr = document.querySelector('.plyHdr'); // 헤더
            let mainVisual = document.querySelector('.mainVisual'); // 메인 비주얼
            let jsTopBtn = document.querySelector('.jsTopBtn'); // top 버튼
            let srvcScrll = document.querySelector('.srvcScrll') // service

            // 비주얼 
            if(window.pageYOffset > mainVisual.offsetHeight / 2){
                plyHdr.classList.add('fxd');
                jsTopBtn.style.display = 'block';
            } else {
                plyHdr.classList.remove('fxd');
                jsTopBtn.style.display = 'none';
            }


            let windowInnerHeight = window.scrollY + window.innerHeight;
            let prgrssBrCntBx = document.querySelector('.prgrssBrCntBx'); // 프로그래스 바 컨텐츠 박스
            let prtnrs = document.querySelector('#playD_wrap #contents .prtnrs'); // 파트너스  섹션
            // let prtnrsTp = (prtnrs.getBoundingClientRect().top - window.innerHeight) * -1; // 화면 하단이 파트너스 섹션 중앙에 닿았을 때.
            if(windowInnerHeight >= prtnrs.offsetTop + prtnrs.offsetHeight / 2){
                prgrssBrCntBx.classList.add('on');
            } else {
                prgrssBrCntBx.classList.remove('on');
            }

            // 서비스 섹션에 오른쪽 영역
            let srvcItms = document.querySelectorAll('#playD_wrap #contents .srvcCntsBx .srvcItms');
            for(i = 0; i < srvcItms.length; i ++){
                if(windowInnerHeight / 1.2 >= srvcItms[i].offsetTop) {
                    srvcItms[i].classList.add('fadeUp')
                } else {
                    srvcItms[i].classList.remove('fadeUp')
                }
            }

            

            
        });

        
    }

    window.addEventListener('load', () => {



        // const visualImages = document.querySelectorAll('#playD_wrap #contents .mainVisual > div');
        // let i = 0;
        // visualImages[0].style.opacity = 1;
        // const setKv = () => {
        //     i++;
        //     visualImages.forEach(() => {
        //         if (i === visualImages.length) {
        //             visualImages.forEach((item) => {
        //                 item.style.opacity = 0;
        //             })
        //             visualImages[0].style.opacity = 1;
        //             i = 0;
        //         } else {
        //             console.log(i);
        //             if(i === 0) {
        //                 visualImages.forEach((item) => {
        //                     item.style.opacity = 0;
        //                 })
        //             } else {
        //                 visualImages[i-1].style.opacity = 0;
        //             }
        //             visualImages[i].style.opacity = 1;
        //         }
                
        //         console.log(i === 0);
        //     })
        // };
        
        // const stopKv = () => {
        //     clearInterval(timer);
        // }
        // const timer = setInterval(setKv, 1750);

        const visualImages = document.querySelectorAll('#playD_wrap #contents .mainVisual > div');
        let i = 0;
        visualImages[0].style.opacity = 1;
        function visualSlide() {
            i++;
            visualImages.forEach(function() {
                if(i === visualImages.length){
                    visualImages.forEach(function(item) {
                        item.style.opacity = 0;
                    })
                    visualImages[0].style.opacity = 1;
                    i = 0;   
                } else {
                    if(i === 0) {
                        visualImages.forEach(function() {
                            visualImages.style.opacity = 0;
                        })
                    } else {
                        visualImages[i - 1].style.opacity = 0;
                    }
                    visualImages[i].style.opacity = 1;
                }
            });
        }


        function stopKv(){
            clearInterval(timer);
        }
        
        const timer = setInterval(visualSlide, 1750);

        visualSlide()
        


    });
    
    scrllHdr();
})();

$(function() {
    $('.mainVisual').css('height', $(window).innerHeight()); // 비주얼 높이
    $('.prfmnc').css('height', $(window).innerHeight()) // performance 높이
    
    $(window).resize(function() {
        $('.mainVisual').css('height', $(window).innerHeight()); // 비주얼 높이
        $('.prfmnc').css('height', $(window).innerHeight()) // performance 높이

        if($(window).outerWidth() >= 320) {
            $('html, body').css('overflow-X', 'auto');
        }
    });

    $('.jsTopBtn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});