---
title: FastJ 1.5.0 Release
author: Andrew Dey
author_title: Creator of the FastJ Game Engine
author_url: https://github.com/lucasstarsz
author_image_url: https://github.com/lucasstarsz.png
keywords: ["fastj", "java game engine", "fastj game engine", "fastj 1.5.0", "fastj game engine 1.5.0", "java game engine 2021", "can java be used for making games", "free java game engine", "free game engine", "game engine 2021", "kotlin game engine", "is kotlin good for making games", "kotlin game engine 2021", "groovy game engine", "groovy game engine 2021", "is groovy good for making games", "2d game engine", "java2d game engine", "java 2d game engine", "kotlin 2d game engine", "fastj 2d game engine", "groovy 2d game engine", "how to make games", "how to make game tutorial", "game making tutorial"]
tags: [fastj, release, fastj-1.5.0]
description: "FastJ 1.5.0 is finally here! With over 300 commits since version 1.4.0, the FastJ game engine has grown in maturity and gained new skills.<br/>This version of FastJ includes a revamped Drawable system with gradients and outlines support for polygons, more logic manager options, better keyboard input support, the addition of an audio engine, and much much more! Read on to find out what's new."
image: /img/fastj/fastj_icon_wired.png
hide_table_of_contents: false
draft: true
---

FastJ 1.5.0 is finally here! With over 300 commits since version [1.4.0][FastJ-Version-1.4.0-Release-Link], the FastJ game engine has grown in maturity and gained new skills.<br/>
This version of FastJ includes a revamped Drawable system with gradients and outlines support for polygons, more logic manager options, better keyboard input support, the addition of an audio engine, and much much more! Read on to find out what's new.


[FastJ-Version-1.4.0-Release-Link]: /news/2021/05/20/fastj-1-4-0-release "FastJ 1.4.0 Release"

<!--truncate-->


## Discord Server
I'm proud to announce that the FastJ Discord server is now open -- [join here][Discord-Link]!


## New Example Programs
With the popularity and feature list of FastJ growing, 13 new example programs have been added! They cover a range of topics like getting started, engine configuration, keyboard and mouse inpuut, text, polygons, models, scenes, and more.

With the addition of these examples, they are now being displayed in two places: the [][]


### Examples in the Website Wiki
Alongside the addition of these examples in the FastJ Wiki, 


