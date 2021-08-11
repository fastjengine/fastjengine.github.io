"use strict";(self.webpackChunkfastj_docs=self.webpackChunkfastj_docs||[]).push([[727],{2198:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),l=["components"],s={title:"FastJ 1.4.0 Release",author:"Andrew Dey",author_title:"Creator of the FastJ Game Engine",author_url:"https://github.com/lucasstarsz",author_image_url:"https://github.com/lucasstarsz.png",keywords:["fastj","java game engine","fastj game engine","fastj 1.4.0","fastj game engine 1.4.0","java game engine 2021","can java be used for making games","free java game engine","free game engine","game engine 2021","kotlin game engine","is kotlin good for making games","kotlin game engine 2021","groovy game engine","groovy game engine 2021","is groovy good for making games","2d game engine","java2d game engine","java 2d game engine","kotlin 2d game engine","fastj 2d game engine","groovy 2d game engine","how to make games","how to make game tutorial","game making tutorial"],tags:["fastj","release","fastj-1.4.0"],description:"This isn't a very glamorous update, but it is an essential one. FastJ has been equipped with several useful mathematical methods in order to ease the amount of work that programmers would need to do to create simple games.<br/>...In other words, FastJ's pretty tough to use without these \ud83d\ude05 <br/>That being said, these updates constitute a satisfactory base that can be further built upon.",image:"/img/fastj/fastj_icon_wired.png",hide_table_of_contents:!1},r=void 0,d={permalink:"/news/2021/05/20/fastj-1-4-0-release",source:"@site/news/2021-05-20-fastj-1-4-0-release.md",title:"FastJ 1.4.0 Release",description:"This isn't a very glamorous update, but it is an essential one. FastJ has been equipped with several useful mathematical methods in order to ease the amount of work that programmers would need to do to create simple games.<br/>...In other words, FastJ's pretty tough to use without these \ud83d\ude05 <br/>That being said, these updates constitute a satisfactory base that can be further built upon.",date:"2021-05-20T00:00:00.000Z",formattedDate:"May 20, 2021",tags:[{label:"fastj",permalink:"/news/tags/fastj"},{label:"release",permalink:"/news/tags/release"},{label:"fastj-1.4.0",permalink:"/news/tags/fastj-1-4-0"}],readingTime:1.79,truncated:!0,prevItem:{title:"FastJ 1.5.0 Release",permalink:"/news/2021/08/04/fastj-1-5-0-release"}},u=[{value:"Sonarcloud Code Coverage",id:"sonarcloud-code-coverage",children:[]},{value:"Code Style Consistency",id:"code-style-consistency",children:[]},{value:"New Additions",id:"new-additions",children:[{value:"<code>Maths.java</code>",id:"mathsjava",children:[]},{value:"<code>Point.java</code>",id:"pointjava",children:[]},{value:"<code>Pointf.java</code>",id:"pointfjava",children:[]},{value:"<code>Display.java</code>",id:"displayjava",children:[]},{value:"<code>FastJEngine.java</code>",id:"fastjenginejava",children:[]}]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Internal Changes",id:"internal-changes",children:[{value:"<code>Display.java</code>",id:"displayjava-1",children:[]},{value:"<code>InputManager.java</code>",id:"inputmanagerjava",children:[]}]},{value:"Breaking Changes",id:"breaking-changes",children:[]},{value:"Other",id:"other",children:[]}],m={toc:u};function p(e){var a=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This isn't a very glamorous update, but it is an essential one. FastJ has been equipped with several useful mathematical methods in order to ease the amount of work that programmers would need to do to create simple games."),(0,o.kt)("p",null,"...In other words, FastJ's pretty tough to use without these \ud83d\ude05 "),(0,o.kt)("p",null,"That being said, these updates constitute a satisfactory base that can be further built upon."),(0,o.kt)("h3",{id:"sonarcloud-code-coverage"},"Sonarcloud Code Coverage"),(0,o.kt)("p",null,"You may have noticed a shiny new badge on the README! FastJ now makes use of Sonarcloud for code coverage, code smells, and other various helpful code analyses."),(0,o.kt)("h3",{id:"code-style-consistency"},"Code Style Consistency"),(0,o.kt)("p",null,"I had some extra time while working on this game engine, so I meticulously worked to improve the documentation style and code style. With this update, the code for the library is (hopefully) much more consistent and readable."),(0,o.kt)("h2",{id:"new-additions"},"New Additions"),(0,o.kt)("h3",{id:"mathsjava"},(0,o.kt)("inlineCode",{parentName:"h3"},"Maths.java")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"Maths#lerp")," for basic linear interpolation (by @YeffyCodeGit)")),(0,o.kt)("h3",{id:"pointjava"},(0,o.kt)("inlineCode",{parentName:"h3"},"Point.java")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"java.awt.Dimension")," conversion/equality checking"),(0,o.kt)("li",{parentName:"ul"},"Added integer/float ",(0,o.kt)("inlineCode",{parentName:"li"},"magnitude")," methods"),(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"square magnitude"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"dot product"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"cross product"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"normalize")," methods"),(0,o.kt)("li",{parentName:"ul"},"Added static/object-based, integer/floating-point ",(0,o.kt)("inlineCode",{parentName:"li"},"angle"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"signed angle"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"rotate")," methods")),(0,o.kt)("h3",{id:"pointfjava"},(0,o.kt)("inlineCode",{parentName:"h3"},"Pointf.java")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"magnitude")," methods"),(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"square magnitude"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"dot product"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"cross product")," methods"),(0,o.kt)("li",{parentName:"ul"},"Added static/object-based ",(0,o.kt)("inlineCode",{parentName:"li"},"normalize"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"angle"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"signed angle"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"rotate")," methods")),(0,o.kt)("h3",{id:"displayjava"},(0,o.kt)("inlineCode",{parentName:"h3"},"Display.java")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Moved all ",(0,o.kt)("inlineCode",{parentName:"li"},"GraphicsEnvironment"),"-related static methods to ",(0,o.kt)("inlineCode",{parentName:"li"},"DisplayUtil.java"))),(0,o.kt)("h3",{id:"fastjenginejava"},(0,o.kt)("inlineCode",{parentName:"h3"},"FastJEngine.java")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"FastJEngine#runAfterUpdate(action)")," method to run actions after the next completed ",(0,o.kt)("inlineCode",{parentName:"li"},"LogicManager#update"),".")),(0,o.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed issue where some ",(0,o.kt)("inlineCode",{parentName:"li"},"Executors")," were not stopped upon exiting the engine, preventing applications from being able to close.")),(0,o.kt)("h2",{id:"internal-changes"},"Internal Changes"),(0,o.kt)("h3",{id:"displayjava-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"Display.java")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Broke fullscreen methods into reusable chunks for better readability/use")),(0,o.kt)("h3",{id:"inputmanagerjava"},(0,o.kt)("inlineCode",{parentName:"h3"},"InputManager.java")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replaced use of specific methods for input (keyboard, mouse) events with general methods and mappings of specific actions.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"See details in #14 "))),(0,o.kt)("li",{parentName:"ul"},"Lowered floating-point accuracy requirement (",(0,o.kt)("inlineCode",{parentName:"li"},"Maths#FloatPrecision"),") to 4 digits")),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Changed all methods using UI elements referring to ",(0,o.kt)("inlineCode",{parentName:"li"},"GUIObject")," to use ",(0,o.kt)("inlineCode",{parentName:"li"},"UIElement"),"."),(0,o.kt)("li",{parentName:"ul"},"Changed all ",(0,o.kt)("inlineCode",{parentName:"li"},"enum"),"s to use PascalCase instead of CONSTANT_CASE.")),(0,o.kt)("h2",{id:"other"},"Other"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Removed public modifiers on unit tests/unit test classes"),(0,o.kt)("li",{parentName:"ul"},"Added a second (WIP) example program -- a simple bullet hell game")))}p.isMDXComponent=!0}}]);