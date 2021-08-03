---
sidebar_position: 2
keywords:
    - fastj configuration
    - fastj change fps
    - fastj change fps tutorial
    - how to change fps fastj
    - how to change ups fastj
    - how to change tps fastj
    - how to change window size fastj
    - how to change game window size fastj
    - how to use directx fastj
    - how to use opengl fastj
    - how to use x11 fastj
    - how to use software rendering fastj
    - fastj guide
description: Learn how to configure FastJ's target FPS, UPS, window size, and hardware acceleration.
# image: /static/img/fastj/fastj_icon.png
---


# Configuring FastJ
> Hopefully you've at least read through and understood the [Hello, FastJ!][Hello-FastJ-Tutorial-Link] tutorial.

When using the other examples or FastJ in general, you may have noticed that the game engine defaults to a 1280720 window. This is part of FastJEngine's default configuration -- the constant values defined in `FastJEngine`'s source code that represent the default values that FastJEngine uses to configure the engine on initialization.

The default configuration contains all of the following:
- **Window Resolution**
- **Game Resolution**
- **Hardware Acceleration**
- **Target FPS** -- the target frame rate of the game.
- **Target UPS** (some engines and frameworks call this TPS) -- the target update count per second for the game.


## Configuring Resolution
With that said, let's get started with the first two types of configuration:
1. `FastJEngine.configureWindowResolution` -- the resolution of the game window that the player sees.
2. `FastJEngine.configureViewerResolution` -- the resolution of the game itself, separate from the window resolution.
    - Changing the window resolution means that the game resolution will stretch or compress itself in order to fit. (This concept is called stretch-to-fit!)

:::info Both of these use Point values... what are those?
You may have noticed that both `configureViewerResolution` and `configureInternalResolution` require use of a `Point`. So... what _is_ a `Point` in FastJ?

Well, think of a FastJ `Point` as a vector -- one that only allows integer values. A `Point` is similar to a `Pointf`, other than that. Since it can represent corrdinates on a screen _and_ be used for screen sizes, I figure I may as well use a more general term.

> But what's a `Pointf`?

It's the same concept as a `Point` -- a vector that has a general name. The main difference is that `Pointf` allows floating-point values, specifically `float`. `Point` has its uses of course, but because so many things in FastJ work with floats, you'll see them around a lot more.

:::

We can configure the window resolution and internal (game) resolution using `FastJEngine.configureWindowResolution` and `FastJEngine.configureViewerResolution`, respectively. With the information provided above, they should be pretty straightforward. Just, remember to apply your configurations after initializing the game engine please. (And of course, configure the engine before running the engine!)

In order to use `Point`, you'll need a new import:
- `tech.fastj.math.Point` -- the import for the `Point` class

In context, here's how it would look:

```java title="Window Resolution Configuration" {22-23}
import tech.fastj.engine.FastJEngine;
import tech.fastj.math.Point;
import tech.fastj.graphics.display.Display;
import tech.fastj.systems.control.SimpleManager;

public class Main extends SimpleManager {

    @Override
    public void init(Display display) {
    }

    @Override
    public void update(Display display) {
    }

    /* The game's main entrypoint */
    public static void main(String[] args) {
        /* Initialize the game engine */
        FastJEngine.init("Hello, FastJ!", new Main());

        /* Configure the game engine */
        FastJEngine.configureWindowResolution(new Point(640, 480));
        FastJEngine.configureInternalResolution(new Point(1600, 900));

        /* Run the game engine! */
        FastJEngine.run();
    }
}
```

Those two lines set the initial window resolution to 640\*480, and the internal (game) resolution to 1600\*900.


## Configuring Hardware Acceleration
Next up, the hardware acceleration. In case you don't know, hardware acceleration is, in this case, the use of the GPU to handle rndering and other tasks far quicker than a CPU usually can.

FastJ makes use of java2d's multiple graphics backends (the code in the background that powers java2d), including:
- `HWAccel.Direct3D` -- Option defining the grpahics API for Windows devices.
- `HWAccel.X11` -- Option defining the graphics API for Linux devices.
- `HWAccel.OpenGL` -- Option defining a cross-platform graphics API that most computers support.
- `HWAccel.CpuRender` -- Option defining the CPU-bsed rendering option which every platform supports.
    - Unlike the others, software rendering runs exclusively on the CPU. Some GPU is still used to output the actual window, but the drawing process is done entirely on the CPU.
- `HWAccel.Default` -- Option defining the default graphics API used by the user's OS.

:::info What about macOS users?
Currently, Apple's graphics pipeline (named Metal) is not supported by java2d -- this also means FastJ is not able to make use of Metal, restricting macOS users to openGL and software rendering for the time being.

Java 17 will be the first java version where the metal API will be provided as a graphics backend via java2d -- this means that when java 17 comes out, it will become an option for FastJ to use.

:::

The above options make up the `HWAccel` class, which is exactly the class we'll use to change the hardware acceleration FastJ uses. In this example, we'll change the hardware acceleration to `HWAccel.OpenGL` -- this means our FastJ program will use OpenGL as its hardware-accelerated graphics API. In order to do this, we'll be using the method `FastJEngine.configureHardwareAcceleration` -- this takes a `HWAccel` object, which we're able to provide.

Before that, you'll need a new import:
- `tech.fastj.engine.HWAccel` -- the import for the `HWAccel` class.

```java title="Hardware Acceleration Configuration" {22}
import tech.fastj.engine.FastJEngine;
import tech.fastj.engine.HWAccel;
import tech.fastj.graphics.display.Display;
import tech.fastj.systems.control.SimpleManager;

public class Main extends SimpleManager {

    @Override
    public void init(Display display) {
    }

    @Override
    public void update(Display display) {
    }

    /* The game's main entrypoint */
    public static void main(String[] args) {
        /* Initialize the game engine */
        FastJEngine.init("Hello, FastJ!", new Main());

        /* Configure the game engine */
        FastJEngine.configureHardwareAcceleration(HWAccel.OpenGL);

        /* Run the game engine! */
        FastJEngine.run();
    }
}
```

:::info Wait, what happened to the window configuration?
In short, I removed the irrelevant code from this example. In the long run it makes the examples longer than they need to be, while also making it harder to grasp exactly _what_ is needed in that specific example.

It may seem silly now, but trust me, it becomes much easier to understand over time.

:::


[Hello-FastJ-Tutorial-Link]: /wiki/tutorials/hello-fastj "Hello, FastJ! | FastJ Tutorials"
