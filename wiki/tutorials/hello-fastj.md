---
sidebar_position: 1
keywords:
    - fastj hello world
    - fastj game window
    - fastj tutorial
    - how to use fastj
    - tutorial for fastj
    - how to fastj
    - fastj how to
    - fastj in 5 minutes
    - how do I use fastj
    - fastj guide
    - fastj how to make a window
    - fastj how to make a game
description: Say "Hi 👋" to FastJ by creating your first game window.
---


# Hello, FastJ!
Creating your first window in FastJ is relatively simple -- with the [FastJ Quick Start][FastJ-In-Minutes-Link] tutorial, you'll be able to create a window in FastJ. However, this just tells you _what_ to do and not how it works. That's why you're here now -- to learn how.

> Welcome, travelers. it seems you've wandered far enough off the beaten path to find this game engine. For that, I thank you for coming and I commend your efforts in finding us. My name is [@lucasstarsz](https://github.com/lucasstarsz), and I'll be your guide through these examples. It's a pleasure to meet you!


## Base Program Infrastructure
Introductions aside, FastJ's very simple to start off with. You'll need a few things in order to create a simple window:
- A program entrypoint -- a `main` method defining what our program does when it is run.
- A class which extends `tech.fastj.systems.control.SimpleManager`
- A few lines of code initializing the game engine, and running it.

For the sake of simplicity, we're going to have our program entrypoint inside the class extending `SimpleManager` -- this allows us to work in a single file. We'll name our class `Main`, and have it `extend` `SimpleManager`.

This will need a few imports as well:
- `tech.fastj.systems.control.SimpleManager` -- The name of the class our `Main` class will be extending
- `tech.fastj.graphics.display.Display` -- The name of the class provided as a variable in the `init` and `update` methods.

```java title="Simple Window Program Infrastructure"
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
    }
}
```

For some information on what those mentioned classes are, please read the information bubbles below.

:::info What's a SimpleManager?
A `SimpleManager` is a class that FastJ exposes to the user -- that's you -- so that the user can define logic for their game in the way that FastJ accepts.

Think of it as the top-level management of your game. The game's base logic can be controlled from the `SimpleManager`'s methods -- you immediately are given control over the initialization process of your game, and the updating process of your game. Since FastJ requires a few specific things in order to render to the screen, the `SimpleManager` class handles telling the `Display` to render internally -- you don't have to control that yourself.

By extending the `SimpleManager` class, you get simple access to creating a FastJ-based program in the way FastJ expects you to. You get to create and control how your game works, its initialization and update sequences, and let FastJ handle the rest.

:::

:::info What about a Display?
A `Display` is a class that contains all the bits needed to render game content, and display it in a window to the user. Furthermore, it provides simple controls over global rendering settings, giving you the ability to enable/disable options such as anti-aliasing.

It also controls what and _how_ things are rendered, which is also something you can control with relative ease. Further down the line, we'll cover this topic. (You can view that topic [here][].) For now though, I recommend sticking with this topic.

:::

:::warning Wait Until I Tell you to Run the Program!
I'm sure _some_ of you saw that code above, pasted it into a project, and excitedly pressed the "run" button in your IDE expecting it to work. If you did things right, it should do _nothing_. That's right -- nothing!

While you've created a class that FastJ will use to run your game, as well as an entrypoint for your program, you haven't yet told the game engine to run your game! Keep reading onwards. Try to keep from running the program until I _tell_ you to run it!

:::


## Engine Initialization
Look at you -- already two-thirds of the way through the beginning tutorial code! Not much longer to go, now.

> `FastJEngine.init` initializes the game engine with a name (String) and a logic manager -- in this case, a `SimpleManager`. The name is fairly self-explanatory, and the logic manager is the class used to handle all of the things you'd expect a game application to have:
> - Loading the Game Logic (handled in the "init" method) 
> - Receiving/Processing Input
> - Updating the Game (handled in the "update" method)
> - Rendering the Game
> - Resetting the Game State

That's right -- since that class you (hopefully) made is extending `SimpleManager`, you get access to all the features and capabilities mentioned above, and more! (Over the course of these examples, you'll find out just what "more" entails. Read on -- you're almost there!)

With that said, the method we need to call to initialize FastJ is `FastJEngine.init`. This method takes a `String` representing a name for the game window, and a game logic manager (otherwise known as `LogicManager`) which will be the manager FastJ uses when running the engine.

You're free to name the window whatever you like. For the sake of this tutorial, I'll be naming it `"Hello, FastJ!"`. As for the game logic manager instance, pass in a `new` instance of your game manager.

With the things I specified above, you'll need another import (remember, this goes right with all your other imports!):
- `tech.fastj.engine.FastJEngine` -- the class housing FastJ's main game loop -- this contains the logic for how FastJ is able to run games.

```java title="Base Infrastructure, with Engine Initialization" {17}
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

    /* The game's main entrypoint */
    public static void main(String[] args) {
        FastJEngine.init("Hello, FastJ!", new Main());
    }
}
```


## Running FastJEngine
This is the easiest section of the tutorial by far.

All you need to do is run the engine with the following method call: `FastJEngine.run();`. This method call takes the content you initialized the game engine with from before, and uses it to run the game engine and your game.

```java title="The Entire ''Hello, World!'' Program!" {18}
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

    /* The game's main entrypoint */
    public static void main(String[] args) {
        FastJEngine.init("Hello, FastJ!", new Main());
        FastJEngine.run();
    }
}
```

_By running the code_, you should see an empty window pop up. If so, congratulations! You've made your first FastJ window! Pat yourself on the back for a job well done.

![image](https://user-images.githubusercontent.com/64715411/128088219-7728918a-8e77-4c39-b38a-d61924010b2d.png)


## See the Example Source Code
[Source code -- Hello, FastJ!][HelloFastJ-Example-Link]


## What's Next?
Next up, we'll be covering engine configuration! [Join the FastJ Discord][Discord-Link] to get updates when the next tutorial article(s) will be coming out!

:::tip These tutorials not doing it for you?
If you're confident in your skills, feel free to roam the [code examples][Examples-Link] section of the FastJ repository. As I have time, more and more example articles will be added to the website. Before then, the examples will always be written out and published in the code repository.

Otherwise, keep reading! These tutorials will do their best to cover all the things you'll need to understand the code FastJ provides.

:::



[FastJ-In-Minutes-Link]: /wiki/fastj-basics/fastj-quick-start "Hit the ground running by creating your first FastJ program!"
[HelloFastJ-Example-Link]: https://example.fastj.dev/hellofastj/Main.java "Hello, FastJ! | FastJ Tutorials"
[Engine-Configuration-Tutorial-Link]: /wiki/tutorials/fastj-configuration "Configure FastJEngine's FPS, UPS, initial window size, and more!"
[Discord-Link]: https://discord.gg/FTWsYVSDv6 "Join the FastJ Discord!"
[Examples-Link]: https://example.fastj.dev/ "FastJ Examples"
