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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class DecryptModal extends obsidian.Modal {
    constructor(app, title, text = '') {
        super(app);
        this.decryptInPlace = false;
        this.text = text;
        this.titleEl.innerText = title;
    }
    onOpen() {
        let { contentEl } = this;
        const textEl = contentEl.createDiv().createEl('textarea', { text: this.text });
        textEl.style.width = '100%';
        textEl.style.height = '100%';
        textEl.rows = 10;
        textEl.readOnly = true;
        //textEl.focus(); // Doesn't seem to work here...
        setImmediate(() => { textEl.focus(); }); //... but this does
        const btnContainerEl = contentEl.createDiv('');
        const decryptInPlaceBtnEl = btnContainerEl.createEl('button', { text: 'Decrypt in-place' });
        decryptInPlaceBtnEl.addEventListener('click', () => {
            this.decryptInPlace = true;
            this.close();
        });
        const cancelBtnEl = btnContainerEl.createEl('button', { text: 'Close' });
        cancelBtnEl.addEventListener('click', () => {
            this.close();
        });
    }
}

class PasswordModal extends obsidian.Modal {
    constructor(app, confirmPassword, defaultPassword = null) {
        super(app);
        this.password = null;
        this.defaultPassword = null;
        this.defaultPassword = defaultPassword;
        this.confirmPassword = confirmPassword;
    }
    onOpen() {
        var _a, _b;
        let { contentEl } = this;
        contentEl.empty();
        const pwInputEl = contentEl.createDiv()
            .createSpan({ text: '🔑 ' })
            .createEl('input', { type: 'password', value: (_a = this.defaultPassword) !== null && _a !== void 0 ? _a : '' });
        pwInputEl.placeholder = 'Enter your password';
        pwInputEl.style.width = '93%';
        pwInputEl.focus();
        const confirmPwContainerEl = contentEl.createDiv();
        const pwConfirmInputEl = confirmPwContainerEl
            .createSpan({ text: '🔑 ' })
            .createEl('input', { type: 'password', value: (_b = this.defaultPassword) !== null && _b !== void 0 ? _b : '' });
        pwConfirmInputEl.placeholder = 'Confirm your password';
        pwConfirmInputEl.style.width = '93%';
        pwConfirmInputEl.addEventListener('keypress', (ev) => {
            if ((ev.code === 'Enter' || ev.code === 'NumpadEnter')
                && pwConfirmInputEl.value.length > 0) {
                ev.preventDefault();
                if (pwInputEl.value == pwConfirmInputEl.value) {
                    this.password = pwConfirmInputEl.value;
                    this.close();
                }
                else {
                    // passwords don't match
                    messageEl.setText('Passwords don\'t match');
                    messageEl.show();
                }
            }
        });
        confirmPwContainerEl.style.marginTop = '1em';
        if (!this.confirmPassword) {
            confirmPwContainerEl.hide();
        }
        const messageEl = contentEl.createDiv();
        messageEl.style.marginTop = '1em';
        messageEl.hide();
        pwInputEl.addEventListener('keypress', (ev) => {
            if ((ev.code === 'Enter' || ev.code === 'NumpadEnter')
                && pwInputEl.value.length > 0) {
                ev.preventDefault();
                if (this.confirmPassword) {
                    // confim password
                    pwConfirmInputEl.focus();
                }
                else {
                    this.password = pwInputEl.value;
                    this.close();
                }
            }
        });
    }
}

const algorithm = {
    name: 'AES-GCM',
    iv: new Uint8Array([196, 190, 240, 190, 188, 78, 41, 132, 15, 220, 84, 211]),
    tagLength: 128
};
class CryptoHelper {
    buildKey(password) {
        return __awaiter(this, void 0, void 0, function* () {
            let utf8Encode = new TextEncoder();
            let passwordBytes = utf8Encode.encode(password);
            let passwordDigest = yield crypto.subtle.digest({ name: 'SHA-256' }, passwordBytes);
            let key = yield crypto.subtle.importKey('raw', passwordDigest, algorithm, false, ['encrypt', 'decrypt']);
            return key;
        });
    }
    encryptToBase64(text, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let key = yield this.buildKey(password);
            let utf8Encode = new TextEncoder();
            let bytesToEncrypt = utf8Encode.encode(text);
            // encrypt into bytes
            let encryptedBytes = new Uint8Array(yield crypto.subtle.encrypt(algorithm, key, bytesToEncrypt));
            //convert array to base64
            let base64Text = btoa(String.fromCharCode(...encryptedBytes));
            return base64Text;
        });
    }
    stringToArray(str) {
        var result = [];
        for (var i = 0; i < str.length; i++) {
            result.push(str.charCodeAt(i));
        }
        return new Uint8Array(result);
    }
    decryptFromBase64(base64Encoded, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // convert base 64 to array
                let bytesToDecrypt = this.stringToArray(atob(base64Encoded));
                let key = yield this.buildKey(password);
                // decrypt into bytes
                let decryptedBytes = yield crypto.subtle.decrypt(algorithm, key, bytesToDecrypt);
                // convert bytes to text
                let utf8Decode = new TextDecoder();
                let decryptedText = utf8Decode.decode(decryptedBytes);
                return decryptedText;
            }
            catch (e) {
                return null;
            }
        });
    }
}

class MeldEncryptSettingsTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        let { containerEl } = this;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Settings for Meld Encrypt' });
        new obsidian.Setting(containerEl)
            .setName('Confirm password?')
            .setDesc('Confirm password when encrypting.')
            .addToggle(toggle => {
            toggle
                .setValue(this.plugin.settings.confirmPassword)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.confirmPassword = value;
                yield this.plugin.saveSettings();
                this.updateSettingsUi();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName('Remember password?')
            .setDesc('Remember the last used password for this session.')
            .addToggle(toggle => {
            toggle
                .setValue(this.plugin.settings.rememberPassword)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.rememberPassword = value;
                yield this.plugin.saveSettings();
                this.updateSettingsUi();
            }));
        });
        this.pwTimeoutSetting = new obsidian.Setting(containerEl)
            .setName(this.buildPasswordTimeoutSettingName())
            .setDesc('The number of minutes to remember the last used password.')
            .addSlider(slider => {
            slider
                .setLimits(0, 120, 5)
                .setValue(this.plugin.settings.rememberPasswordTimeout)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.rememberPasswordTimeout = value;
                yield this.plugin.saveSettings();
                this.updateSettingsUi();
            }));
        });
        this.updateSettingsUi();
    }
    updateSettingsUi() {
        this.pwTimeoutSetting.setName(this.buildPasswordTimeoutSettingName());
        if (this.plugin.settings.rememberPassword) {
            this.pwTimeoutSetting.settingEl.show();
        }
        else {
            this.pwTimeoutSetting.settingEl.hide();
        }
    }
    buildPasswordTimeoutSettingName() {
        const value = this.plugin.settings.rememberPasswordTimeout;
        let timeoutString = `${value} minutes`;
        if (value == 0) {
            timeoutString = 'Never forget';
        }
        return `Remember Password Timeout (${timeoutString})`;
    }
}

const _PREFIX = '%%🔐 ';
const _SUFFIX = ' 🔐%%';
const DEFAULT_SETTINGS = {
    confirmPassword: true,
    rememberPassword: true,
    rememberPasswordTimeout: 30
};
class MeldEncrypt extends obsidian.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadSettings();
            this.addSettingTab(new MeldEncryptSettingsTab(this.app, this));
            this.addCommand({
                id: 'encrypt-decrypt',
                name: 'Encrypt/Decrypt',
                checkCallback: (checking) => this.processEncryptDecryptCommand(checking, false)
            });
            this.addCommand({
                id: 'encrypt-decrypt-in-place',
                name: 'Encrypt/Decrypt In-place',
                checkCallback: (checking) => this.processEncryptDecryptCommand(checking, true)
            });
        });
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
    processEncryptDecryptCommand(checking, decryptInPlace) {
        const mdview = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!mdview) {
            return false;
        }
        const editor = mdview.sourceMode.cmEditor;
        if (!editor) {
            return false;
        }
        const startLine = editor.getCursor('from').line;
        const startPos = { line: startLine, ch: 0 }; // want the start of the first line
        const endLine = editor.getCursor('to').line;
        const endLineText = editor.getLine(endLine);
        const endPos = { line: endLine, ch: endLineText.length }; // want the end of last line
        const selectionText = editor.getRange(startPos, endPos);
        if (selectionText.length == 0) {
            return false;
        }
        const decrypt = selectionText.startsWith(_PREFIX) && selectionText.endsWith(_SUFFIX);
        const encrypt = !selectionText.contains(_PREFIX) && !selectionText.contains(_SUFFIX);
        if (!decrypt && !encrypt) {
            return false;
        }
        if (checking) {
            return true;
        }
        // Fetch password from user
        // determine default password
        const isRememberPasswordExpired = !this.settings.rememberPassword
            || (this.passwordLastUsedExpiry != null
                && Date.now() > this.passwordLastUsedExpiry);
        if (isRememberPasswordExpired) {
            this.passwordLastUsed = '';
        }
        const confirmPassword = encrypt && this.settings.confirmPassword;
        const pwModal = new PasswordModal(this.app, confirmPassword, this.passwordLastUsed);
        pwModal.onClose = () => {
            var _a;
            const pw = (_a = pwModal.password) !== null && _a !== void 0 ? _a : '';
            if (pw.length == 0) {
                return;
            }
            // remember password?
            if (this.settings.rememberPassword) {
                this.passwordLastUsed = pw;
                this.passwordLastUsedExpiry =
                    this.settings.rememberPasswordTimeout == 0
                        ? null
                        : Date.now() + this.settings.rememberPasswordTimeout * 1000 * 60 // new expiry
                ;
            }
            if (encrypt) {
                this.encryptSelection(editor, selectionText, pw, startPos, endPos);
            }
            else {
                this.decryptSelection(editor, selectionText, pw, startPos, endPos, decryptInPlace);
            }
        };
        pwModal.open();
        return true;
    }
    encryptSelection(editor, selectionText, password, finalSelectionStart, finalSelectionEnd) {
        return __awaiter(this, void 0, void 0, function* () {
            //encrypt
            const crypto = new CryptoHelper();
            const base64EncryptedText = this.addMarkers(yield crypto.encryptToBase64(selectionText, password));
            editor.setSelection(finalSelectionStart, finalSelectionEnd);
            editor.replaceSelection(base64EncryptedText, 'around');
        });
    }
    decryptSelection(editor, selectionText, password, selectionStart, selectionEnd, decryptInPlace) {
        return __awaiter(this, void 0, void 0, function* () {
            // decrypt
            const base64CipherText = this.removeMarkers(selectionText);
            const crypto = new CryptoHelper();
            const decryptedText = yield crypto.decryptFromBase64(base64CipherText, password);
            if (decryptedText === null) {
                new obsidian.Notice('❌ Decryption failed!');
            }
            else {
                if (decryptInPlace) {
                    editor.setSelection(selectionStart, selectionEnd);
                    editor.replaceSelection(decryptedText, 'around');
                }
                else {
                    const decryptModal = new DecryptModal(this.app, '🔓', decryptedText);
                    decryptModal.onClose = () => {
                        editor.focus();
                        if (decryptModal.decryptInPlace) {
                            editor.setSelection(selectionStart, selectionEnd);
                            editor.replaceSelection(decryptedText, 'around');
                        }
                    };
                    decryptModal.open();
                }
            }
        });
    }
    removeMarkers(text) {
        if (text.startsWith(_PREFIX) && text.endsWith(_SUFFIX)) {
            return text.replace(_PREFIX, '').replace(_SUFFIX, '');
        }
        return text;
    }
    addMarkers(text) {
        if (!text.contains(_PREFIX) && !text.contains(_SUFFIX)) {
            return _PREFIX.concat(text, _SUFFIX);
        }
        return text;
    }
}

