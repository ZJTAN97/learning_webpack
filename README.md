# Learning webpack

-   This repository contains the learning notes of Webpack for future references

<br>

# What is Webpack and why we need it?

-   A tool that lets you bundle your JavaScript applications and can be extended to support many different assets such as images, fonts and stylesheets
-   A build tool that puts all of your assets, including JavaScript, images, fonts and CSS in a dependency graph.

<br>

# Dependency Graph

-   Need to research more on this

<br>

# Asset Modules

-   Introduced in Webpack 5, it is a type of module that allows one to use asset files (fonts, icons, etc) without configuring additional loaders
-   Prior to webpack5 it was common to use:
    -   raw-loader --> to import a file as as tring
    -   url-loader --> to inline a file into the bundle as a data URI
    -   file-loader --> to emit a file into the output directory

### 4 Type of Asset Modules

-   asset/resource --> emits a separate file and exports the URL, previously achieved through file-loader (used for bigger sized asset)
-   asset/inline --> exports a data URI of the asset, previously achieved by using url-loader (used for smaller sized asset)
-   asset --> automatically chooses between exporting a data URI and emitting a separate file (combi of the 2 and previously achieveable using url-loader with asset size limit)
-   asset/source --> export the source code of the asset. previously achievable by using raw-loader
