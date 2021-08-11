"use strict";(self.webpackChunkfastj_docs=self.webpackChunkfastj_docs||[]).push([[477],{2030:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return d},default:function(){return p}});var n=t(7462),i=t(3366),s=(t(7294),t(3905)),r=["components"],o={title:"FastJ 1.5.1 Release",author:"Andrew Dey",author_title:"Creator of the FastJ Game Engine",author_url:"https://github.com/lucasstarsz",author_image_url:"https://github.com/lucasstarsz.png",keywords:["fastj","java game engine","fastj game engine","fastj 1.5.1","fastj game engine 1.5.1","java game engine 2021","can java be used for making games","free java game engine","free game engine","game engine 2021","kotlin game engine","is kotlin good for making games","kotlin game engine 2021","groovy game engine","groovy game engine 2021","is groovy good for making games","2d game engine","java2d game engine","java 2d game engine","kotlin 2d game engine","fastj 2d game engine","groovy 2d game engine","how to make games","how to make game tutorial","game making tutorial"],tags:["fastj","release","fastj-1.5.1"],description:"FastJ 1.5.1 has been released, with 80 new commits since FastJ 1.5.0. This version of FastJ contains bug fixes, new features, new examples, and more! Read on to find out what's new.",image:"/img/fastj/fastj_icon_wired.png",hide_table_of_contents:!1},l=void 0,m={permalink:"/news/2021/08/10/fastj-1-5-1-release",source:"@site/news/2021-08-10-fastj-1-5-1-release.md",title:"FastJ 1.5.1 Release",description:"FastJ 1.5.1 has been released, with 80 new commits since FastJ 1.5.0. This version of FastJ contains bug fixes, new features, new examples, and more! Read on to find out what's new.",date:"2021-08-10T00:00:00.000Z",formattedDate:"August 10, 2021",tags:[{label:"fastj",permalink:"/news/tags/fastj"},{label:"release",permalink:"/news/tags/release"},{label:"fastj-1.5.1",permalink:"/news/tags/fastj-1-5-1"}],readingTime:2.08,truncated:!0,nextItem:{title:"FastJ 1.5.0 Release",permalink:"/news/2021/08/04/fastj-1-5-0-release"}},d=[{value:"New Example Programs",id:"new-example-programs",children:[]},{value:"Replace Issue Templates with Issue Forms",id:"replace-issue-templates-with-issue-forms",children:[]},{value:"Audio from Java URLs",id:"audio-from-java-urls",children:[]},{value:"Added Missing Keyboard Improvements Section to 1.5.0",id:"added-missing-keyboard-improvements-section-to-150",children:[]},{value:"General Changelog",id:"general-changelog",children:[{value:"Additions",id:"additions",children:[]},{value:"Breaking Changes",id:"breaking-changes",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Other Changes",id:"other-changes",children:[]}]}],u={toc:d};function p(e){var a=e.components,t=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"FastJ 1.5.1 has been released, with 80 new commits since FastJ ",(0,s.kt)("a",{parentName:"p",href:"/news/2021/08/04/fastj-1-5-0-release",title:"FastJ 1.5.0 Release"},"1.5.0"),". This version of FastJ contains bug fixes, new features, new examples, and more! Read on to find out what's new."),(0,s.kt)("h2",{id:"new-example-programs"},"New Example Programs"),(0,s.kt)("p",null,"2 new example programs have been added to FastJ: Simple Audio and Behaviors! Check them out below:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://example.fastj.dev/audio/Main.java"},"FastJ Audio")," -- Simple Audio Playing/Loading in FastJ"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://example.fastj.dev/behaviors/Main.java"},"Behaviors")," -- Behaviors in FastJ")),(0,s.kt)("h2",{id:"replace-issue-templates-with-issue-forms"},"Replace Issue Templates with Issue Forms"),(0,s.kt)("p",null,"All of FastJ's issue templates have been replaced with GitHub's ",(0,s.kt)("a",{parentName:"p",href:"https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms"},"issue forms"),". ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/fastjengine/FastJ/issues/new/choose"},"Check them out here"),"!"),(0,s.kt)("h2",{id:"audio-from-java-urls"},"Audio from Java URLs"),(0,s.kt)("p",null,"Loading/Playing Audio with FastJ can now be done using ",(0,s.kt)("inlineCode",{parentName:"p"},"java.net.URL"),", enabling easy use of sound files contained in a jarfile through the ",(0,s.kt)("inlineCode",{parentName:"p"},"ClassLoader"),"."),(0,s.kt)("h2",{id:"added-missing-keyboard-improvements-section-to-150"},"Added Missing Keyboard Improvements Section to 1.5.0"),(0,s.kt)("p",null,"It seems that I forgot to cover the improvements made to FastJ's keyboard system in the 1.5.0 release. Sorry! ",(0,s.kt)("a",{parentName:"p",href:"https://fastj.tech/news/2021/08/04/fastj-1-5-0-release#keyboard-improvements"},"Go check it out to see what's up"),"."),(0,s.kt)("h2",{id:"general-changelog"},"General Changelog"),(0,s.kt)("h3",{id:"additions"},"Additions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Added explicit methods to manage behaviors/keys pressed in ",(0,s.kt)("inlineCode",{parentName:"li"},"LogicManager")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"initBehaviors")," -- requests that the ",(0,s.kt)("inlineCode",{parentName:"li"},"LogicManager")," initialize its behaviors"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"updateBehaviors")," -- requests that the ",(0,s.kt)("inlineCode",{parentName:"li"},"LogicManager")," update its behaviors"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"processKeysDown")," -- requests that the ",(0,s.kt)("inlineCode",{parentName:"li"},"LogicManager")," process keys pressed down"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"BehaviorManager.destroyListenerList")," for destroying the behaviors of any ",(0,s.kt)("inlineCode",{parentName:"li"},"BehaviorHandler"),"'s behavior listener list"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"BehaviorHandler.destroyBehaviorListeners")," for calling the ",(0,s.kt)("inlineCode",{parentName:"li"},"BehaviorManager"),"'s behavior destroying method")),(0,s.kt)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"(by ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/Sammie156"},"@Sammie156"),", PR ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/fastjengine/FastJ/pull/72"},"#72"),") Renamed ",(0,s.kt)("inlineCode",{parentName:"li"},"SupportedFileFormats")," to ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/fastjengine/FastJ/blob/main/src/main/java/tech/fastj/graphics/io/SupportedModelFormats.java"},(0,s.kt)("inlineCode",{parentName:"a"},"SupportedModelFormats"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"SceneManager")," no longer handles input at the update() stage. All input dealt with in ",(0,s.kt)("inlineCode",{parentName:"li"},"SceneManager")," will be called ",(0,s.kt)("em",{parentName:"li"},"before")," ",(0,s.kt)("inlineCode",{parentName:"li"},"render()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"SceneManager")," behavior initialization now occurs after background adjustments and scene initialization")),(0,s.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/fastjengine/FastJ/issues/96"},"#96"),") Fixed issue where ",(0,s.kt)("inlineCode",{parentName:"li"},"LogicManager")," did not initialize, update, or destroy behaviors"),(0,s.kt)("li",{parentName:"ul"},"Fixed issue where ",(0,s.kt)("inlineCode",{parentName:"li"},"LogicManager")," did not act on keys pressed down"),(0,s.kt)("li",{parentName:"ul"},"(",(0,s.kt)("a",{parentName:"li",href:"https://github.com/fastjengine/FastJ/issues/99"},"#99"),") Added behavior destroy calls to both ",(0,s.kt)("inlineCode",{parentName:"li"},"SimpleManager")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"Scene")," classes' ",(0,s.kt)("inlineCode",{parentName:"li"},"reset")," methods")),(0,s.kt)("h3",{id:"other-changes"},"Other Changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"(by ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/SaadRehmanCS"},"@SaadRehmanCS"),", PR ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/fastjengine/FastJ/pull/71"},"#71"),") include default case in ",(0,s.kt)("inlineCode",{parentName:"li"},"AudioEventListener.AudioEventProcessor")," switch statements which throws ",(0,s.kt)("inlineCode",{parentName:"li"},"IllegalStateException")),(0,s.kt)("li",{parentName:"ul"},"(by ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/Sammie156"},"@Sammie156"),", PR ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/fastjengine/FastJ/pull/80"},"#80"),") removed unnecessary casts in ",(0,s.kt)("inlineCode",{parentName:"li"},"Gradient.java")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"Point.java")),(0,s.kt)("li",{parentName:"ul"},"(by ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/Sammie156"},"@Sammie156"),", PR ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/fastjengine/FastJ/pull/84"},"#84"),") removed more unnecessary casts in ",(0,s.kt)("inlineCode",{parentName:"li"},"Point.java")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"MemoryAudioPlayer.java")),(0,s.kt)("li",{parentName:"ul"},"(internal) Replaced ",(0,s.kt)("inlineCode",{parentName:"li"},"update/init/renderCurrentScene")," methods with ",(0,s.kt)("inlineCode",{parentName:"li"},"safeUpdate/Init/Render")," methods, respectively"),(0,s.kt)("li",{parentName:"ul"},"(internal) Reorganize unit tests to match main package structure"),(0,s.kt)("li",{parentName:"ul"},"(internal) Added unit tests to cover loading/playing audio with URLs"),(0,s.kt)("li",{parentName:"ul"},"(internal) Added unit tests to cover unloading multiple audio files at once")))}p.isMDXComponent=!0}}]);