module.exports = MeldEncrypt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy9EZWNyeXB0TW9kYWwudHMiLCIuLi9zcmMvUGFzc3dvcmRNb2RhbC50cyIsIi4uL3NyYy9DcnlwdG9IZWxwZXIudHMiLCIuLi9zcmMvTWVsZEVuY3J5cHRTZXR0aW5nc1RhYi50cyIsIi4uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7IEFwcCwgTW9kYWwgfSBmcm9tICdvYnNpZGlhbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNyeXB0TW9kYWwgZXh0ZW5kcyBNb2RhbCB7XHJcblx0dGV4dDogc3RyaW5nO1xyXG5cdGRlY3J5cHRJblBsYWNlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwLCB0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgPSAnJykge1xyXG5cdFx0c3VwZXIoYXBwKTtcclxuXHRcdHRoaXMudGV4dCA9IHRleHQ7XHJcblx0XHR0aGlzLnRpdGxlRWwuaW5uZXJUZXh0ID0gdGl0bGU7XHJcblx0fVxyXG5cclxuXHRvbk9wZW4oKSB7XHJcblx0XHRsZXQgeyBjb250ZW50RWwgfSA9IHRoaXM7XHJcblxyXG5cdFx0Y29uc3QgdGV4dEVsID0gY29udGVudEVsLmNyZWF0ZURpdigpLmNyZWF0ZUVsKCd0ZXh0YXJlYScsIHsgdGV4dDogdGhpcy50ZXh0IH0pO1xyXG5cdFx0dGV4dEVsLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG5cdFx0dGV4dEVsLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuXHRcdHRleHRFbC5yb3dzID0gMTA7XHJcblx0XHR0ZXh0RWwucmVhZE9ubHkgPSB0cnVlO1xyXG5cdFx0Ly90ZXh0RWwuZm9jdXMoKTsgLy8gRG9lc24ndCBzZWVtIHRvIHdvcmsgaGVyZS4uLlxyXG5cdFx0c2V0SW1tZWRpYXRlKCgpID0+IHsgdGV4dEVsLmZvY3VzKCkgfSk7IC8vLi4uIGJ1dCB0aGlzIGRvZXNcclxuXHJcblxyXG5cdFx0Y29uc3QgYnRuQ29udGFpbmVyRWwgPSBjb250ZW50RWwuY3JlYXRlRGl2KCcnKTtcclxuXHJcblx0XHRjb25zdCBkZWNyeXB0SW5QbGFjZUJ0bkVsID0gYnRuQ29udGFpbmVyRWwuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0RlY3J5cHQgaW4tcGxhY2UnIH0pO1xyXG5cdFx0ZGVjcnlwdEluUGxhY2VCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0dGhpcy5kZWNyeXB0SW5QbGFjZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuY2xvc2UoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IGNhbmNlbEJ0bkVsID0gYnRuQ29udGFpbmVyRWwuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0Nsb3NlJyB9KTtcclxuXHRcdGNhbmNlbEJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmNsb3NlKCk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSIsImltcG9ydCB7IEFwcCwgTW9kYWwgfSBmcm9tICdvYnNpZGlhbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZE1vZGFsIGV4dGVuZHMgTW9kYWwge1xyXG5cdHBhc3N3b3JkOiBzdHJpbmcgPSBudWxsO1xyXG5cdGRlZmF1bHRQYXNzd29yZDogc3RyaW5nID0gbnVsbDtcclxuXHRjb25maXJtUGFzc3dvcmQ6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwLCBjb25maXJtUGFzc3dvcmQ6IGJvb2xlYW4sIGRlZmF1bHRQYXNzd29yZDogc3RyaW5nID0gbnVsbCkge1xyXG5cdFx0c3VwZXIoYXBwKTtcclxuXHRcdHRoaXMuZGVmYXVsdFBhc3N3b3JkID0gZGVmYXVsdFBhc3N3b3JkO1xyXG5cdFx0dGhpcy5jb25maXJtUGFzc3dvcmQgPSBjb25maXJtUGFzc3dvcmQ7XHJcblx0fVxyXG5cclxuXHRvbk9wZW4oKSB7XHJcblx0XHRsZXQgeyBjb250ZW50RWwgfSA9IHRoaXM7XHJcblxyXG5cdFx0Y29udGVudEVsLmVtcHR5KCk7XHJcblxyXG5cdFx0Y29uc3QgcHdJbnB1dEVsID0gY29udGVudEVsLmNyZWF0ZURpdigpXHJcblx0XHRcdC5jcmVhdGVTcGFuKHsgdGV4dDogJ/CflJEgJyB9KVxyXG5cdFx0XHQuY3JlYXRlRWwoJ2lucHV0JywgeyB0eXBlOiAncGFzc3dvcmQnLCB2YWx1ZTogdGhpcy5kZWZhdWx0UGFzc3dvcmQgPz8gJycgfSlcclxuXHRcdDtcclxuXHJcblx0XHRwd0lucHV0RWwucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBwYXNzd29yZCc7XHJcblx0XHRwd0lucHV0RWwuc3R5bGUud2lkdGggPSAnOTMlJztcclxuXHRcdHB3SW5wdXRFbC5mb2N1cygpO1xyXG5cclxuXHRcdGNvbnN0IGNvbmZpcm1Qd0NvbnRhaW5lckVsID0gY29udGVudEVsLmNyZWF0ZURpdigpO1xyXG5cclxuXHRcdGNvbnN0IHB3Q29uZmlybUlucHV0RWwgPSBjb25maXJtUHdDb250YWluZXJFbFxyXG5cdFx0XHQuY3JlYXRlU3Bhbih7IHRleHQ6ICfwn5SRICcgfSlcclxuXHRcdFx0LmNyZWF0ZUVsKCdpbnB1dCcsIHsgdHlwZTogJ3Bhc3N3b3JkJywgdmFsdWU6IHRoaXMuZGVmYXVsdFBhc3N3b3JkID8/ICcnIH0pXHJcblx0XHQ7XHJcblxyXG5cdFx0cHdDb25maXJtSW5wdXRFbC5wbGFjZWhvbGRlciA9ICdDb25maXJtIHlvdXIgcGFzc3dvcmQnO1xyXG5cdFx0cHdDb25maXJtSW5wdXRFbC5zdHlsZS53aWR0aCA9ICc5MyUnO1xyXG5cclxuXHRcdHB3Q29uZmlybUlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXYpID0+IHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdCggZXYuY29kZSA9PT0gJ0VudGVyJyB8fCBldi5jb2RlID09PSAnTnVtcGFkRW50ZXInIClcclxuXHRcdFx0XHQmJiBwd0NvbmZpcm1JbnB1dEVsLnZhbHVlLmxlbmd0aCA+IDBcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0aWYgKHB3SW5wdXRFbC52YWx1ZSA9PSBwd0NvbmZpcm1JbnB1dEVsLnZhbHVlKXtcclxuXHRcdFx0XHRcdHRoaXMucGFzc3dvcmQgPSBwd0NvbmZpcm1JbnB1dEVsLnZhbHVlO1xyXG5cdFx0XHRcdFx0dGhpcy5jbG9zZSgpO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0Ly8gcGFzc3dvcmRzIGRvbid0IG1hdGNoXHJcblx0XHRcdFx0XHRtZXNzYWdlRWwuc2V0VGV4dCgnUGFzc3dvcmRzIGRvblxcJ3QgbWF0Y2gnKTtcclxuXHRcdFx0XHRcdG1lc3NhZ2VFbC5zaG93KCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdGNvbmZpcm1Qd0NvbnRhaW5lckVsLnN0eWxlLm1hcmdpblRvcCA9ICcxZW0nO1xyXG5cclxuXHRcdGlmICghdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcclxuXHRcdFx0Y29uZmlybVB3Q29udGFpbmVyRWwuaGlkZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG1lc3NhZ2VFbCA9IGNvbnRlbnRFbC5jcmVhdGVEaXYoKTtcclxuXHRcdG1lc3NhZ2VFbC5zdHlsZS5tYXJnaW5Ub3AgPSAnMWVtJztcclxuXHRcdG1lc3NhZ2VFbC5oaWRlKCk7XHJcblxyXG5cdFx0cHdJbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2KSA9PiB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHQoIGV2LmNvZGUgPT09ICdFbnRlcicgfHwgZXYuY29kZSA9PT0gJ051bXBhZEVudGVyJyApXHJcblx0XHRcdFx0JiYgcHdJbnB1dEVsLnZhbHVlLmxlbmd0aCA+IDBcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maXJtUGFzc3dvcmQpIHtcclxuXHRcdFx0XHRcdC8vIGNvbmZpbSBwYXNzd29yZFxyXG5cdFx0XHRcdFx0cHdDb25maXJtSW5wdXRFbC5mb2N1cygpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnBhc3N3b3JkID0gcHdJbnB1dEVsLnZhbHVlO1xyXG5cdFx0XHRcdFx0dGhpcy5jbG9zZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0iLCJcclxuY29uc3QgYWxnb3JpdGhtID0ge1xyXG5cdG5hbWU6ICdBRVMtR0NNJyxcclxuXHRpdjogbmV3IFVpbnQ4QXJyYXkoWzE5NiwgMTkwLCAyNDAsIDE5MCwgMTg4LCA3OCwgNDEsIDEzMiwgMTUsIDIyMCwgODQsIDIxMV0pLFxyXG5cdHRhZ0xlbmd0aDogMTI4XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyeXB0b0hlbHBlciB7XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgYnVpbGRLZXkocGFzc3dvcmQ6IHN0cmluZykge1xyXG5cdFx0bGV0IHV0ZjhFbmNvZGUgPSBuZXcgVGV4dEVuY29kZXIoKTtcclxuXHRcdGxldCBwYXNzd29yZEJ5dGVzID0gdXRmOEVuY29kZS5lbmNvZGUocGFzc3dvcmQpO1xyXG5cclxuXHRcdGxldCBwYXNzd29yZERpZ2VzdCA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KHsgbmFtZTogJ1NIQS0yNTYnIH0sIHBhc3N3b3JkQnl0ZXMpO1xyXG5cclxuXHRcdGxldCBrZXkgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleShcclxuXHRcdFx0J3JhdycsXHJcblx0XHRcdHBhc3N3b3JkRGlnZXN0LFxyXG5cdFx0XHRhbGdvcml0aG0sXHJcblx0XHRcdGZhbHNlLFxyXG5cdFx0XHRbJ2VuY3J5cHQnLCAnZGVjcnlwdCddXHJcblx0XHQpO1xyXG5cclxuXHRcdHJldHVybiBrZXk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgZW5jcnlwdFRvQmFzZTY0KHRleHQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcblx0XHRsZXQga2V5ID0gYXdhaXQgdGhpcy5idWlsZEtleShwYXNzd29yZCk7XHJcblxyXG5cdFx0bGV0IHV0ZjhFbmNvZGUgPSBuZXcgVGV4dEVuY29kZXIoKTtcclxuXHRcdGxldCBieXRlc1RvRW5jcnlwdCA9IHV0ZjhFbmNvZGUuZW5jb2RlKHRleHQpO1xyXG5cclxuXHRcdC8vIGVuY3J5cHQgaW50byBieXRlc1xyXG5cdFx0bGV0IGVuY3J5cHRlZEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXdhaXQgY3J5cHRvLnN1YnRsZS5lbmNyeXB0KFxyXG5cdFx0XHRhbGdvcml0aG0sIGtleSwgYnl0ZXNUb0VuY3J5cHRcclxuXHRcdCkpO1xyXG5cclxuXHRcdC8vY29udmVydCBhcnJheSB0byBiYXNlNjRcclxuXHRcdGxldCBiYXNlNjRUZXh0ID0gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLmVuY3J5cHRlZEJ5dGVzKSk7XHJcblxyXG5cdFx0cmV0dXJuIGJhc2U2NFRleHQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0cmluZ1RvQXJyYXkoc3RyOiBzdHJpbmcpOiBVaW50OEFycmF5IHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBuZXcgVWludDhBcnJheShyZXN1bHQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIGRlY3J5cHRGcm9tQmFzZTY0KGJhc2U2NEVuY29kZWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHQvLyBjb252ZXJ0IGJhc2UgNjQgdG8gYXJyYXlcclxuXHRcdFx0bGV0IGJ5dGVzVG9EZWNyeXB0ID0gdGhpcy5zdHJpbmdUb0FycmF5KGF0b2IoYmFzZTY0RW5jb2RlZCkpO1xyXG5cclxuXHRcdFx0bGV0IGtleSA9IGF3YWl0IHRoaXMuYnVpbGRLZXkocGFzc3dvcmQpO1xyXG5cclxuXHRcdFx0Ly8gZGVjcnlwdCBpbnRvIGJ5dGVzXHJcblx0XHRcdGxldCBkZWNyeXB0ZWRCeXRlcyA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdChhbGdvcml0aG0sIGtleSwgYnl0ZXNUb0RlY3J5cHQpO1xyXG5cclxuXHRcdFx0Ly8gY29udmVydCBieXRlcyB0byB0ZXh0XHJcblx0XHRcdGxldCB1dGY4RGVjb2RlID0gbmV3IFRleHREZWNvZGVyKCk7XHJcblx0XHRcdGxldCBkZWNyeXB0ZWRUZXh0ID0gdXRmOERlY29kZS5kZWNvZGUoZGVjcnlwdGVkQnl0ZXMpO1xyXG5cdFx0XHRyZXR1cm4gZGVjcnlwdGVkVGV4dDtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcsIFNsaWRlckNvbXBvbmVudCB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgTWVsZEVuY3J5cHQgZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVsZEVuY3J5cHRTZXR0aW5nc1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG5cdHBsdWdpbjogTWVsZEVuY3J5cHQ7XHJcblxyXG5cdHB3VGltZW91dFNldHRpbmc6U2V0dGluZztcclxuXHJcblx0Y29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogTWVsZEVuY3J5cHQpIHtcclxuXHRcdHN1cGVyKGFwcCwgcGx1Z2luKTtcclxuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG5cdH1cclxuXHJcblx0ZGlzcGxheSgpOiB2b2lkIHtcclxuXHRcdGxldCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xyXG5cclxuXHRcdGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcblx0XHRcclxuXHRcdGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHt0ZXh0OiAnU2V0dGluZ3MgZm9yIE1lbGQgRW5jcnlwdCd9KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdC5zZXROYW1lKCdDb25maXJtIHBhc3N3b3JkPycpXHJcblx0XHQuc2V0RGVzYygnQ29uZmlybSBwYXNzd29yZCB3aGVuIGVuY3J5cHRpbmcuJylcclxuXHRcdC5hZGRUb2dnbGUoIHRvZ2dsZSA9PntcclxuXHRcdFx0dG9nZ2xlXHJcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbmZpcm1QYXNzd29yZClcclxuXHRcdFx0XHQub25DaGFuZ2UoIGFzeW5jIHZhbHVlID0+e1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuY29uZmlybVBhc3N3b3JkID0gdmFsdWU7XHJcblx0XHRcdFx0XHRhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlU2V0dGluZ3NVaSgpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdDtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ1JlbWVtYmVyIHBhc3N3b3JkPycpXHJcblx0XHRcdC5zZXREZXNjKCdSZW1lbWJlciB0aGUgbGFzdCB1c2VkIHBhc3N3b3JkIGZvciB0aGlzIHNlc3Npb24uJylcclxuXHRcdFx0LmFkZFRvZ2dsZSggdG9nZ2xlID0+e1xyXG5cdFx0XHRcdHRvZ2dsZVxyXG5cdFx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnJlbWVtYmVyUGFzc3dvcmQpXHJcblx0XHRcdFx0XHQub25DaGFuZ2UoIGFzeW5jIHZhbHVlID0+e1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5yZW1lbWJlclBhc3N3b3JkID0gdmFsdWU7XHJcblx0XHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVNldHRpbmdzVWkoKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblxyXG5cdFx0dGhpcy5wd1RpbWVvdXRTZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCB0aGlzLmJ1aWxkUGFzc3dvcmRUaW1lb3V0U2V0dGluZ05hbWUoKSApXHJcblx0XHRcdC5zZXREZXNjKCdUaGUgbnVtYmVyIG9mIG1pbnV0ZXMgdG8gcmVtZW1iZXIgdGhlIGxhc3QgdXNlZCBwYXNzd29yZC4nKVxyXG5cdFx0XHQuYWRkU2xpZGVyKCBzbGlkZXIgPT4ge1xyXG5cdFx0XHRcdHNsaWRlclxyXG5cdFx0XHRcdFx0LnNldExpbWl0cygwLCAxMjAsIDUpXHJcblx0XHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MucmVtZW1iZXJQYXNzd29yZFRpbWVvdXQpXHJcblx0XHRcdFx0XHQub25DaGFuZ2UoIGFzeW5jIHZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MucmVtZW1iZXJQYXNzd29yZFRpbWVvdXQgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlU2V0dGluZ3NVaSgpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVTZXR0aW5nc1VpKCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTZXR0aW5nc1VpKCk6dm9pZHtcclxuXHRcdHRoaXMucHdUaW1lb3V0U2V0dGluZy5zZXROYW1lKHRoaXMuYnVpbGRQYXNzd29yZFRpbWVvdXRTZXR0aW5nTmFtZSgpKTtcclxuXHJcblx0XHRpZiAoIHRoaXMucGx1Z2luLnNldHRpbmdzLnJlbWVtYmVyUGFzc3dvcmQgKXtcclxuXHRcdFx0dGhpcy5wd1RpbWVvdXRTZXR0aW5nLnNldHRpbmdFbC5zaG93KCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5wd1RpbWVvdXRTZXR0aW5nLnNldHRpbmdFbC5oaWRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRidWlsZFBhc3N3b3JkVGltZW91dFNldHRpbmdOYW1lKCk6c3RyaW5ne1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5yZW1lbWJlclBhc3N3b3JkVGltZW91dDtcclxuXHRcdGxldCB0aW1lb3V0U3RyaW5nID0gYCR7dmFsdWV9IG1pbnV0ZXNgO1xyXG5cdFx0aWYodmFsdWUgPT0gMCl7XHJcblx0XHRcdHRpbWVvdXRTdHJpbmcgPSAnTmV2ZXIgZm9yZ2V0JztcclxuXHRcdH1cclxuXHRcdHJldHVybiBgUmVtZW1iZXIgUGFzc3dvcmQgVGltZW91dCAoJHt0aW1lb3V0U3RyaW5nfSlgO1xyXG5cdH1cclxufSIsImltcG9ydCB7IE5vdGljZSwgUGx1Z2luLCBNYXJrZG93blZpZXcgfSBmcm9tICdvYnNpZGlhbic7XHJcbmltcG9ydCBEZWNyeXB0TW9kYWwgZnJvbSAnLi9EZWNyeXB0TW9kYWwnO1xyXG5pbXBvcnQgUGFzc3dvcmRNb2RhbCBmcm9tICcuL1Bhc3N3b3JkTW9kYWwnO1xyXG5pbXBvcnQgQ3J5cHRvSGVscGVyIGZyb20gJy4vQ3J5cHRvSGVscGVyJztcclxuaW1wb3J0IE1lbGRFbmNyeXB0U2V0dGluZ3NUYWIgZnJvbSAnLi9NZWxkRW5jcnlwdFNldHRpbmdzVGFiJztcclxuXHJcbmNvbnN0IF9QUkVGSVg6IHN0cmluZyA9ICclJfCflJAgJztcclxuY29uc3QgX1NVRkZJWDogc3RyaW5nID0gJyDwn5SQJSUnO1xyXG5cclxuaW50ZXJmYWNlIE1lbGRFbmNyeXB0UGx1Z2luU2V0dGluZ3Mge1xyXG5cdGNvbmZpcm1QYXNzd29yZDogYm9vbGVhbjtcclxuXHRyZW1lbWJlclBhc3N3b3JkOiBib29sZWFuO1xyXG5cdHJlbWVtYmVyUGFzc3dvcmRUaW1lb3V0OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IE1lbGRFbmNyeXB0UGx1Z2luU2V0dGluZ3MgPSB7XHJcblx0Y29uZmlybVBhc3N3b3JkOiB0cnVlLFxyXG5cdHJlbWVtYmVyUGFzc3dvcmQ6IHRydWUsXHJcblx0cmVtZW1iZXJQYXNzd29yZFRpbWVvdXQ6IDMwXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbGRFbmNyeXB0IGV4dGVuZHMgUGx1Z2luIHtcclxuXHJcblx0c2V0dGluZ3M6IE1lbGRFbmNyeXB0UGx1Z2luU2V0dGluZ3M7XHJcblx0cGFzc3dvcmRMYXN0VXNlZEV4cGlyeTogbnVtYmVyXHJcblx0cGFzc3dvcmRMYXN0VXNlZDogc3RyaW5nO1xyXG5cclxuXHRhc3luYyBvbmxvYWQoKSB7XHJcblxyXG5cdFx0YXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcclxuXHJcblx0XHR0aGlzLmFkZFNldHRpbmdUYWIobmV3IE1lbGRFbmNyeXB0U2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ2VuY3J5cHQtZGVjcnlwdCcsXHJcblx0XHRcdG5hbWU6ICdFbmNyeXB0L0RlY3J5cHQnLFxyXG5cdFx0XHRjaGVja0NhbGxiYWNrOiAoY2hlY2tpbmcpID0+IHRoaXMucHJvY2Vzc0VuY3J5cHREZWNyeXB0Q29tbWFuZChjaGVja2luZywgZmFsc2UpXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ2VuY3J5cHQtZGVjcnlwdC1pbi1wbGFjZScsXHJcblx0XHRcdG5hbWU6ICdFbmNyeXB0L0RlY3J5cHQgSW4tcGxhY2UnLFxyXG5cdFx0XHRjaGVja0NhbGxiYWNrOiAoY2hlY2tpbmcpID0+IHRoaXMucHJvY2Vzc0VuY3J5cHREZWNyeXB0Q29tbWFuZChjaGVja2luZywgdHJ1ZSlcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBzYXZlU2V0dGluZ3MoKSB7XHJcblx0XHRhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG5cdH1cclxuXHJcblx0cHJvY2Vzc0VuY3J5cHREZWNyeXB0Q29tbWFuZChjaGVja2luZzogYm9vbGVhbiwgZGVjcnlwdEluUGxhY2U6IGJvb2xlYW4pOiBib29sZWFuIHtcclxuXHJcblx0XHRjb25zdCBtZHZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xyXG5cdFx0aWYgKCFtZHZpZXcpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGVkaXRvciA9IG1kdmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yO1xyXG5cdFx0aWYgKCFlZGl0b3IpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHN0YXJ0TGluZSA9IGVkaXRvci5nZXRDdXJzb3IoJ2Zyb20nKS5saW5lO1xyXG5cdFx0Y29uc3Qgc3RhcnRQb3MgPSB7IGxpbmU6IHN0YXJ0TGluZSwgY2g6IDAgfTsgLy8gd2FudCB0aGUgc3RhcnQgb2YgdGhlIGZpcnN0IGxpbmVcclxuXHJcblx0XHRjb25zdCBlbmRMaW5lID0gZWRpdG9yLmdldEN1cnNvcigndG8nKS5saW5lO1xyXG5cdFx0Y29uc3QgZW5kTGluZVRleHQgPSBlZGl0b3IuZ2V0TGluZShlbmRMaW5lKTtcclxuXHRcdGNvbnN0IGVuZFBvcyA9IHsgbGluZTogZW5kTGluZSwgY2g6IGVuZExpbmVUZXh0Lmxlbmd0aCB9OyAvLyB3YW50IHRoZSBlbmQgb2YgbGFzdCBsaW5lXHJcblxyXG5cdFx0Y29uc3Qgc2VsZWN0aW9uVGV4dCA9IGVkaXRvci5nZXRSYW5nZShzdGFydFBvcywgZW5kUG9zKTtcclxuXHJcblx0XHRpZiAoc2VsZWN0aW9uVGV4dC5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZGVjcnlwdCA9IHNlbGVjdGlvblRleHQuc3RhcnRzV2l0aChfUFJFRklYKSAmJiBzZWxlY3Rpb25UZXh0LmVuZHNXaXRoKF9TVUZGSVgpO1xyXG5cdFx0Y29uc3QgZW5jcnlwdCA9ICFzZWxlY3Rpb25UZXh0LmNvbnRhaW5zKF9QUkVGSVgpICYmICFzZWxlY3Rpb25UZXh0LmNvbnRhaW5zKF9TVUZGSVgpO1xyXG5cclxuXHRcdGlmICghZGVjcnlwdCAmJiAhZW5jcnlwdCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNoZWNraW5nKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEZldGNoIHBhc3N3b3JkIGZyb20gdXNlclxyXG5cclxuXHRcdC8vIGRldGVybWluZSBkZWZhdWx0IHBhc3N3b3JkXHJcblx0XHRjb25zdCBpc1JlbWVtYmVyUGFzc3dvcmRFeHBpcmVkID1cclxuXHRcdFx0IXRoaXMuc2V0dGluZ3MucmVtZW1iZXJQYXNzd29yZFxyXG5cdFx0XHR8fCAoXHJcblx0XHRcdFx0dGhpcy5wYXNzd29yZExhc3RVc2VkRXhwaXJ5ICE9IG51bGxcclxuXHRcdFx0XHQmJiBEYXRlLm5vdygpID4gdGhpcy5wYXNzd29yZExhc3RVc2VkRXhwaXJ5XHJcblx0XHRcdClcclxuXHRcdFx0O1xyXG5cclxuXHRcdGlmIChpc1JlbWVtYmVyUGFzc3dvcmRFeHBpcmVkKSB7XHJcblx0XHRcdHRoaXMucGFzc3dvcmRMYXN0VXNlZCA9ICcnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGVuY3J5cHQgJiYgdGhpcy5zZXR0aW5ncy5jb25maXJtUGFzc3dvcmQ7XHJcblxyXG5cdFx0Y29uc3QgcHdNb2RhbCA9IG5ldyBQYXNzd29yZE1vZGFsKHRoaXMuYXBwLCBjb25maXJtUGFzc3dvcmQsIHRoaXMucGFzc3dvcmRMYXN0VXNlZCk7XHJcblx0XHRwd01vZGFsLm9uQ2xvc2UgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHB3ID0gcHdNb2RhbC5wYXNzd29yZCA/PyAnJ1xyXG5cdFx0XHRpZiAocHcubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlbWVtYmVyIHBhc3N3b3JkP1xyXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5yZW1lbWJlclBhc3N3b3JkKSB7XHJcblx0XHRcdFx0dGhpcy5wYXNzd29yZExhc3RVc2VkID0gcHc7XHJcblx0XHRcdFx0dGhpcy5wYXNzd29yZExhc3RVc2VkRXhwaXJ5ID1cclxuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3MucmVtZW1iZXJQYXNzd29yZFRpbWVvdXQgPT0gMFxyXG5cdFx0XHRcdFx0XHQ/IG51bGxcclxuXHRcdFx0XHRcdFx0OiBEYXRlLm5vdygpICsgdGhpcy5zZXR0aW5ncy5yZW1lbWJlclBhc3N3b3JkVGltZW91dCAqIDEwMDAgKiA2MC8vIG5ldyBleHBpcnlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGVuY3J5cHQpIHtcclxuXHRcdFx0XHR0aGlzLmVuY3J5cHRTZWxlY3Rpb24oXHJcblx0XHRcdFx0XHRlZGl0b3IsXHJcblx0XHRcdFx0XHRzZWxlY3Rpb25UZXh0LFxyXG5cdFx0XHRcdFx0cHcsXHJcblx0XHRcdFx0XHRzdGFydFBvcyxcclxuXHRcdFx0XHRcdGVuZFBvc1xyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5kZWNyeXB0U2VsZWN0aW9uKFxyXG5cdFx0XHRcdFx0ZWRpdG9yLFxyXG5cdFx0XHRcdFx0c2VsZWN0aW9uVGV4dCxcclxuXHRcdFx0XHRcdHB3LFxyXG5cdFx0XHRcdFx0c3RhcnRQb3MsXHJcblx0XHRcdFx0XHRlbmRQb3MsXHJcblx0XHRcdFx0XHRkZWNyeXB0SW5QbGFjZVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHB3TW9kYWwub3BlbigpO1xyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhc3luYyBlbmNyeXB0U2VsZWN0aW9uKFxyXG5cdFx0ZWRpdG9yOiBDb2RlTWlycm9yLkVkaXRvcixcclxuXHRcdHNlbGVjdGlvblRleHQ6IHN0cmluZyxcclxuXHRcdHBhc3N3b3JkOiBzdHJpbmcsXHJcblx0XHRmaW5hbFNlbGVjdGlvblN0YXJ0OiBDb2RlTWlycm9yLlBvc2l0aW9uLFxyXG5cdFx0ZmluYWxTZWxlY3Rpb25FbmQ6IENvZGVNaXJyb3IuUG9zaXRpb24sXHJcblx0KSB7XHJcblx0XHQvL2VuY3J5cHRcclxuXHRcdGNvbnN0IGNyeXB0byA9IG5ldyBDcnlwdG9IZWxwZXIoKTtcclxuXHRcdGNvbnN0IGJhc2U2NEVuY3J5cHRlZFRleHQgPSB0aGlzLmFkZE1hcmtlcnMoYXdhaXQgY3J5cHRvLmVuY3J5cHRUb0Jhc2U2NChzZWxlY3Rpb25UZXh0LCBwYXNzd29yZCkpO1xyXG5cdFx0ZWRpdG9yLnNldFNlbGVjdGlvbihmaW5hbFNlbGVjdGlvblN0YXJ0LCBmaW5hbFNlbGVjdGlvbkVuZCk7XHJcblx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihiYXNlNjRFbmNyeXB0ZWRUZXh0LCAnYXJvdW5kJyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGRlY3J5cHRTZWxlY3Rpb24oXHJcblx0XHRlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yLFxyXG5cdFx0c2VsZWN0aW9uVGV4dDogc3RyaW5nLFxyXG5cdFx0cGFzc3dvcmQ6IHN0cmluZyxcclxuXHRcdHNlbGVjdGlvblN0YXJ0OiBDb2RlTWlycm9yLlBvc2l0aW9uLFxyXG5cdFx0c2VsZWN0aW9uRW5kOiBDb2RlTWlycm9yLlBvc2l0aW9uLFxyXG5cdFx0ZGVjcnlwdEluUGxhY2U6IGJvb2xlYW5cclxuXHQpIHtcclxuXHRcdC8vIGRlY3J5cHRcclxuXHRcdGNvbnN0IGJhc2U2NENpcGhlclRleHQgPSB0aGlzLnJlbW92ZU1hcmtlcnMoc2VsZWN0aW9uVGV4dCk7XHJcblx0XHRjb25zdCBjcnlwdG8gPSBuZXcgQ3J5cHRvSGVscGVyKCk7XHJcblx0XHRjb25zdCBkZWNyeXB0ZWRUZXh0ID0gYXdhaXQgY3J5cHRvLmRlY3J5cHRGcm9tQmFzZTY0KGJhc2U2NENpcGhlclRleHQsIHBhc3N3b3JkKTtcclxuXHRcdGlmIChkZWNyeXB0ZWRUZXh0ID09PSBudWxsKSB7XHJcblx0XHRcdG5ldyBOb3RpY2UoJ+KdjCBEZWNyeXB0aW9uIGZhaWxlZCEnKTtcclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRpZiAoZGVjcnlwdEluUGxhY2UpIHtcclxuXHRcdFx0XHRlZGl0b3Iuc2V0U2VsZWN0aW9uKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xyXG5cdFx0XHRcdGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGRlY3J5cHRlZFRleHQsICdhcm91bmQnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBkZWNyeXB0TW9kYWwgPSBuZXcgRGVjcnlwdE1vZGFsKHRoaXMuYXBwLCAn8J+UkycsIGRlY3J5cHRlZFRleHQpO1xyXG5cdFx0XHRcdGRlY3J5cHRNb2RhbC5vbkNsb3NlID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0ZWRpdG9yLmZvY3VzKCk7XHJcblx0XHRcdFx0XHRpZiAoZGVjcnlwdE1vZGFsLmRlY3J5cHRJblBsYWNlKSB7XHJcblx0XHRcdFx0XHRcdGVkaXRvci5zZXRTZWxlY3Rpb24oc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCk7XHJcblx0XHRcdFx0XHRcdGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGRlY3J5cHRlZFRleHQsICdhcm91bmQnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZGVjcnlwdE1vZGFsLm9wZW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW1vdmVNYXJrZXJzKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0XHRpZiAodGV4dC5zdGFydHNXaXRoKF9QUkVGSVgpICYmIHRleHQuZW5kc1dpdGgoX1NVRkZJWCkpIHtcclxuXHRcdFx0cmV0dXJuIHRleHQucmVwbGFjZShfUFJFRklYLCAnJykucmVwbGFjZShfU1VGRklYLCAnJyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGV4dDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYWRkTWFya2Vycyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0aWYgKCF0ZXh0LmNvbnRhaW5zKF9QUkVGSVgpICYmICF0ZXh0LmNvbnRhaW5zKF9TVUZGSVgpKSB7XHJcblx0XHRcdHJldHVybiBfUFJFRklYLmNvbmNhdCh0ZXh0LCBfU1VGRklYKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0ZXh0O1xyXG5cdH1cclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbIk1vZGFsIiwiUGx1Z2luU2V0dGluZ1RhYiIsIlNldHRpbmciLCJQbHVnaW4iLCJNYXJrZG93blZpZXciLCJOb3RpY2UiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdURBO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQOztNQzNFcUIsWUFBYSxTQUFRQSxjQUFLO0lBSTlDLFlBQVks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
