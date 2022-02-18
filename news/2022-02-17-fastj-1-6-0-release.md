---
title: FastJ 1.6.0 Release
author: Andrew Dey
author_title: Creator of the FastJ Game Engine
author_url: https://github.com/lucasstarsz
author_image_url: https://github.com/lucasstarsz.png
keywords: ["fastj", "java game engine", "fastj game engine", "fastj 1.6.0", "fastj game engine 1.6.0", "java game engine 2022", "can java be used for making games", "free java game engine", "free game engine", "game engine 2022", "kotlin game engine", "is kotlin good for making games", "kotlin game engine 2022", "groovy game engine", "groovy game engine 2022", "is groovy good for making games", "2d game engine", "java2d game engine", "java 2d game engine", "kotlin 2d game engine", "fastj 2d game engine", "groovy 2d game engine", "how to make games", "how to make game tutorial", "game making tutorial"]
tags: [fastj, release, fastj-1.6.0]
description: "FastJ 1.6.0 has been released, with 269 new commits since FastJ 1.5.1. This version of FastJ contains bug fixes, new features, new examples, and more! Read on to find out what's happening."
image: /img/fastj/fastj_icon_wired.png
hide_table_of_contents: false
---

FastJ 1.6.0 has been released, with 80 new commits since FastJ [1.5.1][FastJ-Version-1.5.1-Release-Link]. This version of FastJ contains bug fixes, new features, new examples, and more! Read on to find out what's new.


[FastJ-Version-1.5.1-Release-Link]: /news/2022/02/17/fastj-1-5-1-release "FastJ 1.5.1 Release"

<!--truncate-->



The beginnings of ideas for the next iteration of FastJ, enter 1.6.0! With almost 270 commits since 1.5.1, FastJ has been able to grow substantially! Thanks to all of our contributors this time around! ❤️ 


## Examples have Moved!
Examples are now visible from the root directory of the FastJ project -- the `examples` folder! [Check them out](https://github.com/fastjengine/FastJ/tree/main/examples).


## Plans for the Future
Based on the direction I'm seeing the engine's current code architecture (or lack thereof) head, it's time we hunker down and completely redesign FastJ. As a result of this and lack of time, unfortunately not much effort can be put into 1.6.0's release and information surrounding it.

**We're planning to rebuild FastJ from the ground up**. We would love _your_ help in bringing FastJ into a modern development setup. [Join the Discord Server](https://discord.gg/d6pneNjMaV) and help us decide the architecture and features to be brought with us into the next version of FastJ. We're doing this _right now_ (as of February 17, 2022). Bring your experience, your opinions, your ideas for the future.

Thank you for your time.


## What's Changed
* (#104) add X11 to list of supported hardware accelerations by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/105
* Remove Translation from setMetrics by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/107
* Images, Sprites, Animations, and a whole lot more by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/117
* Update README for update on Animation Support. by @Sammie156 in https://github.com/fastjengine/FastJ/pull/118
* [Documentation] Added package-info documentation for (most) packages by @YeffyCodeGit in https://github.com/fastjengine/FastJ/pull/112
* Add set(int) method for both Point classes. by @Sammie156 in https://github.com/fastjengine/FastJ/pull/121
* Update feature request issue template by @YeffyCodeGit in https://github.com/fastjengine/FastJ/pull/126
* Logging Implementation for FastJ with SLF4J(Simple Logging Facade for Java) by @Sammie156 in https://github.com/fastjengine/FastJ/pull/125
* Add logging (SLF4J), add engine configuration, change examples module into subproject by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/127
* revamped display system by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/124
* updated image support status, latest FastJ version by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/135
* fixed package definitions, updated main module description by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/134
* fixed display resizing by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/136
* updated display event logging with formatting, migrated to debug/trace by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/137
* Fix sprite2d constructor by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/140
* Add dependabot to repo by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/144
* Bump org.sonarqube from 3.1.1 to 3.3 by @dependabot in https://github.com/fastjengine/FastJ/pull/145
* Update dialog config by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/152
* updated readme project template links by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/151
* Fix audio example, finish implementing logging example by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/150
* Add Spotless code formatter by @YeffyCodeGit in https://github.com/fastjengine/FastJ/pull/153
* Add ObjUtil and MtlUtil unit tests by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/154
* add/subtract/multiply/divide overloads, origin vectors, unit vectors, and direction vector functions by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/155
* remove redundant BasicStroke equals option by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/156
* Patch headless errors by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/157
* add distance formula to Point/Pointf by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/158
* (resolves #159) move static imports in Spotless to the bottom of the list by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/160
* Improved mouse events, unified input events by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/161
* (#162, #163) bump slf4j and junit dependencies to latest versions by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/164
* Update uses of logger to use formatted strings by @YeffyCodeGit in https://github.com/fastjengine/FastJ/pull/169
* Update Project for 1.6.0 by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/171
* 1.6.0 by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/128
* Update contributing guidelines by @lucasstarsz in https://github.com/fastjengine/FastJ/pull/173
* add addScenes function by @YeffyCodeGit in https://github.com/fastjengine/FastJ/pull/179

## New Contributors

* @dependabot made their first contribution in https://github.com/fastjengine/FastJ/pull/145

**Full Changelog**: https://github.com/fastjengine/FastJ/compare/1.5.1...1.6.0