---
title: FastJ 1.5.1 Release
author: Andrew Dey
author_title: Creator of the FastJ Game Engine
author_url: https://github.com/lucasstarsz
author_image_url: https://github.com/lucasstarsz.png
keywords: ["fastj", "java game engine", "fastj game engine", "fastj 1.5.1", "fastj game engine 1.5.1", "java game engine 2021", "can java be used for making games", "free java game engine", "free game engine", "game engine 2021", "kotlin game engine", "is kotlin good for making games", "kotlin game engine 2021", "groovy game engine", "groovy game engine 2021", "is groovy good for making games", "2d game engine", "java2d game engine", "java 2d game engine", "kotlin 2d game engine", "fastj 2d game engine", "groovy 2d game engine", "how to make games", "how to make game tutorial", "game making tutorial"]
tags: [fastj, release, fastj-1.5.1]
description: "FastJ 1.5.1 has been released, with 80 new commits since FastJ 1.5.0. This version of FastJ contains bug fixes, new features, new examples, and more! Read on to find out what's new."
image: /img/fastj/fastj_icon_wired.png
hide_table_of_contents: false
---

FastJ 1.5.1 has been released, with 80 new commits since FastJ [1.5.0][FastJ-Version-1.5.0-Release-Link]. This version of FastJ contains bug fixes, new features, new examples, and more! Read on to find out what's new.


[FastJ-Version-1.5.0-Release-Link]: /news/2021/08/04/fastj-1-5-0-release "FastJ 1.5.0 Release"

<!--truncate-->


## New Example Programs
2 new example programs have been added to FastJ: Simple Audio and Behaviors! Check them out below:

- [FastJ Audio](https://example.fastj.dev/audio/Main.java) -- Simple Audio Playing/Loading in FastJ
- [Behaviors](https://example.fastj.dev/behaviors/Main.java) -- Behaviors in FastJ


## Replace Issue Templates with Issue Forms
All of FastJ's issue templates have been replaced with GitHub's [issue forms](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms). [Check them out here](https://github.com/fastjengine/FastJ/issues/new/choose)!


## Audio from Java URLs
Loading/Playing Audio with FastJ can now be done using `java.net.URL`, enabling easy use of sound files contained in a jarfile through the `ClassLoader`.


## Added Missing Keyboard Improvements Section to 1.5.0
It seems that I forgot to cover the improvements made to FastJ's keyboard system in the 1.5.0 release. Sorry! [Go check it out to see what's up](https://fastj.tech/news/2021/08/10/fastj-1-5-0-release#keyboard-improvements).


## General Changelog

### Additions
- Added explicit methods to manage behaviors/keys pressed in `LogicManager`
- `initBehaviors` -- requests that the `LogicManager` initialize its behaviors
- `updateBehaviors` -- requests that the `LogicManager` update its behaviors
- `processKeysDown` -- requests that the `LogicManager` process keys pressed down
- `BehaviorManager.destroyListenerList` for destroying the behaviors of any `BehaviorHandler`'s behavior listener list
- `BehaviorHandler.destroyBehaviorListeners` for calling the `BehaviorManager`'s behavior destroying method


### Breaking Changes
- (by [@Sammie156][Sammie156-Link], PR [#72][FastJ-Pull-72]) Renamed `SupportedFileFormats` to [`SupportedModelFormats`](https://github.com/fastjengine/FastJ/blob/main/src/main/java/tech/fastj/graphics/io/SupportedModelFormats.java)
- `SceneManager` no longer handles input at the update() stage. All input dealt with in `SceneManager` will be called _before_ `render()`
- `SceneManager` behavior initialization now occurs after background adjustments and scene initialization


### Bug Fixes
- ([#96][FastJ-Issue-96]) Fixed issue where `LogicManager` did not initialize, update, or destroy behaviors
- Fixed issue where `LogicManager` did not act on keys pressed down
- ([#99][FastJ-Issue-99]) Added behavior destroy calls to both `SimpleManager` and `Scene` classes' `reset` methods


### Other Changes
- (by [@SaadRehmanCS][SaadRehmanCS-Link], PR [#71][FastJ-Pull-71]) include default case in `AudioEventListener.AudioEventProcessor` switch statements which throws `IllegalStateException`
- (by [@Sammie156][Sammie156-Link], PR [#80][FastJ-Pull-80]) removed unnecessary casts in `Gradient.java` and `Point.java`
- (by [@Sammie156][Sammie156-Link], PR [#84][FastJ-Pull-84]) removed more unnecessary casts in `Point.java` and `MemoryAudioPlayer.java`
- (internal) Replaced `update/init/renderCurrentScene` methods with `safeUpdate/Init/Render` methods, respectively
- (internal) Reorganize unit tests to match main package structure
- (internal) Added unit tests to cover loading/playing audio with URLs
- (internal) Added unit tests to cover unloading multiple audio files at once


[Sammie156-Link]: https://github.com/Sammie156 
[SaadRehmanCS-Link]: https://github.com/SaadRehmanCS

[FastJ-Pull-71]: https://github.com/fastjengine/FastJ/pull/71
[FastJ-Pull-72]: https://github.com/fastjengine/FastJ/pull/72
[FastJ-Pull-80]: https://github.com/fastjengine/FastJ/pull/80
[FastJ-Pull-84]: https://github.com/fastjengine/FastJ/pull/84
[FastJ-Issue-96]: https://github.com/fastjengine/FastJ/issues/96
[FastJ-Issue-99]: https://github.com/fastjengine/FastJ/issues/99
