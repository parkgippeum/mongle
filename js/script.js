/* aos */
AOS.init({
    duration: 1200
  })

/* nav */
$(document).ready(function(){
    
    $('.gnb>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });
    
    $('.gnb>li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
    });
    
});

/* nav scroll */
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('#header').addClass('active');
    }else{
        $('#header').removeClass('active');
    }
});


/* 갤러리 */
$(document).on('ready', function() {

    $(".regular").slick({
      autoplay:true,//자동 갤러리 구문(삭제시 수동으로 변함.)
      autoplaySpeed:2000,//자동 갤러리가 넘어가는 시간
      dots: true,
      infinite: true,
      slidesToShow: 3,//보여지는 갤러리 수
      slidesToScroll: 1,//넘어가는 갤러리 수
      speed: 2000,//다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간
      pauseOnHover:true, /* 마우스 호버시 슬라이드 이동 멈춤 */ 
      responsive: [
          { /* 반응형웹*/
              breakpoint: 1024, /* 기준화면사이즈 */
              settings: {slidesToShow:2 } /* 사이즈에 적용될 설정 */
          },
              { /* 반응형웹*/
              breakpoint: 459, /* 기준화면사이즈 */
              settings: {slidesToShow:1 } /* 사이즈에 적용될 설정 */
          },
      ]
    });
  });

