(self.webpackChunkfastj_docs=self.webpackChunkfastj_docs||[]).push([[855],{6464:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l={sidebar_position:1,sidebar_label:"Intro to FastJ",hide_title:!0},o=void 0,s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"intro",description:"FastJ Logo",source:"@site/wiki/intro.md",sourceDirName:".",slug:"/intro",permalink:"/wiki/intro",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Intro to FastJ",hide_title:!0},sidebar:"defaultSidebar",next:{title:"Setting up for FastJ",permalink:"/wiki/fastj-basics/setting-up-for-fastj"}},d=[{value:"What is FastJ?",id:"what-is-fastj",children:[]},{value:"Disclaimer",id:"disclaimer",children:[]},{value:"Projected Feature List",id:"projected-feature-list",children:[]},{value:"Adding FastJ to your project",id:"adding-fastj-to-your-project",children:[{value:"Adding the Dependency",id:"adding-the-dependency",children:[]}]},{value:"Learning FastJ",id:"learning-fastj",children:[]},{value:"Contributing to FastJ",id:"contributing-to-fastj",children:[{value:"Building FastJ",id:"building-fastj",children:[]}]},{value:"License",id:"license",children:[]}],p={toc:d};function u(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/fastjengine/FastJ/main/.github/media/fastj_logo.png",alt:"FastJ Logo",title:"FastJ Logo"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastjengine/FastJ/actions?query=workflow%3ABuild-Windows",title:"Windows Build Status"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/workflow/status/fastjengine/FastJ/Build-Windows?label=Windows%20Build&labelColor=363e45&logo=windows&logoColor=0078D6&style=for-the-badge",alt:"Windows Build Status"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastjengine/FastJ/actions?query=workflow%3ABuild-Ubuntu",title:"Ubuntu Build Status"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/workflow/status/fastjengine/FastJ/Build-Ubuntu?label=Ubuntu%20Build&labelColor=363e45&logo=ubuntu&logoColor=E95420&style=for-the-badge",alt:"Ubuntu Build Status"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastjengine/FastJ/actions?query=workflow%3ABuild-MacOS",title:"Mac OS Build Status"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/workflow/status/fastjengine/FastJ/Build-MacOS?label=Mac%20OS%20Build&labelColor=363e45&logo=apple&logoColor=000000&style=for-the-badge",alt:"Mac OS Build Status"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/io.github.lucasstarsz.fastj/fastj-library",title:"FastJ Documentation"},(0,i.kt)("img",{parentName:"a",src:"https://javadoc.io/badge2/io.github.lucasstarsz.fastj/fastj-library/Javadocs.svg?style=for-the-badge&color=blue&labelColor=363e45&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFEklEQVR4Xu1bbXLbNhBdgFR6mLoWSSX2AfLVnqYZKW4mR8iHPT1NIjfJTH7Gqi1Rck5TkdjOgoJCyaQIkASoicxf8hDE7j487GIfaQYHfrEDjx/uAbhnwJ4iMOn38WQ+t85Q6wbq4vtvGOGj2dS6f9YN1AVgEkZ4cg/AgTJgEoYIwOBgGUD09xiDwfTG+ha1bsA0B0yCEIExwGQJp7e31v2zbsAYgDBCesYF/cnOXgFA1HcZ/F4BoILnjMFDB3tfMXMvGKCCd736nTNgcnyM4PnrNOFq3+fzUmcMyK961cpfhxEKRDiJZ6372/qEOllfBrQaSA6UnfmvowEiYul9HVtVY5wDkF/5B5xDcHN9x4ebaIApyoJgvRw6BSAfPALC6WyT0t+CADnjTgJ3XgXywTMh4NE83gC/q0rghAEbCa8gmVHvnxHePuW3c4J1APLBlSW8NUCWMv2uRGgdgCpqd7n6Tg5CVQBU3a8qY03vO2NAWX9/MAD4jEFU0OSYnAibrnbR8w4YkMlblQnwZ60CFNeuPj+fBFVSciGHd3IQ0mUBnf9PLTQ+nWwBZfQqjJAAKGp5r4IQGdvcja5aY+s5II860Z3+LqJ4V8nQKQAUPLW4QojC3r6LkugcAAJhGg2wsCSuJHGXPUEnAFCA8eAhbmsB9EYYuAcgEE7m7as/nSZBnUMMCSEkfemWwf7oEmXuRIT4/Pdai1nroV3BBC8vkXs+JMslLC7MnLrqh3haY+UDBQQwmL1/ZhST0eCywKO/PiOKFEjnm79/3sqcOozJj/kBAsDMwIdGzoYvL5WOASkKWJz/0Wi+ncwaXWIKCLc7qK78SYWAxYWeL7UdJqpvP8wYBzJO8s7iQo8JfQIREeiNEFDXwDngWjMGoDkFCog1VjU6+4T0LNmPz/Xs1wYgv1rHwzF6XiZmSuumF2NZoLSNEGFRM6GtGWAwRysAmMZra7wCwFkOsBVInXnDs3/kVqLdE2tuP9V91rFX+kwwGlMzB3PDEtjEiSZVqNUtoJIQneRmDQHoj8bo+T2Yvnm800dl04T2ebDtALBhIUtw9NmLSBOpDKk0Sb8Z94F4K2mzvrPJhzQRsPj7blmjPU8VYt6g/LYKgHI7evUFMU1qs1qWQiFKDzSD11/l/NO3Txr733gC3SiPXoyx5zG5xoIBcGRy1ecGCUvXlsk4ZwCYOOVy7D0ANtBWZaluZrbhU9mcVhiQb5Kk4dxRlwwKpPcE9D0kZYSsShRVASEoR5i11KbgWQGAnFAnM1OHNsYzDrN3T635aOUkuB2wFEi4B6QX7L6Y7ASpIdLp/BoBm3u4FrpSfOBUxgBiQwWmLce35zkafsTvmhpA7ZNgePZJdhuIDOJzM+nJVuBqXtpys3fmPmkzIJ/Y9im7B0PSIDlMa+YKLQD6ZGSld2zQh/uQpMvaAoYpK3598QF7ngfcW+WUkiRJW9SKInQ0+ogP/F+yhJaTre4EwjjQuz5MScVTV/ZrVfiAPpOTxZCOxeoGXz1Hc28rS1RKuQ/L5L/duqDhVtBigM5KHY/GSLqenHBV96W2pyWR0Vkgc4W6O3qGPpS81Uxqvw2pz/AkqKZ5oDUAdEBqa8zRnx+w1/Oz/3ZABMa92p1hawCQEkSr2GaC7A/HyDlRn/Y8vXXItpE6OZq+BClagNYAUJNTH6B+J8sEPI8BU5/EK9EDVSg/pJG1I7QVpEROFZdU4maCRxXrWgegyuC+3f8fARJ0X9/EzrEAAAAASUVORK5CYIIA",alt:"Javadoc"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://maven-badges.herokuapp.com/maven-central/io.github.lucasstarsz.fastj/fastj-library",title:"FastJ on Maven Central"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.github.lucasstarsz.fastj/fastj-library?style=for-the-badge&color=blue&label=Maven%20Central&labelColor=363e45&logo=data:image/png;base64,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",alt:"Maven Central"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://sonarcloud.io/dashboard?id=fastjengine_FastJ",title:"SonarCloud Code Coverage"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/sonar/coverage/fastjengine_FastJ?labelColor=363e45&logo=sonarcloud&logoColor=f3702a&server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge",alt:"SonarCloud Code Coverage"})))),(0,i.kt)("h2",{id:"what-is-fastj"},"What is FastJ?"),(0,i.kt)("p",null,"FastJ is an open-source, Java-based 2D game engine and framework. Originally named the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastjengine/FastJ-Engine",title:"The original: FastJ Game Engine"},"FastJ Engine"),", it aims to provide an easy-to-use, 2D game-making library."),(0,i.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This project is still under heavy development.")," There is a very good chance bugs are still prevalent and untracked, as the engine is not fully covered by unit tests. Documentation is readily available, but may change over time. ",(0,i.kt)("a",{parentName:"p",href:"#contributing-to-fastj"},"If you would like to help out, all help is appreciated!")),(0,i.kt)("h2",{id:"projected-feature-list"},"Projected Feature List"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Support"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"2D Rendering"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Rendering of 2D Polygons, Models, Lighting"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Scene System"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Scene-based Rendering, Scene Switching"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Scriptable Behaviors"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Control game object states through behaviors."),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Desktop Support"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Compatibility on Windows, Linux, and macOS."),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Audio Engine"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Play sounds of several different formats at any given time."),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Image Support"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Image rendering, transformations, and sprite animation."),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Animation Support"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Interpolation and tweening framework."),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"UI System"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Flexible UI system to replace the need for Swing UI."),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2b55")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"FastJ Model Creator"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Create & Export 2D Models quickly and easily."),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"FastJ Editor"),(0,i.kt)("td",{parentName:"tr",align:"left"},"View, Run, Build, and Export FastJ games from an editor."),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Web Support"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Compile FastJ games to run in a browser."),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c")))),(0,i.kt)("p",null,"\u2705 is complete and satisfactory."),(0,i.kt)("p",null,"\u2714 is implemented and usable, but is missing certain features."),(0,i.kt)("p",null,"\u2b55 is in progress."),(0,i.kt)("p",null,"\u274c is not yet implemented."),(0,i.kt)("h2",{id:"adding-fastj-to-your-project"},"Adding FastJ to your project"),(0,i.kt)("p",null,"This library can be found in the following places:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://maven-badges.herokuapp.com/maven-central/io.github.lucasstarsz.fastj/fastj-library",title:"FastJ on Maven Central"},"Maven Central"),", as a dependency or as a jarfile."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastjengine/FastJ/releases/",title:"FastJ Releases"},"Releases")," section of this repository.")),(0,i.kt)("h3",{id:"adding-the-dependency"},"Adding the Dependency"),(0,i.kt)("p",null,"When adding the dependency, ",(0,i.kt)("strong",{parentName:"p"},"make sure to replace ",(0,i.kt)("inlineCode",{parentName:"strong"},"[latest version here]")," with the actual latest version")," (you'll find this in the Maven Central link up above). ",(0,i.kt)("strong",{parentName:"p"},"The current latest version is 1.4.0"),"."),(0,i.kt)("p",null,"A few common dependencies are provided below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gradle"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Groovy:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'io.github.lucasstarsz.fastj:fastj-library:[latest version here]'\n"))),(0,i.kt)("li",{parentName:"ul"},"Kotlin:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("io.github.lucasstarsz.fastj:fastj-library:[latest version here]")\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Maven"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>io.github.lucasstarsz.fastj</groupId>\n  <artifactId>fastj-library</artifactId>\n  <version>[latest version here]</version>\n</dependency>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Apache Ivy"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<dependency org="io.github.lucasstarsz.fastj" name="fastj-library" rev="[latest version here]" />\n')))),(0,i.kt)("h2",{id:"learning-fastj"},"Learning FastJ"),(0,i.kt)("p",null,"There will likely be a small wiki added for this game engine at a later time. For now, you'll want to check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastjengine/FastJ/tree/main/src/example",title:"FastJ: Example Game"},"the example projects")," for getting started with FastJ."),(0,i.kt)("p",null,"From there, explore the example code, play around with it, and read the ",(0,i.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/io.github.lucasstarsz.fastj/fastj-library",title:"FastJ Documentation"},"API documentation")," to get a better understanding of FastJ."),(0,i.kt)("h2",{id:"contributing-to-fastj"},"Contributing to FastJ"),(0,i.kt)("p",null,"Plan on contributing to the repository? Great! Be sure to read over the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastjengine/FastJ/tree/main/.github/CONTRIBUTING.md",title:"Contributing to FastJ"},"contribution guidelines"),"."),(0,i.kt)("h3",{id:"building-fastj"},"Building FastJ"),(0,i.kt)("p",null,"You'll need a few things in order to work on the repository:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads",title:"Download Git, the powerful source control management tool."},"Git")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://adoptopenjdk.net/?variant=openjdk11&jvmVariant=hotspot",title:"Download Java 11"},"Java 11")),(0,i.kt)("li",{parentName:"ul"},"(optional, but highly recommended!) A decent understanding of how to use ",(0,i.kt)("a",{parentName:"li",href:"https://gradle.org/install/",title:"Download Gradle, the powerful build tool."},"Gradle"),".\n",(0,i.kt)("strong",{parentName:"li"},"Installation of Gradle is not required -- the project supplies the Gradle tools already."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For reference, this project currently makes use of Gradle 6.7.1.")))),(0,i.kt)("p",null,"Once you have what you need, follow these simple steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clone the FastJ repository.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/fastjengine/FastJ.git\n"))),(0,i.kt)("li",{parentName:"ul"},"Build the project.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew build\n")),(0,i.kt)("em",{parentName:"li"},"Having trouble using ",(0,i.kt)("inlineCode",{parentName:"em"},"gradlew"),"? Read ",(0,i.kt)("a",{parentName:"em",href:"https://gist.github.com/lucasstarsz/9bbc306f8655b916367d557043e498ad",title:"Terminals Access Files Differently"},"this"),"."))),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"This repository is licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastjengine/FastJ/tree/main/LICENSE.txt",title:"MIT Licensing"},"MIT License"),"."))}u.isMDXComponent=!0}}]);