$(() => {

    $('html').on('mousemove', (e)=>{
        let degX = e.pageX/-100 + ($('#box').offset().left)/100
        let degY = e.pageY/100 - ($('#box').offset().top)/50
        
        // style modify
        $('#box')
            .css('transform', `perspective(1000px) rotateX(${degY}deg) rotateY(${degX}deg) scale3d(1, 1, 1)`)
            .css('background-image', `linear-gradient(${degX + degY}deg, blue, rgb(0, 0, 100))`)
    }).on('mouseleave', ()=>{
        // style modify
        $('#box').css('transform', `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`)
    })

})
