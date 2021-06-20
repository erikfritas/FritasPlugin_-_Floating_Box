$(function(){

    $('html').on('mousemove', function(e){
        let degX = e.pageX/-100 + ($('#box').offset().left)/100
        let degY = e.pageY/100 - ($('#box').offset().top)/50
        $('#box').css('transform', `perspective(1000px) rotateX(${degY}deg) rotateY(${degX}deg) scale3d(1, 1, 1)`)

        $('#box').css('background-image', `linear-gradient(${degX + degY}deg, blue, rgb(0, 0, 100))`)
    })

})