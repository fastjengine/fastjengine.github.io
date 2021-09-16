---
sidebar_position: 3

keywords:
  - fastj tutorial
  - how to use fastj
  - tutorial for fastj
  - how to fastj
  - fastj how to
  - fastj in 5 minutes
  - how do I use fastj
  - fastj guide
  - fastj how to use logging
  - fastj how to log messages
  - log messages in fastj
  - fastj how to make a game
description: Debug your application using the logging capabilities of FastJ!
---
  
# Logging in FastJ

After the last tutorial, you should have a basic FastJ project which runs successfully. 
If you don't, be sure to check the last tutorial which can be found [here][FastJ-In-Minutes-Link] and follow through or at least read it through thoroughly.

So, what even is logging? Well, when your application is running, many things are happening in your application. Even for a simple app, many things are going on
in the backend. It would be quite helpful to see exactly what's happening right? For example, let's say your game crashes because of some variable having a incorrect value.
One option, would be to spend a minute to walk through the code and figure out what the variable value is. The easier way? Print out the variable and look at the value.
Logging is basically exactly that, but better. It lets you print detailed messages about everything happening in your game, so you can debug with ease.

FastJ has an inbuilt system for handling logging, which is the main topic of this article.

## Standard logging messages
This is the most basic type of log. Nothing special, just standard info being logged to the console. Usually just used for sending messages
which just give debugging data. The way to do it is as follows:

```java
import tech.fastj.engine.FastJEngine;

public class Main {
    public static void main(String[] args) {
        FastJEngine.log("Hello! This is an informational logging statement.");
    }
}
```

Pretty simple, not much to it.

## Warning logging 
This is used when you want to send warn messages. Basically, something has a chance of going wrong, but it's not an
actual problem yet. You can send warn messages like:
```java
import tech.fastj.engine.FastJEngine;

public class Main {
    public static void main(String[] args) {
        FastJEngine.warning("Be careful now! This is a warning.");
    }
}
```

## Error logging
This one is pretty self-explanatory. Your code has broken, and your logging exactly how it broke.
The error function is slightly different from the other functions we've seen so far however, as it requires a `Exception` parameter, which it uses to print out the problem in the code, then throw that error.
Here's an example where we're creating our own exception and using it in the function:
```java
import tech.fastj.engine.FastJEngine;

public class Main {
    public static void main(String[] args) {
        IllegalStateException exampleException = new IllegalStateException("This is an example exception.");
        FastJEngine.error("Oh dear, looks like something went wrong. This is an error message.", exampleException);
    }
}
```


## Conclusion
Basically, logging is a powerful tool you can use to make your life debugging your games much, much easier, and FastJ provides a very simple API for logging.

[FastJ-In-Minutes-Link]: /wiki/fastj-basics/fastj-quick-start "Hit the ground running by creating your first FastJ program!"
[HelloFastJ-Example-Link]: https://example.fastj.dev/hellofastj/Main.java "Hello, FastJ! | FastJ Tutorials"
[Engine-Configuration-Tutorial-Link]: /wiki/tutorials/fastj-configuration "Configure FastJEngine's FPS, UPS, initial window size, and more!"
[Discord-Link]: https://discord.gg/FTWsYVSDv6 "Join the FastJ Discord!"
[Examples-Link]: https://example.fastj.dev/ "FastJ Examples"


