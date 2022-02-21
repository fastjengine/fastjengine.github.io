---
sidebar_position: 1
keywords:
    - fastj tutorial
    - how to use fastj
    - tutorial for fastj
    - how to fastj
    - fastj how to
    - fastj in 5 minutes
    - fastj in 10 minutes
    - fastj in 15 minutes
    - fastj quick start
    - learn fastj
    - fast fastj
    - how do I use fastj
    - how to learn fastj
    - fastj guide
description: Let's set up FastJ and get a "Hello, FastJ!" project set up in 15 minutes.
---

# FastJ Quick Start
Ready to learn FastJ? Great! We won't hold you back any longer -- these are the steps you need to follow to create your first FastJ window and say "Hello, FastJ!"


## Download the Tools
When it comes to learning how to use FastJ, it's important to have the tools necessary to do so! You'll need to have at least a JDK (Java Development Kit) -- everything else is optional, but highly recommended.


### Java JDK (Required)
FastJ is written in Java and needs a Java JDK in order to run. This means you'll need to have a Java JDK in order to use FastJ!

With that said, I highly recommend the Java 17 JDK for usage with FastJ -- Java 16 provides lots of useful language tools and performane improvements over previous versions of Java. However, FastJ requires the Java 11 JDK **at a minimum**. You're free to use any of the versions from 11 and up, but I always recommend using the latest version if you can.

[Download the Java 11 JDK here][Java-Link].


### IDE/Code Editor (Highly Recommended)
For newer programmers, having a tool to not only write your code in, but to also help you efficiently manage your codebase is greatly helpful and gives the user a much better chance at enjoying the process of programming!


#### IntelliJ IDEA (Recommended)
For using FastJ, I would recommend **IntellIJ IDEA**. It is a well-known IDE with one of the largest set of features & capabilities of all Java-supporting IDEs. It's what I ([@lucasstarsz](https://github.com/lucasstarsz)) use daily for my Java programming endeavors, and I can personally recommend it for anyone who needs a capable tool to develop code with. [Download IntelliJ IDEA here][IntelliJ-Link].

:::tip Free, Professional Tools!
If you're a student, you can get IntelliJ IDEA Professional Edition for free as well, through the [Github Developer Student Pack][Student-Pack-Link]. Check it out!

:::


#### Visual Studio Code
**Visual Studio Code** is another viable option. Being a code editor and not a Java IDE, it does not have nearly the same feature capabilities as IntellIJ IDEA. However, for those with a less-capable computer it provides a decent amount of the tools needed to program. [Download Visual Studio here][VSCode-Link].


#### Eclipse IDE
Lastly, **Eclipse IDE**. It contains a few more features than Visual Studio Code because it is an IDE, while still being less tacing than IntellIJ IDEA. Depending on your computer's capabilities, this may be a good option. [Download Eclipse IDE here][Eclipse-Link].


### Git (Highly Recommended)
Lastly on the list of tools, Git. Git is a version control system (VCS) -- it allows you to save and manage several versions of your code and codebase at once. Git is one of the most popular version control tools out there, and for good reason. It's free, easy to learn, and has several online servers in which you can store your code bases **for free**. If you make use of Git, you'll have copies of your work saved at any time that you can go back to -- losing your entire project to corruption is easily preventable using it.

It's not required for FastJ, but it will make your overall programming experience a loooooooooot more stress-free. Consider it!

[Download Git here][Git-Link].

:::tip You'll want a GitHub account...
If you don't have one already, you'll want a GitHub account to follow through with most of this tutorial. It's free, of course, but it should be mentioned.

:::


## Getting A Template
To make setting up as easy as possible, FastJ provides several template projects to simplify the process of getting started. We offer 3 main templates: Java, Groovy, and Kotlin. If you're not sure what to pick, I recommend Java since tutorials and examples will be written with Java first -- other languages will be considered at a later time.

- Java Template: https://github.com/lucasstarsz/fastj-java-template
- Kotlin Template: https://github.com/lucasstarsz/fastj-kotlin-template
- Groovy Template: https://github.com/lucasstarsz/fastj-groovy-template

Once you've picked a template, follow the steps below.

1. Click the "Use This Template" button at the top of this project. Name the project as you like, and leave everything else on the project creation screen as is. Then, hit "Create repository from template".
   ![image](https://user-images.githubusercontent.com/64715411/125542737-6eb23326-d07a-4a28-89af-dcacb4f01cac.png)
   ![image](https://user-images.githubusercontent.com/64715411/125543010-b960404a-ad40-431c-ab31-c097f52574bb.png)

2. Download your project from GitHub, in one of two ways:
    - via the terminal: `git clone https://github.com/yourgithubusername/yourprojectname`
    - or by downloading the ZIP file, specified under the "↓Code" button.

      ![image](https://user-images.githubusercontent.com/64715411/125545310-c62610da-1eb5-4e80-86b3-352b1ea16612.png)


## Running the Program
You have a few options here. If you're using an IDE/Code Editor, feel free to open the project in the IDE/Code Editor of your choice. Regardless, you'll want to open up a terminal/console within the IDE/Code Editor. From there, you can follow these steps to run your program.

1. Build the project:
    ```bash
    ./gradlew build
    ```

2. Run the template program:
    ```bash
    ./gradlew run
    ```
    _Having trouble using `gradlew`? Read [this][Terminals Are Different]._

3. You should see a result similar to this:

    ![image](https://user-images.githubusercontent.com/64715411/128088219-7728918a-8e77-4c39-b38a-d61924010b2d.png)

If so, congratulations! You just created your first FastJ window in... proooobably not 15 minutes 😅


## Generating Installer/Executable
1. Build the program:
    ```bash
    ./gradlew build
    ```

2. Create the executable:
    ```bash
   ./gradlew jpackage 
   ```

3. The executable and installer files will be found in `build/jpackage`.

_Having trouble using `gradlew`? Read [this][Terminals Are Different]._


## What's Next
Check out the following links to learn how to use FastJ:
- [Example Programs][Example-Programs-Readme-Link]
- [FastJ Documentation][Documentation-link]


[Java-Link]: https://adoptium.net/?variant=openjdk17&jvmVariant=hotspot "Install Java from AdoptOpenJDK"

[IntelliJ-Link]: https://www.jetbrains.com/idea/ "IntelliJ IDEA IDE"
[Eclipse-Link]: https://www.eclipse.org/downloads/ "Eclipse IDE"
[VSCode-Link]: https://code.visualstudio.com/ "VSCode"
[Student-Pack-Link]: https://education.github.com/pack "Github Student Developer Pack"

[Git-Link]: https://git-scm.com/downloads "Download Git, the powerful source control management tool."

[Terminals Are Different]: https://gist.github.com/lucasstarsz/9bbc306f8655b916367d557043e498ad "Terminals Access Files Differently"
[Example-Programs-Readme-Link]: http://examples.fastj.me "FastJ Examples"
[Documentation-Link]: https://api.fastj.me "FastJ API Documentation"
