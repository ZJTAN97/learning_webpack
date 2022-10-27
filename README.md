# Learning webpack

-   This repository contains the learning notes of Webpack for future references
-   Main Reference: https://github.com/vp-online-courses/webpack-tutorial

<br>

# What is Webpack and why we need it?

-   A tool that lets you bundle your JavaScript applications and can be extended to support many different assets such as images, fonts and stylesheets
-   A build tool that puts all of your assets, including JavaScript, images, fonts and CSS in a dependency graph.

<br>

# Dependency Graph

-   Anytime one file depends on another, webpack treats this as a dependency
-   This allows webpack to take non-code assets, such as images or web fonts and provide them as dependencies for your application
-   When webpack processes your application, it starts from a list of modules in its config file, starting from the entry points, webpack recursively builds a depdency graph that includes every module your application needs and bundle all of those modules into a bundle which will be loaded by the browser

<br>

# Understanding Source Maps in Webpack

<br>

# Asset Modules

-   Introduced in Webpack 5, it is a type of module that allows one to use asset files (fonts, icons, etc) without configuring additional loaders
-   Prior to webpack5 it was common to use:
    -   raw-loader --> to import a file as as tring
    -   url-loader --> to inline a file into the bundle as a data URI
    -   file-loader --> to emit a file into the output directory

### 4 Type of Asset Modules

-   asset/resource --> emits a separate file and exports the URL, previously achieved through file-loader (used for bigger sized asset)
-   asset/inline --> exports a data URI of the asset, previously achieved by using url-loader (used for smaller sized asset); it basically converts the image to base64 and inline it. (think back to QuantityAI how I handled the images)
-   asset --> automatically chooses between exporting a data URI and emitting a separate file (combi of the 2 and previously achieveable using url-loader with asset size limit)
-   asset/source --> export the source code or any text based file of the asset. previously achievable by using raw-loader

<br>

# Loaders

-   Webpack enables use of loaders to preprocess file

<br>

# Plugins

-   Plugins are additional JavaScript libraries that does everything that loaders cannot.
-   Plugins can also modify how bundles themselves are created.

<br>

# Production vs Development Build
