# Essential tools for front-end developers

Staying up to date can be tricky if you're not familiar with the latest tools and technologies. The right tools for the job are essential.
It will improve your workflow and take your development to the next level.

## Code editor

Front end developers use a code editor to write their code. Thty need a tip top code editor to write their code.  Where are loads of code editors to choose from.
Some of the most popular code editors are:

- [Atom](https://atom.io/)
- [Sublime Text](https://www.sublimetext.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [notepad++](https://notepad-plus-plus.org/)
- [VIM](https://www.vim.org/)

What to look for in a code editor?

- well designed and ultra speedy interface (sublime text)

## Developer tools

Chrome developer tools absolutelly must be your front-end developer tool of choice. It's a great tool to use to debug your code.
It's build in to the browser and is very easy to use. It alows you to see the source code of the page you're on in the browser.
Edit HTML and CSS in real time and debug JavaScript
all while viewving a thorough performance analysis of your page.

Chrome developer tools available both in Chrome and Safari and basicaly it gives you access to the internals of your application.
You can use device mode to test how responsive page would be as you are building it.

Sources panel used to debug your Javascript or the timeline indentifies the time it takes to execute your code.

Tips:

1. Sources> Event listener> click on event you want to debug
2. In console

    ```javascript
    var elm = document.getElementById('idname');
    monitorEvent(elm, 'click');
    //or
    monitorEvent(elm, ['click', 'mouseover']);
    // or 
    monitorEvent(elm);
    // to stop monitoring
    unmonitorEvent(elm, 'click');
    ```

3. When searching you can put #name in search bar to find element by id. Using .name - will check by css class name. Example: .btn-success

4. Color secetion in sources panel can be used to see the color of the element.
5. Ctrl+Z/ Ctrl+Y  will undo/redo changes you added in right pannel in styles tab.
6. Use filter in Styles tab to find element you want to edit, example: "padding"
7. Clean console by pressing Ctrl+L
8. Making page editable via console

    ```javascript
    document.body.contentEditable = true;
    ```

9. Making easier to list source breakpoint results

    ```javascript
    console.table(document.querySelectorAll('*'));
    // selector can be your array or object or something
    ```

10. Preserving logs in console - in log tab look for setting and select 'preserve log'

    ```javascript
    console.log('Hello World');
    ```

11. In console write debug(variable) to see the value of variable. or debug(functionName). Example debug(showDate)

    ```javascript
    debug(functionName);
    //or
    undebug(functionName);

    ```

12. Monintoring function calls in console

    ```javascript
    monitor(functionName);
    //or
    unmonitor(functionName);
    ```

13. Measuring time in console

    ```javascript
    console.time('name');
    for (var i = 0; i < 1000000; i++) {
        // do something
    }
    console.timeEnd('name');
    ```

14. Console > setting to Verbose to see all logs
15. Ctrl+Shift+F to find function in all source files
16. Placing breakpoint in long lines of code - select arrow in the console.
17. When debugging in CallStack you can blackbox scripts with right click on the script name to prevent them to be shown.
18. Snippets - you can create your own snippets to use in your code.

## API tools

Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.

[Postman](https://www.postman.com/)
[Public collection of api endpoints](https://www.postman.com/cs-demo/workspace/public-rest-apis/collection/8854915-454a2dc7-dcbe-41cf-9bfa-da544fcd93a2?ctx=documentation)

## jQuery

Cross platform, jQuery is a JavaScript library that simplifies HTML document traversal, event handling, animating, and Ajax interactions for rapid web development.
JQuery takes common tasks that require several lines of JavasScript and condenses them into methiods that you can call up with a single line of code.
Despite it's age (developed at 2006), it's still a popular library. 90% of 500k sites still use it.

[jquery](https://jquery.com/)

```javascript
$(document).ready(function(){
    // code here
});
```

## Git and GitHub

Git is a version control system for tracking changes in source code during a project development. It enables you to store, share, and work with code from multiple authors. It lso alows you to easy control your changes and reverse code if necessary.

GitHub is a cloud interface for Git. It's a web-based hosting service for version control using Git. Its main purpose is to store and host code for projects. GitHub offers all versioning control functionallity as Git, but also offeres its own handy features such as task management, issue tracking, project wiki's, and more.

- [Git](https://git-scm.com/)
- [Github](https://github.com/)

## Front-end frameworks (CSS frameworks)

Once you start building your application you will notice that you have to write the same code over and over again.
Front-end frameworks, also known as CSS frameworks, can significally cut down on the amount of code you have to write.
Front-end frameworks contain of a set of CSS rules that can be applied to your HTML document, organized in files and folders. Instead of writing the same code over and over again, you can use a CSS framework to write the code once and apply it to your HTML document.

Most popular front-end frameworks are:

- [Bootstrap](https://getbootstrap.com/) -  probably most popular. It was developed by th team of Twitter. Comes with HTML and CSS based design templates for typography, forms, buttons, and other interface elements.
- [Foundation](https://foundation.zurb.com/)
- [Skeleton](https://getskeleton.com/)
- [UIkit](https://getuikit.com/)
- [Fabric](https://fabricjs.com/)

## CSS preprocessors

DRY - Don't repeat yourself.
Sou can use a CSS preprocessor to write your CSS code once and apply it to your HTML document. This is a time saving tool that will help you write maintainable code future-proof code while reducing amount of CSS code you need to write, keeping it DRY.
Most popular CSS preprocessor are:

- [Sass](https://sass-lang.com/) -  variables, mixins, and functions that can be used in your CSS code.

    ```sass
    $color: #ff0000;
    .red {
        color: $color;
    }
    ```