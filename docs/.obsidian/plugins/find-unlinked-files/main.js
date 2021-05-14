'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var DeleteFilesModal = /** @class */ (function (_super) {
    __extends(DeleteFilesModal, _super);
    function DeleteFilesModal(app, filesToDelete) {
        var _this = _super.call(this, app) || this;
        _this.filesToDelete = filesToDelete;
        return _this;
    }
    DeleteFilesModal.prototype.onOpen = function () {
        var _this = this;
        var _a = this, contentEl = _a.contentEl, titleEl = _a.titleEl;
        titleEl.setText('Move ' + this.filesToDelete.length + ' files to system trash?');
        contentEl
            .createEl("button", { text: "Cancel" })
            .addEventListener("click", function () { return _this.close(); });
        contentEl
            .setAttr("margin", "auto");
        contentEl
            .createEl("button", {
            cls: "mod-cta",
            text: "Confirm"
        })
            .addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
            var _i, _a, file;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.filesToDelete;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        file = _a[_i];
                        return [4 /*yield*/, this.app.vault.trash(file, true)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.close();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeleteFilesModal.prototype.onClose = function () {
        var contentEl = this.contentEl;
        contentEl.empty();
    };
    return DeleteFilesModal;
}(obsidian.Modal));

var SettingsTab = /** @class */ (function (_super) {
    __extends(SettingsTab, _super);
    function SettingsTab(app, plugin, defaultSettings) {
        var _this = _super.call(this, app, plugin) || this;
        _this.defaultSettings = defaultSettings;
        _this.plugin = plugin;
        return _this;
    }
    SettingsTab.prototype.formatPath = function (path, addDirectorySlash) {
        if (path.length == 0)
            return path;
        path = obsidian.normalizePath(path);
        if (addDirectorySlash)
            return path + "/";
        else
            return path;
    };
    SettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl("h2", { text: this.plugin.manifest.name });
        containerEl.createEl("h4", { text: "Settings for find unlinked files" });
        new obsidian.Setting(containerEl)
            .setName('Output file name')
            .setDesc('Set name of output file (without file extension). Make sure no file exists with this name because it will be overwritten! If the name is empty, the default name is set.')
            .addText(function (cb) { return cb.onChange(function (value) {
            if (value.length == 0) {
                _this.plugin.settings.outputFileName = _this.defaultSettings.outputFileName;
            }
            else {
                _this.plugin.settings.outputFileName = value;
            }
            _this.plugin.saveSettings();
        }).setValue(_this.plugin.settings.outputFileName); });
        new obsidian.Setting(containerEl)
            .setName('Disable working links')
            .setDesc('Indent lines to disable the link and to clean up the graph view')
            .addToggle(function (cb) { return cb.onChange(function (value) {
            _this.plugin.settings.disableWorkingLinks = value;
            _this.plugin.saveSettings();
        }).setValue(_this.plugin.settings.disableWorkingLinks); });
        new obsidian.Setting(containerEl)
            .setName("Ignore or include files in the given directories")
            .setDesc("Enable to ignore files in the given directories. Disable to only include files in the given filetypes")
            .addToggle(function (cb) {
            return cb.setValue(_this.plugin.settings.ignoreDirectories)
                .onChange(function (value) {
                _this.plugin.settings.ignoreDirectories = value;
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Directories")
            .setDesc("Add each directory path in a new line")
            .addTextArea(function (cb) { return cb
            .setPlaceholder("Directory/Subdirectory")
            .setValue(_this.plugin.settings.directoriesToIgnore.join("\n"))
            .onChange(function (value) {
            var paths = value.trim().split("\n").map(function (value) { return _this.formatPath(value, true); });
            _this.plugin.settings.directoriesToIgnore = paths;
            _this.plugin.saveSettings();
        }); });
        new obsidian.Setting(containerEl)
            .setName("Files to ignore.")
            .setDesc("Add each file path in a new line (with file extension!)")
            .addTextArea(function (cb) { return cb
            .setPlaceholder("Directory/file.md")
            .setValue(_this.plugin.settings.filesToIgnore.join("\n"))
            .onChange(function (value) {
            var paths = value.trim().split("\n").map(function (value) { return _this.formatPath(value, false); });
            _this.plugin.settings.filesToIgnore = paths;
            _this.plugin.saveSettings();
        }); });
        new obsidian.Setting(containerEl)
            .setName("Links to ignore.")
            .setDesc("Ignore files, which contain the given file as link. Add each file path in a new line (with file extension!). Set it to `*` to ignore files with links.")
            .addTextArea(function (cb) { return cb
            .setPlaceholder("Directory/file.md")
            .setValue(_this.plugin.settings.linksToIgnore.join("\n"))
            .onChange(function (value) {
            var paths = value.trim().split("\n").map(function (value) { return _this.formatPath(value, false); });
            _this.plugin.settings.linksToIgnore = paths;
            _this.plugin.saveSettings();
        }); });
        new obsidian.Setting(containerEl)
            .setName("Ignore or include files with the given filetypes")
            .setDesc("Enable to ignore files with the given filetypes. Disable to only include files with the given filetypes")
            .addToggle(function (cb) {
            return cb.setValue(_this.plugin.settings.ignoreFileTypes)
                .onChange(function (value) {
                _this.plugin.settings.ignoreFileTypes = value;
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("File types")
            .setDesc("Effect depends on toggle above")
            .addTextArea(function (cb) { return cb
            .setPlaceholder("docx,txt")
            .setValue(_this.plugin.settings.fileTypesToIgnore.join(","))
            .onChange(function (value) {
            var extensions = value.trim().split(",");
            _this.plugin.settings.fileTypesToIgnore = extensions;
            _this.plugin.saveSettings();
        }); });
        new obsidian.Setting(containerEl)
            .setName("Tags to ignore.")
            .setDesc("Ignore files, which contain the given tag. Add each tag separated by comma (without `#`)")
            .addTextArea(function (cb) { return cb
            .setPlaceholder("todo,unfinished")
            .setValue(_this.plugin.settings.tagsToIgnore.join(","))
            .onChange(function (value) {
            var tags = value.trim().split(",");
            _this.plugin.settings.tagsToIgnore = tags;
            _this.plugin.saveSettings();
        }); });
        new obsidian.Setting(containerEl)
            .setName("Filetypes to delete per command. See README.")
            .setDesc("Add each filetype separated by comma. ")
            .addTextArea(function (cb) { return cb
            .setPlaceholder("jpg,png")
            .setValue(_this.plugin.settings.fileTypesToDelete.join(","))
            .onChange(function (value) {
            var extensions = value.trim().split(",");
            _this.plugin.settings.fileTypesToDelete = extensions;
            _this.plugin.saveSettings();
        }); });
        /// Settings for find unresolvedLinks
        containerEl.createEl("h4", { text: "Settings for find unresolved links" });
        new obsidian.Setting(containerEl)
            .setName('Output file name')
            .setDesc('Set name of output file (without file extension). Make sure no file exists with this name because it will be overwritten! If the name is empty, the default name is set.')
            .addText(function (cb) { return cb.onChange(function (value) {
            if (value.length == 0) {
                _this.plugin.settings.unresolvedLinksOutputFileName = _this.defaultSettings.unresolvedLinksOutputFileName;
            }
            else {
                _this.plugin.settings.unresolvedLinksOutputFileName = value;
            }
            _this.plugin.saveSettings();
        }).setValue(_this.plugin.settings.unresolvedLinksOutputFileName); });
        new obsidian.Setting(containerEl)
            .setName("Directories to ignore.")
            .setDesc("Ignore links in files in the specified directory. Add each directory path in a new line")
            .addTextArea(function (cb) { return cb
            .setPlaceholder("Directory/Subdirectory")
            .setValue(_this.plugin.settings.unresolvedLinksDirectoriesToIgnore.join("\n"))
            .onChange(function (value) {
            var paths = value.trim().split("\n").map(function (value) { return _this.formatPath(value, true); });
            _this.plugin.settings.unresolvedLinksDirectoriesToIgnore = paths;
            _this.plugin.saveSettings();
        }); });
        new obsidian.Setting(containerEl)
            .setName("Files to ignore.")
            .setDesc("Ignore links in the specified file. Add each file path in a new line (with file extension!)")
            .addTextArea(function (cb) { return cb
            .setPlaceholder("Directory/file.md")
            .setValue(_this.plugin.settings.unresolvedLinksFilesToIgnore.join("\n"))
            .onChange(function (value) {
            var paths = value.trim().split("\n").map(function (value) { return _this.formatPath(value, false); });
            _this.plugin.settings.unresolvedLinksFilesToIgnore = paths;
            _this.plugin.saveSettings();
        }); });
        new obsidian.Setting(containerEl)
            .setName("Links to ignore.")
            .setDesc("Ignore files, which contain the given file as link. Add each file path in a new line (with file extension!). Set it to `*` to ignore files with links.")
            .addTextArea(function (cb) { return cb
            .setPlaceholder("Directory/file.md")
            .setValue(_this.plugin.settings.unresolvedLinksLinksToIgnore.join("\n"))
            .onChange(function (value) {
            var paths = value.trim().split("\n").map(function (value) { return _this.formatPath(value, false); });
            _this.plugin.settings.unresolvedLinksLinksToIgnore = paths;
            _this.plugin.saveSettings();
        }); });
        new obsidian.Setting(containerEl)
            .setName("Filetypes to ignore.")
            .setDesc("Ignore links with the specified filetype. Add each filetype separated by comma")
            .addTextArea(function (cb) { return cb
            .setPlaceholder("docx,txt")
            .setValue(_this.plugin.settings.unresolvedLinksFileTypesToIgnore.join(","))
            .onChange(function (value) {
            var extensions = value.trim().split(",");
            _this.plugin.settings.unresolvedLinksFileTypesToIgnore = extensions;
            _this.plugin.saveSettings();
        }); });
        new obsidian.Setting(containerEl)
            .setName("Tags to ignore.")
            .setDesc("Ignore links in files, which contain the given tag. Add each tag separated by comma (without `#`)")
            .addTextArea(function (cb) { return cb
            .setPlaceholder("todo,unfinished")
            .setValue(_this.plugin.settings.unresolvedLinksTagsToIgnore.join(","))
            .onChange(function (value) {
            var tags = value.trim().split(",");
            _this.plugin.settings.unresolvedLinksTagsToIgnore = tags;
            _this.plugin.saveSettings();
        }); });
    };
    return SettingsTab;
}(obsidian.PluginSettingTab));

var Utils = /** @class */ (function () {
    /**
     * Checks for the given settings. Is used for `Find unlinked files` and `Find unresolved links`
     * @param app
     * @param filePath
     * @param tagsToIgnore
     * @param linksToIgnore
     * @param directoriesToIgnore
     * @param filesToIgnore
     * @param ignoreDirectories
     */
    function Utils(app, filePath, tagsToIgnore, linksToIgnore, directoriesToIgnore, filesToIgnore, ignoreDirectories) {
        if (ignoreDirectories === void 0) { ignoreDirectories = true; }
        this.app = app;
        this.filePath = filePath;
        this.tagsToIgnore = tagsToIgnore;
        this.linksToIgnore = linksToIgnore;
        this.directoriesToIgnore = directoriesToIgnore;
        this.filesToIgnore = filesToIgnore;
        this.ignoreDirectories = ignoreDirectories;
        this.fileCache = app.metadataCache.getCache(filePath);
    }
    Utils.prototype.hasTagsToIgnore = function () {
        var _this = this;
        var tags = obsidian.getAllTags(this.fileCache);
        return (tags === null || tags === void 0 ? void 0 : tags.find(function (tag) { return _this.tagsToIgnore.contains(tag.substring(1)); })) !== undefined;
    };
    Utils.prototype.hasLinksToIgnore = function () {
        var _this = this;
        var _a, _b;
        if ((((_a = this.fileCache) === null || _a === void 0 ? void 0 : _a.embeds) != null || ((_b = this.fileCache) === null || _b === void 0 ? void 0 : _b.links) != null) && this.linksToIgnore[0] == "*") {
            return true;
        }
        return obsidian.iterateCacheRefs(this.fileCache, function (cb) {
            var _a;
            var link = (_a = _this.app.metadataCache.getFirstLinkpathDest(cb.link, _this.filePath)) === null || _a === void 0 ? void 0 : _a.path;
            return _this.linksToIgnore.contains(link);
        });
    };
    Utils.prototype.checkDirectory = function () {
        var _this = this;
        var contains = this.directoriesToIgnore.find(function (value) { return _this.filePath.startsWith(value) && value.length != 0; }) !== undefined;
        if (this.ignoreDirectories) {
            return contains;
        }
        else {
            return !contains;
        }
    };
    Utils.prototype.isFileToIgnore = function () {
        return this.filesToIgnore.contains(this.filePath);
    };
    Utils.prototype.isValid = function () {
        return !this.hasTagsToIgnore() && !this.hasLinksToIgnore() && !this.checkDirectory() && !this.isFileToIgnore();
    };
    /**
     * Writes the text to the file and opens the file in a new pane if it is not opened yet
     * @param app
     * @param outputFileName name of the output file
     * @param text data to be written to the file
     */
    Utils.writeAndOpenFile = function (app, outputFileName, text) {
        return __awaiter(this, void 0, void 0, function () {
            var fileIsAlreadyOpened;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, app.vault.adapter.write(outputFileName, text)];
                    case 1:
                        _a.sent();
                        fileIsAlreadyOpened = false;
                        app.workspace.iterateAllLeaves(function (leaf) {
                            if (leaf.getDisplayText() != "" && outputFileName.startsWith(leaf.getDisplayText())) {
                                fileIsAlreadyOpened = true;
                            }
                        });
                        if (!fileIsAlreadyOpened)
                            app.workspace.openLinkText(outputFileName, "/", true);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Utils;
}());

var DEFAULT_SETTINGS = {
    outputFileName: "unlinked files output",
    disableWorkingLinks: false,
    directoriesToIgnore: [],
    filesToIgnore: [],
    fileTypesToIgnore: [],
    linksToIgnore: [],
    tagsToIgnore: [],
    fileTypesToDelete: [],
    ignoreFileTypes: true,
    ignoreDirectories: true,
    unresolvedLinksOutputFileName: "unresolved links output",
    unresolvedLinksDirectoriesToIgnore: [],
    unresolvedLinksFilesToIgnore: [],
    unresolvedLinksFileTypesToIgnore: [],
    unresolvedLinksLinksToIgnore: [],
    unresolvedLinksTagsToIgnore: [],
};
var FindUnlinkedFilesPlugin = /** @class */ (function (_super) {
    __extends(FindUnlinkedFilesPlugin, _super);
    function FindUnlinkedFilesPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FindUnlinkedFilesPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading ' + this.manifest.name + " plugin");
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addCommand({
                            id: 'find-unlinked-files',
                            name: 'Find unlinked files',
                            callback: function () { return _this.findUnlinkedFiles(); },
                        });
                        this.addCommand({
                            id: 'find-unresolved-link',
                            name: 'Find unresolved links',
                            callback: function () { return _this.findUnresolvedLinks(); },
                        });
                        this.addCommand({
                            id: "delete-unlinked-files",
                            name: "Delete unlinked files with certain extension. See README",
                            callback: function () { return _this.deleteUnlinkedFiles(); }
                        });
                        this.addSettingTab(new SettingsTab(this.app, this, DEFAULT_SETTINGS));
                        return [2 /*return*/];
                }
            });
        });
    };
    FindUnlinkedFilesPlugin.prototype.findUnlinkedFiles = function () {
        var _this = this;
        var outFileName = this.settings.outputFileName + ".md";
        var outFile;
        var files = this.app.vault.getFiles();
        var markdownFiles = this.app.vault.getMarkdownFiles();
        var links = [];
        markdownFiles.forEach(function (markFile) {
            if (markFile.path == outFileName) {
                outFile = markFile;
                return;
            }
            obsidian.iterateCacheRefs(_this.app.metadataCache.getFileCache(markFile), function (cb) {
                var txt = _this.app.metadataCache.getFirstLinkpathDest(obsidian.getLinkpath(cb.link), markFile.path);
                if (txt != null)
                    links.push(txt.path);
            });
        });
        var notLinkedFiles = files.filter(function (file) { return _this.isValid(file, links); });
        notLinkedFiles.remove(outFile);
        var text = "";
        var prefix;
        if (this.settings.disableWorkingLinks)
            prefix = "	";
        else
            prefix = "";
        notLinkedFiles.forEach(function (file) {
            text += prefix + "- [[" + _this.app.metadataCache.fileToLinktext(file, "/") + "]]\n";
        });
        Utils.writeAndOpenFile(this.app, outFileName, text);
    };
    FindUnlinkedFilesPlugin.prototype.deleteUnlinkedFiles = function () {
        var _this = this;
        var _a, _b;
        var links = (_b = (_a = this.app.metadataCache.getCache(this.settings.outputFileName + ".md")) === null || _a === void 0 ? void 0 : _a.links) !== null && _b !== void 0 ? _b : [];
        var filesToDelete = [];
        links.forEach(function (link) {
            var file = _this.app.metadataCache.getFirstLinkpathDest(link.link, "/");
            if (!file)
                return;
            if (_this.settings.fileTypesToDelete.contains(file.extension)) {
                filesToDelete.push(file);
            }
        });
        if (filesToDelete.length > 0)
            new DeleteFilesModal(this.app, filesToDelete).open();
    };
    FindUnlinkedFilesPlugin.prototype.findUnresolvedLinks = function () {
        var outFileName = this.settings.unresolvedLinksOutputFileName + ".md";
        var links = [];
        var unresolvedLinks = this.app.metadataCache.unresolvedLinks;
        for (var filePath in unresolvedLinks) {
            if (filePath == this.settings.unresolvedLinksOutputFileName + ".md")
                continue;
            var fileType = filePath.substring(filePath.lastIndexOf(".") + 1);
            var utils = new Utils(this.app, filePath, this.settings.unresolvedLinksTagsToIgnore, this.settings.unresolvedLinksLinksToIgnore, this.settings.unresolvedLinksDirectoriesToIgnore, this.settings.unresolvedLinksFilesToIgnore);
            if (!utils.isValid())
                continue;
            var _loop_1 = function (link) {
                var linkFileType = link.substring(link.lastIndexOf(".") + 1);
                console.log(linkFileType);
                if (this_1.settings.unresolvedLinksFileTypesToIgnore.contains(linkFileType))
                    return "continue";
                var formattedFilePath = filePath;
                if (fileType == "md") {
                    formattedFilePath = filePath.substring(0, filePath.lastIndexOf(".md"));
                }
                var unresolvedLink = { files: [formattedFilePath], link: link };
                if (links.contains(unresolvedLink))
                    return "continue";
                var duplication = links.find(function (e) { return e.link == link; });
                if (duplication) {
                    duplication.files.push(formattedFilePath);
                }
                else {
                    links.push(unresolvedLink);
                }
            };
            var this_1 = this;
            for (var link in unresolvedLinks[filePath]) {
                _loop_1(link);
            }
        }
        Utils.writeAndOpenFile(this.app, outFileName, __spreadArray([
            "Don't forget that creating the file from here may create the file in the wrong directory!"
        ], links.map(function (e) { return "- [[" + e.link + "]] in [[" + e.files.join("]], [[") + "]]"; })).join("\n"));
    };
    /**
     * Checks if the given file in an unlinked file
     *
     * @param file file to check
     * @param links all links in the vault
     */
    FindUnlinkedFilesPlugin.prototype.isValid = function (file, links) {
        if (links.contains(file.path))
            return false;
        //filetypes to ignore by default
        if (file.extension == "css")
            return false;
        if (this.settings.fileTypesToIgnore[0] !== "") {
            var containsFileType = this.settings.fileTypesToIgnore.contains(file.extension);
            if (this.settings.ignoreFileTypes) {
                if (containsFileType)
                    return;
            }
            else {
                if (!containsFileType)
                    return;
            }
        }
        var utils = new Utils(this.app, file.path, this.settings.tagsToIgnore, this.settings.linksToIgnore, this.settings.directoriesToIgnore, this.settings.filesToIgnore, this.settings.ignoreDirectories);
        if (!utils.isValid())
            return false;
        return true;
    };
    FindUnlinkedFilesPlugin.prototype.onunload = function () {
        console.log('unloading ' + this.manifest.name + " plugin");
    };
    FindUnlinkedFilesPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    FindUnlinkedFilesPlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return FindUnlinkedFilesPlugin;
}(obsidian.Plugin));

module.exports = FindUnlinkedFilesPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9kZWxldGVGaWxlc01vZGFsLnRzIiwic3JjL3NldHRpbmdzVGFiLnRzIiwic3JjL3V0aWxzLnRzIiwic3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7IEFwcCwgTW9kYWwsIFRGaWxlIH0gZnJvbSAnb2JzaWRpYW4nO1xuXG5leHBvcnQgY2xhc3MgRGVsZXRlRmlsZXNNb2RhbCBleHRlbmRzIE1vZGFsIHtcblx0ZmlsZXNUb0RlbGV0ZTogVEZpbGVbXTtcblx0Y29uc3RydWN0b3IoYXBwOiBBcHAsIGZpbGVzVG9EZWxldGU6IFRGaWxlW10pIHtcblx0XHRzdXBlcihhcHApO1xuXHRcdHRoaXMuZmlsZXNUb0RlbGV0ZSA9IGZpbGVzVG9EZWxldGU7XG5cdH1cblxuXHRvbk9wZW4oKSB7XG5cdFx0bGV0IHsgY29udGVudEVsLCB0aXRsZUVsIH0gPSB0aGlzO1xuXHRcdHRpdGxlRWwuc2V0VGV4dCgnTW92ZSAnICsgdGhpcy5maWxlc1RvRGVsZXRlLmxlbmd0aCArICcgZmlsZXMgdG8gc3lzdGVtIHRyYXNoPycpO1xuXHRcdGNvbnRlbnRFbFxuXHRcdFx0LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJDYW5jZWxcIiB9KVxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNsb3NlKCkpO1xuXHRcdGNvbnRlbnRFbFxuXHRcdFx0LnNldEF0dHIoXCJtYXJnaW5cIiwgXCJhdXRvXCIpO1xuXG5cdFx0Y29udGVudEVsXG5cdFx0XHQuY3JlYXRlRWwoXCJidXR0b25cIixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNsczogXCJtb2QtY3RhXCIsXG5cdFx0XHRcdFx0dGV4dDogXCJDb25maXJtXCJcblx0XHRcdFx0fSlcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGZpbGUgb2YgdGhpcy5maWxlc1RvRGVsZXRlKSB7XG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5hcHAudmF1bHQudHJhc2goZmlsZSwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdFx0fSk7XG5cblx0fVxuXG5cdG9uQ2xvc2UoKSB7XG5cdFx0bGV0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuXHRcdGNvbnRlbnRFbC5lbXB0eSgpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBBcHAsIG5vcm1hbGl6ZVBhdGgsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgRmluZFVubGlua2VkRmlsZXNQbHVnaW4sIHsgU2V0dGluZ3MgfSBmcm9tICcuL21haW4nO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgICBwbHVnaW46IEZpbmRVbmxpbmtlZEZpbGVzUGx1Z2luO1xuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IEZpbmRVbmxpbmtlZEZpbGVzUGx1Z2luLCBwcml2YXRlIGRlZmF1bHRTZXR0aW5nczogU2V0dGluZ3MpIHtcbiAgICAgICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB9XG4gICAgZm9ybWF0UGF0aChwYXRoOiBzdHJpbmcsIGFkZERpcmVjdG9yeVNsYXNoOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09IDApXG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgcGF0aCA9IG5vcm1hbGl6ZVBhdGgocGF0aCk7XG4gICAgICAgIGlmIChhZGREaXJlY3RvcnlTbGFzaClcbiAgICAgICAgICAgIHJldHVybiBwYXRoICsgXCIvXCI7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgICAgIGxldCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgICAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuICAgICAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgyXCIsIHsgdGV4dDogdGhpcy5wbHVnaW4ubWFuaWZlc3QubmFtZSB9KTtcblxuICAgICAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImg0XCIsIHsgdGV4dDogXCJTZXR0aW5ncyBmb3IgZmluZCB1bmxpbmtlZCBmaWxlc1wiIH0pO1xuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKCdPdXRwdXQgZmlsZSBuYW1lJylcbiAgICAgICAgICAgIC5zZXREZXNjKCdTZXQgbmFtZSBvZiBvdXRwdXQgZmlsZSAod2l0aG91dCBmaWxlIGV4dGVuc2lvbikuIE1ha2Ugc3VyZSBubyBmaWxlIGV4aXN0cyB3aXRoIHRoaXMgbmFtZSBiZWNhdXNlIGl0IHdpbGwgYmUgb3ZlcndyaXR0ZW4hIElmIHRoZSBuYW1lIGlzIGVtcHR5LCB0aGUgZGVmYXVsdCBuYW1lIGlzIHNldC4nKVxuICAgICAgICAgICAgLmFkZFRleHQoY2IgPT4gY2Iub25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5vdXRwdXRGaWxlTmFtZSA9IHRoaXMuZGVmYXVsdFNldHRpbmdzLm91dHB1dEZpbGVOYW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm91dHB1dEZpbGVOYW1lID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSkuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Mub3V0cHV0RmlsZU5hbWUpKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKCdEaXNhYmxlIHdvcmtpbmcgbGlua3MnKVxuICAgICAgICAgICAgLnNldERlc2MoJ0luZGVudCBsaW5lcyB0byBkaXNhYmxlIHRoZSBsaW5rIGFuZCB0byBjbGVhbiB1cCB0aGUgZ3JhcGggdmlldycpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKGNiID0+IGNiLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kaXNhYmxlV29ya2luZ0xpbmtzID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmRpc2FibGVXb3JraW5nTGlua3MpKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiSWdub3JlIG9yIGluY2x1ZGUgZmlsZXMgaW4gdGhlIGdpdmVuIGRpcmVjdG9yaWVzXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIkVuYWJsZSB0byBpZ25vcmUgZmlsZXMgaW4gdGhlIGdpdmVuIGRpcmVjdG9yaWVzLiBEaXNhYmxlIHRvIG9ubHkgaW5jbHVkZSBmaWxlcyBpbiB0aGUgZ2l2ZW4gZmlsZXR5cGVzXCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKGNiID0+XG4gICAgICAgICAgICAgICAgY2Iuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuaWdub3JlRGlyZWN0b3JpZXMpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5pZ25vcmVEaXJlY3RvcmllcyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiRGlyZWN0b3JpZXNcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFwiQWRkIGVhY2ggZGlyZWN0b3J5IHBhdGggaW4gYSBuZXcgbGluZVwiKVxuICAgICAgICAgICAgLmFkZFRleHRBcmVhKGNiID0+IGNiXG4gICAgICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiRGlyZWN0b3J5L1N1YmRpcmVjdG9yeVwiKVxuICAgICAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kaXJlY3Rvcmllc1RvSWdub3JlLmpvaW4oXCJcXG5cIikpXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGF0aHMgPSB2YWx1ZS50cmltKCkuc3BsaXQoXCJcXG5cIikubWFwKHZhbHVlID0+IHRoaXMuZm9ybWF0UGF0aCh2YWx1ZSwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kaXJlY3Rvcmllc1RvSWdub3JlID0gcGF0aHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIkZpbGVzIHRvIGlnbm9yZS5cIilcbiAgICAgICAgICAgIC5zZXREZXNjKFwiQWRkIGVhY2ggZmlsZSBwYXRoIGluIGEgbmV3IGxpbmUgKHdpdGggZmlsZSBleHRlbnNpb24hKVwiKVxuICAgICAgICAgICAgLmFkZFRleHRBcmVhKGNiID0+IGNiXG4gICAgICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiRGlyZWN0b3J5L2ZpbGUubWRcIilcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZmlsZXNUb0lnbm9yZS5qb2luKFwiXFxuXCIpKVxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhdGhzID0gdmFsdWUudHJpbSgpLnNwbGl0KFwiXFxuXCIpLm1hcCh2YWx1ZSA9PiB0aGlzLmZvcm1hdFBhdGgodmFsdWUsIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmZpbGVzVG9JZ25vcmUgPSBwYXRocztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiTGlua3MgdG8gaWdub3JlLlwiKVxuICAgICAgICAgICAgLnNldERlc2MoXCJJZ25vcmUgZmlsZXMsIHdoaWNoIGNvbnRhaW4gdGhlIGdpdmVuIGZpbGUgYXMgbGluay4gQWRkIGVhY2ggZmlsZSBwYXRoIGluIGEgbmV3IGxpbmUgKHdpdGggZmlsZSBleHRlbnNpb24hKS4gU2V0IGl0IHRvIGAqYCB0byBpZ25vcmUgZmlsZXMgd2l0aCBsaW5rcy5cIilcbiAgICAgICAgICAgIC5hZGRUZXh0QXJlYShjYiA9PiBjYlxuICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIkRpcmVjdG9yeS9maWxlLm1kXCIpXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmxpbmtzVG9JZ25vcmUuam9pbihcIlxcblwiKSlcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXRocyA9IHZhbHVlLnRyaW0oKS5zcGxpdChcIlxcblwiKS5tYXAodmFsdWUgPT4gdGhpcy5mb3JtYXRQYXRoKHZhbHVlLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5saW5rc1RvSWdub3JlID0gcGF0aHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIklnbm9yZSBvciBpbmNsdWRlIGZpbGVzIHdpdGggdGhlIGdpdmVuIGZpbGV0eXBlc1wiKVxuICAgICAgICAgICAgLnNldERlc2MoXCJFbmFibGUgdG8gaWdub3JlIGZpbGVzIHdpdGggdGhlIGdpdmVuIGZpbGV0eXBlcy4gRGlzYWJsZSB0byBvbmx5IGluY2x1ZGUgZmlsZXMgd2l0aCB0aGUgZ2l2ZW4gZmlsZXR5cGVzXCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKGNiID0+XG4gICAgICAgICAgICAgICAgY2Iuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuaWdub3JlRmlsZVR5cGVzKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaWdub3JlRmlsZVR5cGVzID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiRmlsZSB0eXBlc1wiKVxuICAgICAgICAgICAgLnNldERlc2MoXCJFZmZlY3QgZGVwZW5kcyBvbiB0b2dnbGUgYWJvdmVcIilcbiAgICAgICAgICAgIC5hZGRUZXh0QXJlYShjYiA9PiBjYlxuICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcImRvY3gsdHh0XCIpXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmZpbGVUeXBlc1RvSWdub3JlLmpvaW4oXCIsXCIpKVxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4dGVuc2lvbnMgPSB2YWx1ZS50cmltKCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5maWxlVHlwZXNUb0lnbm9yZSA9IGV4dGVuc2lvbnM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIlRhZ3MgdG8gaWdub3JlLlwiKVxuICAgICAgICAgICAgLnNldERlc2MoXCJJZ25vcmUgZmlsZXMsIHdoaWNoIGNvbnRhaW4gdGhlIGdpdmVuIHRhZy4gQWRkIGVhY2ggdGFnIHNlcGFyYXRlZCBieSBjb21tYSAod2l0aG91dCBgI2ApXCIpXG4gICAgICAgICAgICAuYWRkVGV4dEFyZWEoY2IgPT4gY2JcbiAgICAgICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJ0b2RvLHVuZmluaXNoZWRcIilcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudGFnc1RvSWdub3JlLmpvaW4oXCIsXCIpKVxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZ3MgPSB2YWx1ZS50cmltKCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50YWdzVG9JZ25vcmUgPSB0YWdzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJGaWxldHlwZXMgdG8gZGVsZXRlIHBlciBjb21tYW5kLiBTZWUgUkVBRE1FLlwiKVxuICAgICAgICAgICAgLnNldERlc2MoXCJBZGQgZWFjaCBmaWxldHlwZSBzZXBhcmF0ZWQgYnkgY29tbWEuIFwiKVxuICAgICAgICAgICAgLmFkZFRleHRBcmVhKGNiID0+IGNiXG4gICAgICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwianBnLHBuZ1wiKVxuICAgICAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5maWxlVHlwZXNUb0RlbGV0ZS5qb2luKFwiLFwiKSlcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBleHRlbnNpb25zID0gdmFsdWUudHJpbSgpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZmlsZVR5cGVzVG9EZWxldGUgPSBleHRlbnNpb25zO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG5cblxuICAgICAgICAvLy8gU2V0dGluZ3MgZm9yIGZpbmQgdW5yZXNvbHZlZExpbmtzXG4gICAgICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDRcIiwgeyB0ZXh0OiBcIlNldHRpbmdzIGZvciBmaW5kIHVucmVzb2x2ZWQgbGlua3NcIiB9KTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKCdPdXRwdXQgZmlsZSBuYW1lJylcbiAgICAgICAgICAgIC5zZXREZXNjKCdTZXQgbmFtZSBvZiBvdXRwdXQgZmlsZSAod2l0aG91dCBmaWxlIGV4dGVuc2lvbikuIE1ha2Ugc3VyZSBubyBmaWxlIGV4aXN0cyB3aXRoIHRoaXMgbmFtZSBiZWNhdXNlIGl0IHdpbGwgYmUgb3ZlcndyaXR0ZW4hIElmIHRoZSBuYW1lIGlzIGVtcHR5LCB0aGUgZGVmYXVsdCBuYW1lIGlzIHNldC4nKVxuICAgICAgICAgICAgLmFkZFRleHQoY2IgPT4gY2Iub25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy51bnJlc29sdmVkTGlua3NPdXRwdXRGaWxlTmFtZSA9IHRoaXMuZGVmYXVsdFNldHRpbmdzLnVucmVzb2x2ZWRMaW5rc091dHB1dEZpbGVOYW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnVucmVzb2x2ZWRMaW5rc091dHB1dEZpbGVOYW1lID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSkuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudW5yZXNvbHZlZExpbmtzT3V0cHV0RmlsZU5hbWUpKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiRGlyZWN0b3JpZXMgdG8gaWdub3JlLlwiKVxuICAgICAgICAgICAgLnNldERlc2MoXCJJZ25vcmUgbGlua3MgaW4gZmlsZXMgaW4gdGhlIHNwZWNpZmllZCBkaXJlY3RvcnkuIEFkZCBlYWNoIGRpcmVjdG9yeSBwYXRoIGluIGEgbmV3IGxpbmVcIilcbiAgICAgICAgICAgIC5hZGRUZXh0QXJlYShjYiA9PiBjYlxuICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIkRpcmVjdG9yeS9TdWJkaXJlY3RvcnlcIilcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudW5yZXNvbHZlZExpbmtzRGlyZWN0b3JpZXNUb0lnbm9yZS5qb2luKFwiXFxuXCIpKVxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhdGhzID0gdmFsdWUudHJpbSgpLnNwbGl0KFwiXFxuXCIpLm1hcCh2YWx1ZSA9PiB0aGlzLmZvcm1hdFBhdGgodmFsdWUsIHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudW5yZXNvbHZlZExpbmtzRGlyZWN0b3JpZXNUb0lnbm9yZSA9IHBhdGhzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJGaWxlcyB0byBpZ25vcmUuXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIklnbm9yZSBsaW5rcyBpbiB0aGUgc3BlY2lmaWVkIGZpbGUuIEFkZCBlYWNoIGZpbGUgcGF0aCBpbiBhIG5ldyBsaW5lICh3aXRoIGZpbGUgZXh0ZW5zaW9uISlcIilcbiAgICAgICAgICAgIC5hZGRUZXh0QXJlYShjYiA9PiBjYlxuICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIkRpcmVjdG9yeS9maWxlLm1kXCIpXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnVucmVzb2x2ZWRMaW5rc0ZpbGVzVG9JZ25vcmUuam9pbihcIlxcblwiKSlcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXRocyA9IHZhbHVlLnRyaW0oKS5zcGxpdChcIlxcblwiKS5tYXAodmFsdWUgPT4gdGhpcy5mb3JtYXRQYXRoKHZhbHVlLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy51bnJlc29sdmVkTGlua3NGaWxlc1RvSWdub3JlID0gcGF0aHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIkxpbmtzIHRvIGlnbm9yZS5cIilcbiAgICAgICAgICAgIC5zZXREZXNjKFwiSWdub3JlIGZpbGVzLCB3aGljaCBjb250YWluIHRoZSBnaXZlbiBmaWxlIGFzIGxpbmsuIEFkZCBlYWNoIGZpbGUgcGF0aCBpbiBhIG5ldyBsaW5lICh3aXRoIGZpbGUgZXh0ZW5zaW9uISkuIFNldCBpdCB0byBgKmAgdG8gaWdub3JlIGZpbGVzIHdpdGggbGlua3MuXCIpXG4gICAgICAgICAgICAuYWRkVGV4dEFyZWEoY2IgPT4gY2JcbiAgICAgICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJEaXJlY3RvcnkvZmlsZS5tZFwiKVxuICAgICAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy51bnJlc29sdmVkTGlua3NMaW5rc1RvSWdub3JlLmpvaW4oXCJcXG5cIikpXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGF0aHMgPSB2YWx1ZS50cmltKCkuc3BsaXQoXCJcXG5cIikubWFwKHZhbHVlID0+IHRoaXMuZm9ybWF0UGF0aCh2YWx1ZSwgZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudW5yZXNvbHZlZExpbmtzTGlua3NUb0lnbm9yZSA9IHBhdGhzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJGaWxldHlwZXMgdG8gaWdub3JlLlwiKVxuICAgICAgICAgICAgLnNldERlc2MoXCJJZ25vcmUgbGlua3Mgd2l0aCB0aGUgc3BlY2lmaWVkIGZpbGV0eXBlLiBBZGQgZWFjaCBmaWxldHlwZSBzZXBhcmF0ZWQgYnkgY29tbWFcIilcbiAgICAgICAgICAgIC5hZGRUZXh0QXJlYShjYiA9PiBjYlxuICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcImRvY3gsdHh0XCIpXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnVucmVzb2x2ZWRMaW5rc0ZpbGVUeXBlc1RvSWdub3JlLmpvaW4oXCIsXCIpKVxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4dGVuc2lvbnMgPSB2YWx1ZS50cmltKCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy51bnJlc29sdmVkTGlua3NGaWxlVHlwZXNUb0lnbm9yZSA9IGV4dGVuc2lvbnM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIlRhZ3MgdG8gaWdub3JlLlwiKVxuICAgICAgICAgICAgLnNldERlc2MoXCJJZ25vcmUgbGlua3MgaW4gZmlsZXMsIHdoaWNoIGNvbnRhaW4gdGhlIGdpdmVuIHRhZy4gQWRkIGVhY2ggdGFnIHNlcGFyYXRlZCBieSBjb21tYSAod2l0aG91dCBgI2ApXCIpXG4gICAgICAgICAgICAuYWRkVGV4dEFyZWEoY2IgPT4gY2JcbiAgICAgICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJ0b2RvLHVuZmluaXNoZWRcIilcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudW5yZXNvbHZlZExpbmtzVGFnc1RvSWdub3JlLmpvaW4oXCIsXCIpKVxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZ3MgPSB2YWx1ZS50cmltKCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy51bnJlc29sdmVkTGlua3NUYWdzVG9JZ25vcmUgPSB0YWdzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQXBwLCBDYWNoZWRNZXRhZGF0YSwgZ2V0QWxsVGFncywgaXRlcmF0ZUNhY2hlUmVmcyB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuICAgIHByaXZhdGUgZmlsZUNhY2hlOiBDYWNoZWRNZXRhZGF0YTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBmb3IgdGhlIGdpdmVuIHNldHRpbmdzLiBJcyB1c2VkIGZvciBgRmluZCB1bmxpbmtlZCBmaWxlc2AgYW5kIGBGaW5kIHVucmVzb2x2ZWQgbGlua3NgXG4gICAgICogQHBhcmFtIGFwcCBcbiAgICAgKiBAcGFyYW0gZmlsZVBhdGggXG4gICAgICogQHBhcmFtIHRhZ3NUb0lnbm9yZSBcbiAgICAgKiBAcGFyYW0gbGlua3NUb0lnbm9yZSBcbiAgICAgKiBAcGFyYW0gZGlyZWN0b3JpZXNUb0lnbm9yZSBcbiAgICAgKiBAcGFyYW0gZmlsZXNUb0lnbm9yZSBcbiAgICAgKiBAcGFyYW0gaWdub3JlRGlyZWN0b3JpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhcHA6IEFwcCxcbiAgICAgICAgcHJpdmF0ZSBmaWxlUGF0aDogc3RyaW5nLFxuICAgICAgICBwcml2YXRlIHRhZ3NUb0lnbm9yZTogc3RyaW5nW10sXG4gICAgICAgIHByaXZhdGUgbGlua3NUb0lnbm9yZTogc3RyaW5nW10sXG4gICAgICAgIHByaXZhdGUgZGlyZWN0b3JpZXNUb0lnbm9yZTogc3RyaW5nW10sXG4gICAgICAgIHByaXZhdGUgZmlsZXNUb0lnbm9yZTogc3RyaW5nW10sXG4gICAgICAgIHByaXZhdGUgaWdub3JlRGlyZWN0b3JpZXM6IGJvb2xlYW4gPSB0cnVlLFxuICAgICkge1xuICAgICAgICB0aGlzLmZpbGVDYWNoZSA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldENhY2hlKGZpbGVQYXRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhc1RhZ3NUb0lnbm9yZSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGFncyA9IGdldEFsbFRhZ3ModGhpcy5maWxlQ2FjaGUpO1xuICAgICAgICByZXR1cm4gdGFncz8uZmluZCgodGFnKSA9PiB0aGlzLnRhZ3NUb0lnbm9yZS5jb250YWlucyh0YWcuc3Vic3RyaW5nKDEpKSkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcHJpdmF0ZSBoYXNMaW5rc1RvSWdub3JlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoKHRoaXMuZmlsZUNhY2hlPy5lbWJlZHMgIT0gbnVsbCB8fCB0aGlzLmZpbGVDYWNoZT8ubGlua3MgIT0gbnVsbCkgJiYgdGhpcy5saW5rc1RvSWdub3JlWzBdID09IFwiKlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVyYXRlQ2FjaGVSZWZzKHRoaXMuZmlsZUNhY2hlLCBjYiA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaXJzdExpbmtwYXRoRGVzdChjYi5saW5rLCB0aGlzLmZpbGVQYXRoKT8ucGF0aDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtzVG9JZ25vcmUuY29udGFpbnMobGluayk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tEaXJlY3RvcnkoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5zID0gdGhpcy5kaXJlY3Rvcmllc1RvSWdub3JlLmZpbmQoKHZhbHVlKSA9PiB0aGlzLmZpbGVQYXRoLnN0YXJ0c1dpdGgodmFsdWUpICYmIHZhbHVlLmxlbmd0aCAhPSAwKSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodGhpcy5pZ25vcmVEaXJlY3Rvcmllcykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICFjb250YWlucztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNGaWxlVG9JZ25vcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzVG9JZ25vcmUuY29udGFpbnModGhpcy5maWxlUGF0aCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzVmFsaWQoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5oYXNUYWdzVG9JZ25vcmUoKSAmJiAhdGhpcy5oYXNMaW5rc1RvSWdub3JlKCkgJiYgIXRoaXMuY2hlY2tEaXJlY3RvcnkoKSAmJiAhdGhpcy5pc0ZpbGVUb0lnbm9yZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgdGV4dCB0byB0aGUgZmlsZSBhbmQgb3BlbnMgdGhlIGZpbGUgaW4gYSBuZXcgcGFuZSBpZiBpdCBpcyBub3Qgb3BlbmVkIHlldFxuICAgICAqIEBwYXJhbSBhcHAgXG4gICAgICogQHBhcmFtIG91dHB1dEZpbGVOYW1lIG5hbWUgb2YgdGhlIG91dHB1dCBmaWxlXG4gICAgICogQHBhcmFtIHRleHQgZGF0YSB0byBiZSB3cml0dGVuIHRvIHRoZSBmaWxlXG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIHdyaXRlQW5kT3BlbkZpbGUoYXBwOiBBcHAsIG91dHB1dEZpbGVOYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZykge1xuICAgICAgICBhd2FpdCBhcHAudmF1bHQuYWRhcHRlci53cml0ZShvdXRwdXRGaWxlTmFtZSwgdGV4dCk7XG5cbiAgICAgICAgbGV0IGZpbGVJc0FscmVhZHlPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgYXBwLndvcmtzcGFjZS5pdGVyYXRlQWxsTGVhdmVzKGxlYWYgPT4ge1xuICAgICAgICAgICAgaWYgKGxlYWYuZ2V0RGlzcGxheVRleHQoKSAhPSBcIlwiICYmIG91dHB1dEZpbGVOYW1lLnN0YXJ0c1dpdGgobGVhZi5nZXREaXNwbGF5VGV4dCgpKSkge1xuICAgICAgICAgICAgICAgIGZpbGVJc0FscmVhZHlPcGVuZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFmaWxlSXNBbHJlYWR5T3BlbmVkKVxuICAgICAgICAgICAgYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQob3V0cHV0RmlsZU5hbWUsIFwiL1wiLCB0cnVlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgZ2V0TGlua3BhdGgsIGl0ZXJhdGVDYWNoZVJlZnMsIFBsdWdpbiwgVEZpbGUgfSBmcm9tICdvYnNpZGlhbic7XHJcbmltcG9ydCB7IERlbGV0ZUZpbGVzTW9kYWwgfSBmcm9tICcuL2RlbGV0ZUZpbGVzTW9kYWwnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1RhYiB9IGZyb20gJy4vc2V0dGluZ3NUYWInO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5ncyB7XHJcblx0b3V0cHV0RmlsZU5hbWU6IHN0cmluZztcclxuXHRkaXNhYmxlV29ya2luZ0xpbmtzOiBib29sZWFuO1xyXG5cdGRpcmVjdG9yaWVzVG9JZ25vcmU6IHN0cmluZ1tdO1xyXG5cdGZpbGVzVG9JZ25vcmU6IHN0cmluZ1tdO1xyXG5cdGZpbGVUeXBlc1RvSWdub3JlOiBzdHJpbmdbXTtcclxuXHRsaW5rc1RvSWdub3JlOiBzdHJpbmdbXTtcclxuXHR0YWdzVG9JZ25vcmU6IHN0cmluZ1tdO1xyXG5cdGZpbGVUeXBlc1RvRGVsZXRlOiBzdHJpbmdbXTtcclxuXHRpZ25vcmVGaWxlVHlwZXM6IGJvb2xlYW47XHJcblx0aWdub3JlRGlyZWN0b3JpZXM6IGJvb2xlYW47XHJcblx0dW5yZXNvbHZlZExpbmtzRGlyZWN0b3JpZXNUb0lnbm9yZTogc3RyaW5nW107XHJcblx0dW5yZXNvbHZlZExpbmtzRmlsZXNUb0lnbm9yZTogc3RyaW5nW107XHJcblx0dW5yZXNvbHZlZExpbmtzRmlsZVR5cGVzVG9JZ25vcmU6IHN0cmluZ1tdO1xyXG5cdHVucmVzb2x2ZWRMaW5rc0xpbmtzVG9JZ25vcmU6IHN0cmluZ1tdO1xyXG5cdHVucmVzb2x2ZWRMaW5rc1RhZ3NUb0lnbm9yZTogc3RyaW5nW107XHJcblx0dW5yZXNvbHZlZExpbmtzT3V0cHV0RmlsZU5hbWU6IHN0cmluZztcclxufVxyXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBTZXR0aW5ncyA9IHtcclxuXHRvdXRwdXRGaWxlTmFtZTogXCJ1bmxpbmtlZCBmaWxlcyBvdXRwdXRcIixcclxuXHRkaXNhYmxlV29ya2luZ0xpbmtzOiBmYWxzZSxcclxuXHRkaXJlY3Rvcmllc1RvSWdub3JlOiBbXSxcclxuXHRmaWxlc1RvSWdub3JlOiBbXSxcclxuXHRmaWxlVHlwZXNUb0lnbm9yZTogW10sXHJcblx0bGlua3NUb0lnbm9yZTogW10sXHJcblx0dGFnc1RvSWdub3JlOiBbXSxcclxuXHRmaWxlVHlwZXNUb0RlbGV0ZTogW10sXHJcblx0aWdub3JlRmlsZVR5cGVzOiB0cnVlLFxyXG5cdGlnbm9yZURpcmVjdG9yaWVzOiB0cnVlLFxyXG5cdHVucmVzb2x2ZWRMaW5rc091dHB1dEZpbGVOYW1lOiBcInVucmVzb2x2ZWQgbGlua3Mgb3V0cHV0XCIsXHJcblx0dW5yZXNvbHZlZExpbmtzRGlyZWN0b3JpZXNUb0lnbm9yZTogW10sXHJcblx0dW5yZXNvbHZlZExpbmtzRmlsZXNUb0lnbm9yZTogW10sXHJcblx0dW5yZXNvbHZlZExpbmtzRmlsZVR5cGVzVG9JZ25vcmU6IFtdLFxyXG5cdHVucmVzb2x2ZWRMaW5rc0xpbmtzVG9JZ25vcmU6IFtdLFxyXG5cdHVucmVzb2x2ZWRMaW5rc1RhZ3NUb0lnbm9yZTogW10sXHJcbn07XHJcbmludGVyZmFjZSBVbnJlc29sdmVkTGluayB7XHJcblx0bGluazogc3RyaW5nO1xyXG5cdGZpbGVzOiBzdHJpbmdbXTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaW5kVW5saW5rZWRGaWxlc1BsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcblx0c2V0dGluZ3M6IFNldHRpbmdzO1xyXG5cdGFzeW5jIG9ubG9hZCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdsb2FkaW5nICcgKyB0aGlzLm1hbmlmZXN0Lm5hbWUgKyBcIiBwbHVnaW5cIik7XHJcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6ICdmaW5kLXVubGlua2VkLWZpbGVzJyxcclxuXHRcdFx0bmFtZTogJ0ZpbmQgdW5saW5rZWQgZmlsZXMnLFxyXG5cdFx0XHRjYWxsYmFjazogKCkgPT4gdGhpcy5maW5kVW5saW5rZWRGaWxlcygpLFxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ2ZpbmQtdW5yZXNvbHZlZC1saW5rJyxcclxuXHRcdFx0bmFtZTogJ0ZpbmQgdW5yZXNvbHZlZCBsaW5rcycsXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB0aGlzLmZpbmRVbnJlc29sdmVkTGlua3MoKSxcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6IFwiZGVsZXRlLXVubGlua2VkLWZpbGVzXCIsXHJcblx0XHRcdG5hbWU6IFwiRGVsZXRlIHVubGlua2VkIGZpbGVzIHdpdGggY2VydGFpbiBleHRlbnNpb24uIFNlZSBSRUFETUVcIixcclxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHRoaXMuZGVsZXRlVW5saW5rZWRGaWxlcygpXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgU2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMsIERFRkFVTFRfU0VUVElOR1MpKTtcclxuXHR9XHJcblx0ZmluZFVubGlua2VkRmlsZXMoKSB7XHJcblx0XHRjb25zdCBvdXRGaWxlTmFtZSA9IHRoaXMuc2V0dGluZ3Mub3V0cHV0RmlsZU5hbWUgKyBcIi5tZFwiO1xyXG5cdFx0bGV0IG91dEZpbGU6IFRGaWxlO1xyXG5cdFx0Y29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRGaWxlcygpO1xyXG5cdFx0Y29uc3QgbWFya2Rvd25GaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcclxuXHRcdGxldCBsaW5rczogc3RyaW5nW10gPSBbXTtcclxuXHJcblx0XHRtYXJrZG93bkZpbGVzLmZvckVhY2goKG1hcmtGaWxlOiBURmlsZSkgPT4ge1xyXG5cdFx0XHRpZiAobWFya0ZpbGUucGF0aCA9PSBvdXRGaWxlTmFtZSkge1xyXG5cdFx0XHRcdG91dEZpbGUgPSBtYXJrRmlsZTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH0gaXRlcmF0ZUNhY2hlUmVmcyh0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShtYXJrRmlsZSksIGNiID0+IHtcclxuXHRcdFx0XHRsZXQgdHh0ID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaXJzdExpbmtwYXRoRGVzdChnZXRMaW5rcGF0aChjYi5saW5rKSwgbWFya0ZpbGUucGF0aCk7XHJcblx0XHRcdFx0aWYgKHR4dCAhPSBudWxsKVxyXG5cdFx0XHRcdFx0bGlua3MucHVzaCh0eHQucGF0aCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBub3RMaW5rZWRGaWxlcyA9IGZpbGVzLmZpbHRlcigoZmlsZSkgPT4gdGhpcy5pc1ZhbGlkKGZpbGUsIGxpbmtzKSk7XHJcblx0XHRub3RMaW5rZWRGaWxlcy5yZW1vdmUob3V0RmlsZSk7XHJcblxyXG5cclxuXHRcdGxldCB0ZXh0ID0gXCJcIjtcclxuXHRcdGxldCBwcmVmaXg6IHN0cmluZztcclxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmRpc2FibGVXb3JraW5nTGlua3MpXHJcblx0XHRcdHByZWZpeCA9IFwiXHRcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cHJlZml4ID0gXCJcIjtcclxuXHRcdG5vdExpbmtlZEZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcclxuXHRcdFx0dGV4dCArPSBwcmVmaXggKyBcIi0gW1tcIiArIHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZmlsZVRvTGlua3RleHQoZmlsZSwgXCIvXCIpICsgXCJdXVxcblwiO1xyXG5cdFx0fSk7XHJcblx0XHRVdGlscy53cml0ZUFuZE9wZW5GaWxlKHRoaXMuYXBwLCBvdXRGaWxlTmFtZSwgdGV4dCk7XHJcblxyXG5cdH1cclxuXHRkZWxldGVVbmxpbmtlZEZpbGVzKCkge1xyXG5cdFx0Y29uc3QgbGlua3MgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldENhY2hlKHRoaXMuc2V0dGluZ3Mub3V0cHV0RmlsZU5hbWUgKyBcIi5tZFwiKT8ubGlua3MgPz8gW107XHJcblx0XHRjb25zdCBmaWxlc1RvRGVsZXRlOiBURmlsZVtdID0gW107XHJcblx0XHRsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcblx0XHRcdGNvbnN0IGZpbGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpcnN0TGlua3BhdGhEZXN0KGxpbmsubGluaywgXCIvXCIpO1xyXG5cdFx0XHRpZiAoIWZpbGUpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5maWxlVHlwZXNUb0RlbGV0ZS5jb250YWlucyhmaWxlLmV4dGVuc2lvbikpIHtcclxuXHRcdFx0XHRmaWxlc1RvRGVsZXRlLnB1c2goZmlsZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0aWYgKGZpbGVzVG9EZWxldGUubGVuZ3RoID4gMClcclxuXHRcdFx0bmV3IERlbGV0ZUZpbGVzTW9kYWwodGhpcy5hcHAsIGZpbGVzVG9EZWxldGUpLm9wZW4oKTtcclxuXHR9XHJcblx0ZmluZFVucmVzb2x2ZWRMaW5rcygpIHtcclxuXHRcdGNvbnN0IG91dEZpbGVOYW1lID0gdGhpcy5zZXR0aW5ncy51bnJlc29sdmVkTGlua3NPdXRwdXRGaWxlTmFtZSArIFwiLm1kXCI7XHJcblx0XHRjb25zdCBsaW5rczogVW5yZXNvbHZlZExpbmtbXSA9IFtdO1xyXG5cdFx0Y29uc3QgdW5yZXNvbHZlZExpbmtzID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS51bnJlc29sdmVkTGlua3M7XHJcblxyXG5cdFx0Zm9yIChsZXQgZmlsZVBhdGggaW4gdW5yZXNvbHZlZExpbmtzKSB7XHJcblx0XHRcdGlmIChmaWxlUGF0aCA9PSB0aGlzLnNldHRpbmdzLnVucmVzb2x2ZWRMaW5rc091dHB1dEZpbGVOYW1lICsgXCIubWRcIikgY29udGludWU7XHJcblxyXG5cdFx0XHRjb25zdCBmaWxlVHlwZSA9IGZpbGVQYXRoLnN1YnN0cmluZyhmaWxlUGF0aC5sYXN0SW5kZXhPZihcIi5cIikgKyAxKTtcclxuXHJcblx0XHRcdGNvbnN0IHV0aWxzID0gbmV3IFV0aWxzKFxyXG5cdFx0XHRcdHRoaXMuYXBwLFxyXG5cdFx0XHRcdGZpbGVQYXRoLFxyXG5cdFx0XHRcdHRoaXMuc2V0dGluZ3MudW5yZXNvbHZlZExpbmtzVGFnc1RvSWdub3JlLFxyXG5cdFx0XHRcdHRoaXMuc2V0dGluZ3MudW5yZXNvbHZlZExpbmtzTGlua3NUb0lnbm9yZSxcclxuXHRcdFx0XHR0aGlzLnNldHRpbmdzLnVucmVzb2x2ZWRMaW5rc0RpcmVjdG9yaWVzVG9JZ25vcmUsXHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy51bnJlc29sdmVkTGlua3NGaWxlc1RvSWdub3JlXHJcblx0XHRcdCk7XHJcblx0XHRcdGlmICghdXRpbHMuaXNWYWxpZCgpKSBjb250aW51ZTtcclxuXHJcblx0XHRcdGZvciAoY29uc3QgbGluayBpbiB1bnJlc29sdmVkTGlua3NbZmlsZVBhdGhdKSB7XHJcblx0XHRcdFx0Y29uc3QgbGlua0ZpbGVUeXBlID0gbGluay5zdWJzdHJpbmcobGluay5sYXN0SW5kZXhPZihcIi5cIikgKyAxKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhsaW5rRmlsZVR5cGUpO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5zZXR0aW5ncy51bnJlc29sdmVkTGlua3NGaWxlVHlwZXNUb0lnbm9yZS5jb250YWlucyhsaW5rRmlsZVR5cGUpKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IGZvcm1hdHRlZEZpbGVQYXRoID0gZmlsZVBhdGg7XHJcblx0XHRcdFx0aWYgKGZpbGVUeXBlID09IFwibWRcIikge1xyXG5cdFx0XHRcdFx0Zm9ybWF0dGVkRmlsZVBhdGggPSBmaWxlUGF0aC5zdWJzdHJpbmcoMCwgZmlsZVBhdGgubGFzdEluZGV4T2YoXCIubWRcIikpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zdCB1bnJlc29sdmVkTGluazogVW5yZXNvbHZlZExpbmsgPSB7IGZpbGVzOiBbZm9ybWF0dGVkRmlsZVBhdGhdLCBsaW5rOiBsaW5rIH07XHJcblx0XHRcdFx0aWYgKGxpbmtzLmNvbnRhaW5zKHVucmVzb2x2ZWRMaW5rKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdGNvbnN0IGR1cGxpY2F0aW9uID0gbGlua3MuZmluZCgoZSkgPT4gZS5saW5rID09IGxpbmspO1xyXG5cdFx0XHRcdGlmIChkdXBsaWNhdGlvbikge1xyXG5cdFx0XHRcdFx0ZHVwbGljYXRpb24uZmlsZXMucHVzaChmb3JtYXR0ZWRGaWxlUGF0aCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxpbmtzLnB1c2godW5yZXNvbHZlZExpbmspO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0VXRpbHMud3JpdGVBbmRPcGVuRmlsZShcclxuXHRcdFx0dGhpcy5hcHAsXHJcblx0XHRcdG91dEZpbGVOYW1lLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJEb24ndCBmb3JnZXQgdGhhdCBjcmVhdGluZyB0aGUgZmlsZSBmcm9tIGhlcmUgbWF5IGNyZWF0ZSB0aGUgZmlsZSBpbiB0aGUgd3JvbmcgZGlyZWN0b3J5IVwiLFxyXG5cdFx0XHRcdC4uLmxpbmtzLm1hcCgoZSkgPT4gYC0gW1ske2UubGlua31dXSBpbiBbWyR7ZS5maWxlcy5qb2luKFwiXV0sIFtbXCIpfV1dYClcclxuXHRcdFx0XS5qb2luKFwiXFxuXCIpKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3MgaWYgdGhlIGdpdmVuIGZpbGUgaW4gYW4gdW5saW5rZWQgZmlsZVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBmaWxlIGZpbGUgdG8gY2hlY2tcclxuXHQgKiBAcGFyYW0gbGlua3MgYWxsIGxpbmtzIGluIHRoZSB2YXVsdFxyXG5cdCAqL1xyXG5cdGlzVmFsaWQoZmlsZTogVEZpbGUsIGxpbmtzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKGxpbmtzLmNvbnRhaW5zKGZpbGUucGF0aCkpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHQvL2ZpbGV0eXBlcyB0byBpZ25vcmUgYnkgZGVmYXVsdFxyXG5cdFx0aWYgKGZpbGUuZXh0ZW5zaW9uID09IFwiY3NzXCIpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5maWxlVHlwZXNUb0lnbm9yZVswXSAhPT0gXCJcIikge1xyXG5cdFx0XHRjb25zdCBjb250YWluc0ZpbGVUeXBlID0gdGhpcy5zZXR0aW5ncy5maWxlVHlwZXNUb0lnbm9yZS5jb250YWlucyhmaWxlLmV4dGVuc2lvbik7XHJcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmlnbm9yZUZpbGVUeXBlcykge1xyXG5cdFx0XHRcdGlmIChjb250YWluc0ZpbGVUeXBlKSByZXR1cm47XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKCFjb250YWluc0ZpbGVUeXBlKSByZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB1dGlscyA9IG5ldyBVdGlscyhcclxuXHRcdFx0dGhpcy5hcHAsXHJcblx0XHRcdGZpbGUucGF0aCxcclxuXHRcdFx0dGhpcy5zZXR0aW5ncy50YWdzVG9JZ25vcmUsXHJcblx0XHRcdHRoaXMuc2V0dGluZ3MubGlua3NUb0lnbm9yZSxcclxuXHRcdFx0dGhpcy5zZXR0aW5ncy5kaXJlY3Rvcmllc1RvSWdub3JlLFxyXG5cdFx0XHR0aGlzLnNldHRpbmdzLmZpbGVzVG9JZ25vcmUsXHJcblx0XHRcdHRoaXMuc2V0dGluZ3MuaWdub3JlRGlyZWN0b3JpZXNcclxuXHRcdCk7XHJcblx0XHRpZiAoIXV0aWxzLmlzVmFsaWQoKSlcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRvbnVubG9hZCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCd1bmxvYWRpbmcgJyArIHRoaXMubWFuaWZlc3QubmFtZSArIFwiIHBsdWdpblwiKTtcclxuXHR9XHJcblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJNb2RhbCIsIm5vcm1hbGl6ZVBhdGgiLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiIsImdldEFsbFRhZ3MiLCJpdGVyYXRlQ2FjaGVSZWZzIiwiZ2V0TGlua3BhdGgiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElB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
