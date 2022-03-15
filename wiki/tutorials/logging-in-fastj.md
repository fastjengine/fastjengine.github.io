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

So, what even is logging? Well, when your application is running, many things are happening in your application. Even for a simple app, many different things are going on
in the backend. It would be quite helpful to see exactly what's happening right? For example, let's say your game crashes because of a variable having a incorrect value.
One option, would be to spend a minute to walk through the code and figure out what the variable value is. The easier way? Print out the variable and look at the value.
Logging is basically exactly that, but better. It lets you print detailed messages about everything happening in your game, so you can debug with ease.

FastJ has an inbuilt system for handling logging, which is what we will be covering in this article.

## Standard Logging Messages
This is the most basic type of log. Nothing too complicated, just simple logging to the console. Usually just used for sending messages
which just give debugging data. The way to do it is as follows:

```java
import tech.fastj.engine.FastJEngine;

public class Main {
    public static void main(String[] args) {
        FastJEngine.log("Hello! This is an informational logging statement.");
    }
}
```

## Warning Logging 
Warnings are a useful tool to warn you of possible errors in your code before they happen. You can put warning logs in places where you think
your code might have a problem, so that it is easier for you to find the cause of the problem faster. You can use them like so:
```java
import tech.fastj.engine.FastJEngine;

public class Main {
    public static void main(String[] args) {
        FastJEngine.warning("Be careful now! This is a warning.");
    }
}
```

## Error Logging
Error logging is a powerful tool in FastJ which will allow you, the user, to be able to see when code isnt executing as expected or when conditions aren't being satisfied for functionality to be performed correctly. This is how you use error logs:
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
Basically, logging is a very powerful tool you can use to make debugging process much simpler so that you can spend more time working on your game than fixing errors, and using FastJ's in-built tools, it becomes very easy.

[FastJ-In-Minutes-Link]: /wiki/fastj-basics/fastj-quick-start "Hit the ground running by creating your first FastJ program!"
[HelloFastJ-Example-Link]: https://example.fastj.dev/hellofastj/Main.java "Hello, FastJ! | FastJ Tutorials"
[Engine-Configuration-Tutorial-Link]: /wiki/tutorials/fastj-configuration "Configure FastJEngine's FPS, UPS, initial window size, and more!"
[Discord-Link]: https://discord.gg/FTWsYVSDv6 "Join the FastJ Discord!"
[Examples-Link]: https://example.fastj.dev/ "FastJ Examples"


