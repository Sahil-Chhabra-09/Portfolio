const timeline = gsap.timeline({defaults: {duration: 1.2}});

timeline
    .from("#nav", {x:"-15%", ease: 'power3'})
    .from('.link', {opacity: 0})
    .from('#quote', {x: '100%', ease: 'slow'}, 1.5)
    .to('#styled', {opacity: 1})
    .from('#arrow', {opacity: 0, y: '-40px'}, '<')