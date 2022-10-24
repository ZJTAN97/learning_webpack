# Settingup React Project without CRA

-   This folder consists of setting up a React Project without CRA.
-   Main purpose is to understand how webpack works under the hood and not rely on CRA

<br>

# 1. Prerequisites Concepts to know

-   Webpack --> Helps in bundling our code into one single file
-   Babel --> Convert ECMAScript 2015+ (ES6+) code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.

<br>

# 2. Dependencies in a nutshell

Webpack (Dev-dependncies)

-   webpack
-   webpack-cli
-   webpack-dev-server

<br>

Babel

-   babel-loader --> allows transpiling JavaScript files using babel and webpack. exposes a loader-builder utility that allows users to add custom handling of Babel’s configuration for each file that it processes.
    <br>

-   @babel/preset-env --> allows you to use the latest JS without needing to micromanage which syntax transforms
    <br>

-   @babel/core --> core package
    <br>

-   @babel/plugin-transform-runtime --> A plugin that enables the re-use of Babel’s injected helper code to save on codesize.
    <br>

-   @babel/preset-react --> use react preset when we are using Reactjs. Helps in converting html files to react based file
    <br>

-   @babel/eslint-parser --> parser that allows ESLint to run on source code that is transformed by Babel
    <br>

-   @babel/runtime --> package that contains a polyfill and many other things that Babel can reference.
    <br>

-   @babel/cli --> command line interface to use babel
    <br>

<br>

Linters and path

-   eslint
-   eslint-config-airbnb-base
-   eslint-plugin-jest
-   eslint-config-prettier
-   path

<br>

React and React-DOM

-   react
-   react-dom
