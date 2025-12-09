const tagMapping = {
  "d2": "2D",
  "d3": "3D",
  "vr": "VR",
  "motion-design": "Motion Design",
  "sound-design": "Sound Design",
  "product": "Product",
  "illustration": "illustration",
  "ui-ux": "UI/UX"
};

const projects = [
  {
    "title": "30DayAnimator Course",
    "date": "2023",
    "static_image": "/img/work/2023-30dayanimator.jpg",
    "animated_image": "/img/work/2023-30dayanimator.gif",
    "description": "<p>I created this animation course to teach animation to people in a new and simple way.</p><p><ul><li>1 step at a time.</li><li>1 exercise daily, to be completed in 1 hour or less!</li><li>Every day a new and important concept in animation.</li></ul></p><p>This way of learning is meant to motivate people to stay and complete the course, without being overwhelmed by the amount of complexity that animation initially brings.</p><p>At the same time, one has always a completed little animation that one can be proud of every single day.</p><p><a href=\"http://30dayanimator.com/\">30dayanimator.com</a></p>",
    "tags": ["d2", "motion-design", "product"]
  },
  {
    "title": "Reincarnation Mall",
    "date": "2023 Jan-Feb",
    "static_image": "/img/work/2022-lavamachine.png",
    "animated_image": "/img/work/2022-lavamachine.gif",
    "description": "<p>I had the exciting opportunity to animate a 30-second scene for the short film of <a href=\"https://lavamachine.com/\">LAVAMACHINE</a>, a studio I deeply admire for their creative output in the VR animation space.</p><p>The animation was officially produced by <a href=\"https://www.meta.com/quest/?utm_source=lavamachine.com&utm_medium=oculusredirect\">META</a> to promote their VR headset brand and its capabilities.</p><p><a href=\"https://www.oculus.com/experiences/media/861868095081198/\">view short film</a></p>",
    "tags": ["d3", "vr"]
  },
  {
    "title": "Paradime.io - Brand Video",
    "date": "2022 Oct-Nov",
    "static_image": "/img/work/2022-paradime.png",
    "animated_image": "/img/work/2022-paradime.gif",
    "description": "<p><a href=\"https://vimeo.com/785724246\">view animation</a></p><p>Paradime is a data and analytics platform. They approached me for their upcoming ProductHunt launch to produce a video to explain the problem their platform is solving. It's a dramatic and cheeky video explaining the everyday struggles of people working with an increasingly complex data analytics tech stack.</p><p>For this project I coordinated the entire production, from the first ideations to the final delivery of the finished project. First we created visual ideas in a brainstorming session, which then were turned into thumbnail sketches and then arranged into a storyboard. Then a rough animatic was created based on the storyboard and when that was approved I went on to create the final animation, hired a voice artist, and did the final sound design and mixing.</p><p>The project had a pretty tight schedule and was completed in only 6 weeks from start to finish. A great achievement considering the complexity of many of the scenes in the animation!</p><p>I wrote about the creation of one of the most complex scenes here: <br><a href=\"https://medium.com/the-inspired-animator/how-i-made-this-complex-animation-133269cf70f\">How I Made This Complex Animation (Medium Article)</a>.</p>",
    "tags": ["d2", "motion-design", "sound-design"]
  },
  {
    "title": "Pumping Iron",
    "date": "2022 August",
    "static_image": "/img/work/2022-pumping-iron.jpg",
    "animated_image": "/img/work/2022-pumping-iron.gif",
    "description": "<p>A short animation created with the VR software Quill and rendered in Blender. The project was a proof of concept to test the entire rendering pipeline of an animation from Quill to Blender and figure out stumbling blocks before attempting even bigger animations.</p><p><a href=\"https://www.youtube.com/watch?v=p2WGUmQIsKc\">view animation</a></p>",
    "tags": ["d3", "vr", "sound-design"]
  },
  {
    "title": "Levity Product Trailer",
    "date": "2022 March",
    "static_image": "/img/work/2022-levity.jpg",
    "animated_image": "/img/work/2022-levity.gif",
    "description": "<p><a href=\"https://vimeo.com/722503171\">view product trailer</a><br></p><p>An animation introducing the Levity AI platform in an exciting way. This project was animated from the earliest storyboard to the final delivery of the trailer.</p><p>Combined 2D and 3D motion design with hand-painted frame-by-frame animation techniques were used to create an exciting and fast-paced tour through the platforms main features.</p>",
    "tags": ["d2", "d3", "motion-design", "sound-design"]
  },
  {
    "title": "Xocolatl Illustrations",
    "date": "2022 February",
    "static_image": "/img/work/2022-xocolatl.jpg",
    "animated_image": "/img/work/2022-xocolatl.gif",
    "description": "<p>A series of illustrations of ancient American civilizations. The warrior, the citizen and the shaman. Created for the Xocolatl Web3 project as three different tiers to contribute to the project.</p><p><a href=\"https://www.artstation.com/artwork/QnVEgB\">view illustrations</a></p>",
    "tags": ["illustration"]
  },
  {
    "title": "Quill VR Shorts",
    "date": "2021 - 2022",
    "static_image": "/img/work/2022-vr-showreel.jpg",
    "animated_image": "/img/work/2022-vr-showreel.gif",
    "description": "<p>Exploring the new medium and creative possibilities of animating in VR.</p><p><a href=\"https://vimeo.com/724798042\">view showreel</a></p>",
    "tags": ["d3", "vr"]
  },
  {
    "title": "Fly Asleep - Concept Ad",
    "date": "2021 December",
    "static_image": "/img/work/2021-fly-asleep.jpg",
    "animated_image": "/img/work/2021-fly-asleep.gif",
    "description": "<p>In this project I wanted to challenge myself to create a \"satisfying\" animation with Blender with the use of physics, slow motion and different material settings.</p><p>I came up with this simple concept ad for pillows. That are so comfy that you would \"Fly Asleep\" instead of just falling. I did not only the animation, but also the sound design and music for it.</p><p><a href=\"https://youtu.be/ZqYWGE9DvaA\">view video</a></p>",
    "tags": ["d3", "motion-design", "sound-design"]
  },
  {
    "title": "AE Plugins & Presets",
    "date": "2020 - 2022",
    "static_image": "/img/work/2022-ae-plugins.jpg",
    "animated_image": "/img/work/2022-ae-plugins.jpg",
    "description": "<p>Working with After Effects has many inefficiencies. It's a great tool, but not perfect. Tackling these problems I started creating plugins and presets and selling them on my store. For marketing purposes I produced multiple trailers and advertised on various channels.</p><p>Examples include: <br><b>EasyLoop</b>, a plugin that allows looping with the click of a single button.<br><b>VHS IT</b>, a plugin to recreate a VHS look on your footage. <br><b>Handcrafted Look</b>, a preset that makes your footage look hand-animated.</p><p><a href=\"https://justgoscha.gumroad.com/?tags=after+effects\">view all plugins</a></p>",
    "tags": ["d2", "motion-design", "product"]
  },
  {
    "title": "Futurepark 2050",
    "date": "2021 July",
    "static_image": "/img/work/2021-future-park.jpg",
    "animated_image": "/img/work/2021-future-park.jpg",
    "description": "<p>For <b>The Future Game 2050</b> I animated an illustration (by Johannes Fuchs) of a futuristic park.</p><p>We were using web technologies like SVG and Lottie to bring the animation to life. With my tech expertise in Web Development I was consulting on the best solutions to implement the animation in an efficient manner.</p>",
    "tags": ["d2", "motion-design", "ui-ux"]
  },
  {
    "title": "Serene Scenes SVGs",
    "date": "2021 June",
    "static_image": "/img/work/2021-serene-scenes.jpg",
    "animated_image": "/img/work/2021-serene-scenes.jpg",
    "description": "<p>To learn to create beautiful background illustrations and vector graphics I started a project to draw daily landscape sceneries.</p><p>What came out was not only a set of beautiful illustrations, but also a illustration library product for others to buy and use.</p><p><a href=\"https://www.producthunt.com/posts/serene-scenes-illustrations-pack\">link to project</a></p>",
    "tags": ["illustration", "product"]
  },
  {
    "title": "Afilio Hero Animation",
    "date": "2021 February",
    "static_image": "/img/work/2021-afilio.jpg",
    "animated_image": "/img/work/2021-afilio.gif",
    "description": "<p>Afilio's website has nice illustrations, but it felt a little bit static. To get people even more engaged with the topic of insurances, we decided to collaborate to create an animated hero video to play in the background and replace the hero illustration.</p><p>The challenge was to create something that is not too distracting and would overtake the entire design, but it should still allow you to linger on the animation and see the subtle story unfold. The story being a lifetime in timelapse of a woman from college to retirement.</p><p><a href=\"https://www.afilio.de/\">see it in action</a></p>",
    "tags": ["d2", "motion-design"]
  },
  {
    "title": "The Last Today",
    "date": "2021",
    "static_image": "/img/work/2020-last-today.jpg",
    "animated_image": "/img/work/2020-last-today.gif",
    "description": "<p>Animation of a 30-second car crash scene for the short film <b>The Last Today</b>. Mixing of 3D elements into a completely frame-by-frame animated scene.</p><p>Complete creative control over the execution of the scene</p><p><a href=\"https://twitter.com/justgoscha/status/1553009697556500480\">view making of</a></p>",
    "tags": ["d2", "d3", "motion-design"]
  },
  {
    "title": "PseudoRa Video Loops",
    "date": "2020 - 2021",
    "static_image": "/img/work/2020-pseudora.jpg",
    "animated_image": "/img/work/2020-pseudora.jpg",
    "description": "<p>I was commissioned to create two animation loops of backgrounds matching the vibe of the music of up and coming Jazz & Rap artist PseudoRa. What came out are two great pieces that capture a great nostalgic mood in modern times.</p><p><a href=\"https://www.instagram.com/p/CL9tHDQigdH/\">view PseudoRa - Berlin</a><br><a href=\"https://www.instagram.com/p/CB-UBSoqrx6/\">view PseudoRa - Miami</a></p>",
    "tags": ["d2", "motion-design"]
  },
  {
    "title": "FortoX - Explainer",
    "date": "2020",
    "static_image": "/img/work/2020-fortox explainer.png",
    "animated_image": "/img/work/2020-fortox explainer.png",
    "description": "<p>Assisting with animation and asset creation for the FortoX explainer video.</p><p><a href=\"https://www.facebook.com/watch/?v=440421150264841\">watch FortoX - Explainer Video</a></p>",
    "tags": ["illustration", "motion-design"]
  },
  {
    "title": "Forto - Customer Journey",
    "date": "2020",
    "static_image": "/img/work/2020-forto-customer-journey.jpg",
    "animated_image": "/img/work/2020-forto-customer-journey.gif",
    "description": "<p>Illustrating a customer journey for a new product of Forto, involving 8 different steps in the journey with each having its own illustration.</p>",
    "tags": ["illustration", "ui-ux"]
  },
  {
    "title": "Moebius Inspired Short",
    "date": "2019 Oct",
    "static_image": "/img/work/2019-spaceship.jpg",
    "animated_image": "/img/work/2019-spaceship.gif",
    "description": "<p>A private commission to create an animation inspired by a Moebius-style illustration.</p><p><a href=\"https://www.reddit.com/r/animation/comments/g7u1ft/i_created_a_little_making_of_for_first_client/\">view animation</a></p>",
    "tags": ["d2", "sound-design"]
  },
  {
    "title": "100 Days of Walk Cycles",
    "date": "2016 March",
    "static_image": "/img/work/100d.jpg",
    "animated_image": "/img/work/100d.jpg",
    "description": "<p>To accelerate my learning of animation I decided to challenge myself to create 100 different walk cycles on 100 consecutive days.</p><p>From that experience came also a first short film that compiled all the cycles into a single video. I wrote an article about my experience of attempting the challenge and overnight it became an instant internet success and gathered over 50,000 views.</p><p><a href=\"https://vimeo.com/160298199\">view video</a><br><a href=\"https://medium.com/the-inspired-animator/100daysofwalkcycles-134ae1ca91ac#.c3so76uio\">read full story</a></p>",
    "tags": ["d2"]
  }
];

module.exports = {
  projects,
  tagMapping
};
