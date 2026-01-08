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

const skills = [
  "UI/UX",
  "Software Development",
  "AI Integration",
  "AI Coding",
  "Product Management",
  "DevOps",
  "Leadership",
  "Customer Communication",
]

const work = [
  {
    "company": "Deed",
    "companyLink": "https://joindeed.com",
    "position": "Senior Engineering Team Lead",
    "from": "2023-11-15",
    "to": "2025-06-30",
    "static_image": "/img/work/jobs/deed.png",
    "description": "Leading the Customer Experience Team responsible for the Web and Mobile Apps.",
    "achievements": [
      {
        "emoji": "⭐",
        "text": "Championed and introduced AI coding tools. Brought usage from <10% to 100% of the engineering team."
      },
      {
        "emoji": "💰",
        "text": "Helped the biggest client WALMART to move 10x more money through a critical donation pipeline."
      },
      {
        "emoji": "⚡",
        "text": "Built and maintained business critical Nonprofit Search Engine and improved it's search speed from 10+ seconds to 1 second."
      },
      {
        "emoji": "🚀",
        "text": "Decreased time to release from 2 hours to <30minutes."
      },
      {
        "emoji": "👥",
        "text": "Highest team satisfaction in the company—through empathectic leadership and clear communication."
      }
    ],
  },
  {
    "company": "Freelance",
    "position": "Digital Animation Producer",
    "from": "2020-11-01",
    "to": "2023-10-31",
    "static_image": "/img/work/jobs/freelance.png",
    "description": "Handled complete creative and production process for animated projects and managed high-value client relationships.",
    "achievements": [
      {
        "emoji": "📋",
        "text": "Managed tasks, schedules, and client expectations for 5-figure video/motion design projects"
      },
      {
        "emoji": "🎨",
        "text": "Worked on projects using 2D, 3D, VR, AI animation tools"
      },
      {
        "emoji": "🚀",
        "text": "Developed and launched multiple digital products and tools utilizing AI"
      }
    ]
  },
  {
    "company": "Forto",
    "companyLink": "https://forto.com",
    "position": "Freelance Senior Product Designer",
    "from": "2021-05-01",
    "to": "2021-11-30",
    "static_image": "/img/work/jobs/forto1.png",
    "description": "Onboarding and supporting VP design in building up design leadership within the company.",
    "achievements": [
      {
        "emoji": "🎯",
        "text": "Setting the vision and creating designs for the new Smart Task Management System 2.0"
      },
      {
        "emoji": "🔄",
        "text": "Consolidating internal booking process (Pre-, Main-, and On-Carriage) into a single system, to imrpove OPS efficiency via better UX"
      }
    ]
  },
  {
    "company": "Forto",
    "companyLink": "https://forto.com",
    "position": "Founding Engineer > Engineering Team Lead > UX Lead",
    "from": "2016-05-01",
    "to": "2020-10-31",
    "static_image": "/img/work/jobs/forto2.png",
    "description": "Responsible for developing, designing, and launching the Forto platform from ground up, then leading engineering teams and UX initiatives.",
    "achievements": [
      {
        "emoji": "🦄",
        "text": "0 to 1 product development and growth into a unicorn startup."
      },
      {
        "emoji": "🏗️",
        "text": "Responsible for building and maintaining many core services and features—architecture, performance, design, and development."
      },
      {
        "emoji": "📦",
        "text": "My Real-time Task Management System elevated a single Ops Manager to handle over 200 shipments in parallel (from initially being able to handle 10-30 shipments at a time)"
      },
      {
        "emoji": "🌱",
        "text": "The people I hired and managed grew from juniors into top performers and remained with the company longer than the typical employee tenure."
      }
    ]
  },
  {
    "company": "Oximity GmbH",
    "position": "Front-End Engineer",
    "from": "2014-05-01",
    "to": "2016-03-31",
    "static_image": "/img/work/jobs/oximity.png",
    "description": "Implementing front-end features for a crowd-sourced news platform with over 1,000,000 users.",
    "achievements": [
      {
        "emoji": "✅",
        "text": "Ensuring flawless operation with nearly 100% end-2-end test coverage"
      }
    ]
  },
  {
    "company": "Fraunhofer FOKUS",
    "position": "Full-Stack Engineer (Working Student)",
    "from": "2010-12-01",
    "to": "2014-04-30",
    "static_image": "/img/work/jobs/fokus.png",
    "description": "Created UX/UI prototypes and applications for cutting-edge video conferencing systems in the browser.",
    "achievements": [
      {
        "emoji": "📹",
        "text": "Built a WebRTC-based video conferencing system in the browser—imagine Zoom in the browser in 2012"
      },
      {
        "emoji": "💻",
        "text": "Worked with Next Generation Networks (3G, 4G), programmed JAVA and C/C++"
      }
    ]
  }
]

