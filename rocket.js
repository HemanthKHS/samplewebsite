const flightPath = {
  curviness:1.25,
  autoRotate: true,
  values: [
    {x: 100, y: -20},
    {x: 300, y: 10},
    {x: 500, y: 100},
    {x: 750, y: -100},
    {x: 350, y: -50},
    {x: 600, y: 100},
    {x: 1800, y: 0},


  ]
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to('.paper_plane',1,{
    bezier: flightPath,
    ease: Power1.easeInOut
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
triggerElement: '.animation_rocket',
duration: 3000,
triggerHook:0

})
.setTween(tween)
.addIndicators()

.setPin('.animation_rocket' )

.addTo(controller);
