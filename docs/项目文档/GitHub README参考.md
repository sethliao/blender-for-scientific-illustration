# Footlinks

En | [简](https://github.com/DahaWong/obsidian-footlinks/blob/main/README_zh.md)

_⚠️ Make sure you are using the latest version._

[![Demo](https://raw.githubusercontent.com/DahaWong/obsidian-footlinks/main/demo.png)](https://raw.githubusercontent.com/DahaWong/obsidian-footlinks/main/demo.png)

## [](https://github.com/DahaWong/obsidian-footlinks#use)Use

-   Click the icon of Footlinks on the left side menu.
-   Or, type command `Footlinks`.

## [](https://github.com/DahaWong/obsidian-footlinks#preference)Preference

On `Footlinks` setting page, you can:

-   Add a seperator between **main body** and **footlinks**, say `---`. (stay empty by default)
-   Decide whether the side menu icon is shown or not.

## [](https://github.com/DahaWong/obsidian-footlinks#known-issues)Known Issues

1.  Footlinks cannot be parsed by Obsidian in block quote, this could be considered as a bug of app. Just in case you are heavily using block quotes.
2.  More issues please report on [GitHub Issues](https://github.com/DahaWong/obsidian-footlinks/issues) or [Obsidian Forum](https://forum.obsidian.md/t/plugin-footlinks/9494) to let me know.

## [](https://github.com/DahaWong/obsidian-footlinks#development-roadmap)Development Roadmap

See [this page](https://github.com/DahaWong/obsidian-footlinks/projects/1).
# Extract Highlights Plugin



## Training Videos

### Watch: The Quick-Start Tutorial!



### Watch: A SECRET NEW highlight mode

### Watch: Tips and Tricks for the SECRET mode



### How it works

This plugin will copy the highlights delimited by `==`, `**` and `<mark></mark>` into your clipboard as a bullet-list.

Optionally you can customize...

-   **The heading text of the list**, include the note-title or hide it all-together
-   **Adding a footnote** to each that link back to the source-file
-   **Creating an ad-hoc map-of-content (MOC)** by turning each highlight into an `[[` Obsidian link `]]`
-   **Auto-capitalize** the first letter in each highlight for consistency

### Demo Creating and Extracting Highlights



#### Using the Hotkey to HIGHLIGHT (and UN-HIGHLIGHT) the sentence under cursor

The default hotkey for this is:

SHIFT + ALT + \_

Super useful for when you're reading and just don't want to switch to your mouse for selecting the sentence.

![demo](https://github.com/akaalias/extract-highlights-plugin/blob/master/onoff.gif?raw=true)

Will remove highlighting if the sentence under your cursor is currently delimited by "==".

#### Using the Hotkey to EXTRACT highlights

The default hotkey is:

SHIFT + ALT + \=

#### Using the Ribbon Button

### Feedback

Are you using Extract Highlights? I'd love to hear from you!

[Share your questions and suggestions in the forum](https://forum.obsidian.md/t/extract-highlights-plugin/8763/12)

### Backlog

#### TODO

-   Record video on using the "explosion mode" for research and creating atomic notes
    -   Pre-requisites
        -   Highlights Plugin
            -   Create links
            -   Create page
            -   Enable explode mode
            -   Open notes on creation
        -   Sliding Panes Plugin
    -   Start with a good article (Economist)
    -   Go through and highlight sentences
    -   Create MOC and explode into notes
        -   BOOOMMMMM!!!
        -   You've got an MOC
        -   You've got the core for single-idea, atomic notes
        -   You've got a backlink to the original file

#### DOING

...

#### DONE

-   "Explode" highlights into individual notes (assumes I'm creating the list of links as well)
-   command (SHIFT + ALT + \=) which then copies all of the highlighted text either into:
-   click a button which then copies all of the highlighted text either into:
-   allow for `<mark></mark>` to be used as highlights
-   allow for standard bold (`**`) to be used as highlights
-   allow to optionally include or completely exclude `## Highlights` heading
-   allow to change text in heading `## My Custom Highlights`
-   allow to include note-name in heading such as `## From: $NOTE_TITLE`
-   allow to add footnotes for each highlight and include link to source-note
-   allow to optionally enable bold for highlights
-   allow for Command Palette to trigger copying (Works sort of, bug in Electron)
-   my clipboard
-   a new note