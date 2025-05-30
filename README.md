# ARDIS mco extension

Welcome to Visual Studio Code extension for Ardis macro scripting! The mco extension makes it easy to code your Ardis macros in Visual Studio Code, with an expanding set of functionalities:

* Syntax highlighting for Ardis macros
* Snippets for macros

## Features

### Syntax highlighting


### Snippets

Comment macro structures

![Comment](https://raw.githubusercontent.com/Klercken/Ardis-mco/master/images/comment.gif)

Sub-functions with folding support

![SubFunctions](https://raw.githubusercontent.com/Klercken/Ardis-mco/master/images/subfunctions.gif)

Frequently used code

![FreqCode](https://raw.githubusercontent.com/Klercken/Ardis-mco/master/images/freqcode.gif)

## Requirements

/

## Known Issues

/

## Release Notes

### 0.3.0
* Added recognition to BREAKEND
* Added command description while hovering for standard commands


### 0.2.2

* Added lost snippets

### 0.2.1

* Changed language name to "Ardis (mco)"
* Added recognition for new commands
 * CheckOffcutID
 * DIVIDE
 * EXPORTTABLE
 * FILEVERSION
 * LaySplit
 * MatGroupFirstLay, MatGroupLastLay, MatGroupQty
 * StripBlock2

### 0.2.0

* Added frequently used sample snippets
* Added support for string definition using leading "$" character
> **Example:** the following two lines both are valid string notations
> * myString = ``` "This is a string" ```
> * myString = ``` $This is a string ```

### 0.1.0

First version containing following features
* Basic language support containing code highlighting
* Folding support on sub-functions
* Snippets containing basic structures for standard comment sections and sub-functions
