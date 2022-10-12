# PROJECT SAMPLE NOT FINISHED YET—IN PROGRESS...
## Introduction
[![Tech Stacks](https://skills.thijs.gg/icons?i=react,ts&theme=light)](https://skills.thijs.gg)

This project provides the bases for creating a large-scale and complex **React Application**, that contains multiple pages, components, features, and etc.. Please be informed that this project specifically only provides an example on how I structure the folders/directories based on other helper libraries/dependencies integrated for building this sample projects. 

This may not be the perfect-best conventions to use for organizing files and folders structure, perhaps it might be flawed somehow—but this is just my opinion on how I structure my **React Projects**.

## Tech Stack
This project uses **Typescript**(.tsx and .ts) as the main language of my choice for building a react project. Aside from **Typescript** there are a number of different technologies used in this project too:

* **Vite**—For building the react app.

* **Redux**—For State management.

* **React Material UI**—Pre-built U.I. components.

* **ReactJS**—Obviously, the front-end library (Webframework?) used for this project.

* **Jest**—Testing library.

## Directory files Structuring 

```bash
|public
|src
    |--(assets!)
    |--(components!)
    |--(contexts!)
    |--(data!)
    |--(features!)
    |  |--(dashboard?)
    |  |  |--(components!)
    |  |  |--<index!.ts>
    |  |  |--<index!.tsx>
    |  |  |--<redux-model!.ts>
    |  |  |--<redux-slice!.ts>
    |  |--^RFS
    |  |
    |--(hooks!)
    |--(layouts!)
    |--(lib!)
    |--(pages!)
    |  |--<Dashbord?.tsx>
    |  |--<SignUp?.tsx>
    |  |--<SignIn?.tsx>
    |  |--<^RFN>
    |--(services!)
    |--(utils!)
```

*The diagram above shows how the project's directories and files within it were organized. Although the diagram doesn't represent the actual project's files and directories—**the point here is to show how I structure them when introducing new files/features.***
#### Rules
As you can see in the diagram above, some files and folders has a special character—like the folders above with **"!"** appended after their names(it means that their names are absolute). And in addition to that, observe the characters of the string cases of filenames and also we replaced white spaces for **"_"** for multi-words filenames. The following list below explains: the rules of this structuring convention; and what every special symbols, and placeholder represent in the diagram above;  

##### Special Characters Indicator
* **?**—Every folders and files with this symbol after their names are**optinal**. You can name what you want for the files/folders you wish to add, (Example: <myboard?>,<appbar?>, and etc.).
* **!**—Every folders and files with this symbol after their names means **absolute**. This indicates that we're using this **name** for that file or folder that has their own respective unique role (as I will describe it in details below) in this project.
* **<^RFN>** — Short term for **Repeat File Naming** this is self explanatory, if you wish to add a files similar to the above (at which the **^** is pointing) just follow the convention of naming that particular file.
Example:
```bash
    |--(pages!)
    |  |--<Dashbord?.tsx>
    |  |--<SignUp?.tsx>
    |  |--<SignIn?.tsx>
    |  |--<^RFN>
```
Add similar new files as long as your following the naming rules for that **<SignIn?.tsx>**. So let say for example, I want to add a settings.tsx file in my project within that **pages folder**, then i'll name it like this: **Settings.tsx**.

* **^RFS**— Short term for **Repeat Folder Structuring** it indicates that if you want to add a new folder, make sure that you must follow the folder's structuring above it at which the **"^"** is pointing at.
Example:
```bash
    |--(features!)
    |  |--(dashboard?)
    |  |  |--(components!)
    ........
    |  |  |--<redux-slice!.ts>
    |  |--^RFS
    |  |
```
So in this example the **^RFS** is pointing to **(dashboard?)** which means if you want to add a folder within the parent **(features!)** folder similar to **(dashboard?)**  you must follow the rules and conventions used by this **(dashboard?)** folder.

*obviously, to avoid confusion, "........" means there are other placeholders between it (see in the primary diagram above)*.
##### Files and Folders Placeholder
* **(someFolderNames)**—Name enclosed by parentheses indicates a folder.
* **<someFileNames.somefileType>**—Name enclosed by **"<>"** indicates a file.
* **<someFileName.tsx>**—Obviously .tsx files.
* **<someFileName.ts>**—Man, again .ts files.

#### Folder's Role
* **assets!**——contains static files and non-programming language file (e.g., .css files, images, svg, and etc.).
* **components!**——contains reusable-react U.I. components (like buttons,icons and etc.) that are reusable for other components to use within the scope at which this folder was placed in.
* **contexts!**— holds the global react context.*this folder is optional just in case you don't use redux as your state manager*
* **data!**—contains static data for partial-data hydration or other constant data.
* **features!**—these are react components organized in their own respective folder that contains the clients's specifc features for the U.I..
* **hooks!**——contains the global react hooks for the entire project.
* **layouts!**—contains the basic react U.I. structure that can be use in **pages** or **layouts** like appbar, drawer, accordion, and etc.
* **lib!**—contains intializations for the third party libraries or other projects's logics.
* **pages!**—contains the react-root U.I. containers that holds **layouts**,**features** and other react **components**.
* **servies!**—other related API services integrated for this project like for analytics and etc.
* **utils!**—contains a utility logic functions for the whole project to use (e.g., date formater, format currency and etc.).

*Please take note again that this is how I structure it, there might be better ways to do it. If you have any brilliant idea structuring this—you can contribute it here*