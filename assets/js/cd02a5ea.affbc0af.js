"use strict";(self.webpackChunkfastj_docs=self.webpackChunkfastj_docs||[]).push([[809],{9274:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],r={sidebar_position:2,keywords:["fastj configuration","fastj change fps","fastj change fps tutorial","how to change fps fastj","how to change ups fastj","how to change tps fastj","how to change window size fastj","how to change game window size fastj","how to use directx fastj","how to use opengl fastj","how to use x11 fastj","how to use software rendering fastj","fastj guide"],description:"Learn how to configure FastJ's target FPS, UPS, window size, and hardware acceleration."},l="Configuring FastJ",u={unversionedId:"tutorials/fastj-configuration",id:"tutorials/fastj-configuration",isDocsHomePage:!1,title:"Configuring FastJ",description:"Learn how to configure FastJ's target FPS, UPS, window size, and hardware acceleration.",source:"@site/wiki/tutorials/fastj-configuration.md",sourceDirName:"tutorials",slug:"/tutorials/fastj-configuration",permalink:"/wiki/tutorials/fastj-configuration",editUrl:"https://github.com/fastjengine/fastjengine.github.io/edit/main/wiki/tutorials/fastj-configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["fastj configuration","fastj change fps","fastj change fps tutorial","how to change fps fastj","how to change ups fastj","how to change tps fastj","how to change window size fastj","how to change game window size fastj","how to use directx fastj","how to use opengl fastj","how to use x11 fastj","how to use software rendering fastj","fastj guide"],description:"Learn how to configure FastJ's target FPS, UPS, window size, and hardware acceleration."},sidebar:"defaultSidebar",previous:{title:"Hello, FastJ!",permalink:"/wiki/tutorials/hello-fastj"}},d=[{value:"Configuring Resolution",id:"configuring-resolution",children:[{value:"Engine Resolution Defaults",id:"engine-resolution-defaults",children:[]}]},{value:"Configuring Hardware Acceleration",id:"configuring-hardware-acceleration",children:[{value:"Engine Hardware Acceleration Defaults",id:"engine-hardware-acceleration-defaults",children:[]}]},{value:"Target FPS and UPS",id:"target-fps-and-ups",children:[{value:"Engine Resolution Defaults",id:"engine-resolution-defaults-1",children:[]}]},{value:"All the Code at Once",id:"all-the-code-at-once",children:[]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],p={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-fastj"},"Configuring FastJ"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hopefully you've at least read through and understood the ",(0,o.kt)("a",{parentName:"p",href:"/wiki/tutorials/hello-fastj",title:"Hello, FastJ! | FastJ Tutorials"},"Hello, FastJ!")," tutorial.")),(0,o.kt)("p",null,"When using the other examples or FastJ in general, you may have noticed that the game engine defaults to a 1280","*","720 window. This is part of FastJEngine's default configuration -- the constant values defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"FastJEngine"),"'s source code that represent the default values that FastJEngine uses to configure the engine on initialization."),(0,o.kt)("p",null,"The default configuration contains all of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Window Resolution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Game Resolution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hardware Acceleration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Target FPS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Target UPS"))),(0,o.kt)("h2",{id:"configuring-resolution"},"Configuring Resolution"),(0,o.kt)("p",null,"With that said, let's get started with the first two types of configuration:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"FastJEngine.configureWindowResolution")," -- the resolution of the game window that the player sees."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"FastJEngine.configureViewerResolution")," -- the resolution of the game itself, separate from the window resolution.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Changing the window resolution means that the game resolution will stretch or compress itself in order to fit. (This concept is called stretch-to-fit!)")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Both of these use Point values... what are those?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You may have noticed that both ",(0,o.kt)("inlineCode",{parentName:"p"},"configureViewerResolution")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"configureInternalResolution")," require use of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Point"),". So... what ",(0,o.kt)("em",{parentName:"p"},"is")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"Point")," in FastJ?"),(0,o.kt)("p",{parentName:"div"},"Well, think of a FastJ ",(0,o.kt)("inlineCode",{parentName:"p"},"Point")," as a vector -- one that only allows integer values. A ",(0,o.kt)("inlineCode",{parentName:"p"},"Point")," is similar to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Pointf"),", other than that. Since it can represent corrdinates on a screen ",(0,o.kt)("em",{parentName:"p"},"and")," be used for screen sizes, I figure I may as well use a more general term."),(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},"But what's a ",(0,o.kt)("inlineCode",{parentName:"p"},"Pointf"),"?")),(0,o.kt)("p",{parentName:"div"},"It's the same concept as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Point")," -- a vector that has a general name. The main difference is that ",(0,o.kt)("inlineCode",{parentName:"p"},"Pointf")," allows floating-point values, specifically ",(0,o.kt)("inlineCode",{parentName:"p"},"float"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Point")," has its uses of course, but because so many things in FastJ work with floats, you'll see them around a lot more."))),(0,o.kt)("p",null,"We can configure the window resolution and internal (game) resolution using ",(0,o.kt)("inlineCode",{parentName:"p"},"FastJEngine.configureWindowResolution")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FastJEngine.configureViewerResolution"),", respectively. With the information provided above, they should be pretty straightforward. We'll set the initial window resolution to 640","*","480, and the internal (game) resolution to 1600","*","900."),(0,o.kt)("p",null,"Just, remember to apply your configurations after initializing the game engine please. (And of course, configure the engine before running the engine!)"),(0,o.kt)("p",null,"In order to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Point"),", you'll need a new import:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tech.fastj.math.Point")," -- the import for the ",(0,o.kt)("inlineCode",{parentName:"li"},"Point")," class.")),(0,o.kt)("p",null,"In context, here's how it would look:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Window Resolution Configuration" {22-23}',title:'"Window',Resolution:!0,'Configuration"':!0,"{22-23}":!0},'import tech.fastj.engine.FastJEngine;\nimport tech.fastj.math.Point;\nimport tech.fastj.graphics.display.FastJCanvas;\nimport tech.fastj.systems.control.SimpleManager;\n\npublic class Main extends SimpleManager {\n\n    @Override\n    public void init(FastJCanvas display) {\n    }\n\n    @Override\n    public void update(FastJCanvas display) {\n    }\n\n    /* The game\'s main entrypoint */\n    public static void main(String[] args) {\n        /* Initialize the game engine */\n        FastJEngine.init("Hello, FastJ!", new Main());\n\n        /* Configure the game engine */\n        FastJEngine.configureWindowResolution(new Point(640, 480));\n        FastJEngine.configureInternalResolution(new Point(1600, 900));\n\n        /* Run the game engine! */\n        FastJEngine.run();\n    }\n}\n')),(0,o.kt)("p",null,"By running the above code, you should see a 640","*","480 window. The effects of 1600","*","900 game window will be more apparent once we have things to put inside the window!"),(0,o.kt)("h3",{id:"engine-resolution-defaults"},"Engine Resolution Defaults"),(0,o.kt)("p",null,"The default values for these are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FastJEngine.DefaultFPS")," -- this value is set to 60 or higher, depending on your default monitor's configured Hz."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FastJEngine.DefaultUPS")," -- this value is set to 60.")),(0,o.kt)("h2",{id:"configuring-hardware-acceleration"},"Configuring Hardware Acceleration"),(0,o.kt)("p",null,"Next up, the hardware acceleration. In case you don't know, hardware acceleration is, in this case, the use of the GPU to handle rndering and other tasks far quicker than a CPU usually can."),(0,o.kt)("p",null,"FastJ makes use of java2d's multiple graphics backends (the code in the background that powers java2d), including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HWAccel.Direct3D")," -- Option defining the grpahics API for Windows devices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HWAccel.X11")," -- Option defining the graphics API for Linux devices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HWAccel.OpenGL")," -- Option defining a cross-platform graphics API that most computers support."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HWAccel.CpuRender")," -- Option defining the CPU-bsed rendering option which every platform supports.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Unlike the others, software rendering runs exclusively on the CPU. Some GPU is still used to output the actual window, but the drawing process is done entirely on the CPU."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HWAccel.Default")," -- Option defining the default graphics API used by the user's OS.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"What about macOS users?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently, Apple's graphics pipeline (named Metal) is not supported by java2d -- this also means FastJ is not able to make use of Metal, restricting macOS users to openGL and software rendering for the time being."),(0,o.kt)("p",{parentName:"div"},"Java 17 will be the first java version where the metal API will be provided as a graphics backend via java2d -- this means that when java 17 comes out, it will become an option for FastJ to use."))),(0,o.kt)("p",null,"The above options make up the ",(0,o.kt)("inlineCode",{parentName:"p"},"HWAccel")," class, which is exactly the class we'll use to change the hardware acceleration FastJ uses. In this example, we'll change the hardware acceleration to ",(0,o.kt)("inlineCode",{parentName:"p"},"HWAccel.OpenGL")," -- this means our FastJ program will use OpenGL as its hardware-accelerated graphics API. In order to do this, we'll be using the method ",(0,o.kt)("inlineCode",{parentName:"p"},"FastJEngine.configureHardwareAcceleration")," -- this takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"HWAccel")," object, which we're able to provide."),(0,o.kt)("p",null,"Before that, you'll need a new import:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tech.fastj.engine.HWAccel")," -- the import for the ",(0,o.kt)("inlineCode",{parentName:"li"},"HWAccel")," class.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Hardware Acceleration Configuration" {22}',title:'"Hardware',Acceleration:!0,'Configuration"':!0,"{22}":!0},'import tech.fastj.engine.FastJEngine;\nimport tech.fastj.engine.HWAccel;\nimport tech.fastj.graphics.display.FastJCanvas;\nimport tech.fastj.systems.control.SimpleManager;\n\npublic class Main extends SimpleManager {\n\n    @Override\n    public void init(FastJCanvas display) {\n    }\n\n    @Override\n    public void update(FastJCanvas display) {\n    }\n\n    /* The game\'s main entrypoint */\n    public static void main(String[] args) {\n        /* Initialize the game engine */\n        FastJEngine.init("Hello, FastJ!", new Main());\n\n        /* Configure the game engine */\n        FastJEngine.configureHardwareAcceleration(HWAccel.OpenGL);\n\n        /* Run the game engine! */\n        FastJEngine.run();\n    }\n}\n')),(0,o.kt)("p",null,"By running the above code, you should see a message logged that specifies that OpenGL rendering was enabled."),(0,o.kt)("h3",{id:"engine-hardware-acceleration-defaults"},"Engine Hardware Acceleration Defaults"),(0,o.kt)("p",null,"The default values for this is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HWAccel.Default")," -- this value keeps the OS defaults.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Wait, what happened to the window configuration?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In short, I removed the irrelevant code from this example. In the long run it makes the examples longer than they need to be, while also making it harder to grasp exactly ",(0,o.kt)("em",{parentName:"p"},"what")," is needed in that specific example."),(0,o.kt)("p",{parentName:"div"},"It may seem silly now, but trust me, it becomes much easier to understand over time."))),(0,o.kt)("h2",{id:"target-fps-and-ups"},"Target FPS and UPS"),(0,o.kt)("p",null,"Lastly, the target FPS and target UPS. These are values that control how many times certain actions are done, per second."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"targetFPS")," -- this is the value that represents the target for FastJ to render to the screen -- the amount of times that your game logic manager's ",(0,o.kt)("inlineCode",{parentName:"li"},"render")," method will be called per second."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"targetUPS")," -- this is the value that represents the target amount of times for FastJ to update the game state -- the amount of times that your game logic manager's ",(0,o.kt)("inlineCode",{parentName:"li"},"update")," method will be called per second.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In some game engines and frameworks this value is referred to as TPS, or Ticks Per Second.")))),(0,o.kt)("p",null,"Useful, don't you think?"),(0,o.kt)("p",null,"In order to configure the engine's target FPS and UPS, we need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"FastJEngine.setTargetFPS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FastJEngine.setTargetUPS"),", respectively. Both of these methods take integers (",(0,o.kt)("inlineCode",{parentName:"p"},"int"),") as parameters, so no extra imports are needed. This time, we'll set the target FPS to 75 and the target UPS to 30 -- this will have FastJ target 75FPS and 30 game updates per second."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Configuring Target FPS and UPS" {21-22}',title:'"Configuring',Target:!0,FPS:!0,and:!0,'UPS"':!0,"{21-22}":!0},'import tech.fastj.engine.FastJEngine;\nimport tech.fastj.graphics.display.FastJCanvas;\nimport tech.fastj.systems.control.SimpleManager;\n\npublic class Main extends SimpleManager {\n\n    @Override\n    public void init(FastJCanvas display) {\n    }\n\n    @Override\n    public void update(FastJCanvas display) {\n    }\n\n    /* The game\'s main entrypoint */\n    public static void main(String[] args) {\n        /* Initialize the game engine */\n        FastJEngine.init("Hello, FastJ!", new Main());\n\n        /* Configure the game engine */\n        FastJEngine.setTargetFPS(75);\n        FastJEngine.setTargetUPS(30);\n\n        /* Run the game engine! */\n        FastJEngine.run();\n    }\n}\n')),(0,o.kt)("p",null,"By running the above code, you should see... well, not much. The effects of changing the FPS and UPS become much more apparent once you have things to put inside your game window -- we haven't gotten far enough to see its effects."),(0,o.kt)("p",null,"However, there ",(0,o.kt)("em",{parentName:"p"},"is")," a very simple way to view the FPS count."),(0,o.kt)("h3",{id:"engine-resolution-defaults-1"},"Engine Resolution Defaults"),(0,o.kt)("p",null,"The default values for these are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FastJEngine.DefaultFPS")," -- this value is set to 60 or higher, depending on your default monitor's configured Hz."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FastJEngine.DefaultUPS")," -- this value is set to 60.")),(0,o.kt)("h2",{id:"all-the-code-at-once"},"All the Code at Once"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="All the Code at Once!"',title:'"All',the:!0,Code:!0,at:!0,'Once!"':!0},'import tech.fastj.engine.FastJEngine;\nimport tech.fastj.engine.HWAccel;\n\nimport tech.fastj.math.Point;\nimport tech.fastj.graphics.display.FastJCanvas;\n\nimport tech.fastj.systems.control.SimpleManager;\n\npublic class Main extends SimpleManager {\n\n    @Override\n    public void init(FastJCanvas display) {\n    }\n\n    @Override\n    public void update(FastJCanvas display) {\n    }\n\n    /* The game\'s main entrypoint */\n    public static void main(String[] args) {\n        /* Initialize the game engine */\n        FastJEngine.init("Hello, FastJ!", new Main());\n\n        /* Configure the game engine */\n        FastJEngine.configureWindowResolution(new Point(640, 480));\n        FastJEngine.configureInternalResolution(new Point(1600, 900));\n        FastJEngine.configureHardwareAcceleration(HWAccel.OpenGL);\n        FastJEngine.setTargetFPS(75);\n        FastJEngine.setTargetUPS(30);\n\n        /* Run the game engine! */\n        FastJEngine.run();\n    }\n}\n')),(0,o.kt)("p",null,"Results from combining all the above code:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/64715411/128181990-a0c61e1c-d2ac-4e8f-9043-6ddeac146efa.png",alt:"image"})),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"Next up, we'll cover (tutorial to be determined). Stay tuned!"))}h.isMDXComponent=!0}}]);