const projects = [
  {
    "title": "30DayAnimator Course",
    "date": "2023",
    "static_image": "/img/work/2023-30dayanimator.jpg",
    "animated_image": "/img/work/2023-30dayanimator.gif",
    "description": `I created this animation course to teach animation to people in a new and simple way.

- 1 step at a time.
- 1 exercise daily, to be completed in 1 hour or less!
- Every day a new and important concept in animation.

This way of learning is meant to motivate people to stay and complete the course, without being overwhelmed by the amount of complexity that animation initially brings.

At the same time, one has always a completed little animation that one can be proud of every single day.

[30dayanimator.com](http://30dayanimator.com/)`,
    "tags": ["d2", "motion-design", "product"]
  },
  {
    "title": "Reincarnation Mall",
    "date": "2023 Jan-Feb",
    "static_image": "/img/work/2022-lavamachine.png",
    "animated_image": "/img/work/2022-lavamachine.gif",
    "description": `I had the exciting opportunity to animate a 30-second scene for the short film of [LAVAMACHINE](https://lavamachine.com/), a studio I deeply admire for their creative output in the VR animation space.

The animation was officially produced by [META](https://www.meta.com/quest/?utm_source=lavamachine.com&utm_medium=oculusredirect) to promote their VR headset brand and its capabilities.

[view short film](https://www.oculus.com/experiences/media/861868095081198/)`,
    "tags": ["d3", "vr"]
  },
  {
    "title": "Paradime.io - Brand Video",
    "date": "2022 Oct-Nov",
    "static_image": "/img/work/2022-paradime.png",
    "animated_image": "/img/work/2022-paradime.gif",
    "description": `[view animation](https://vimeo.com/785724246)

Paradime is a data and analytics platform. They approached me for their upcoming ProductHunt launch to produce a video to explain the problem their platform is solving. It's a dramatic and cheeky video explaining the everyday struggles of people working with an increasingly complex data analytics tech stack.

For this project I coordinated the entire production, from the first ideations to the final delivery of the finished project. First we created visual ideas in a brainstorming session, which then were turned into thumbnail sketches and then arranged into a storyboard. Then a rough animatic was created based on the storyboard and when that was approved I went on to create the final animation, hired a voice artist, and did the final sound design and mixing.

The project had a pretty tight schedule and was completed in only 6 weeks from start to finish. A great achievement considering the complexity of many of the scenes in the animation!

I wrote about the creation of one of the most complex scenes here:  
[How I Made This Complex Animation (Medium Article)](https://medium.com/the-inspired-animator/how-i-made-this-complex-animation-133269cf70f)`,
    "tags": ["d2", "motion-design", "sound-design"]
  },
  {
    "title": "Pumping Iron",
    "date": "2022 August",
    "static_image": "/img/work/2022-pumping-iron.jpg",
    "animated_image": "/img/work/2022-pumping-iron.gif",
    "description": `A short animation created with the VR software Quill and rendered in Blender. The project was a proof of concept to test the entire rendering pipeline of an animation from Quill to Blender and figure out stumbling blocks before attempting even bigger animations.

[view animation](https://www.youtube.com/watch?v=p2WGUmQIsKc)`,
    "tags": ["d3", "vr", "sound-design"]
  },
  {
    "title": "Levity Product Trailer",
    "date": "2022 March",
    "static_image": "/img/work/2022-levity.jpg",
    "animated_image": "/img/work/2022-levity.gif",
    "description": `[view product trailer](https://vimeo.com/722503171)

An animation introducing the Levity AI platform in an exciting way. This project was animated from the earliest storyboard to the final delivery of the trailer.

Combined 2D and 3D motion design with hand-painted frame-by-frame animation techniques were used to create an exciting and fast-paced tour through the platforms main features.`,
    "tags": ["d2", "d3", "motion-design", "sound-design"]
  },
  {
    "title": "Xocolatl Illustrations",
    "date": "2022 February",
    "static_image": "/img/work/2022-xocolatl.jpg",
    "animated_image": "/img/work/2022-xocolatl.gif",
    "description": `A series of illustrations of ancient American civilizations. The warrior, the citizen and the shaman. Created for the Xocolatl Web3 project as three different tiers to contribute to the project.

[view illustrations](https://www.artstation.com/artwork/QnVEgB)`,
    "tags": ["illustration"]
  },
  {
    "title": "Quill VR Shorts",
    "date": "2021 - 2022",
    "static_image": "/img/work/2022-vr-showreel.jpg",
    "animated_image": "/img/work/2022-vr-showreel.gif",
    "description": `Exploring the new medium and creative possibilities of animating in VR.

[view showreel](https://vimeo.com/724798042)`,
    "tags": ["d3", "vr"]
  },
  {
    "title": "Fly Asleep - Concept Ad",
    "date": "2021 December",
    "static_image": "/img/work/2021-fly-asleep.jpg",
    "animated_image": "/img/work/2021-fly-asleep.gif",
    "description": `In this project I wanted to challenge myself to create a "satisfying" animation with Blender with the use of physics, slow motion and different material settings.

I came up with this simple concept ad for pillows. That are so comfy that you would "Fly Asleep" instead of just falling. I did not only the animation, but also the sound design and music for it.

[view video](https://youtu.be/ZqYWGE9DvaA)`,
    "tags": ["d3", "motion-design", "sound-design"]
  },
  {
    "title": "AE Plugins & Presets",
    "date": "2020 - 2022",
    "static_image": "/img/work/2022-ae-plugins.jpg",
    "animated_image": "/img/work/2022-ae-plugins.jpg",
    "description": `Working with After Effects has many inefficiencies. It's a great tool, but not perfect. Tackling these problems I started creating plugins and presets and selling them on my store. For marketing purposes I produced multiple trailers and advertised on various channels.

Examples include:  
**EasyLoop**, a plugin that allows looping with the click of a single button.  
**VHS IT**, a plugin to recreate a VHS look on your footage.  
**Handcrafted Look**, a preset that makes your footage look hand-animated.

[view all plugins](https://justgoscha.gumroad.com/?tags=after+effects)`,
    "tags": ["d2", "motion-design", "product"]
  },
  {
    "title": "Futurepark 2050",
    "date": "2021 July",
    "static_image": "/img/work/2021-future-park.jpg",
    "animated_image": "/img/work/2021-future-park.jpg",
    "description": `For **The Future Game 2050** I animated an illustration (by Johannes Fuchs) of a futuristic park.

We were using web technologies like SVG and Lottie to bring the animation to life. With my tech expertise in Web Development I was consulting on the best solutions to implement the animation in an efficient manner.`,
    "tags": ["d2", "motion-design", "ui-ux"]
  },
  {
    "title": "Serene Scenes SVGs",
    "date": "2021 June",
    "static_image": "/img/work/2021-serene-scenes.jpg",
    "animated_image": "/img/work/2021-serene-scenes.jpg",
    "description": `To learn to create beautiful background illustrations and vector graphics I started a project to draw daily landscape sceneries.

What came out was not only a set of beautiful illustrations, but also a illustration library product for others to buy and use.

[link to project](https://www.producthunt.com/posts/serene-scenes-illustrations-pack)`,
    "tags": ["illustration", "product"]
  },
  {
    "title": "Afilio Hero Animation",
    "date": "2021 February",
    "static_image": "/img/work/2021-afilio.jpg",
    "animated_image": "/img/work/2021-afilio.gif",
    "description": `Afilio's website has nice illustrations, but it felt a little bit static. To get people even more engaged with the topic of insurances, we decided to collaborate to create an animated hero video to play in the background and replace the hero illustration.

The challenge was to create something that is not too distracting and would overtake the entire design, but it should still allow you to linger on the animation and see the subtle story unfold. The story being a lifetime in timelapse of a woman from college to retirement.

[see it in action](https://www.afilio.de/)`,
    "tags": ["d2", "motion-design"]
  },
  {
    "title": "The Last Today",
    "date": "2021",
    "static_image": "/img/work/2020-last-today.jpg",
    "animated_image": "/img/work/2020-last-today.gif",
    "description": `Animation of a 30-second car crash scene for the short film **The Last Today**. Mixing of 3D elements into a completely frame-by-frame animated scene.

Complete creative control over the execution of the scene

[view making of](https://twitter.com/justgoscha/status/1553009697556500480)`,
    "tags": ["d2", "d3", "motion-design"]
  },
  {
    "title": "PseudoRa Video Loops",
    "date": "2020 - 2021",
    "static_image": "/img/work/2020-pseudora.jpg",
    "animated_image": "/img/work/2020-pseudora.jpg",
    "description": `I was commissioned to create two animation loops of backgrounds matching the vibe of the music of up and coming Jazz & Rap artist PseudoRa. What came out are two great pieces that capture a great nostalgic mood in modern times.

[view PseudoRa - Berlin](https://www.instagram.com/p/CL9tHDQigdH/)  
[view PseudoRa - Miami](https://www.instagram.com/p/CB-UBSoqrx6/)`,
    "tags": ["d2", "motion-design"]
  },
  {
    "title": "FortoX - Explainer",
    "date": "2020",
    "static_image": "/img/work/2020-fortox explainer.png",
    "animated_image": "/img/work/2020-fortox explainer.png",
    "description": `Assisting with animation and asset creation for the FortoX explainer video.

[watch FortoX - Explainer Video](https://www.facebook.com/watch/?v=440421150264841)`,
    "tags": ["illustration", "motion-design"]
  },
  {
    "title": "Forto - Customer Journey",
    "date": "2020",
    "static_image": "/img/work/2020-forto-customer-journey.jpg",
    "animated_image": "/img/work/2020-forto-customer-journey.gif",
    "description": `Illustrating a customer journey for a new product of Forto, involving 8 different steps in the journey with each having its own illustration.`,
    "tags": ["illustration", "ui-ux"]
  },
  {
    "title": "Moebius Inspired Short",
    "date": "2019 Oct",
    "static_image": "/img/work/2019-spaceship.jpg",
    "animated_image": "/img/work/2019-spaceship.gif",
    "description": `A private commission to create an animation inspired by a Moebius-style illustration.

[view animation](https://www.reddit.com/r/animation/comments/g7u1ft/i_created_a_little_making_of_for_first_client/)`,
    "tags": ["d2", "sound-design"]
  },
  {
    "title": "100 Days of Walk Cycles",
    "date": "2016 March",
    "static_image": "/img/work/100d.jpg",
    "animated_image": "/img/work/100d.jpg",
    "description": `To accelerate my learning of animation I decided to challenge myself to create 100 different walk cycles on 100 consecutive days.

From that experience came also a first short film that compiled all the cycles into a single video. I wrote an article about my experience of attempting the challenge and overnight it became an instant internet success and gathered over 50,000 views.

[view video](https://vimeo.com/160298199)  
[read full story](https://medium.com/the-inspired-animator/100daysofwalkcycles-134ae1ca91ac#.c3so76uio)`,
    "tags": ["d2"]
  }
];

module.exports = {
  work,
  projects,
  tagMapping
};
