'use client';
"use strict";
exports.__esModule = true;
var ThemeProvider_1 = require("@/context/ThemeProvider");
var menubar_1 = require("@/components/ui/menubar");
var constants_1 = require("@/constants");
var image_1 = require("next/image");
var Theme = function () {
    var _a = ThemeProvider_1.useTheme(), mode = _a.mode, setMode = _a.setMode;
    return (React.createElement(menubar_1.Menubar, { className: 'relative border-none bg-transparent shadow-none' },
        React.createElement(menubar_1.MenubarMenu, null,
            React.createElement(menubar_1.MenubarTrigger, { className: 'focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200' }, mode === 'light' ? (React.createElement(image_1["default"], { src: '/assets/icons/sun.svg', alt: 'sun', width: 20, height: 20, className: 'active-theme' })) : (React.createElement(image_1["default"], { src: '/assets/icons/moon.svg', alt: 'moon', width: 20, height: 20, className: 'active-theme' }))),
            React.createElement(menubar_1.MenubarContent, { className: 'absolute right-[-3rem] mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300' }, constants_1.themes.map(function (item) { return (
            // @ts-ignore
            React.createElement(menubar_1.MenubarItem, { key: item.value, className: 'flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400', onClick: function () {
                    setMode(item.value);
                    if (item.value !== 'system') {
                        localStorage.theme = item.value;
                    }
                    else {
                        localStorage.removeItem('theme');
                    }
                } },
                React.createElement(image_1["default"], { src: item.icon, alt: item.value, width: 16, height: 16, className: "" + (mode === item.value && 'active-theme') }),
                React.createElement("p", { className: "body-semibold text-light-500 " + (mode === item.value
                        ? 'text-primary-500'
                        : 'text-dark100_light900') }, item.label))); })))));
};
exports["default"] = Theme;