### Examples Source Code
- [Hello, FastJ](https://example.fastj.dev/hellofastj/Main.java) -- Creating a Window in FastJ
- [FastJEngine Logging](https://example.fastj.dev/logging/Main.java) -- Logging information and errors in FastJ
- [FastJEngine Configuration](https://example.fastj.dev/engineconfig/Main.java) -- Configuring FastJ's FPS, UPS, and viewer/game window size
- [Polygon2D](https://example.fastj.dev/polygon2d/Main.java) -- Creating and using `Polygon2D` objects (polygons) in FastJ
- [Text2D](https://example.fastj.dev/text2d/Main.java) -- Creating and using `Text2D` objects (text) in FastJ
- [Model2D](https://example.fastj.dev/model2d/Main.java) -- Creating and using `Model2D` objects (models) in FastJ
- [Model File Read/Write](https://example.fastj.dev/modelreadwrite/Main.java) -- Reading and writing `Model2D` objects from/to files in FastJ
- [Display Rendering Settings](https://example.fastj.dev/rendersettings/Main.java) -- changing a `Display`'s global rendering settings
- [Behaviors](https://example.fastj.dev/behaviors/Main.java) -- Modifying `GameObject`s with behaviors.
- [Keyboard Input](https://example.fastj.dev/keyboard/Main.java) -- Getting keyboard input in FastJ
- [Mouse Input](https://example.fastj.dev/mouse/Main.java) -- getting mouse input in FastJ
- [Scenes](https://example.fastj.dev/helloscenes/Main.java) -- Scenes in FastJ
- [Audio](https://example.fastj.dev/audio/Main.java) -- Audio in FastJ

Furthermore, the following examples have been removed:
- "Hello World!" has been removed, in favor of "Hello, FastJ!"


## Code Improvements
The full list of new things in FastJ is so long, I couldn't possibly put it all here! Instead, I'll give you a run-down of all the new features you'll see in this version of FastJ.


### Audio Engine
Between 1.4.0 and 1.5.0, FastJ sprouted an audio engine! Thanks to the availability of Java's standard audio library, no external dependencies were needed to create this engine.<br/>
Its API is straightforward for simpler cases...

```java title="Playing Audio"
AudioManager.playSound(Path.of("path/to/audio"));
```

...but can handle more complex needs as well!

```java title="Audio Controls and Events"
StreamedAudio audio = AudioManager.loadStreamedAudio(Path.of("path/to/audio"));

FloatControl panControl = audio.panControl();
panControl.setValue(pancontrol.getMaximum());

audio.getAudioEventListener().setOnPlayAction(() -> FastJEngine.log("Now Playing -- this sound!"));
audio.play();
```

The new audio engine supports the following:
- Loading audio into memory
- Streaming audio from a file
- Play/Pause/Resume/Stop options
- Configurable Audio Events (audio stream open/close, audio play/pause/resume/stop)
- **(memory-loaded audio only)** Looping and Playback Position options
- **(streamed audio only)** Gain/Pan/Balance/Mute controls

For the best information, check out [the audio usage example][Audio-Example-Link].


### Better Camera Transformations
With the transformation improvements made for all `Drawables` (more on that [here](#Transforms-For-All)), the `Camera` class has also been upgraded to be able to use these transformations:

```java title="Camera Transformations"
// This example assumes "this" to be a SceneManager, SimpleManager, or other LogicManager
// that contains a "getCamera" method.
Camera camera = this.getCamera();
camera.translate(new Pointf(50f));
camera.rotate(90f);
camera.scale(2.5f);
```

Here, the camera has been translated `(50, 50)`, rotated 90 degrees, and zoomed in to 250%.


### Display Render Settings Improvements
The `Display` class' old render setting class was _fine_, but not very intuitive or informative for newer users -- combing through the AWT documentation is slightly daunting just from how much content there is.

To combat this, a `RenderSettings` class has been created. It contains all the different available rendering options, while also compiling the AWT documentation into smaller, more readable sentences.
```java title="RenderSettings usage"
display.modifyRenderSettings(RenderSettings.AntiAliasing.Enable);
```


### DrawUtil -- Paint Comparing
`java.awt.Paint` classes can now be compared using `DrawUtil.paintEquals`.


### LogicManager Revamp
The `LogicManager` class has been repurposed into an interface containing the basic needs for all logic managers. Two new managers implement this class:
- `SceneManager` -- the old `LogicManager` class.
- `SimpleManager` -- the manager for creating programs without the use of scenes.


#### Old LogicManager becomes SceneManager
What was once named `LogicManager` is now called `SceneManager`. It functions the same as before -- this was changed to allow the `LogicManager` name to represent what all game management classes would be based on.


#### SimpleManager -- the Return of One-File Games
In the early days of FastJ, long before it became a reasonable game engine, there was only the option to create games using a very simple logic manager -- no scenes, just general control from a single file. Before long, this was replaced with the scene system and soon forgotten... but not for long.

Now, the manager returns with a new name and one thing in mind -- single-"scene" programs. With the `SimpleManager` class, the starting code needed for a window in FastJ was reduced from this:

```java title="Old Hello World"
import io.github.lucasstarsz.fastj.engine.FastJEngine;
import io.github.lucasstarsz.fastj.graphics.Display;

import io.github.lucasstarsz.fastj.systems.control.LogicManager;

public class Main extends LogicManager {

    @Override
    public void setup(Display display) {
        GameScene scene = new GameScene();
        addScene(scene);
        setCurrentScene(scene);
        loadCurrentScene();
    }

    public static void main(String[] args) {
        FastJEngine.init("Hello, FastJ!", new Main());
        FastJEngine.run();
    }
}


import io.github.lucasstarsz.fastj.graphics.Display;

import io.github.lucasstarsz.fastj.systems.control.Scene;

public class GameScene extends Scene {

    public ButtonScene(String sceneName) {
        super(sceneName);
    }

    @Override
    public void load(Display display) {
    }

    @Override
    public void unload(Display display) {
    }

    @Override
    public void update(Display display) {
    }
}
```

to this:

```java title="New Hello World"
import tech.fastj.engine.FastJEngine;
import tech.fastj.graphics.display.Display;

import tech.fastj.systems.control.SimpleManager;

public class Main extends SimpleManager {

    @Override
    public void init(Display display) {
    }

    @Override
    public void update(Display display) {
    }

    public static void main(String[] args) {
        FastJEngine.init("Hello, FastJ!", new Main());
        FastJEngine.run();
    }
}
```


### Math Improvements
Somewhat similar to the version 1.4.0 release, the math section of FastJ has received several new functionalities:
- **Inverse Lerp** -- Thanks once again to [@YeffyCodeGit](https://github.com/YeffyCodeGit), FastJ's `Maths` class now contains an `inverseLerp` function for all your interpolation needs.
- **Normalization** -- number normalization and denormalization are now both available in the `Maths` class, as `normalize` and `denormalize` respectively.
- **Range Bounding** -- Having use in [color linear interpolation](#Color-Lerping), range bounding methods have been added: `withinRange` and `withinIntegerRange`.
- **Pointf Lerping** -- As inverse lerp was added to the `Maths` class, it also became apparent that the Pointf class was also missing linear interpolation! It now contains both `lerp` and `inverseLerp` static methods.
- **Color Lerping** -- From inside the `DrawUtil` class, colors were given static `lerp` and `inverseLerp` methods as well.


### Revamped Drawable System
Drawables were one of the main focus areas for this update. As such, several useful improvements, upgrades, and standardizations have been made!


#### Drawable Builders
First off, all `Drawable`-based classes now have a corresponding builder that aids in creation of the class. This allows for much more configuration than the addition of more and more constructor overloads, as well as a generally simpler API for both the developer(s) and users.

_Assume `Pointf[] boxCoordinates = DrawUtil.createBox(10f, 10f, 50f);` has been declared in each example._

For `Polygon2D`, an array of points is all you need:

```java title="Polygon2D One-Line Builder"
Polygon2D box = Polygon2D.fromPoints(boxCoordinates);
```

but if you want to configure more options, the extended builder can help you out!

```java title="Poloygon2D Extended Builder"
BasicStroke outlineStroke = new BasicStroke(5.0f, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND);

Pointf translation = new Pointf(20f, 10f);
float rotation = 30f;
Pointf scale = new Pointf(0.5f, 0.5f);

Polygon2D box = Polygon2D.create(boxCoordinates, RenderStyle.FillAndOutline)
        .withFill(Color.blue)
        .withOutline(outlineStroke, Color.black)
        .withTransform(translation, rotation, scale)
        .build();
```

This creates a box with a rendering style of both `fill` and `outline` variants, meaning it has both an outline color/stroke and a fill color.
- Its fill color is `blue`.
- The outline color is `black`.
- The outline stroke (`outlineStroke`) is 5 pixels thick and had rounded edges.
- It also contains a translation of `(20, 10)`, a 30 degree rotation, and has its size scaled down to 50%.

Beyond that, the provided setter methods can still be used post-creation to modify the main values of the `Polygon2D`.

Both `Text2D` and `Model2D` have received builders as well. The attributes of each of the above three are explained in the following example programs:
- [Polygon2D Builder Example][Polygon2D-Example-Link]
- [Text2D Builder Example][Text2D-Example-Link]
- [Model2D Builder Example][Model2D-Example-Link]


#### Transforms for All!
The transformation system has been massively updated, as briefly referenced [here](#Better-Camera-Transformations).

With this massive update, all `Drawable`s can now be translated, rotated, and scaled as much as needed!

Here's an example using the `Text2D` class, which was previously unable to rotate or scale.

```java title="Drawable Transformations"
Text2D text = Text2D.fromText("Text2D has transformations!");
text.translate(new Pointf(50f));
text.rotate(90f);
text.scale(2.5f);
```

Here, the text has been translated `(50, 50)`, rotated 90 degrees, and scaled up to 250% size.

These options are available for **all** `Drawable`-based classes, even `UIElement`s! Feel free to check it out.


#### Gradients
All `Drawable` classes can now also have their fill colors as gradients! (no outline support just yet). There are two types of gradients available -- linear gradients, and radial gradients. Both will be explained here.

These builders both have a few limitations that will be expanded in later versions:
- No support for repeating gradients

These builders also have some limitations that will likely **not** be expanded upon in later versions, due to performance issues:
- Gradients may not contain more than 8 colors.


##### Linear Gradients
Creating a linear gradient takes a few things:
- Starting and Ending points
    - These can either both be `Pointf`-based points, or `Boundary` values. Using boundary values requires the inclusion of a `Drawable` object to evaluate the boundaries for.
- Colors! There are lots of premade colors to choose from (`Color.cyan` and `Color.yellow`, to name a few) and you can create your own -- both are supported.

Here's two examples of linear gradients, one using `Pointf`s and one using a `Drawable` and specified boundaries.

```java title="Linear Gradients"
/* Linear Gradient using Pointfs */
Pointf startingPoint = Pointf.Origin.copy();
Pointf endingPoint = new Pointf(100, 100);
LinearGradientPaint linearGradient = Gradients.linearGradient(startingPoint, endingPoint)
        .withColors(Color.red, Color.green, Color.black)
        .withColor(Color.blue)
        .withColor(new Color(255, 255, 0, 100))
        .build();

/* Linear Gradient using Drawables */
LinearGradientPaint linearGradient = Gradients.linearGradient(box, Boundary.TopLeft, Boundary.BottomRight)
        .withColors(Color.red, Color.green, Color.black)
        .withColor(Color.blue)
        .withColor(new Color(255, 255, 0, 100))
        .build();
```


##### Radial Gradients
On the other hand, creating radial gradients takes a few things:
- A center and radius
    - this can either be a `Pointf`-defined centerpoint and `float` radius, or just a `Drawable` which will handle both.
- Colors! There are lots of premade colors to choose from (`Color.lightGray` and `Color.blue`, to name a few) and you can create your own -- both are supported.

Here's two examples of radial gradients, one using the center and radius, and the other using just the drawable.

```java title="Radial Gradients"
/* Radial Gradient using Center and Radius */
Pointf center = new Pointf(50f, 100f);
float radius = 25f;
RadialGradientPaint radialGradient = Gradients.radialGradient(center, radius)
        .withColors(Color.lightGray, Color.cyan, Color.darkGray)
        .withColor(Color.pink)
        .withColor(new Color(255, 255, 0, 100))
        .build();

/* Linear Gradient using Drawables */
RadialGradientPaint radialGradient = Gradients.radialGradient(box)
        .withColors(Color.lightGray, Color.cyan, Color.darkGray)
        .withColor(Color.pink)
        .withColor(new Color(255, 255, 0, 100))
        .build();
```


#### Polygon2D Render Styles
As briefly shown in the [`Drawable` builders section](#Drawable-Builders), the `Polygon2D` class has received an attribute called `RenderStyle`. This attribute allows you to control how and what of a specific `Polygon2D` should be rendered -- its outline, its fill, or _both_.

There are specific options for each possibility:
- `RenderStyle.Fill`
- `RenderStyle.Outline`
- `RenderStyle.FillAndOutline`

Keeping consistent with the older API, the default is `RenderStyle.Fill` -- polygons will just have their fill rendered. This can be changed using the builder, as well as through a setter method. Both are shown below.

```java title="Changing RenderStyle"
/* Changing RenderStyle through the builder */
Polygon2D box = Polygon2D.create(boxCoordinates, RenderStyle.Outline)
        .build();

/* Changing RenderStyle through setRenderStyle method */
box.setRenderStyle(RenderStyle.FillAndOutline);
```


[Discord-Link]: https://discord.gg/FTWsYVSDv6 "Join the FastJ Discord!"
[Audio-Example-Link]: https://example.fastj.dev/audio/Main.java "FastJ Audio Example"
[Polygon2D-Example-Link]: https://example.fastj.dev/polygon2d/Main.java "FastJ Polygon2D Example"
[Text2D-Example-Link]: https://example.fastj.dev/text2d/Main.java "FastJ Text2D Example"
[Model2D-Example-Link]: https://example.fastj.dev/model2d/Main.java "FastJ Model2D Example"
