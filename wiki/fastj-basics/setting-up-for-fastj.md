---
sidebar_position: 1
keywords:
    - fastj tutorial
    - how to use fastj
    - tutorial for fastj
    - how to fastj
    - fastj how to
    - fastj in 5 minutes
    - how do I use fastj
    - fastj guide
description: Let's get together the tools you need in order to use the FastJ Game Engine.
image: '/static/img/fastj/fastj_icon.png'
---

# Setting up for FastJ
To follow along with the rest of this guide, you'll need the following:

- [Java 11 or Later](#java-11-or-later)
- [An IDE/Code Editor](#idecode-editor)
- [A Build Tool, preferably Gradle](#build-tool)

If you have all of these already, [skip ahead to the next page][Next-Tutorial].


## Java 11 or Later
FastJ is written in Java, and this guide will have you follow along by writing code in Java as well. Furthermore, it was built with Java 11 but it supports Java up to the latest version and will continue to support the latest versions. As such, if you don't have a preferred version to use then I recommend you download [the latest version of Java][Java-Link], from AdoptOpenJDK. 

Check it out [here][Java-Link].

:::tip Alternatives to AdoptOpenJDK
Other distributions such as OpenJDK, Zulu OpenJDK, and the Amazon Corretto JDK are also great choices -- I just happen to prefer AdoptOpenJDK's distribution.

:::

## IDE/Code Editor
Using an IDE (Integrated Development Environment -- a tool specialized towards developing and distributing code), you'll be able to speed up your development process through the many tools it provides. 

However, IDEs are generally very taxing on your computer. To counteract this, I'll leave you with a list of tools to choose from, based on how strong your computer is:


### IntellliJ IDEA (most taxing, recommended for people with strong computers)
In this case, I highly recommend the community version of [IntelliJ IDEA][IntelliJ-Link] -- it's an incredibly powerful IDE with some of the best tooling in the world. And the Community version is free!

Check it out [here][IntelliJ-Link].

:::tip For Students
If you're a student, you can get IntelliJ professional for free as well, though the [Github Developer Student Pack][Student-Pack-Link]

:::


### Eclipse (taxing, recommended for people with mediocre computers)
[Eclipse][Eclipse-Link] is another great option -- while it does not provide all the tooling that IntelliJ does, it runs faster and is still an overall great experience. It was my first experience with a real IDE, and I still use its amazing keyboard shortcuts and code theme.

Check it out [here][Eclipse-Link].


### VSCode (not an IDE, but still the perfect option for people with slower computers)
If IntelliJ and Eclipse still prove to run too slow for you, then this code editor (VSCode is not an IDE) is the next best thing. It provides highly-configurable plugins that help to enhance your experience with coding to get fairly close to that of an IDE -- and it still opens fairly quickly, much quicker than that of the IDEs mentioned above.

Check it out [here][VSCode-Link].


## Build Tool
You may not have seen this term before. A **build tool** is ~~a tool to help you build~~ a tool designed to simplify the process of compiling, running, testing, deploying, and distributing your code -- and much more!

Now, onto choosing a build tool... I highly recommend [Gradle][Gradle-Link]. Gradle is one of two mainstream build tools designed for Java, and it's the build tool I will be writing these tutorials for. The other main option is to use [Maven][Maven-Link], which I talk about a bit more [down below](#for-maven-users). 

Download Gradle [here][Gradle-Link].

### What about Maven?
For users of [Maven][Maven-Link], don't hesitate to give Gradle a shot anyways -- you might like what you see. Alternatively, you can just follow along with Maven -- the differences between the two for the scope of these tutorials are fairly insignificant, other than syntax.

:::note For Experienced Developers: Why to use a Build Tool
If you're not new to Java, you may be familiar with the tedious process of crafting your own solutions to compiling and running your code. You may also be familiar with the idea that you can't sensibly develop your code outside of a certain IDE because that IDE manages the code for you. 

These are part of the main reasons build tools were created. You no longer have to depend on an IDE or create often error-prone and inefficient tools to do the job, because the build tool can handle that for you, and so much more!

:::

Now that we've covered what you need to use FastJ, we'll get on to creating a FastJ project and our first game window!


[Java-Link]: https://adoptopenjdk.net/?variant=openjdk16&jvmVariant=hotspot "Install Java from AdoptOpenJDK"

[IntelliJ-Link]: https://www.jetbrains.com/idea/ "IntelliJ IDEA IDE"
[Eclipse-Link]: https://www.eclipse.org/downloads/ "Eclipse IDE"
[VSCode-Link]: https://code.visualstudio.com/ "VSCode"
[Gradle-Link]: https://gradle.org/install/ "Install Gradle"
[Maven-Link]: https://maven.apache.org/download.cgi "Install Maven, if you're into that"

[Next-Tutorial]: creating-a-fastj-project "Creating a FastJ Project"
