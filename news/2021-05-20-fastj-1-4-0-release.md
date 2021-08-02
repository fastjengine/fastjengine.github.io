---
title: FastJ 1.4.0 Release
author: Andrew Dey
author_title: Creator of the FastJ Game Engine
author_url: https://github.com/lucasstarsz
author_image_url: https://github.com/lucasstarsz.png
keywords: ["fastj", "java game engine", "fastj game engine", "fastj 1.4.0", "fastj game engine 1.4.0", "java game engine 2021", "can java be used for making games", "free java game engine", "free game engine", "game engine 2021", "kotlin game engine", "is kotlin good for making games", "kotlin game engine 2021", "groovy game engine", "groovy game engine 2021", "is groovy good for making games", "2d game engine", "java2d game engine", "java 2d game engine", "kotlin 2d game engine", "fastj 2d game engine", "groovy 2d game engine", "how to make games", "how to make game tutorial", "game making tutorial"]
tags: [fastj, release, fastj-1.4.0]
description: "This isn't a very glamorous update, but it is an essential one. FastJ has been equipped with several useful mathematical methods in order to ease the amount of work that programmers would need to do to create simple games.<br/>...In other words, FastJ's pretty tough to use without these 😅 <br/>That being said, these updates constitute a satisfactory base that can be further built upon."
image: /img/fastj/fastj_icon_wired.png
hide_table_of_contents: false
draft: true
---

This isn't a very glamorous update, but it is an essential one. FastJ has been equipped with several useful mathematical methods in order to ease the amount of work that programmers would need to do to create simple games.

...In other words, FastJ's pretty tough to use without these 😅 

That being said, these updates constitute a satisfactory base that can be further built upon.

<!--truncate-->


### Sonarcloud Code Coverage
You may have noticed a shiny new badge on the README! FastJ now makes use of Sonarcloud for code coverage, code smells, and other various helpful code analyses.

### Code Style Consistency
I had some extra time while working on this game engine, so I meticulously worked to improve the documentation style and code style. With this update, the code for the library is (hopefully) much more consistent and readable.

## New Additions
### `Maths.java`
- Added `Maths#lerp` for basic linear interpolation (by @YeffyCodeGit)

### `Point.java`
- Added `java.awt.Dimension` conversion/equality checking
- Added integer/float `magnitude` methods
- Added `square magnitude`, `dot product`, `cross product`, `normalize` methods
- Added static/object-based, integer/floating-point `angle`, `signed angle`, and `rotate` methods

### `Pointf.java`
- Added `magnitude` methods
- Added `square magnitude`, `dot product`, `cross product` methods
- Added static/object-based `normalize`, `angle`, `signed angle`, and `rotate` methods

### `Display.java`
- Moved all `GraphicsEnvironment`-related static methods to `DisplayUtil.java`

### `FastJEngine.java`
- Added `FastJEngine#runAfterUpdate(action)` method to run actions after the next completed `LogicManager#update`.

## Bug Fixes
- Fixed issue where some `Executors` were not stopped upon exiting the engine, preventing applications from being able to close.

## Internal Changes
### `Display.java`
- Broke fullscreen methods into reusable chunks for better readability/use

### `InputManager.java`
- Replaced use of specific methods for input (keyboard, mouse) events with general methods and mappings of specific actions.
    - See details in #14 
- Lowered floating-point accuracy requirement (`Maths#FloatPrecision`) to 4 digits

## Breaking Changes
- Changed all methods using UI elements referring to `GUIObject` to use `UIElement`.
- Changed all `enum`s to use PascalCase instead of CONSTANT_CASE.

## Other
- Removed public modifiers on unit tests/unit test classes
- Added a second (WIP) example program -- a simple bullet hell game
