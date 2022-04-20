/*! For license information please see cometchatwidget.js.LICENSE.txt */
window.CometChatWidget = (() => {
    var e, t, n, r, o = {
        6418: e => {
            window, e.exports = function (e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var o = t[r] = {i: r, l: !1, exports: {}};
                    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }

                return n.m = e, n.c = t, n.d = function (e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
                }, n.r = function (e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
                }, n.t = function (e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
                        return e[t]
                    }.bind(null, o));
                    return r
                }, n.n = function (e) {
                    var t = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 38)
            }([function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.validateConversationType = t.validateUpdateUser = t.validateCreateUser = t.validateMessage = t.validateChatType = t.validateMsgId = t.validateArray = t.validateHideMessagesFromBlockedUsers = t.validateId = t.validateCreateGroup = t.validateJoinGroup = t.validateUpdateGroup = t.validateScope = t.isAudio = t.isVideo = t.isImage = t.getUpdatedSettings = t.getAppSettings = t.getCurrentTime = t.Logger = t.createUidFromJid = t.format = t.getOrdinalSuffix = t.isFalsy = t.isTruthy = t.isObject = t.getJidHost = t.getChatHost = void 0;
                var r = n(12), o = n(1), i = n(6), s = n(2), a = n(16), u = n(17), c = n(19), l = n(3), E = n(14);

                function p(e) {
                    return null != e && ("string" == typeof e && (e = e.trim()), "object" == typeof e && 0 === Object.keys(e).length && (e = void 0)), ["", 0, "0", !1, null, "null", void 0, "undefined"].includes(e)
                }

                function d(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    return e.split("%s").reduce((function (e, n, r) {
                        return e + n + (t[r] || "")
                    }), "")
                }

                t.getChatHost = function (e) {
                    return e[o.APP_SETTINGS.KEYS.CHAT_HOST_OVERRIDE] ? e[o.APP_SETTINGS.KEYS.CHAT_HOST_OVERRIDE] : e[o.APP_SETTINGS.KEYS.CHAT_HOST_APP_SPECIFIC] ? e[o.APP_SETTINGS.KEYS.CHAT_HOST_APP_SPECIFIC] : e[o.APP_SETTINGS.KEYS.CHAT_HOST]
                }, t.getJidHost = function (e) {
                    return e[o.APP_SETTINGS.KEYS.JID_HOST_OVERRIDE] ? e[o.APP_SETTINGS.KEYS.JID_HOST_OVERRIDE] : e[o.APP_SETTINGS.KEYS.CHAT_HOST]
                }, t.isObject = function (e) {
                    return e instanceof Object && e.constructor === Object
                }, t.isTruthy = function (e) {
                    return [!0, 1, "1", "true", "TRUE"].includes(e)
                }, t.isFalsy = p, t.getOrdinalSuffix = function (e) {
                    var t = e % 10, n = e % 100;
                    return 1 == t && 11 != n ? e + "st" : 2 == t && 12 != n ? e + "nd" : 3 == t && 13 != n ? e + "rd" : e + "th"
                }, t.format = d, t.createUidFromJid = function (e) {
                    return e.substring(e.lastIndexOf("]") + 1, e.lastIndexOf("@"))
                };
                var f = function () {
                    function e() {
                    }

                    return e.log = function (e, t) {
                    }, e.error = function (e, t) {
                    }, e.info = function (e, t) {
                    }, e
                }();

                function S() {
                    return new Promise((function (e, t) {
                        i.makeApiCall("appSettings").then((function (t) {
                            r.LocalStorage.getInstance().set(o.LOCAL_STORE.KEY_APP_SETTINGS, t.data), t.data.MODE && l.CometChat.setMode(t.data.MODE), e(t.data)
                        }), (function (e) {
                            t(new s.CometChatException(e.error))
                        }))
                    }))
                }

                t.Logger = f, t.getCurrentTime = function () {
                    return (new Date).getTime()
                }, t.getAppSettings = function () {
                    return new Promise((function (e, t) {
                        r.LocalStorage.getInstance().get(o.LOCAL_STORE.KEY_APP_SETTINGS).then((function (n) {
                            p(n) ? S().then((function (t) {
                                e(t)
                            }), (function (e) {
                                t(e)
                            })) : e(n)
                        }), (function (e) {
                            t(e)
                        }))
                    }))
                }, t.getUpdatedSettings = S, t.isImage = function (e) {
                    var t;
                    return e.type && e.type.toLowerCase().includes("image") && (t = !0), t
                }, t.isVideo = function (e) {
                    var t;
                    return e.type && e.type.toLowerCase().includes("video") && (t = !0), t
                }, t.isAudio = function (e) {
                    var t;
                    return e.type && e.type.toLowerCase().includes("audio") && (t = !0), t
                }, t.validateScope = function (e) {
                    return typeof e !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "SCOPE", "SCOPE", "Scope"))) : p(e) ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID), "SCOPE", "SCOPE", "scope", "scope"))) : e != l.CometChat.GROUP_MEMBER_SCOPE.ADMIN && e != l.CometChat.GROUP_MEMBER_SCOPE.MODERATOR && e != l.CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT ? new s.CometChatException(o.GroupErrors.INVALID_SCOPE) : void 0
                }, t.validateUpdateGroup = function (e) {
                    return e.hasOwnProperty(o.GroupConstants.KEYS.GUID) ? typeof e[o.GroupConstants.KEYS.GUID] !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID"))) : p(e[o.GroupConstants.KEYS.GUID]) ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GUID", "GUID", "GUID", "GUID"))) : e.hasOwnProperty(o.GroupConstants.KEYS.NAME) && "" === e[o.GroupConstants.KEYS.NAME] ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.EMPTY_STRING), "GROUP_NAME", "GROUP_NAME", "Group name"))) : void 0 : new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.PARAMETER_COMPULSORY), "GUID", "GUID", "GUID", "GUID")))
                }, t.validateJoinGroup = function (e, t, n) {
                    if (typeof e == o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.OBJECT) {
                        if (!e.hasOwnProperty(o.GroupConstants.KEYS.GUID)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.PARAMETER_COMPULSORY), "GUID", "GUID", "GUID", "GUID")));
                        if (typeof e[o.GroupConstants.KEYS.GUID] !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID")));
                        if (p(e[o.GroupConstants.KEYS.GUID])) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GUID", "GUID", "GUID", "GUID")));
                        if (!e.hasOwnProperty(o.GroupConstants.KEYS.TYPE)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.PARAMETER_COMPULSORY), "GROUP_TYPE", "GROUP_TYPE", "Group type", "Group type")));
                        if (typeof e[o.GroupConstants.KEYS.TYPE] !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "GROUP_TYPE", "GROUP_TYPE", "Group type")));
                        if (p(e[o.GroupConstants.KEYS.TYPE])) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GROUP_TYPE", "GROUP_TYPE", "type", "type")));
                        if (e[o.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PUBLIC && e[o.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PASSWORD && e[o.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PROTECTED && e[o.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PRIVATE) return new s.CometChatException(o.GroupErrors.INVALID_GROUP_TYPE);
                        if (e[o.GroupConstants.KEYS.TYPE].toLowerCase() == l.CometChat.GROUP_TYPE.PASSWORD) {
                            if (!e.hasOwnProperty(o.GroupConstants.KEYS.PASSWORD)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.PASSWORD_COMPULSORY), "PASSWORD", "PASSWORD")));
                            if (typeof e[o.GroupConstants.KEYS.PASSWORD] !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "PASSWORD", "PASSWORD", "Password")));
                            if (p(e[o.GroupConstants.KEYS.PASSWORD])) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "PASSWORD", "PASSWORD", "password", "password")))
                        }
                    } else {
                        if (void 0 !== e) {
                            if (typeof e !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID")));
                            if (p(e)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GUID", "GUID", "GUID", "GUID")))
                        }
                        if (void 0 !== t) {
                            if (typeof t !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "GROUP_TYPE", "GROUP_TYPE", "Group type")));
                            if (p(t)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GROUP_TYPE", "GROUP_TYPE", "type", "type")));
                            if (t.toLowerCase() != l.CometChat.GROUP_TYPE.PUBLIC && t.toLowerCase() != l.CometChat.GROUP_TYPE.PASSWORD && t.toLowerCase() != l.CometChat.GROUP_TYPE.PROTECTED && t.toLowerCase() != l.CometChat.GROUP_TYPE.PRIVATE) return new s.CometChatException(o.GroupErrors.INVALID_GROUP_TYPE);
                            if (t.toLowerCase() == l.CometChat.GROUP_TYPE.PASSWORD) {
                                if (typeof n !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "PASSWORD", "PASSWORD", "Password")));
                                if (p(n)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "PASSWORD", "PASSWORD", "password", "password")))
                            }
                        }
                    }
                }, t.validateCreateGroup = function (e) {
                    if (!e.hasOwnProperty(o.GroupConstants.KEYS.GUID)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.PARAMETER_COMPULSORY), "GUID", "GUID", "GUID", "GUID")));
                    if (typeof e[o.GroupConstants.KEYS.GUID] !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID")));
                    if (p(e[o.GroupConstants.KEYS.GUID])) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GUID", "GUID", "GUID", "GUID")));
                    if (!e.hasOwnProperty(o.GroupConstants.KEYS.NAME)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.PARAMETER_COMPULSORY), "GROUP_NAME", "GROUP_NAME", "Group name", "Group name")));
                    if (typeof e[o.GroupConstants.KEYS.NAME] !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "GROUP_NAME", "GROUP_NAME", "Group name")));
                    if (p(e[o.GroupConstants.KEYS.NAME])) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GROUP_NAME", "GROUP_NAME", "name", "name")));
                    if (!e.hasOwnProperty(o.GroupConstants.KEYS.TYPE)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.PARAMETER_COMPULSORY), "GROUP_TYPE", "GROUP_TYPE", "Group type", "Group type")));
                    if (typeof e[o.GroupConstants.KEYS.TYPE] !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "GROUP_TYPE", "GROUP_TYPE", "Group type")));
                    if (p(e[o.GroupConstants.KEYS.TYPE])) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GROUP_TYPE", "GROUP_TYPE", "type", "type")));
                    if (e[o.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PUBLIC && e[o.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PASSWORD && e[o.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PROTECTED && e[o.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PRIVATE) return new s.CometChatException(o.GroupErrors.INVALID_GROUP_TYPE);
                    if (e[o.GroupConstants.KEYS.TYPE].toLowerCase() == l.CometChat.GROUP_TYPE.PASSWORD) {
                        if (!e.hasOwnProperty(o.GroupConstants.KEYS.PASSWORD)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.PASSWORD_COMPULSORY), "PASSWORD", "PASSWORD")));
                        if (typeof e[o.GroupConstants.KEYS.PASSWORD] !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "PASSWORD", "PASSWORD", "Password")));
                        if (p(e[o.GroupConstants.KEYS.PASSWORD])) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "PASSWORD", "PASSWORD", "password", "password")))
                    }
                    if (e.hasOwnProperty(o.GroupConstants.KEYS.TAGS)) {
                        if (!Array.isArray(e[o.GroupConstants.KEYS.TAGS])) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_AN_ARRAY), "GROUP_TAGS", "GROUP_TAGS", "Group tags")));
                        if (0 === e[o.GroupConstants.KEYS.TAGS].length) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.EMPTY_ARRAY), "GROUP_TAGS", "GROUP_TAGS", "Group tags")))
                    }
                }, t.validateId = function (e, t) {
                    if ("user" === t) {
                        if (typeof e !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "UID", "UID", "UID")));
                        if (p(e)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID), "UID", "UID", "UID", "UID")))
                    }
                    if ("group" === t) {
                        if (typeof e !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID")));
                        if (p(e)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID), "GUID", "GUID", "GUID", "GUID")))
                    }
                }, t.validateHideMessagesFromBlockedUsers = function (e) {
                    if (typeof e !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_BOOLEAN), "HIDE_MESSAGES_FROM_BLOCKED_USERS", "HIDE_MESSAGES_FROM_BLOCKED_USERS", "hideMessagesFromBlockedUsers")))
                }, t.validateArray = function (e, t) {
                    var n;
                    return n = "blockUsers" === t ? "blockUsers() method accepts an array of users." : "unblockUsers" === t ? "unblockUsers() method accepts an array of users." : "groupMembers" === t ? "addMembersToGroup() method accepts members list as an array of users." : "addMembersToGroup() method accepts bannedMembers list as an array of users.", typeof e != o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.OBJECT ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_ARRAY), "USER_LIST", "USER_LIST", n))) : Array.isArray(e) ? void 0 : new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_ARRAY), "USER_LIST", "USER_LIST", n)))
                }, t.validateMsgId = function (e) {
                    return isNaN(e) ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_NUMBER), "MESSAGE_ID", "MESSAGE_ID", "Message Id"))) : p(e) ? new s.CometChatException(E.ERRORS.PARAMETER_MISSING) : void 0
                }, t.validateChatType = function (e) {
                    return typeof e !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "RECEIVER_TYPE", "RECEIVER_TYPE", "Receiver type"))) : p(e) ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID), "RECEIVER_TYPE", "RECEIVER_TYPE", "receiver type", "receiver type"))) : e != o.MessageConstatnts.RECEIVER_TYPE.GROUP && e != o.MessageConstatnts.RECEIVER_TYPE.USER ? new s.CometChatException(o.MessageErrors.INVALID_RECEIVER_TYPE) : void 0
                }, t.validateMessage = function (e) {
                    var n = e;
                    if (typeof n.getReceiverId() !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "RECEIVER_ID", "RECEIVER_ID", "Receiver Id")));
                    if (p(n.getReceiverId())) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID), "RECEIVER_ID", "RECEIVER_ID", "receiver id", "receiver id")));
                    if (typeof n.getReceiverType() !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "RECEIVER_TYPE", "RECEIVER_TYPE", "Receiver Type")));
                    if (p(n.getReceiverType())) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID), "RECEIVER_TYPE", "RECEIVER_TYPE", "receiver type", "receiver type")));
                    if (n.getReceiverType() != o.MessageConstatnts.RECEIVER_TYPE.GROUP && n.getReceiverType() != o.MessageConstatnts.RECEIVER_TYPE.USER) return new s.CometChatException(o.MessageErrors.INVALID_RECEIVER_TYPE);
                    if (e instanceof a.TextMessage) {
                        var r = e;
                        if (typeof r.getText() !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "MESSAGE_TEXT", "MESSAGE_TEXT", "Message text")));
                        if ("" === r.getText().trim()) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.EMPTY_STRING), "MESSAGE_TEXT", "MESSAGE_TEXT", "Message text")))
                    }
                    if (e instanceof u.MediaMessage) {
                        var i = e;
                        if (i.getData() && i.getData().hasOwnProperty("attachments")) {
                            var l = i.getAttachment();
                            if (!l.getExtension()) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MISSING_KEY), "extension", "Attachment")));
                            if (!l.getMimeType()) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MISSING_KEY), "mimeType", "Attachment")));
                            if (!l.getName()) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MISSING_KEY), "name", "Attachment")));
                            if (!l.getUrl()) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MISSING_KEY), "url", "Attachment")))
                        } else {
                            if (!(i.file instanceof Blob)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_BLOB), "MEDIA_OBJECT", "MEDIA_OBJECT", "Media object")));
                            if ("image" == i.getType()) {
                                if (!t.isImage(i.file)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_MEDIA_FILE), "IMAGE_FILE", "IMAGE_FILE")))
                            } else if ("video" == i.getType()) {
                                if (!t.isVideo(i.file)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_MEDIA_FILE), "VIDEO_FILE", "VIDEO_FILE")))
                            } else if ("audio" == i.getType() && !t.isAudio(i.file)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_MEDIA_FILE), "AUDIO_FILE", "AUDIO_FILE")))
                        }
                    }
                    return e instanceof c.CustomMessage && p(e.getCustomData()) ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID), "CUSTOM_DATA", "CUSTOM_DATA", "custom data", "custom data"))) : void 0
                }, t.validateCreateUser = function (e) {
                    if (!e.hasOwnProperty(o.UserConstants.UID)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.PARAMETER_COMPULSORY), "UID", "UID", "UID", "UID")));
                    if (typeof e[o.UserConstants.UID] !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "UID", "UID", "UID")));
                    if (p(e[o.UserConstants.UID])) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_USER_PROPERTY), "UID", "UID", "UID", "UID")));
                    if (!e.hasOwnProperty(o.UserConstants.NAME)) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.PARAMETER_COMPULSORY), "USER_NAME", "USER_NAME", "User name", "User name")));
                    if (typeof e[o.UserConstants.NAME] !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "USER_NAME", "USER_NAME", "User name")));
                    if (p(e[o.UserConstants.NAME])) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_USER_PROPERTY), "USER_NAME", "USER_NAME", "name", "name")));
                    if (e.hasOwnProperty(o.UserConstants.AVATAR) && "" === e[o.UserConstants.AVATAR]) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.EMPTY_STRING), "USER_AVATAR", "USER_AVATAR", "User avatar")));
                    if (e.hasOwnProperty(o.UserConstants.META_DATA) && "" === e[o.UserConstants.META_DATA]) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.EMPTY_STRING), "USER_METADATA", "USER_METADATA", "User metadata")));
                    if (e.hasOwnProperty(o.UserConstants.LINK) && "" === e[o.UserConstants.LINK]) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.EMPTY_STRING), "USER_LINK", "USER_LINK", "User link")));
                    if (e.hasOwnProperty(o.UserConstants.STATUS_MESSAGE) && "" === e[o.UserConstants.STATUS_MESSAGE]) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.EMPTY_STRING), "USER_STATUS_MESSAGE", "USER_STATUS_MESSAGE", "User status message")));
                    if (e.hasOwnProperty(o.UserConstants.ROLE) && "" === e[o.UserConstants.ROLE]) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.EMPTY_STRING), "USER_ROLE", "USER_ROLE", "User role")));
                    if (e.hasOwnProperty(o.UserConstants.TAGS)) {
                        if (!Array.isArray(e[o.UserConstants.TAGS])) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_AN_ARRAY), "USER_TAGS", "USER_TAGS", "User tags")));
                        if (0 === e[o.UserConstants.TAGS].length) return new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.EMPTY_ARRAY), "USER_TAGS", "USER_TAGS", "User tags")))
                    }
                }, t.validateUpdateUser = function (e) {
                    return e.hasOwnProperty(o.UserConstants.UID) ? typeof e[o.UserConstants.UID] !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "UID", "UID", "UID"))) : p(e[o.UserConstants.UID]) ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID_USER_PROPERTY), "UID", "UID", "UID", "UID"))) : e.hasOwnProperty(o.UserConstants.NAME) && "" === e[o.UserConstants.NAME] ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.EMPTY_STRING), "USER_NAME", "USER_NAME", "User name"))) : void 0 : new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.PARAMETER_COMPULSORY), "UID", "UID", "UID", "UID")))
                }, t.validateConversationType = function (e) {
                    return typeof e !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_STRING), "CONVERSATION_TYPE", "CONVERSATION_TYPE", "Conversation type"))) : p(e) ? new s.CometChatException(JSON.parse(d(JSON.stringify(o.GENERAL_ERROR.INVALID), "CONVERSATION_TYPE", "CONVERSATION_TYPE", "conversation type", "conversation type"))) : (e = e.toLowerCase()) != l.CometChat.RECEIVER_TYPE.USER && e != l.CometChat.RECEIVER_TYPE.GROUP ? new s.CometChatException(o.ConversationErrors.INVALID_CONVERSATION_TYPE) : void 0
                }
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.ONLINE_MEMBER_COUNT_API = t.JWT_API = t.ProsodyApiErrors = t.PROSODY_API = t.API_ERROR_CODES = t.SESSION_STORE = t.CONNECTION_STATUS = t.COMMON_UTILITY_CONSTANTS = t.APP_SETTINGS = t.PresenceConstatnts = t.FeatureRestrictionErrors = t.MessageErrors = t.ExtensionErrors = t.ConversationErrors = t.GroupErrors = t.UserErrors = t.ReceiptErrors = t.GENERAL_ERROR = t.PARAMETER_ERROR = t.CALL_ERROR = t.Errors = t.UserConstants = t.GroupMemersConstans = t.GroupConstants = t.CallConstants = t.BlockedUsersConstants = t.ActionConstatnts = t.TYPING_NOTIFICATION = t.MessageCategory = t.ATTACHMENTS_CONSTANTS = t.MessageConstatnts = t.READ_RECEIPTS = t.DELIVERY_RECEIPTS = t.ResponseConstants = t.LOCAL_STORE = t.ANALYTICS = t.WS = t.SDKHeader = t.APPINFO = t.GROUP_MEMBER_SCOPE = t.GroupMemberScope = t.GROUP_TYPE = t.GroupType = t.CALLING_COMPONENT_VERSION = t.DEFAULT_VALUES = t.constants = void 0;
                var r, o, i, s = n(2);
                t.constants = {
                    DEFAULT_STORE: "cometchat",
                    MSG_VER_PRE: "store-ver-pre",
                    MSG_VER_POST: "store-ver-post"
                }, t.DEFAULT_VALUES = {
                    ZERO: 0,
                    MSGS_LIMIT: 30,
                    MSGS_MAX_LIMIT: 100,
                    USERS_LIMIT: 30,
                    USERS_MAX_LIMIT: 100,
                    GROUPS_LIMIT: 30,
                    GROUPS_MAX_LIMIT: 100,
                    CONVERSATION_MAX_LIMIT: 50,
                    CALL_TIMEOUT: 45,
                    DEFAULT_MSG_ID: 0,
                    DEFAULT_MAX_TYPING_INDICATOR_LIMIT: 5,
                    REGION_DEFAULT: "eu",
                    REGION_DEFAULT_EU: "eu",
                    REGION_DEFAULT_US: "us",
                    REGION_DEFAULT_IN: "in",
                    REGION_DEFAULT_PRIVATE: "private"
                }, t.CALLING_COMPONENT_VERSION = 4, (r = t.GroupType || (t.GroupType = {})).Public = "public", r.Private = "private", r.Protected = "protected", r.Password = "password", t.GROUP_TYPE = {
                    PUBLIC: "public",
                    PRIVATE: "private",
                    PROTECTED: "password",
                    PASSWORD: "password"
                }, (o = t.GroupMemberScope || (t.GroupMemberScope = {})).Admin = "admin", o.Moderator = "moderator", o.Member = "member", t.GROUP_MEMBER_SCOPE = {
                    ADMIN: "admin",
                    MODERATOR: "moderator",
                    PARTICIPANT: "participant"
                }, t.APPINFO = {
                    platform: "WEB",
                    sdkVersion: "v3.0.6",
                    apiVersion: "v3.0",
                    sdkVersionWithUnderScore: "3_0_6"
                }, t.SDKHeader = {
                    platform: "javascript",
                    sdkVersion: "3.0.6",
                    sdk: "%s@%s"
                }, t.WS = {
                    CONVERSATION: {
                        TYPE: {
                            CHAT: "chat",
                            GROUP_CHAT: "groupchat"
                        }
                    }
                }, t.ANALYTICS = {
                    analyticsHost: "metrics-%s.cometchat.io",
                    analyticsVersion: "v1"
                }, t.LOCAL_STORE = {
                    COMMON_STORE: "common_store",
                    MESSAGE_LISTENERS_LIST: "message_listeners_list",
                    USERS_STORE: "users_store",
                    MESSAGES_STORE: "messages_store",
                    KEYS_STORE: "keys_store",
                    STORE_STRING: "%s:%s",
                    KEY_STRING: "%s/%s",
                    KEY_USER: "user",
                    KEY_APP_SETTINGS: "app_settings",
                    KEY_APP_ID: "appId",
                    KEY_DEVICE_ID: "deviceId",
                    KEY_MESSAGE_LISTENER_LIST: "all"
                }, t.ResponseConstants = {
                    RESPONSE_KEYS: {
                        KEY_DATA: "data",
                        KEY_META: "meta",
                        KEY_CURSOR: "cursor",
                        KEY_ACTION: "action",
                        KEY_MESSAGE: "message",
                        KEY_ERROR: "error",
                        KEY_ERROR_DETAILS: "details",
                        KEY_ERROR_CODE: "code",
                        KEY_ERROR_MESSAGE: "message",
                        KEY_AUTH_TOKEN: "authToken",
                        KEY_WS_CHANNEL: "wsChannel",
                        KEY_IDENTITY: "identity",
                        KEY_SERVICE: "identity",
                        KEY_ENTITIES: "entities",
                        KEY_ENTITITY: "entity",
                        KEY_ENTITYTYPE: "entityType",
                        KEY_ATTACHMENTS: "attachments",
                        CODE_REQUEST_OK: 200,
                        CODE_BAD_REQUEST: 401,
                        UNREAD_UNDELIVERED_KEYS: {
                            ENTITY: "entity",
                            ENTITY_TYPE: "entityType",
                            ENTITY_Id: "entityId",
                            COUNT: "count"
                        },
                        GROUP_MEMBERS_RESPONSE: {SUCCESS: "success", ERROR: "error", MESSAGE: "message"},
                        KEY_ENTITY_TYPE: {USER: "user", GROUP: "group"}
                    }
                }, t.DELIVERY_RECEIPTS = {
                    RECEIVER_ID: "receiverId",
                    RECEIVER_TYPE: "type",
                    RECIPIENT: "recipient",
                    MESSAGE_ID: "messageId",
                    RECEIVED: "delivered",
                    DELIVERED_AT: "deliveredAt",
                    ID: "id",
                    TIME: "time",
                    DELIVERED_TO_ME_AT: "deliveredToMeAt"
                }, t.READ_RECEIPTS = {
                    RECEIVER_ID: "receiverId",
                    RECEIVER_TYPE: "type",
                    RECIPIENT: "recipient",
                    MESSAGE_ID: "messageId",
                    READ: "read",
                    READ_AT: "readAt",
                    ID: "id",
                    TIME: "time",
                    READ_BY_ME_AT: "readByMeAt"
                }, t.MessageConstatnts = {
                    TYPE: {
                        TEXT: "text",
                        MEDIA: "media",
                        IMAGE: "image",
                        VIDEO: "video",
                        AUDIO: "audio",
                        FILE: "file",
                        CUSTOM: "custom"
                    },
                    CATEGORY: {MESSAGE: "message", ACTION: "action", CALL: "call", CUSTOM: "custom"},
                    RECEIVER_TYPE: {USER: "user", GROUP: "group"},
                    KEYS: {
                        ATTATCHMENT: "attatchment",
                        ATTATCHMENTS: "attachments",
                        ACTION: "action",
                        TYPE: "type",
                        DATA: "data",
                        ID: "id",
                        MUID: "muid",
                        SENDER: "sender",
                        RECEIVER: "receiver",
                        RECEIVER_ID: "receiverId",
                        CATEGORY: "category",
                        RECEIVER_TYPE: "receiverType",
                        SENT_AT: "sentAt",
                        STATUS: "status",
                        TEXT: "text",
                        URL: "url",
                        METADATA: "metadata",
                        RECEIPTS: "receipts",
                        MY_RECEIPTS: "myReceipt",
                        CUSTOM_DATA: "customData",
                        CUSTOM_SUB_TYPE: "subType",
                        RESOURCE: "resource"
                    },
                    KNOWN_MEDIA_TYPE: {IMAGE: [], VIDEO: [], AUDIO: [], FILE: []},
                    PAGINATION: {
                        AFFIX: {APPEND: "append", PREPEND: "prepend"},
                        CURSOR_FILEDS: {ID: "id", SENT_AT: "sentAt"},
                        CURSOR_AFFIX_DEFAULT: "prepend",
                        CURSOR_FIELD_DEFAULT: "sentAt",
                        KEYS: {
                            PER_PAGE: "per_page",
                            CURSOR_AFFIX: "cursorAffix",
                            AFFIX: "affix",
                            CURSOR_FIELD: "cursorField",
                            CURSOR_VALUE: "cursorValue",
                            UID: "uid",
                            SENT_AT: "sentAt",
                            ID: "id",
                            CURRENT_PAGE: "page",
                            UNREAD: "unread",
                            HIDE_MESSAGES_FROM_BLOCKED_USER: "hideMessagesFromBlockedUsers",
                            SEARCH_KEY: "searchKey",
                            ONLY_UPDATES: "onlyUpdates",
                            UPDATED_AT: "updatedAt",
                            CATEGORY: "category",
                            CATEGORIES: "categories",
                            TYPE: "type",
                            TYPES: "types",
                            HIDE_REPLIES: "hideReplies",
                            HIDE_DELETED_MESSAGES: "hideDeleted",
                            WITH_TAGS: "withTags",
                            TAGS: "tags"
                        }
                    }
                }, t.ATTACHMENTS_CONSTANTS = {
                    KEYS: {
                        EXTENSION: "extension",
                        MIME_TYPE: "mimeType",
                        NAME: "name",
                        SIZE: "size",
                        URL: "url"
                    }
                }, (i = t.MessageCategory || (t.MessageCategory = {})).ACTION = "action", i.MESSAGE = "message", i.CALL = "call", i.CUSTOM = "custom", t.TYPING_NOTIFICATION = {
                    RECEIVER_ID: "receiverId",
                    RECEIVER_TYPE: "receiverType",
                    META: "metadata",
                    KEYS: {TYPING_NOTIFICATION: "typingNotification", TIMESTAMP: "timestamp"},
                    ACTIONS: {STARTED: "started", ENDED: "ended"}
                }, t.ActionConstatnts = {
                    ACTION_SUBJECTS: {ACTION_ON: "on", ACTION_BY: "by", ACTION_FOR: "for"},
                    ACTION_ENTITY_TYPE: {GROUP_USER: "groupuser", USER: "user", GROUP: "group", MESSAGE: "message"},
                    ACTION_KEYS: {
                        ACTION_CREATED: "created",
                        ACTION_UPDATED: "updated",
                        ACTION_DELETED: "deleted",
                        ENTITIES: "entities",
                        ENTITY: "entity",
                        ENTITY_TYPE: "entityType",
                        TYPE_MEMBER_JOINED: "joined",
                        TYPE_MEMBER_LEFT: "left",
                        TYPE_MEMBER_KICKED: "kicked",
                        TYPE_MEMBER_BANNED: "banned",
                        TYPE_MEMBER_UNBANNED: "unbanned",
                        TYPE_MEMBER_INVITED: "invited",
                        TYPE_MEMBER_ADDED: "added",
                        ACTION_SCOPE_CHANGED: "scopeChanged",
                        ACTION_TYPE_USER: "user",
                        ACTION_TYPE_GROUP: "group",
                        ACTION_TYPE_GROUP_MEMBER: "groupMember",
                        TYPE_MESSAGE_EDITED: "edited",
                        TYPE_MESSAGE_DELETED: "deleted",
                        ACTION_TYPE_CALL: "call",
                        EXTRAS: "extras",
                        SCOPE: "scope",
                        NEW: "new",
                        OLD: "old"
                    },
                    ActionMessages: {
                        ACTION_GROUP_JOINED_MESSAGE: "%s joined",
                        ACTION_GROUP_LEFT_MESSAGE: "%s left",
                        ACTION_MEMBER_KICKED_MESSAGE: "%s kicked %s",
                        ACTION_MEMBER_BANNED_MESSAGE: "%s banned %s",
                        ACTION_MEMBER_UNBANNED_MESSAGE: "%s unbanned %s",
                        ACTION_MEMBER_INVITED_MESSAGE: "%s banned %s",
                        ACTION_MESSAGE_EDITED_MESSAGE: " Message Edited",
                        ACTION_MESSAGE_DELETED_MESSAGE: "Message Deleted",
                        ACTION_MEMBER_SCOPE_CHANGED: "%s made %s %s",
                        ACTION_MEMBER_ADDED_TO_GROUP: "%s added %s"
                    },
                    ACTION_TYPE: {
                        TYPE_MEMBER_JOINED: "joined",
                        TYPE_MEMBER_LEFT: "left",
                        TYPE_MEMBER_KICKED: "kicked",
                        TYPE_MEMBER_BANNED: "banned",
                        TYPE_MEMBER_UNBANNED: "unbanned",
                        TYPE_MEMBER_INVITED: "invited",
                        TYPE_MEMBER_SCOPE_CHANGED: "scopeChanged",
                        TYPE_MESSAGE: "message",
                        TYPE_MESSAGE_EDITED: "edited",
                        TYPE_MESSAGE_DELETED: "deleted",
                        TYPE_MEMBER_ADDED: "added"
                    },
                    ACTIONS: {
                        MEMBER_ADDED: "added",
                        MEMBER_JOINED: "joined",
                        MEMBER_LEFT: "left",
                        MEMBER_KICKED: "kicked",
                        MEMBER_BANNED: "banned",
                        MEMBER_UNBANNED: "unbanned",
                        MEMBER_INVITED: "invited",
                        MEMBER_SCOPE_CHANGED: "scopeChanged",
                        MESSAGE_EDITED: "edited",
                        MESSSAGE_DELETED: "deleted",
                        TYPE_USER: "user",
                        TYPE_GROUP: "group",
                        TYPE_GROUP_MEMBER: "groupMember"
                    }
                }, t.BlockedUsersConstants = {
                    REQUEST_KEYS: {
                        DIRECTIONS: {
                            BOTH: "both",
                            HAS_BLOCKED_ME: "hasBlockedMe",
                            BLOCKED_BY_ME: "blockedByMe"
                        }
                    }
                }, t.CallConstants = {
                    CALL_MODE: {
                        DEFAULT: "DEFAULT",
                        SPOTLIGHT: "SPOTLIGHT",
                        SINGLE: "SINGLE",
                        TILE: "TILE",
                        GRID: "GRID"
                    },
                    CALL_TYPE: {AUDIO: "audio", VIDEO: "video"},
                    RECEIVER_TYPE_GROUP: "group",
                    RECEIVER_TYPE_USER: "user",
                    CALL_KEYS: {
                        CALL_DATA: "data",
                        CALL_ID: "id",
                        CALL_SESSION_ID: "sessionid",
                        CALL_RECEIVER: "receiver",
                        CALL_SENDER: "sender",
                        CALL_RECEIVER_TYPE: "receiverType",
                        CALL_STATUS: "status",
                        CALL_TYPE: "type",
                        CALL_INITIATED_AT: "initiatedAt",
                        CALL_JOINED_AT: "joinedAt",
                        CALL_LEFT_AT: "leftAt",
                        CALL_METADATA: "metadata",
                        CALL_ENTITIES: "entities",
                        CALL_ENTITY_TYPE: "entityType",
                        CALL_ENTITY: "entity",
                        CALL_ENTITY_USER: "user",
                        CALL_ENTITY_GROUP: "group"
                    },
                    CALL_STATUS: {
                        INITIATED: "initiated",
                        ONGOING: "ongoing",
                        UNANSWERED: "unanswered",
                        REJECTED: "rejected",
                        BUSY: "busy",
                        CANCELLED: "cancelled",
                        ENDED: "ended"
                    },
                    AUDIO_INPUT_DEVICES: "audioInputDevices",
                    AUDIO_OUTPUT_DEVICES: "audioOutputDevices",
                    VIDEO_INPUT_DEVICES: "videoInputDevices",
                    POST_MESSAGES: {
                        TYPES: {
                            ACTION_MESSAGE: "cometchat_action_message",
                            HANGUP: "hangup",
                            COMETCHAT_RTC_SETTINGS: "cometchat_rtc_settings"
                        },
                        ACTIONS: {
                            USER_JOINED: "onUserJoined",
                            USER_LEFT: "onUserLeft",
                            USER_LIST_CHANGED: "onUserListChanged",
                            INITIAL_DEVICE_LIST: "initialDeviceList",
                            DEVICE_CHANGE: "onDeviceChange",
                            LOAD: "LOAD",
                            CHANGE_AUDIO_INPUT: "changeAudioInput",
                            CHANGE_AUDIO_OUTPUT: "changeAudioOutput",
                            CHANGE_VIDEO_INPUT: "changeVideoInput",
                            MUTE_AUDIO: "muteAudio",
                            UNMUTE_AUDIO: "unMuteAudio",
                            PAUSE_VIDEO: "pauseVideo",
                            UNPAUSE_VIDEO: "unPauseVideo",
                            SWITCH_MODE: "switchMode",
                            START_SCREENSHARE: "startScreenShare",
                            STOP_SCREENSHARE: "stopScreenShare",
                            END_CALL: "endCall",
                            START_RECORDING: "startRecording",
                            STOP_RECORDING: "stopRecording",
                            RECORDING_TOGGLED: "onRecordingToggled",
                            USER_MUTED: "onUserMuted",
                            SCREEN_SHARE_STARTED: "SCREEN_SHARE_STARTED",
                            SCREEN_SHARE_STOPPED: "SCREEN_SHARE_ENDED"
                        }
                    },
                    MEDIA_DEVICE: {ID: "id", NAME: "name", ACTIVE: "active"}
                }, t.GroupConstants = {
                    KEYS: {
                        NAME: "name",
                        GUID: "guid",
                        TYPE: "type",
                        PASSWORD: "password",
                        ICON: "icon",
                        DESCRIPTION: "description",
                        OWNER: "owner",
                        METADATA: "metadata",
                        CREATED_AT: "createdAt",
                        UPDATED_AT: "updatedAt",
                        HAS_JOINED: "hasJoined",
                        WS_CHANNEL: "wsChannel",
                        TAGS: "tags"
                    }
                }, t.GroupMemersConstans = {
                    KEYS: {
                        SCOPE: "scope",
                        UID: "uid",
                        GUID: "guid",
                        USER: "user",
                        NAME: "name"
                    }
                }, t.UserConstants = {
                    UID: "uid",
                    NAME: "name",
                    AUTH_TOKEN: "authToken",
                    AVATAR: "avatar",
                    LAST_ACTIVE_AT: "lastActiveAt",
                    LINK: "link",
                    META_DATA: "metadata",
                    ROLE: "role",
                    STATUS: "status",
                    STATUS_MESSAGE: "statusMessage",
                    USER_NAME: "user_name",
                    TAGS: "tags"
                }, t.Errors = {
                    ERROR_IO_EXCEPTION: "ERROR_IO_EXCEPTION",
                    ERROR_JSON_EXCEPTION: "ERROR_JSON_EXCEPTION",
                    ERROR_PASSWORD_MISSING: "ERROR_PASSWORD_MISSING",
                    ERROR_LIMIT_EXCEEDED: "ERROR_LIMIT_EXCEEDED",
                    ERROR_USER_NOT_LOGGED_IN: "ERROR_USER_NOT_LOGGED_IN",
                    ERROR_INVALID_GUID: "ERROR_INVALID_GUID",
                    ERROR_PASSWORD_MISSING_MESSAGE: "Password is mandatory for a password group",
                    ERROR_LIMIT_EXCEEDED_MESSAGE: "Limit Exceeded Max limit of %s",
                    ERROR_USER_NOT_LOGGED_IN_MESSAGE: "Please log in to CometChat before calling this method",
                    ERROR_INVALID_GUID_MESSAGE: "Please provide a valid GUID",
                    ERROR_DEFAULT_MESSAGE: "Something went wrong",
                    ERR_SETTINGS_HASH_OUTDATED: "ERR_SETTINGS_HASH_OUTDATED",
                    ERR_NO_AUTH: "ERR_NO_AUTH"
                }, t.CALL_ERROR = {
                    CALL_ALREADY_INITIATED: {
                        code: "CALL_ALREADY_INITIATED",
                        name: "CALL_ALREADY_INITIATED",
                        message: "There is already call in progress",
                        details: {}
                    },
                    ERROR_IN_CALLING: {
                        code: "CALL_IN_PROGRESS",
                        name: "CALL_ALREADY_INITIATED",
                        message: "There is already call in progress",
                        details: {}
                    },
                    CANNOT_ACCEPT_CALL: {
                        code: "CALL_IN_PROGRESS",
                        name: "CALL_IN_PROGRESS",
                        message: "There is already a call in progress",
                        details: {}
                    },
                    NOT_INITIALIZED: {
                        code: "NOT_INITIALIZED",
                        name: "NOT_INITIALIZED",
                        message: "Please call the CometChat.init() method before calling any other methods related to CometChat.",
                        details: {}
                    },
                    NOT_LOGGED_IN: {
                        code: "NOT_LOGGED_IN",
                        name: "NOT_LOGGED_IN",
                        message: "Please login before starting a call.",
                        details: {}
                    },
                    SESSION_ID_REQUIRED: {
                        code: "SESSION_ID_REQUIRED",
                        name: "SESSION_ID_REQUIRED",
                        message: "Please make sure you are passing correct session id.",
                        details: {}
                    },
                    CALL_SETTINGS_REQUIRED: {
                        code: "CALL_SETTINGS_REQUIRED",
                        name: "CALL_SETTINGS_REQUIRED",
                        message: "Please make sure you are passing the call settings object.",
                        details: {}
                    },
                    JWT_NOT_FOUND: {
                        code: "JWT_NOT_FOUND",
                        name: "JWT_NOT_FOUND",
                        message: "There was some issue while fetching JWT from API.",
                        details: {}
                    }
                }, t.PARAMETER_ERROR = {
                    PARAMETER_REQUIRED: {
                        code: "%s_NOT_PROVIDED",
                        name: "%s_NOT_PROVIDED",
                        message: "please provide the %s.",
                        details: {}
                    }
                }, t.GENERAL_ERROR = {
                    MUST_BE_A_STRING: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "%s should be a string.",
                        details: {}
                    },
                    MUST_BE_A_NUMBER: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "%s should be a number.",
                        details: {}
                    },
                    MUST_BE_A_OBJECT: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "%s should be a object.",
                        details: {}
                    },
                    MUST_BE_AN_ARRAY: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "%s should be an array.",
                        details: {}
                    },
                    MUST_BE_A_BOOLEAN: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "%s should be a boolean.",
                        details: {}
                    },
                    MUST_BE_A_BLOB: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "%s should be a blob.",
                        details: {}
                    },
                    INVALID: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "Invalid %s. Please provide a valid %s.",
                        details: {}
                    },
                    METHOD_COMPULSORY: {
                        code: "%s_IS_COMPULSORY",
                        name: "%s_IS_COMPULSORY",
                        message: "%s is required.",
                        details: {}
                    },
                    LIMIT_EXCEEDED: {
                        code: "ERROR_%s_EXCEEDED",
                        name: "ERROR_%s_EXCEEDED",
                        message: "Limit exceeded max limit of %s.",
                        details: {}
                    },
                    MUST_BE_A_POSITIVE_NUMBER: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "%s should be a postive integer greater than 0.",
                        details: {}
                    },
                    INVALID_MEDIA_FILE: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "The message type does not match the file's mime type.",
                        details: {}
                    },
                    EMPTY_STRING: {code: "INVALID_%s", name: "INVALID_%s", message: "%s cannot be empty.", details: {}},
                    MISSING_KEY: {
                        code: "MISSING_KEY",
                        name: "MISSING_KEY",
                        message: "The key %s is missing from the %s object.",
                        details: {}
                    },
                    EMPTY_ARRAY: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "The parameter %s should be an array and it cannot be empty.",
                        details: {}
                    },
                    INVALID_SEARCH_KEYWORD: {
                        code: "INVALID_SEARCH_KEYWORD",
                        name: "INVALID_SEARCH_KEYWORD",
                        message: "Invalid search keyword. Please provide a valid search keyword.",
                        details: {}
                    },
                    INVALID_GROUP_PROPERTY: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "Invalid %s provided for the group. Please provide a valid %s.",
                        details: {}
                    },
                    INVALID_USER_PROPERTY: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "Invalid %s provided for a user. Please provide a valid %s.",
                        details: {}
                    },
                    PARAMETER_MUST_BE_A_NUMBER: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "%s method accepts parameter as a number.",
                        details: {}
                    },
                    PARAMETER_MUST_BE_AN_ARRAY: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "%s method accepts parameter as an array.",
                        details: {}
                    },
                    PARAMETER_MUST_BE_A_BOOLEAN: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "%s method accepts parameter as a boolean.",
                        details: {}
                    },
                    PARAMETER_MUST_BE_A_POSITIVE_NUMBER: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "%s method accepts parameter to be a positive number greater than 0.",
                        details: {}
                    },
                    PARAMETER_MUST_BE_A_STRING: {
                        code: "INVALID_%s",
                        name: "INVALID_%s",
                        message: "%s method accepts parameter as a string.",
                        details: {}
                    },
                    PARAMETER_COMPULSORY: {
                        code: "%s_IS_COMPULSORY",
                        name: "%s_IS_COMPULSORY",
                        message: "%s cannot be blank. Please provide a valid %s.",
                        details: {}
                    },
                    PASSWORD_COMPULSORY: {
                        code: "%s_IS_COMPULSORY",
                        name: "%s_IS_COMPULSORY",
                        message: "Password is mandatory for a password group.",
                        details: {}
                    },
                    INVALID_ARRAY: {code: "INVALID_%s", name: "INVALID_%s", message: "%s", details: {}}
                }, t.ReceiptErrors = {
                    MISSING_PARAMETERS: {
                        code: "MISSING_PARAMETERS",
                        name: "MISSING_PARAMETERS",
                        message: "Expected 4 parameters received 3",
                        details: {}
                    },
                    INVALID_PARAMETER: {code: "INVALID_%s", name: "INVALID_%s", message: "%s", details: {}},
                    NO_WEBSOCKET_CONNECTION: {
                        code: "NO_WEBSOCKET_CONNECTION",
                        name: "NO_WEBSOCKET_CONNECTION",
                        message: "Connection to our Websockets server is broken. Please retry after some time.",
                        details: {}
                    },
                    RECEIPTS_TEMPORARILY_BLOCKED: {
                        code: "RECEIPTS_TEMPORARILY_BLOCKED",
                        name: "RECEIPTS_TEMPORARILY_BLOCKED",
                        message: "Due to high load. Receipts have been blocked for your app.",
                        details: {}
                    },
                    UNKNOWN_ERROR_OCCURRED: {
                        code: "UNKNOWN_ERROR_OCCURRED",
                        name: "UNKNOWN_ERROR_OCCURRED",
                        message: "Unknown error occurred while marking a message as read.",
                        details: {}
                    }
                }, t.UserErrors = {
                    INVALID_STATUS: new s.CometChatException({
                        code: "INVALID_STATUS_VALUE",
                        name: "INVALID_STATUS_VALUE",
                        message: "The `status` parameter accepts only `online` or `offline`.",
                        details: ""
                    }),
                    INVALID_DIRECTION: new s.CometChatException({
                        code: "INVALID_DIRECTION_VALUE",
                        name: "INVALID_DIRECTION_VALUE",
                        message: "The `direction` parameter accepts only `both`, `blockeyByMe` or `hasBlockedMe`.",
                        details: ""
                    }),
                    USER_NOT_LOGGED_IN: new s.CometChatException({
                        code: "USER_NOT_LOGGED_IN",
                        name: "USER_NOT_LOGGED_IN",
                        message: "Please log in to CometChat before calling this method.",
                        details: ""
                    })
                }, t.GroupErrors = {
                    NOT_A_GROUP: new s.CometChatException({
                        code: "NOT_A_GROUP",
                        message: "Please use group class to construct a new group."
                    }),
                    INVALID_SCOPE: new s.CometChatException({
                        code: "INVALID_SCOPE_VALUE",
                        name: "INVALID_SCOPE_VALUE",
                        message: "Scope can be `admin`, `moderator` or `participant`.",
                        details: ""
                    }),
                    INVALID_GROUP_TYPE: new s.CometChatException({
                        code: "INVALID_GROUP_TYPE",
                        name: "INVALID_GROUP_TYPE",
                        message: "Group type can be `public`, `private`, `protected` or `password`.",
                        details: ""
                    })
                }, t.ConversationErrors = {
                    INVALID_CONVERSATION_TYPE: {
                        code: "INVALID_CONVERSATION_TYPE",
                        name: "INVALID_CONVERSATION_TYPE",
                        message: "Conversation type can be `user` or `group`.",
                        details: "Please check the value of conversationType."
                    },
                    CONVERSATION_NOT_FOUND: {
                        code: "CONVERSATION_NOT_FOUND",
                        name: "CONVERSATION_NOT_FOUND",
                        message: "Conversation for %s %s not found.",
                        details: "Please check the value of conversationWith and conversationType."
                    }
                }, t.ExtensionErrors = {
                    INVALID_EXTENSION: {
                        code: "ERROR_INVALID_EXTENSION",
                        name: "ERROR_INVALID_EXTENSION",
                        message: "The provided extension cannot be null or empty. Please provide a valid extension.",
                        details: {}
                    },
                    EXTENSION_NOT_FOUND: {
                        code: "ERROR_EXTENSION_NOT_FOUND",
                        name: "ERROR_EXTENSION_NOT_FOUND",
                        message: "The provided extension could not be found.",
                        details: {}
                    }
                }, t.MessageErrors = {
                    INVALID_RECEIVER_TYPE: {
                        code: "INVALID_RECEIVER_TYPE",
                        name: "INVALID_RECEIVER_TYPE",
                        message: "Receiver type can be `user` or `group`.",
                        details: "Please check the value of receiverType."
                    }
                }, t.FeatureRestrictionErrors = {
                    INVALID_FEATURE: {
                        code: "ERROR_INVALID_FEATURE",
                        name: "ERROR_INVALID_FEATURE",
                        message: "The provided feature cannot be null or empty. Please provide a valid feature.",
                        details: {}
                    },
                    FEATURE_NOT_FOUND: {
                        code: "ERROR_FEATURE_NOT_FOUND",
                        name: "ERROR_FEATURE_NOT_FOUND",
                        message: "The provided feature could not be found.",
                        details: {}
                    }
                }, t.PresenceConstatnts = {
                    STATUS: {
                        ONLINE: "online",
                        AVAILABLE: "available",
                        OFFLINE: "offline",
                        JOINED: "JOINED",
                        LEFT: "LEFT"
                    }
                }, t.APP_SETTINGS = {
                    APP_SETTINGS: "app_settings", KEYS: {
                        CHAT_HOST: "CHAT_HOST",
                        CHAT_USE_SSL: "CHAT_USE_SSL",
                        GROUP_SERVICE: "GROUP_SERVICE",
                        CALL_SERVICE: "CALL_SERVICE",
                        CHAT_WS_PORT: "CHAT_WS_PORT",
                        CHAT_WSS_PORT: "CHAT_WSS_PORT",
                        CHAT_HTTP_BIND_PORT: "CHAT_HTTP_BIND_PORT",
                        CHAT_HTTPS_BIND_PORT: "CHAT_HTTPS_BIND_PORT",
                        ADMIN_API_HOST: "ADMIN_API_HOST",
                        CLIENT_API_HOST: "CLIENT_API_HOST",
                        WEBRTC_HOST: "WEBRTC_HOST",
                        WEBRTC_USE_SSL: "WEBRTC_USE_SSL",
                        WEBRTC_WS_PORT: "WEBRTC_WS_PORT",
                        WEBRTC_WSS_PORT: "WEBRTC_WSS_PORT",
                        WEBRTC_HTTP_BIND_PORT: "WEBRTC_HTTP_BIND_PORT",
                        WEBRTC_HTTPS_BIND_PORT: "WEBRTC_HTTPS_BIND_PORT",
                        EXTENSION_LIST: "extensions",
                        EXTENSION_KEYS: {ID: "id", NAME: "name"},
                        JID_HOST_OVERRIDE: "JID_HOST_OVERRIDE",
                        CHAT_HOST_OVERRIDE: "CHAT_HOST_OVERRIDE",
                        CHAT_HOST_APP_SPECIFIC: "CHAT_HOST_APP_SPECIFIC",
                        MODE: "MODE",
                        CONNECTION_TYPE: "connection_type",
                        DEFAULT_MODE: "DEFAULT",
                        LIMITED_TRANSIENT: "LIMITED_TRANSIENT",
                        NO_TRANSIENT: "NO_TRANSIENT",
                        POLLING_ENABLED: "POLLING_ENABLED",
                        POLLING_INTERVAL: "POLLING_INTERVAL",
                        ANALYTICS_PING_DISABLED: "ANALYTICS_PING_DISABLED",
                        ANALYTICS_HOST: "ANALYTICS_HOST",
                        ANALYTICS_VERSION: "ANALYTICS_VERSION",
                        ANALYTICS_USE_SSL: "ANALYTICS_USE_SSL",
                        SETTINGS_HASH: "settingsHash",
                        SETTINGS_HASH_RECEIVED_AT: "settingsHashReceivedAt",
                        DENY_FALLBACK_TO_POLLING: "DENY_FALLBACK_TO_POLLING",
                        APP_VERSION: "APP_VERSION"
                    }
                }, t.COMMON_UTILITY_CONSTANTS = {
                    TYPE_CONSTANTS: {
                        BOOLEAN: "boolean",
                        STRING: "string",
                        OBJECT: "object",
                        NUMBER: "number"
                    }
                }, t.CONNECTION_STATUS = {
                    CONNECTED: "connected",
                    CONNECTING: "connecting",
                    DISCONNECTED: "disconnected",
                    FEATURE_THROTTLED: "featureThrottled"
                }, t.SESSION_STORE = {SESSION_ID: "sessionId"}, t.API_ERROR_CODES = {AUTH_ERR_AUTH_TOKEN_NOT_FOUND: "AUTH_ERR_AUTH_TOKEN_NOT_FOUND"}, t.PROSODY_API = {
                    DOMAIN_PREFIX: "xmpp",
                    PATH: {ROOM: "room", ROOM_SIZE: "room-size", SESSIONS: "sessions"},
                    RESPONSE: {PARTICIPANTS: "participants"},
                    QUERY_PARAMETERS: {DOMAIN: "domain", ROOM: "room"}
                }, t.ProsodyApiErrors = {
                    INVALID_SESSIONID: {
                        code: "ERROR_INVALID_SESSIONID",
                        name: "ERROR_INVALID_SESSIONID",
                        message: "The provided sessionId cannot be null or empty. Please provide a valid sessionId.",
                        details: ""
                    },
                    INVALID_TYPE: {
                        code: "ERROR_INVALID_TYPE",
                        name: "ERROR_INVALID_TYPE",
                        message: "The provided type cannot be null or empty. Please provide a valid type.",
                        details: ""
                    }
                }, t.JWT_API = {
                    KEYS: {
                        PASSTHROUGH: "passthrough",
                        EXPAND: "expand"
                    }
                }, t.ONLINE_MEMBER_COUNT_API = {
                    ENDPOINTS: {GET_ONLINE_MEMBER_COUNT: "api/v1/online-members"},
                    RESPONSE: {ONLINE_USERS_COUNT: "onlineUsersCount", GROUPS: "groups"},
                    ERRORS: {
                        INVALID_GROUPLIST: {
                            code: "ERROR_INVALID_GROUPLIST",
                            name: "ERROR_INVALID_GROUPLIST",
                            message: "Grouplist cannot be null or empty.",
                            details: ""
                        }
                    }
                }
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.CometChatException = void 0;
                t.CometChatException = function (e) {
                    null !== e.code && void 0 !== e.code && "" !== e.code && (this.code = e.code), null !== e.name && void 0 !== e.name && "" !== e.name && (this.name = e.name), null !== e.message && void 0 !== e.message && "" !== e.message && (this.message = e.message), null !== e.details && void 0 !== e.details && "" !== e.details && (this.details = e.details)
                }
            }, function (e, t, n) {
                "use strict";
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                }, o = this && this.__awaiter || function (e, t, n, r) {
                    return new (n || (n = Promise))((function (o, i) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                                e(t)
                            }))).then(s, a)
                        }

                        u((r = r.apply(e, t || [])).next())
                    }))
                }, i = this && this.__generator || function (e, t) {
                    var n, r, o, i, s = {
                        label: 0, sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        }, trys: [], ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }), i;

                    function a(i) {
                        return function (a) {
                            return function (i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {value: i[1], done: !1};
                                        case 5:
                                            s.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = s.trys).length && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {value: i[0] ? i[1] : void 0, done: !0}
                            }([i, a])
                        }
                    }
                };
                t.__esModule = !0, t.CometChat = void 0;
                var s = n(28), a = n(0), u = n(2), c = n(6), l = n(4), E = n(12), p = n(17), d = n(7), f = n(16),
                    S = n(10), h = n(11), g = n(1), C = n(8), T = n(15), _ = n(30), A = n(23), I = n(21), R = n(31),
                    y = n(14), m = n(20), O = n(40), v = n(41), N = n(42), L = n(43), P = n(45), M = n(46), w = n(25),
                    D = n(26), U = n(36), b = n(19), Y = n(34), G = n(48), k = n(49), x = n(50), K = n(35), F = n(24),
                    B = n(18), V = n(51), H = n(52), J = n(53), j = n(37), W = n(5), z = n(62), q = n(29), X = n(32),
                    Q = n(27), $ = n(63), Z = J.WSConnectionHelper.getInstance(), ee = j.ListenerHandlers.getInstance(),
                    te = function () {
                        function e(t) {
                            try {
                                e.appId = t, e.localStorage = E.LocalStorage.getInstance(), e.keyStore = _.KeyStore.getInstance()
                            } catch (t) {
                                a.Logger.error("CometChat: constructor", t)
                            }
                        }

                        return e.setAuthToken = function (t) {
                            try {
                                e.authToken = t
                            } catch (t) {
                                a.Logger.error("CometChat: setAuthToken", t)
                            }
                        }, e.prototype.getAuthToken = function () {
                            try {
                                return e.authToken
                            } catch (e) {
                                a.Logger.error("CometChat: getAuthToken", e)
                            }
                        }, e.getAppId = function () {
                            try {
                                return e.appId
                            } catch (e) {
                                a.Logger.error("CometChat: getAppId", e)
                            }
                        }, e.prototype.getApiKey = function () {
                            try {
                                return e.apiKey
                            } catch (e) {
                                a.Logger.error("CometChat: getApiKey", e)
                            }
                        }, e.getMode = function () {
                            try {
                                return e.mode
                            } catch (e) {
                                a.Logger.error("CometChat: getMode", e)
                            }
                        }, e.setMode = function (t) {
                            try {
                                e.mode = t
                            } catch (t) {
                                a.Logger.error("CometChat: getMode", t)
                            }
                        }, e.getSessionId = function () {
                            try {
                                return e.sessionId
                            } catch (e) {
                                a.Logger.error("CometChat: getAppId", e)
                            }
                        }, e.onStorageEvent = function (t) {
                            if (document && !document.hasFocus()) {
                                var n = e.appId + ":common_store/user";
                                t.key === n && null === t.newValue && (e.authToken = void 0, e.didAnalyticsPingStart() && e.clearAnalyticsPingTimer(), Z.WSLogout(), e.pushToLoginListener("", "Logout_Success")), t.key === n && null === t.oldValue && E.LocalStorage.getInstance().get("user").then((function (t) {
                                    t && (e.user = new l.Me(t), e.setAuthToken(e.user.getAuthToken()), t.jwt && (e.jwt = t.jwt), E.LocalStorage.getInstance().get("app_settings").then((function (t) {
                                        if (t) {
                                            if (t.hasOwnProperty(g.APP_SETTINGS.KEYS.APP_VERSION)) {
                                                var n = parseInt(g.APPINFO.sdkVersion.charAt(1));
                                                t[g.APP_SETTINGS.KEYS.APP_VERSION] < n && (e.appSettings.shouldAutoEstablishSocketConnection() || (e.shouldConnectToWS = !1), e.getInstance().internalRestart(e.user.getAuthToken()))
                                            } else e.appSettings.shouldAutoEstablishSocketConnection() || (e.shouldConnectToWS = !1), e.getInstance().internalRestart(e.user.getAuthToken());
                                            if (t[g.APP_SETTINGS.KEYS.MODE] && (e.mode = t[g.APP_SETTINGS.KEYS.MODE]), t[g.APP_SETTINGS.KEYS.SETTINGS_HASH] && (e.settingsHash = t[g.APP_SETTINGS.KEYS.SETTINGS_HASH]), t[g.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT] && (e.settingsHashReceivedAt = t[g.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT]), t[g.APP_SETTINGS.KEYS.ANALYTICS_HOST] && (e.analyticsHost = t[g.APP_SETTINGS.KEYS.ANALYTICS_HOST]), t[g.APP_SETTINGS.KEYS.ANALYTICS_VERSION] && (e.analyticsVersion = t[g.APP_SETTINGS.KEYS.ANALYTICS_VERSION]), e.isAnalyticsDisabled = !!t[g.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED], e.didAnalyticsPingStart() || e.isAnalyticsDisabled || !e.appSettings.shouldAutoEstablishSocketConnection() || (e.pingAnalytics(), e.startAnalyticsPingTimer()), e.getConnectionStatus() !== g.CONNECTION_STATUS.CONNECTED) {
                                                var r = new l.User(e.user);
                                                e.pushToLoginListener(r, "Login_Success"), e.appSettings.shouldAutoEstablishSocketConnection() && e.WSLogin(e.user)
                                            }
                                        }
                                    })))
                                }))
                            }
                        }, e.beforeUnload = function (t) {
                            var n = e.getDataFromSessionStorage(g.SESSION_STORE.SESSION_ID);
                            e.removeDataFromSessionStorage(g.SESSION_STORE.SESSION_ID), E.LocalStorage.getInstance().set(g.SESSION_STORE.SESSION_ID, n)
                        }, e.didAnalyticsPingStart = function () {
                            try {
                                return e.isAnalyticsPingStarted
                            } catch (e) {
                                a.Logger.error("CometChat: didAnalyticsPingStart", e)
                            }
                        }, e.getDataFromSessionStorage = function (e) {
                            if (window.sessionStorage) return window.sessionStorage.getItem(e)
                        }, e.addDataToSessionStorage = function (e, t) {
                            window.sessionStorage && window.sessionStorage.setItem(e, t)
                        }, e.removeDataFromSessionStorage = function (e) {
                            window.sessionStorage && window.sessionStorage.removeItem(e)
                        }, e.init = function (t, n) {
                            var r = this;
                            return void 0 === t && (t = ""), new Promise((function (o, i) {
                                try {
                                    "object" == typeof t && (t.hasOwnProperty("appId") && (t = t.appId), t.hasOwnProperty("appSettings") && (n = t.appSettings)), a.isFalsy(n) ? n = (new k.AppSettingsBuilder).setRegion(k.AppSettings.REGION_EU).build() : n.getRegion() == k.AppSettings.REGION_PRIVATE && (n.region = t), r.appSettings = n, a.isFalsy(t) ? i(new u.CometChatException(y.INIT_ERROR.NO_APP_ID)) : (window.addEventListener && (window.addEventListener("storage", e.onStorageEvent, !1), window.addEventListener("beforeunload", e.beforeUnload, !1)), r.initialzed = !0, e.appId = t, e.getInstance(t), E.LocalStorage.getInstance().get(g.SESSION_STORE.SESSION_ID).then((function (n) {
                                        null == n || null == n ? (e.sessionId = g.APPINFO.platform + "-" + g.APPINFO.sdkVersionWithUnderScore + "-" + $() + "-" + (new Date).getTime(), e.addDataToSessionStorage(g.SESSION_STORE.SESSION_ID, e.getSessionId()), E.LocalStorage.getInstance().remove(g.SESSION_STORE.SESSION_ID)) : (e.sessionId = n.toLocaleString(), E.LocalStorage.getInstance().remove(g.SESSION_STORE.SESSION_ID), e.addDataToSessionStorage(g.SESSION_STORE.SESSION_ID, e.getSessionId())), E.LocalStorage.getInstance().get(g.LOCAL_STORE.KEY_APP_ID).then((function (n) {
                                            if (null == n || null == n) e.appId = t, e.getInstance(t), E.LocalStorage.getInstance().set(g.LOCAL_STORE.KEY_APP_ID, t), o(!0); else {
                                                var i = n.toLocaleString();
                                                i === t ? (e.appId = i, e.getInstance(i), E.LocalStorage.getInstance().get(g.LOCAL_STORE.KEY_USER).then((function (t) {
                                                    t ? (e.isLoggedOut = !1, e.user = new l.Me(t), e.setAuthToken(e.user.getAuthToken()), t.jwt && (e.jwt = t.jwt), o(!0), E.LocalStorage.getInstance().get(g.LOCAL_STORE.KEY_APP_SETTINGS).then((function (t) {
                                                        if (t) {
                                                            if (t.hasOwnProperty(g.APP_SETTINGS.KEYS.APP_VERSION)) {
                                                                var n = parseInt(g.APPINFO.sdkVersion.charAt(1));
                                                                t[g.APP_SETTINGS.KEYS.APP_VERSION] < n && (r.appSettings.shouldAutoEstablishSocketConnection() || (e.shouldConnectToWS = !1), e.getInstance().internalRestart(e.user.getAuthToken()))
                                                            } else r.appSettings.shouldAutoEstablishSocketConnection() || (e.shouldConnectToWS = !1), e.getInstance().internalRestart(e.user.getAuthToken());
                                                            t[g.APP_SETTINGS.KEYS.MODE] && (e.mode = t[g.APP_SETTINGS.KEYS.MODE]), t[g.APP_SETTINGS.KEYS.SETTINGS_HASH] && (e.settingsHash = t[g.APP_SETTINGS.KEYS.SETTINGS_HASH]), t[g.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT] && (e.settingsHashReceivedAt = t[g.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT]), t[g.APP_SETTINGS.KEYS.ANALYTICS_HOST] && (e.analyticsHost = t[g.APP_SETTINGS.KEYS.ANALYTICS_HOST]), t[g.APP_SETTINGS.KEYS.ANALYTICS_VERSION] && (e.analyticsVersion = t[g.APP_SETTINGS.KEYS.ANALYTICS_VERSION]), e.isAnalyticsDisabled = !!t[g.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED], e.didAnalyticsPingStart() || e.isAnalyticsDisabled || !r.appSettings.shouldAutoEstablishSocketConnection() || (e.pingAnalytics(), e.startAnalyticsPingTimer()), Z && !Z.connection && r.appSettings.shouldAutoEstablishSocketConnection() && (e.isConnectingFromInit = !0, e.WSLogin(e.user))
                                                        }
                                                    }))) : o(!0)
                                                }))) : r.clearCache().then((function () {
                                                    e.apiKey = void 0, e.user = void 0, e.authToken = void 0, e.cometChat = void 0, e.mode = void 0, Z.WSLogout(), e.appId = t, E.LocalStorage.getInstance().set(g.LOCAL_STORE.KEY_APP_ID, t), e.getInstance(t), o(!0)
                                                }))
                                            }
                                            _.KeyStore.getInstance().get(g.LOCAL_STORE.KEY_DEVICE_ID).then((function (e) {
                                                if (null == e) {
                                                    var n = $(), r = (new Date).getTime(), o = t + "_" + n + "_" + r;
                                                    _.KeyStore.getInstance().set(g.LOCAL_STORE.KEY_DEVICE_ID, o)
                                                }
                                            }))
                                        }))
                                    })))
                                } catch (e) {
                                    i(new u.CometChatException(e))
                                }
                            }))
                        }, e.isInitialized = function () {
                            try {
                                return this.initialzed
                            } catch (e) {
                                a.Logger.error("CometChat: isInitialized", e)
                            }
                        }, e.getInstance = function (t) {
                            try {
                                return this.cometChat || (this.cometChat = new e(t)), this.cometChat
                            } catch (t) {
                                a.Logger.error("CometChat: getInstance", t)
                            }
                        }, e.registerTokenForPushNotification = function (t, n) {
                            var r = this;
                            return new Promise((function (o, i) {
                                try {
                                    e.keyStore.get(g.LOCAL_STORE.KEY_DEVICE_ID).then((function (s) {
                                        var a = "", l = s, E = g.APPINFO.platform, p = g.APPINFO.sdkVersion,
                                            d = g.APPINFO.apiVersion;
                                        if (navigator && (a = navigator.userAgent), null == l) {
                                            var f = $(), S = (new Date).getTime();
                                            l = r.appId + "_" + f + "_" + S, e.keyStore.set(g.LOCAL_STORE.KEY_DEVICE_ID, l)
                                        }
                                        var h = {
                                            platform: E,
                                            deviceId: l,
                                            appInfo: {
                                                version: p,
                                                apiVersion: d,
                                                userAgent: a,
                                                pushNotification: {fcmDeviceToken: t, settings: n}
                                            }
                                        };
                                        c.makeApiCall("updateMyDetails", {}, h, !1).then((function (e) {
                                            o("Token Registration successful")
                                        }), (function (e) {
                                            i(new u.CometChatException(e.error))
                                        })).catch((function (e) {
                                            i(new u.CometChatException(e))
                                        }))
                                    }))
                                } catch (e) {
                                    i(new u.CometChatException(e))
                                }
                            }))
                        }, e.pushToLoginListener = function (e, t) {
                            ee.loginHandlers.map((function (n) {
                                try {
                                    if (n._eventListener) switch (t) {
                                        case"Login_Success":
                                            a.isFalsy(n._eventListener.loginSuccess) || n._eventListener.loginSuccess(e);
                                            break;
                                        case"Login_Failure":
                                            a.isFalsy(n._eventListener.loginFailure) || n._eventListener.loginFailure(e);
                                            break;
                                        case"Logout_Success":
                                            a.isFalsy(n._eventListener.logoutSuccess) || n._eventListener.logoutSuccess()
                                    }
                                } catch (n) {
                                    a.Logger.error("ConnectionHandlers: onConnected Status", n)
                                }
                            }))
                        }, e.login = function () {
                            for (var t = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            return new Promise((function (r, o) {
                                try {
                                    if (e.loginInProgress) {
                                        e.isLoggedOut = !0;
                                        var i = new u.CometChatException(y.LOGIN_ERROR.REQUEST_IN_PROGRESS);
                                        return o(i)
                                    }
                                    e.loginInProgress = !0, e.isConnectingFromInit = !1, e.localStorage.get(g.LOCAL_STORE.KEY_APP_ID).then((function (i) {
                                        if (null == i || null == i) {
                                            var s = new u.CometChatException(y.LOGIN_ERROR.NOT_INITIALIZED);
                                            return e.internalRestart || e.pushToLoginListener(s, "Login_Failure"), e.loginInProgress = !1, e.isLoggedOut = !0, o(s)
                                        }
                                        var c = i.toLocaleString();
                                        if (t.getInstance(c), e.appId = c, E.LocalStorage.getInstance().set(g.LOCAL_STORE.KEY_APP_ID, c), "object" == typeof n[0]) {
                                            var p = n[0];
                                            n[0].hasOwnProperty("authToken") ? n[0] = p.authToken : n[0].hasOwnProperty("username") && n[0].hasOwnProperty("apiKey") && (n[0] = p.username, n[1] = p.apiKey)
                                        }
                                        if (2 == n.length) {
                                            if (a.isFalsy(n[0]) || a.isFalsy(n[1])) return s = new u.CometChatException(y.ERRORS.PARAMETER_MISSING), e.internalRestart || e.pushToLoginListener(s, "Login_Failure"), e.loginInProgress = !1, e.isLoggedOut = !0, o(s)
                                        } else {
                                            if (1 != n.length) return s = new u.CometChatException(y.ERRORS.PARAMETER_MISSING), e.internalRestart || e.pushToLoginListener(s, "Login_Failure"), e.loginInProgress = !1, e.isLoggedOut = !0, o(s);
                                            if (a.isFalsy(n[0])) return s = new u.CometChatException(y.ERRORS.PARAMETER_MISSING), e.internalRestart || e.pushToLoginListener(s, "Login_Failure"), e.loginInProgress = !1, e.isLoggedOut = !0, o(s)
                                        }
                                        return a.isFalsy(t.getAppId()) ? (s = new u.CometChatException(y.LOGIN_ERROR.NOT_INITIALIZED), e.internalRestart || e.pushToLoginListener(s, "Login_Failure"), e.loginInProgress = !1, e.isLoggedOut = !0, o(s)) : e.localStorage.get(g.LOCAL_STORE.KEY_USER).then((function (i) {
                                            if (2 == n.length) {
                                                e.apiKey = n[1];
                                                var s = n[0];
                                                if (null != i && i.uid !== n[0]) e.localStorage.clearStore().then((function () {
                                                    Z.WSLogout(), e.generateAuthToken(s).then((function (t) {
                                                        e.user = new l.Me(t), e.setAuthToken(e.user.getAuthToken()), e.getLoggedInUser().then((function (t) {
                                                            (e.user = new l.Me(t)).setAuthToken(e.authToken), e.setAuthToken(e.user.getAuthToken());
                                                            var n = e.user;
                                                            n.setStatus(g.PresenceConstatnts.STATUS.ONLINE), e.localStorage.set("user", n);
                                                            var o = new l.User(n);
                                                            r(o), e.isConnectingFromInit || e.internalRestart || e.pushToLoginListener(o, "Login_Success"), e.loginInProgress = !1, e.didAnalyticsPingStart() || e.isAnalyticsDisabled || !e.appSettings.shouldAutoEstablishSocketConnection() || (e.pingAnalytics(), e.startAnalyticsPingTimer()), e.isLoggedOut = !1, (e.appSettings.shouldAutoEstablishSocketConnection() || e.internalRestart) && e.shouldConnectToWS && e.WSLogin(e.user)
                                                        }), (function (t) {
                                                            return e.internalRestart || e.pushToLoginListener(t, "Login_Failure"), e.loginInProgress = !1, e.isLoggedOut = !0, o(t)
                                                        }))
                                                    }), (function (t) {
                                                        return e.internalRestart || e.pushToLoginListener(t, "Login_Failure"), e.loginInProgress = !1, e.isLoggedOut = !0, o(t)
                                                    }))
                                                })); else {
                                                    if (!a.isFalsy(e.authToken)) {
                                                        var c = new l.User(t.user);
                                                        return e.internalRestart || e.pushToLoginListener(c, "Login_Success"), e.loginInProgress = !1, e.isLoggedOut = !1, r(c)
                                                    }
                                                    if (!a.isFalsy(s)) {
                                                        if (a.isFalsy(e.apiKey)) {
                                                            var E = new u.CometChatException(y.LOGIN_ERROR.UNAUTHORISED);
                                                            return e.internalRestart || e.pushToLoginListener(E, "Login_Failure"), e.loginInProgress = !1, e.isLoggedOut = !0, o(E)
                                                        }
                                                        t.generateAuthToken(s).then((function (n) {
                                                            t.user = new l.Me(n), t.setAuthToken(e.user.getAuthToken()), t.getLoggedInUser().then((function (n) {
                                                                t.user = new l.Me(n), t.user.setAuthToken(e.authToken), t.setAuthToken(t.user.getAuthToken()), Z.WSLogout();
                                                                var o = t.user;
                                                                o.setStatus(g.PresenceConstatnts.STATUS.ONLINE), t.localStorage.set("user", o);
                                                                var i = new l.User(o);
                                                                r(i), e.isConnectingFromInit || e.internalRestart || e.pushToLoginListener(i, "Login_Success"), e.loginInProgress = !1, e.didAnalyticsPingStart() || e.isAnalyticsDisabled || !e.appSettings.shouldAutoEstablishSocketConnection() || (e.pingAnalytics(), e.startAnalyticsPingTimer()), e.isLoggedOut = !1, (e.appSettings.shouldAutoEstablishSocketConnection() || e.internalRestart) && e.shouldConnectToWS && t.WSLogin(t.user)
                                                            }), (function (t) {
                                                                return e.internalRestart || e.pushToLoginListener(t, "Login_Failure"), e.loginInProgress = !1, e.isLoggedOut = !0, o(t)
                                                            }))
                                                        }), (function (t) {
                                                            return e.internalRestart || e.pushToLoginListener(t, "Login_Failure"), e.loginInProgress = !1, e.isLoggedOut = !0, o(t)
                                                        }))
                                                    }
                                                }
                                            } else e.authToken = n[0], t.getLoggedInUser().then((function (s) {
                                                if (s.authToken != n[0]) {
                                                    var a = t;
                                                    a.localStorage.clearStore().then((function () {
                                                        Z.WSLogout(), a.getLoggedInUser().then((function (t) {
                                                            (e.user = new l.Me(t)).setAuthToken(e.authToken), e.setAuthToken(e.user.getAuthToken());
                                                            var n = e.user;
                                                            n.setStatus(g.PresenceConstatnts.STATUS.ONLINE), a.localStorage.set("user", n);
                                                            var o = new l.User(n);
                                                            r(o), e.isConnectingFromInit || e.internalRestart || e.pushToLoginListener(o, "Login_Success"), e.loginInProgress = !1, e.didAnalyticsPingStart() || e.isAnalyticsDisabled || !e.appSettings.shouldAutoEstablishSocketConnection() || (e.pingAnalytics(), e.startAnalyticsPingTimer()), e.isLoggedOut = !1, (e.appSettings.shouldAutoEstablishSocketConnection() || e.internalRestart) && e.shouldConnectToWS && e.WSLogin(new l.Me(t))
                                                        }), (function (t) {
                                                            return e.internalRestart || e.pushToLoginListener(t, "Login_Failure"), e.loginInProgress = !1, e.isLoggedOut = !0, o(t)
                                                        }))
                                                    }))
                                                } else {
                                                    if (i) {
                                                        var u = new l.User(s);
                                                        return e.internalRestart || e.pushToLoginListener(u, "Login_Success"), e.loginInProgress = !1, e.isLoggedOut = !1, r(u)
                                                    }
                                                    (e.user = new l.Me(s)).setAuthToken(e.authToken), e.setAuthToken(e.user.getAuthToken());
                                                    var c = e.user;
                                                    c.setStatus(g.PresenceConstatnts.STATUS.ONLINE), e.localStorage.set("user", c);
                                                    var E = new l.User(c);
                                                    r(E), e.isConnectingFromInit || e.internalRestart || e.pushToLoginListener(E, "Login_Success"), e.loginInProgress = !1, e.didAnalyticsPingStart() || e.isAnalyticsDisabled || !e.appSettings.shouldAutoEstablishSocketConnection() || (e.pingAnalytics(), e.startAnalyticsPingTimer()), e.isLoggedOut = !1, (e.appSettings.shouldAutoEstablishSocketConnection() || e.internalRestart) && e.shouldConnectToWS && e.WSLogin(new l.Me(s))
                                                }
                                            }), (function (t) {
                                                return e.internalRestart || e.pushToLoginListener(t, "Login_Failure"), e.loginInProgress = !1, e.isLoggedOut = !0, o(t)
                                            }))
                                        }))
                                    }))
                                } catch (t) {
                                    return i = new u.CometChatException(t), e.internalRestart || e.pushToLoginListener(i, "Login_Failure"), e.loginInProgress = !1, e.isLoggedOut = !0, o(i)
                                }
                            }))
                        }, e.sendMessage = function (e) {
                            var t = this;
                            return new Promise((function (n, r) {
                                return o(t, void 0, void 0, (function () {
                                    var t, s, l, E = this;
                                    return i(this, (function (d) {
                                        try {
                                            return e instanceof f.TextMessage || e instanceof p.MediaMessage || e instanceof b.CustomMessage || (e = e[g.MessageConstatnts.KEYS.ATTATCHMENT] ? (t = g.MessageConstatnts.TYPE.FILE, a.isImage(e[g.MessageConstatnts.KEYS.ATTATCHMENT]) ? t = g.MessageConstatnts.TYPE.IMAGE : a.isAudio(e[g.MessageConstatnts.KEYS.ATTATCHMENT]) ? t = g.MessageConstatnts.TYPE.AUDIO : a.isVideo(e[g.MessageConstatnts.KEYS.ATTATCHMENT]) && (t = g.MessageConstatnts.TYPE.VIDEO), new p.MediaMessage(e[g.MessageConstatnts.KEYS.RECEIVER_ID], e[g.MessageConstatnts.KEYS.ATTATCHMENT], t, e[g.MessageConstatnts.KEYS.RECEIVER_TYPE])) : new f.TextMessage(e[g.MessageConstatnts.KEYS.RECEIVER_ID], e[g.MessageConstatnts.KEYS.TEXT], e[g.MessageConstatnts.KEYS.RECEIVER_TYPE])), (s = a.validateMessage(e)) instanceof u.CometChatException ? (r(s), [2]) : (e.receiver = e.receiverId, delete e.receiverId, l = e.parentMessageId, [2, c.makeApiCall(l ? "sendMessageInThread" : "sendMessage", l ? {parentId: l} : {}, e, e instanceof p.MediaMessage).then((function (e) {
                                                return o(E, void 0, void 0, (function () {
                                                    var t;
                                                    return i(this, (function (r) {
                                                        return t = S.MessageController.trasformJSONMessge(e.data), w.MessageListnerMaping.getInstance().set("all", parseInt(t.id)), n(t), [2]
                                                    }))
                                                }))
                                            }), (function (e) {
                                                r(new u.CometChatException(e.error))
                                            }))])
                                        } catch (d) {
                                            r(new u.CometChatException(d))
                                        }
                                        return [2]
                                    }))
                                }))
                            }))
                        }, e.sendDirectMessage = function (e) {
                            try {
                                return Object.assign(e, {receiverType: g.MessageConstatnts.RECEIVER_TYPE.USER}), this.sendMessage(e)
                            } catch (e) {
                                a.Logger.error("CometChat: sendDirectMessage", e)
                            }
                        }, e.sendGroupMessage = function (e) {
                            try {
                                return Object.assign(e, {receiverType: g.MessageConstatnts.RECEIVER_TYPE.GROUP}), this.sendMessage(e)
                            } catch (e) {
                                a.Logger.error("CometChat: sendGroupMessage", e)
                            }
                        }, e.sendMediaMessage = function (e) {
                            try {
                                return this.sendMessage(e)
                            } catch (e) {
                                a.Logger.error("CometChat: sendMediaMessage", e)
                            }
                        }, e.sendCustomMessage = function (e) {
                            try {
                                return this.sendMessage(e)
                            } catch (e) {
                                a.Logger.error("CometChat: sendCustomMessage", e)
                            }
                        }, e.getLastDeliveredMessageId = function () {
                            return o(this, void 0, void 0, (function () {
                                var e;
                                return i(this, (function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, w.MessageListnerMaping.getInstance().get(g.LOCAL_STORE.KEY_MESSAGE_LISTENER_LIST)];
                                        case 1:
                                            return [2, t.sent()];
                                        case 2:
                                            return e = t.sent(), a.Logger.error("CometChat: getLastDeliveredMessageId", e), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))
                        }, e.startTyping = function (t) {
                            try {
                                if (a.isFalsy(t)) return;
                                var n = void 0, r = this.RECEIVER_TYPE.USER, o = {};
                                if (t instanceof D.TypingIndicator) n = t.getReceiverId(), r = t.getReceiverType(), o = t.getMetadata(); else {
                                    if (!t.hasOwnProperty(g.TYPING_NOTIFICATION.RECEIVER_ID)) return;
                                    n = t[g.TYPING_NOTIFICATION.RECEIVER_ID], t.hasOwnProperty(g.TYPING_NOTIFICATION.RECEIVER_TYPE) && (r = t[g.TYPING_NOTIFICATION.RECEIVER_TYPE]), t.hasOwnProperty(g.TYPING_NOTIFICATION.META) && (o = t[g.TYPING_NOTIFICATION.META])
                                }
                                if (a.isFalsy(n)) return;
                                if (null == U.TypingNotificationController.getTypingStartedMap(n)) {
                                    var i = e.getMode();
                                    return a.isFalsy(i) || i && i !== g.APP_SETTINGS.KEYS.NO_TRANSIENT && i !== g.APP_SETTINGS.KEYS.LIMITED_TRANSIENT ? (Z.startTypingIndicator(n, r, o), U.TypingNotificationController.addTypingStarted(n), void U.TypingNotificationController.removeTypingEnded(n)) : void 0
                                }
                            } catch (t) {
                                a.Logger.error("CometChat: startTyping", t)
                            }
                        }, e.endTyping = function (t) {
                            try {
                                if (a.isFalsy(t)) return;
                                var n = void 0, r = this.RECEIVER_TYPE.USER, o = {};
                                if (t instanceof D.TypingIndicator) n = t.getReceiverId(), r = t.getReceiverType(), o = t.getMetadata(); else {
                                    if (!t.hasOwnProperty(g.TYPING_NOTIFICATION.RECEIVER_ID)) return;
                                    n = t[g.TYPING_NOTIFICATION.RECEIVER_ID], t.hasOwnProperty(g.TYPING_NOTIFICATION.RECEIVER_TYPE) && (r = t[g.TYPING_NOTIFICATION.RECEIVER_TYPE]), r = r == this.RECEIVER_TYPE.USER ? g.WS.CONVERSATION.TYPE.CHAT : g.WS.CONVERSATION.TYPE.GROUP_CHAT, t.hasOwnProperty(g.TYPING_NOTIFICATION.META) && (o = t[g.TYPING_NOTIFICATION.META])
                                }
                                if (a.isFalsy(n)) return;
                                if (null == U.TypingNotificationController.getTypingEndedMap(n)) {
                                    var i = e.getMode();
                                    return a.isFalsy(i) || i && i !== g.APP_SETTINGS.KEYS.NO_TRANSIENT && i !== g.APP_SETTINGS.KEYS.LIMITED_TRANSIENT ? (Z.pauseTypingIndicator(n, r, o), U.TypingNotificationController.addTypingEnded(n), void U.TypingNotificationController.removeTypingStarted(n)) : void 0
                                }
                            } catch (t) {
                                a.Logger.error("CometChat: endTyping", t)
                            }
                        }, e.markAsRead = function () {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return new Promise((function (n, r) {
                                try {
                                    var o = void 0, i = void 0, s = void 0, c = void 0;
                                    if (3 === t.length) return r(new u.CometChatException(g.ReceiptErrors.MISSING_PARAMETERS));
                                    if (4 === t.length) {
                                        if (a.isFalsy(t[0]) || "string" != typeof t[0]) return r(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ReceiptErrors.INVALID_PARAMETER), "MESSAGE_ID", "MESSAGE_ID", "Message ID should be a string."))));
                                        if (o = t[0], a.isFalsy(t[1]) || "string" != typeof t[1]) return r(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ReceiptErrors.INVALID_PARAMETER), "RECEIVER_ID", "RECEIVER_ID", "Receiver ID should be a string."))));
                                        if (i = t[1], a.isFalsy(t[2]) || "string" != typeof t[2]) return r(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ReceiptErrors.INVALID_PARAMETER), "RECEIVER_TYPE", "RECEIVER_TYPE", "Receiver type should be a string."))));
                                        if (s = t[2], a.isFalsy(t[3]) || "string" != typeof t[3]) return r(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ReceiptErrors.INVALID_PARAMETER), "SENDER_ID", "SENDER_ID", "Sender ID should be a string."))));
                                        c = t[3]
                                    } else {
                                        if (1 !== t.length) return r(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ReceiptErrors.INVALID_PARAMETER), "ARGUMENTS", "ARGUMENTS", "markAsRead() expects either 1 or 4 arguments."))));
                                        if (a.isFalsy(t[0]) || !(t[0] instanceof d.BaseMessage)) return r(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ReceiptErrors.INVALID_PARAMETER), "MESSAGE", "MESSAGE", "Invalid message object received."))));
                                        var l = t[0];
                                        o = l.getId().toString(), i = (s = l.getReceiverType()) === g.MessageConstatnts.RECEIVER_TYPE.USER ? l.getSender().getUid() === e.user.getUid() ? l.getReceiverId() : l.getSender().getUid() : l.getReceiverId(), c = l.getSender().getUid()
                                    }
                                    var E = e.getMode();
                                    return a.isFalsy(E) || E && E !== g.APP_SETTINGS.KEYS.NO_TRANSIENT && E !== g.APP_SETTINGS.KEYS.LIMITED_TRANSIENT ? e.getConnectionStatus() === g.CONNECTION_STATUS.CONNECTED ? (Z.markAsRead(i, s, o, c), n()) : r(new u.CometChatException(g.ReceiptErrors.NO_WEBSOCKET_CONNECTION)) : r(new u.CometChatException(g.ReceiptErrors.RECEIPTS_TEMPORARILY_BLOCKED))
                                } catch (n) {
                                    return a.Logger.error("CometChat: markAsRead", n), r(new u.CometChatException(g.ReceiptErrors.UNKNOWN_ERROR_OCCURRED))
                                }
                            }))
                        }, e.markAsDelivered = function () {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return new Promise((function (n, r) {
                                try {
                                    var o = void 0, i = void 0, s = void 0, c = void 0;
                                    if (3 === t.length) return r(new u.CometChatException(g.ReceiptErrors.MISSING_PARAMETERS));
                                    if (4 === t.length) {
                                        if (a.isFalsy(t[0]) || "string" != typeof t[0]) return r(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ReceiptErrors.INVALID_PARAMETER), "MESSAGE_ID", "MESSAGE_ID", "Message ID should be a string."))));
                                        if (o = t[0], a.isFalsy(t[1]) || "string" != typeof t[1]) return r(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ReceiptErrors.INVALID_PARAMETER), "RECEIVER_ID", "RECEIVER_ID", "Receiver ID should be a string."))));
                                        if (i = t[1], a.isFalsy(t[2]) || "string" != typeof t[2]) return r(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ReceiptErrors.INVALID_PARAMETER), "RECEIVER_TYPE", "RECEIVER_TYPE", "Receiver type should be a string."))));
                                        if (s = t[2], a.isFalsy(t[3]) || "string" != typeof t[3]) return r(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ReceiptErrors.INVALID_PARAMETER), "SENDER_ID", "SENDER_ID", "Sender ID should be a string."))));
                                        c = t[3]
                                    } else {
                                        if (1 !== t.length) return r(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ReceiptErrors.INVALID_PARAMETER), "ARGUMENTS", "ARGUMENTS", "markAsDelivered() expects either 1 or 4 arguments."))));
                                        if (a.isFalsy(t[0]) || !(t[0] instanceof d.BaseMessage)) return r(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ReceiptErrors.INVALID_PARAMETER), "MESSAGE", "MESSAGE", "Invalid message object received."))));
                                        var l = t[0];
                                        o = l.getId().toString(), i = (s = l.getReceiverType()) === g.MessageConstatnts.RECEIVER_TYPE.USER ? l.getSender().getUid() === e.user.getUid() ? l.getReceiverId() : l.getSender().getUid() : l.getReceiverId(), c = l.getSender().getUid()
                                    }
                                    var E = e.getMode();
                                    return a.isFalsy(E) || E && E !== g.APP_SETTINGS.KEYS.NO_TRANSIENT && E !== g.APP_SETTINGS.KEYS.LIMITED_TRANSIENT ? e.getConnectionStatus() === g.CONNECTION_STATUS.CONNECTED ? (Z.markAsDelivered(i, s, o, c), n()) : r(new u.CometChatException(g.ReceiptErrors.NO_WEBSOCKET_CONNECTION)) : r(new u.CometChatException(g.ReceiptErrors.RECEIPTS_TEMPORARILY_BLOCKED))
                                } catch (n) {
                                    return a.Logger.error("CometChat: markAsDelivered", n), r(new u.CometChatException(g.ReceiptErrors.UNKNOWN_ERROR_OCCURRED))
                                }
                            }))
                        }, e.sendTransientMessage = function (t) {
                            try {
                                if (a.isFalsy(t)) return;
                                var n, r, o;
                                if (!(t instanceof Q.TransientMessage)) return;
                                if (n = t.getReceiverId(), r = t.getReceiverType(), o = t.getData(), a.isFalsy(n) || a.isFalsy(r)) return;
                                var i = e.getMode();
                                return a.isFalsy(i) || i && i !== g.APP_SETTINGS.KEYS.NO_TRANSIENT ? void Z.sendTransientMessage(n, r, o) : void 0
                            } catch (t) {
                                a.Logger.error("CometChat: sendTransientMessage", t)
                            }
                        }, e.sendTestMessage = function (e) {
                            return o(this, void 0, void 0, (function () {
                                var t, n;
                                return i(this, (function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 3, , 4]), (t = e) instanceof d.BaseMessage ? [3, 2] : [4, x.CometChatHelper.processMessage(e)];
                                        case 1:
                                            t = r.sent(), r.label = 2;
                                        case 2:
                                            return t instanceof f.TextMessage && J.WSConnectionHelper.getInstance().publishMessage(t), [3, 4];
                                        case 3:
                                            return n = r.sent(), a.Logger.error("CometChat: sendTestMessage", n), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }, e.getMessageDetails = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    a.isFalsy(e) ? n(new u.CometChatException(y.ERRORS.PARAMETER_MISSING)) : c.makeApiCall("getMessageDetails", {messageId: e}).then((function (e) {
                                        t(S.MessageController.trasformJSONMessge(e.data))
                                    }), (function (e) {
                                        a.Logger.error("CometChat:GetMessageDetails:", e), n(new u.CometChatException(e.error))
                                    }))
                                } catch (e) {
                                    n(new u.CometChatException(e))
                                }
                            }))
                        }, e.getMessageReceipts = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    var r = a.validateMsgId(e);
                                    if (r instanceof u.CometChatException) return void n(r);
                                    a.isFalsy(e) ? n(new u.CometChatException(y.ERRORS.PARAMETER_MISSING)) : c.makeApiCall("getMessageDetails", {messageId: e}).then((function (e) {
                                        S.MessageController.getReceiptsFromJSON(e.data).then((function (e) {
                                            t(e)
                                        }), (function (e) {
                                            n(new u.CometChatException(e))
                                        }))
                                    }), (function (e) {
                                        a.Logger.error("CometChat:GetMessageDetails:", e), n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.getUnreadMessageCount = function (e) {
                            void 0 === e && (e = !1);
                            var t = 0;
                            return new Promise((function (n, r) {
                                try {
                                    var o = a.validateHideMessagesFromBlockedUsers(e);
                                    if (o instanceof u.CometChatException) return void r(o);
                                    e && (t = 1), c.makeApiCall("getMessages", {}, {
                                        unread: 1,
                                        count: 1,
                                        hideMessagesFromBlockedUsers: t
                                    }).then((function (e) {
                                        var t = {}, r = {};
                                        e.data.map((function (e) {
                                            e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_TYPE] == g.MessageConstatnts.RECEIVER_TYPE.GROUP ? r[e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT] : t[e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT]
                                        })), n({users: t, groups: r})
                                    }), (function (e) {
                                        r(new u.CometChatException(e.error))
                                    }))
                                } catch (o) {
                                    r(new u.CometChatException(o))
                                }
                            }))
                        }, e.getUnreadMessageCountForAllUsers = function (e) {
                            void 0 === e && (e = !1);
                            var t = 0;
                            return new Promise((function (n, o) {
                                try {
                                    var i = a.validateHideMessagesFromBlockedUsers(e);
                                    if (i instanceof u.CometChatException) return void o(i);
                                    e && (t = 1), c.makeApiCall("getMessages", {}, {
                                        hideMessagesFromBlockedUsers: t,
                                        receiverType: g.MessageConstatnts.RECEIVER_TYPE.USER,
                                        unread: 1,
                                        count: 1
                                    }).then((function (e) {
                                        var t = {};
                                        e.data.map((function (e) {
                                            t[e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT]
                                        })), n(r({}, t))
                                    }), (function (e) {
                                        o(new u.CometChatException(e.error))
                                    }))
                                } catch (i) {
                                    o(new u.CometChatException(i))
                                }
                            }))
                        }, e.getUnreadMessageCountForAllGroups = function (e) {
                            void 0 === e && (e = !1);
                            var t = 0;
                            return new Promise((function (n, o) {
                                try {
                                    var i = a.validateHideMessagesFromBlockedUsers(e);
                                    if (i instanceof u.CometChatException) return void o(i);
                                    e && (t = 1), c.makeApiCall("getMessages", {}, {
                                        hideMessagesFromBlockedUsers: t,
                                        receiverType: g.MessageConstatnts.RECEIVER_TYPE.GROUP,
                                        unread: 1,
                                        count: 1
                                    }).then((function (e) {
                                        var t = {};
                                        e.data.map((function (e) {
                                            e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_TYPE] == g.MessageConstatnts.RECEIVER_TYPE.GROUP && (t[e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT])
                                        })), n(r({}, t))
                                    }), (function (e) {
                                        o(new u.CometChatException(e.error))
                                    }))
                                } catch (i) {
                                    o(new u.CometChatException(i))
                                }
                            }))
                        }, e.getUnreadMessageCountForUser = function (e, t) {
                            void 0 === t && (t = !1);
                            var n = 0;
                            return new Promise((function (o, i) {
                                try {
                                    var s = a.validateId(e, "user");
                                    if (s instanceof u.CometChatException) return void i(s);
                                    var l = a.validateHideMessagesFromBlockedUsers(t);
                                    if (l instanceof u.CometChatException) return void i(l);
                                    t && (n = 1), c.makeApiCall("getUserMessages", {listId: e}, {
                                        hideMessagesFromBlockedUsers: n,
                                        unread: 1,
                                        count: 1,
                                        uid: e
                                    }).then((function (e) {
                                        var t = {};
                                        e.data.map((function (e) {
                                            t[e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT]
                                        })), o(r({}, t))
                                    }), (function (e) {
                                        i(new u.CometChatException(e.error))
                                    }))
                                } catch (s) {
                                    i(new u.CometChatException(s))
                                }
                            }))
                        }, e.getUnreadMessageCountForGroup = function (e, t) {
                            void 0 === t && (t = !1);
                            var n = 0;
                            return new Promise((function (o, i) {
                                try {
                                    var s = a.validateId(e, "group");
                                    if (s instanceof u.CometChatException) return void i(s);
                                    var l = a.validateHideMessagesFromBlockedUsers(t);
                                    if (l instanceof u.CometChatException) return void i(l);
                                    t && (n = 1), c.makeApiCall("getGroupMessages", {listId: e}, {
                                        hideMessagesFromBlockedUsers: n,
                                        unread: 1,
                                        count: 1,
                                        guid: e
                                    }).then((function (e) {
                                        var t = {};
                                        e.data.map((function (e) {
                                            e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_TYPE] == g.MessageConstatnts.RECEIVER_TYPE.GROUP && (t[e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = e[g.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT])
                                        })), o(r({}, t))
                                    }), (function (e) {
                                        i(new u.CometChatException(e.error))
                                    }))
                                } catch (s) {
                                    i(new u.CometChatException(s))
                                }
                            }))
                        }, e.editMessage = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    var r = a.validateMsgId(e.getId());
                                    if (r instanceof u.CometChatException) return void n(r);
                                    c.makeApiCall("updateMessage", {messageId: e.getId()}, e).then((function (e) {
                                        t(S.MessageController.trasformJSONMessge(e.data).getActionOn())
                                    }), (function (e) {
                                        n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.deleteMessage = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    var r = a.validateMsgId(e);
                                    if (r instanceof u.CometChatException) return void n(r);
                                    c.makeApiCall("deleteMessage", {messageId: e}, {id: e}).then((function (e) {
                                        t(S.MessageController.trasformJSONMessge(e.data).getActionOn())
                                    }), (function (e) {
                                        n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.getOnlineUserCount = function () {
                            return new Promise((function (t, n) {
                                try {
                                    a.getAppSettings().then((function (r) {
                                        var o = a.format((new s.EndpointFactory).wsApi, a.getChatHost(r), g.ONLINE_MEMBER_COUNT_API.ENDPOINTS.GET_ONLINE_MEMBER_COUNT),
                                            i = {
                                                appId: e.appId,
                                                Authorization: e.jwt,
                                                Accept: "application/json",
                                                "Content-Type": "application/json"
                                            };
                                        c.postData(o, "POST", {}, i, !1).then((function (e) {
                                            return e.json()
                                        })).then((function (e) {
                                            return e.hasOwnProperty(g.ResponseConstants.RESPONSE_KEYS.KEY_DATA) ? t(e[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA][g.ONLINE_MEMBER_COUNT_API.RESPONSE.ONLINE_USERS_COUNT]) : n(new u.CometChatException(e.error))
                                        })).catch((function () {
                                            var e = {error: y.FETCH_ERROR.ERROR_IN_API_CALL};
                                            return n(e)
                                        }))
                                    }), (function (e) {
                                        return n(new u.CometChatException(e))
                                    }))
                                } catch (e) {
                                    return n(new u.CometChatException(e))
                                }
                            }))
                        }, e.getOnlineGroupMemberCount = function (t) {
                            return new Promise((function (n, r) {
                                try {
                                    if (!t || 0 == t.length) return r(new u.CometChatException(g.ONLINE_MEMBER_COUNT_API.ERRORS.INVALID_GROUPLIST));
                                    a.getAppSettings().then((function (o) {
                                        var i = a.format((new s.EndpointFactory).wsApi, a.getChatHost(o), g.ONLINE_MEMBER_COUNT_API.ENDPOINTS.GET_ONLINE_MEMBER_COUNT),
                                            l = {groups: t}, E = {
                                                appId: e.appId,
                                                Authorization: e.jwt,
                                                Accept: "application/json",
                                                "Content-Type": "application/json"
                                            };
                                        c.postData(i, "POST", l, E, !1).then((function (e) {
                                            return e.json()
                                        })).then((function (e) {
                                            return e.hasOwnProperty(g.ResponseConstants.RESPONSE_KEYS.KEY_DATA) ? n(e[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA][g.ONLINE_MEMBER_COUNT_API.RESPONSE.GROUPS]) : r(new u.CometChatException(e.error))
                                        })).catch((function () {
                                            var e = {error: y.FETCH_ERROR.ERROR_IN_API_CALL};
                                            return r(e)
                                        }))
                                    }), (function (e) {
                                        return r(new u.CometChatException(e))
                                    }))
                                } catch (e) {
                                    return r(new u.CometChatException(e))
                                }
                            }))
                        }, e.createUser = function (t, n) {
                            return new Promise((function (r, o) {
                                try {
                                    if (a.isFalsy(n)) return void o(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.GENERAL_ERROR.INVALID), "AUTH_KEY", "AUTH_KEY", "AUTH_KEY", "AUTH_KEY"))));
                                    e.apiKey = n;
                                    var i = a.validateCreateUser(t);
                                    if (i instanceof u.CometChatException) return void o(i);
                                    if (!(t instanceof l.User)) {
                                        var s = void 0;
                                        if (!t.hasOwnProperty(g.UserConstants.UID)) return void o(new u.CometChatException(y.ERRORS.PARAMETER_MISSING));
                                        if (!t.hasOwnProperty(g.UserConstants.NAME)) return void o(new u.CometChatException(y.ERRORS.PARAMETER_MISSING));
                                        s = new l.User(t[g.UserConstants.UID], t[g.UserConstants.NAME]), t.hasOwnProperty(g.UserConstants.AVATAR) && s.setAvatar(t[g.UserConstants.AVATAR]), t.hasOwnProperty(g.UserConstants.ROLE) && s.setRole(t[g.UserConstants.ROLE]), t.hasOwnProperty(g.UserConstants.META_DATA) && s.setMetadata(t[g.UserConstants.META_DATA]), t.hasOwnProperty(g.UserConstants.LINK) && s.setLink(t[g.UserConstants.LINK]), t.hasOwnProperty(g.UserConstants.STATUS_MESSAGE) && s.setStatusMessage(t[g.UserConstants.STATUS_MESSAGE]), t.hasOwnProperty(g.UserConstants.TAGS) && s.setTags(t[g.UserConstants.TAGS]), t = s
                                    }
                                    c.makeApiCall("createUser", {}, t).then((function (e) {
                                        var t = h.UsersController.trasformJSONUser(e.data);
                                        r(t)
                                    }), (function (e) {
                                        o(new u.CometChatException(e.error))
                                    }))
                                } catch (i) {
                                    o(new u.CometChatException(i))
                                }
                            }))
                        }, e.updateUser = function (t, n) {
                            var r = this;
                            return new Promise((function (o, i) {
                                try {
                                    if (a.isFalsy(n)) return void i(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.GENERAL_ERROR.INVALID), "AUTH_KEY", "AUTH_KEY", "AUTH_KEY", "AUTH_KEY"))));
                                    e.apiKey = n;
                                    var s = a.validateUpdateUser(t);
                                    if (s instanceof u.CometChatException) return void i(s);
                                    if (!(t instanceof l.User)) {
                                        var p = void 0;
                                        if (!t.hasOwnProperty(g.UserConstants.UID)) return void i(new u.CometChatException(y.ERRORS.PARAMETER_MISSING));
                                        p = new l.User(t[g.UserConstants.UID]), t.hasOwnProperty(g.UserConstants.NAME) && p.setName(t[g.UserConstants.NAME]), t.hasOwnProperty(g.UserConstants.AVATAR) && p.setAvatar(t[g.UserConstants.AVATAR]), t.hasOwnProperty(g.UserConstants.ROLE) && p.setRole(t[g.UserConstants.ROLE]), t.hasOwnProperty(g.UserConstants.META_DATA) && p.setMetadata(t[g.UserConstants.META_DATA]), t.hasOwnProperty(g.UserConstants.LINK) && p.setLink(t[g.UserConstants.LINK]), t.hasOwnProperty(g.UserConstants.STATUS_MESSAGE) && p.setStatusMessage(t[g.UserConstants.STATUS_MESSAGE]), t.hasOwnProperty(g.UserConstants.TAGS) && p.setTags(t[g.UserConstants.TAGS]), t = p
                                    }
                                    var d = t.uid;
                                    c.makeApiCall("updateUser", {uid: d}, t).then((function (t) {
                                        if (r.user && d.toLocaleLowerCase() === r.user.getUid().toLocaleLowerCase()) E.LocalStorage.getInstance().get("user").then((function (n) {
                                            if (n) {
                                                var i = h.UsersController.trasformJSONUser(t.data), s = t.data;
                                                s.wsChannel = n.wsChannel, s.authToken = e.authToken, s.status = g.PresenceConstatnts.STATUS.ONLINE, n.jwt && (s.jwt = n.jwt), e.user = new l.Me(s), r.localStorage.set("user", e.user), o(i)
                                            }
                                        })); else {
                                            var n = h.UsersController.trasformJSONUser(t.data);
                                            o(n)
                                        }
                                    }), (function (e) {
                                        i(new u.CometChatException(e.error))
                                    }))
                                } catch (s) {
                                    i(new u.CometChatException(s))
                                }
                            }))
                        }, e.updateCurrentUserDetails = function (t) {
                            var n = this;
                            return new Promise((function (r, o) {
                                try {
                                    t.uid = n.user.uid;
                                    var i = a.validateUpdateUser(t);
                                    if (i instanceof u.CometChatException) return void o(i);
                                    if (!(t instanceof l.User)) {
                                        var s = void 0;
                                        t.hasOwnProperty(g.UserConstants.UID) && (s = new l.User(t[g.UserConstants.UID])), t.hasOwnProperty(g.UserConstants.NAME) && s.setName(t[g.UserConstants.NAME]), t.hasOwnProperty(g.UserConstants.AVATAR) && s.setAvatar(t[g.UserConstants.AVATAR]), t.hasOwnProperty(g.UserConstants.ROLE) && s.setRole(t[g.UserConstants.ROLE]), t.hasOwnProperty(g.UserConstants.META_DATA) && s.setMetadata(t[g.UserConstants.META_DATA]), t.hasOwnProperty(g.UserConstants.LINK) && s.setLink(t[g.UserConstants.LINK]), t.hasOwnProperty(g.UserConstants.STATUS_MESSAGE) && s.setStatusMessage(t[g.UserConstants.STATUS_MESSAGE]), t.hasOwnProperty(g.UserConstants.TAGS) && s.setTags(t[g.UserConstants.TAGS]), t = s
                                    }
                                    c.makeApiCall("updateMyDetails", {}, t).then((function (t) {
                                        var n = h.UsersController.trasformJSONUser(t.data),
                                            o = e.user = new l.Me(t.data);
                                        o.setStatus(g.PresenceConstatnts.STATUS.ONLINE), e.localStorage.set("user", o), r(n)
                                    }), (function (e) {
                                        o(new u.CometChatException(e.error))
                                    }))
                                } catch (i) {
                                    o(new u.CometChatException(i))
                                }
                            }))
                        }, e.getUser = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    "object" == typeof e && e.hasOwnProperty("uid") && (e = e.uid);
                                    var r = a.validateId(e, "user");
                                    if (r instanceof u.CometChatException) return void n(r);
                                    c.makeApiCall("user", {uid: e}).then((function (e) {
                                        var n = h.UsersController.trasformJSONUser(e.data);
                                        t(n)
                                    })).catch((function (e) {
                                        n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.getLoggedInUser = function () {
                            var t = this;
                            return new Promise((function (n, r) {
                                try {
                                    e.localStorage.get(g.LOCAL_STORE.KEY_USER).then((function (o) {
                                        if (o) n(e.user = new l.Me(o)); else {
                                            var i = "", s = "", p = g.APPINFO.platform, d = g.APPINFO.sdkVersion,
                                                f = g.APPINFO.apiVersion;
                                            e.keyStore.get(g.LOCAL_STORE.KEY_DEVICE_ID).then((function (o) {
                                                if (s = o, navigator && (i = navigator.userAgent), null == s) {
                                                    var S = $(), h = (new Date).getTime();
                                                    s = t.appId + "_" + S + "_" + h, e.keyStore.set(g.LOCAL_STORE.KEY_DEVICE_ID, s)
                                                }
                                                var C = {version: d, apiVersion: f, userAgent: i};
                                                a.isFalsy(t.platform) || (C.platform = t.platform), a.isFalsy(t.language) || (C.language = t.language), a.isFalsy(t.resource) || (C.resource = t.resource);
                                                var T = {platform: p, deviceId: s, appInfo: C};
                                                c.makeApiCall("updateMyDetails", {}, T, !1).then((function (t) {
                                                    t.data.jwt && (e.jwt = t.data.jwt);
                                                    var r = t.data.settings;
                                                    r && (E.LocalStorage.getInstance().set("app_settings", r), r[g.APP_SETTINGS.KEYS.MODE] && e.setMode(r[g.APP_SETTINGS.KEYS.MODE]), r[g.APP_SETTINGS.KEYS.SETTINGS_HASH] && (e.settingsHash = r[g.APP_SETTINGS.KEYS.SETTINGS_HASH]), r[g.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT] && (e.settingsHashReceivedAt = r[g.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT]), r[g.APP_SETTINGS.KEYS.ANALYTICS_HOST] && (e.analyticsHost = r[g.APP_SETTINGS.KEYS.ANALYTICS_HOST]), r[g.APP_SETTINGS.KEYS.ANALYTICS_VERSION] && (e.analyticsVersion = r[g.APP_SETTINGS.KEYS.ANALYTICS_VERSION]), e.isAnalyticsDisabled = !!r[g.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED]), n(new l.Me(t.data))
                                                }), (function (e) {
                                                    r(new u.CometChatException(e.error))
                                                })).catch((function (e) {
                                                    r(new u.CometChatException(e))
                                                }))
                                            }))
                                        }
                                    }))
                                } catch (e) {
                                    r(new u.CometChatException(e))
                                }
                            }))
                        }, e.getLoggedinUser = function () {
                            return new Promise((function (t, n) {
                                try {
                                    e.localStorage.get(g.LOCAL_STORE.KEY_USER).then((function (e) {
                                        t(e ? new l.User(e) : null)
                                    }), (function (e) {
                                        t(null)
                                    }))
                                } catch (e) {
                                    n(new u.CometChatException(e))
                                }
                            }))
                        }, e.blockUsers = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    var r = a.validateArray(e, "blockUsers");
                                    if (r instanceof u.CometChatException) return void n(r);
                                    a.isFalsy(e) ? n(new u.CometChatException(y.USERS_REQUEST_ERRORS.EMPTY_USERS_LIST)) : c.makeApiCall("blockUsers", {}, {blockedUids: e}).then((function (e) {
                                        t(e.data)
                                    }), (function (e) {
                                        n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.unblockUsers = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    var r = a.validateArray(e, "unblockUsers");
                                    if (r instanceof u.CometChatException) return void n(r);
                                    a.isFalsy(e) ? n(new u.CometChatException(y.USERS_REQUEST_ERRORS.EMPTY_USERS_LIST)) : c.makeApiCall("unblockUsers", {}, {blockedUids: e}).then((function (e) {
                                        t(e.data)
                                    }), (function (e) {
                                        n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.getConversation = function (e, t) {
                            return new Promise((function (n, r) {
                                try {
                                    var o = a.validateConversationType(t);
                                    if (o instanceof u.CometChatException) return void r(o);
                                    var i = a.validateId(e, t);
                                    if (i instanceof u.CometChatException) return void r(i);
                                    t = t.toLowerCase(), e = e.toLowerCase();
                                    var s = {}, l = "";
                                    t === g.MessageConstatnts.RECEIVER_TYPE.GROUP ? (l = "getGroupConversation", s.guid = e) : (l = "getUserConversation", s.uid = e), c.makeApiCall(l, s).then((function (o) {
                                        if (o.data) {
                                            var i = o.data;
                                            n(F.ConversationController.trasformJSONConversation(i.conversationId, i.conversationType, i.lastMessage, i.conversationWith, parseInt(i.unreadMessageCount), i.tags ? i.tags : []))
                                        } else r(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ConversationErrors.CONVERSATION_NOT_FOUND), t, e))))
                                    }), (function (e) {
                                        r(new u.CometChatException(e.error))
                                    }))
                                } catch (o) {
                                    r(new u.CometChatException(o))
                                }
                            }))
                        }, e.tagConversation = function (e, t, n) {
                            return void 0 === n && (n = []), new Promise((function (r, o) {
                                try {
                                    var i = a.validateConversationType(t);
                                    if (i instanceof u.CometChatException) return void o(i);
                                    var s = a.validateId(e, t);
                                    if (s instanceof u.CometChatException) return void o(s);
                                    t = t.toLowerCase(), e = e.toLowerCase();
                                    var l = {}, E = "";
                                    t === g.MessageConstatnts.RECEIVER_TYPE.GROUP ? (E = "updateGroupConversation", l.guid = e) : (E = "updateUserConversation", l.uid = e), c.makeApiCall(E, l, {tags: n}).then((function (n) {
                                        if (n.data) {
                                            var i = n.data;
                                            r(F.ConversationController.trasformJSONConversation(i.conversationId, i.conversationType, i.lastMessage, i.conversationWith, parseInt(i.unreadMessageCount), i.tags ? i.tags : []))
                                        } else o(new u.CometChatException(JSON.parse(a.format(JSON.stringify(g.ConversationErrors.CONVERSATION_NOT_FOUND), t, e))))
                                    }), (function (e) {
                                        o(new u.CometChatException(e.error))
                                    }))
                                } catch (i) {
                                    o(new u.CometChatException(i))
                                }
                            }))
                        }, e.deleteConversation = function (e, t) {
                            return new Promise((function (n, r) {
                                try {
                                    var o = a.validateConversationType(t);
                                    if (o instanceof u.CometChatException) return void r(o);
                                    var i = a.validateId(e, t);
                                    if (i instanceof u.CometChatException) return void r(i);
                                    var s = {}, l = "";
                                    t = t.toLowerCase(), e = e.toLowerCase(), t === g.MessageConstatnts.RECEIVER_TYPE.GROUP ? (l = "deleteGroupConversation", s.guid = e) : (l = "deleteUserConversation", s.uid = e), c.makeApiCall(l, s).then((function (e) {
                                        n("Conversation deleted successfully.")
                                    }), (function (e) {
                                        r(new u.CometChatException(e.error))
                                    }))
                                } catch (o) {
                                    r(new u.CometChatException(o))
                                }
                            }))
                        }, e.createGroup = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    var r = a.validateCreateGroup(e);
                                    if (r instanceof u.CometChatException) return void n(r);
                                    if (!(e instanceof C.Group)) {
                                        var o = void 0;
                                        if (!e.hasOwnProperty(g.GroupConstants.KEYS.GUID)) return void n(new u.CometChatException(y.ERRORS.PARAMETER_MISSING));
                                        if (!e.hasOwnProperty(g.GroupConstants.KEYS.NAME)) return void n(new u.CometChatException(y.ERRORS.PARAMETER_MISSING));
                                        if (o = new C.Group(e[g.GroupConstants.KEYS.GUID], e[g.GroupConstants.KEYS.NAME], ""), e.hasOwnProperty(g.GroupConstants.KEYS.TYPE)) if (e[g.GroupConstants.KEYS.TYPE].toLocaleLowerCase() == g.GroupType.Password) {
                                            if (!e.hasOwnProperty(g.GroupConstants.KEYS.PASSWORD)) return void n(new u.CometChatException(y.GROUP_CREATION_ERRORS.EMPTY_PASSWORD));
                                            o.setType(g.GROUP_TYPE.PASSWORD), o.setPassword(e[g.GroupConstants.KEYS.PASSWORD])
                                        } else o.setType(e[g.GroupConstants.KEYS.TYPE]); else o.setType(g.GROUP_TYPE.PUBLIC);
                                        e.hasOwnProperty(g.GroupConstants.KEYS.ICON) && o.setIcon(e[g.GroupConstants.KEYS.ICON]), e.hasOwnProperty(g.GroupConstants.KEYS.DESCRIPTION) && o.setDescription(e[g.GroupConstants.KEYS.DESCRIPTION]), e.hasOwnProperty(g.GroupConstants.KEYS.TAGS) && o.setTags(e[g.GroupConstants.KEYS.TAGS]), e = o
                                    }
                                    c.makeApiCall("createGroup", {}, e).then((function (e) {
                                        T.GroupsController.trasformJSONGroup(e.data).setHasJoined(!0), t(T.GroupsController.trasformJSONGroup(e.data))
                                    }), (function (e) {
                                        n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.getGroup = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    "object" == typeof e && e.hasOwnProperty("guid") && (e = e.guid);
                                    var r = a.validateId(e, "group");
                                    if (r instanceof u.CometChatException) return void n(r);
                                    c.makeApiCall("getGroup", {guid: e}).then((function (e) {
                                        t(T.GroupsController.trasformJSONGroup(e.data))
                                    }), (function (e) {
                                        n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.joinGroup = function (e, t, n) {
                            return void 0 === t && (t = g.GroupType.Public), void 0 === n && (n = ""), new Promise((function (r, o) {
                                try {
                                    var i = a.validateJoinGroup(e, t, n);
                                    if (i instanceof u.CometChatException) return void o(i);
                                    var s;
                                    "object" == typeof e && (e.hasOwnProperty(g.GroupConstants.KEYS.GUID) ? (e.hasOwnProperty(g.GroupConstants.KEYS.TYPE) && (t = e[g.GroupConstants.KEYS.TYPE], e[g.GroupConstants.KEYS.TYPE].toLocaleLowerCase() === g.GroupType.Password && e.hasOwnProperty(g.GroupConstants.KEYS.PASSWORD) && (n = e[g.GroupConstants.KEYS.PASSWORD])), e = e[g.GroupConstants.KEYS.GUID]) : o(new u.CometChatException(y.ERRORS.PARAMETER_MISSING))), s = a.isFalsy(n) ? new C.Group(e, "name", t) : new C.Group(e, "name", t, n), c.makeApiCall("joinGroup", s, s).then((function (e) {
                                        var t = T.GroupsController.trasformJSONGroup(e.data[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA][g.ActionConstatnts.ACTION_KEYS.ENTITIES][g.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][g.ActionConstatnts.ACTION_KEYS.ENTITY]);
                                        t.setHasJoined(!0), r(t)
                                    }), (function (e) {
                                        o(new u.CometChatException(e.error))
                                    }))
                                } catch (i) {
                                    o(new u.CometChatException(i))
                                }
                            }))
                        }, e.updateGroup = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    var r = a.validateUpdateGroup(e);
                                    if (r instanceof u.CometChatException) return void n(r);
                                    if (!(e instanceof C.Group)) {
                                        var o = void 0;
                                        if (!e.hasOwnProperty(g.GroupConstants.KEYS.GUID)) return void n(new u.CometChatException(y.ERRORS.PARAMETER_MISSING));
                                        o = new C.Group(g.GroupConstants.KEYS.GUID, "", ""), e.hasOwnProperty(g.GroupConstants.KEYS.TYPE) ? o.setType(e[g.GroupConstants.KEYS.TYPE]) : (e[g.GroupConstants.KEYS.TYPE] = g.GROUP_TYPE.PUBLIC, o.setType[g.GROUP_TYPE.PUBLIC]), e.hasOwnProperty(g.GroupConstants.KEYS.NAME) && o.setName(e[g.GroupConstants.KEYS.NAME]), e.hasOwnProperty(g.GroupConstants.KEYS.ICON) && o.setIcon(e[g.GroupConstants.KEYS.ICON]), e.hasOwnProperty(g.GroupConstants.KEYS.DESCRIPTION) && o.setDescription(e[g.GroupConstants.KEYS.DESCRIPTION]), e.hasOwnProperty(g.GroupConstants.KEYS.TAGS) && o.setTags(e[g.GroupConstants.KEYS.TAGS]), e = o
                                    }
                                    c.makeApiCall("updateGroup", e, e).then((function (e) {
                                        t(T.GroupsController.trasformJSONGroup(e.data))
                                    }), (function (e) {
                                        n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.deleteGroup = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    var r = a.validateId(e, "group");
                                    if (r instanceof u.CometChatException) return void n(r);
                                    c.makeApiCall("deleteGroup", {guid: e}).then((function (e) {
                                        t(!0)
                                    }), (function (e) {
                                        n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.leaveGroup = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    var r = a.validateId(e, "group");
                                    if (r instanceof u.CometChatException) return void n(r);
                                    c.makeApiCall("leaveGroup", {guid: e}).then((function (e) {
                                        t(!0)
                                    }), (function (e) {
                                        n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.kickGroupMember = function (e, t) {
                            return new Promise((function (n, r) {
                                try {
                                    var o = a.validateId(e, "group");
                                    if (o instanceof u.CometChatException) return void r(o);
                                    var i = a.validateId(t, "user");
                                    if (i instanceof u.CometChatException) return void r(i);
                                    c.makeApiCall("kickGroupMembers", {guid: e, uid: t}).then((function (e) {
                                        n(!0)
                                    }), (function (e) {
                                        r(new u.CometChatException(e.error))
                                    }))
                                } catch (o) {
                                    r(new u.CometChatException(o))
                                }
                            }))
                        }, e.updateGroupMemberScope = function (e, t, n) {
                            return new Promise((function (r, o) {
                                try {
                                    var i = a.validateId(e, "group");
                                    if (i instanceof u.CometChatException) return void o(i);
                                    var s = a.validateId(t, "user");
                                    if (s instanceof u.CometChatException) return void o(s);
                                    var l = a.validateScope(n);
                                    if (l instanceof u.CometChatException) return void o(l);
                                    c.makeApiCall("changeScopeOfMember", {
                                        guid: e,
                                        uid: t
                                    }, {scope: n}).then((function (e) {
                                        r(!0)
                                    }), (function (e) {
                                        o(new u.CometChatException(e.error))
                                    }))
                                } catch (i) {
                                    o(new u.CometChatException(i))
                                }
                            }))
                        }, e.banGroupMember = function (e, t) {
                            return new Promise((function (n, r) {
                                try {
                                    var o = a.validateId(e, "group");
                                    if (o instanceof u.CometChatException) return void r(o);
                                    var i = a.validateId(t, "user");
                                    if (i instanceof u.CometChatException) return void r(i);
                                    c.makeApiCall("banGroupMember", {guid: e, uid: t}).then((function (e) {
                                        n(!0)
                                    }), (function (e) {
                                        r(new u.CometChatException(e.error))
                                    }))
                                } catch (o) {
                                    r(new u.CometChatException(o))
                                }
                            }))
                        }, e.unbanGroupMember = function (e, t) {
                            return new Promise((function (n, r) {
                                try {
                                    var o = a.validateId(e, "group");
                                    if (o instanceof u.CometChatException) return void r(o);
                                    var i = a.validateId(t, "user");
                                    if (i instanceof u.CometChatException) return void r(i);
                                    c.makeApiCall("unbanGroupMember", {guid: e, uid: t}).then((function (e) {
                                        n(!0)
                                    }), (function (e) {
                                        r(new u.CometChatException(e.error))
                                    }))
                                } catch (o) {
                                    r(new u.CometChatException(o))
                                }
                            }))
                        }, e.addMembersToGroup = function (e, t, n) {
                            var o = [], i = [], s = [], l = [];
                            return new Promise((function (E, p) {
                                try {
                                    var d = a.validateId(e, "group");
                                    if (d instanceof u.CometChatException) return void p(d);
                                    var f = a.validateArray(t, "groupMembers");
                                    if (f instanceof u.CometChatException) return void p(f);
                                    if (n) {
                                        var S = a.validateArray(n, "bannedMembers");
                                        if (S instanceof u.CometChatException) return void p(S)
                                    }
                                    a.isFalsy(t) && a.isFalsy(n) ? p(new u.CometChatException({})) : a.isFalsy(t) || a.isFalsy(n) ? a.isFalsy(t) ? n.map((function (e) {
                                        l.push(e)
                                    })) : (t.filter((function (e) {
                                        if (e.getScope() == g.GROUP_MEMBER_SCOPE.ADMIN) return !0
                                    })).map((function (e) {
                                        o.push(e.getUid())
                                    })), t.filter((function (e) {
                                        if (e.getScope() == g.GROUP_MEMBER_SCOPE.MODERATOR) return !0
                                    })).map((function (e) {
                                        i.push(e.getUid())
                                    })), t.filter((function (e) {
                                        if (e.getScope() == g.GROUP_MEMBER_SCOPE.PARTICIPANT) return !0
                                    })).map((function (e) {
                                        s.push(e.getUid())
                                    }))) : (t.filter((function (e) {
                                        if (e.getScope() == g.GROUP_MEMBER_SCOPE.ADMIN) return !0
                                    })).map((function (e) {
                                        o.push(e.getUid())
                                    })), t.filter((function (e) {
                                        if (e.getScope() == g.GROUP_MEMBER_SCOPE.MODERATOR) return !0
                                    })).map((function (e) {
                                        i.push(e.getUid())
                                    })), t.filter((function (e) {
                                        if (e.getScope() == g.GROUP_MEMBER_SCOPE.PARTICIPANT) return !0
                                    })).map((function (e) {
                                        s.push(e.getUid())
                                    })), n.map((function (e) {
                                        l.push(e)
                                    })));
                                    var h = {};
                                    a.isFalsy(o) || (h = r(r({}, h), {admins: o})), a.isFalsy(s) || (h = r(r({}, h), {participants: s})), a.isFalsy(i) || (h = r(r({}, h), {moderators: i})), a.isFalsy(l) || (h = r(r({}, h), {usersToBan: l})), c.makeApiCall("addMemebersToGroup", {guid: e}, h).then((function (e) {
                                        var t = {};
                                        Object.keys(e.data.admins).map((function (n) {
                                            e.data.admins[n][g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? t[n] = g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : t[n] = e.data.admins[n][g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE]
                                        })), Object.keys(e.data.participants).map((function (n) {
                                            e.data.participants[n][g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? t[n] = g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : t[n] = e.data.participants[n][g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE]
                                        })), Object.keys(e.data.moderators).map((function (n) {
                                            e.data.moderators[n][g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? t[n] = g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : t[n] = e.data.moderators[n][g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE]
                                        })), Object.keys(e.data.usersToBan).map((function (n) {
                                            e.data.usersToBan[n][g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? t[n] = g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : t[n] = e.data.usersToBan[n][g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][g.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE]
                                        })), E(t)
                                    }), (function (e) {
                                        p(new u.CometChatException(e.error))
                                    }))
                                } catch (E) {
                                    p(new u.CometChatException(E))
                                }
                            }))
                        }, e.transferGroupOwnership = function (e, t) {
                            return new Promise((function (n, r) {
                                try {
                                    var o = a.validateId(e, "group");
                                    if (o instanceof u.CometChatException) return void r(o);
                                    var i = a.validateId(t, "user");
                                    if (i instanceof u.CometChatException) return void r(i);
                                    c.makeApiCall("transferOwnership", {guid: e}, {owner: t}).then((function (r) {
                                        var o;
                                        o = r && r.data && r.data.message ? r.data.message : "Ownership transferred to user " + t + " for the group with guid " + e + ".", n(o)
                                    }), (function (e) {
                                        r(new u.CometChatException(e.error))
                                    }))
                                } catch (o) {
                                    r(new u.CometChatException(o))
                                }
                            }))
                        }, e.initiateCall = function (e) {
                            var t = this;
                            return new Promise((function (n, r) {
                                var o = t.getActiveCall();
                                if (null === o) try {
                                    a.isFalsy(JSON.parse(JSON.stringify(e)).sender) ? a.isFalsy(o) ? (e.setStatus(g.CallConstants.CALL_STATUS.INITIATED), e.receiver = e.receiverId.toString(), delete e.receiverId, c.makeApiCall("createCallSession", {}, e).then((function (e) {
                                        var t = S.MessageController.trasformJSONMessge(e[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                                        R.CallController.getInstance().initiateCall(t).then((function (e) {
                                            n(t)
                                        })).catch((function (e) {
                                            r(new u.CometChatException(e))
                                        }))
                                    }), (function (e) {
                                        r(new u.CometChatException(e.error))
                                    }))) : r(new u.CometChatException(g.CALL_ERROR.ERROR_IN_CALLING)) : R.CallController.getInstance().initiateCall(e).then((function (t) {
                                        n(Object.assign(e))
                                    })).catch((function (e) {
                                        r(new u.CometChatException(e))
                                    }))
                                } catch (o) {
                                    r(new u.CometChatException(o))
                                } else r(new u.CometChatException(g.CALL_ERROR.CALL_ALREADY_INITIATED))
                            }))
                        }, e.acceptCall = function (e) {
                            var t = this;
                            return new Promise((function (n, r) {
                                if (null === t.getActiveCall()) try {
                                    var o = {};
                                    o[g.CallConstants.CALL_KEYS.CALL_STATUS] = g.CallConstants.CALL_STATUS.ONGOING, c.makeApiCall("updateCallSession", {sessionid: e}, o).then((function (e) {
                                        var t = S.MessageController.trasformJSONMessge(e[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                                        R.CallController.getInstance().onCallStarted(t), n(t)
                                    }), (function (e) {
                                        r(new u.CometChatException(e.error))
                                    }))
                                } catch (o) {
                                    r(new u.CometChatException(o))
                                } else r(new u.CometChatException(g.CALL_ERROR.CANNOT_ACCEPT_CALL))
                            }))
                        }, e.rejectCall = function (e, t) {
                            try {
                                switch (t) {
                                    case g.CallConstants.CALL_STATUS.REJECTED:
                                        return this.rejectIncomingCall(e);
                                    case g.CallConstants.CALL_STATUS.CANCELLED:
                                        return this.cancelCall(e);
                                    case g.CallConstants.CALL_STATUS.BUSY:
                                        return this.sendBusyResponse(e);
                                    default:
                                        return this.endCall(e, !0)
                                }
                            } catch (e) {
                                a.Logger.error("CometChat: rejectCall", e)
                            }
                        }, e.endCall = function (e, t) {
                            var n = this;
                            return new Promise((function (r, o) {
                                a.isFalsy(t) && (t = !1);
                                var i = n.getActiveCall();
                                if (null !== i) {
                                    if (i.getSessionId() === e) try {
                                        var s = {};
                                        s[g.CallConstants.CALL_KEYS.CALL_STATUS] = g.CallConstants.CALL_STATUS.ENDED, i.getJoinedAt() && (s[g.CallConstants.CALL_KEYS.CALL_JOINED_AT] = i.getJoinedAt()), c.makeApiCall("updateCallSession", {sessionid: e}, s).then((function (e) {
                                            t || R.CallController.getInstance().endSession();
                                            var n = S.MessageController.trasformJSONMessge(e[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                                            r(n), R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onCallEnded(n), R.CallController.getInstance().endCall()
                                        }), (function (e) {
                                            a.Logger.log("calling Log", {error: e}), t || R.CallController.getInstance().endSession(), i.setStatus(g.CallConstants.CALL_STATUS.ENDED), r(i), R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onCallEnded(i), R.CallController.getInstance().endCall()
                                        }))
                                    } catch (s) {
                                        o(new u.CometChatException(s))
                                    }
                                } else t || R.CallController.getInstance().endSession(), r(null), R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onCallEnded(null), R.CallController.getInstance().endCall()
                            }))
                        }, e.getActiveCall = function () {
                            try {
                                return R.CallController.getInstance().getActiveCall()
                            } catch (e) {
                                a.Logger.error("CometChat: getActiveCall", e)
                            }
                        }, e.startCall = function (t, n, r) {
                            var o = this;
                            try {
                                var i, s, c, l, E, p, d, f, S = this.getActiveCall(), h = !1, C = !0, T = !0, _ = !0,
                                    A = !0, I = !0, y = !0, m = !1, O = !1, v = g.CallConstants.CALL_MODE.DEFAULT,
                                    N = !1, L = !1, P = !1, M = {}, w = this.user;
                                a.getAppSettings().then((function (D) {
                                    if (p = D[g.APP_SETTINGS.KEYS.WEBRTC_HOST], D.hasOwnProperty(g.APP_SETTINGS.KEYS.ANALYTICS_HOST) ? M[g.APP_SETTINGS.KEYS.ANALYTICS_HOST] = D[g.APP_SETTINGS.KEYS.ANALYTICS_HOST] : M[g.APP_SETTINGS.KEYS.ANALYTICS_HOST] = a.format(g.ANALYTICS.analyticsHost, e.appSettings.getRegion()), D.hasOwnProperty(g.APP_SETTINGS.KEYS.ANALYTICS_VERSION) ? M[g.APP_SETTINGS.KEYS.ANALYTICS_VERSION] = D[g.APP_SETTINGS.KEYS.ANALYTICS_VERSION] : M[g.APP_SETTINGS.KEYS.ANALYTICS_VERSION] = g.ANALYTICS.analyticsVersion, D.hasOwnProperty(g.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED) ? M[g.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED] = D[g.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED] : M[g.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED] = !1, D.hasOwnProperty(g.APP_SETTINGS.KEYS.ANALYTICS_USE_SSL) ? M[g.APP_SETTINGS.KEYS.ANALYTICS_USE_SSL] = D[g.APP_SETTINGS.KEYS.ANALYTICS_USE_SSL] : M[g.APP_SETTINGS.KEYS.ANALYTICS_USE_SSL] = !0, a.isFalsy(r) || R.CallController.getInstance().setCallListner(r), a.isFalsy(o.appSettings)) R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onError(new u.CometChatException(g.CALL_ERROR.NOT_INITIALIZED)); else if (l = o.appSettings.getRegion()) if (w) if ((f = new H.RTCUser(w.getUid())).setName(w.getName()), f.setAvatar(w.getAvatar()), f.setResource(e.getSessionId()), e.appId) if (E = e.appId, "string" == typeof t) {
                                        if (S) {
                                            var U = S.getType();
                                            h = U === g.CallConstants.CALL_TYPE.AUDIO, s = S.getSessionId()
                                        } else {
                                            if (a.isFalsy(t)) return void (R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onError(new u.CometChatException(g.CALL_ERROR.SESSION_ID_REQUIRED)));
                                            s = ("v1." + l + "." + e.getAppId() + "." + t).toLowerCase()
                                        }
                                        if (!s) return void (R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onError(new u.CometChatException(g.CALL_ERROR.SESSION_ID_REQUIRED)));
                                        var b = {uid: w.getUid(), sessionId: s};
                                        e.getJWT(b).then((function (e) {
                                            e.hasOwnProperty("token") ? (f.setJWT(e.token), i = (new V.CallSettingsBuilder).setSessionID(s).enableDefaultLayout(C).setIsAudioOnlyCall(h).setUser(f).setRegion(l).setAppId(E).setDomain(p).showEndCallButton(A).showMuteAudioButton(_).showPauseVideoButton(T).showScreenShareButton(I).showModeButton(y).setMode(v).setAnalyticsSettings(M).startWithAudioMuted(m).startWithVideoMuted(O).showRecordingButton(N).startRecordingOnCallStart(L).forceLegacyUI(P).build(), R.CallController.getInstance().startCall(i, n)) : R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onError(new u.CometChatException(g.CALL_ERROR.JWT_NOT_FOUND))
                                        }), (function (e) {
                                            R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onError(new u.CometChatException(e))
                                        }))
                                    } else {
                                        if (a.isFalsy(t)) return void (R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onError(new u.CometChatException(g.CALL_ERROR.CALL_SETTINGS_REQUIRED)));
                                        if (S) U = S.getType(), h = U === g.CallConstants.CALL_TYPE.AUDIO, s = S.getSessionId(); else {
                                            if (h = t.isAudioOnlyCall(), a.isFalsy(t.getSessionId())) return void (R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onError(new u.CometChatException(g.CALL_ERROR.SESSION_ID_REQUIRED)));
                                            s = ("v1." + l + "." + e.getAppId() + "." + t.getSessionId()).toLowerCase()
                                        }
                                        if (!s) return void (R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onError(new u.CometChatException(g.CALL_ERROR.SESSION_ID_REQUIRED)));
                                        C = t.isDefaultLayoutEnabled(), T = t.isPauseVideoButtonEnabled(), _ = t.isMuteAudioButtonEnabled(), A = t.isEndCallButtonEnabled(), I = t.isScreenShareButtonEnabled(), v = t.getMode(), d = t.getLocalizedStringObject(), c = t.getCustomCSS(), y = t.isModeButtonEnabled(), m = t.getStartWithAudioMuted(), O = t.getStartWithVideoMuted(), N = t.isRecordingButtonEnabled(), L = t.shouldStartRecordingOnCallStart(), P = t.shouldUseLegacyUI(), b = {
                                            uid: w.getUid(),
                                            sessionId: s
                                        }, e.getJWT(b).then((function (e) {
                                            e.hasOwnProperty("token") ? (f.setJWT(e.token), i = (new V.CallSettingsBuilder).setSessionID(s).enableDefaultLayout(C).setIsAudioOnlyCall(h).setUser(f).setRegion(l).setAppId(E).setDomain(p).showEndCallButton(A).showMuteAudioButton(_).showPauseVideoButton(T).showScreenShareButton(I).showModeButton(y).setMode(v).setLocalizedStringObject(d).setCustomCSS(c).setAnalyticsSettings(M).startWithAudioMuted(m).startWithVideoMuted(O).showRecordingButton(N).startRecordingOnCallStart(L).forceLegacyUI(P).build(), R.CallController.getInstance().startCall(i, n)) : R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onError(new u.CometChatException(g.CALL_ERROR.JWT_NOT_FOUND))
                                        }), (function (e) {
                                            R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onError(new u.CometChatException(e))
                                        }))
                                    } else R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onError(new u.CometChatException(g.CALL_ERROR.NOT_INITIALIZED)); else R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onError(new u.CometChatException(g.CALL_ERROR.NOT_LOGGED_IN)); else R.CallController.getInstance().getCallListner() && R.CallController.getInstance().getCallListner()._eventListener.onError(new u.CometChatException(g.CALL_ERROR.NOT_INITIALIZED))
                                }), (function (e) {
                                    a.Logger.error("CometChat: startCall", e)
                                }))
                            } catch (e) {
                                a.Logger.error("CometChat: startCall", e)
                            }
                        }, e.getCallParticipantCount = function (t, n) {
                            var r = this;
                            return new Promise((function (o, i) {
                                try {
                                    a.getAppSettings().then((function (l) {
                                        if (a.isFalsy(t)) return i(new u.CometChatException(g.ProsodyApiErrors.INVALID_SESSIONID));
                                        if (a.isFalsy(n)) return i(new u.CometChatException(g.ProsodyApiErrors.INVALID_TYPE));
                                        var E = r.appSettings.getRegion(), p = {},
                                            d = l[g.APP_SETTINGS.KEYS.WEBRTC_HOST],
                                            f = a.format((new s.EndpointFactory).prosodyApi, g.PROSODY_API.DOMAIN_PREFIX, d, g.PROSODY_API.PATH.ROOM_SIZE);
                                        "direct" === n.toLowerCase() && (t = ("v1." + E + "." + e.getAppId() + "." + t).toLowerCase()), p[g.PROSODY_API.QUERY_PARAMETERS.DOMAIN] = d, p[g.PROSODY_API.QUERY_PARAMETERS.ROOM] = t, c.postData(f, "GET", p, {}, !1).then((function (e) {
                                            return e.text()
                                        })).then((function (e) {
                                            var t = e ? JSON.parse(e) : {};
                                            return t.hasOwnProperty(g.PROSODY_API.RESPONSE.PARTICIPANTS) ? o(t[g.PROSODY_API.RESPONSE.PARTICIPANTS]) : o(0)
                                        })).catch((function () {
                                            var e = {error: y.FETCH_ERROR.ERROR_IN_API_CALL};
                                            return i(e)
                                        }))
                                    }), (function (e) {
                                        return i(new u.CometChatException(e))
                                    }))
                                } catch (e) {
                                    return i(new u.CometChatException(e))
                                }
                            }))
                        }, e.rejectIncomingCall = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    var r = {};
                                    r[g.CallConstants.CALL_KEYS.CALL_STATUS] = g.CallConstants.CALL_STATUS.REJECTED, c.makeApiCall("updateCallSession", {sessionid: e}, r).then((function (e) {
                                        var n = S.MessageController.trasformJSONMessge(e[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                                        t(n)
                                    }), (function (e) {
                                        n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.cancelCall = function (e) {
                            var t = this;
                            return new Promise((function (n, r) {
                                try {
                                    var o = {};
                                    o[g.CallConstants.CALL_KEYS.CALL_STATUS] = g.CallConstants.CALL_STATUS.CANCELLED, c.makeApiCall("updateCallSession", {sessionid: e}, o).then((function (r) {
                                        var o = S.MessageController.trasformJSONMessge(r[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                                        t.getActiveCall().getSessionId() === e && R.CallController.getInstance().endCallSession(), n(o)
                                    }), (function (e) {
                                        r(new u.CometChatException(e.error))
                                    }))
                                } catch (o) {
                                    r(new u.CometChatException(o))
                                }
                            }))
                        }, e.sendBusyResponse = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    var r = {};
                                    r[g.CallConstants.CALL_KEYS.CALL_STATUS] = g.CallConstants.CALL_STATUS.BUSY, c.makeApiCall("updateCallSession", {sessionid: e}, r).then((function (e) {
                                        var n = S.MessageController.trasformJSONMessge(e[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                                        t(n)
                                    }), (function (e) {
                                        n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.sendUnansweredResponse = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    var r = {};
                                    r[g.CallConstants.CALL_KEYS.CALL_STATUS] = g.CallConstants.CALL_STATUS.UNANSWERED, c.makeApiCall("updateCallSession", {sessionid: e}, r).then((function (e) {
                                        var n = S.MessageController.trasformJSONMessge(e[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA]),
                                            r = Z.getCometChatEventFromMessage(Object.assign(n, e[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA]));
                                        Z.publishMessages(r), t(n)
                                    }), (function (e) {
                                        n(new u.CometChatException(e.error))
                                    }))
                                } catch (r) {
                                    n(new u.CometChatException(r))
                                }
                            }))
                        }, e.addConnectionListener = function (e, t) {
                            try {
                                ee.addConnectionEventListener(e, t)
                            } catch (e) {
                                a.Logger.error("CometChat: addConnectionListener", e)
                            }
                        }, e.removeConnectionListener = function (e) {
                            try {
                                ee.removeConnectionEventListener(e)
                            } catch (e) {
                                a.Logger.error("CometChat: removeConnectionListener", e)
                            }
                        }, e.addMessageListener = function (e, t) {
                            try {
                                ee.addMessageEventListener(e, t)
                            } catch (e) {
                                a.Logger.error("CometChat: addMessageListener", e)
                            }
                        }, e.removeMessageListener = function (e) {
                            try {
                                ee.removeMessageEventListener(e)
                            } catch (e) {
                                a.Logger.error("CometChat: removeMessageListener", e)
                            }
                        }, e.addCallListener = function (e, t) {
                            try {
                                ee.addCallEventListener(e, t)
                            } catch (e) {
                                a.Logger.error("CometChat: addCallListener", e)
                            }
                        }, e.removeCallListener = function (e) {
                            try {
                                ee.removeCallEventListener(e)
                            } catch (e) {
                                a.Logger.error("CometChat: removeCallListener", e)
                            }
                        }, e.addUserListener = function (e, t) {
                            try {
                                ee.addUserEventListener(e, t)
                            } catch (e) {
                                a.Logger.error("CometChat: addUserListener", e)
                            }
                        }, e.removeUserListener = function (e) {
                            try {
                                ee.removeUserEventListener(e)
                            } catch (e) {
                                a.Logger.error("CometChat: removeUserListener", e)
                            }
                        }, e.addGroupListener = function (e, t) {
                            try {
                                ee.addGroupEventListener(e, t)
                            } catch (e) {
                                a.Logger.error("CometChat: addGroupListener", e)
                            }
                        }, e.removeGroupListener = function (e) {
                            try {
                                ee.removeGroupEventListener(e)
                            } catch (e) {
                                a.Logger.error("CometChat: removeGroupListener", e)
                            }
                        }, e.addLoginListener = function (e, t) {
                            try {
                                ee.addLoginEventListener(e, t)
                            } catch (e) {
                                a.Logger.error("CometChat: addLoginListener", e)
                            }
                        }, e.removeLoginListener = function (e) {
                            try {
                                ee.removeLoginEventListener(e)
                            } catch (e) {
                                a.Logger.error("CometChat: removeLoginListener", e)
                            }
                        }, e.generateAuthToken = function (t) {
                            var n = this;
                            return new Promise((function (r, o) {
                                try {
                                    var i = {}, s = "", l = "", E = g.APPINFO.platform, p = g.APPINFO.sdkVersion,
                                        d = g.APPINFO.apiVersion;
                                    navigator && (l = navigator.userAgent), e.keyStore.get(g.LOCAL_STORE.KEY_DEVICE_ID).then((function (a) {
                                        if (null == (s = a)) {
                                            var f = $(), S = (new Date).getTime();
                                            s = n.appId + "_" + f + "_" + S, e.keyStore.set(g.LOCAL_STORE.KEY_DEVICE_ID, s)
                                        }
                                        i = {
                                            platform: E,
                                            deviceId: s,
                                            appInfo: {version: p, apiVersion: d, userAgent: l}
                                        }, c.makeApiCall("authToken", {uid: t}, i).then((function (e) {
                                            r(e.data)
                                        })).catch((function (e) {
                                            o(new u.CometChatException(e.error))
                                        }))
                                    }), (function (e) {
                                        a.Logger.error("Got error while fetching data from key store", e)
                                    }))
                                } catch (e) {
                                    o(new u.CometChatException(e))
                                }
                            }))
                        }, e.tryReconnectingToWS = function () {
                            e.WSReconnectionInProgress || e.startWSReconnectionTimer()
                        }, e.prototype.makeWSConnection = function () {
                            e.WSLogin(e.user)
                        }, e.prototype.accidentallyDisconnected = function () {
                            e.currentConnectionStatus = g.CONNECTION_STATUS.CONNECTING, ee.connectionHandlers.map((function (e) {
                                try {
                                    e._eventListener && (a.isFalsy(e._eventListener.inConnecting) || e._eventListener.inConnecting())
                                } catch (e) {
                                    a.Logger.error("ConnectionHandlers: inConnecting Status", e)
                                }
                            })), e.tryReconnectingToWS()
                        }, e.WSLogin = function (t) {
                            var n = this;
                            Z.connection ? a.Logger.error("CometChat :: WSLogin", Z.connection) : Z.WSLogin(t.getJWT(), (function (t) {
                                switch (t) {
                                    case W.READY_STATE.CONNECTING:
                                        (r = e.getConnectionStatus()) == g.CONNECTION_STATUS.DISCONNECTED && (n.currentConnectionStatus = g.CONNECTION_STATUS.CONNECTING, ee.connectionHandlers.map((function (e) {
                                            try {
                                                e._eventListener && (a.isFalsy(e._eventListener.inConnecting) || e._eventListener.inConnecting())
                                            } catch (e) {
                                                a.Logger.error("connectionHandlers: Connecting Status", e)
                                            }
                                        })));
                                        break;
                                    case W.READY_STATE.OPEN:
                                        (r = e.getConnectionStatus()) == g.CONNECTION_STATUS.CONNECTING && (n.currentConnectionStatus = g.CONNECTION_STATUS.CONNECTED, ee.connectionHandlers.map((function (e) {
                                            try {
                                                e._eventListener && (a.isFalsy(e._eventListener.onConnected) || e._eventListener.onConnected())
                                            } catch (e) {
                                                a.Logger.error("connectionHandlers: Connected Status", e)
                                            }
                                        }))), e.WSReconnectionInProgress && e.clearWSReconnectionTimer();
                                        break;
                                    case W.READY_STATE.CLOSING:
                                        break;
                                    case W.READY_STATE.CLOSED:
                                        var r;
                                        (r = e.getConnectionStatus()) !== g.CONNECTION_STATUS.DISCONNECTED && r !== g.CONNECTION_STATUS.CONNECTING && (n.currentConnectionStatus = g.CONNECTION_STATUS.DISCONNECTED, ee.connectionHandlers.map((function (e) {
                                            try {
                                                e._eventListener && (a.isFalsy(e._eventListener.onDisconnected) || e._eventListener.onDisconnected())
                                            } catch (e) {
                                                a.Logger.error("connectionHandlers: Disconnected Status", e)
                                            }
                                        }))), Z.connection && (Z.connection = null), e.isLoggedOut || e.disconnectedByUser || n.tryReconnectingToWS()
                                }
                            }))
                        }, e.pingAnalytics = function () {
                            var t = this;
                            try {
                                e.keyStore.get("deviceId").then((function (n) {
                                    var r = null;
                                    window && window.location && window.location.origin && (r = window.location.origin);
                                    var o = "", i = n, s = {
                                        version: g.SDKHeader.sdkVersion,
                                        apiVersion: g.APPINFO.apiVersion,
                                        origin: r,
                                        uts: (new Date).getTime()
                                    };
                                    a.isFalsy(t.resource) || (s.resource = t.resource), a.isFalsy(t.platform) || (s.platform = t.platform), a.isFalsy(t.language) || (s.language = t.language), navigator && (o = navigator.userAgent);
                                    var l = {
                                        appInfo: s,
                                        uid: e.user.getUid(),
                                        userAgent: o,
                                        deviceId: i,
                                        platform: g.SDKHeader.platform
                                    };
                                    a.isFalsy(e.getSessionId()) || (l.wsId = e.getSessionId()), e.analyticsHost || (e.analyticsHost = a.format(g.ANALYTICS.analyticsHost, e.appSettings.getRegion())), e.analyticsVersion || (e.analyticsVersion = g.ANALYTICS.analyticsVersion);
                                    var E = "https://" + e.analyticsHost + "/" + e.analyticsVersion + "/ping", p = {
                                        appId: e.appId,
                                        sdk: a.format(g.SDKHeader.sdk, g.SDKHeader.platform, g.SDKHeader.sdkVersion),
                                        "Content-Type": "application/json"
                                    };
                                    e.settingsHash && (p.settingsHash = e.settingsHash), e.settingsHashReceivedAt && (p.settingsHashReceivedAt = e.settingsHashReceivedAt), e.jwt && (p.Authorization = "Bearer " + e.jwt), e.authToken && (p.authToken = e.authToken), c.postData(E, "POST", l, p, !1).then((function (e) {
                                        return e.json()
                                    })).then((function (n) {
                                        if (n.hasOwnProperty(g.ResponseConstants.RESPONSE_KEYS.KEY_DATA)) a.Logger.log("Analytics Ping Request Data", n[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA]); else if (n.hasOwnProperty(g.ResponseConstants.RESPONSE_KEYS.KEY_ERROR)) {
                                            var r = n[g.ResponseConstants.RESPONSE_KEYS.KEY_ERROR];
                                            a.Logger.log("Analytics Ping Request Error", new u.CometChatException(r));
                                            var o = r.code;
                                            if (o === g.Errors.ERR_SETTINGS_HASH_OUTDATED) {
                                                var i = e.authToken;
                                                e.getInstance().internalRestart(i)
                                            }
                                            o === g.Errors.ERR_NO_AUTH && t.updateJWT()
                                        }
                                    })).catch((function (e) {
                                        a.Logger.error("CometChat: pingAnalytics Fetch Error", e)
                                    }))
                                }))
                            } catch (e) {
                                a.Logger.error("CometChat: pingAnalytics", e)
                            }
                        }, e.updateJWT = function () {
                            c.makeApiCall("getMyDetails", {}, {}, !1).then((function (t) {
                                var n = t.data, r = n.settings, o = new l.Me(n);
                                if (n.hasOwnProperty("jwt") && n.jwt && (e.jwt = n.jwt), E.LocalStorage.getInstance().set("user", o), r && r[g.APP_SETTINGS.KEYS.SETTINGS_HASH] && e.settingsHash !== r[g.APP_SETTINGS.KEYS.SETTINGS_HASH]) {
                                    var i = e.getInstance().getAuthToken();
                                    e.getInstance().internalRestart(i)
                                }
                                a.Logger.log("CometChat: updateJWT response", t)
                            }), (function (e) {
                                a.Logger.error("CometChat: updateJWT Fetch Error", e)
                            })).catch((function (e) {
                                a.Logger.error("CometChat: updateJWT", e)
                            }))
                        }, e.startAnalyticsPingTimer = function () {
                            var t = this;
                            e.isAnalyticsPingStarted = !0, e.analyticsPingTimer = setInterval((function () {
                                try {
                                    t.pingAnalytics()
                                } catch (e) {
                                    a.Logger.error("CometChat: startAnalyticsPingTimer", e)
                                }
                            }), e.settingsInterval)
                        }, e.clearAnalyticsPingTimer = function () {
                            try {
                                e.isAnalyticsPingStarted = !1, clearInterval(e.analyticsPingTimer)
                            } catch (e) {
                                a.Logger.error("CometChat: clearAnalyticsPingTimer", e)
                            }
                        }, e.startWSReconnectionTimer = function () {
                            e.WSReconnectionInProgress = !0, e.WSReconnectionTimer = setInterval((function () {
                                try {
                                    e.WSLogin(e.user)
                                } catch (e) {
                                    a.Logger.error("CometChat: startWSReconnectionTimer", e)
                                }
                            }), e.WSReconnectionTimerInterval)
                        }, e.clearWSReconnectionTimer = function () {
                            e.WSReconnectionInProgress = !1, clearInterval(e.WSReconnectionTimer)
                        }, e.getJWT = function (t) {
                            return new Promise((function (n, r) {
                                try {
                                    q.getEndPoint("getJWT").then((function (o) {
                                        var i = {
                                            appId: e.appId,
                                            Accept: "application/json",
                                            authToken: e.authToken,
                                            resource: e.getSessionId(),
                                            sdk: a.format(g.SDKHeader.sdk, g.SDKHeader.platform, g.SDKHeader.sdkVersion),
                                            "Content-Type": "application/json"
                                        }, s = {};
                                        s[g.JWT_API.KEYS.PASSTHROUGH] = t, c.postData(o.endpoint, o.method, s, i, !1).then((function (e) {
                                            return e.json()
                                        })).then((function (e) {
                                            e.hasOwnProperty(g.ResponseConstants.RESPONSE_KEYS.KEY_DATA) ? n(e[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA]) : r(new u.CometChatException(e.error))
                                        })).catch((function (e) {
                                            var t = {error: y.FETCH_ERROR.ERROR_IN_API_CALL};
                                            r(new u.CometChatException(t))
                                        }))
                                    }), (function (e) {
                                        r(new u.CometChatException(e))
                                    }))
                                } catch (e) {
                                    r(new u.CometChatException(e))
                                }
                            }))
                        }, e.getConnectionStatus = function () {
                            return this.currentConnectionStatus
                        },e.prototype.setConnectionStatus = function (t) {
                            e.currentConnectionStatus = t
                        },e.isExtensionEnabled = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    if (a.isFalsy(e)) return n(new u.CometChatException(g.ExtensionErrors.INVALID_EXTENSION));
                                    a.getAppSettings().then((function (r) {
                                        if (r.extensions) {
                                            var o = r.extensions;
                                            if (0 < o.length) {
                                                var i = o.some((function (t) {
                                                    return t.id === e
                                                }));
                                                return t(i)
                                            }
                                            return t(!1)
                                        }
                                        return n(new u.CometChatException(g.ExtensionErrors.EXTENSION_NOT_FOUND))
                                    }), (function (e) {
                                        return n(new u.CometChatException(e))
                                    }))
                                } catch (e) {
                                    return n(new u.CometChatException(e))
                                }
                            }))
                        },e.getExtensionDetails = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    if (a.isFalsy(e)) return n(new u.CometChatException(g.ExtensionErrors.INVALID_EXTENSION));
                                    a.getAppSettings().then((function (r) {
                                        if (r.extensions) {
                                            var o = r.extensions;
                                            if (0 < o.length) {
                                                var i = o.filter((function (t) {
                                                    return t.id === e
                                                }));
                                                if (0 < i.length) {
                                                    var s = new z.CCExtension(i[0]);
                                                    return t(s)
                                                }
                                                return n(new u.CometChatException(g.ExtensionErrors.EXTENSION_NOT_FOUND))
                                            }
                                            return n(new u.CometChatException(g.ExtensionErrors.EXTENSION_NOT_FOUND))
                                        }
                                        return n(new u.CometChatException(g.ExtensionErrors.EXTENSION_NOT_FOUND))
                                    }), (function (e) {
                                        return n(new u.CometChatException(e))
                                    }))
                                } catch (e) {
                                    return n(new u.CometChatException(e))
                                }
                            }))
                        },e.getAppSettings = function () {
                            return new Promise((function (e, t) {
                                try {
                                    c.makeApiCall("appSettings").then((function (t) {
                                        E.LocalStorage.getInstance().set(g.LOCAL_STORE.KEY_APP_SETTINGS, t.data), e(t.data)
                                    }), (function (e) {
                                        t(new u.CometChatException(e.error))
                                    }))
                                } catch (e) {
                                    t(new u.CometChatException(e))
                                }
                            }))
                        },e.isFeatureEnabled = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    if (a.isFalsy(e)) return n(new u.CometChatException(g.FeatureRestrictionErrors.INVALID_FEATURE));
                                    a.getAppSettings().then((function (r) {
                                        if (r.parameters) {
                                            var o = r.parameters;
                                            return o.hasOwnProperty(e) ? t(o[e]) : t(!1)
                                        }
                                        return n(new u.CometChatException(g.FeatureRestrictionErrors.FEATURE_NOT_FOUND))
                                    }), (function (e) {
                                        return n(new u.CometChatException(e))
                                    }))
                                } catch (e) {
                                    return n(new u.CometChatException(e))
                                }
                            }))
                        },e.logout = function () {
                            var t = this;
                            return new Promise((function (n, r) {
                                try {
                                    e.didAnalyticsPingStart() && e.clearAnalyticsPingTimer(), e.WSReconnectionInProgress && e.clearWSReconnectionTimer(), e.isLoggedOut = !0, e.WSReconnectionInProgress = !1, e.isAnalyticsDisabled = !1, c.makeApiCall("userLogout").then((function (r) {
                                        t.clearCache().then((function () {
                                            e.apiKey = void 0, e.user = void 0, e.authToken = void 0, e.cometChat = void 0, e.mode = void 0, Z.WSLogout(), e.pushToLoginListener("", "Logout_Success"), n(r.data)
                                        }))
                                    }), (function (o) {
                                        t.clearCache().then((function () {
                                            e.apiKey = void 0, e.user = void 0, e.authToken = void 0, e.cometChat = void 0, e.mode = void 0, Z.WSLogout(), e.pushToLoginListener("", "Logout_Success"), new u.CometChatException(o.error).code == y.SERVER_ERRORS.AUTH_ERR.code ? n({}) : r(new u.CometChatException(o.error))
                                        }))
                                    }))
                                } catch (e) {
                                    r(new u.CometChatException(e))
                                }
                            }))
                        },e.callExtension = function (t, n, r, o) {
                            return void 0 === o && (o = {}), new Promise((function (i, l) {
                                var E = a.format((new s.EndpointFactory).extensionApi, t, e.appSettings.getRegion(), r),
                                    p = {
                                        appId: e.appId,
                                        Accept: "application/json",
                                        authToken: e.authToken,
                                        resource: e.getSessionId(),
                                        sdk: a.format(g.SDKHeader.sdk, g.SDKHeader.platform, g.SDKHeader.sdkVersion),
                                        chatApiVersion: g.APPINFO.apiVersion,
                                        "Content-Type": "application/json"
                                    };
                                c.postData(E, n, o, p, !1).then((function (e) {
                                    return e.json()
                                })).then((function (e) {
                                    e.hasOwnProperty(g.ResponseConstants.RESPONSE_KEYS.KEY_DATA) ? i(e[g.ResponseConstants.RESPONSE_KEYS.KEY_DATA]) : l(new u.CometChatException(e.error))
                                })).catch((function (e) {
                                    var t = {error: y.FETCH_ERROR.ERROR_IN_API_CALL};
                                    l(t)
                                }))
                            }))
                        },e.setSource = function (e, t, n) {
                            a.isFalsy(e) || (this.resource = e), a.isFalsy(t) || (this.platform = t), a.isFalsy(n) || (this.language = n)
                        },e.clearCache = function () {
                            return new Promise((function (t, n) {
                                try {
                                    E.LocalStorage.getInstance().clearStore().then((function () {
                                        e.removeDataFromSessionStorage(g.SESSION_STORE.SESSION_ID), a.Logger.info("CometChat: clearCache => All store cleared successfully", "true"), t(!0)
                                    }))
                                } catch (t) {
                                    a.Logger.error("CometChat: clearCache", t), n(t)
                                }
                            }))
                        },e.connect = function () {
                            e.user && (Z.connection || (e.disconnectedByUser = !1, e.WSLogin(e.user)), e.didAnalyticsPingStart() || e.isAnalyticsDisabled || (e.pingAnalytics(), e.startAnalyticsPingTimer()))
                        },e.disconnect = function () {
                            e.user && (e.disconnectedByUser = !0, Z.connection && Z.WSLogout(), e.didAnalyticsPingStart() && e.clearAnalyticsPingTimer())
                        },e.prototype.internalRestart = function (t) {
                            e.internalRestart || e.getInstance().internalLogout(!1).then((function () {
                                e.internalRestart = !0, e.login(t).then((function (t) {
                                    e.shouldConnectToWS = !0, e.internalRestart = !1
                                }), (function (t) {
                                    a.Logger.error("CometChat: internalRestart :: login", t), e.internalRestart = !1
                                }))
                            }), (function (e) {
                                a.Logger.error("CometChat: internalRestart :: internalLogout", e)
                            }))
                        },e.prototype.internalLogout = function (t) {
                            return void 0 === t && (t = !0), new Promise((function (n, r) {
                                try {
                                    e.didAnalyticsPingStart() && e.clearAnalyticsPingTimer(), e.WSReconnectionInProgress && e.clearWSReconnectionTimer(), e.isLoggedOut = !0, e.WSReconnectionInProgress = !1, e.isAnalyticsDisabled = !1, e.clearCache().then((function () {
                                        e.apiKey = void 0, e.user = void 0, e.authToken = void 0, e.cometChat = void 0, e.mode = void 0, Z.WSLogout(), t && e.pushToLoginListener("", "Logout_Success"), n(!0)
                                    }))
                                } catch (n) {
                                    a.Logger.error("CometChat: internalLogout", n), r(n)
                                }
                            }))
                        },e.initialzed = !1,e.CometChatException = u.CometChatException,e.TextMessage = f.TextMessage,e.MediaMessage = p.MediaMessage,e.CustomMessage = b.CustomMessage,e.Action = m.Action,e.Call = I.Call,e.TypingIndicator = D.TypingIndicator,e.TransientMessage = Q.TransientMessage,e.Group = C.Group,e.User = l.User,e.GroupMember = Y.GroupMember,e.Conversation = K.Conversation,e.USER_STATUS = {
                            ONLINE: g.PresenceConstatnts.STATUS.ONLINE,
                            OFFLINE: g.PresenceConstatnts.STATUS.OFFLINE
                        },e.MessagesRequest = M.MessagesRequest,e.MessagesRequestBuilder = M.MessagesRequestBuilder,e.UsersRequest = L.UsersRequest,e.UsersRequestBuilder = L.UsersRequestBuilder,e.ConversationsRequest = P.ConversationsRequest,e.ConversationsRequestBuilder = P.ConversationsRequestBuilder,e.BlockedUsersRequest = G.BlockedUsersRequest,e.BlockedUsersRequestBuilder = G.BlockedUsersRequestBuilder,e.GroupsRequest = O.GroupsRequest,e.GroupsRequestBuilder = O.GroupsRequestBuilder,e.GroupMembersRequest = v.GroupMembersRequest,e.GroupMembersRequestBuilder = v.GroupMembersRequestBuilder,e.BannedMembersRequest = N.BannedMembersRequest,e.BannedMembersRequestBuilder = N.BannedMembersRequestBuilder,e.CallSettings = V.CallSettings,e.CallSettingsBuilder = V.CallSettingsBuilder,e.AppSettings = k.AppSettings,e.AppSettingsBuilder = k.AppSettingsBuilder,e.MessageListener = A.MessageListener,e.UserListener = A.UserListener,e.GroupListener = A.GroupListener,e.OngoingCallListener = A.OngoingCallListener,e.CallListener = A.CallListener,e.ConnectionListener = A.ConnectionListener,e.LoginListener = A.LoginListener,e.CallController = R.CallController,e.CometChatHelper = x.CometChatHelper,e.Attachment = B.Attachment,e.MediaDevice = X.MediaDevice,e.MESSAGE_TYPE = g.MessageConstatnts.TYPE,e.CATEGORY_MESSAGE = g.MessageConstatnts.CATEGORY.MESSAGE,e.CATEGORY_ACTION = g.MessageConstatnts.CATEGORY.ACTION,e.CATEGORY_CALL = g.MessageConstatnts.CATEGORY.CALL,e.CATEGORY_CUSTOM = g.MessageConstatnts.CATEGORY.CUSTOM,e.ACTION_TYPE = g.ActionConstatnts.ACTIONS,e.CALL_TYPE = g.CallConstants.CALL_TYPE,e.RECEIVER_TYPE = g.MessageConstatnts.RECEIVER_TYPE,e.CALL_STATUS = g.CallConstants.CALL_STATUS,e.GROUP_MEMBER_SCOPE = g.GROUP_MEMBER_SCOPE,e.GROUP_TYPE = g.GROUP_TYPE,e.MESSAGE_REQUEST = g.MessageConstatnts.PAGINATION.CURSOR_FILEDS,e.CONNECTION_STATUS = g.CONNECTION_STATUS,e.CALL_MODE = g.CallConstants.CALL_MODE,e.WSReconnectionInProgress = !1,e.WSReconnectionTimerInterval = 5e3,e.currentConnectionStatus = g.CONNECTION_STATUS.DISCONNECTED,e.isConnectingFromInit = !1,e.loginInProgress = !1,e.internalRestart = !1,e.settingsInterval = 6e4,e.isAnalyticsPingStarted = !1,e.isLoggedOut = !0,e.isAnalyticsDisabled = !1,e.disconnectedByUser = !1,e.shouldConnectToWS = !0,e
                    }();
                t.CometChat = te
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                t.__esModule = !0, t.Me = t.User = void 0;
                var i = n(2), s = n(14), a = n(1), u = function () {
                    function e() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        if (this.hasBlockedMe = !1, this.blockedByMe = !1, this.deactivatedAt = 0, 1 === e.length) typeof e[0] === a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? this.uid = e[0] : (this.uid = e[0].uid, this.name = e[0].name, e[0].authToken && (this.authToken = e[0].authToken), e[0].avatar && (this.avatar = e[0].avatar), e[0].lastActiveAt && (this.lastActiveAt = e[0].lastActiveAt), e[0].link && (this.link = e[0].link), e[0].metadata && (this.metadata = e[0].metadata), e[0].role && (this.role = e[0].role), e[0].statusMessage && (this.statusMessage = e[0].statusMessage), e[0].status && "offline" !== e[0].status ? this.status = "online" : this.status = "offline", e[0].tags && (this.tags = e[0].tags), e[0].deactivatedAt && (this.deactivatedAt = e[0].deactivatedAt)); else {
                            if (2 !== e.length) throw new i.CometChatException(s.ERRORS.PARAMETER_MISSING);
                            this.uid = e[0], this.name = e[1]
                        }
                    }

                    return e.prototype.getUid = function () {
                        return this.uid.toString()
                    }, e.prototype.setUid = function (e) {
                        this.uid = e
                    }, e.prototype.getName = function () {
                        return this.name.toString()
                    }, e.prototype.setName = function (e) {
                        e && (this.name = e)
                    }, e.prototype.getAuthToken = function () {
                        return this.authToken
                    }, e.prototype.setAuthToken = function (e) {
                        this.authToken = e
                    }, e.prototype.getAvatar = function () {
                        return this.avatar
                    }, e.prototype.setAvatar = function (e) {
                        this.avatar = e
                    }, e.prototype.getLastActiveAt = function () {
                        return this.lastActiveAt
                    }, e.prototype.setLastActiveAt = function (e) {
                        this.lastActiveAt = e
                    }, e.prototype.getLink = function () {
                        return this.link
                    }, e.prototype.setLink = function (e) {
                        return this.link = e
                    }, e.prototype.getMetadata = function () {
                        return this.metadata
                    }, e.prototype.setMetadata = function (e) {
                        this.metadata = e
                    }, e.prototype.getRole = function () {
                        return this.role
                    }, e.prototype.setRole = function (e) {
                        this.role = e
                    }, e.prototype.getStatus = function () {
                        return this.status
                    }, e.prototype.setStatus = function (e) {
                        this.status = e
                    }, e.prototype.getStatusMessage = function () {
                        return this.statusMessage
                    }, e.prototype.setStatusMessage = function (e) {
                        this.statusMessage = e
                    }, e.prototype.setBlockedByMe = function (e) {
                        this.blockedByMe = e
                    }, e.prototype.getBlockedByMe = function () {
                        return this.blockedByMe
                    }, e.prototype.setHasBlockedMe = function (e) {
                        this.hasBlockedMe = e
                    }, e.prototype.getHasBlockedMe = function () {
                        return this.hasBlockedMe
                    }, e.prototype.setTags = function (e) {
                        this.tags = e
                    }, e.prototype.getTags = function () {
                        return this.tags
                    }, e.prototype.setDeactivatedAt = function (e) {
                        this.deactivatedAt = e
                    }, e.prototype.getDeactivatedAt = function () {
                        return this.deactivatedAt
                    }, e
                }(), c = function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.wsChannel = t.wsChannel, t.jwt && (n.jwt = t.jwt), n
                    }

                    return o(t, e), t.prototype.getWsChannel = function () {
                        return this.wsChannel
                    }, t.prototype.getJWT = function () {
                        return this.jwt
                    }, t
                }(t.User = u);
                t.Me = c
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.KEYS = t.AUTH = t.MESSAGE = t.PRESENCE = t.RECEIPTS = t.TRANSIENT_MESSAGE = t.TYPING_INDICATOR = t.LOGOUT_REASON = t.LOGOUT_CODE = t.READY_STATE = t.WS = void 0, t.WS = {protocol: "wss://"}, t.READY_STATE = {
                    CONNECTING: 0,
                    OPEN: 1,
                    CLOSING: 2,
                    CLOSED: 3,
                    INVALID_JWT: 4
                }, t.LOGOUT_CODE = 1e3, t.LOGOUT_REASON = "User logged out", t.TYPING_INDICATOR = {
                    TYPE: "typing_indicator",
                    ACTION: {STARTED: "started", ENDED: "ended"}
                }, t.TRANSIENT_MESSAGE = {TYPE: "transient_message"}, t.RECEIPTS = {
                    TYPE: "receipts",
                    ACTION: {READ: "read", DELIVERED: "delivered"},
                    RECEIPT_TYPE: {READ_RECEIPT: "read", DELIVERY_RECEIPT: "delivery"}
                }, t.PRESENCE = {
                    TYPE: "presence",
                    ACTION: {ONLINE: "online", AVAILABLE: "available", OFFLINE: "offline"}
                }, t.MESSAGE = {TYPE: "message"}, t.AUTH = {TYPE: "auth"}, t.KEYS = {
                    TYPE: "type",
                    ACTION: "action",
                    APP_ID: "appId",
                    RECEIVER: "receiver",
                    RECEIVER_TYPE: "receiverType",
                    DEVICE_ID: "deviceId",
                    BODY: "body",
                    USER: "user",
                    METADATA: "metadata",
                    MESSAGE_ID: "messageId",
                    TIMESTAMP: "timestamp",
                    STATUS: "status",
                    CODE: "code",
                    SENDER: "sender",
                    MESSAGE_SENDER: "messageSender",
                    PRESENCE_SUBSCRIPTION: "presenceSubscription",
                    AUTH: "auth",
                    PING: "ping",
                    DATA: "data",
                    PARAMS: "params",
                    ACK: "ack",
                    PONG: "pong"
                }
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.postData = t.makeAdminApiCall = t.makeApiCall = void 0;
                var r = n(29), o = n(3), i = n(0), s = n(2), a = n(14), u = n(1);

                function c(e, t, n, r, o) {
                    var s;
                    return void 0 === e && (e = ""), void 0 === t && (t = "GET"), void 0 === n && (n = {}), void 0 === r && (r = {}), n = i.isFalsy(n) ? void 0 : ("GET" == t && (e += "?", Object.keys(n).map((function (t, r) {
                        e = r === Object.keys(n).length - 1 ? e + t + "=" + n[t] : e + t + "=" + n[t] + "&"
                    })), n = void 0), o && (s = new FormData, Object.keys(n).map((function (e) {
                        "data" != e ? "tags" == e ? s.append(e + "[]", n[e]) : "metadata" != e && s.append(e, n[e]) : s.append(e, JSON.stringify(n[e]))
                    }))), JSON.stringify(n)), fetch(e, {
                        method: t,
                        mode: "cors",
                        cache: "no-cache",
                        headers: r,
                        redirect: "follow",
                        referrer: "no-referrer",
                        body: o ? s : n
                    })
                }

                t.makeApiCall = function (e, t, n, l) {
                    void 0 === e && (e = ""), void 0 === t && (t = {}), void 0 === n && (n = {});
                    var E = o.CometChat.getInstance(o.CometChat.getAppId());
                    return new Promise((function (p, d) {
                        try {
                            r.getEndPoint(e, t).then((function (t) {
                                var r = {
                                    resource: o.CometChat.getSessionId(),
                                    appId: o.CometChat.getAppId(),
                                    Accept: "application/json",
                                    sdk: i.format(u.SDKHeader.sdk, u.SDKHeader.platform, u.SDKHeader.sdkVersion)
                                };
                                l || (r["Content-Type"] = "application/json"), t.hasOwnProperty("isAdminApi") && t.isAdminApi ? E.getApiKey() ? r.apiKey = E.getApiKey() : d({
                                    error: {
                                        code: "API_KEY_NOT_SET",
                                        message: "An apiKey is needed to use the " + e + " api.",
                                        name: "API_KEY_NOT_SET"
                                    }
                                }) : E.getAuthToken() ? r.authToken = E.getAuthToken() : d({
                                    error: {
                                        code: "USER_NOT_LOGED_IN",
                                        message: "An authToken is need to use the " + e + " end-point. PS- We are aware of the spelling mistake, but in order to maintain backward compatibility we cannot change it :(",
                                        name: "User not logged-in"
                                    }
                                }), c(t.endpoint, t.method, n, r, l).then((function (e) {
                                    return e.json()
                                })).then((function (e) {
                                    if (e.hasOwnProperty("data")) e.data.hasOwnProperty("authToken") && o.CometChat.setAuthToken(e.data.authToken), p(e); else {
                                        if (e.hasOwnProperty("error")) {
                                            var t = e.error;
                                            t.hasOwnProperty("code") && t.code === u.API_ERROR_CODES.AUTH_ERR_AUTH_TOKEN_NOT_FOUND && o.CometChat.getInstance().internalLogout().then((function () {
                                                i.Logger.log("CometChat: makeApiCall", "User logged out")
                                            }))
                                        }
                                        d(e)
                                    }
                                })).catch((function (e) {
                                    var t = {error: a.FETCH_ERROR.ERROR_IN_API_CALL};
                                    d(t)
                                }))
                            })).catch((function (e) {
                                return d
                            }))
                        } catch (e) {
                            d(new s.CometChatException(e))
                        }
                    }))
                }, t.makeAdminApiCall = function (e, t, n, s) {
                    void 0 === e && (e = ""), void 0 === t && (t = {}), void 0 === n && (n = {});
                    var l = o.CometChat.getInstance(o.CometChat.getAppId());
                    return new Promise((function (E, p) {
                        r.getEndPoint(e, t).then((function (t) {
                            var r = {
                                appId: o.CometChat.getAppId(),
                                Accept: "application/json",
                                sdk: i.format(u.SDKHeader.sdk, u.SDKHeader.platform, u.SDKHeader.sdkVersion)
                            };
                            s || (r["Content-Type"] = "application/json"), t.hasOwnProperty("isAdminApi") && t.isAdminApi ? l.getApiKey() ? r.apiKey = l.getApiKey() : p({error: "An apiKey is need to use the " + e + " api."}) : l.getAuthToken() ? r.authToken = l.getAuthToken() : p({error: "An authToken is need to use the " + e + " api."}), c(t.endpoint, t.method, n, r, s).then((function (e) {
                                return e.json()
                            })).then((function (e) {
                                e.hasOwnProperty("data") ? (e.data.hasOwnProperty("authToken") && o.CometChat.setAuthToken(e.data.authToken), E(e)) : p(e)
                            })).catch((function (e) {
                                var t = {error: a.FETCH_ERROR.ERROR_IN_API_CALL};
                                p(t)
                            }))
                        })).catch((function (e) {
                            return p
                        }))
                    }))
                }, t.postData = c
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.BaseMessage = void 0;
                var r = function () {
                    function e(e, t, n, r) {
                        this.receiverId = e, this.type = t, this.receiverType = n, this.category = r
                    }

                    return e.prototype.getId = function () {
                        return this.id
                    }, e.prototype.setId = function (e) {
                        this.id = e
                    }, e.prototype.getConversationId = function () {
                        return this.conversationId
                    }, e.prototype.setConversationId = function (e) {
                        this.conversationId = e
                    }, e.prototype.getParentMessageId = function () {
                        return this.parentMessageId
                    }, e.prototype.setParentMessageId = function (e) {
                        this.parentMessageId = e
                    }, e.prototype.getMuid = function () {
                        return this.muid
                    }, e.prototype.setMuid = function (e) {
                        this.muid = e
                    }, e.prototype.getSender = function () {
                        return this.sender
                    }, e.prototype.setSender = function (e) {
                        this.sender = e
                    }, e.prototype.getReceiver = function () {
                        return this.receiver
                    }, e.prototype.setReceiver = function (e) {
                        this.receiver = e
                    }, e.prototype.getReceiverId = function () {
                        return this.receiverId
                    }, e.prototype.setReceiverId = function (e) {
                        this.receiverId = e
                    }, e.prototype.getType = function () {
                        return this.type
                    }, e.prototype.setType = function (e) {
                        this.type = e
                    }, e.prototype.getReceiverType = function () {
                        return this.receiverType
                    }, e.prototype.setReceiverType = function (e) {
                        this.receiverType = e
                    }, e.prototype.getSentAt = function () {
                        return this.sentAt
                    }, e.prototype.setSentAt = function (e) {
                        this.sentAt = e
                    }, e.prototype.getStatus = function () {
                        return this.status
                    }, e.prototype.setStatus = function (e) {
                        this.status = e
                    }, e.prototype.getDeliveredAt = function () {
                        return this.deliveredAt
                    }, e.prototype.setDeliveredAt = function (e) {
                        this.deliveredAt = e
                    }, e.prototype.getDeliveredToMeAt = function () {
                        return this.deliveredToMeAt
                    }, e.prototype.setDeliveredToMeAt = function (e) {
                        this.deliveredToMeAt = e
                    }, e.prototype.getReadAt = function () {
                        return this.readAt
                    }, e.prototype.setReadAt = function (e) {
                        this.readAt = e
                    }, e.prototype.getReadByMeAt = function () {
                        return this.readByMeAt
                    }, e.prototype.setReadByMeAt = function (e) {
                        this.readByMeAt = e
                    }, e.prototype.getCategory = function () {
                        return this.category
                    }, e.prototype.setCategory = function (e) {
                        this.category = e
                    }, e.prototype.getEditedAt = function () {
                        return this.editedAt
                    }, e.prototype.setEditedAt = function (e) {
                        this.editedAt = e
                    }, e.prototype.getEditedBy = function () {
                        return this.editedBy
                    }, e.prototype.setEditedBy = function (e) {
                        this.editedBy = e
                    }, e.prototype.getDeletedAt = function () {
                        return this.deletedAt
                    }, e.prototype.setDeletedAt = function (e) {
                        this.deletedAt = e
                    }, e.prototype.getDeletedBy = function () {
                        return this.deletedBy
                    }, e.prototype.setDeletedBy = function (e) {
                        this.deletedBy = e
                    }, e.prototype.getReplyCount = function () {
                        return this.replyCount
                    }, e.prototype.setReplyCount = function (e) {
                        this.replyCount = e
                    }, e.prototype.getRawMessage = function () {
                        return this.rawMessage
                    }, e.prototype.setRawMessage = function (e) {
                        this.rawMessage = e
                    }, e
                }();
                t.BaseMessage = r
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.Group = void 0;
                var r = n(1), o = function () {
                    function e(e, t, n, r, o, i, s) {
                        this.hasJoined = !1, this.membersCount = 0, this.guid = e, t && (this.name = t), n && (this.type = n), !r && "" !== r || "password" != n || (this.password = r), (o || "" === o) && (this.icon = o), (i || "" === i) && (this.description = i), s && (this.hasJoined = s)
                    }

                    return e.prototype.getGuid = function () {
                        return this.guid
                    }, e.prototype.setGuid = function (e) {
                        this.guid = e
                    }, e.prototype.getName = function () {
                        return this.name
                    }, e.prototype.setName = function (e) {
                        e && (this.name = e)
                    }, e.prototype.getType = function () {
                        return this.type
                    }, e.prototype.setType = function (e) {
                        this.type = e
                    }, e.prototype.getPassword = function () {
                        return this.password
                    }, e.prototype.setPassword = function (e) {
                        this.password = e
                    }, e.prototype.getIcon = function () {
                        return this.icon
                    }, e.prototype.setIcon = function (e) {
                        this.icon = e
                    }, e.prototype.getDescription = function () {
                        return this.description
                    }, e.prototype.setDescription = function (e) {
                        this.description = e
                    }, e.prototype.getOwner = function () {
                        return this.owner
                    }, e.prototype.setOwner = function (e) {
                        this.owner = e
                    }, e.prototype.getMetadata = function () {
                        return this.metadata
                    }, e.prototype.setMetadata = function (e) {
                        this.metadata = e
                    }, e.prototype.getCreatedAt = function () {
                        return this.createdAt
                    }, e.prototype.setCreatedAt = function (e) {
                        this.createdAt = e
                    }, e.prototype.getUpdatedAt = function () {
                        return this.updatedAt
                    }, e.prototype.setUpdatedAt = function (e) {
                        this.updatedAt = e
                    }, e.prototype.getHasJoined = function () {
                        return this.hasJoined
                    }, e.prototype.setHasJoined = function (e) {
                        this.hasJoined = e
                    }, e.prototype.getWsChannel = function () {
                        return this.wsChannel
                    }, e.prototype.setWsChannel = function (e) {
                        this.wsChannel = e
                    }, e.prototype.setScope = function (e) {
                        this.scope = e
                    }, e.prototype.getScope = function () {
                        return this.scope
                    }, e.prototype.getJoinedAt = function () {
                        return this.joinedAt
                    }, e.prototype.setJoinedAt = function (e) {
                        this.joinedAt = e
                    }, e.prototype.getMembersCount = function () {
                        return this.membersCount
                    }, e.prototype.setMembersCount = function (e) {
                        this.membersCount = e
                    }, e.prototype.setTags = function (e) {
                        this.tags = e
                    }, e.prototype.getTags = function () {
                        return this.tags
                    }, e.TYPE = r.GroupType, e.Type = e.TYPE, e
                }();
                t.Group = o
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.CometChatEvent = void 0;
                var r = n(0), o = n(5), i = function () {
                    function e(e, t, n, o, i, s) {
                        r.isFalsy(e) || (this.appId = e), r.isFalsy(t) || (this.receiver = t), r.isFalsy(n) || (this.receiverType = n), r.isFalsy(i) || (this.deviceId = i), r.isFalsy(o) || (this.sender = o), r.isFalsy(s) || (this.messageSender = s)
                    }

                    return e.prototype.getAppId = function () {
                        return this.appId
                    }, e.prototype.setAppId = function (e) {
                        this.appId = e
                    }, e.prototype.getReceiver = function () {
                        return this.receiver
                    }, e.prototype.setReceiver = function (e) {
                        this.receiver = e
                    }, e.prototype.getSender = function () {
                        return this.sender
                    }, e.prototype.setSender = function (e) {
                        this.sender = e
                    }, e.prototype.getReceiverType = function () {
                        return this.receiverType
                    }, e.prototype.setReceiverType = function (e) {
                        this.receiverType = e
                    }, e.prototype.getType = function () {
                        return this.type
                    }, e.prototype.setType = function (e) {
                        this.type = e
                    }, e.prototype.getDeviceId = function () {
                        return this.deviceId
                    }, e.prototype.setDeviceId = function (e) {
                        this.deviceId = e
                    }, e.prototype.getMessageSender = function () {
                        return this.messageSender
                    }, e.prototype.setMessageSender = function (e) {
                        this.messageSender = e
                    }, e.prototype.getCometChatEventJSON = function () {
                        var e = {};
                        return e[o.KEYS.APP_ID] = this.getAppId(), e[o.KEYS.RECEIVER] = this.getReceiver(), e[o.KEYS.RECEIVER_TYPE] = this.getReceiverType(), e[o.KEYS.DEVICE_ID] = this.getDeviceId(), e[o.KEYS.TYPE] = this.getType(), e[o.KEYS.SENDER] = this.getSender(), r.isFalsy(this.getMessageSender()) || (e[o.KEYS.MESSAGE_SENDER] = this.getMessageSender()), e
                    }, e
                }();
                t.CometChatEvent = i
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.MessageController = void 0;
                var r = n(7), o = n(16), i = n(17), s = n(0), a = n(1), u = n(20), c = n(21), l = n(22), E = n(2),
                    p = n(18), d = n(19), f = n(3), S = n(11), h = function () {
                        function e() {
                        }

                        return e.trasformJSONMessge = function (e) {
                            try {
                                var t = null;
                                e.hasOwnProperty("rawMessage") || (t = JSON.parse(JSON.stringify(e)));
                                var n = void 0;
                                switch (e[a.MessageConstatnts.KEYS.CATEGORY]) {
                                    case a.MessageConstatnts.CATEGORY.ACTION:
                                        n = u.Action.actionFromJSON(e);
                                        break;
                                    case a.MessageConstatnts.CATEGORY.CALL:
                                        n = c.Call.callFromJSON(e);
                                        break;
                                    case a.MessageConstatnts.CATEGORY.MESSAGE:
                                        switch (e[a.MessageConstatnts.KEYS.TYPE]) {
                                            case a.MessageConstatnts.TYPE.TEXT:
                                                n = new o.TextMessage(e[a.MessageConstatnts.KEYS.RECEIVER], e[a.MessageConstatnts.KEYS.DATA][a.MessageConstatnts.KEYS.TEXT], e[a.MessageConstatnts.KEYS.RECEIVER_TYPE]);
                                                break;
                                            case a.MessageConstatnts.TYPE.CUSTOM:
                                                n = new d.CustomMessage(e[a.MessageConstatnts.KEYS.RECEIVER], e[a.MessageConstatnts.KEYS.DATA][a.MessageConstatnts.KEYS.CUSTOM_DATA], e[a.MessageConstatnts.KEYS.RECEIVER_TYPE]);
                                                break;
                                            default:
                                                if (n = new i.MediaMessage(e[a.MessageConstatnts.KEYS.RECEIVER], e[a.MessageConstatnts.KEYS.DATA][a.MessageConstatnts.KEYS.URL], e[a.MessageConstatnts.KEYS.TYPE], e[a.MessageConstatnts.KEYS.RECEIVER_TYPE]), e.hasOwnProperty(a.MessageConstatnts.KEYS.DATA)) {
                                                    var E = e[a.MessageConstatnts.KEYS.DATA];
                                                    if (E.hasOwnProperty(a.MessageConstatnts.KEYS.ATTATCHMENTS)) {
                                                        var f, S = E[a.MessageConstatnts.KEYS.ATTATCHMENTS];
                                                        new Array, S.map((function (e) {
                                                            f = new p.Attachment(e)
                                                        })), n.setAttachment(f)
                                                    }
                                                    E.hasOwnProperty(a.MessageConstatnts.KEYS.TEXT) && n.setCaption(E[a.MessageConstatnts.KEYS.TEXT])
                                                }
                                                n.hasOwnProperty("file") && delete n.file
                                        }
                                        break;
                                    case a.MessageConstatnts.CATEGORY.CUSTOM:
                                        n = new d.CustomMessage(e[a.MessageConstatnts.KEYS.RECEIVER], e[a.MessageConstatnts.KEYS.DATA][a.MessageConstatnts.KEYS.CUSTOM_DATA], e[a.MessageConstatnts.KEYS.RECEIVER_TYPE], e.type)
                                }
                                e[a.MessageConstatnts.KEYS.MY_RECEIPTS] && (e[a.MessageConstatnts.KEYS.MY_RECEIPTS] = e[a.MessageConstatnts.KEYS.MY_RECEIPTS], Object.keys(e[a.MessageConstatnts.KEYS.MY_RECEIPTS]).map((function (t) {
                                    var n = new l.MessageReceipt;
                                    t == a.DELIVERY_RECEIPTS.DELIVERED_AT && (n.setReceiptType(n.RECEIPT_TYPE.DELIVERY_RECEIPT), n.setDeliveredAt(e[a.MessageConstatnts.KEYS.MY_RECEIPTS][a.DELIVERY_RECEIPTS.DELIVERED_AT]), s.isFalsy(e[a.MessageConstatnts.KEYS.MY_RECEIPTS][a.DELIVERY_RECEIPTS.RECIPIENT]) ? e[a.DELIVERY_RECEIPTS.DELIVERED_TO_ME_AT] = e[a.MessageConstatnts.KEYS.MY_RECEIPTS][a.DELIVERY_RECEIPTS.DELIVERED_AT] : n.setSender(e[a.MessageConstatnts.KEYS.MY_RECEIPTS][a.DELIVERY_RECEIPTS.RECIPIENT]), n.setReceiverType(e[a.MessageConstatnts.KEYS.RECEIVER_TYPE]), n.setReceiver(e[a.MessageConstatnts.KEYS.RECEIVER])), e[a.MessageConstatnts.KEYS.MY_RECEIPTS][a.READ_RECEIPTS.READ_AT] && (n.setReceiptType(n.RECEIPT_TYPE.READ_RECEIPT), n.setReadAt(e[a.MessageConstatnts.KEYS.MY_RECEIPTS][a.READ_RECEIPTS.READ_AT]), s.isFalsy(e[a.MessageConstatnts.KEYS.MY_RECEIPTS][a.READ_RECEIPTS.RECIPIENT]) ? e[a.READ_RECEIPTS.READ_BY_ME_AT] = e[a.MessageConstatnts.KEYS.MY_RECEIPTS][a.READ_RECEIPTS.READ_AT] : n.setSender(e[a.MessageConstatnts.KEYS.MY_RECEIPTS][a.READ_RECEIPTS.RECIPIENT]), n.setReceiverType(e[a.MessageConstatnts.KEYS.RECEIVER_TYPE]), n.setReceiver(e[a.MessageConstatnts.KEYS.RECEIVER]))
                                })));
                                try {
                                    if (Object.assign(n, e), (e = n).parentId && (e.parentMessageId = e.parentId, delete e.parentId), e instanceof r.BaseMessage && (s.isFalsy(t) || e.setRawMessage(t)), e instanceof o.TextMessage) e.setSender(e.getSender()), e.setReceiver(e.getReceiver()), e.getData()[a.MessageConstatnts.KEYS.METADATA] && e.setMetadata(e.getData()[a.MessageConstatnts.KEYS.METADATA]); else if (e instanceof i.MediaMessage) e.getData()[a.MessageConstatnts.KEYS.METADATA] && e.setMetadata(e.getData()[a.MessageConstatnts.KEYS.METADATA]), e.setSender(e.getSender()), e.setReceiver(e.getReceiver()); else if (e instanceof u.Action) e.setSender(e.getSender()), e.setReceiver(e.getActionFor()), e.setActionBy(e.getActionBy()), e.setActionOn(e.getActionOn()), e.setActionFor(e.getActionFor()), e.setMessage(e.getMessage()); else if (e instanceof c.Call) {
                                        try {
                                            e.setSender(e.getSender())
                                        } catch (t) {
                                            s.Logger.error("MessageController: trasformJSONMessge: setSender", t)
                                        }
                                        try {
                                            e.setCallInitiator(e.getCallInitiator())
                                        } catch (t) {
                                            s.Logger.error("MessageController: trasformJSONMessge: setCallInitiator", t)
                                        }
                                        try {
                                            e.setReceiver(e.getCallReceiver()), e.setCallReceiver(e.getCallReceiver())
                                        } catch (t) {
                                            s.Logger.error("MessageController: trasformJSONMessge: setCallreceiver", t)
                                        }
                                    } else e instanceof d.CustomMessage && (e.getData()[a.MessageConstatnts.KEYS.METADATA] && e.setMetadata(e.getData()[a.MessageConstatnts.KEYS.METADATA]), e.setSubType(e.getData()[a.MessageConstatnts.KEYS.CUSTOM_SUB_TYPE]), e.setSender(e.getSender()), e.setReceiver(e.getReceiver()))
                                } catch (t) {
                                    s.Logger.error("MessageController: trasformJSONMessge: Main", t), e = null
                                }
                                return e
                            } catch (t) {
                                s.Logger.error("MessageController: trasformJSONMessge", t)
                            }
                        }, e.getReceiptsFromJSON = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    var r = [];
                                    f.CometChat.getLoggedInUser().then((function (n) {
                                        s.isFalsy(e.receipts) ? t([]) : (e.receipts.data.map((function (t) {
                                            var o = new l.MessageReceipt;
                                            t[a.DELIVERY_RECEIPTS.DELIVERED_AT] && (o.setReceiptType(o.RECEIPT_TYPE.DELIVERY_RECEIPT), o.setDeliveredAt(t[a.DELIVERY_RECEIPTS.DELIVERED_AT]), o.setTimestamp(t[a.DELIVERY_RECEIPTS.DELIVERED_AT]), s.isFalsy(t[a.DELIVERY_RECEIPTS.RECIPIENT]) ? o.setSender(n) : o.setSender(S.UsersController.trasformJSONUser(t[a.DELIVERY_RECEIPTS.RECIPIENT])), o.setReceiverType(e[a.MessageConstatnts.KEYS.RECEIVER_TYPE]), o.setReceiver(e[a.MessageConstatnts.KEYS.RECEIVER])), t[a.READ_RECEIPTS.READ_AT] && (o.setReceiptType(o.RECEIPT_TYPE.READ_RECEIPT), o.setReadAt(t[a.READ_RECEIPTS.READ_AT]), o.setTimestamp(t[t[a.READ_RECEIPTS.READ_AT]]), s.isFalsy(t[a.READ_RECEIPTS.RECIPIENT]) ? o.setSender(n) : o.setSender(S.UsersController.trasformJSONUser(t[a.READ_RECEIPTS.RECIPIENT])), o.setReceiverType(e[a.MessageConstatnts.KEYS.RECEIVER_TYPE]), o.setReceiver(e[a.MessageConstatnts.KEYS.RECEIVER])), r.push(o)
                                        })), t(r))
                                    }))
                                } catch (t) {
                                    n(new E.CometChatException(t))
                                }
                            }))
                        }, e
                    }();
                t.MessageController = h
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.UsersController = void 0;
                var r = n(4), o = n(0), i = function () {
                    function e() {
                    }

                    return e.trasformJSONUser = function (e) {
                        var t;
                        try {
                            e.uid = e.uid.toString(), e.name = e.name.toString(), e.status && "offline" !== e.status ? e.status = "online" : e.status = "offline", t = new r.User(e), Object.assign(t, e), e = t
                        } catch (e) {
                            o.Logger.error("UsersController:transformJSONUser", e)
                        }
                        return e
                    }, e
                }();
                t.UsersController = i
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.LocalStorage = void 0;
                var r = n(0), o = n(1), i = n(13), s = n(3), a = n(2), u = function () {
                    function e(e) {
                        this.store = o.constants.DEFAULT_STORE, r.isFalsy(e) || (this.store = e), this.localStore = i.createInstance({name: r.format(o.LOCAL_STORE.STORE_STRING, s.CometChat.getAppId(), o.LOCAL_STORE.COMMON_STORE)}), this.localStore.setDriver([i.LOCALSTORAGE, i.INDEXEDDB, i.WEBSQL])
                    }

                    return e.getInstance = function () {
                        return null == e.localStorage && (e.localStorage = new e), e.localStorage
                    }, e.prototype.set = function (e, t) {
                        return this.localStore.setItem(e, JSON.stringify(t))
                    }, e.prototype.remove = function (e) {
                        this.localStore.removeItem(e)
                    }, e.prototype.update = function (e, t) {
                        this.remove(e), this.set(e, t)
                    }, e.prototype.get = function (e) {
                        var t = this;
                        return new Promise((function (n, r) {
                            try {
                                t.localStore.getItem(e).then((function (e) {
                                    try {
                                        n(JSON.parse(e))
                                    } catch (t) {
                                        n(e)
                                    }
                                }), (function (e) {
                                    r(e)
                                }))
                            } catch (e) {
                                r(new a.CometChatException(e))
                            }
                        }))
                    }, e.prototype.clearStore = function () {
                        var e = this;
                        return new Promise((function (t, n) {
                            try {
                                e.localStore.keys().then((function (n) {
                                    if (0 < n.length) for (var r = 0; r < n.length; r++) "appId" !== n[r] && e.localStore.removeItem(n[r]), r === n.length - 1 && t(!0)
                                }))
                            } catch (e) {
                                n(e)
                            }
                        }))
                    }, e.prototype.clear = function (e) {
                    }, e.prototype.selectStore = function (e) {
                        this.store = e
                    }, e.localStorage = null, e
                }();
                t.LocalStorage = u
            }, function (e, t, n) {
                (function (t) {
                    e.exports = function e(t, n, r) {
                        function o(s, a) {
                            if (!n[s]) {
                                if (!t[s]) {
                                    if (i) return i(s, !0);
                                    var u = new Error("Cannot find module '" + s + "'");
                                    throw u.code = "MODULE_NOT_FOUND", u
                                }
                                var c = n[s] = {exports: {}};
                                t[s][0].call(c.exports, (function (e) {
                                    return o(t[s][1][e] || e)
                                }), c, c.exports, e, t, n, r)
                            }
                            return n[s].exports
                        }

                        for (var i = !1, s = 0; s < r.length; s++) o(r[s]);
                        return o
                    }({
                        1: [function (e, n, r) {
                            (function (e) {
                                "use strict";
                                var t, r, o = e.MutationObserver || e.WebKitMutationObserver;
                                if (o) {
                                    var i = 0, s = new o(l), a = e.document.createTextNode("");
                                    s.observe(a, {characterData: !0}), t = function () {
                                        a.data = i = ++i % 2
                                    }
                                } else if (e.setImmediate || void 0 === e.MessageChannel) t = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function () {
                                    var t = e.document.createElement("script");
                                    t.onreadystatechange = function () {
                                        l(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null
                                    }, e.document.documentElement.appendChild(t)
                                } : function () {
                                    setTimeout(l, 0)
                                }; else {
                                    var u = new e.MessageChannel;
                                    u.port1.onmessage = l, t = function () {
                                        u.port2.postMessage(0)
                                    }
                                }
                                var c = [];

                                function l() {
                                    var e, t;
                                    r = !0;
                                    for (var n = c.length; n;) {
                                        for (t = c, c = [], e = -1; ++e < n;) t[e]();
                                        n = c.length
                                    }
                                    r = !1
                                }

                                n.exports = function (e) {
                                    1 !== c.push(e) || r || t()
                                }
                            }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                        }, {}], 2: [function (e, t, n) {
                            "use strict";
                            var r = e(1);

                            function o() {
                            }

                            var i = {}, s = ["REJECTED"], a = ["FULFILLED"], u = ["PENDING"];

                            function c(e) {
                                if ("function" != typeof e) throw new TypeError("resolver must be a function");
                                this.state = u, this.queue = [], this.outcome = void 0, e !== o && d(this, e)
                            }

                            function l(e, t, n) {
                                this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected)
                            }

                            function E(e, t, n) {
                                r((function () {
                                    var r;
                                    try {
                                        r = t(n)
                                    } catch (r) {
                                        return i.reject(e, r)
                                    }
                                    r === e ? i.reject(e, new TypeError("Cannot resolve promise with itself")) : i.resolve(e, r)
                                }))
                            }

                            function p(e) {
                                var t = e && e.then;
                                if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function () {
                                    t.apply(e, arguments)
                                }
                            }

                            function d(e, t) {
                                var n = !1;

                                function r(t) {
                                    n || (n = !0, i.reject(e, t))
                                }

                                function o(t) {
                                    n || (n = !0, i.resolve(e, t))
                                }

                                var s = f((function () {
                                    t(o, r)
                                }));
                                "error" === s.status && r(s.value)
                            }

                            function f(e, t) {
                                var n = {};
                                try {
                                    n.value = e(t), n.status = "success"
                                } catch (e) {
                                    n.status = "error", n.value = e
                                }
                                return n
                            }

                            (t.exports = c).prototype.catch = function (e) {
                                return this.then(null, e)
                            }, c.prototype.then = function (e, t) {
                                if ("function" != typeof e && this.state === a || "function" != typeof t && this.state === s) return this;
                                var n = new this.constructor(o);
                                return this.state !== u ? E(n, this.state === a ? e : t, this.outcome) : this.queue.push(new l(n, e, t)), n
                            }, l.prototype.callFulfilled = function (e) {
                                i.resolve(this.promise, e)
                            }, l.prototype.otherCallFulfilled = function (e) {
                                E(this.promise, this.onFulfilled, e)
                            }, l.prototype.callRejected = function (e) {
                                i.reject(this.promise, e)
                            }, l.prototype.otherCallRejected = function (e) {
                                E(this.promise, this.onRejected, e)
                            }, i.resolve = function (e, t) {
                                var n = f(p, t);
                                if ("error" === n.status) return i.reject(e, n.value);
                                var r = n.value;
                                if (r) d(e, r); else {
                                    e.state = a, e.outcome = t;
                                    for (var o = -1, s = e.queue.length; ++o < s;) e.queue[o].callFulfilled(t)
                                }
                                return e
                            }, i.reject = function (e, t) {
                                e.state = s, e.outcome = t;
                                for (var n = -1, r = e.queue.length; ++n < r;) e.queue[n].callRejected(t);
                                return e
                            }, c.resolve = function (e) {
                                return e instanceof this ? e : i.resolve(new this(o), e)
                            }, c.reject = function (e) {
                                var t = new this(o);
                                return i.reject(t, e)
                            }, c.all = function (e) {
                                var t = this;
                                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                                var n = e.length, r = !1;
                                if (!n) return this.resolve([]);
                                for (var s = new Array(n), a = 0, u = -1, c = new this(o); ++u < n;) l(e[u], u);
                                return c;

                                function l(e, o) {
                                    t.resolve(e).then((function (e) {
                                        s[o] = e, ++a !== n || r || (r = !0, i.resolve(c, s))
                                    }), (function (e) {
                                        r || (r = !0, i.reject(c, e))
                                    }))
                                }
                            }, c.race = function (e) {
                                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                                var t = e.length, n = !1;
                                if (!t) return this.resolve([]);
                                for (var r, s = -1, a = new this(o); ++s < t;) r = e[s], this.resolve(r).then((function (e) {
                                    n || (n = !0, i.resolve(a, e))
                                }), (function (e) {
                                    n || (n = !0, i.reject(a, e))
                                }));
                                return a
                            }
                        }, {1: 1}], 3: [function (e, n, r) {
                            (function (t) {
                                "use strict";
                                "function" != typeof t.Promise && (t.Promise = e(2))
                            }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                        }, {2: 2}], 4: [function (e, t, n) {
                            "use strict";
                            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                                return typeof e
                            } : function (e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }, o = function () {
                                try {
                                    if ("undefined" != typeof indexedDB) return indexedDB;
                                    if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
                                    if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                                    if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                                    if ("undefined" != typeof msIndexedDB) return msIndexedDB
                                } catch (e) {
                                    return
                                }
                            }();

                            function i(e, t) {
                                e = e || [], t = t || {};
                                try {
                                    return new Blob(e, t)
                                } catch (o) {
                                    if ("TypeError" !== o.name) throw o;
                                    for (var n = new ("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), r = 0; r < e.length; r += 1) n.append(e[r]);
                                    return n.getBlob(t.type)
                                }
                            }

                            "undefined" == typeof Promise && e(3);
                            var s = Promise;

                            function a(e, t) {
                                t && e.then((function (e) {
                                    t(null, e)
                                }), (function (e) {
                                    t(e)
                                }))
                            }

                            function u(e, t, n) {
                                "function" == typeof t && e.then(t), "function" == typeof n && e.catch(n)
                            }

                            function c(e) {
                                return "string" != typeof e && (e = String(e)), e
                            }

                            function l() {
                                if (arguments.length && "function" == typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1]
                            }

                            var E = "local-forage-detect-blob-support", p = void 0, d = {},
                                f = Object.prototype.toString, S = "readonly", h = "readwrite";

                            function g(e) {
                                return "boolean" == typeof p ? s.resolve(p) : (t = e, new s((function (e) {
                                    var n = t.transaction(E, h), r = i([""]);
                                    n.objectStore(E).put(r, "key"), n.onabort = function (t) {
                                        t.preventDefault(), t.stopPropagation(), e(!1)
                                    }, n.oncomplete = function () {
                                        var t = navigator.userAgent.match(/Chrome\/(\d+)/),
                                            n = navigator.userAgent.match(/Edge\//);
                                        e(n || !t || 43 <= parseInt(t[1], 10))
                                    }
                                })).catch((function () {
                                    return !1
                                }))).then((function (e) {
                                    return p = e
                                }));
                                var t
                            }

                            function C(e) {
                                var t = d[e.name], n = {};
                                n.promise = new s((function (e, t) {
                                    n.resolve = e, n.reject = t
                                })), t.deferredOperations.push(n), t.dbReady ? t.dbReady = t.dbReady.then((function () {
                                    return n.promise
                                })) : t.dbReady = n.promise
                            }

                            function T(e) {
                                var t = d[e.name].deferredOperations.pop();
                                if (t) return t.resolve(), t.promise
                            }

                            function _(e, t) {
                                var n = d[e.name].deferredOperations.pop();
                                if (n) return n.reject(t), n.promise
                            }

                            function A(e, t) {
                                return new s((function (n, r) {
                                    if (d[e.name] = d[e.name] || {
                                        forages: [],
                                        db: null,
                                        dbReady: null,
                                        deferredOperations: []
                                    }, e.db) {
                                        if (!t) return n(e.db);
                                        C(e), e.db.close()
                                    }
                                    var i = [e.name];
                                    t && i.push(e.version);
                                    var s = o.open.apply(o, i);
                                    t && (s.onupgradeneeded = function (t) {
                                        var n = s.result;
                                        try {
                                            n.createObjectStore(e.storeName), t.oldVersion <= 1 && n.createObjectStore(E)
                                        } catch (t) {
                                            if ("ConstraintError" !== t.name) throw t
                                        }
                                    }), s.onerror = function (e) {
                                        e.preventDefault(), r(s.error)
                                    }, s.onsuccess = function () {
                                        n(s.result), T(e)
                                    }
                                }))
                            }

                            function I(e) {
                                return A(e, !1)
                            }

                            function R(e) {
                                return A(e, !0)
                            }

                            function y(e, t) {
                                if (!e.db) return !0;
                                var n = !e.db.objectStoreNames.contains(e.storeName), r = e.version < e.db.version,
                                    o = e.version > e.db.version;
                                if (r && (e.version, e.version = e.db.version), o || n) {
                                    if (n) {
                                        var i = e.db.version + 1;
                                        i > e.version && (e.version = i)
                                    }
                                    return !0
                                }
                                return !1
                            }

                            function m(e) {
                                return i([function (e) {
                                    for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = 0; o < t; o++) r[o] = e.charCodeAt(o);
                                    return n
                                }(atob(e.data))], {type: e.type})
                            }

                            function O(e) {
                                return e && e.__local_forage_encoded_blob
                            }

                            function v(e) {
                                var t = this, n = t._initReady().then((function () {
                                    var e = d[t._dbInfo.name];
                                    if (e && e.dbReady) return e.dbReady
                                }));
                                return u(n, e, e), n
                            }

                            function N(e, t, n, r) {
                                void 0 === r && (r = 1);
                                try {
                                    var o = e.db.transaction(e.storeName, t);
                                    n(null, o)
                                } catch (o) {
                                    if (0 < r && (!e.db || "InvalidStateError" === o.name || "NotFoundError" === o.name)) return s.resolve().then((function () {
                                        if (!e.db || "NotFoundError" === o.name && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), R(e)
                                    })).then((function () {
                                        return function (e) {
                                            C(e);
                                            for (var t = d[e.name], n = t.forages, r = 0; r < n.length; r++) {
                                                var o = n[r];
                                                o._dbInfo.db && (o._dbInfo.db.close(), o._dbInfo.db = null)
                                            }
                                            return e.db = null, I(e).then((function (t) {
                                                return e.db = t, y(e) ? R(e) : t
                                            })).then((function (r) {
                                                e.db = t.db = r;
                                                for (var o = 0; o < n.length; o++) n[o]._dbInfo.db = r
                                            })).catch((function (t) {
                                                throw _(e, t), t
                                            }))
                                        }(e).then((function () {
                                            N(e, t, n, r - 1)
                                        }))
                                    })).catch(n);
                                    n(o)
                                }
                            }

                            var L = {
                                    _driver: "asyncStorage", _initStorage: function (e) {
                                        var t = this, n = {db: null};
                                        if (e) for (var r in e) n[r] = e[r];
                                        var o = d[n.name];
                                        o || (o = {
                                            forages: [],
                                            db: null,
                                            dbReady: null,
                                            deferredOperations: []
                                        }, d[n.name] = o), o.forages.push(t), t._initReady || (t._initReady = t.ready, t.ready = v);
                                        var i = [];

                                        function a() {
                                            return s.resolve()
                                        }

                                        for (var u = 0; u < o.forages.length; u++) {
                                            var c = o.forages[u];
                                            c !== t && i.push(c._initReady().catch(a))
                                        }
                                        var l = o.forages.slice(0);
                                        return s.all(i).then((function () {
                                            return n.db = o.db, I(n)
                                        })).then((function (e) {
                                            return n.db = e, y(n, t._defaultConfig.version) ? R(n) : e
                                        })).then((function (e) {
                                            n.db = o.db = e, t._dbInfo = n;
                                            for (var r = 0; r < l.length; r++) {
                                                var i = l[r];
                                                i !== t && (i._dbInfo.db = n.db, i._dbInfo.version = n.version)
                                            }
                                        }))
                                    }, _support: function () {
                                        try {
                                            if (!o) return !1;
                                            var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                                                t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                                            return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                                        } catch (e) {
                                            return !1
                                        }
                                    }(), iterate: function (e, t) {
                                        var n = this, r = new s((function (t, r) {
                                            n.ready().then((function () {
                                                N(n._dbInfo, S, (function (o, i) {
                                                    if (o) return r(o);
                                                    try {
                                                        var s = i.objectStore(n._dbInfo.storeName).openCursor(), a = 1;
                                                        s.onsuccess = function () {
                                                            var n = s.result;
                                                            if (n) {
                                                                var r = n.value;
                                                                O(r) && (r = m(r));
                                                                var o = e(r, n.key, a++);
                                                                void 0 !== o ? t(o) : n.continue()
                                                            } else t()
                                                        }, s.onerror = function () {
                                                            r(s.error)
                                                        }
                                                    } catch (o) {
                                                        r(o)
                                                    }
                                                }))
                                            })).catch(r)
                                        }));
                                        return a(r, t), r
                                    }, getItem: function (e, t) {
                                        var n = this;
                                        e = c(e);
                                        var r = new s((function (t, r) {
                                            n.ready().then((function () {
                                                N(n._dbInfo, S, (function (o, i) {
                                                    if (o) return r(o);
                                                    try {
                                                        var s = i.objectStore(n._dbInfo.storeName).get(e);
                                                        s.onsuccess = function () {
                                                            var e = s.result;
                                                            void 0 === e && (e = null), O(e) && (e = m(e)), t(e)
                                                        }, s.onerror = function () {
                                                            r(s.error)
                                                        }
                                                    } catch (o) {
                                                        r(o)
                                                    }
                                                }))
                                            })).catch(r)
                                        }));
                                        return a(r, t), r
                                    }, setItem: function (e, t, n) {
                                        var r = this;
                                        e = c(e);
                                        var o = new s((function (n, o) {
                                            var i;
                                            r.ready().then((function () {
                                                return i = r._dbInfo, "[object Blob]" === f.call(t) ? g(i.db).then((function (e) {
                                                    return e ? t : (n = t, new s((function (e, t) {
                                                        var r = new FileReader;
                                                        r.onerror = t, r.onloadend = function (t) {
                                                            var r = btoa(t.target.result || "");
                                                            e({__local_forage_encoded_blob: !0, data: r, type: n.type})
                                                        }, r.readAsBinaryString(n)
                                                    })));
                                                    var n
                                                })) : t
                                            })).then((function (t) {
                                                N(r._dbInfo, h, (function (i, s) {
                                                    if (i) return o(i);
                                                    try {
                                                        var a = s.objectStore(r._dbInfo.storeName);
                                                        null === t && (t = void 0);
                                                        var u = a.put(t, e);
                                                        s.oncomplete = function () {
                                                            void 0 === t && (t = null), n(t)
                                                        }, s.onabort = s.onerror = function () {
                                                            var e = u.error ? u.error : u.transaction.error;
                                                            o(e)
                                                        }
                                                    } catch (i) {
                                                        o(i)
                                                    }
                                                }))
                                            })).catch(o)
                                        }));
                                        return a(o, n), o
                                    }, removeItem: function (e, t) {
                                        var n = this;
                                        e = c(e);
                                        var r = new s((function (t, r) {
                                            n.ready().then((function () {
                                                N(n._dbInfo, h, (function (o, i) {
                                                    if (o) return r(o);
                                                    try {
                                                        var s = i.objectStore(n._dbInfo.storeName).delete(e);
                                                        i.oncomplete = function () {
                                                            t()
                                                        }, i.onerror = function () {
                                                            r(s.error)
                                                        }, i.onabort = function () {
                                                            var e = s.error ? s.error : s.transaction.error;
                                                            r(e)
                                                        }
                                                    } catch (o) {
                                                        r(o)
                                                    }
                                                }))
                                            })).catch(r)
                                        }));
                                        return a(r, t), r
                                    }, clear: function (e) {
                                        var t = this, n = new s((function (e, n) {
                                            t.ready().then((function () {
                                                N(t._dbInfo, h, (function (r, o) {
                                                    if (r) return n(r);
                                                    try {
                                                        var i = o.objectStore(t._dbInfo.storeName).clear();
                                                        o.oncomplete = function () {
                                                            e()
                                                        }, o.onabort = o.onerror = function () {
                                                            var e = i.error ? i.error : i.transaction.error;
                                                            n(e)
                                                        }
                                                    } catch (r) {
                                                        n(r)
                                                    }
                                                }))
                                            })).catch(n)
                                        }));
                                        return a(n, e), n
                                    }, length: function (e) {
                                        var t = this, n = new s((function (e, n) {
                                            t.ready().then((function () {
                                                N(t._dbInfo, S, (function (r, o) {
                                                    if (r) return n(r);
                                                    try {
                                                        var i = o.objectStore(t._dbInfo.storeName).count();
                                                        i.onsuccess = function () {
                                                            e(i.result)
                                                        }, i.onerror = function () {
                                                            n(i.error)
                                                        }
                                                    } catch (r) {
                                                        n(r)
                                                    }
                                                }))
                                            })).catch(n)
                                        }));
                                        return a(n, e), n
                                    }, key: function (e, t) {
                                        var n = this, r = new s((function (t, r) {
                                            e < 0 ? t(null) : n.ready().then((function () {
                                                N(n._dbInfo, S, (function (o, i) {
                                                    if (o) return r(o);
                                                    try {
                                                        var s = i.objectStore(n._dbInfo.storeName), a = !1,
                                                            u = s.openCursor();
                                                        u.onsuccess = function () {
                                                            var n = u.result;
                                                            n ? 0 === e || a ? t(n.key) : (a = !0, n.advance(e)) : t(null)
                                                        }, u.onerror = function () {
                                                            r(u.error)
                                                        }
                                                    } catch (o) {
                                                        r(o)
                                                    }
                                                }))
                                            })).catch(r)
                                        }));
                                        return a(r, t), r
                                    }, keys: function (e) {
                                        var t = this, n = new s((function (e, n) {
                                            t.ready().then((function () {
                                                N(t._dbInfo, S, (function (r, o) {
                                                    if (r) return n(r);
                                                    try {
                                                        var i = o.objectStore(t._dbInfo.storeName).openCursor(), s = [];
                                                        i.onsuccess = function () {
                                                            var t = i.result;
                                                            t ? (s.push(t.key), t.continue()) : e(s)
                                                        }, i.onerror = function () {
                                                            n(i.error)
                                                        }
                                                    } catch (r) {
                                                        n(r)
                                                    }
                                                }))
                                            })).catch(n)
                                        }));
                                        return a(n, e), n
                                    }, dropInstance: function (e, t) {
                                        t = l.apply(this, arguments);
                                        var n, r = this.config();
                                        if ((e = "function" != typeof e && e || {}).name || (e.name = e.name || r.name, e.storeName = e.storeName || r.storeName), e.name) {
                                            var i = e.name === r.name && this._dbInfo.db ? s.resolve(this._dbInfo.db) : I(e).then((function (t) {
                                                var n = d[e.name], r = n.forages;
                                                n.db = t;
                                                for (var o = 0; o < r.length; o++) r[o]._dbInfo.db = t;
                                                return t
                                            }));
                                            n = e.storeName ? i.then((function (t) {
                                                if (t.objectStoreNames.contains(e.storeName)) {
                                                    var n = t.version + 1;
                                                    C(e);
                                                    var r = d[e.name], i = r.forages;
                                                    t.close();
                                                    for (var a = 0; a < i.length; a++) {
                                                        var u = i[a];
                                                        u._dbInfo.db = null, u._dbInfo.version = n
                                                    }
                                                    return new s((function (t, r) {
                                                        var i = o.open(e.name, n);
                                                        i.onerror = function (e) {
                                                            i.result.close(), r(e)
                                                        }, i.onupgradeneeded = function () {
                                                            i.result.deleteObjectStore(e.storeName)
                                                        }, i.onsuccess = function () {
                                                            var e = i.result;
                                                            e.close(), t(e)
                                                        }
                                                    })).then((function (e) {
                                                        r.db = e;
                                                        for (var t = 0; t < i.length; t++) {
                                                            var n = i[t];
                                                            n._dbInfo.db = e, T(n._dbInfo)
                                                        }
                                                    })).catch((function (t) {
                                                        throw(_(e, t) || s.resolve()).catch((function () {
                                                        })), t
                                                    }))
                                                }
                                            })) : i.then((function (t) {
                                                C(e);
                                                var n = d[e.name], r = n.forages;
                                                t.close();
                                                for (var i = 0; i < r.length; i++) r[i]._dbInfo.db = null;
                                                return new s((function (t, n) {
                                                    var r = o.deleteDatabase(e.name);
                                                    r.onerror = r.onblocked = function (e) {
                                                        var t = r.result;
                                                        t && t.close(), n(e)
                                                    }, r.onsuccess = function () {
                                                        var e = r.result;
                                                        e && e.close(), t(e)
                                                    }
                                                })).then((function (e) {
                                                    n.db = e;
                                                    for (var t = 0; t < r.length; t++) T(r[t]._dbInfo)
                                                })).catch((function (t) {
                                                    throw(_(e, t) || s.resolve()).catch((function () {
                                                    })), t
                                                }))
                                            }))
                                        } else n = s.reject("Invalid arguments");
                                        return a(n, t), n
                                    }
                                }, P = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                M = /^~~local_forage_type~([^~]+)~/, w = "__lfsc__:", D = w.length, U = "arbf",
                                b = "blob", Y = D + U.length, G = Object.prototype.toString;

                            function k(e) {
                                var t, n, r, o, i, s = .75 * e.length, a = e.length, u = 0;
                                "=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
                                var c = new ArrayBuffer(s), l = new Uint8Array(c);
                                for (t = 0; t < a; t += 4) n = P.indexOf(e[t]), r = P.indexOf(e[t + 1]), o = P.indexOf(e[t + 2]), i = P.indexOf(e[t + 3]), l[u++] = n << 2 | r >> 4, l[u++] = (15 & r) << 4 | o >> 2, l[u++] = (3 & o) << 6 | 63 & i;
                                return c
                            }

                            function x(e) {
                                var t, n = new Uint8Array(e), r = "";
                                for (t = 0; t < n.length; t += 3) r += P[n[t] >> 2], r += P[(3 & n[t]) << 4 | n[t + 1] >> 4], r += P[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], r += P[63 & n[t + 2]];
                                return n.length % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : n.length % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
                            }

                            var K = {
                                serialize: function (e, t) {
                                    var n = "";
                                    if (e && (n = G.call(e)), e && ("[object ArrayBuffer]" === n || e.buffer && "[object ArrayBuffer]" === G.call(e.buffer))) {
                                        var r, o = w;
                                        e instanceof ArrayBuffer ? (r = e, o += U) : (r = e.buffer, "[object Int8Array]" === n ? o += "si08" : "[object Uint8Array]" === n ? o += "ui08" : "[object Uint8ClampedArray]" === n ? o += "uic8" : "[object Int16Array]" === n ? o += "si16" : "[object Uint16Array]" === n ? o += "ur16" : "[object Int32Array]" === n ? o += "si32" : "[object Uint32Array]" === n ? o += "ui32" : "[object Float32Array]" === n ? o += "fl32" : "[object Float64Array]" === n ? o += "fl64" : t(new Error("Failed to get type for BinaryArray"))), t(o + x(r))
                                    } else if ("[object Blob]" === n) {
                                        var i = new FileReader;
                                        i.onload = function () {
                                            var n = "~~local_forage_type~" + e.type + "~" + x(this.result);
                                            t(w + b + n)
                                        }, i.readAsArrayBuffer(e)
                                    } else try {
                                        t(JSON.stringify(e))
                                    } catch (n) {
                                        t(null, n)
                                    }
                                }, deserialize: function (e) {
                                    if (e.substring(0, D) !== w) return JSON.parse(e);
                                    var t, n = e.substring(Y), r = e.substring(D, Y);
                                    if (r === b && M.test(n)) {
                                        var o = n.match(M);
                                        t = o[1], n = n.substring(o[0].length)
                                    }
                                    var s = k(n);
                                    switch (r) {
                                        case U:
                                            return s;
                                        case b:
                                            return i([s], {type: t});
                                        case"si08":
                                            return new Int8Array(s);
                                        case"ui08":
                                            return new Uint8Array(s);
                                        case"uic8":
                                            return new Uint8ClampedArray(s);
                                        case"si16":
                                            return new Int16Array(s);
                                        case"ur16":
                                            return new Uint16Array(s);
                                        case"si32":
                                            return new Int32Array(s);
                                        case"ui32":
                                            return new Uint32Array(s);
                                        case"fl32":
                                            return new Float32Array(s);
                                        case"fl64":
                                            return new Float64Array(s);
                                        default:
                                            throw new Error("Unkown type: " + r)
                                    }
                                }, stringToBuffer: k, bufferToString: x
                            };

                            function F(e, t, n, r) {
                                e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r)
                            }

                            function B(e, t, n, r, o, i) {
                                e.executeSql(n, r, o, (function (e, s) {
                                    s.code === s.SYNTAX_ERR ? e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], (function (e, a) {
                                        a.rows.length ? i(e, s) : F(e, t, (function () {
                                            e.executeSql(n, r, o, i)
                                        }), i)
                                    }), i) : i(e, s)
                                }), i)
                            }

                            function V(e, t, n, r) {
                                var o = this;
                                e = c(e);
                                var i = new s((function (i, s) {
                                    o.ready().then((function () {
                                        void 0 === t && (t = null);
                                        var a = t, u = o._dbInfo;
                                        u.serializer.serialize(t, (function (t, c) {
                                            c ? s(c) : u.db.transaction((function (n) {
                                                B(n, u, "INSERT OR REPLACE INTO " + u.storeName + " (key, value) VALUES (?, ?)", [e, t], (function () {
                                                    i(a)
                                                }), (function (e, t) {
                                                    s(t)
                                                }))
                                            }), (function (t) {
                                                if (t.code === t.QUOTA_ERR) {
                                                    if (0 < r) return void i(V.apply(o, [e, a, n, r - 1]));
                                                    s(t)
                                                }
                                            }))
                                        }))
                                    })).catch(s)
                                }));
                                return a(i, n), i
                            }

                            var H = {
                                _driver: "webSQLStorage", _initStorage: function (e) {
                                    var t = this, n = {db: null};
                                    if (e) for (var r in e) n[r] = "string" != typeof e[r] ? e[r].toString() : e[r];
                                    var o = new s((function (e, r) {
                                        try {
                                            n.db = openDatabase(n.name, String(n.version), n.description, n.size)
                                        } catch (e) {
                                            return r(e)
                                        }
                                        n.db.transaction((function (o) {
                                            F(o, n, (function () {
                                                t._dbInfo = n, e()
                                            }), (function (e, t) {
                                                r(t)
                                            }))
                                        }), r)
                                    }));
                                    return n.serializer = K, o
                                }, _support: "function" == typeof openDatabase, iterate: function (e, t) {
                                    var n = this, r = new s((function (t, r) {
                                        n.ready().then((function () {
                                            var o = n._dbInfo;
                                            o.db.transaction((function (n) {
                                                B(n, o, "SELECT * FROM " + o.storeName, [], (function (n, r) {
                                                    for (var i = r.rows, s = i.length, a = 0; a < s; a++) {
                                                        var u = i.item(a), c = u.value;
                                                        if (c && (c = o.serializer.deserialize(c)), void 0 !== (c = e(c, u.key, a + 1))) return void t(c)
                                                    }
                                                    t()
                                                }), (function (e, t) {
                                                    r(t)
                                                }))
                                            }))
                                        })).catch(r)
                                    }));
                                    return a(r, t), r
                                }, getItem: function (e, t) {
                                    var n = this;
                                    e = c(e);
                                    var r = new s((function (t, r) {
                                        n.ready().then((function () {
                                            var o = n._dbInfo;
                                            o.db.transaction((function (n) {
                                                B(n, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], (function (e, n) {
                                                    var r = n.rows.length ? n.rows.item(0).value : null;
                                                    r && (r = o.serializer.deserialize(r)), t(r)
                                                }), (function (e, t) {
                                                    r(t)
                                                }))
                                            }))
                                        })).catch(r)
                                    }));
                                    return a(r, t), r
                                }, setItem: function (e, t, n) {
                                    return V.apply(this, [e, t, n, 1])
                                }, removeItem: function (e, t) {
                                    var n = this;
                                    e = c(e);
                                    var r = new s((function (t, r) {
                                        n.ready().then((function () {
                                            var o = n._dbInfo;
                                            o.db.transaction((function (n) {
                                                B(n, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [e], (function () {
                                                    t()
                                                }), (function (e, t) {
                                                    r(t)
                                                }))
                                            }))
                                        })).catch(r)
                                    }));
                                    return a(r, t), r
                                }, clear: function (e) {
                                    var t = this, n = new s((function (e, n) {
                                        t.ready().then((function () {
                                            var r = t._dbInfo;
                                            r.db.transaction((function (t) {
                                                B(t, r, "DELETE FROM " + r.storeName, [], (function () {
                                                    e()
                                                }), (function (e, t) {
                                                    n(t)
                                                }))
                                            }))
                                        })).catch(n)
                                    }));
                                    return a(n, e), n
                                }, length: function (e) {
                                    var t = this, n = new s((function (e, n) {
                                        t.ready().then((function () {
                                            var r = t._dbInfo;
                                            r.db.transaction((function (t) {
                                                B(t, r, "SELECT COUNT(key) as c FROM " + r.storeName, [], (function (t, n) {
                                                    var r = n.rows.item(0).c;
                                                    e(r)
                                                }), (function (e, t) {
                                                    n(t)
                                                }))
                                            }))
                                        })).catch(n)
                                    }));
                                    return a(n, e), n
                                }, key: function (e, t) {
                                    var n = this, r = new s((function (t, r) {
                                        n.ready().then((function () {
                                            var o = n._dbInfo;
                                            o.db.transaction((function (n) {
                                                B(n, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], (function (e, n) {
                                                    var r = n.rows.length ? n.rows.item(0).key : null;
                                                    t(r)
                                                }), (function (e, t) {
                                                    r(t)
                                                }))
                                            }))
                                        })).catch(r)
                                    }));
                                    return a(r, t), r
                                }, keys: function (e) {
                                    var t = this, n = new s((function (e, n) {
                                        t.ready().then((function () {
                                            var r = t._dbInfo;
                                            r.db.transaction((function (t) {
                                                B(t, r, "SELECT key FROM " + r.storeName, [], (function (t, n) {
                                                    for (var r = [], o = 0; o < n.rows.length; o++) r.push(n.rows.item(o).key);
                                                    e(r)
                                                }), (function (e, t) {
                                                    n(t)
                                                }))
                                            }))
                                        })).catch(n)
                                    }));
                                    return a(n, e), n
                                }, dropInstance: function (e, t) {
                                    t = l.apply(this, arguments);
                                    var n = this.config();
                                    (e = "function" != typeof e && e || {}).name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
                                    var r, o = this;
                                    return a(r = e.name ? new s((function (t) {
                                        var r, i;
                                        r = e.name === n.name ? o._dbInfo.db : openDatabase(e.name, "", "", 0), e.storeName ? t({
                                            db: r,
                                            storeNames: [e.storeName]
                                        }) : t((i = r, new s((function (e, t) {
                                            i.transaction((function (n) {
                                                n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], (function (t, n) {
                                                    for (var r = [], o = 0; o < n.rows.length; o++) r.push(n.rows.item(o).name);
                                                    e({db: i, storeNames: r})
                                                }), (function (e, n) {
                                                    t(n)
                                                }))
                                            }), (function (e) {
                                                t(e)
                                            }))
                                        }))))
                                    })).then((function (e) {
                                        return new s((function (t, n) {
                                            e.db.transaction((function (r) {
                                                function o(e) {
                                                    return new s((function (t, n) {
                                                        r.executeSql("DROP TABLE IF EXISTS " + e, [], (function () {
                                                            t()
                                                        }), (function (e, t) {
                                                            n(t)
                                                        }))
                                                    }))
                                                }

                                                for (var i = [], a = 0, u = e.storeNames.length; a < u; a++) i.push(o(e.storeNames[a]));
                                                s.all(i).then((function () {
                                                    t()
                                                })).catch((function (e) {
                                                    n(e)
                                                }))
                                            }), (function (e) {
                                                n(e)
                                            }))
                                        }))
                                    })) : s.reject("Invalid arguments"), t), r
                                }
                            };

                            function J(e, t) {
                                var n = e.name + "/";
                                return e.storeName !== t.storeName && (n += e.storeName + "/"), n
                            }

                            var j = {
                                    _driver: "localStorageWrapper", _initStorage: function (e) {
                                        var t = {};
                                        if (e) for (var n in e) t[n] = e[n];
                                        return t.keyPrefix = J(e, this._defaultConfig), !function () {
                                            var e = "_localforage_support_test";
                                            try {
                                                return localStorage.setItem(e, !0), localStorage.removeItem(e), !1
                                            } catch (e) {
                                                return !0
                                            }
                                        }() || 0 < localStorage.length ? ((this._dbInfo = t).serializer = K, s.resolve()) : s.reject()
                                    }, _support: function () {
                                        try {
                                            return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
                                        } catch (e) {
                                            return !1
                                        }
                                    }(), iterate: function (e, t) {
                                        var n = this, r = n.ready().then((function () {
                                            for (var t = n._dbInfo, r = t.keyPrefix, o = r.length, i = localStorage.length, s = 1, a = 0; a < i; a++) {
                                                var u = localStorage.key(a);
                                                if (0 === u.indexOf(r)) {
                                                    var c = localStorage.getItem(u);
                                                    if (c && (c = t.serializer.deserialize(c)), void 0 !== (c = e(c, u.substring(o), s++))) return c
                                                }
                                            }
                                        }));
                                        return a(r, t), r
                                    }, getItem: function (e, t) {
                                        var n = this;
                                        e = c(e);
                                        var r = n.ready().then((function () {
                                            var t = n._dbInfo, r = localStorage.getItem(t.keyPrefix + e);
                                            return r && (r = t.serializer.deserialize(r)), r
                                        }));
                                        return a(r, t), r
                                    }, setItem: function (e, t, n) {
                                        var r = this;
                                        e = c(e);
                                        var o = r.ready().then((function () {
                                            void 0 === t && (t = null);
                                            var n = t;
                                            return new s((function (o, i) {
                                                var s = r._dbInfo;
                                                s.serializer.serialize(t, (function (t, r) {
                                                    if (r) i(r); else try {
                                                        localStorage.setItem(s.keyPrefix + e, t), o(n)
                                                    } catch (t) {
                                                        "QuotaExceededError" !== t.name && "NS_ERROR_DOM_QUOTA_REACHED" !== t.name || i(t), i(t)
                                                    }
                                                }))
                                            }))
                                        }));
                                        return a(o, n), o
                                    }, removeItem: function (e, t) {
                                        var n = this;
                                        e = c(e);
                                        var r = n.ready().then((function () {
                                            var t = n._dbInfo;
                                            localStorage.removeItem(t.keyPrefix + e)
                                        }));
                                        return a(r, t), r
                                    }, clear: function (e) {
                                        var t = this, n = t.ready().then((function () {
                                            for (var e = t._dbInfo.keyPrefix, n = localStorage.length - 1; 0 <= n; n--) {
                                                var r = localStorage.key(n);
                                                0 === r.indexOf(e) && localStorage.removeItem(r)
                                            }
                                        }));
                                        return a(n, e), n
                                    }, length: function (e) {
                                        var t = this.keys().then((function (e) {
                                            return e.length
                                        }));
                                        return a(t, e), t
                                    }, key: function (e, t) {
                                        var n = this, r = n.ready().then((function () {
                                            var t, r = n._dbInfo;
                                            try {
                                                t = localStorage.key(e)
                                            } catch (r) {
                                                t = null
                                            }
                                            return t && (t = t.substring(r.keyPrefix.length)), t
                                        }));
                                        return a(r, t), r
                                    }, keys: function (e) {
                                        var t = this, n = t.ready().then((function () {
                                            for (var e = t._dbInfo, n = localStorage.length, r = [], o = 0; o < n; o++) {
                                                var i = localStorage.key(o);
                                                0 === i.indexOf(e.keyPrefix) && r.push(i.substring(e.keyPrefix.length))
                                            }
                                            return r
                                        }));
                                        return a(n, e), n
                                    }, dropInstance: function (e, t) {
                                        if (t = l.apply(this, arguments), !(e = "function" != typeof e && e || {}).name) {
                                            var n = this.config();
                                            e.name = e.name || n.name, e.storeName = e.storeName || n.storeName
                                        }
                                        var r, o = this;
                                        return a(r = e.name ? new s((function (t) {
                                            e.storeName ? t(J(e, o._defaultConfig)) : t(e.name + "/")
                                        })).then((function (e) {
                                            for (var t = localStorage.length - 1; 0 <= t; t--) {
                                                var n = localStorage.key(t);
                                                0 === n.indexOf(e) && localStorage.removeItem(n)
                                            }
                                        })) : s.reject("Invalid arguments"), t), r
                                    }
                                }, W = function (e, t) {
                                    for (var n = e.length, r = 0; r < n;) {
                                        if ((o = e[r]) === (i = t) || "number" == typeof o && "number" == typeof i && isNaN(o) && isNaN(i)) return !0;
                                        r++
                                    }
                                    var o, i;
                                    return !1
                                }, z = Array.isArray || function (e) {
                                    return "[object Array]" === Object.prototype.toString.call(e)
                                }, q = {}, X = {}, Q = {INDEXEDDB: L, WEBSQL: H, LOCALSTORAGE: j},
                                $ = [Q.INDEXEDDB._driver, Q.WEBSQL._driver, Q.LOCALSTORAGE._driver],
                                Z = ["dropInstance"],
                                ee = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Z),
                                te = {
                                    description: "",
                                    driver: $.slice(),
                                    name: "localforage",
                                    size: 4980736,
                                    storeName: "keyvaluepairs",
                                    version: 1
                                };

                            function ne(e, t) {
                                e[t] = function () {
                                    var n = arguments;
                                    return e.ready().then((function () {
                                        return e[t].apply(e, n)
                                    }))
                                }
                            }

                            function re() {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    if (t) for (var n in t) t.hasOwnProperty(n) && (z(t[n]) ? arguments[0][n] = t[n].slice() : arguments[0][n] = t[n])
                                }
                                return arguments[0]
                            }

                            var oe = new (function () {
                                function e(t) {
                                    for (var n in function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e), Q) if (Q.hasOwnProperty(n)) {
                                        var r = Q[n], o = r._driver;
                                        this[n] = o, q[o] || this.defineDriver(r)
                                    }
                                    this._defaultConfig = re({}, te), this._config = re({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch((function () {
                                    }))
                                }

                                return e.prototype.config = function (e) {
                                    if ("object" !== (void 0 === e ? "undefined" : r(e))) return "string" == typeof e ? this._config[e] : this._config;
                                    if (this._ready) return new Error("Can't call config() after localforage has been used.");
                                    for (var t in e) {
                                        if ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")), "version" === t && "number" != typeof e[t]) return new Error("Database version must be a number.");
                                        this._config[t] = e[t]
                                    }
                                    return !("driver" in e && e.driver) || this.setDriver(this._config.driver)
                                }, e.prototype.defineDriver = function (e, t, n) {
                                    var r = new s((function (t, n) {
                                        try {
                                            var r = e._driver,
                                                o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                            if (!e._driver) return void n(o);
                                            for (var i = ee.concat("_initStorage"), u = 0, c = i.length; u < c; u++) {
                                                var l = i[u];
                                                if ((!W(Z, l) || e[l]) && "function" != typeof e[l]) return void n(o)
                                            }
                                            !function () {
                                                for (var t = function (e) {
                                                    return function () {
                                                        var t = new Error("Method " + e + " is not implemented by the current driver"),
                                                            n = s.reject(t);
                                                        return a(n, arguments[arguments.length - 1]), n
                                                    }
                                                }, n = 0, r = Z.length; n < r; n++) {
                                                    var o = Z[n];
                                                    e[o] || (e[o] = t(o))
                                                }
                                            }();
                                            var E = function (n) {
                                                q[r], q[r] = e, X[r] = n, t()
                                            };
                                            "_support" in e ? e._support && "function" == typeof e._support ? e._support().then(E, n) : E(!!e._support) : E(!0)
                                        } catch (o) {
                                            n(o)
                                        }
                                    }));
                                    return u(r, t, n), r
                                }, e.prototype.driver = function () {
                                    return this._driver || null
                                }, e.prototype.getDriver = function (e, t, n) {
                                    var r = q[e] ? s.resolve(q[e]) : s.reject(new Error("Driver not found."));
                                    return u(r, t, n), r
                                }, e.prototype.getSerializer = function (e) {
                                    var t = s.resolve(K);
                                    return u(t, e), t
                                }, e.prototype.ready = function (e) {
                                    var t = this, n = t._driverSet.then((function () {
                                        return null === t._ready && (t._ready = t._initDriver()), t._ready
                                    }));
                                    return u(n, e, e), n
                                }, e.prototype.setDriver = function (e, t, n) {
                                    var r = this;
                                    z(e) || (e = [e]);
                                    var o = this._getSupportedDrivers(e);

                                    function i() {
                                        r._config.driver = r.driver()
                                    }

                                    function a(e) {
                                        return r._extend(e), i(), r._ready = r._initStorage(r._config), r._ready
                                    }

                                    var c = null !== this._driverSet ? this._driverSet.catch((function () {
                                        return s.resolve()
                                    })) : s.resolve();
                                    return this._driverSet = c.then((function () {
                                        var e = o[0];
                                        return r._dbInfo = null, r._ready = null, r.getDriver(e).then((function (e) {
                                            var t;
                                            r._driver = e._driver, i(), r._wrapLibraryMethodsWithReady(), r._initDriver = (t = o, function () {
                                                var e = 0;
                                                return function n() {
                                                    for (; e < t.length;) {
                                                        var o = t[e];
                                                        return e++, r._dbInfo = null, r._ready = null, r.getDriver(o).then(a).catch(n)
                                                    }
                                                    i();
                                                    var u = new Error("No available storage method found.");
                                                    return r._driverSet = s.reject(u), r._driverSet
                                                }()
                                            })
                                        }))
                                    })).catch((function () {
                                        i();
                                        var e = new Error("No available storage method found.");
                                        return r._driverSet = s.reject(e), r._driverSet
                                    })), u(this._driverSet, t, n), this._driverSet
                                }, e.prototype.supports = function (e) {
                                    return !!X[e]
                                }, e.prototype._extend = function (e) {
                                    re(this, e)
                                }, e.prototype._getSupportedDrivers = function (e) {
                                    for (var t = [], n = 0, r = e.length; n < r; n++) {
                                        var o = e[n];
                                        this.supports(o) && t.push(o)
                                    }
                                    return t
                                }, e.prototype._wrapLibraryMethodsWithReady = function () {
                                    for (var e = 0, t = ee.length; e < t; e++) ne(this, ee[e])
                                }, e.prototype.createInstance = function (t) {
                                    return new e(t)
                                }, e
                            }());
                            t.exports = oe
                        }, {3: 3}]
                    }, {}, [4])(4)
                }).call(this, n(39))
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.FETCH_ERROR = t.TYPINGNOTIFICATION_CONSTANTS = t.LOGIN_ERROR = t.MESSAGE_ERRORS = t.MESSAGES_REQUEST_ERRORS = t.USERS_REQUEST_ERRORS = t.GROUP_CREATION_ERRORS = t.INIT_ERROR = t.ERRORS = t.SERVER_ERRORS = void 0, t.SERVER_ERRORS = {
                    AUTH_ERR: {
                        code: "AUTH_ERR_AUTH_TOKEN_NOT_FOUND",
                        message: "The auth token %s% does not exist. Please make sure you are logged in and have a valid auth token or try login again."
                    }
                }, t.ERRORS = {
                    PARAMETER_MISSING: {
                        code: "MISSING_PARAMETERS",
                        name: "Invalid or no parameter passed to the method."
                    }
                }, t.INIT_ERROR = {
                    NO_APP_ID: {
                        code: t.ERRORS.PARAMETER_MISSING.code,
                        name: t.ERRORS.PARAMETER_MISSING.name,
                        message: "AppID cannot be empty. Please specify a valid appID.",
                        details: {}
                    }
                }, t.GROUP_CREATION_ERRORS = {
                    EMPTY_PASSWORD: {
                        code: "ERR_EMPTY_GROUP_PASS",
                        details: void 0,
                        message: "Password is mandatory to join a group.",
                        name: void 0
                    }
                }, t.USERS_REQUEST_ERRORS = {
                    EMPTY_USERS_LIST: {
                        code: "EMPTY_USERS_LIST",
                        name: "EMPTY_USERS_LIST",
                        message: "The users list needs to have atleast one UID.",
                        details: {}
                    }
                }, t.MESSAGES_REQUEST_ERRORS = {
                    REQUEST_IN_PROGRESS_ERROR: {
                        code: "REQUEST_IN_PROGRESS",
                        name: "REQUEST_IN_PROGRESS",
                        message: "Request in progress.",
                        details: {}
                    },
                    NOT_ENOUGH_PARAMS: {
                        code: "NOT_ENOUGH_PARAMETERS",
                        name: "NOT_ENOUGH_PARAMETERS",
                        message: "`Timestamp`, `MessageId` or `updatedAfter` is required to use the 'fetchNext()' method.",
                        details: {}
                    }
                }, t.MESSAGE_ERRORS = {
                    INVALID_CUSTOM_DATA: {
                        code: "-1",
                        name: "%s_CUSTOM_DATA",
                        message: "",
                        details: {}
                    }
                }, t.LOGIN_ERROR = {
                    NOT_INITIALIZED: {
                        code: "-1",
                        name: "COMETCHAT_INITIALIZATION_NOT_DONE",
                        message: "please initialize the cometchat before using login method.",
                        details: {}
                    },
                    UNAUTHORISED: {
                        code: 401,
                        name: "USER_NOT_AUTHORISED",
                        message: "The `authToken` of the user is not authorised. Please verify again.",
                        details: {}
                    },
                    WS_CONNECTION_FAIL: {
                        code: -1,
                        name: "WS_CONNECTION_FAIL",
                        message: "WS Connection failed. %s",
                        details: {}
                    },
                    WS_CONNECTION_FAIL_PORT_ERROR: {
                        code: -1,
                        name: "WS_CONNECTION_FAIL",
                        message: "WS Connection failed. Trying to connect with port: %s",
                        details: {}
                    },
                    WS_CONNECTION_FALLBACK_FAIL_PORT_ERROR: {
                        code: -1,
                        name: "WS_CONNECTION_FALLBACK_FAIL",
                        message: "WS Connection fallback failed. Trying to connect with port: %s",
                        details: {}
                    },
                    WS_AUTH_FAIL: {
                        code: -1,
                        name: "WS_AUTH_FAIL",
                        message: "WS username/password not correct.",
                        details: {}
                    },
                    NO_INTERNET: {
                        code: -1,
                        name: "NO_INTERNET_CONNECTION",
                        message: "You do not have internet connection.",
                        details: {}
                    },
                    REQUEST_IN_PROGRESS: {
                        code: -1,
                        name: "LOGIN_IN_PROGRESS",
                        message: "Please wait until the previous login request ends.",
                        details: {}
                    }
                }, t.TYPINGNOTIFICATION_CONSTANTS = {
                    TOO_MANY_REQUEST: {
                        code: "TOO_MANY_REQUEST",
                        name: "TOO MANY REQUEST",
                        message: "too many request, wait for `%s` seconds before sending next request.",
                        details: {}
                    }
                }, t.FETCH_ERROR = {
                    ERROR_IN_API_CALL: {
                        code: "FAILED_TO_FETCH",
                        name: "FAILED_TO_FETCH",
                        message: "There is an unknown issue with the API request. Please check your internet connection and verify the api call.",
                        details: {}
                    }
                }
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.GroupsController = void 0;
                var r = n(8), o = n(1), i = n(0), s = function () {
                    function e() {
                    }

                    return e.trasformJSONGroup = function (e) {
                        var t;
                        try {
                            t = new r.Group(e[o.GroupConstants.KEYS.GUID], e[o.GroupConstants.KEYS.NAME], e[o.GroupConstants.KEYS.TYPE]), e.wsChannel && delete e.wsChannel, Object.assign(t, e), e = t
                        } catch (e) {
                            i.Logger.error("GroupsController:transformJSONGroup", e)
                        }
                        return e
                    }, e
                }();
                t.GroupsController = s
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }), i = this && this.__assign || function () {
                    return (i = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };
                t.__esModule = !0, t.TextMessage = void 0;
                var s = n(7), a = n(1), u = n(4), c = n(8), l = n(0), E = function (e) {
                    function t(t, n, r) {
                        var o = e.call(this, t, "text", r, a.MessageCategory.MESSAGE) || this;
                        return o.type = "text", o.data = {text: n}, o.text = n, o
                    }

                    return o(t, e), t.prototype.getSender = function () {
                        try {
                            return this.getSenderFromData()
                        } catch (e) {
                            return this.sender
                        }
                    }, t.prototype.getReceiver = function () {
                        try {
                            return this.getReceiverFromData()
                        } catch (e) {
                            return this.receiver
                        }
                    }, t.prototype.getMetadata = function () {
                        return this.data.metadata && (this.metadata = this.data.metadata), this.metadata
                    }, t.prototype.setMetadata = function (e) {
                        this.metadata = e, this.data = i(i({}, this.data), {metadata: e})
                    }, t.prototype.getData = function () {
                        return this.data
                    }, t.prototype.setData = function (e) {
                        this.data = e
                    }, t.prototype.getText = function () {
                        return this.text
                    }, t.prototype.setText = function (e) {
                        this.text = e, this.data.text = e
                    }, t.prototype.setProcessedText = function (e) {
                        this.processedText = e
                    }, t.prototype.getProcessedText = function () {
                        return this.processedText
                    }, t.prototype.getTags = function () {
                        return this.tags
                    }, t.prototype.setTags = function (e) {
                        this.tags = e
                    }, t.prototype.getSenderFromData = function () {
                        try {
                            var e = this.getData();
                            if (e[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.SENDER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new u.User(e[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.SENDER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY])
                        } catch (e) {
                            l.Logger.error("TextMessageModel: getSenderFromData", e)
                        }
                    }, t.prototype.getReceiverFromData = function () {
                        try {
                            var e = this.getData(),
                                t = e[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.RECEIVER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
                            if (e[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.RECEIVER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == [a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER]) return new u.User(t);
                            var n = new c.Group(t[a.GroupConstants.KEYS.GUID], t[a.GroupConstants.KEYS.NAME], t[a.MessageConstatnts.KEYS.TYPE]);
                            return Object.assign(n, t)
                        } catch (e) {
                            l.Logger.error("TextMessageModel: getReceiverFromData", e)
                        }
                    }, t.TYPE = a.MessageConstatnts.TYPE.TEXT, t.RECEIVER_TYPE = a.MessageConstatnts.RECEIVER_TYPE, t.CATEGORY = a.MessageConstatnts.CATEGORY.MESSAGE, t
                }(s.BaseMessage);
                t.TextMessage = E
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }), i = this && this.__assign || function () {
                    return (i = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };
                t.__esModule = !0, t.MediaMessage = void 0;
                var s = n(7), a = n(1), u = n(4), c = n(18), l = n(8), E = n(0), p = function (e) {
                    function t(t, n, r, o) {
                        var i = e.call(this, t, r, o, a.MessageCategory.MESSAGE) || this;
                        return i.data = {}, "object" != typeof n ? i.data = {url: n} : i.file = n, i
                    }

                    return o(t, e), t.prototype.setCaption = function (e) {
                        this.caption = e, this.data[a.MessageConstatnts.KEYS.TEXT] = e
                    }, t.prototype.getCaption = function () {
                        return this.data[a.MessageConstatnts.KEYS.TEXT]
                    }, t.prototype.getSender = function () {
                        try {
                            return this.getSenderFromData()
                        } catch (e) {
                            return this.sender
                        }
                    }, t.prototype.getReceiver = function () {
                        try {
                            return this.getReceiverFromData()
                        } catch (e) {
                            return this.receiver
                        }
                    }, t.prototype.getMetadata = function () {
                        return this.data.metadata && (this.metadata = this.data.metadata), this.metadata
                    }, t.prototype.setMetadata = function (e) {
                        this.metadata = e, this.data = i(i({}, this.data), {metadata: e})
                    }, t.prototype.getData = function () {
                        return this.data
                    }, t.prototype.setData = function (e) {
                        this.data = e
                    }, t.prototype.getAttachment = function () {
                        return new c.Attachment(this.data.attachments[0])
                    }, t.prototype.setAttachment = function (e) {
                        this.data.attachments = [e.toJSON(e)]
                    }, t.prototype.getURL = function () {
                        try {
                            var e = this.getData();
                            if (e[a.MessageConstatnts.KEYS.URL]) return e[a.MessageConstatnts.KEYS.URL]
                        } catch (e) {
                            E.Logger.error("MediaMessageModel: getURL", e)
                        }
                    }, t.prototype.getTags = function () {
                        return this.tags
                    }, t.prototype.setTags = function (e) {
                        this.tags = e
                    }, t.prototype.getSenderFromData = function () {
                        try {
                            var e = this.getData();
                            if (e[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.SENDER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new u.User(e[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.SENDER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY])
                        } catch (e) {
                            E.Logger.error("MediaMessageModel: getSenderFromData", e)
                        }
                    }, t.prototype.getReceiverFromData = function () {
                        try {
                            var e = this.getData(),
                                t = e[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.RECEIVER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
                            if (e[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.RECEIVER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == [a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER]) return new u.User(t);
                            var n = new l.Group(t[a.GroupConstants.KEYS.GUID], t[a.GroupConstants.KEYS.NAME], t[a.MessageConstatnts.KEYS.TYPE]);
                            return Object.assign(n, t)
                        } catch (e) {
                            E.Logger.error("MediaMessageModel: getReceiverFromData", e)
                        }
                    }, t.TYPE = a.MessageConstatnts.TYPE, t.RECEIVER_TYPE = a.MessageConstatnts.RECEIVER_TYPE, t.CATEGORY = a.MessageConstatnts.CATEGORY, t
                }(s.BaseMessage);
                t.MediaMessage = p
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.Attachment = void 0;
                var r = n(1), o = function () {
                    function e(e) {
                        e.hasOwnProperty(r.ATTACHMENTS_CONSTANTS.KEYS.EXTENSION) && (this.extension = e[r.ATTACHMENTS_CONSTANTS.KEYS.EXTENSION]), e.hasOwnProperty(r.ATTACHMENTS_CONSTANTS.KEYS.MIME_TYPE) && (this.mimeType = e[r.ATTACHMENTS_CONSTANTS.KEYS.MIME_TYPE]), e.hasOwnProperty(r.ATTACHMENTS_CONSTANTS.KEYS.NAME) && (this.name = e[r.ATTACHMENTS_CONSTANTS.KEYS.NAME]), e.hasOwnProperty(r.ATTACHMENTS_CONSTANTS.KEYS.SIZE) && (this.size = e[r.ATTACHMENTS_CONSTANTS.KEYS.SIZE]), e.hasOwnProperty(r.ATTACHMENTS_CONSTANTS.KEYS.URL) && (this.url = e[r.ATTACHMENTS_CONSTANTS.KEYS.URL])
                    }

                    return e.prototype.createFileFromJSON = function (t) {
                        return new e(t)
                    }, e.prototype.toJSON = function (e) {
                        return {
                            extension: e.getExtension(),
                            mimeType: e.getMimeType(),
                            name: e.getName(),
                            url: e.getUrl(),
                            size: e.getSize()
                        }
                    }, e.prototype.getExtension = function () {
                        return this.extension
                    }, e.prototype.setExtension = function (e) {
                        this.extension = e
                    }, e.prototype.getMimeType = function () {
                        return this.mimeType
                    }, e.prototype.setMimeType = function (e) {
                        this.mimeType = e
                    }, e.prototype.getName = function () {
                        return this.name
                    }, e.prototype.setName = function (e) {
                        this.name = e
                    }, e.prototype.getSize = function () {
                        return this.size
                    }, e.prototype.setSize = function (e) {
                        this.size = e
                    }, e.prototype.getUrl = function () {
                        return this.url
                    }, e.prototype.setUrl = function (e) {
                        this.url = e
                    }, e
                }();
                t.Attachment = o
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }), i = this && this.__assign || function () {
                    return (i = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };
                t.__esModule = !0, t.CustomMessage = void 0;
                var s = n(7), a = n(1), u = n(4), c = n(0), l = n(8), E = function (e) {
                    function t() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var r = this;
                        if (3 == t.length) {
                            var o = t[0], i = t[1], s = t[2];
                            r = e.call(this, o, a.MessageConstatnts.TYPE.CUSTOM, i, a.MessageCategory.MESSAGE) || this, ("object" != typeof s || Array.isArray(s)) && (s = {}), r.customData = s, c.isFalsy(r.data) && (r.data = {}), r.data[a.MessageConstatnts.KEYS.CUSTOM_DATA] = s
                        }
                        if (4 == t.length) {
                            o = t[0], i = t[1];
                            var u = t[2];
                            s = t[3], r = e.call(this, o, u, i, a.MessageCategory.CUSTOM) || this, ("object" != typeof s || Array.isArray(s)) && (s = {}), r.customData = s, c.isFalsy(r.data) && (r.data = {}), r.data[a.MessageConstatnts.KEYS.CUSTOM_DATA] = s
                        }
                        return r
                    }

                    return o(t, e), t.prototype.getCustomData = function () {
                        return this.customData
                    }, t.prototype.setCustomData = function (e) {
                        this.customData = e, this.data[a.MessageConstatnts.KEYS.CUSTOM_DATA] = e
                    }, t.prototype.getSender = function () {
                        try {
                            return this.getSenderFromData()
                        } catch (e) {
                            return this.sender
                        }
                    }, t.prototype.getReceiver = function () {
                        try {
                            return this.getReceiverFromData()
                        } catch (e) {
                            return this.receiver
                        }
                    }, t.prototype.getSubType = function () {
                        return this.subType
                    }, t.prototype.setSubType = function (e) {
                        this.subType = e, this.data = i(i({}, this.data), {subType: e})
                    }, t.prototype.getMetadata = function () {
                        return this.metadata
                    }, t.prototype.setMetadata = function (e) {
                        this.metadata = e, this.data = i(i({}, this.data), {metadata: e})
                    }, t.prototype.getData = function () {
                        return this.data
                    }, t.prototype.getTags = function () {
                        return this.tags
                    }, t.prototype.setTags = function (e) {
                        this.tags = e
                    }, t.prototype.getSenderFromData = function () {
                        try {
                            var e = this.getData();
                            if (e[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.SENDER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new u.User(e[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.SENDER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY])
                        } catch (e) {
                            c.Logger.error("CustomMessageModel: getSenderFromData", e)
                        }
                    }, t.prototype.getReceiverFromData = function () {
                        try {
                            var e = this.getData(),
                                t = e[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.RECEIVER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
                            if (e[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.RECEIVER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == [a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER]) return new u.User(t);
                            var n = new l.Group(t[a.GroupConstants.KEYS.GUID], t[a.GroupConstants.KEYS.NAME], t[a.MessageConstatnts.KEYS.TYPE]);
                            return Object.assign(n, t)
                        } catch (e) {
                            c.Logger.error("CustomMessageModel: getReceiverFromData", e)
                        }
                    }, t
                }(s.BaseMessage);
                t.CustomMessage = E
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }), i = this && this.__assign || function () {
                    return (i = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };
                t.__esModule = !0, t.Action = void 0;
                var s = n(7), a = n(8), u = n(4), c = n(1), l = n(0), E = n(10), p = function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }

                    return o(t, e), t.actionFromJSON = function (e) {
                        var t = new this(e[c.MessageConstatnts.KEYS.RECEIVER], e[c.MessageConstatnts.KEYS.TYPE], e[c.MessageConstatnts.KEYS.RECEIVER_TYPE], c.MessageCategory.ACTION),
                            n = e[c.MessageConstatnts.KEYS.DATA];
                        if (t.data = n, t.setAction(n[c.MessageConstatnts.KEYS.ACTION]), n[c.ActionConstatnts.ACTION_KEYS.EXTRAS]) {
                            var r = n[c.ActionConstatnts.ACTION_KEYS.EXTRAS];
                            if (r[c.ActionConstatnts.ACTION_KEYS.SCOPE]) {
                                var o = r[c.ActionConstatnts.ACTION_KEYS.SCOPE];
                                o[c.ActionConstatnts.ACTION_KEYS.NEW] && o[c.ActionConstatnts.ACTION_KEYS.OLD] && (t.setOldScope(o[c.ActionConstatnts.ACTION_KEYS.OLD]), t.setNewScope(o[c.ActionConstatnts.ACTION_KEYS.NEW]))
                            }
                        }
                        n[c.MessageConstatnts.KEYS.METADATA] && t.setMetadata(n[c.MessageConstatnts.KEYS.METADATA]);
                        var i = n[c.ActionConstatnts.ACTION_KEYS.ENTITIES];
                        if (i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY]) if (i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][c.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == c.ActionConstatnts.ACTION_ENTITY_TYPE.USER) {
                            var s = new u.User(i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][c.ActionConstatnts.ACTION_KEYS.ENTITY]);
                            Object.assign(s, i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][c.ActionConstatnts.ACTION_KEYS.ENTITY]), t.actionBy = s, t.setSender(s)
                        } else {
                            var l = new a.Group("", "", "");
                            Object.assign(l, i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][c.ActionConstatnts.ACTION_KEYS.ENTITY]), t.actionBy = l
                        }
                        if (i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR] && (i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][c.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == c.ActionConstatnts.ACTION_ENTITY_TYPE.USER ? (s = new u.User(i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][c.ActionConstatnts.ACTION_KEYS.ENTITY]), Object.assign(s, i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][c.ActionConstatnts.ACTION_KEYS.ENTITY]), t.actionFor = s) : (l = new a.Group("", "", ""), Object.assign(l, i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][c.ActionConstatnts.ACTION_KEYS.ENTITY]), t.actionFor = l)), i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON]) if (i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][c.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == c.ActionConstatnts.ACTION_ENTITY_TYPE.USER) s = new u.User(i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][c.ActionConstatnts.ACTION_KEYS.ENTITY]), Object.assign(s, i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][c.ActionConstatnts.ACTION_KEYS.ENTITY]), t.actionOn = s; else if (i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][c.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == c.ActionConstatnts.ACTION_ENTITY_TYPE.GROUP) l = new a.Group("", "", ""), Object.assign(l, i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][c.ActionConstatnts.ACTION_KEYS.ENTITY]), t.actionOn = l; else if (i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][c.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == c.ActionConstatnts.ACTION_ENTITY_TYPE.MESSAGE) {
                            var p = E.MessageController.trasformJSONMessge(i[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][c.ActionConstatnts.ACTION_KEYS.ENTITY]);
                            t.actionOn = p
                        }
                        return t.setMessage(t.getActionMessage(t)), t
                    }, t.prototype.getOldScope = function () {
                        return this.oldScope
                    }, t.prototype.setOldScope = function (e) {
                        this.oldScope = e
                    }, t.prototype.getNewScope = function () {
                        return this.newScope
                    }, t.prototype.setNewScope = function (e) {
                        this.newScope = e
                    }, t.prototype.getRawData = function () {
                        return this.rawData
                    }, t.prototype.setRawData = function (e) {
                        this.rawData = e
                    }, t.prototype.getMessage = function () {
                        return this.message
                    }, t.prototype.setMessage = function (e) {
                        this.message = e
                    }, t.prototype.getAction = function () {
                        return this.action
                    }, t.prototype.setAction = function (e) {
                        this.action = e
                    }, t.prototype.getSender = function () {
                        try {
                            return this.getSenderFromData()
                        } catch (e) {
                            return this.sender
                        }
                    }, t.prototype.getActionBy = function () {
                        return this.actionBy
                    }, t.prototype.setActionBy = function (e) {
                        this.actionBy = e
                    }, t.prototype.getActionOn = function () {
                        return this.actionOn
                    }, t.prototype.setActionOn = function (e) {
                        this.actionOn = e
                    }, t.prototype.getActionFor = function () {
                        return this.actionFor
                    }, t.prototype.setActionFor = function (e) {
                        this.actionFor = e
                    }, t.prototype.getMetadata = function () {
                        return this.data.metadata && (this.metadata = this.data.metadata), this.metadata
                    }, t.prototype.setMetadata = function (e) {
                        this.metadata = e, this.data = i(i({}, this.data), {metadata: e})
                    }, t.prototype.getActionMessage = function (e) {
                        var t = "";
                        switch (e.getType()) {
                            case c.ActionConstatnts.ACTION_KEYS.ACTION_TYPE_USER:
                            case c.ActionConstatnts.ACTION_KEYS.ACTION_TYPE_GROUP:
                                switch (e.getAction()) {
                                    case c.ActionConstatnts.ACTION_KEYS.ACTION_CREATED:
                                    case c.ActionConstatnts.ACTION_KEYS.ACTION_UPDATED:
                                    case c.ActionConstatnts.ACTION_KEYS.ACTION_DELETED:
                                }
                                break;
                            case c.ActionConstatnts.ACTION_KEYS.ACTION_TYPE_GROUP_MEMBER:
                                switch (e.getAction()) {
                                    case c.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_JOINED:
                                        var n = e.getActionBy();
                                        t = l.format(c.ActionConstatnts.ActionMessages.ACTION_GROUP_JOINED_MESSAGE, n.getName());
                                        break;
                                    case c.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_LEFT:
                                        n = e.getActionBy(), t = l.format(c.ActionConstatnts.ActionMessages.ACTION_GROUP_LEFT_MESSAGE, n.getName());
                                        break;
                                    case c.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_KICKED:
                                        n = e.getActionBy();
                                        var r = e.getActionOn();
                                        t = l.format(c.ActionConstatnts.ActionMessages.ACTION_MEMBER_KICKED_MESSAGE, n.getName(), r.getName());
                                        break;
                                    case c.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_BANNED:
                                        n = e.getActionBy(), r = e.getActionOn(), t = l.format(c.ActionConstatnts.ActionMessages.ACTION_MEMBER_BANNED_MESSAGE, n.getName(), r.getName());
                                        break;
                                    case c.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_UNBANNED:
                                        n = e.getActionBy(), r = e.getActionOn(), t = l.format(c.ActionConstatnts.ActionMessages.ACTION_MEMBER_UNBANNED_MESSAGE, n.getName(), r.getName());
                                        break;
                                    case c.ActionConstatnts.ACTION_KEYS.ACTION_SCOPE_CHANGED:
                                        n = e.getActionBy(), r = e.getActionOn();
                                        var o = e.getNewScope();
                                        t = l.format(c.ActionConstatnts.ActionMessages.ACTION_MEMBER_SCOPE_CHANGED, n.getName(), r.getName(), o);
                                        break;
                                    case c.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_ADDED:
                                        n = e.getActionBy(), r = e.getActionOn(), t = l.format(c.ActionConstatnts.ActionMessages.ACTION_MEMBER_ADDED_TO_GROUP, n.getName(), r.getName());
                                        break;
                                    case c.ActionConstatnts.ACTION_KEYS.TYPE_MESSAGE_EDITED:
                                        t = l.format(c.ActionConstatnts.ActionMessages.ACTION_MESSAGE_EDITED_MESSAGE, "");
                                        break;
                                    case c.ActionConstatnts.ACTION_KEYS.TYPE_MESSAGE_DELETED:
                                        t = l.format(c.ActionConstatnts.ActionMessages.ACTION_MESSAGE_DELETED_MESSAGE, "")
                                }
                        }
                        return t
                    }, t.prototype.getSenderFromData = function () {
                        var e = this.data[c.ActionConstatnts.ACTION_KEYS.ENTITIES];
                        if (e[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY] && e[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][c.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == c.ActionConstatnts.ACTION_ENTITY_TYPE.USER) {
                            var t = new u.User(e[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][c.ActionConstatnts.ACTION_KEYS.ENTITY]);
                            return Object.assign(t, e[c.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][c.ActionConstatnts.ACTION_KEYS.ENTITY]), t
                        }
                    }, t.TYPE = c.MessageConstatnts.TYPE, t.RECEIVER_TYPE = c.MessageConstatnts.RECEIVER_TYPE, t.CATEGORY = c.MessageConstatnts.CATEGORY, t.ACTION_TYPE = c.ActionConstatnts.ACTION_TYPE, t
                }(s.BaseMessage);
                t.Action = p
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }), i = this && this.__assign || function () {
                    return (i = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };
                t.__esModule = !0, t.Call = void 0;
                var s = n(7), a = n(8), u = n(1), c = n(0), l = n(4), E = function (e) {
                    function t(t, n, r, o) {
                        return c.isFalsy(o) ? e.call(this, t, n, r, u.MessageCategory.CALL) || this : e.call(this, t, n, r, o) || this
                    }

                    return o(t, e), t.prototype.getCallInitiator = function () {
                        return this.getCallInitiatedByFromData()
                    }, t.prototype.setCallInitiator = function (e) {
                        this.callInitiator = e
                    }, t.prototype.getCallReceiver = function () {
                        return this.getCallReceivedByFromData()
                    }, t.prototype.setCallReceiver = function (e) {
                        this.callReceiver = e
                    }, t.prototype.getData = function () {
                        return this.data
                    }, t.prototype.setData = function (e) {
                        this.data = e
                    }, t.prototype.getSessionId = function () {
                        return this.sessionId
                    }, t.prototype.setSessionId = function (e) {
                        this.sessionId = e
                    }, t.prototype.getMetadata = function () {
                        return this.data.metadata && (this.metadata = this.data.metadata), this.metadata
                    }, t.prototype.setMetadata = function (e) {
                        this.metadata = e, this.data = i(i({}, this.data), {metadata: e})
                    }, t.prototype.getSender = function () {
                        try {
                            return this.getSenderFromData()
                        } catch (e) {
                            return this.sender
                        }
                    }, t.prototype.getAction = function () {
                        return this.action
                    }, t.prototype.setAction = function (e) {
                        this.action = e
                    }, t.prototype.getInitiatedAt = function () {
                        return this.initiatedAt
                    }, t.prototype.setInitiatedAt = function (e) {
                        this.initiatedAt = e
                    }, t.prototype.getJoinedAt = function () {
                        return this.joinedAt
                    }, t.prototype.setJoinedAt = function (e) {
                        this.joinedAt = e
                    }, t.prototype.getRawData = function () {
                        return this.rawData
                    }, t.prototype.setRawData = function (e) {
                        this.rawData = e
                    }, t.callFromJSON = function (e) {
                        try {
                            var t = new this(e[u.MessageConstatnts.KEYS.RECEIVER], e[u.MessageConstatnts.KEYS.TYPE], e[u.MessageConstatnts.KEYS.RECEIVER_TYPE], u.MessageCategory.CALL),
                                n = e[u.MessageConstatnts.KEYS.DATA];
                            t.setAction(n[u.MessageConstatnts.KEYS.ACTION]), n[u.MessageConstatnts.KEYS.METADATA] && t.setMetadata(n[u.MessageConstatnts.KEYS.METADATA]);
                            var r = n[u.ActionConstatnts.ACTION_KEYS.ENTITIES];
                            if (r[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY] && r[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY], r[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON]) {
                                var o = r[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON];
                                if (o[u.CallConstants.CALL_KEYS.CALL_ENTITY]) {
                                    var i = o[u.CallConstants.CALL_KEYS.CALL_ENTITY];
                                    if (i[u.CallConstants.CALL_KEYS.CALL_SESSION_ID] && (t.sessionId = i[u.CallConstants.CALL_KEYS.CALL_SESSION_ID]), i[u.CallConstants.CALL_KEYS.CALL_STATUS] && (t.status = i[u.CallConstants.CALL_KEYS.CALL_STATUS]), i[u.CallConstants.CALL_KEYS.CALL_DATA]) {
                                        var s = i[u.CallConstants.CALL_KEYS.CALL_DATA];
                                        s[u.CallConstants.CALL_KEYS.CALL_METADATA] && (t.metadata = s[u.CallConstants.CALL_KEYS.CALL_METADATA]), s[u.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES] && s[u.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES]
                                    }
                                    i[u.CallConstants.CALL_KEYS.CALL_INITIATED_AT] && (t.initiatedAt = i[u.CallConstants.CALL_KEYS.CALL_INITIATED_AT]), i[u.CallConstants.CALL_KEYS.CALL_JOINED_AT] && (t.joinedAt = i[u.CallConstants.CALL_KEYS.CALL_JOINED_AT]), i[u.CallConstants.CALL_KEYS.CALL_LEFT_AT] && (t.joinedAt = i[u.CallConstants.CALL_KEYS.CALL_LEFT_AT])
                                }
                            }
                            return t
                        } catch (e) {
                            c.Logger.error("CallModel: callFromJSON", e)
                        }
                    }, t.prototype.getSenderFromData = function () {
                        try {
                            var e = this.getData();
                            if ((e = e[u.ActionConstatnts.ACTION_KEYS.ENTITIES])[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][u.CallConstants.CALL_KEYS.CALL_ENTITY]) return new l.User(e[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][u.CallConstants.CALL_KEYS.CALL_ENTITY])
                        } catch (e) {
                            c.Logger.error("CallModel:getSenderFromData", e)
                        }
                    }, t.prototype.getCallInitiatedByFromData = function () {
                        try {
                            var e = this.getData();
                            if ((e = e[u.ActionConstatnts.ACTION_KEYS.ENTITIES])[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][u.CallConstants.CALL_KEYS.CALL_ENTITY][u.CallConstants.CALL_KEYS.CALL_DATA][u.ActionConstatnts.ACTION_KEYS.ENTITIES][u.CallConstants.CALL_KEYS.CALL_SENDER]) return new l.User(e[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][u.CallConstants.CALL_KEYS.CALL_ENTITY][u.CallConstants.CALL_KEYS.CALL_DATA][u.ActionConstatnts.ACTION_KEYS.ENTITIES][u.CallConstants.CALL_KEYS.CALL_SENDER][u.CallConstants.CALL_KEYS.CALL_ENTITY])
                        } catch (e) {
                            c.Logger.error("CallModel:getCallInitiatedByFromData", e)
                        }
                    }, t.prototype.getCallReceivedByFromData = function () {
                        try {
                            var e = this.getData();
                            if ((e = e[u.ActionConstatnts.ACTION_KEYS.ENTITIES])[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][u.CallConstants.CALL_KEYS.CALL_ENTITY]) {
                                if (e[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][u.CallConstants.CALL_KEYS.CALL_ENTITY_TYPE] == u.CallConstants.CALL_KEYS.CALL_ENTITY_USER) return new l.User(e[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][u.CallConstants.CALL_KEYS.CALL_ENTITY]);
                                var t = new a.Group(e[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][u.CallConstants.CALL_KEYS.CALL_ENTITY][u.GroupConstants.KEYS.GUID], e[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][u.CallConstants.CALL_KEYS.CALL_ENTITY][u.GroupConstants.KEYS.NAME], e[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][u.CallConstants.CALL_KEYS.CALL_ENTITY][u.GroupConstants.KEYS.TYPE]);
                                return Object.assign(t, e[u.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][u.CallConstants.CALL_KEYS.CALL_ENTITY])
                            }
                        } catch (e) {
                            c.Logger.error("CallModel:getCallReceivedByFromData", e)
                        }
                    }, t.TYPE = u.MessageConstatnts.TYPE, t.RECEIVER_TYPE = u.MessageConstatnts.RECEIVER_TYPE, t.CATEGORY = u.MessageConstatnts.CATEGORY, t.ACTION_TYPE = u.ActionConstatnts.ACTION_TYPE, t
                }(s.BaseMessage);
                t.Call = E
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.MessageReceipt = void 0;
                var r = function () {
                    function e() {
                        this.RECEIPT_TYPE = {
                            READ_RECEIPT: "read",
                            DELIVERY_RECEIPT: "delivery"
                        }, this.receiptType = this.RECEIPT_TYPE.DELIVERY_RECEIPT
                    }

                    return e.prototype.getReceiverType = function () {
                        return this.receiverType
                    }, e.prototype.setReceiverType = function (e) {
                        this.receiverType = e
                    }, e.prototype.getSender = function () {
                        return this.sender
                    }, e.prototype.setSender = function (e) {
                        this.sender = e
                    }, e.prototype.getReceiver = function () {
                        return this.receiver
                    }, e.prototype.setReceiver = function (e) {
                        this.receiver = e
                    }, e.prototype.getTimestamp = function () {
                        return this.timestamp
                    }, e.prototype.setTimestamp = function (e) {
                        this.timestamp = e
                    }, e.prototype.setReadAt = function (e) {
                        this.readAt = e
                    }, e.prototype.getReadAt = function () {
                        return this.readAt
                    }, e.prototype.setDeliveredAt = function (e) {
                        this.deliveredAt = e
                    }, e.prototype.getDeliveredAt = function () {
                        return this.deliveredAt
                    }, e.prototype.getMessageId = function () {
                        return this.messageId
                    }, e.prototype.setMessageId = function (e) {
                        this.messageId = e
                    }, e.prototype.getReceiptType = function () {
                        return this.receiptType
                    }, e.prototype.setReceiptType = function (e) {
                        void 0 === e && (e = this.RECEIPT_TYPE.DELIVERY_RECEIPT), this.receiptType = e
                    }, e
                }();
                t.MessageReceipt = r
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                t.__esModule = !0, t.WSConnectionListener = t.UserLoginListener = t.CallsListener = t.UserCallListener = t.GroupsListener = t.UsersListener = t.MessagesListener = t.Listener = t.ConnectionListener = t.LoginListener = t.OngoingCallListener = t.GroupListener = t.UserListener = t.CallListener = t.MessageListener = void 0;
                var i = n(0);
                t.MessageListener = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this.onTextMessageReceived = void 0, this.onMediaMessageReceived = void 0, this.onCustomMessageReceived = void 0, this.onTypingStarted = void 0, this.onTypingEnded = void 0, this.onMessagesDelivered = void 0, this.onMessagesRead = void 0, this.onMessageEdited = void 0, this.onMessageDeleted = void 0, this.onTransientMessageReceived = void 0, i.isFalsy(e[0].onTextMessageReceived) || (this.onTextMessageReceived = e[0].onTextMessageReceived), i.isFalsy(e[0].onMediaMessageReceived) || (this.onMediaMessageReceived = e[0].onMediaMessageReceived), i.isFalsy(e[0].onTypingStarted) || (this.onTypingStarted = e[0].onTypingStarted), i.isFalsy(e[0].onTypingEnded) || (this.onTypingEnded = e[0].onTypingEnded), i.isFalsy(e[0].onMessagesDelivered) || (this.onMessagesDelivered = e[0].onMessagesDelivered), i.isFalsy(e[0].onMessagesRead) || (this.onMessagesRead = e[0].onMessagesRead), i.isFalsy(e[0].onCustomMessageReceived) || (this.onCustomMessageReceived = e[0].onCustomMessageReceived), i.isFalsy(e[0].onMessageEdited) || (this.onMessageEdited = e[0].onMessageEdited), i.isFalsy(e[0].onMessageDeleted) || (this.onMessageDeleted = e[0].onMessageDeleted), i.isFalsy(e[0].onTransientMessageReceived) || (this.onTransientMessageReceived = e[0].onTransientMessageReceived)
                };
                t.CallListener = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this.onIncomingCallReceived = void 0, this.onOutgoingCallAccepted = void 0, this.onOutgoingCallRejected = void 0, this.onIncomingCallCancelled = void 0, i.isFalsy(e[0].onIncomingCallReceived) || (this.onIncomingCallReceived = e[0].onIncomingCallReceived), i.isFalsy(e[0].onOutgoingCallAccepted) || (this.onOutgoingCallAccepted = e[0].onOutgoingCallAccepted), i.isFalsy(e[0].onOutgoingCallRejected) || (this.onOutgoingCallRejected = e[0].onOutgoingCallRejected), i.isFalsy(e[0].onIncomingCallCancelled) || (this.onIncomingCallCancelled = e[0].onIncomingCallCancelled)
                };
                t.UserListener = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    i.isFalsy(e[0].onUserOnline) || (this.onUserOnline = e[0].onUserOnline), i.isFalsy(e[0].onUserOffline) || (this.onUserOffline = e[0].onUserOffline)
                };
                t.GroupListener = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    i.isFalsy(e[0].onGroupMemberJoined) || (this.onGroupMemberJoined = e[0].onGroupMemberJoined), i.isFalsy(e[0].onGroupMemberLeft) || (this.onGroupMemberLeft = e[0].onGroupMemberLeft), i.isFalsy(e[0].onGroupMemberKicked) || (this.onGroupMemberKicked = e[0].onGroupMemberKicked), i.isFalsy(e[0].onGroupMemberBanned) || (this.onGroupMemberBanned = e[0].onGroupMemberBanned), i.isFalsy(e[0].onGroupMemberUnbanned) || (this.onGroupMemberUnbanned = e[0].onGroupMemberUnbanned), i.isFalsy(e[0].onGroupMemberScopeChanged) || (this.onGroupMemberScopeChanged = e[0].onGroupMemberScopeChanged), i.isFalsy(e[0].onMemberAddedToGroup) || (this.onGroupMemberAddedToGroup = e[0].onMemberAddedToGroup)
                };
                t.OngoingCallListener = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    i.isFalsy(e[0].onYouLeft) || (this.onYouLeft = e[0].onYouLeft), i.isFalsy(e[0].onYouJoined) || (this.onYouJoined = e[0].onYouJoined), i.isFalsy(e[0].onUserJoined) || (this.onUserJoined = e[0].onUserJoined), i.isFalsy(e[0].onUserLeft) || (this.onUserLeft = e[0].onUserLeft), i.isFalsy(e[0].onUserListUpdated) || (this.onUserListUpdated = e[0].onUserListUpdated), i.isFalsy(e[0].onMediaDeviceListUpdated) || (this.onMediaDeviceListUpdated = e[0].onMediaDeviceListUpdated), i.isFalsy(e[0].onRecordingStarted) || (this.onRecordingStarted = e[0].onRecordingStarted), i.isFalsy(e[0].onRecordingStopped) || (this.onRecordingStopped = e[0].onRecordingStopped), i.isFalsy(e[0].onScreenShareStarted) || (this.onScreenShareStarted = e[0].onScreenShareStarted), i.isFalsy(e[0].onScreenShareStopped) || (this.onScreenShareStopped = e[0].onScreenShareStopped), i.isFalsy(e[0].onUserMuted) || (this.onUserMuted = e[0].onUserMuted), i.isFalsy(e[0].onCallEnded) || (this.onCallEnded = e[0].onCallEnded), i.isFalsy(e[0].onError) || (this.onError = e[0].onError)
                };
                t.LoginListener = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    i.isFalsy(e[0].loginSuccess) || (this.loginSuccess = e[0].loginSuccess), i.isFalsy(e[0].loginFailure) || (this.loginFailure = e[0].loginFailure), i.isFalsy(e[0].logoutSuccess) || (this.logoutSuccess = e[0].logoutSuccess), i.isFalsy(e[0].logoutFailure) || (this.logoutFailure = e[0].logoutFailure)
                };
                t.ConnectionListener = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this.onConnected = void 0, this.inConnecting = void 0, this.onDisconnected = void 0, this.onFeatureThrottled = void 0, i.isFalsy(e[0].onConnected) || (this.onConnected = e[0].onConnected), i.isFalsy(e[0].inConnecting) || (this.inConnecting = e[0].inConnecting), i.isFalsy(e[0].onDisconnected) || (this.onDisconnected = e[0].onDisconnected), i.isFalsy(e[0].onFeatureThrottled) || (this.onFeatureThrottled = e[0].onFeatureThrottled)
                };
                var s = function (e, t) {
                    this._name = e, this._callback = t
                }, a = function (e) {
                    function t(t, n, r, o) {
                        var i = e.call(this, t, o) || this;
                        return i._eventListener = n, r && (i._cursor = r), i
                    }

                    return o(t, e), t
                }(t.Listener = s);
                t.MessagesListener = a;
                var u = function (e) {
                    function t(t, n, r, o) {
                        var i = e.call(this, t, o) || this;
                        return i._eventListener = n, r && (i._cursor = r), i
                    }

                    return o(t, e), t
                }(s);
                t.UsersListener = u;
                var c = function (e) {
                    function t(t, n, r, o) {
                        var i = e.call(this, t, o) || this;
                        return i._eventListener = n, r && (i._cursor = r), i
                    }

                    return o(t, e), t
                }(s);
                t.GroupsListener = c;
                var l = function (e) {
                    function t(t, n, r) {
                        var o = e.call(this, "callListner", r) || this;
                        return o._eventListener = t, o
                    }

                    return o(t, e), t
                }(s);
                t.UserCallListener = l;
                var E = function (e) {
                    function t(t, n, r, o) {
                        var i = e.call(this, t, o) || this;
                        return i._eventListener = n, i
                    }

                    return o(t, e), t
                }(s);
                t.CallsListener = E;
                var p = function (e) {
                    function t(t, n, r, o) {
                        var i = e.call(this, t, o) || this;
                        return i._eventListener = n, r && (i._cursor = r), i
                    }

                    return o(t, e), t
                }(s);
                t.UserLoginListener = p;
                var d = function (e) {
                    function t(t, n, r, o) {
                        var i = e.call(this, t, o) || this;
                        return i._eventListener = n, r && (i._cursor = r), i
                    }

                    return o(t, e), t
                }(s);
                t.WSConnectionListener = d
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.ConversationController = void 0;
                var r = n(35), o = n(0), i = function () {
                    function e() {
                    }

                    return e.trasformJSONConversation = function (e, t, n, i, s, a) {
                        var u;
                        try {
                            u = new r.Conversation(e, t, n, i, s, a)
                        } catch (e) {
                            o.Logger.error("ConversationController:transformJSONConversation", e)
                        }
                        return u
                    }, e
                }();
                t.ConversationController = i
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.MessageListnerMaping = void 0;
                var r = n(0), o = n(1), i = n(13), s = n(3), a = function () {
                    function e(e) {
                        this.store = o.constants.DEFAULT_STORE, r.isFalsy(e) || (this.store = e), this.settingsStore = i.createInstance({name: r.format(o.LOCAL_STORE.STORE_STRING, s.CometChat.getAppId(), o.LOCAL_STORE.MESSAGE_LISTENERS_LIST)}), this.settingsStore.setDriver([i.LOCALSTORAGE, i.INDEXEDDB, i.WEBSQL])
                    }

                    return e.getInstance = function () {
                        return null == e.settingsStore && (e.settingsStore = new e), e.settingsStore
                    }, e.prototype.set = function (e, t) {
                        return this.settingsStore.setItem(e, t)
                    }, e.prototype.remove = function (e) {
                        this.settingsStore.removeItem(e)
                    }, e.prototype.get = function (e) {
                        return this.settingsStore.getItem(e)
                    }, e.prototype.clearStore = function () {
                        return this.settingsStore.clear()
                    }, e.prototype.clear = function (e) {
                    }, e.prototype.selectStore = function (e) {
                        this.store = e
                    }, e.settingsStore = null, e
                }();
                t.MessageListnerMaping = a
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.TypingIndicator = void 0;
                var r = function () {
                    function e(e, t, n) {
                        this.receiverId = e, this.receiverType = t, this.metadata = n
                    }

                    return e.prototype.getReceiverType = function () {
                        return this.receiverType
                    }, e.prototype.setReceiverType = function (e) {
                        this.receiverType = e
                    }, e.prototype.getReceiverId = function () {
                        return this.receiverId
                    }, e.prototype.setReceiverId = function (e) {
                        this.receiverId = e
                    }, e.prototype.getMetadata = function () {
                        return this.metadata
                    }, e.prototype.setMetadata = function (e) {
                        this.metadata = e
                    }, e.prototype.getSender = function () {
                        return this.sender
                    }, e.prototype.setSender = function (e) {
                        this.sender = e
                    }, e
                }();
                t.TypingIndicator = r
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.TransientMessage = void 0;
                var r = function () {
                    function e(e, t, n) {
                        this.receiverId = e, this.receiverType = t, this.data = n || {}
                    }

                    return e.prototype.getReceiverId = function () {
                        return this.receiverId
                    }, e.prototype.setReceiverId = function (e) {
                        this.receiverId = e
                    }, e.prototype.getReceiverType = function () {
                        return this.receiverType
                    }, e.prototype.setReceiverType = function (e) {
                        this.receiverType = e
                    }, e.prototype.getData = function () {
                        return this.data
                    }, e.prototype.setData = function (e) {
                        this.data = e
                    }, e.prototype.getSender = function () {
                        return this.sender
                    }, e.prototype.setSender = function (e) {
                        this.sender = e
                    }, e
                }();
                t.TransientMessage = r
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.EndpointFactory = void 0;
                var r = n(0), o = n(1), i = n(12), s = n(3), a = n(2), u = function () {
                    function e() {
                        this.baseUrl = "https://%s.apiclient-%s.cometchat.io/", this.apiVersion = o.APPINFO.apiVersion, this.adminApiUrl = "https://%s.api-%s.cometchat.io/", this.adminApiVersion = o.APPINFO.apiVersion, this.extensionApi = "https://%s-%s.cometchat.io/%s", this.prosodyApi = "https://%s.%s/%s", this.wsApi = "https://%s/%s", this.uriEndpoints = {
                            authToken: {
                                endpoint: "users/{{uid}}/auth_tokens",
                                method: "POST",
                                data: {uid: "string|max:100"},
                                isAdminApi: !0
                            },
                            appSettings: {endpoint: "settings", method: "GET"},
                            login: {endpoint: "admin/users/auth", method: "POST", data: {uid: "string|max:100"}},
                            logout: {endpoint: "admin/users/auth/{{authToken}}", method: "DELETE"},
                            getMyDetails: {endpoint: "me", method: "GET"},
                            updateMyDetails: {endpoint: "me", method: "PUT"},
                            getJWT: {endpoint: "me/jwt", method: "POST"},
                            users: {endpoint: "users", method: "GET"},
                            user: {endpoint: "users/{{uid}}", method: "GET"},
                            blockUsers: {endpoint: "blockedusers", method: "POST"},
                            blockedUsersList: {endpoint: "blockedusers", method: "GET"},
                            unblockUsers: {endpoint: "blockedusers", method: "DELETE"},
                            userLogout: {endpoint: "me", method: "DELETE"},
                            createUser: {endpoint: "users", method: "POST", isAdminApi: !0},
                            updateUser: {endpoint: "users/{{uid}}", method: "PUT", isAdminApi: !0},
                            sendFriendRequests: {
                                endpoint: "user/friends",
                                method: "POST",
                                data: {uids: "array<string|max:100>"}
                            },
                            getFriends: {endpoint: "user/friends", method: "GET"},
                            unfriend: {
                                endpoint: "user/friends/{{uid}}/{{gid}}",
                                method: "DELETE",
                                data: {uids: "array<string|max:100>"}
                            },
                            acceptFriendRequest: {
                                endpoint: "user/friends/{{uid}}/accept",
                                method: "PUT",
                                data: {uids: "array<string|max:100>"}
                            },
                            rejectFriendRequest: {
                                endpoint: "user/friends/{{uid}}/reject",
                                method: "DELETE",
                                data: {uids: "array<string|max:100>"}
                            },
                            createGroup: {
                                endpoint: "groups",
                                method: "POST",
                                data: {
                                    guid: "required|string|max:100",
                                    name: "required|string|max:100",
                                    type: "enum|public,protected,password",
                                    password: "filled|string|max:100"
                                }
                            },
                            getGroups: {endpoint: "groups", method: "GET"},
                            getGroup: {endpoint: "groups/{{guid}}", method: "GET"},
                            updateGroup: {endpoint: "groups/{{guid}}", method: "PUT"},
                            deleteGroup: {endpoint: "groups/{{guid}}", method: "DELETE"},
                            addGroupMembers: {
                                endpoint: "groups/{{guid}}/members",
                                method: "POST",
                                data: {uids: "array<string|max:100>"}
                            },
                            getGroupMembers: {endpoint: "groups/{{guid}}/members", method: "GET"},
                            joinGroup: {endpoint: "groups/{{guid}}/members", method: "POST"},
                            leaveGroup: {endpoint: "groups/{{guid}}/members", method: "DELETE"},
                            kickGroupMembers: {
                                endpoint: "groups/{{guid}}/members/{{uid}}",
                                method: "DELETE",
                                data: {uids: "array<string|max:100>"}
                            },
                            changeScopeOfMember: {
                                endpoint: "groups/{{guid}}/members/{{uid}}",
                                method: "PUT",
                                data: {uids: "array<string|max:100>"}
                            },
                            banGroupMember: {
                                endpoint: "groups/{{guid}}/bannedusers/{{uid}}",
                                method: "POST",
                                data: {uids: "array<string|max:100>"}
                            },
                            unbanGroupMember: {
                                endpoint: "groups/{{guid}}/bannedusers/{{uid}}",
                                method: "DELETE",
                                data: {uids: "array<string|max:100>"}
                            },
                            addMemebersToGroup: {endpoint: "groups/{{guid}}/members", method: "PUT"},
                            getBannedGroupMembers: {endpoint: "groups/{{guid}}/bannedusers", method: "GET"},
                            promotemoteGroupMember: {
                                endpoint: "groups/{{guid}}/promote",
                                method: "PUT",
                                data: {uids: "array<string|max:100>"}
                            },
                            demoteGroupMember: {
                                endpoint: "groups/{{guid}}/demote",
                                method: "DELETE",
                                data: {uids: "array<string|max:100>"}
                            },
                            transferOwnership: {endpoint: "groups/{{guid}}/owner", method: "PATCH"},
                            sendMessage: {
                                endpoint: "messages",
                                method: "POST",
                                data: {
                                    sender: "array:string:max:100>",
                                    isGroupMember: "filled|boolean|bail",
                                    data: "required|json"
                                }
                            },
                            sendMessageInThread: {
                                endpoint: "messages/{{parentId}}/thread",
                                method: "POST",
                                data: {
                                    sender: "array:string:max:100>",
                                    isGroupMember: "filled|boolean|bail",
                                    data: "required|json"
                                }
                            },
                            getMessages: {endpoint: "messages", method: "GET"},
                            getMessageDetails: {endpoint: "messages/{{messageId}}", method: "GET"},
                            getUserMessages: {endpoint: "users/{{listId}}/messages", method: "GET"},
                            getGroupMessages: {endpoint: "groups/{{listId}}/messages", method: "GET"},
                            getThreadMessages: {endpoint: "messages/{{listId}}/thread", method: "GET"},
                            getMessage: {endpoint: "user/messages/{{muid}}", method: "GET"},
                            updateMessage: {endpoint: "messages/{{messageId}}", method: "PUT"},
                            deleteMessage: {endpoint: "messages/{{messageId}}", method: "DELETE"},
                            createCallSession: {endpoint: "calls", method: "POST", data: {}},
                            updateCallSession: {endpoint: "calls/{{sessionid}}", method: "put", data: {}},
                            getConversations: {endpoint: "conversations", method: "GET"},
                            getUserConversation: {endpoint: "users/{{uid}}/conversation", method: "GET"},
                            getGroupConversation: {endpoint: "groups/{{guid}}/conversation", method: "GET"},
                            deleteUserConversation: {endpoint: "users/{{uid}}/conversation", method: "DELETE"},
                            deleteGroupConversation: {endpoint: "groups/{{guid}}/conversation", method: "DELETE"},
                            updateUserConversation: {endpoint: "users/{{uid}}/conversation", method: "PUT"},
                            updateGroupConversation: {endpoint: "groups/{{guid}}/conversation", method: "PUT"}
                        }
                    }

                    return e.prototype.getEndpointData = function (t) {
                        return new Promise((function (n, u) {
                            try {
                                i.LocalStorage.getInstance().get(o.LOCAL_STORE.KEY_APP_SETTINGS).then((function (i) {
                                    if (r.isFalsy(i)) {
                                        var a = {};
                                        if ((new e).uriEndpoints.hasOwnProperty(t)) if ((a = (new e).uriEndpoints[t]).hasOwnProperty("isAdminApi")) {
                                            var u = r.format((new e).adminApiUrl, s.CometChat.getAppId(), s.CometChat.appSettings.getRegion()) + (new e).adminApiVersion + "/" + a.endpoint;
                                            a.endpoint = u
                                        } else u = r.format((new e).baseUrl, s.CometChat.getAppId(), s.CometChat.appSettings.getRegion()) + (new e).apiVersion + "/" + a.endpoint, a.endpoint = u;
                                        n(a)
                                    } else a = {}, (new e).uriEndpoints.hasOwnProperty(t) && ((a = (new e).uriEndpoints[t]).hasOwnProperty("isAdminApi") ? a.endpoint = "https://" + i[o.APP_SETTINGS.KEYS.ADMIN_API_HOST] + "/" + (new e).adminApiVersion + "/" + a.endpoint : (u = "https://" + i[o.APP_SETTINGS.KEYS.CLIENT_API_HOST] + "/" + (new e).apiVersion + "/" + a.endpoint, a.endpoint = u)), n(a)
                                }), (function (o) {
                                    var i;
                                    (new e).uriEndpoints.hasOwnProperty(t) && ((i = (new e).uriEndpoints[t]).hasOwnProperty(["isAdminApi"]) ? i.endpoint = r.format((new e).adminApiUrl, s.CometChat.getAppId(), s.CometChat.appSettings.getRegion()) + (new e).adminApiVersion + "/" + i.endpoint : i.endpoint = r.format((new e).baseUrl, s.CometChat.getAppId(), s.CometChat.appSettings.getRegion()) + (new e).apiVersion + "/" + i.endpoint), n(i)
                                }))
                            } catch (e) {
                                u(new a.CometChatException(e))
                            }
                        }))
                    }, e
                }();
                t.EndpointFactory = u
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.getEndPoint = void 0;
                var r = n(28), o = n(2);
                t.getEndPoint = function (e, t) {
                    void 0 === e && (e = ""), void 0 === t && (t = {});
                    var n = new r.EndpointFactory;
                    return new Promise((function (r, i) {
                        try {
                            n.getEndpointData(e).then((function (e) {
                                var n = e;
                                if (n) {
                                    for (var o in t) n.endpoint = n.endpoint.replace("{{" + o + "}}", t[o]);
                                    r(n)
                                } else i({error: "Unknown endPoint name."})
                            }))
                        } catch (e) {
                            i(new o.CometChatException(e))
                        }
                    }))
                }
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.KeyStore = void 0;
                var r = n(3), o = n(0), i = n(1), s = n(13), a = n(2), u = function () {
                    function e(e) {
                        this.store = i.constants.DEFAULT_STORE, o.isFalsy(e) || (this.store = e), this.keyStore = s.createInstance({name: o.format(i.LOCAL_STORE.STORE_STRING, r.CometChat.getAppId(), i.LOCAL_STORE.KEYS_STORE)}), this.keyStore.setDriver([s.LOCALSTORAGE, s.INDEXEDDB, s.WEBSQL])
                    }

                    return e.getInstance = function () {
                        return null == e.KeyStore && (e.KeyStore = new e), e.KeyStore
                    }, e.prototype.set = function (e, t) {
                        return this.keyStore.setItem(e, t)
                    }, e.prototype.remove = function (e) {
                        this.keyStore.removeItem(e)
                    }, e.prototype.get = function (e) {
                        var t = this;
                        return new Promise((function (n, r) {
                            try {
                                t.keyStore.getItem(e).then((function (e) {
                                    try {
                                        n(JSON.parse(e))
                                    } catch (t) {
                                        n(e)
                                    }
                                }), (function (e) {
                                    r(e)
                                }))
                            } catch (e) {
                                r(new a.CometChatException(e))
                            }
                        }))
                    }, e.prototype.clearStore = function () {
                        return this.keyStore.clear()
                    }, e
                }();
                t.KeyStore = u
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.CallController = void 0;
                var r = n(1), o = n(0), i = n(3), s = n(2), a = n(23), u = n(12), c = n(32), l = n(4), E = function () {
                    function e() {
                        this.TAG = "calling Log", this.CALL_NO_ANSWER_INTERVAL = 45e3, this.view = void 0, this.isDev = !1
                    }

                    return e.prototype.getCallListner = function () {
                        return e.callListner
                    }, e.prototype.setCallListner = function (t) {
                        e.callListner = new a.UserCallListener(t)
                    }, e.getInstance = function () {
                        try {
                            return null != this.callController && null != this.callController || (this.callController = new e), this.callController
                        } catch (e) {
                            o.Logger.error("CallController: getInstance", e)
                        }
                    }, e.prototype.getActiveCall = function () {
                        try {
                            return o.isFalsy(this.call) ? null : this.call
                        } catch (e) {
                            o.Logger.error("CallController: getActiveCall", e)
                        }
                    }, e.prototype.initiateCall = function (e) {
                        var t = this;
                        return new Promise((function (n, i) {
                            try {
                                o.isFalsy(t.call) ? null != e && null != e ? (t.call = e, t.startCallTimer(), n(e)) : i(new s.CometChatException(r.CALL_ERROR.ERROR_IN_CALLING)) : i(new s.CometChatException(r.CALL_ERROR.CALL_ALREADY_INITIATED))
                            } catch (n) {
                                i(new s.CometChatException(n))
                            }
                        }))
                    }, e.prototype.endCall = function (e) {
                        var t = this;
                        try {
                            document.getElementsByName("frame").forEach((function (e) {
                                t.view && (t.view.removeChild(e), t.view = void 0)
                            })), this.endCallSession()
                        } catch (e) {
                            o.Logger.error("CallController: endCall", e)
                        }
                    }, e.prototype.onCallStarted = function (e) {
                        var t = this;
                        return new Promise((function (n, i) {
                            try {
                                o.isFalsy(t.call) ? null != e && null != e ? n(t.call = e) : i(new s.CometChatException(r.CALL_ERROR.ERROR_IN_CALLING)) : i(new s.CometChatException(r.CALL_ERROR.CALL_ALREADY_INITIATED))
                            } catch (n) {
                                i(new s.CometChatException(n))
                            }
                        }))
                    }, e.prototype.endCallSession = function () {
                        try {
                            this.call = void 0, e.callController = void 0, this.timer && this.stopCallTimer(), this.view = void 0, this.removeListener(), e.callScreen = null, e.callSettings = null
                        } catch (e) {
                            o.Logger.error("CallController:EndCallSession", {e})
                        }
                    }, e.prototype.startCallTimer = function () {
                        var e = this;
                        try {
                            this.timer = setTimeout((function () {
                                e.call ? i.CometChat.sendUnansweredResponse(e.call.getSessionId()).then((function (t) {
                                    e.endCallSession()
                                }), (function (t) {
                                    e.endCallSession()
                                })) : e.endCallSession()
                            }), this.CALL_NO_ANSWER_INTERVAL)
                        } catch (e) {
                            o.Logger.error("CallController: startCallTimer", e)
                        }
                    }, e.prototype.stopCallTimer = function () {
                        try {
                            clearTimeout(this.timer)
                        } catch (e) {
                            o.Logger.error("CallController: stopCallTimer", e)
                        }
                    }, e.prototype.startCall = function (t, n) {
                        var r = this;
                        try {
                            this.timer && this.stopCallTimer();
                            var i = document.createElement("iframe");
                            this.getCallUrl().then((function (o) {
                                i.src = o + "", i.name = "frame", i.setAttribute("allow", "camera; microphone; display-capture;"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"), e.callScreen = i, e.callSettings = t, n && (r.view = n), n.appendChild(i), r.addListener()
                            }))
                        } catch (e) {
                            o.Logger.error("CallController: startCall", e)
                        }
                    }, e.prototype.addListener = function () {
                        window.addEventListener("message", this.handler, !0)
                    }, e.prototype.removeListener = function () {
                        window.removeEventListener("message", this.handler, !0)
                    }, e.prototype.handler = function (t) {
                        var n, s = this, a = e.callSettings, u = e.callScreen, c = e.getInstance().getActiveCall();
                        try {
                            if (void 0 !== (n = JSON.parse(t.data)) && n.type == r.CallConstants.POST_MESSAGES.TYPES.HANGUP) e.deviceList = null, c ? (o.Logger.info(this.TAG, e.callListner), window.setTimeout((function () {
                                i.CometChat.endCall(c.getSessionId(), !0).then((function (e) {
                                    o.Logger.info(s.TAG, {call: e})
                                })).catch((function (e) {
                                    o.Logger.info(s.TAG, "The Call Was Already Ended")
                                }))
                            }), 1e3)) : i.CometChat.endCall(a.getSessionId(), !0).then((function (e) {
                                o.Logger.info(s.TAG, {call: e})
                            })).catch((function (e) {
                                o.Logger.info(s.TAG, "The Call Was Already Ended")
                            })); else if (void 0 !== n && n.type == r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && n.action == r.CallConstants.POST_MESSAGES.ACTIONS.USER_JOINED) {
                                if (n.value) {
                                    var E = void 0, p = n.value;
                                    o.isFalsy(p.uid) || o.isFalsy(p.name) || ((E = new l.User(p)).setStatus("online"), i.CometChat.user.getUid().toLowerCase() != E.getUid().toLowerCase() && e.callListner && (o.isFalsy(e.callListner._eventListener.onUserJoined) || e.callListner._eventListener.onUserJoined(E)))
                                }
                            } else if (void 0 !== n && n.type == r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && n.action == r.CallConstants.POST_MESSAGES.ACTIONS.USER_LEFT) n.value && (E = void 0, p = n.value, o.isFalsy(p.uid) || o.isFalsy(p.name) || ((E = new l.User(p)).setStatus("online"), i.CometChat.user.getUid().toLowerCase() != E.getUid().toLowerCase() && e.callListner && (o.isFalsy(e.callListner._eventListener.onUserLeft) || e.callListner._eventListener.onUserLeft(E)))); else if (void 0 !== n && n.type == r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && n.action == r.CallConstants.POST_MESSAGES.ACTIONS.USER_LIST_CHANGED) {
                                var d = [];
                                n.value && 0 < n.value.length && (n.value.map((function (e) {
                                    if (!o.isFalsy(e.uid) && !o.isFalsy(e.name)) {
                                        var t = new l.User(e);
                                        t.setStatus("online"), d.push(t)
                                    }
                                })), e.callListner && (o.isFalsy(e.callListner._eventListener.onUserListUpdated) || e.callListner._eventListener.onUserListUpdated(d)))
                            } else if (void 0 !== n && n.type == r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && n.action == r.CallConstants.POST_MESSAGES.ACTIONS.INITIAL_DEVICE_LIST) o.Logger.info("initialDeviceList received in SDK = ", n), n.value && (e.deviceList = n.value); else if (void 0 !== n && n.type == r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && n.action == r.CallConstants.POST_MESSAGES.ACTIONS.DEVICE_CHANGE) {
                                if (o.Logger.info("onDeviceChange received in SDK = ", n), n.value) {
                                    e.deviceList = n.value;
                                    var f = e.getAvailableDeviceObject(e.deviceList);
                                    e.callListner && (o.isFalsy(e.callListner._eventListener.onMediaDeviceListUpdated) || e.callListner._eventListener.onMediaDeviceListUpdated(f))
                                }
                            } else if (void 0 !== n && n.type == r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && n.action == r.CallConstants.POST_MESSAGES.ACTIONS.RECORDING_TOGGLED) {
                                if (o.Logger.info("onRecordingToggled received in SDK = ", n), n.value && (g = n.value).hasOwnProperty("user") && g.hasOwnProperty("recordingStarted") && !o.isFalsy(g.user.uid) && !o.isFalsy(g.user.name)) {
                                    var S = new l.User(g.user);
                                    S.setStatus("online");
                                    var h = g.recordingStarted;
                                    e.callListner && (h ? o.isFalsy(e.callListner._eventListener.onRecordingStarted) || e.callListner._eventListener.onRecordingStarted(S) : o.isFalsy(e.callListner._eventListener.onRecordingStopped) || e.callListner._eventListener.onRecordingStopped(S))
                                }
                            } else if (void 0 !== n && n.type == r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && n.action == r.CallConstants.POST_MESSAGES.ACTIONS.USER_MUTED) {
                                var g;
                                if (o.Logger.info("onUserMuted received in SDK = ", n), n.value && (g = n.value).hasOwnProperty("muted") && g.hasOwnProperty("mutedBy") && !o.isFalsy(g.muted.uid) && !o.isFalsy(g.muted.name) && !o.isFalsy(g.mutedBy.uid) && !o.isFalsy(g.mutedBy.name)) {
                                    var C = new l.User(g.muted);
                                    C.setStatus("online");
                                    var T = new l.User(g.mutedBy);
                                    T.setStatus("online"), e.callListner && (o.isFalsy(e.callListner._eventListener.onUserMuted) || e.callListner._eventListener.onUserMuted(C, T))
                                }
                            } else void 0 !== n && n.type == r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && n.action == r.CallConstants.POST_MESSAGES.ACTIONS.SCREEN_SHARE_STARTED ? e.callListner && (o.isFalsy(e.callListner._eventListener.onScreenShareStarted) || e.callListner._eventListener.onScreenShareStarted(null)) : void 0 !== n && n.type == r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && n.action == r.CallConstants.POST_MESSAGES.ACTIONS.SCREEN_SHARE_STOPPED ? e.callListner && (o.isFalsy(e.callListner._eventListener.onScreenShareStopped) || e.callListner._eventListener.onScreenShareStopped(null)) : void 0 !== n && n.type && n.action && n.type == r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && n.action == r.CallConstants.POST_MESSAGES.ACTIONS.LOAD && null != u.contentWindow && u.contentWindow.postMessage({
                                type: r.CallConstants.POST_MESSAGES.TYPES.COMETCHAT_RTC_SETTINGS,
                                callsettings: JSON.stringify(a)
                            }, "*")
                        } catch (t) {
                            n = void 0, o.Logger.error("CallController: startCall", t)
                        }
                    }, e.prototype.getCallUrl = function () {
                        var e = this, t = void 0;
                        return new Promise((function (n, i) {
                            try {
                                e.isDev ? (t = "http://localhost:3000/?v=" + r.CALLING_COMPONENT_VERSION, n(t)) : u.LocalStorage.getInstance().get(r.LOCAL_STORE.KEY_APP_SETTINGS).then((function (e) {
                                    if (o.isFalsy(e)) o.getAppSettings().then((function (e) {
                                        var o = "rtc-web" + e[r.APP_SETTINGS.KEYS.WEBRTC_HOST].slice(3);
                                        t = "https://" + o + "/?v=" + r.CALLING_COMPONENT_VERSION, n(t)
                                    })); else {
                                        var i = "rtc-web" + e[r.APP_SETTINGS.KEYS.WEBRTC_HOST].slice(3);
                                        t = "https://" + i + "/?v=" + r.CALLING_COMPONENT_VERSION, n(t)
                                    }
                                }))
                            } catch (e) {
                                i(new s.CometChatException(e))
                            }
                        }))
                    }, e.getAvailableDeviceArray = function (e) {
                        var t = [];
                        try {
                            return e && 0 < e.length && e.map((function (e) {
                                t.push(new c.MediaDevice(e.deviceId, e.label, e.active))
                            })), t
                        } catch (e) {
                            return o.Logger.error("CallController: getAvailableDeviceArray", e), t
                        }
                    }, e.getAvailableDeviceObject = function (t) {
                        var n = [], i = [], s = [];
                        try {
                            return o.isFalsy(t) || o.isFalsy(t[r.CallConstants.AUDIO_INPUT_DEVICES]) || (n = e.getAvailableDeviceArray(t[r.CallConstants.AUDIO_INPUT_DEVICES])), o.isFalsy(t) || o.isFalsy(t[r.CallConstants.AUDIO_OUTPUT_DEVICES]) || (i = e.getAvailableDeviceArray(t[r.CallConstants.AUDIO_OUTPUT_DEVICES])), o.isFalsy(t) || o.isFalsy(t[r.CallConstants.VIDEO_INPUT_DEVICES]) || (s = e.getAvailableDeviceArray(t[r.CallConstants.VIDEO_INPUT_DEVICES])), {
                                audioInputDevices: n,
                                audioOutputDevices: i,
                                videoInputDevices: s
                            }
                        } catch (t) {
                            return o.Logger.error("CallController: getAvailableDeviceObject", t), {
                                audioInputDevices: n,
                                audioOutputDevices: i,
                                videoInputDevices: s
                            }
                        }
                    }, e.prototype.getAudioInputDevices = function () {
                        var t = [];
                        try {
                            return o.isFalsy(e.deviceList) || o.isFalsy(e.deviceList[r.CallConstants.AUDIO_INPUT_DEVICES]) || (t = e.getAvailableDeviceArray(e.deviceList[r.CallConstants.AUDIO_INPUT_DEVICES])), t
                        } catch (e) {
                            return o.Logger.error("CallController: getAudioInputDevices", e), t
                        }
                    }, e.prototype.getAudioOutputDevices = function () {
                        var t = [];
                        try {
                            return o.isFalsy(e.deviceList) || o.isFalsy(e.deviceList[r.CallConstants.AUDIO_OUTPUT_DEVICES]) || (t = e.getAvailableDeviceArray(e.deviceList[r.CallConstants.AUDIO_OUTPUT_DEVICES])), t
                        } catch (e) {
                            return o.Logger.error("CallController: getAudioOutputDevices", e), t
                        }
                    }, e.prototype.getVideoInputDevices = function () {
                        var t = [];
                        try {
                            return o.isFalsy(e.deviceList) || o.isFalsy(e.deviceList[r.CallConstants.VIDEO_INPUT_DEVICES]) || (t = e.getAvailableDeviceArray(e.deviceList[r.CallConstants.VIDEO_INPUT_DEVICES])), t
                        } catch (e) {
                            return o.Logger.error("CallController: getVideoInputDevices", e), t
                        }
                    }, e.prototype.setAudioInputDevice = function (t) {
                        try {
                            if (e.callScreen && !o.isFalsy(t)) {
                                var n = e.getAvailableDeviceArray(e.deviceList[r.CallConstants.AUDIO_INPUT_DEVICES]).filter((function (e) {
                                    return e[r.CallConstants.MEDIA_DEVICE.ID] === t && !e[r.CallConstants.MEDIA_DEVICE.ACTIVE]
                                }));
                                n && 0 < n.length && e.callScreen.contentWindow.postMessage({
                                    type: r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                                    action: r.CallConstants.POST_MESSAGES.ACTIONS.CHANGE_AUDIO_INPUT,
                                    value: t
                                }, "*")
                            }
                        } catch (n) {
                            o.Logger.error("CallController: setAudioInputDevice", n)
                        }
                    }, e.prototype.setAudioOutputDevice = function (t) {
                        try {
                            if (e.callScreen && !o.isFalsy(t)) {
                                var n = e.getAvailableDeviceArray(e.deviceList[r.CallConstants.AUDIO_OUTPUT_DEVICES]).filter((function (e) {
                                    return e[r.CallConstants.MEDIA_DEVICE.ID] === t && !e[r.CallConstants.MEDIA_DEVICE.ACTIVE]
                                }));
                                n && 0 < n.length && e.callScreen.contentWindow.postMessage({
                                    type: r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                                    action: r.CallConstants.POST_MESSAGES.ACTIONS.CHANGE_AUDIO_OUTPUT,
                                    value: t
                                }, "*")
                            }
                        } catch (n) {
                            o.Logger.error("CallController: setAudioOutputDevice", n)
                        }
                    }, e.prototype.setVideoInputDevice = function (t) {
                        try {
                            if (e.callScreen && !o.isFalsy(t)) {
                                var n = e.getAvailableDeviceArray(e.deviceList[r.CallConstants.VIDEO_INPUT_DEVICES]).filter((function (e) {
                                    return e[r.CallConstants.MEDIA_DEVICE.ID] === t && !e[r.CallConstants.MEDIA_DEVICE.ACTIVE]
                                }));
                                n && 0 < n.length && e.callScreen.contentWindow.postMessage({
                                    type: r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                                    action: r.CallConstants.POST_MESSAGES.ACTIONS.CHANGE_VIDEO_INPUT,
                                    value: t
                                }, "*")
                            }
                        } catch (n) {
                            o.Logger.error("CallController: setVideoInputDevice", n)
                        }
                    }, e.prototype.muteAudio = function (t) {
                        try {
                            e.callScreen && (t ? e.callScreen.contentWindow.postMessage({
                                type: r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                                action: r.CallConstants.POST_MESSAGES.ACTIONS.MUTE_AUDIO
                            }, "*") : e.callScreen.contentWindow.postMessage({
                                type: r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                                action: r.CallConstants.POST_MESSAGES.ACTIONS.UNMUTE_AUDIO
                            }, "*"))
                        } catch (t) {
                            o.Logger.error("CallController: muteAudio", t)
                        }
                    }, e.prototype.pauseVideo = function (t) {
                        try {
                            e.callScreen && (t ? e.callScreen.contentWindow.postMessage({
                                type: r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                                action: r.CallConstants.POST_MESSAGES.ACTIONS.PAUSE_VIDEO
                            }, "*") : e.callScreen.contentWindow.postMessage({
                                type: r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                                action: r.CallConstants.POST_MESSAGES.ACTIONS.UNPAUSE_VIDEO
                            }, "*"))
                        } catch (t) {
                            o.Logger.error("CallController: pauseVideo", t)
                        }
                    }, e.prototype.setMode = function (t) {
                        try {
                            e.callScreen && !o.isFalsy(t) && (t = t.toUpperCase(), -1 < Object.values(r.CallConstants.CALL_MODE).indexOf(t) && t != r.CallConstants.CALL_MODE.SINGLE && e.callScreen.contentWindow.postMessage({
                                type: r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                                action: r.CallConstants.POST_MESSAGES.ACTIONS.SWITCH_MODE,
                                value: t
                            }, "*"))
                        } catch (t) {
                            o.Logger.error("CallController: setMode", t)
                        }
                    }, e.prototype.startScreenShare = function () {
                        try {
                            e.callScreen && e.callScreen.contentWindow.postMessage({
                                type: r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                                action: r.CallConstants.POST_MESSAGES.ACTIONS.START_SCREENSHARE
                            }, "*")
                        } catch (e) {
                            o.Logger.error("CallController: startScreenShare", e)
                        }
                    }, e.prototype.stopScreenShare = function () {
                        try {
                            e.callScreen && e.callScreen.contentWindow.postMessage({
                                type: r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                                action: r.CallConstants.POST_MESSAGES.ACTIONS.STOP_SCREENSHARE
                            }, "*")
                        } catch (e) {
                            o.Logger.error("CallController: stopScreenShare", e)
                        }
                    }, e.prototype.startRecording = function () {
                        try {
                            e.callScreen && e.callScreen.contentWindow.postMessage({
                                type: r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                                action: r.CallConstants.POST_MESSAGES.ACTIONS.START_RECORDING
                            }, "*")
                        } catch (e) {
                            o.Logger.error("CallController: startRecording", e)
                        }
                    }, e.prototype.stopRecording = function () {
                        try {
                            e.callScreen && e.callScreen.contentWindow.postMessage({
                                type: r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                                action: r.CallConstants.POST_MESSAGES.ACTIONS.STOP_RECORDING
                            }, "*")
                        } catch (e) {
                            o.Logger.error("CallController: stopRecording", e)
                        }
                    }, e.prototype.endSession = function () {
                        try {
                            e.callScreen && e.callScreen.contentWindow.postMessage({
                                type: r.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                                action: r.CallConstants.POST_MESSAGES.ACTIONS.END_CALL
                            }, "*")
                        } catch (e) {
                            o.Logger.error("CallController: endSession", e)
                        }
                    }, e.callController = void 0, e.callListner = void 0, e
                }();
                t.CallController = E
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.MediaDevice = void 0;
                var r = n(0), o = function () {
                    function e(e, t, n) {
                        this.id = "", this.name = "", this.active = !1, r.isFalsy(e) || (this.id = e), r.isFalsy(t) || (this.name = t), this.active = !!n
                    }

                    return e.prototype.getId = function () {
                        return this.id
                    }, e.prototype.setId = function (e) {
                        this.id = e || ""
                    }, e.prototype.getName = function () {
                        return this.name
                    }, e.prototype.setName = function (e) {
                        this.name = e || ""
                    }, e.prototype.getIsActive = function () {
                        return this.active
                    }, e.prototype.setIsActive = function (e) {
                        this.active = !!e
                    }, e
                }();
                t.MediaDevice = o
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.GroupMembersController = void 0;
                var r = n(34), o = n(1), i = n(0), s = function () {
                    function e() {
                    }

                    return e.trasformJSONGroupMember = function (e) {
                        var t;
                        try {
                            return e.status && "offline" !== e.status ? e.status = "online" : e.status = "offline", t = new r.GroupMember(e[o.GroupMemersConstans.KEYS.UID]), Object.assign(t, e), t
                        } catch (t) {
                            return i.Logger.error("GroupMembersController:trasformJSONGroupMember", {
                                e: t,
                                groupMember: e
                            }), e
                        }
                    }, e
                }();
                t.GroupMembersController = s
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                t.__esModule = !0, t.GroupMember = void 0;
                var i = n(4), s = n(1), a = function (e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        return r.joinedAt = 0, n && (r.scope = n), r
                    }

                    return o(t, e), t.prototype.setScope = function (e) {
                        this.scope = e
                    }, t.prototype.setJoinedAt = function (e) {
                        this.joinedAt = e
                    }, t.prototype.setGuid = function (e) {
                        this.guid = e
                    }, t.prototype.getScope = function () {
                        return this.scope
                    }, t.prototype.getJoinedAt = function () {
                        return this.joinedAt
                    }, t.prototype.getGuid = function () {
                        return this.guid
                    }, t.GroupMemberScope = s.GroupMemberScope, t
                }(i.User);
                t.GroupMember = a
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.Conversation = void 0;
                var r = n(10), o = n(1), i = n(11), s = n(15), a = function () {
                    function e(e, t, n, a, u, c) {
                        this.conversationId = e, this.conversationType = t, this.tags = c, void 0 !== n && void 0 !== (this.lastMessage = n).id && (this.lastMessage = r.MessageController.trasformJSONMessge(n)), this.conversationType == o.MessageConstatnts.RECEIVER_TYPE.USER ? this.conversationWith = i.UsersController.trasformJSONUser(a) : this.conversationWith = s.GroupsController.trasformJSONGroup(a), this.unreadMessageCount = void 0 !== u ? u : 0
                    }

                    return e.prototype.setConversationId = function (e) {
                        this.conversationId = e
                    }, e.prototype.setConversationType = function (e) {
                        this.conversationType = e
                    }, e.prototype.setLastMessage = function (e) {
                        this.lastMessage = e
                    }, e.prototype.setConversationWith = function (e) {
                        this.conversationWith = e
                    }, e.prototype.setUnreadMessageCount = function (e) {
                        this.unreadMessageCount = e
                    }, e.prototype.getConversationId = function () {
                        return this.conversationId
                    }, e.prototype.getConversationType = function () {
                        return this.conversationType
                    }, e.prototype.getLastMessage = function () {
                        return this.lastMessage
                    }, e.prototype.getConversationWith = function () {
                        return this.conversationWith
                    }, e.prototype.getUnreadMessageCount = function () {
                        return this.unreadMessageCount
                    }, e.prototype.getTags = function () {
                        return this.tags
                    }, e
                }();
                t.Conversation = a
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.TypingNotificationController = void 0;
                var r = n(0), o = function () {
                    function e() {
                    }

                    return e.addTypingStarted = function (e) {
                        this.TYPING_STARTED_MAP[e] = r.getCurrentTime()
                    }, e.removeTypingStarted = function (e) {
                        delete this.TYPING_STARTED_MAP[e]
                    }, e.getTypingStartedMap = function (e) {
                        if (e) return this.TYPING_STARTED_MAP[e]
                    }, e.addTypingEnded = function (e) {
                        this.TYPING_ENDED_MAP[e] = r.getCurrentTime()
                    }, e.removeTypingEnded = function (e) {
                        delete this.TYPING_ENDED_MAP[e]
                    }, e.getTypingEndedMap = function (e) {
                        if (e) return this.TYPING_ENDED_MAP[e]
                    }, e.addIncomingTypingStarted = function (e) {
                        this.INCOMING_TYPING_STARTED_MAP[e.getReceiverId()] = {
                            typingNotification: e,
                            timestamp: r.getCurrentTime()
                        }
                    }, e.removeIncomingTypingStarted = function (e) {
                        delete this.INCOMING_TYPING_STARTED_MAP[e.getReceiverId()]
                    }, e.TYPING_STARTED_MAP = {}, e.TYPING_ENDED_MAP = {}, e.INCOMING_TYPING_STARTED_MAP = {}, e
                }();
                t.TypingNotificationController = o
            }, function (e, t, n) {
                "use strict";
                var r = this && this.__spreadArrays || function () {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    var r = Array(e), o = 0;
                    for (t = 0; t < n; t++) for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
                    return r
                };
                t.__esModule = !0, t.ListenerHandlers = void 0;
                var o = n(0), i = n(23), s = function () {
                    function e() {
                        this.connectionHandlers = [], this.loginHandlers = [], this.messageHandlers = [], this.userHandlers = [], this.groupHandlers = [], this.callHandlers = []
                    }

                    return e.getInstance = function () {
                        return null != this.listenerHandlers && null != this.listenerHandlers || (this.listenerHandlers = new e), this.listenerHandlers
                    }, e.prototype.addConnectionEventListener = function (e, t) {
                        try {
                            this.connectionHandlers = this.connectionHandlers.filter((function (t) {
                                return t._name != e
                            })), this.connectionHandlers = r(this.connectionHandlers, [new i.WSConnectionListener(e, t)])
                        } catch (t) {
                            o.Logger.error("ListenerHandlers: addWSConnectionEventListener", t)
                        }
                    }, e.prototype.removeConnectionEventListener = function (e) {
                        try {
                            this.connectionHandlers = this.connectionHandlers.filter((function (t) {
                                return t._name !== e
                            }))
                        } catch (e) {
                            o.Logger.error("ListenerHandlers: removeWSConnectionEventListener", e)
                        }
                    }, e.prototype.addLoginEventListener = function (e, t) {
                        try {
                            this.loginHandlers = this.loginHandlers.filter((function (t) {
                                return t._name != e
                            })), this.loginHandlers = r(this.loginHandlers, [new i.UserLoginListener(e, t)])
                        } catch (t) {
                            o.Logger.error("ListenerHandlers: addLoginEventListener", t)
                        }
                    }, e.prototype.removeLoginEventListener = function (e) {
                        try {
                            this.loginHandlers = this.loginHandlers.filter((function (t) {
                                return t._name !== e
                            }))
                        } catch (e) {
                            o.Logger.error("ListenerHandlers: removeLoginEventListener", e)
                        }
                    }, e.prototype.addMessageEventListener = function (e, t) {
                        try {
                            this.messageHandlers = this.messageHandlers.filter((function (t) {
                                return t._name != e
                            })), this.messageHandlers = r(this.messageHandlers, [new i.MessagesListener(e, t)])
                        } catch (t) {
                            o.Logger.error("ListenerHandlers: addMessageEventListener", t)
                        }
                    }, e.prototype.removeMessageEventListener = function (e) {
                        try {
                            this.messageHandlers = this.messageHandlers.filter((function (t) {
                                return t._name !== e
                            }))
                        } catch (e) {
                            o.Logger.error("ListenerHandlers: removeMessageEventListener", e)
                        }
                    }, e.prototype.addUserEventListener = function (e, t) {
                        try {
                            this.userHandlers = this.userHandlers.filter((function (t) {
                                return t._name != e
                            })), this.userHandlers = r(this.userHandlers, [new i.UsersListener(e, t)])
                        } catch (t) {
                            o.Logger.error("ListenerHandlers: addUserEventListener", t)
                        }
                    }, e.prototype.removeUserEventListener = function (e) {
                        try {
                            this.userHandlers = this.userHandlers.filter((function (t) {
                                return t._name !== e
                            }))
                        } catch (e) {
                            o.Logger.error("ListenerHandlers: removeUserEventListener", e)
                        }
                    }, e.prototype.addGroupEventListener = function (e, t) {
                        try {
                            this.groupHandlers = this.groupHandlers.filter((function (t) {
                                return t._name != e
                            })), this.groupHandlers = r(this.groupHandlers, [new i.GroupsListener(e, t)])
                        } catch (t) {
                            o.Logger.error("ListenerHandlers: addGroupEventListener", t)
                        }
                    }, e.prototype.removeGroupEventListener = function (e) {
                        try {
                            this.groupHandlers = this.groupHandlers.filter((function (t) {
                                return t._name !== e
                            }))
                        } catch (e) {
                            o.Logger.error("ListenerHandlers: removeGroupEventListener", e)
                        }
                    }, e.prototype.addCallEventListener = function (e, t) {
                        try {
                            this.callHandlers = this.callHandlers.filter((function (t) {
                                return t._name != e
                            })), this.callHandlers = r(this.callHandlers, [new i.CallsListener(e, t)])
                        } catch (t) {
                            o.Logger.error("ListenerHandlers: addCallEventListener", t)
                        }
                    }, e.prototype.removeCallEventListener = function (e) {
                        try {
                            this.callHandlers = this.callHandlers.filter((function (t) {
                                return t._name !== e
                            }))
                        } catch (e) {
                            o.Logger.error("ListenerHandlers: removeCallEventListener", e)
                        }
                    }, e.listenerHandlers = new e, e
                }();
                t.ListenerHandlers = s
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.CometChat = t.init = void 0;
                var r = n(3);
                t.init = function (e) {
                    return r.CometChat.getInstance(e)
                }, t.CometChat = r.CometChat
            }, function (e, t) {
                var n;
                n = function () {
                    return this
                }();
                try {
                    n = n || new Function("return this")()
                } catch (e) {
                    "object" == typeof window && (n = window)
                }
                e.exports = n
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.GroupsRequestBuilder = t.GroupsRequest = void 0;
                var r = n(6), o = n(0), i = n(2), s = n(15), a = n(1), u = function () {
                    function e(e) {
                        this.cursor = -1, this.total = -1, this.next_page = 1, this.last_page = -1, this.current_page = 1, this.total_pages = -1, this.hasJoined = 0, this.withTags = !1, this.pagination = {
                            total: 0,
                            count: 0,
                            per_page: 0,
                            current_page: 0,
                            total_pages: 0,
                            links: []
                        }, o.isFalsy(e) || (o.isFalsy(e.limit) || (this.limit = e.limit), o.isFalsy(e.searchKeyword) || (this.searchKeyword = e.searchKeyword), o.isFalsy(e.hasJoined) || (this.hasJoined = 1), o.isFalsy(e.tags) || (this.tags = e.tags), o.isFalsy(e.showTags) || (this.withTags = e.showTags))
                    }

                    return e.prototype.validateGroupBuilder = function () {
                        if (void 0 === this.limit) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
                        if (isNaN(this.limit)) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
                        if (this.limit > a.DEFAULT_VALUES.GROUPS_MAX_LIMIT) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", a.DEFAULT_VALUES.GROUPS_MAX_LIMIT)));
                        if (this.limit < a.DEFAULT_VALUES.ZERO) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
                        if (void 0 !== this.searchKeyword) {
                            if (typeof this.searchKeyword !== a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
                            if (o.isFalsy(this.searchKeyword.trim())) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.INVALID), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "search keyword", "search keyword")));
                            this.searchKeyword = this.searchKeyword.trim()
                        }
                        if (void 0 !== this.withTags) {
                            if (typeof this.withTags !== a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "WITH_TAGS", "WITH_TAGS", "withTags()")));
                            1 == this.withTags ? this.withTags = !0 : this.withTags = !1
                        }
                        return void 0 === this.tags || Array.isArray(this.tags) ? void 0 : new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "TAGS", "TAGS", "setTags()")))
                    }, e.prototype.fetchNext = function () {
                        var e = this;
                        return new Promise((function (t, n) {
                            try {
                                var o = e.validateGroupBuilder();
                                if (o instanceof i.CometChatException) return void n(o);
                                r.makeApiCall("getGroups", {}, e.getNextData()).then((function (n) {
                                    if (n.meta && (e.total_pages = n.meta.pagination.total_pages), 0 < n.data.length) {
                                        e.pagination = n.meta.pagination;
                                        var r = [];
                                        n.data.map((function (e, t) {
                                            r.push(s.GroupsController.trasformJSONGroup(e))
                                        })), t(r)
                                    }
                                    t([])
                                }), (function (e) {
                                    n(new i.CometChatException(e.error))
                                }))
                            } catch (o) {
                                n(new i.CometChatException(o))
                            }
                        }))
                    }, e.prototype.getNextData = function () {
                        var e = {};
                        if (e.per_page = this.limit, o.isFalsy(this.searchKeyword) || (e.searchKey = this.searchKeyword), o.isFalsy(this.hasJoined) || (e.hasJoined = 1), o.isFalsy(this.tags) || (e.tags = this.tags), o.isFalsy(this.withTags) || (e.withTags = 1), 1 == this.current_page) e.page = this.next_page, this.next_page++, this.current_page++; else {
                            if (this.next_page > this.total_pages) return e.page = this.next_page, e;
                            e.page = this.next_page++
                        }
                        return e
                    }, e.MAX_LIMIT = 100, e.DEFAULT_LIMIT = 30, e
                }();
                t.GroupsRequest = u;
                var c = function () {
                    function e() {
                    }

                    return e.prototype.setLimit = function (e) {
                        return this.limit = e, this
                    }, e.prototype.setSearchKeyword = function (e) {
                        return this.searchKeyword = e, this
                    }, e.prototype.joinedOnly = function (e) {
                        return this.hasJoined = e, this
                    }, e.prototype.setTags = function (e) {
                        return this.tags = e, this
                    }, e.prototype.withTags = function (e) {
                        return this.showTags = e, this
                    }, e.prototype.build = function () {
                        return new u(this)
                    }, e
                }();
                t.GroupsRequestBuilder = c
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.GroupMembersRequestBuilder = t.GroupMembersRequest = void 0;
                var r = n(6), o = n(0), i = n(12), s = n(2), a = n(33), u = n(1), c = function () {
                    function e(e) {
                        this.cursor = -1, this.total = -1, this.next_page = 1, this.last_page = -1, this.current_page = 1, this.total_pages = -1, this.pagination = {
                            total: 0,
                            count: 0,
                            per_page: 0,
                            current_page: 0,
                            total_pages: 0,
                            links: []
                        }, this.store = i.LocalStorage.getInstance(), o.isFalsy(e) || (this.limit = e.limit, this.guid = e.guid, o.isFalsy(e.searchKeyword) || (this.searchKeyword = e.searchKeyword), o.isFalsy(e.scopes) || (this.scopes = e.scopes))
                    }

                    return e.prototype.validateGroupMembersBuilder = function () {
                        if (void 0 === this.limit) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
                        if (isNaN(this.limit)) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
                        if (this.limit > u.DEFAULT_VALUES.USERS_MAX_LIMIT) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", u.DEFAULT_VALUES.USERS_MAX_LIMIT)));
                        if (this.limit < u.DEFAULT_VALUES.ZERO) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
                        if (void 0 !== this.searchKeyword) {
                            if (typeof this.searchKeyword !== u.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
                            if (o.isFalsy(this.searchKeyword.trim())) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.INVALID), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "search keyword", "search keyword")));
                            this.searchKeyword = this.searchKeyword.trim()
                        }
                        if (void 0 !== this.guid) {
                            if (typeof this.guid !== u.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "GUID", "GUID", "GroupMembersRequestBuilder()")));
                            if (o.isFalsy(this.guid)) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.INVALID), "GUID", "GUID", "GUID", "GUID")))
                        }
                        return void 0 === this.scopes || Array.isArray(this.scopes) ? void 0 : new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_SCOPES", "SET_SCOPES", "setScopes()")))
                    }, e.prototype.fetchNext = function () {
                        var e = this;
                        return new Promise((function (t, n) {
                            try {
                                var o = e.validateGroupMembersBuilder();
                                if (o instanceof s.CometChatException) return void n(o);
                                r.makeApiCall("getGroupMembers", {guid: e.guid}, e.getNextData()).then((function (n) {
                                    if (n.meta && (e.total_pages = n.meta.pagination.total_pages), 0 < n.data.length) {
                                        e.pagination = n.meta.pagination;
                                        var r = [];
                                        n.data.map((function (t) {
                                            t.guid = e.guid, r.push(a.GroupMembersController.trasformJSONGroupMember(t))
                                        })), t(r)
                                    } else t([])
                                }), (function (e) {
                                    n(new s.CometChatException(e.error))
                                }))
                            } catch (o) {
                                n(new s.CometChatException(o))
                            }
                        }))
                    }, e.prototype.getNextData = function () {
                        var e = {};
                        if (e.per_page = this.limit, o.isFalsy(this.searchKeyword) || (e.searchKey = this.searchKeyword), o.isFalsy(this.scopes) || (e.scopes = this.scopes), 1 == this.current_page) e.page = this.next_page, this.next_page++, this.current_page++; else {
                            if (this.next_page > this.total_pages) return e.page = this.next_page, e;
                            e.page = this.next_page++
                        }
                        return e
                    }, e.MAX_LIMIT = 2, e.DEFAULT_LIMIT = 1, e
                }();
                t.GroupMembersRequest = c;
                var l = function () {
                    function e(e) {
                        this.guid = e
                    }

                    return e.prototype.setLimit = function (e) {
                        return this.limit = e, this
                    }, e.prototype.setSearchKeyword = function (e) {
                        return this.searchKeyword = e, this
                    }, e.prototype.setScopes = function (e) {
                        return this.scopes = e, this
                    }, e.prototype.build = function () {
                        return new c(this)
                    }, e
                }();
                t.GroupMembersRequestBuilder = l
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.BannedMembersRequestBuilder = t.BannedMembersRequest = void 0;
                var r = n(6), o = n(0), i = n(2), s = n(33), a = n(1), u = function () {
                    function e(e) {
                        this.cursor = -1, this.total = -1, this.next_page = 1, this.last_page = -1, this.current_page = 1, this.total_pages = -1, this.pagination = {
                            total: 0,
                            count: 0,
                            per_page: 0,
                            current_page: 0,
                            total_pages: 0,
                            links: []
                        }, o.isFalsy(e) || (this.limit = e.limit, this.guid = e.guid, o.isFalsy(e.searchKeyword) || (this.searchKeyword = e.searchKeyword), o.isFalsy(e.scopes) || (this.scopes = e.scopes))
                    }

                    return e.prototype.validateBannedMembersBuilder = function () {
                        if (void 0 === this.limit) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
                        if (isNaN(this.limit)) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
                        if (this.limit > a.DEFAULT_VALUES.USERS_MAX_LIMIT) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", a.DEFAULT_VALUES.USERS_MAX_LIMIT)));
                        if (this.limit < a.DEFAULT_VALUES.ZERO) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
                        if (void 0 !== this.searchKeyword) {
                            if (typeof this.searchKeyword !== a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
                            if (o.isFalsy(this.searchKeyword.trim())) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.INVALID), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "search keyword", "search keyword")));
                            this.searchKeyword = this.searchKeyword.trim()
                        }
                        if (void 0 !== this.guid) {
                            if (typeof this.guid !== a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "GUID", "GUID", "GroupMembersRequestBuilder()")));
                            if (o.isFalsy(this.guid)) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.INVALID), "GUID", "GUID", "GUID", "GUID")))
                        }
                        return void 0 === this.scopes || Array.isArray(this.scopes) ? void 0 : new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_SCOPES", "SET_SCOPES", "setScopes()")))
                    }, e.prototype.fetchNext = function () {
                        var e = this;
                        return new Promise((function (t, n) {
                            try {
                                var o = e.validateBannedMembersBuilder();
                                if (o instanceof i.CometChatException) return void n(o);
                                r.makeApiCall("getBannedGroupMembers", {guid: e.guid}, e.getNextData()).then((function (n) {
                                    if (n.meta && (e.total_pages = n.meta.pagination.total_pages), 0 < n.data.length) {
                                        e.pagination = n.meta.pagination;
                                        var r = [];
                                        n.data.map((function (t) {
                                            t.guid = e.guid, r.push(s.GroupMembersController.trasformJSONGroupMember(t))
                                        })), t(r)
                                    } else t([])
                                }), (function (e) {
                                    n(new i.CometChatException(e.error))
                                }))
                            } catch (o) {
                                n(new i.CometChatException(o))
                            }
                        }))
                    }, e.prototype.getNextData = function () {
                        var e = {};
                        if (e.per_page = this.limit, o.isFalsy(this.searchKeyword) || (e.searchKey = this.searchKeyword), o.isFalsy(this.scopes) || (e.scopes = this.scopes), 1 == this.current_page) e.page = this.next_page, this.next_page++, this.current_page++; else {
                            if (this.next_page > this.total_pages) return e.page = this.next_page, e;
                            e.page = this.next_page++
                        }
                        return e
                    }, e.MAX_LIMIT = 2, e.DEFAULT_LIMIT = 1, e
                }();
                t.BannedMembersRequest = u;
                var c = function () {
                    function e(e) {
                        this.guid = e
                    }

                    return e.prototype.setLimit = function (e) {
                        return this.limit = e, this
                    }, e.prototype.setSearchKeyword = function (e) {
                        return this.searchKeyword = e, this
                    }, e.prototype.setScopes = function (e) {
                        return this.scopes = e, this
                    }, e.prototype.build = function () {
                        return new u(this)
                    }, e
                }();
                t.BannedMembersRequestBuilder = c
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.UsersRequestBuilder = t.UsersRequest = void 0;
                var r = n(6), o = n(0), i = n(11), s = n(2), a = n(44), u = n(1), c = function () {
                    function e(t) {
                        this.next_page = 1, this.current_page = 1, this.total_pages = -1, this.hideBlockedUsers = !1, this.friendsOnly = !1, this.fetchingInProgress = !1, this.withTags = !1, this.pagination = {
                            total: 0,
                            count: 0,
                            per_page: 0,
                            current_page: 0,
                            total_pages: 0,
                            links: []
                        }, e.userStore = a.UserStore.getInstance(), o.isFalsy(t) || (this.limit = t.limit, o.isFalsy(t.searchKeyword) || (this.searchKeyword = t.searchKeyword), o.isFalsy(t.status) || (t.status == e.USER_STATUS.ONLINE ? this.status = u.PresenceConstatnts.STATUS.AVAILABLE : this.status = t.status), o.isFalsy(t.shouldHideBlockedUsers) || (this.hideBlockedUsers = t.shouldHideBlockedUsers), o.isFalsy(t.showFriendsOnly) || (this.friendsOnly = t.showFriendsOnly), o.isFalsy(t.showTags) || (this.withTags = t.showTags), o.isFalsy(t.role) || (this.role = t.role), o.isFalsy(t.roles) || (this.roles = t.roles), o.isFalsy(t.tags) || (this.tags = t.tags), o.isFalsy(t.UIDs) || (this.UIDs = t.UIDs))
                    }

                    return e.prototype.validateUserBuilder = function () {
                        if (void 0 === this.limit) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
                        if (isNaN(this.limit)) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
                        if (this.limit > u.DEFAULT_VALUES.USERS_MAX_LIMIT) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", u.DEFAULT_VALUES.USERS_MAX_LIMIT)));
                        if (this.limit < u.DEFAULT_VALUES.ZERO) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
                        if (void 0 !== this.searchKeyword) {
                            if (typeof this.searchKeyword !== u.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
                            if (o.isFalsy(this.searchKeyword.trim())) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.INVALID), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "search keyword", "search keyword")));
                            this.searchKeyword = this.searchKeyword.trim()
                        }
                        if (this.status) {
                            if (typeof this.status !== u.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_STATUS", "SET_STATUS", "setStatus()")));
                            if ("available" != this.status.toLowerCase() && "offline" != this.status.toLowerCase()) return new s.CometChatException(u.UserErrors.INVALID_STATUS)
                        }
                        if (void 0 !== this.hideBlockedUsers) {
                            if (typeof this.hideBlockedUsers !== u.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HIDE_BLOCKED_USERS", "HIDE_BLOCKED_USERS", "hideBlockedUsers()")));
                            1 == this.hideBlockedUsers ? this.hideBlockedUsers = !0 : this.hideBlockedUsers = !1
                        }
                        if (void 0 !== this.friendsOnly) {
                            if (typeof this.friendsOnly !== u.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "FRIENDS_ONLY", "FRIENDS_ONLY", "friendsOnly()")));
                            1 == this.friendsOnly ? this.friendsOnly = !0 : this.friendsOnly = !1
                        }
                        if (void 0 !== this.withTags) {
                            if (typeof this.withTags !== u.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.MUST_BE_A_BOOLEAN), "WITH_TAGS", "WITH_TAGS", "withTags()")));
                            1 == this.withTags ? this.withTags = !0 : this.withTags = !1
                        }
                        return void 0 === this.roles || Array.isArray(this.roles) ? void 0 === this.tags || Array.isArray(this.tags) ? void 0 === this.UIDs || Array.isArray(this.UIDs) ? void 0 : new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "UIDs", "UIDs", "setUIDs()"))) : new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "TAGS", "TAGS", "setTags()"))) : new s.CometChatException(JSON.parse(o.format(JSON.stringify(u.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "ROLES", "ROLES", "setRoles()")))
                    }, e.prototype.fetchNext = function () {
                        var e = this;
                        return new Promise((function (t, n) {
                            try {
                                if (e.fetchingInProgress) e.fetchingInProgress = !1, t([]); else {
                                    e.fetchingInProgress = !0;
                                    var o = e.validateUserBuilder();
                                    if (o instanceof s.CometChatException) return void n(o);
                                    r.makeApiCall("users", {}, e.getNextData()).then((function (n) {
                                        if (n.meta && (e.total_pages = n.meta.pagination.total_pages), 0 < n.data.length) {
                                            e.pagination = n.meta.pagination;
                                            var r = [];
                                            n.data.map((function (e) {
                                                r.push(i.UsersController.trasformJSONUser(e))
                                            })), t(r)
                                        } else t([]);
                                        e.fetchingInProgress = !1
                                    }), (function (t) {
                                        e.fetchingInProgress = !1, n(new s.CometChatException(t.error))
                                    }))
                                }
                            } catch (o) {
                                e.fetchingInProgress = !1, n(new s.CometChatException(o))
                            }
                        }))
                    }, e.prototype.getNextData = function () {
                        var e = {};
                        if (e.per_page = this.limit, o.isFalsy(this.searchKeyword) || (e.searchKey = this.searchKeyword), o.isFalsy(this.status) || (e.status = this.status), o.isFalsy(this.hideBlockedUsers) || (e.hideBlockedUsers = 1), o.isFalsy(this.role) || (e.roles = this.role), o.isFalsy(this.roles) || (e.roles = this.roles), o.isFalsy(this.tags) || (e.tags = this.tags), o.isFalsy(this.friendsOnly) || (e.friendsOnly = 1), o.isFalsy(this.withTags) || (e.withTags = 1), o.isFalsy(this.UIDs) || (e.uids = this.UIDs), 1 == this.current_page) e.page = this.next_page, this.next_page++, this.current_page++; else {
                            if (this.next_page > this.total_pages) return e.page = this.next_page, e;
                            e.page = this.next_page++
                        }
                        return e
                    }, e.USER_STATUS = {
                        ONLINE: u.PresenceConstatnts.STATUS.ONLINE,
                        OFFLINE: u.PresenceConstatnts.STATUS.OFFLINE
                    }, e
                }();
                t.UsersRequest = c;
                var l = function () {
                    function e() {
                        this.shouldHideBlockedUsers = !1
                    }

                    return e.prototype.setLimit = function (e) {
                        return this.limit = e, this
                    }, e.prototype.setStatus = function (e) {
                        return this.status = e, this
                    }, e.prototype.setSearchKeyword = function (e) {
                        return this.searchKeyword = e, this
                    }, e.prototype.hideBlockedUsers = function (e) {
                        return this.shouldHideBlockedUsers = e, this
                    }, e.prototype.setRole = function (e) {
                        return this.role = e, this
                    }, e.prototype.setRoles = function (e) {
                        return this.roles = e, this
                    }, e.prototype.friendsOnly = function (e) {
                        return this.showFriendsOnly = e, this
                    }, e.prototype.setTags = function (e) {
                        return this.tags = e, this
                    }, e.prototype.withTags = function (e) {
                        return this.showTags = e, this
                    }, e.prototype.setUIDs = function (e) {
                        return this.UIDs = e, this
                    }, e.prototype.build = function () {
                        return this.role && this.roles && this.roles.push(this.role), new c(this)
                    }, e
                }();
                t.UsersRequestBuilder = l
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.UserStore = void 0;
                var r = n(3), o = n(0), i = n(1), s = n(13), a = function () {
                    function e(e) {
                        this.store = i.constants.DEFAULT_STORE, o.isFalsy(e) || (this.store = e), this.userStore = s.createInstance({name: o.format(i.LOCAL_STORE.STORE_STRING, r.CometChat.getAppId(), i.LOCAL_STORE.USERS_STORE)}), this.userStore.setDriver([s.LOCALSTORAGE, s.INDEXEDDB, s.WEBSQL])
                    }

                    return e.getInstance = function () {
                        return null == e.UserStore && (e.UserStore = new e), e.UserStore
                    }, e.prototype.set = function (e, t) {
                        return this.userStore.setItem(e, t)
                    }, e.prototype.remove = function (e) {
                        this.userStore.removeItem(e)
                    }, e.prototype.get = function (e) {
                        return this.userStore.getItem(e)
                    }, e.prototype.clearStore = function () {
                        var e = this;
                        return new Promise((function (t, n) {
                            e.userStore.clear().then((function () {
                                t(!0)
                            })).catch((function (e) {
                                n(e)
                            }))
                        }))
                    }, e.prototype.clear = function (e) {
                    }, e.prototype.selectStore = function (e) {
                        this.store = e
                    }, e.prototype.storeUsers = function (e) {
                        var t = this;
                        return e.map((function (e) {
                            t.set(e.getUid(), e)
                        })), !0
                    }, e.prototype.storeUser = function (e) {
                        return this.set(e.getUid(), e), !0
                    }, e
                }();
                t.UserStore = a
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.ConversationsRequestBuilder = t.ConversationsRequest = void 0;
                var r = n(6), o = n(0), i = n(2), s = n(24), a = n(1), u = function () {
                    function e(e) {
                        this.limit = 100, this.next_page = 1, this.current_page = 1, this.total_pages = -1, this.fetchingInProgress = !1, this.getUserAndGroupTags = !1, this.withTags = !1, this.pagination = {
                            total: 0,
                            count: 0,
                            per_page: 0,
                            current_page: 0,
                            total_pages: 0,
                            links: []
                        }, o.isFalsy(e) || (this.limit = e.limit, o.isFalsy(e.conversationType) || (this.conversationType = e.conversationType), o.isFalsy(e.getUserAndGroupTags) || (this.getUserAndGroupTags = e.getUserAndGroupTags), e.tags && (this.tags = e.tags), o.isFalsy(e.WithTags) || (this.withTags = e.WithTags))
                    }

                    return e.prototype.validateConversationBuilder = function () {
                        return void 0 === this.limit ? new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit"))) : isNaN(this.limit) ? new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))) : this.limit > a.DEFAULT_VALUES.CONVERSATION_MAX_LIMIT ? new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", a.DEFAULT_VALUES.CONVERSATION_MAX_LIMIT))) : this.limit < a.DEFAULT_VALUES.ZERO ? new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))) : void 0
                    }, e.prototype.fetchNext = function () {
                        var e = this;
                        return new Promise((function (t, n) {
                            try {
                                if (e.fetchingInProgress) e.fetchingInProgress = !1, t([]); else {
                                    e.fetchingInProgress = !0;
                                    var o = e.validateConversationBuilder();
                                    if (o instanceof i.CometChatException) return void n(o);
                                    r.makeApiCall("getConversations", {}, e.getNextData()).then((function (n) {
                                        if (n.meta && (e.total_pages = n.meta.pagination.total_pages), 0 < n.data.length) {
                                            e.pagination = n.meta.pagination;
                                            var r = [];
                                            n.data.map((function (e) {
                                                r.push(s.ConversationController.trasformJSONConversation(e.conversationId, e.conversationType, e.lastMessage, e.conversationWith, parseInt(e.unreadMessageCount), e.tags ? e.tags : []))
                                            })), t(r)
                                        } else t([]);
                                        e.fetchingInProgress = !1
                                    }), (function (t) {
                                        e.fetchingInProgress = !1, n(new i.CometChatException(t.error))
                                    }))
                                }
                            } catch (o) {
                                e.fetchingInProgress = !1, n(new i.CometChatException(o))
                            }
                        }))
                    }, e.prototype.getNextData = function () {
                        var e = {};
                        if (e.per_page = this.limit, o.isFalsy(this.conversationType) || (e.conversationType = this.conversationType), o.isFalsy(this.getUserAndGroupTags) || (e.withUserAndGroupTags = this.getUserAndGroupTags), o.isFalsy(this.tags) || (e.tags = this.tags), o.isFalsy(this.withTags) || (e.withTags = this.withTags), 1 == this.current_page) e.page = this.next_page, this.next_page++, this.current_page++; else {
                            if (this.next_page > this.total_pages) return e.page = this.next_page, e;
                            e.page = this.next_page++
                        }
                        return e
                    }, e
                }();
                t.ConversationsRequest = u;
                var c = function () {
                    function e() {
                        this.WithTags = !1
                    }

                    return e.prototype.setLimit = function (e) {
                        return this.limit = e, this
                    }, e.prototype.setConversationType = function (e) {
                        return this.conversationType = e, this
                    }, e.prototype.withUserAndGroupTags = function (e) {
                        return "boolean" == typeof e && (this.getUserAndGroupTags = e), this
                    }, e.prototype.setTags = function (e) {
                        return this.tags = e, this
                    }, e.prototype.withTags = function (e) {
                        return this.WithTags = e, this
                    }, e.prototype.build = function () {
                        return new u(this)
                    }, e
                }();
                t.ConversationsRequestBuilder = c
            }, function (e, t, n) {
                "use strict";
                var r = this && this.__awaiter || function (e, t, n, r) {
                    return new (n || (n = Promise))((function (o, i) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                                e(t)
                            }))).then(s, a)
                        }

                        u((r = r.apply(e, t || [])).next())
                    }))
                }, o = this && this.__generator || function (e, t) {
                    var n, r, o, i, s = {
                        label: 0, sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        }, trys: [], ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }), i;

                    function a(i) {
                        return function (a) {
                            return function (i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {value: i[1], done: !1};
                                        case 5:
                                            s.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = s.trys).length && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {value: i[0] ? i[1] : void 0, done: !0}
                            }([i, a])
                        }
                    }
                }, i = this && this.__spreadArrays || function () {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    var r = Array(e), o = 0;
                    for (t = 0; t < n; t++) for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
                    return r
                };
                t.__esModule = !0, t.MessagesRequestBuilder = t.MessagesRequest = void 0;
                var s = n(2), a = n(6), u = n(10), c = n(0), l = n(47), E = n(1), p = n(14), d = n(25),
                    f = function () {
                        function e(e) {
                            this.limit = E.DEFAULT_VALUES.MSGS_LIMIT, this.timestamp = 0, this.id = E.DEFAULT_VALUES.DEFAULT_MSG_ID, this.messageStore = l.MessagesStore.getInstance(), this.endpointName = "getUserMessages", this.listId = "", this.totalPages = 0, this.unread = !1, this.inProgress = !1, this.hideMessagesFromBlockedUsers = !1, this.updatedAt = 0, this.onlyUpdates = 0, this.paginationMeta = {}, this.WithTags = !1, this.hideDeletedMessages = !1, this.limit = e.limit, this.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.PER_PAGE] = this.limit, this.uid = e.uid, this.guid = e.guid, this.parentMessageId = e.parentMessageId, this.timestamp = e.timestamp, this.timestamp && (this.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.SENT_AT] = this.timestamp), this.id = e.id, this.id != E.DEFAULT_VALUES.DEFAULT_MSG_ID && (this.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.ID] = this.id), this.hideMessagesFromBlockedUsers = e.HideMessagesFromBlockedUsers, this.hideMessagesFromBlockedUsers && (this.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.HIDE_MESSAGES_FROM_BLOCKED_USER] = this.hideMessagesFromBlockedUsers), this.unread = e.unread, this.unread && (this.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.UNREAD] = this.unread), e.searchKey && (this.searchKey = e.searchKey, this.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.SEARCH_KEY] = this.searchKey), e.onlyUpdate && (this.onlyUpdates = e.onlyUpdate, this.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.ONLY_UPDATES] = this.onlyUpdates), e.updatedAt && (this.updatedAt = e.updatedAt, this.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.UPDATED_AT] = this.updatedAt), e.category && (this.category = e.category), e.categories && (this.categories = e.categories), e.type && (this.type = e.type), e.types && (this.types = e.types), e.WithTags && (this.WithTags = e.WithTags), e.tags && (this.tags = e.tags), e.HideReplies && (this.hideReplies = e.HideReplies, this.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.HIDE_REPLIES] = this.hideReplies), this.hideDeletedMessages = e.HideDeletedMessages, this.hideDeletedMessages && (this.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.HIDE_DELETED_MESSAGES] = this.hideDeletedMessages)
                        }

                        return e.prototype.fetchNext = function () {
                            var e = this;
                            return new Promise((function (t, n) {
                                return r(e, void 0, void 0, (function () {
                                    var e, r, i;
                                    return o(this, (function (o) {
                                        switch (o.label) {
                                            case 0:
                                                if (o.trys.push([0, 5, , 6]), this.inProgress) return this.inProgress = !1, n(new s.CometChatException(p.MESSAGES_REQUEST_ERRORS.REQUEST_IN_PROGRESS_ERROR)), [2];
                                                if (this.inProgress = !0, this.onlyUpdates) {
                                                    if (0 == this.updatedAt) return this.inProgress = !1, n(new s.CometChatException(p.MESSAGES_REQUEST_ERRORS.NOT_ENOUGH_PARAMS)), [2]
                                                } else if (0 == this.timestamp && 0 == this.id && 0 == this.updatedAt) return this.inProgress = !1, n(new s.CometChatException(p.MESSAGES_REQUEST_ERRORS.NOT_ENOUGH_PARAMS)), [2];
                                                this.affix = E.MessageConstatnts.PAGINATION.AFFIX.APPEND, this.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.AFFIX] = this.affix, this.currentMethod = E.MessageConstatnts.PAGINATION.AFFIX.APPEND, o.label = 1;
                                            case 1:
                                                return o.trys.push([1, 3, , 4]), [4, this.makeAPICall()];
                                            case 2:
                                                return e = o.sent(), t(e), this.inProgress = !1, [3, 4];
                                            case 3:
                                                return r = o.sent(), this.inProgress = !1, n(new s.CometChatException(r)), [3, 4];
                                            case 4:
                                                return [3, 6];
                                            case 5:
                                                return i = o.sent(), this.inProgress = !1, n(new s.CometChatException(i)), [3, 6];
                                            case 6:
                                                return [2]
                                        }
                                    }))
                                }))
                            }))
                        }, e.prototype.fetchPrevious = function () {
                            var e = this;
                            return new Promise((function (t, n) {
                                return r(e, void 0, void 0, (function () {
                                    var e, r, i;
                                    return o(this, (function (o) {
                                        switch (o.label) {
                                            case 0:
                                                if (o.trys.push([0, 5, , 6]), this.inProgress) return n(new s.CometChatException(p.MESSAGES_REQUEST_ERRORS.REQUEST_IN_PROGRESS_ERROR)), this.inProgress = !1, [2];
                                                if (this.inProgress = !0, this.onlyUpdates && 0 == this.updatedAt) return this.inProgress = !1, n(new s.CometChatException(p.MESSAGES_REQUEST_ERRORS.NOT_ENOUGH_PARAMS)), [2];
                                                this.affix = E.MessageConstatnts.PAGINATION.AFFIX.PREPEND, this.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.AFFIX] = this.affix, this.currentMethod = E.MessageConstatnts.PAGINATION.AFFIX.PREPEND, o.label = 1;
                                            case 1:
                                                return o.trys.push([1, 3, , 4]), [4, this.makeAPICall()];
                                            case 2:
                                                return e = o.sent(), t(e), this.inProgress = !1, [3, 4];
                                            case 3:
                                                return r = o.sent(), this.inProgress = !1, n(new s.CometChatException(r)), [3, 4];
                                            case 4:
                                                return [3, 6];
                                            case 5:
                                                return i = o.sent(), this.inProgress = !1, n(new s.CometChatException(i)), [3, 6];
                                            case 6:
                                                return [2]
                                        }
                                    }))
                                }))
                            }))
                        }, e.prototype.makeAPICall = function () {
                            var e = this;
                            return new Promise((function (t, n) {
                                try {
                                    var i = e.uid;
                                    if (void 0 !== i) {
                                        if (typeof i !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "UID", "UID", "setUID()"))));
                                        if (c.isFalsy(i.trim())) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.INVALID), "UID", "UID", "UID", "UID"))));
                                        e.uid = i.trim()
                                    }
                                    var l = e.guid;
                                    if (void 0 !== l) {
                                        if (typeof l !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "GUID", "GUID", "setGUID()"))));
                                        if (c.isFalsy(l.trim())) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.INVALID), "GUID", "GUID", "GUID", "GUID"))));
                                        e.guid = l.trim()
                                    }
                                    var p = e.parentMessageId;
                                    if (void 0 !== p) {
                                        if (isNaN(p)) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "PARENT_MESSAGE_ID", "PARENT_MESSAGE_ID", "setParentMessageId()"))));
                                        if (p < E.DEFAULT_VALUES.ZERO) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "PARENT_MESSAGE_ID", "PARENT_MESSAGE_ID", "setParentMessageId()"))))
                                    }
                                    var f = e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.PER_PAGE];
                                    if (void 0 === f) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit"))));
                                    if (isNaN(f)) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))));
                                    if (f > E.DEFAULT_VALUES.MSGS_MAX_LIMIT) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", E.DEFAULT_VALUES.MSGS_MAX_LIMIT))));
                                    if (f < E.DEFAULT_VALUES.ZERO) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))));
                                    var S = e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.SEARCH_KEY];
                                    if (void 0 !== S) {
                                        if (typeof S !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()"))));
                                        if (c.isFalsy(S.trim())) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.INVALID), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "search keyword", "search keyword"))));
                                        e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.SEARCH_KEY] = S.trim()
                                    }
                                    var h = e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.ID];
                                    if (void 0 !== h) {
                                        if (isNaN(h)) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "MESSAGE_ID", "MESSAGE_ID", "setMessageId()"))));
                                        if (h < E.DEFAULT_VALUES.ZERO) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "MESSAGE_ID", "MESSAGE_ID", "setMessageId()"))))
                                    }
                                    var g = e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.SENT_AT];
                                    if (void 0 !== g) {
                                        if (isNaN(g)) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "TIMESTAMP", "TIMESTAMP", "setTimestamp()"))));
                                        if (g < E.DEFAULT_VALUES.ZERO) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "TIMESTAMP", "TIMESTAMP", "setTimestamp()"))))
                                    }
                                    var C = e.hideMessagesFromBlockedUsers;
                                    if (void 0 !== C) {
                                        if (typeof C !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HIDE_MESSAGES_FROM_BLOCKED_USERS", "HIDE_MESSAGES_FROM_BLOCKED_USERS", "hideMessagesFromBlockedUsers()"))));
                                        e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.HIDE_MESSAGES_FROM_BLOCKED_USER] = 1 == C ? 1 : 0
                                    }
                                    var T = e.unread;
                                    if (void 0 !== T) {
                                        if (typeof T !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "UNREAD", "UNREAD", "setUnread()"))));
                                        e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.UNREAD] = 1 == T ? 1 : 0
                                    }
                                    var _ = e.category;
                                    if (void 0 !== _) {
                                        if (typeof _ !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_CATEGORY", "SET_CATEGORY", "setCategory()"))));
                                        if (c.isFalsy(_.trim())) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.INVALID), "SET_CATEGORY", "SET_CATEGORY", "category", "category"))));
                                        e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.CATEGORIES] = _.trim()
                                    }
                                    var A = e.categories;
                                    if (void 0 !== A) {
                                        if (!Array.isArray(A)) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_CATEGORIES", "SET_CATEGORIES", "setCategories()"))));
                                        0 < A.length && (e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.CATEGORIES] = A)
                                    }
                                    var I = e.type;
                                    if (void 0 !== I) {
                                        if (typeof I !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_TYPE", "SET_TYPE", "setType()"))));
                                        if (c.isFalsy(I.trim())) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.INVALID), "SET_TYPE", "SET_TYPE", "type", "type"))));
                                        e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.TYPES] = I.trim()
                                    }
                                    var R = e.types;
                                    if (void 0 !== R) {
                                        if (!Array.isArray(R)) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_TYPES", "SET_TYPES", "setTypes()"))));
                                        0 < R.length && (e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.TYPES] = R)
                                    }
                                    var y = e.tags;
                                    if (void 0 !== y) {
                                        if (!Array.isArray(y)) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_TAGS", "SET_TAGS", "setTags()"))));
                                        0 < y.length && (e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.TAGS] = y)
                                    }
                                    var m = e.WithTags;
                                    if (void 0 !== m) {
                                        if (typeof m !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "WITH_TAGS", "WITH_TAGS", "withTags()"))));
                                        e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.WITH_TAGS] = 1 == m ? 1 : 0
                                    }
                                    var O = e.hideDeletedMessages;
                                    if (void 0 !== O) {
                                        if (typeof O !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void n(new s.CometChatException(JSON.parse(c.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HIDE_DELETED_MESSAGES", "HIDE_DELETED_MESSAGES", "hideDeletedMessages()"))));
                                        e.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.HIDE_DELETED_MESSAGES] = 1 == O ? 1 : 0
                                    }
                                    if (e.createEndpoint(), e.totalPages) if (1 != e.totalPages) ; else if (e.lastAffix == e.affix) return void t([]);
                                    a.makeApiCall(e.endpointName, {listId: e.listId}, e.paginationMeta).then((function (n) {
                                        return r(e, void 0, void 0, (function () {
                                            var e, r = this;
                                            return o(this, (function (o) {
                                                return e = [], n[E.ResponseConstants.RESPONSE_KEYS.KEY_META][E.ResponseConstants.RESPONSE_KEYS.KEY_CURSOR].hasOwnProperty(E.MessageConstatnts.PAGINATION.KEYS.ID) && 0 == this.id && (this.id = parseInt(n.meta.cursor[E.MessageConstatnts.PAGINATION.KEYS.ID])), n[E.ResponseConstants.RESPONSE_KEYS.KEY_META][E.ResponseConstants.RESPONSE_KEYS.KEY_CURSOR].hasOwnProperty(E.MessageConstatnts.PAGINATION.KEYS.SENT_AT) && 0 == this.timestamp && (this.timestamp = n.meta.cursor[E.MessageConstatnts.PAGINATION.KEYS.SENT_AT]), n.meta.pagination.hasOwnProperty("total_pages") && (this.totalPages = n.meta.pagination.total_pages), n.meta.cursor.hasOwnProperty("affix") && (this.lastAffix = n.meta.cursor.affix), n.data[0] ? (0 < this.id && (this.id = parseInt(n.data[0].id)), 0 < this.timestamp && (this.timestamp = n.data[0].sentAt), n.data.map((function (t) {
                                                    d.MessageListnerMaping.getInstance().get(E.LOCAL_STORE.KEY_MESSAGE_LISTENER_LIST).then((function (e) {
                                                        parseInt(t.id) > e && d.MessageListnerMaping.getInstance().set(E.LOCAL_STORE.KEY_MESSAGE_LISTENER_LIST, parseInt(t.id))
                                                    }), (function (e) {
                                                        d.MessageListnerMaping.getInstance().set(E.LOCAL_STORE.KEY_MESSAGE_LISTENER_LIST, parseInt(t.id))
                                                    })), r.affix == E.MessageConstatnts.PAGINATION.AFFIX.APPEND ? (r.id < parseInt(t.id) && 0 < r.id && (r.id = parseInt(t.id)), r.timestamp < t.sentAt && 0 < r.timestamp && (r.timestamp = t.sentAt), r.updatedAt < t.updatedAt && 0 < r.updatedAt && (r.updatedAt = t.updatedAt)) : (r.id > parseInt(t.id) && (r.id = parseInt(t.id)), r.timestamp > t.sentAt && (r.timestamp = t.sentAt), r.updatedAt > t.updatedAt && (r.updatedAt = t.updatedAt)), r.id && (r.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.ID] = r.id), r.timestamp && (r.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.SENT_AT] = r.timestamp), r.updatedAt && (r.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.UPDATED_AT] = r.updatedAt), e.push(u.MessageController.trasformJSONMessge(t))
                                                }))) : e = [], t(e), [2]
                                            }))
                                        }))
                                    }), (function (e) {
                                        n(new s.CometChatException(e.error))
                                    }))
                                } catch (i) {
                                    n(new s.CometChatException(i))
                                }
                            }))
                        }, e.prototype.createEndpoint = function () {
                            this.parentMessageId ? (this.endpointName = "getThreadMessages", this.listId = this.parentMessageId.toString(), this.hideReplies && (this.hideReplies = !1, delete this.paginationMeta[E.MessageConstatnts.PAGINATION.KEYS.HIDE_REPLIES])) : (c.isFalsy(this.guid) || c.isFalsy(this.uid)) && c.isFalsy(this.guid) ? (c.isFalsy(this.uid) ? this.endpointName = "getMessages" : this.endpointName = "getUserMessages", this.listId = this.uid) : (this.endpointName = "getGroupMessages", this.listId = this.guid)
                        }, e.prototype.makeData = function () {
                            var e = {};
                            e[E.MessageConstatnts.PAGINATION.KEYS.PER_PAGE] = this.limit, e[E.MessageConstatnts.PAGINATION.KEYS.AFFIX] = this.affix, (c.isFalsy(this.guid) || c.isFalsy(this.uid)) && c.isFalsy(this.guid) && c.isFalsy(this.uid)
                        }, e.prototype.getFilteredPreviousDataByReceiverId = function (e) {
                            return r(this, void 0, void 0, (function () {
                                var t, n = this;
                                return o(this, (function (r) {
                                    switch (r.label) {
                                        case 0:
                                            switch (t = [], e) {
                                                case"user":
                                                    return [3, 1];
                                                case"group":
                                                    return [3, 3];
                                                case"both":
                                                    return [3, 5]
                                            }
                                            return [3, 7];
                                        case 1:
                                            return [4, l.MessagesStore.getInstance().get(this.uid).then((function (e) {
                                                Object.keys(e).filter((function (e) {
                                                    return parseInt(e) > n.id
                                                })).map((function (n) {
                                                    t = i(t, [e[n]])
                                                }))
                                            }))];
                                        case 2:
                                            return r.sent(), [3, 9];
                                        case 3:
                                            return [4, l.MessagesStore.getInstance().get(this.guid).then((function (e) {
                                                Object.keys(e).filter((function (e) {
                                                    return parseInt(e) > n.id
                                                })).map((function (n) {
                                                    t = i(t, [e[n]])
                                                }))
                                            }))];
                                        case 4:
                                            r.sent(), r.label = 5;
                                        case 5:
                                            return [4, l.MessagesStore.getInstance().get(this.guid).then((function (e) {
                                                Object.keys(e).filter((function (e) {
                                                    return parseInt(e) > n.id
                                                })).filter((function (t) {
                                                    return e[t].sender.uid == n.uid
                                                })).map((function (n) {
                                                    t = i(t, [e[n]])
                                                }))
                                            }))];
                                        case 6:
                                            return r.sent(), [3, 9];
                                        case 7:
                                            return [4, l.MessagesStore.getInstance().getAllMessages().then((function (e) {
                                                Object.keys(e).filter((function (e) {
                                                    return parseInt(e) > n.id
                                                })).map((function (n) {
                                                    t = i(t, [e[n]])
                                                }))
                                            }))];
                                        case 8:
                                            return r.sent(), [3, 9];
                                        case 9:
                                            return [2, t]
                                    }
                                }))
                            }))
                        }, e.prototype.getFilteredNextDataByReceiverId = function (e) {
                            return r(this, void 0, void 0, (function () {
                                var t, n = this;
                                return o(this, (function (r) {
                                    switch (r.label) {
                                        case 0:
                                            switch (t = [], e) {
                                                case"user":
                                                    return [3, 1];
                                                case"group":
                                                    return [3, 3];
                                                case"both":
                                                    return [3, 5]
                                            }
                                            return [3, 7];
                                        case 1:
                                            return [4, l.MessagesStore.getInstance().get(this.uid).then((function (e) {
                                                Object.keys(e).filter((function (e) {
                                                    return parseInt(e) > n.id
                                                })).map((function (n) {
                                                    t = i(t, [e[n]])
                                                }))
                                            }))];
                                        case 2:
                                            return r.sent(), [3, 9];
                                        case 3:
                                            return [4, l.MessagesStore.getInstance().get(this.guid).then((function (e) {
                                                Object.keys(e).filter((function (e) {
                                                    return parseInt(e) > n.id
                                                })).map((function (n) {
                                                    t = i(t, [e[n]])
                                                }))
                                            }))];
                                        case 4:
                                            r.sent(), r.label = 5;
                                        case 5:
                                            return [4, l.MessagesStore.getInstance().get(this.guid).then((function (e) {
                                                Object.keys(e).filter((function (e) {
                                                    return parseInt(e) > n.id
                                                })).filter((function (t) {
                                                    return e[t].sender.uid == n.uid
                                                })).map((function (n) {
                                                    t = i(t, [e[n]])
                                                }))
                                            }))];
                                        case 6:
                                            return r.sent(), [3, 9];
                                        case 7:
                                            return [4, l.MessagesStore.getInstance().getAllMessages().then((function (e) {
                                                Object.keys(e).filter((function (e) {
                                                    return parseInt(e) > n.id
                                                })).map((function (n) {
                                                    t = i(t, [e[n]])
                                                }))
                                            }))];
                                        case 8:
                                            return r.sent(), [3, 9];
                                        case 9:
                                            return [2, t]
                                    }
                                }))
                            }))
                        }, e
                    }();
                t.MessagesRequest = f;
                var S = function () {
                    function e() {
                        this.maxLimit = E.DEFAULT_VALUES.MSGS_MAX_LIMIT, this.timestamp = 0, this.id = E.DEFAULT_VALUES.DEFAULT_MSG_ID, this.unread = !1, this.HideMessagesFromBlockedUsers = !1, this.onlyUpdate = 0, this.HideDeletedMessages = !1, this.WithTags = !1
                    }

                    return e.prototype.setLimit = function (e) {
                        return this.limit = e, this
                    }, e.prototype.setGUID = function (e) {
                        return this.guid = e, this
                    }, e.prototype.setUID = function (e) {
                        return this.uid = e, this
                    }, e.prototype.setParentMessageId = function (e) {
                        return this.parentMessageId = e, this
                    }, e.prototype.setTimestamp = function (e) {
                        return void 0 === e && (e = c.getCurrentTime()), this.timestamp = e, this
                    }, e.prototype.setMessageId = function (e) {
                        return void 0 === e && (e = E.DEFAULT_VALUES.DEFAULT_MSG_ID), this.id = e, this
                    }, e.prototype.setUnread = function (e) {
                        return void 0 === e && (e = !1), this.unread = e, this
                    }, e.prototype.hideMessagesFromBlockedUsers = function (e) {
                        return void 0 === e && (e = !1), this.HideMessagesFromBlockedUsers = e, this
                    }, e.prototype.setSearchKeyword = function (e) {
                        return this.searchKey = e, this
                    }, e.prototype.setUpdatedAfter = function (e) {
                        return this.updatedAt = e, this
                    }, e.prototype.updatesOnly = function (e) {
                        return e && (this.onlyUpdate = 1), this
                    }, e.prototype.setCategory = function (e) {
                        return this.category = e, this
                    }, e.prototype.setCategories = function (e) {
                        return this.categories = e, this
                    }, e.prototype.setType = function (e) {
                        return this.type = e, this
                    }, e.prototype.setTypes = function (e) {
                        return this.types = e, this
                    }, e.prototype.hideReplies = function (e) {
                        return this.HideReplies = e, this
                    }, e.prototype.hideDeletedMessages = function (e) {
                        return this.HideDeletedMessages = e, this
                    }, e.prototype.setTags = function (e) {
                        return this.tags = e, this
                    }, e.prototype.withTags = function (e) {
                        return this.WithTags = e, this
                    }, e.prototype.build = function () {
                        return this.category && this.categories && this.categories.push(this.category), this.type && this.types && this.types.push(this.type), new f(this)
                    }, e
                }();
                t.MessagesRequestBuilder = S
            }, function (e, t, n) {
                "use strict";
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };
                t.__esModule = !0, t.MessagesStore = void 0;
                var o = n(3), i = n(0), s = n(1), a = n(13), u = function () {
                    function e(e) {
                        this.store = s.constants.DEFAULT_STORE, i.isFalsy(e) || (this.store = e), this.messagesStore = a.createInstance({name: i.format(s.LOCAL_STORE.STORE_STRING, o.CometChat.getAppId(), s.LOCAL_STORE.MESSAGES_STORE)}), this.messagesStore.setDriver([a.LOCALSTORAGE, a.INDEXEDDB, a.WEBSQL])
                    }

                    return e.getInstance = function () {
                        return null == e.MessagesStore && (e.MessagesStore = new e), e.MessagesStore
                    }, e.prototype.set = function (e, t) {
                        return this.messagesStore.setItem(e, t)
                    }, e.prototype.remove = function (e) {
                        this.messagesStore.removeItem(e)
                    }, e.prototype.get = function (e) {
                        return this.messagesStore.getItem(e)
                    }, e.prototype.clearStore = function () {
                        var e = this;
                        return new Promise((function (t, n) {
                            e.messagesStore.clear().then((function () {
                                t(!0)
                            })).catch((function (e) {
                                n(e)
                            }))
                        }))
                    }, e.prototype.getAllMessages = function () {
                        var e = this, t = {};
                        return new Promise((function (n, o) {
                            e.messagesStore.iterate((function (e, n, o) {
                                n != s.constants.MSG_VER_POST && n != s.constants.MSG_VER_POST && (t = r(r({}, t), e))
                            })).then((function () {
                                n(t)
                            }))
                        }))
                    }, e.prototype.clear = function (e) {
                    }, e.prototype.selectStore = function (e) {
                        this.store = e
                    }, e.prototype.storeMessages = function (e) {
                        var t = this;
                        if (o.CometChat.user.getUid()) {
                            var n = o.CometChat.user.getUid(), a = {}, u = 0;
                            return this.get(s.constants.MSG_VER_POST).then((function (o) {
                                e.map((function (e) {
                                    var t;
                                    if (!i.isFalsy(e)) {
                                        0 == u && (u = parseInt(e.getId().toString())), u > e.getId() && (u = parseInt(e.getId().toString())), o < e.getId() && (o = parseInt(e.getId().toString()));
                                        var c = void 0;
                                        c = e.getSender() instanceof Object ? e.getSender().getUid() : e.getSender(), e.getReceiverType() == s.MessageConstatnts.RECEIVER_TYPE.GROUP && (c = e.getReceiver()), e.getSender() instanceof Object ? e.getSender().getUid() == n && (c = e.getReceiver()) : e.getSender() == n && (c = e.getReceiver()), a[c] || (a[c] = {}), a[c] = r(r({}, a[c]), ((t = {})[e.getId()] = e, t))
                                    }
                                })), t.get(s.constants.MSG_VER_PRE).then((function (e) {
                                    (0 < u && u < e || null == e) && t.set(s.constants.MSG_VER_PRE, u)
                                })) && 0 < o && t.set(s.constants.MSG_VER_POST, o), Object.keys(a).map((function (e) {
                                    t.get(e).then((function (n) {
                                        null == n && (n = {}), t.set(e, r(r({}, a[e]), n))
                                    }))
                                }))
                            })), !0
                        }
                    }, e
                }();
                t.MessagesStore = u
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.BlockedUsersRequestBuilder = t.BlockedUsersRequest = void 0;
                var r = n(6), o = n(0), i = n(11), s = n(2), a = n(1), u = function () {
                    function e(e) {
                        this.next_page = 1, this.current_page = 1, this.total_pages = -1, this.fetchingInProgress = !1, this.pagination = {
                            total: 0,
                            count: 0,
                            per_page: 0,
                            current_page: 0,
                            total_pages: 0,
                            links: []
                        }, o.isFalsy(e) || (this.limit = e.limit, o.isFalsy(e.searchKeyword) || (this.searchKeyword = e.searchKeyword), o.isFalsy(e.direction) || (this.direction = e.direction))
                    }

                    return e.prototype.validateBlockedUsersBuilder = function () {
                        if (void 0 === this.limit) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
                        if (isNaN(this.limit)) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
                        if (this.limit > a.DEFAULT_VALUES.USERS_MAX_LIMIT) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", a.DEFAULT_VALUES.USERS_MAX_LIMIT)));
                        if (this.limit < a.DEFAULT_VALUES.ZERO) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
                        if (void 0 !== this.searchKeyword) {
                            if (typeof this.searchKeyword !== a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
                            if (o.isFalsy(this.searchKeyword.trim())) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.INVALID), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "search keyword", "search keyword")));
                            this.searchKeyword = this.searchKeyword.trim()
                        }
                        if (void 0 !== this.direction) {
                            if (typeof this.direction !== a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new s.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_DIRECTION", "SET_DIRECTION", "setDirection()")));
                            if (this.direction != a.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.BOTH && this.direction != a.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.BLOCKED_BY_ME && this.direction != a.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.HAS_BLOCKED_ME) return new s.CometChatException(a.UserErrors.INVALID_DIRECTION)
                        }
                    }, e.prototype.fetchNext = function () {
                        var e = this;
                        return new Promise((function (t, n) {
                            try {
                                if (e.fetchingInProgress) e.fetchingInProgress = !1, t([]); else {
                                    e.fetchingInProgress = !0;
                                    var o = e.validateBlockedUsersBuilder();
                                    if (o instanceof s.CometChatException) return void n(o);
                                    r.makeApiCall("blockedUsersList", {}, e.getNextData()).then((function (n) {
                                        if (n.meta && (e.total_pages = n.meta.pagination.total_pages), 0 < n.data.length) {
                                            e.pagination = n.meta.pagination;
                                            var r = [];
                                            n.data.map((function (e) {
                                                r.push(i.UsersController.trasformJSONUser(e))
                                            })), t(r)
                                        } else t([]);
                                        e.fetchingInProgress = !1
                                    }), (function (t) {
                                        e.fetchingInProgress = !1, n(new s.CometChatException(t.error))
                                    }))
                                }
                            } catch (o) {
                                e.fetchingInProgress = !1, n(new s.CometChatException(o))
                            }
                        }))
                    }, e.prototype.getNextData = function () {
                        var e = {};
                        if (e.per_page = this.limit, o.isFalsy(this.direction) || (e.direction = this.direction), o.isFalsy(this.searchKeyword) || (e.searchKey = this.searchKeyword), 1 == this.current_page) e.page = this.next_page, this.next_page++, this.current_page++; else {
                            if (this.next_page > this.total_pages) return e.page = this.next_page, e;
                            e.page = this.next_page++
                        }
                        return e
                    }, e.MAX_LIMIT = 2, e.DEFAULT_LIMIT = 1, e.directions = a.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS, e
                }();
                t.BlockedUsersRequest = u;
                var c = function () {
                    function e() {
                    }

                    return e.prototype.setLimit = function (e) {
                        return this.limit = e, this
                    }, e.prototype.setSearchKeyword = function (e) {
                        return this.searchKeyword = e, this
                    }, e.prototype.setDirection = function (e) {
                        return this.direction = e, this
                    }, e.prototype.blockedByMe = function () {
                        return this.direction = a.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.BLOCKED_BY_ME, this
                    }, e.prototype.hasBlockedMe = function () {
                        return this.direction = a.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.HAS_BLOCKED_ME, this
                    }, e.prototype.build = function () {
                        return new u(this)
                    }, e
                }();
                t.BlockedUsersRequestBuilder = c
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.AppSettingsBuilder = t.AppSettings = void 0;
                var r = n(1), o = function () {
                    function e(t) {
                        this.subscriptionType = e.SUBSCRIPTION_TYPE_NONE, this.roles = null, this.region = r.DEFAULT_VALUES.REGION_DEFAULT, this.autoJoinGroup = !0, this.establishSocketConnection = !0, this.subscriptionType = t.subscriptionType, this.roles = t.roles, this.region = t.region, this.autoJoinGroup = t.autoJoinGroup, this.establishSocketConnection = t.establishSocketConnection
                    }

                    return e.prototype.getSubscriptionType = function () {
                        return this.subscriptionType
                    }, e.prototype.getRoles = function () {
                        return this.roles
                    }, e.prototype.getRegion = function () {
                        return this.region
                    }, e.prototype.getIsAutoJoinEnabled = function () {
                        return this.autoJoinGroup
                    }, e.prototype.shouldAutoEstablishSocketConnection = function () {
                        return this.establishSocketConnection
                    }, e.SUBSCRIPTION_TYPE_NONE = "NONE", e.SUBSCRIPTION_TYPE_ALL_USERS = "ALL_USERS", e.SUBSCRIPTION_TYPE_ROLES = "ROLES", e.SUBSCRIPTION_TYPE_FRIENDS = "FRIENDS", e.REGION_EU = r.DEFAULT_VALUES.REGION_DEFAULT_EU, e.REGION_US = r.DEFAULT_VALUES.REGION_DEFAULT_US, e.REGION_IN = r.DEFAULT_VALUES.REGION_DEFAULT_IN, e.REGION_PRIVATE = r.DEFAULT_VALUES.REGION_DEFAULT_PRIVATE, e
                }();
                t.AppSettings = o;
                var i = function () {
                    function e() {
                        this.subscriptionType = o.SUBSCRIPTION_TYPE_NONE, this.roles = null, this.region = r.DEFAULT_VALUES.REGION_DEFAULT, this.autoJoinGroup = !0, this.establishSocketConnection = !0
                    }

                    return e.prototype.subscribePresenceForAllUsers = function () {
                        return this.subscriptionType = o.SUBSCRIPTION_TYPE_ALL_USERS, this
                    }, e.prototype.subscribePresenceForRoles = function (e) {
                        return this.subscriptionType = o.SUBSCRIPTION_TYPE_ROLES, this.roles = e, this
                    }, e.prototype.subscribePresenceForFriends = function () {
                        return this.subscriptionType = o.SUBSCRIPTION_TYPE_FRIENDS, this
                    }, e.prototype.setRegion = function (e) {
                        return void 0 === e && (e = r.DEFAULT_VALUES.REGION_DEFAULT), this.region = e.toLowerCase(), this
                    }, e.prototype.enableAutoJoinForGroups = function (e) {
                        return void 0 === e && (e = !0), this.autoJoinGroup = e, this
                    }, e.prototype.autoEstablishSocketConnection = function (e) {
                        return void 0 === e && (e = !0), this.establishSocketConnection = e, this
                    }, e.prototype.build = function () {
                        return new o(this)
                    }, e
                }();
                t.AppSettingsBuilder = i
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.CometChatHelper = void 0;
                var r = n(10), o = n(1), i = n(11), s = n(15), a = n(24), u = n(3), c = n(2), l = n(0),
                    E = function () {
                        function e() {
                        }

                        return e.processMessage = function (e) {
                            try {
                                return r.MessageController.trasformJSONMessge(e)
                            } catch (e) {
                                l.Logger.error("CometChatHelper: processMessage", e)
                            }
                        }, e.getConversationFromMessage = function (e) {
                            return new Promise((function (t, n) {
                                try {
                                    u.CometChat.getLoggedinUser().then((function (u) {
                                        if (null !== u) {
                                            var c = r.MessageController.trasformJSONMessge(e), l = c.receiverType,
                                                E = c.conversationId, p = void 0,
                                                d = r.MessageController.trasformJSONMessge(e);
                                            if (l == o.MessageConstatnts.RECEIVER_TYPE.USER) {
                                                var f = i.UsersController.trasformJSONUser(c[o.MessageConstatnts.KEYS.SENDER]);
                                                p = f.getUid() == u.getUid() ? i.UsersController.trasformJSONUser(c[o.MessageConstatnts.KEYS.RECEIVER]) : f
                                            } else p = s.GroupsController.trasformJSONGroup(c[o.MessageConstatnts.KEYS.RECEIVER]);
                                            var S = a.ConversationController.trasformJSONConversation(E, l, d, p, 0, []);
                                            t(S)
                                        } else n(o.UserErrors.USER_NOT_LOGGED_IN)
                                    }), (function (e) {
                                        n(new c.CometChatException(e.error))
                                    }))
                                } catch (e) {
                                    n(new c.CometChatException(e))
                                }
                            }))
                        }, e
                    }();
                t.CometChatHelper = E
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.CallSettingsBuilder = t.CallSettings = void 0;
                var r = n(1), o = function () {
                    function e(e) {
                        this.sessionID = e.sessionID, this.defaultLayout = e.defaultLayout, this.isAudioOnly = e.isAudioOnly, this.region = e.region, this.user = e.user, this.mode = e.mode, this.domain = e.domain, this.ShowEndCallButton = e.ShowEndCallButton, this.ShowMuteAudioButton = e.ShowMuteAudioButton, this.ShowPauseVideoButton = e.ShowPauseVideoButton, this.ShowScreenShareButton = e.ShowScreenShareButton, this.ShowSwitchModeButton = e.ShowSwitchModeButton, this.StartAudioMuted = e.StartAudioMuted, this.StartVideoMuted = e.StartVideoMuted, this.localizedObject = e.localizedObject, this.analyticsSettings = e.analyticsSettings, this.appId = e.appId, this.customCSS = e.customCSS, this.ShowRecordingButton = e.ShowRecordingButton, this.StartRecordingOnCallStart = e.StartRecordingOnCallStart, this.useLegacyUI = e.useLegacyUI
                    }

                    return e.prototype.shouldUseLegacyUI = function () {
                        return this.useLegacyUI
                    }, e.prototype.isRecordingButtonEnabled = function () {
                        return this.ShowRecordingButton
                    }, e.prototype.shouldStartRecordingOnCallStart = function () {
                        return this.StartRecordingOnCallStart
                    }, e.prototype.getCustomCSS = function () {
                        return this.customCSS
                    }, e.prototype.getSessionId = function () {
                        return this.sessionID
                    }, e.prototype.isAudioOnlyCall = function () {
                        return this.isAudioOnly
                    }, e.prototype.getUser = function () {
                        return this.user
                    }, e.prototype.getRegion = function () {
                        return this.region
                    }, e.prototype.getAppId = function () {
                        return this.appId
                    }, e.prototype.getDomain = function () {
                        return this.domain
                    }, e.prototype.isDefaultLayoutEnabled = function () {
                        return this.defaultLayout
                    }, e.prototype.getMode = function () {
                        return this.mode
                    }, e.prototype.getStartWithAudioMuted = function () {
                        return this.StartAudioMuted
                    }, e.prototype.getStartWithVideoMuted = function () {
                        return this.StartVideoMuted
                    }, e.prototype.isEndCallButtonEnabled = function () {
                        return this.ShowEndCallButton
                    }, e.prototype.isMuteAudioButtonEnabled = function () {
                        return this.ShowMuteAudioButton
                    }, e.prototype.isPauseVideoButtonEnabled = function () {
                        return this.ShowPauseVideoButton
                    }, e.prototype.isScreenShareButtonEnabled = function () {
                        return this.ShowScreenShareButton
                    }, e.prototype.isModeButtonEnabled = function () {
                        return this.ShowSwitchModeButton
                    }, e.prototype.getLocalizedStringObject = function () {
                        return this.localizedObject
                    }, e.prototype.getAnalyticsSettings = function () {
                        return this.analyticsSettings
                    }, e
                }();
                t.CallSettings = o;
                var i = function () {
                    function e() {
                        this.defaultLayout = !0, this.isAudioOnly = !1, this.mode = r.CallConstants.CALL_MODE.DEFAULT, this.ShowEndCallButton = !0, this.ShowMuteAudioButton = !0, this.ShowPauseVideoButton = !0, this.ShowScreenShareButton = !0, this.ShowSwitchModeButton = !0, this.StartAudioMuted = !1, this.StartVideoMuted = !1, this.localizedObject = {}, this.analyticsSettings = {}, this.ShowRecordingButton = !1, this.StartRecordingOnCallStart = !1, this.useLegacyUI = !1
                    }

                    return e.prototype.setSessionID = function (e) {
                        return this.sessionID = e, this
                    }, e.prototype.enableDefaultLayout = function (e) {
                        return this.defaultLayout = e, this
                    }, e.prototype.setIsAudioOnlyCall = function (e) {
                        return this.isAudioOnly = e, this
                    }, e.prototype.setRegion = function (e) {
                        return this.region = e, this
                    }, e.prototype.setDomain = function (e) {
                        return this.domain = e, this
                    }, e.prototype.setUser = function (e) {
                        return this.user = e, this
                    }, e.prototype.setMode = function (e) {
                        return this.mode = e, this
                    }, e.prototype.showEndCallButton = function (e) {
                        return this.ShowEndCallButton = e, this
                    }, e.prototype.showMuteAudioButton = function (e) {
                        return this.ShowMuteAudioButton = e, this
                    }, e.prototype.showPauseVideoButton = function (e) {
                        return this.ShowPauseVideoButton = e, this
                    }, e.prototype.showScreenShareButton = function (e) {
                        return this.ShowScreenShareButton = e, this
                    }, e.prototype.showModeButton = function (e) {
                        return this.ShowSwitchModeButton = e, this
                    }, e.prototype.setLocalizedStringObject = function (e) {
                        return this.localizedObject = e, this
                    }, e.prototype.setAnalyticsSettings = function (e) {
                        return this.analyticsSettings = e, this
                    }, e.prototype.setAppId = function (e) {
                        return this.appId = e, this
                    }, e.prototype.startWithAudioMuted = function (e) {
                        return this.StartAudioMuted = e, this
                    }, e.prototype.startWithVideoMuted = function (e) {
                        return this.StartVideoMuted = e, this
                    }, e.prototype.setCustomCSS = function (e) {
                        return this.customCSS = e, this
                    }, e.prototype.showRecordingButton = function (e) {
                        return this.ShowRecordingButton = e, this
                    }, e.prototype.startRecordingOnCallStart = function (e) {
                        return this.StartRecordingOnCallStart = e, this
                    }, e.prototype.forceLegacyUI = function (e) {
                        return this.useLegacyUI = e, this
                    }, e.prototype.build = function () {
                        return new o(this)
                    }, e
                }();
                t.CallSettingsBuilder = i
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.RTCUser = void 0;
                var r = n(0), o = function () {
                    function e(e) {
                        this.avatar = "", r.isFalsy(e) || (this.uid = e.toString())
                    }

                    return e.prototype.setUID = function (e) {
                        this.uid = e ? e.toString() : ""
                    }, e.prototype.getUID = function () {
                        return this.uid.toString()
                    }, e.prototype.setName = function (e) {
                        this.name = e ? e.toString() : ""
                    }, e.prototype.getName = function () {
                        return this.name.toString()
                    }, e.prototype.setAvatar = function (e) {
                        this.avatar = e ? e.toString() : ""
                    }, e.prototype.getAvatar = function () {
                        return this.avatar.toString()
                    }, e.prototype.setJWT = function (e) {
                        this.jwt = e ? e.toString() : ""
                    }, e.prototype.getJWT = function () {
                        return this.jwt.toString()
                    }, e.prototype.setResource = function (e) {
                        this.resource = e ? e.toString() : ""
                    }, e.prototype.getResource = function () {
                        return this.resource.toString()
                    }, e
                }();
                t.RTCUser = o
            }, function (e, t, n) {
                "use strict";
                var r = this && this.__awaiter || function (e, t, n, r) {
                    return new (n || (n = Promise))((function (o, i) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                                e(t)
                            }))).then(s, a)
                        }

                        u((r = r.apply(e, t || [])).next())
                    }))
                }, o = this && this.__generator || function (e, t) {
                    var n, r, o, i, s = {
                        label: 0, sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        }, trys: [], ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }), i;

                    function a(i) {
                        return function (a) {
                            return function (i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {value: i[1], done: !1};
                                        case 5:
                                            s.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = s.trys).length && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {value: i[0] ? i[1] : void 0, done: !0}
                            }([i, a])
                        }
                    }
                };
                t.__esModule = !0, t.WSConnectionHelper = void 0;
                var i = n(3), s = n(1), a = n(31), u = n(36), c = n(0), l = n(37), E = n(30), p = n(25), d = n(20),
                    f = n(21), S = n(54), h = n(55), g = n(56), C = n(57), T = n(58), _ = n(59), A = n(60), I = n(22),
                    R = n(27), y = n(26), m = n(5), O = n(61), v = l.ListenerHandlers.getInstance(), N = function () {
                        function e() {
                        }

                        return e.getInstance = function () {
                            try {
                                return null != this.wsConnectionHelper && null != this.wsConnectionHelper || (this.wsConnectionHelper = new e), this.wsConnectionHelper
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: getInstance", e)
                            }
                        }, e.prototype.WSLogin = function (e, t) {
                            var n = this;
                            try {
                                O.getWSURL().then((function (r) {
                                    n.connection = new WebSocket(r), t && n.connection && n.connection.readyState == m.READY_STATE.CONNECTING && t(n.connection.readyState), n.connection.onopen = function (r) {
                                        n.onOpen(r, t), n.authenticateUser(e)
                                    }, n.connection.onclose = function (e) {
                                        n.onClose(e, t)
                                    }, n.connection.onmessage = function (e) {
                                        n.onMessage(e)
                                    }
                                }), (function (e) {
                                    c.Logger.error("WSConnectionHelper :: WSLogin", e)
                                }))
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: WSLogin", e)
                            }
                        }, e.prototype.onOpen = function (e, t) {
                            try {
                                t && this.connection && t(this.connection.readyState)
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: onOpen", e)
                            }
                        }, e.prototype.onClose = function (e, t) {
                            try {
                                t && this.connection && t(this.connection.readyState)
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: onClose", e)
                            }
                        }, e.prototype.onMessage = function (e) {
                            if (e.data && "string" == typeof e.data) try {
                                var t = JSON.parse(e.data);
                                if (t && t.action && t.action === m.KEYS.PONG) return;
                                var n = this.getCometChatEventFromMessage(JSON.parse(e.data));
                                if (n.getDeviceId() === i.CometChat.getSessionId() && n.getType() !== m.AUTH.TYPE) return;
                                switch (n.getType()) {
                                    case m.TYPING_INDICATOR.TYPE:
                                        this.publishTypingIndicator(n);
                                        break;
                                    case m.RECEIPTS.TYPE:
                                        this.publishReceipts(n);
                                        break;
                                    case m.PRESENCE.TYPE:
                                        this.publishPresence(n);
                                        break;
                                    case m.AUTH.TYPE:
                                        this.authResponseReceived(n);
                                        break;
                                    case m.MESSAGE.TYPE:
                                        this.publishMessages(n);
                                        break;
                                    case m.TRANSIENT_MESSAGE.TYPE:
                                        this.publishTransientMessage(n);
                                        break;
                                    default:
                                        c.Logger.log("WSHelper: onMessage :: unknown type", e.data)
                                }
                            } catch (e) {
                                c.Logger.error("WSHelper: onMessage", e)
                            } else c.Logger.log("WSHelper: onMessage :: object data", e.data)
                        }, e.prototype.authenticateUser = function (e) {
                            var t = this;
                            try {
                                i.CometChat.getLoggedinUser().then((function (n) {
                                    n ? E.KeyStore.getInstance().get("deviceId").then((function (r) {
                                        var o = null;
                                        window && window.location && window.location.origin && (o = window.location.origin);
                                        var a = "", u = r, l = {
                                            version: s.SDKHeader.sdkVersion,
                                            apiVersion: s.APPINFO.apiVersion,
                                            origin: o,
                                            uts: (new Date).getTime()
                                        };
                                        c.isFalsy(i.CometChat.resource) || (l.resource = i.CometChat.resource), c.isFalsy(i.CometChat.platform) || (l.platform = i.CometChat.platform), c.isFalsy(i.CometChat.language) || (l.language = i.CometChat.language), navigator && (a = navigator.userAgent);
                                        var E = {appInfo: l, userAgent: a, deviceId: u, platform: s.SDKHeader.platform},
                                            p = new S.CometChatAuthEvent(i.CometChat.getAppId(), "", "", n.getUid(), i.CometChat.getSessionId());
                                        if (p.setAuth(e), p.setPresenceSubscription(i.CometChat.appSettings.getSubscriptionType()), p.setDeviceId(i.CometChat.getSessionId()), p.setExtraParmaeters(E), O.checkConnection(t.connection)) {
                                            var d = p.getAsString();
                                            t.connection.send(d)
                                        }
                                    })) : c.Logger.log("no logged-in user", "null")
                                }), (function (e) {
                                    c.Logger.log("error in fetching logged-in user", e)
                                }))
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: startTypingIndicator", e)
                            }
                        }, e.prototype.authResponseReceived = function (e) {
                            try {
                                "200" === e.getCode() && "OK" === e.getStatus() && this.startPingingWS()
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: authResponseReceived", e)
                            }
                        }, e.prototype.WSLogout = function () {
                            try {
                                this.clearPingTimer(), O.checkConnection(this.connection) && this.connection.close(m.LOGOUT_CODE, m.LOGOUT_REASON)
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: WSLogout", e)
                            }
                        }, e.prototype.startPingingWS = function () {
                            var t = this;
                            try {
                                e.pingTimer || (e.pingTimer = setInterval((function () {
                                    return r(t, void 0, void 0, (function () {
                                        var e, t;
                                        return o(this, (function (n) {
                                            switch (n.label) {
                                                case 0:
                                                    return O.checkConnection(this.connection) ? (e = new g.CometChatPingEvent("", "", "", "", ""), t = e.getAsString(), this.connection.send(t), [4, this.listenForPong()]) : [3, 2];
                                                case 1:
                                                    n.sent() ? (c.Logger.log("WSConnectionHelper :: startPingingWS", "pong success"), i.CometChat.getConnectionStatus() != s.CONNECTION_STATUS.CONNECTED && (this.WSLogout(), this.connection = null, i.CometChat.getInstance().makeWSConnection())) : (c.Logger.log("WSConnectionHelper :: startPingingWS", "pong failure"), this.WSLogout(), this.connection = null, i.CometChat.getInstance().setConnectionStatus(s.CONNECTION_STATUS.DISCONNECTED), v.connectionHandlers.map((function (e) {
                                                        try {
                                                            e._eventListener && (c.isFalsy(e._eventListener.onDisconnected) || e._eventListener.onDisconnected())
                                                        } catch (e) {
                                                            c.Logger.error("WSConnectionHandlers: Disconnected Status", e)
                                                        }
                                                    })), i.CometChat.getInstance().accidentallyDisconnected()), n.label = 2;
                                                case 2:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                }), 15e3))
                            } catch (t) {
                                c.Logger.error("WSConnectionHelper: startPingingWS", t)
                            }
                        }, e.prototype.listenForPong = function () {
                            var e = this;
                            return new Promise((function (t, n) {
                                var r = setTimeout((function () {
                                    t(!1)
                                }), 3e3);
                                e.connection.addEventListener("message", (function (e) {
                                    e && e.data && "string" == typeof e.data && JSON.parse(e.data).action === m.KEYS.PONG && (clearTimeout(r), t(!0))
                                }))
                            }))
                        }, e.prototype.clearPingTimer = function () {
                            e.pingTimer && (clearInterval(e.pingTimer), e.pingTimer = void 0)
                        }, e.prototype.sendOnlineEvent = function () {
                            var e = this;
                            try {
                                O.checkConnection(this.connection) && i.CometChat.getLoggedinUser().then((function (t) {
                                    if (t) {
                                        var n = {
                                            appId: i.CometChat.getAppId(),
                                            deviceId: i.CometChat.getSessionId(),
                                            type: m.PRESENCE.TYPE,
                                            body: {
                                                action: m.PRESENCE.ACTION.ONLINE,
                                                timestamp: Math.floor((new Date).getTime() / 1e3),
                                                user: t
                                            }
                                        };
                                        if (O.checkConnection(e.connection)) {
                                            var r = O.stringifyMessage(n);
                                            e.connection.send(r)
                                        }
                                    } else c.Logger.log("no logged-in user", "null")
                                }), (function (e) {
                                    c.Logger.log("error in fetching logged-in user", e)
                                }))
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: sendOnlineEvent", e)
                            }
                        }, e.prototype.sendOfflineEvent = function () {
                            var e = this;
                            try {
                                O.checkConnection(this.connection) && i.CometChat.getLoggedinUser().then((function (t) {
                                    if (t) {
                                        var n = {
                                            appId: i.CometChat.getAppId(),
                                            deviceId: i.CometChat.getSessionId(),
                                            type: m.PRESENCE.TYPE,
                                            body: {
                                                action: m.PRESENCE.ACTION.OFFLINE,
                                                timestamp: Math.floor((new Date).getTime() / 1e3),
                                                user: t
                                            }
                                        };
                                        if (O.checkConnection(e.connection)) {
                                            var r = O.stringifyMessage(n);
                                            e.connection.send(r)
                                        }
                                    } else c.Logger.log("no logged-in user", "null")
                                }), (function (e) {
                                    c.Logger.log("error in fetching logged-in user", e)
                                }))
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: sendOfflineEvent", e)
                            }
                        }, e.prototype.startTypingIndicator = function (e, t, n) {
                            var r = this;
                            try {
                                i.CometChat.getLoggedinUser().then((function (o) {
                                    if (o) {
                                        var s = new y.TypingIndicator(e, t);
                                        s.setSender(o), n && s.setMetadata(n);
                                        var a = new A.CometChatTypingEvent(i.CometChat.getAppId(), e, t, o.getUid(), i.CometChat.getSessionId());
                                        if (a.setAction(m.TYPING_INDICATOR.ACTION.STARTED), a.setTypingIndicator(s), O.checkConnection(r.connection)) {
                                            var u = a.getAsString();
                                            r.connection.send(u)
                                        }
                                    } else c.Logger.log("no logged-in user", "null")
                                }), (function (e) {
                                    c.Logger.log("error in fetching logged-in user", e)
                                }))
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: startTypingIndicator", e)
                            }
                        }, e.prototype.pauseTypingIndicator = function (e, t, n) {
                            var r = this;
                            try {
                                i.CometChat.getLoggedinUser().then((function (o) {
                                    if (o) {
                                        var s = new y.TypingIndicator(e, t);
                                        s.setSender(o), n && s.setMetadata(n);
                                        var a = new A.CometChatTypingEvent(i.CometChat.getAppId(), e, t, o.getUid(), i.CometChat.getSessionId());
                                        if (a.setAction(m.TYPING_INDICATOR.ACTION.ENDED), a.setTypingIndicator(s), O.checkConnection(r.connection)) {
                                            var u = a.getAsString();
                                            r.connection.send(u)
                                        }
                                    } else c.Logger.log("no logged-in user", "null")
                                }), (function (e) {
                                    c.Logger.log("error in fetching logged-in user", e)
                                }))
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: pauseTypingIndicator", e)
                            }
                        }, e.prototype.markAsRead = function (e, t, n, r) {
                            var o = this;
                            try {
                                i.CometChat.getMode(), i.CometChat.getLoggedinUser().then((function (s) {
                                    if (s) {
                                        var a = new T.CometChatReceiptEvent(i.CometChat.getAppId(), e, t, s.getUid(), i.CometChat.getSessionId(), r);
                                        a.setAction(m.RECEIPTS.ACTION.READ);
                                        var u = new I.MessageReceipt;
                                        if (u.setSender(s), u.setReceiverType(t), u.setReceiver(e), u.setReceiptType(m.RECEIPTS.RECEIPT_TYPE.READ_RECEIPT), u.setMessageId(n), u.setTimestamp(Math.floor((new Date).getTime() / 1e3).toString()), a.setMessageReceipt(u), O.checkConnection(o.connection)) {
                                            var l = a.getAsString();
                                            o.connection.send(l)
                                        }
                                    } else c.Logger.log("no logged-in user", "null")
                                }), (function (e) {
                                    c.Logger.log("error in fetching logged-in user", e)
                                }))
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: markAsRead", e)
                            }
                        }, e.prototype.markAsDelivered = function (e, t, n, r) {
                            var o = this;
                            try {
                                i.CometChat.getMode(), i.CometChat.getLoggedinUser().then((function (s) {
                                    if (s) {
                                        var a = new T.CometChatReceiptEvent(i.CometChat.getAppId(), e, t, s.getUid(), i.CometChat.getSessionId(), r);
                                        a.setAction(m.RECEIPTS.ACTION.DELIVERED);
                                        var u = new I.MessageReceipt;
                                        if (u.setSender(s), u.setReceiverType(t), u.setReceiver(e), u.setReceiptType(m.RECEIPTS.RECEIPT_TYPE.DELIVERY_RECEIPT), u.setMessageId(n), u.setTimestamp(Math.floor((new Date).getTime() / 1e3).toString()), a.setMessageReceipt(u), O.checkConnection(o.connection)) {
                                            var l = a.getAsString();
                                            o.connection.send(l)
                                        }
                                    } else c.Logger.log("no logged-in user", "null")
                                }), (function (e) {
                                    c.Logger.log("error in fetching logged-in user", e)
                                }))
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: markAsDelivered", e)
                            }
                        }, e.prototype.sendTransientMessage = function (e, t, n) {
                            var r = this;
                            try {
                                i.CometChat.getLoggedinUser().then((function (o) {
                                    if (o) {
                                        var s = new R.TransientMessage(e, t, n);
                                        s.setSender(o);
                                        var a = new _.CometChatTransientEvent(i.CometChat.getAppId(), e, t, o.getUid(), i.CometChat.getSessionId());
                                        if (a.setTransientMessage(s), O.checkConnection(r.connection)) {
                                            var u = a.getAsString();
                                            r.connection.send(u)
                                        }
                                    } else c.Logger.log("no logged-in user", "null")
                                }), (function (e) {
                                    c.Logger.log("error in fetching logged-in user", e)
                                }))
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: sendTransientMessage", e)
                            }
                        }, e.prototype.publishTypingIndicator = function (e) {
                            try {
                                var t = e.getTypingIndicator();
                                switch (e.getAction()) {
                                    case m.TYPING_INDICATOR.ACTION.STARTED:
                                        v.messageHandlers.map((function (e) {
                                            e._eventListener.onTypingStarted && e._eventListener.onTypingStarted(t)
                                        })), u.TypingNotificationController.addIncomingTypingStarted(t);
                                        break;
                                    case m.TYPING_INDICATOR.ACTION.ENDED:
                                        v.messageHandlers.map((function (e) {
                                            e._eventListener.onTypingEnded && e._eventListener.onTypingEnded(t)
                                        })), u.TypingNotificationController.removeIncomingTypingStarted(t)
                                }
                            } catch (e) {
                                c.Logger.error("WSHelper: publishTypingIndicator", e)
                            }
                        }, e.prototype.publishReceipts = function (e) {
                            try {
                                var t = e.getMessageReceipt();
                                switch (e.getAction()) {
                                    case m.RECEIPTS.ACTION.DELIVERED:
                                        v.messageHandlers.map((function (e) {
                                            e._eventListener.onMessagesDelivered && e._eventListener.onMessagesDelivered(t)
                                        }));
                                        break;
                                    case m.RECEIPTS.ACTION.READ:
                                        v.messageHandlers.map((function (e) {
                                            e._eventListener.onMessagesRead && e._eventListener.onMessagesRead(t)
                                        }))
                                }
                            } catch (e) {
                                c.Logger.error("WSHelper: publishReceipts", e)
                            }
                        }, e.prototype.publishPresence = function (e) {
                            try {
                                var t = e.getUser();
                                switch (t.setLastActiveAt(e.getTimestamp()), e.getAction()) {
                                    case m.PRESENCE.ACTION.ONLINE:
                                    case m.PRESENCE.ACTION.AVAILABLE:
                                        t.setStatus(s.PresenceConstatnts.STATUS.ONLINE), v.userHandlers.map((function (e) {
                                            c.isFalsy(e._eventListener.onUserOnline) || e._eventListener.onUserOnline(t)
                                        }));
                                        break;
                                    case m.PRESENCE.ACTION.OFFLINE:
                                        t.setStatus(s.PresenceConstatnts.STATUS.OFFLINE), v.userHandlers.map((function (e) {
                                            c.isFalsy(e._eventListener.onUserOffline) || e._eventListener.onUserOffline(t)
                                        }))
                                }
                            } catch (e) {
                                c.Logger.error("WSHelper: publishPresence", e)
                            }
                        }, e.prototype.publishMessages = function (e) {
                            try {
                                var t = e.getMessage();
                                t && t.getId() && p.MessageListnerMaping.getInstance().set("all", t.getId()), t instanceof f.Call ? this.publishCallMessage(t) : t instanceof d.Action ? this.publishActionMessage(t) : this.publishMessage(t)
                            } catch (e) {
                                c.Logger.error("WSHelper: publishMessages", e)
                            }
                        }, e.prototype.publishMessage = function (e) {
                            try {
                                v.messageHandlers.map((function (t) {
                                    if (t._eventListener) {
                                        var n = e;
                                        switch (n.getType()) {
                                            case s.MessageConstatnts.TYPE.TEXT:
                                                c.isFalsy(t._eventListener.onTextMessageReceived) || t._eventListener.onTextMessageReceived(e);
                                                break;
                                            case s.MessageConstatnts.TYPE.CUSTOM:
                                                c.isFalsy(t._eventListener.onCustomMessageReceived) || t._eventListener.onCustomMessageReceived(e);
                                                break;
                                            default:
                                                n.getCategory() == s.MessageCategory.CUSTOM ? c.isFalsy(t._eventListener.onCustomMessageReceived) || t._eventListener.onCustomMessageReceived(e) : c.isFalsy(t._eventListener.onMediaMessageReceived) || t._eventListener.onMediaMessageReceived(e)
                                        }
                                    }
                                }))
                            } catch (e) {
                                c.Logger.error("WSHelper: publishMessage", e)
                            }
                        }, e.prototype.publishCallMessage = function (e) {
                            try {
                                var t = a.CallController.getInstance().getActiveCall();
                                switch (e.getStatus()) {
                                    case s.CallConstants.CALL_STATUS.INITIATED:
                                        e.getReceiverType() == s.CallConstants.RECEIVER_TYPE_GROUP ? v.callHandlers.map((function (t) {
                                            e.getCallInitiator().getUid().toLocaleLowerCase() != i.CometChat.user.getUid().toLocaleLowerCase() && (c.isFalsy(t._eventListener.onIncomingCallReceived) || t._eventListener.onIncomingCallReceived(e))
                                        })) : v.callHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onIncomingCallReceived) || t._eventListener.onIncomingCallReceived(e)
                                        }));
                                        break;
                                    case s.CallConstants.CALL_STATUS.ONGOING:
                                        e.getReceiverType() == s.CallConstants.RECEIVER_TYPE_GROUP ? e.getCallInitiator().getUid().toLocaleLowerCase() == i.CometChat.user.getUid().toLocaleLowerCase() && v.callHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onOutgoingCallAccepted) || t._eventListener.onOutgoingCallAccepted(e)
                                        })) : v.callHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onOutgoingCallAccepted) || t._eventListener.onOutgoingCallAccepted(e)
                                        }));
                                        break;
                                    case s.CallConstants.CALL_STATUS.UNANSWERED:
                                        if (e.getCallInitiator().getUid().toLocaleLowerCase() == i.CometChat.user.getUid().toLocaleLowerCase()) v.callHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onOutgoingCallRejected) || t._eventListener.onOutgoingCallRejected(e)
                                        })); else {
                                            if (null !== t && t.getSessionId() === e.getSessionId()) try {
                                                a.CallController.getInstance().endCall()
                                            } catch (e) {
                                                c.Logger.error("CallError", e)
                                            }
                                            v.callHandlers.map((function (t) {
                                                c.isFalsy(t._eventListener.onIncomingCallCancelled) || t._eventListener.onIncomingCallCancelled(e)
                                            }))
                                        }
                                        break;
                                    case s.CallConstants.CALL_STATUS.REJECTED:
                                        if (e.getReceiverType() == s.CallConstants.RECEIVER_TYPE_GROUP) e.getCallInitiator().getUid().toLocaleLowerCase() == i.CometChat.user.getUid().toLocaleLowerCase() && v.callHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onOutgoingCallRejected) || t._eventListener.onOutgoingCallRejected(e)
                                        })); else {
                                            if (null !== t && t.getSessionId() === e.getSessionId()) try {
                                                a.CallController.getInstance().endCall()
                                            } catch (e) {
                                                c.Logger.error("CallError", e)
                                            }
                                            v.callHandlers.map((function (t) {
                                                c.isFalsy(t._eventListener.onOutgoingCallRejected) || t._eventListener.onOutgoingCallRejected(e)
                                            }))
                                        }
                                        break;
                                    case s.CallConstants.CALL_STATUS.BUSY:
                                        e.getReceiverType() == s.CallConstants.RECEIVER_TYPE_GROUP ? e.getCallInitiator().getUid().toLocaleLowerCase() == i.CometChat.user.getUid().toLocaleLowerCase() && v.callHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onOutgoingCallRejected) || t._eventListener.onOutgoingCallRejected(e)
                                        })) : v.callHandlers.map((function (n) {
                                            if (null !== t && t.getSessionId() === e.getSessionId()) try {
                                                a.CallController.getInstance().endCall()
                                            } catch (n) {
                                                c.Logger.error("CallError", n)
                                            }
                                            c.isFalsy(n._eventListener.onOutgoingCallRejected) || n._eventListener.onOutgoingCallRejected(e)
                                        }));
                                        break;
                                    case s.CallConstants.CALL_STATUS.CANCELLED:
                                        if (v.callHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onIncomingCallCancelled) || t._eventListener.onIncomingCallCancelled(e)
                                        })), null !== t && t.getSessionId() === e.getSessionId()) try {
                                            a.CallController.getInstance().endCall()
                                        } catch (e) {
                                            c.Logger.error("CallError", e)
                                        }
                                        break;
                                    case s.CallConstants.CALL_STATUS.ENDED:
                                        if (a.CallController.getInstance().getCallListner() && a.CallController.getInstance().getCallListner()._eventListener.onCallEnded(e), null !== t && t.getSessionId() === e.getSessionId()) try {
                                            a.CallController.getInstance().endCall()
                                        } catch (e) {
                                            c.Logger.error("CallError", e)
                                        }
                                        break;
                                    default:
                                        c.Logger.log("WSHelper: publishCallMessage :: unknown status", e)
                                }
                            } catch (e) {
                                c.Logger.error("WSHelper: publishCallMessage", e)
                            }
                        }, e.prototype.publishActionMessage = function (e) {
                            try {
                                switch (e.getAction()) {
                                    case s.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_JOINED:
                                    case s.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_INVITED:
                                        v.groupHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onGroupMemberJoined) || t._eventListener.onGroupMemberJoined(e, e.getActionBy(), e.getActionFor())
                                        }));
                                        break;
                                    case s.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_LEFT:
                                        v.groupHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onGroupMemberLeft) || t._eventListener.onGroupMemberLeft(e, e.getActionBy(), e.getActionFor())
                                        }));
                                        break;
                                    case s.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_BANNED:
                                        v.groupHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onGroupMemberBanned) || t._eventListener.onGroupMemberBanned(e, e.getActionOn(), e.getActionBy(), e.getActionFor())
                                        }));
                                        break;
                                    case s.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_KICKED:
                                        v.groupHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onGroupMemberKicked) || t._eventListener.onGroupMemberKicked(e, e.getActionOn(), e.getActionBy(), e.getActionFor())
                                        }));
                                        break;
                                    case s.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_UNBANNED:
                                        v.groupHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onGroupMemberUnbanned) || t._eventListener.onGroupMemberUnbanned(e, e.getActionOn(), e.getActionBy(), e.getActionFor())
                                        }));
                                        break;
                                    case s.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_SCOPE_CHANGED:
                                        v.groupHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onGroupMemberScopeChanged) || t._eventListener.onGroupMemberScopeChanged(e, e.getActionOn(), e.getNewScope(), e.getOldScope(), e.getActionFor())
                                        }));
                                        break;
                                    case s.ActionConstatnts.ACTION_TYPE.TYPE_MESSAGE_EDITED:
                                        v.messageHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onMessageEdited) || t._eventListener.onMessageEdited(e.getActionOn())
                                        }));
                                        break;
                                    case s.ActionConstatnts.ACTION_TYPE.TYPE_MESSAGE_DELETED:
                                        v.messageHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onMessageDeleted) || t._eventListener.onMessageDeleted(e.getActionOn())
                                        }));
                                        break;
                                    case s.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_ADDED:
                                        v.groupHandlers.map((function (t) {
                                            c.isFalsy(t._eventListener.onGroupMemberAddedToGroup) || t._eventListener.onGroupMemberAddedToGroup(e, e.getActionOn(), e.getActionBy(), e.getActionFor())
                                        }));
                                        break;
                                    default:
                                        c.Logger.log("WSHelper: publishActionMessage :: unknown action", e)
                                }
                            } catch (e) {
                                c.Logger.error("WSHelper: publishActionMessage", e)
                            }
                        }, e.prototype.publishTransientMessage = function (e) {
                            try {
                                var t = e.getTransientMessage();
                                v.messageHandlers.map((function (e) {
                                    e._eventListener.onTransientMessageReceived && e._eventListener.onTransientMessageReceived(t)
                                }))
                            } catch (e) {
                                c.Logger.error("WSHelper: publishTransientMessage", e)
                            }
                        }, e.prototype.getCometChatEventFromMessage = function (e) {
                            try {
                                if (e.hasOwnProperty(m.KEYS.TYPE)) switch (e.type) {
                                    case m.TYPING_INDICATOR.TYPE:
                                        return A.CometChatTypingEvent.getTypingEventFromJSON(e);
                                    case m.RECEIPTS.TYPE:
                                        return T.CometChatReceiptEvent.getReceiptEventFromJSON(e);
                                    case m.PRESENCE.TYPE:
                                        return C.CometChatPresenceEvent.getPresenceEventFromJSON(e);
                                    case m.MESSAGE.TYPE:
                                        return h.CometChatMessageEvent.getMessageEventFromJSON(e);
                                    case m.AUTH.TYPE:
                                        return S.CometChatAuthEvent.getAuthEventFromJSON(e);
                                    case m.TRANSIENT_MESSAGE.TYPE:
                                        return _.CometChatTransientEvent.getTransientEventFromJSON(e)
                                }
                            } catch (e) {
                                c.Logger.error("WSConnectionHelper: getCometChatEventFromMessage", e)
                            }
                        }, e.wsConnectionHelper = new e, e
                    }();
                t.WSConnectionHelper = N
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                t.__esModule = !0, t.CometChatAuthEvent = void 0;
                var i = n(5), s = function (e) {
                    function t(t, n, r, o, s) {
                        var a = e.call(this, t, n, r, o, s) || this;
                        return a.setType(i.AUTH.TYPE), a
                    }

                    return o(t, e), t.prototype.getStatus = function () {
                        return this.status
                    }, t.prototype.setStatus = function (e) {
                        this.status = e
                    }, t.prototype.getCode = function () {
                        return this.code
                    }, t.prototype.setCode = function (e) {
                        this.code = e
                    }, t.prototype.setAuth = function (e) {
                        this.auth = e
                    }, t.prototype.getAuth = function () {
                        return this.auth
                    }, t.prototype.setPresenceSubscription = function (e) {
                        this.presenceSubscription = e
                    }, t.prototype.getPresenceSubscription = function () {
                        return this.presenceSubscription
                    }, t.prototype.setDeviceId = function (e) {
                        this.deviceId = e
                    }, t.prototype.getdeviceId = function () {
                        return this.deviceId
                    }, t.prototype.setExtraParmaeters = function (e) {
                        this.params = e
                    }, t.prototype.getExtraParameters = function () {
                        return this.params
                    }, t.prototype.getAsString = function () {
                        return JSON.stringify(this.getAsJSONObject())
                    }, t.prototype.getAsJSONObject = function () {
                        var e = this.getCometChatEventJSON(), t = {};
                        return t[i.KEYS.AUTH] = this.auth, t[i.KEYS.DEVICE_ID] = this.deviceId, t[i.KEYS.PRESENCE_SUBSCRIPTION] = this.presenceSubscription, t[i.KEYS.PARAMS] = this.params, e[i.KEYS.BODY] = t, e
                    }, t.getAuthEventFromJSON = function (e) {
                        var n = e[i.KEYS.APP_ID], r = e[i.KEYS.RECEIVER], o = e[i.KEYS.RECEIVER_TYPE],
                            s = e[i.KEYS.DEVICE_ID], a = e[i.KEYS.SENDER], u = e[i.KEYS.BODY], c = u[i.KEYS.STATUS],
                            l = u[i.KEYS.CODE], E = new t(n, r, o, a, s);
                        return E.setStatus(c), E.setCode(l), E
                    }, t
                }(n(9).CometChatEvent);
                t.CometChatAuthEvent = s
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                t.__esModule = !0, t.CometChatMessageEvent = void 0;
                var i = n(10), s = n(5), a = function (e) {
                    function t(t, n, r, o, i) {
                        var a = e.call(this, t, n, r, o, i) || this;
                        return a.setType(s.MESSAGE.TYPE), a
                    }

                    return o(t, e), t.prototype.getMessage = function () {
                        return this.message
                    }, t.prototype.setMessage = function (e) {
                        this.message = e
                    }, t.getMessageEventFromJSON = function (e) {
                        var n = e[s.KEYS.APP_ID], r = e[s.KEYS.RECEIVER], o = e[s.KEYS.RECEIVER_TYPE],
                            a = e[s.KEYS.DEVICE_ID], u = e[s.KEYS.SENDER], c = e[s.KEYS.BODY], l = new t(n, r, o, u, a),
                            E = i.MessageController.trasformJSONMessge(c);
                        return l.setMessage(E), l
                    }, t
                }(n(9).CometChatEvent);
                t.CometChatMessageEvent = a
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                t.__esModule = !0, t.CometChatPingEvent = void 0;
                var i = n(5), s = function (e) {
                    function t(t, n, r, o, i) {
                        return e.call(this, t, n, r, o, i) || this
                    }

                    return o(t, e), t.prototype.getAsString = function () {
                        return JSON.stringify(this.getAsJSONObject())
                    }, t.prototype.getAsJSONObject = function () {
                        var e = {};
                        return e[i.KEYS.ACTION] = i.KEYS.PING, e[i.KEYS.ACK] = "true", e
                    }, t
                }(n(9).CometChatEvent);
                t.CometChatPingEvent = s
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                t.__esModule = !0, t.CometChatPresenceEvent = void 0;
                var i = n(5), s = n(9), a = n(4), u = function (e) {
                    function t(t, n, r, o, s) {
                        var a = e.call(this, t, n, r, o, s) || this;
                        return a.setType(i.PRESENCE.TYPE), a
                    }

                    return o(t, e), t.prototype.getAction = function () {
                        return this.action
                    }, t.prototype.setAction = function (e) {
                        this.action = e
                    }, t.prototype.getUser = function () {
                        return this.user
                    }, t.prototype.setUser = function (e) {
                        this.user = e
                    }, t.prototype.getTimestamp = function () {
                        return this.timestamp
                    }, t.prototype.setTimestamp = function (e) {
                        this.timestamp = e
                    }, t.getPresenceEventFromJSON = function (e) {
                        var n = e[i.KEYS.APP_ID], r = e[i.KEYS.DEVICE_ID], o = e[i.KEYS.SENDER], s = e[i.KEYS.BODY],
                            u = s[i.KEYS.ACTION], c = s[i.KEYS.USER], l = s[i.KEYS.TIMESTAMP],
                            E = new t(n, "", "", o, r);
                        return E.setAction(u), E.setUser(new a.User(c)), E.setTimestamp(l), E
                    }, t
                }(s.CometChatEvent);
                t.CometChatPresenceEvent = u
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                t.__esModule = !0, t.CometChatReceiptEvent = void 0;
                var i = n(5), s = n(9), a = n(22), u = n(4), c = function (e) {
                    function t(t, n, r, o, s, a) {
                        var u = e.call(this, t, n, r, o, s, a) || this;
                        return u.setType(i.RECEIPTS.TYPE), u
                    }

                    return o(t, e), t.prototype.getAction = function () {
                        return this.action
                    }, t.prototype.setAction = function (e) {
                        this.action = e
                    }, t.prototype.getMessageReceipt = function () {
                        return this.receipt
                    }, t.prototype.setMessageReceipt = function (e) {
                        this.receipt = e
                    }, t.prototype.getAsString = function () {
                        return JSON.stringify(this.getAsJSONObject())
                    }, t.prototype.getAsJSONObject = function () {
                        var e = this.getCometChatEventJSON(), t = {};
                        return t[i.KEYS.ACTION] = this.action, t[i.KEYS.MESSAGE_ID] = this.receipt.getMessageId(), t[i.KEYS.USER] = this.receipt.getSender(), e[i.KEYS.BODY] = t, e
                    }, t.getReceiptEventFromJSON = function (e) {
                        var n = e[i.KEYS.APP_ID], r = e[i.KEYS.RECEIVER], o = e[i.KEYS.RECEIVER_TYPE],
                            s = e[i.KEYS.DEVICE_ID], c = e[i.KEYS.SENDER], l = e[i.KEYS.BODY], E = l[i.KEYS.ACTION],
                            p = l[i.KEYS.USER], d = l[i.KEYS.MESSAGE_ID], f = l[i.KEYS.TIMESTAMP],
                            S = new t(n, r, o, c, s);
                        S.setAction(E);
                        var h = new a.MessageReceipt;
                        return h.setSender(new u.User(p)), h.setReceiverType(o), h.setReceiver(r), E === i.RECEIPTS.ACTION.DELIVERED && (h.setReceiptType(i.RECEIPTS.RECEIPT_TYPE.DELIVERY_RECEIPT), h.setDeliveredAt(f)), E === i.RECEIPTS.ACTION.READ && (h.setReceiptType(i.RECEIPTS.RECEIPT_TYPE.READ_RECEIPT), h.setReadAt(f)), h.setMessageId(d.toString()), h.setTimestamp(f), S.setMessageReceipt(h), S
                    }, t
                }(s.CometChatEvent);
                t.CometChatReceiptEvent = c
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                t.__esModule = !0, t.CometChatTransientEvent = void 0;
                var i = n(5), s = n(9), a = n(27), u = n(4), c = function (e) {
                    function t(t, n, r, o, s) {
                        var a = e.call(this, t, n, r, o, s) || this;
                        return a.setType(i.TRANSIENT_MESSAGE.TYPE), a
                    }

                    return o(t, e), t.prototype.getTransientMessage = function () {
                        return this.transientMessage
                    }, t.prototype.setTransientMessage = function (e) {
                        this.transientMessage = e
                    }, t.prototype.getAsString = function () {
                        return JSON.stringify(this.getAsJSONObject())
                    }, t.prototype.getAsJSONObject = function () {
                        var e = this.getCometChatEventJSON(), t = {};
                        return t[i.KEYS.USER] = this.transientMessage.getSender(), this.transientMessage.getData() && (t[i.KEYS.DATA] = this.transientMessage.getData()), e[i.KEYS.BODY] = t, e
                    }, t.getTransientEventFromJSON = function (e) {
                        var n = e[i.KEYS.APP_ID], r = e[i.KEYS.RECEIVER], o = e[i.KEYS.RECEIVER_TYPE],
                            s = e[i.KEYS.DEVICE_ID], c = e[i.KEYS.SENDER], l = e[i.KEYS.BODY], E = l[i.KEYS.USER],
                            p = l[i.KEYS.DATA], d = new t(n, r, o, c, s), f = new a.TransientMessage(r, o, p);
                        return f.setSender(new u.User(E)), l.hasOwnProperty(i.KEYS.DATA) && l[i.KEYS.DATA] && f.setData(p), d.setTransientMessage(f), d
                    }, t
                }(s.CometChatEvent);
                t.CometChatTransientEvent = c
            }, function (e, t, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
                }, function (e, t) {
                    function n() {
                        this.constructor = e
                    }

                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                t.__esModule = !0, t.CometChatTypingEvent = void 0;
                var i = n(5), s = n(9), a = n(26), u = n(4), c = function (e) {
                    function t(t, n, r, o, s) {
                        var a = e.call(this, t, n, r, o, s) || this;
                        return a.setType(i.TYPING_INDICATOR.TYPE), a
                    }

                    return o(t, e), t.prototype.getAction = function () {
                        return this.action
                    }, t.prototype.setAction = function (e) {
                        this.action = e
                    }, t.prototype.getTypingIndicator = function () {
                        return this.typingIndicator
                    }, t.prototype.setTypingIndicator = function (e) {
                        this.typingIndicator = e
                    }, t.prototype.getAsString = function () {
                        return JSON.stringify(this.getAsJSONObject())
                    }, t.prototype.getAsJSONObject = function () {
                        var e = this.getCometChatEventJSON(), t = {};
                        return t[i.KEYS.ACTION] = this.action, t[i.KEYS.USER] = this.typingIndicator.getSender(), this.typingIndicator.getMetadata() && (t[i.KEYS.METADATA] = this.typingIndicator.getMetadata()), e[i.KEYS.BODY] = t, e
                    }, t.getTypingEventFromJSON = function (e) {
                        var n = e[i.KEYS.APP_ID], r = e[i.KEYS.RECEIVER], o = e[i.KEYS.RECEIVER_TYPE],
                            s = e[i.KEYS.DEVICE_ID], c = e[i.KEYS.SENDER], l = e[i.KEYS.BODY], E = l[i.KEYS.ACTION],
                            p = l[i.KEYS.USER], d = l[i.KEYS.METADATA], f = new t(n, r, o, c, s);
                        f.setAction(E);
                        var S = new a.TypingIndicator(r, o);
                        return S.setSender(new u.User(p)), l.hasOwnProperty(i.KEYS.METADATA) && l[i.KEYS.METADATA] && S.setMetadata(d), f.setTypingIndicator(S), f
                    }, t
                }(s.CometChatEvent);
                t.CometChatTypingEvent = c
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.getWSURL = t.stringifyMessage = t.checkConnection = void 0;
                var r = n(1), o = n(0), i = n(5);
                t.checkConnection = function (e) {
                    return e && e.readyState === i.READY_STATE.OPEN
                }, t.stringifyMessage = function (e) {
                    return JSON.stringify(e)
                }, t.getWSURL = function () {
                    return new Promise((function (e, t) {
                        o.getAppSettings().then((function (t) {
                            var n = i.WS.protocol + o.getChatHost(t) + ":" + t[r.APP_SETTINGS.KEYS.CHAT_WSS_PORT];
                            e(n)
                        }), (function (e) {
                            o.Logger.error("WSHelper :: getWSURL", e)
                        }))
                    }))
                }
            }, function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.CCExtension = void 0;
                var r = n(0), o = function () {
                    function e(e) {
                        this.id = "", this.name = "", e && (r.isFalsy(e.id) || (this.id = e.id), r.isFalsy(e.name) || (this.name = e.name))
                    }

                    return e.prototype.getId = function () {
                        return this.id
                    }, e.prototype.getName = function () {
                        return this.name
                    }, e
                }();
                t.CCExtension = o
            }, function (e, t, n) {
                var r = n(64), o = n(65);
                e.exports = function (e, t, n) {
                    var i = t && n || 0;
                    "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                    var s = (e = e || {}).random || (e.rng || r)();
                    if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t) for (var a = 0; a < 16; ++a) t[i + a] = s[a];
                    return t || o(s)
                }
            }, function (e, t) {
                var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
                if (n) {
                    var r = new Uint8Array(16);
                    e.exports = function () {
                        return n(r), r
                    }
                } else {
                    var o = new Array(16);
                    e.exports = function () {
                        for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
                        return o
                    }
                }
            }, function (e, t) {
                for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
                e.exports = function (e, t) {
                    var r = t || 0, o = n;
                    return [o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]]].join("")
                }
            }])
        }, 7607: (e, t, n) => {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            n.d(t, {Z: () => a});
            var o, i, s, a = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }

                var t, n;
                return t = e, n = [{
                    key: "on", value: function (t, n) {
                        e._triggers[t] || (e._triggers[t] = []), e._triggers[t].push(n)
                    }
                }, {
                    key: "triggerHandler", value: function (t, n) {
                        if (e._triggers[t]) for (var r in e._triggers[t]) e._triggers[t][r](n)
                    }
                }, {
                    key: "remove", value: function (t) {
                        e._triggers[t] && delete e._triggers[t]
                    }
                }], null && r(t.prototype, null), n && r(t, n), e
            }();
            s = {}, (i = "_triggers") in (o = a) ? Object.defineProperty(o, i, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : o[i] = s
        }, 2861: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => p}), n(9665), n(5767), n(6108), n(6253), n(2139), n(8838);
            var r = n(7294);

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function a(e, t) {
                return (a = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function u(e, t) {
                return !t || "object" !== o(t) && "function" != typeof t ? c(e) : t
            }

            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function E(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            const p = function (e, t) {
                return function (n) {
                    !function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && a(e, t)
                    }(h, n);
                    var o, p, d, f, S = (d = h, f = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                            }))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function () {
                        var e, t = l(d);
                        if (f) {
                            var n = l(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else e = t.apply(this, arguments);
                        return u(this, e)
                    });

                    function h() {
                        var e;
                        i(this, h);
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return E(c(e = S.call.apply(S, [this].concat(n))), "state", {component: null}), e
                    }

                    return o = h, (p = [{
                        key: "componentDidMount", value: function () {
                            var n = this;
                            t().then((function (t) {
                                n.setState({component: e ? t[e] : t.default})
                            })).catch((function (e) {
                                console.log("asyncComponent error", e)
                            }))
                        }
                    }, {
                        key: "render", value: function () {
                            var e = this.state.component;
                            return e ? r.createElement(e, this.props) : null
                        }
                    }]) && s(o.prototype, p), h
                }(r.Component)
            }
        }, 7226: (e, t, n) => {
            "use strict";
            n.d(t, {default: () => T}), n(8351), n(5767), n(6108), n(1181), n(6997), n(7476), n(851), n(6253);
            var r = n(6418), o = (n(5115), n(7294)), i = n(3935), s = n(7607), a = n(3671);

            function u() {
                return (u = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function (t) {
                        p(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function E(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function p(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var d = (0, n(2861).Z)("App", (function () {
                return Promise.all([n.e(2), n.e(1)]).then(n.bind(n, 6023))
            })), f = function () {
                function e(t) {
                    var n = this;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), p(this, "options", {
                        defaultID: "",
                        defaultType: "",
                        loggedInUser: {},
                        settings: {},
                        targetElement: null
                    }), p(this, "getUserOrGroup", (function () {
                        return new Promise((function (e, t) {
                            if (!n.options.defaultID || 0 === n.options.defaultID.trim().length) return console.log("CometChat Widget: ", "defaultID not available."), e({
                                type: "",
                                user: {}
                            });
                            n.options.defaultType && 0 !== n.options.defaultType.trim().length || (console.log("CometChat Widget: ", "defaultType not available."), e({
                                type: "",
                                user: {}
                            }));
                            var o = n.options.defaultID.trim(), i = n.options.defaultType.trim();
                            o && i === r.CometChat.ACTION_TYPE.TYPE_USER ? (n.options.loggedInUser.uid === o && e({
                                type: "",
                                user: {}
                            }), r.CometChat.getUser(o).then((function (t) {
                                e({type: r.CometChat.ACTION_TYPE.TYPE_USER, user: t})
                            })).catch((function (t) {
                                console.log("CometChat Widget Error: ", t), e({type: "", user: {}})
                            }))) : o && i === r.CometChat.ACTION_TYPE.TYPE_GROUP && r.CometChat.getGroup(o).then((function (t) {
                                if (t.hasJoined) e({type: r.CometChat.ACTION_TYPE.TYPE_GROUP, user: t}); else {
                                    var n = t.guid, o = t.type, i = "";
                                    o === r.CometChat.GROUP_TYPE.PASSWORD && (i = prompt("Enter password to join group")), r.CometChat.joinGroup(n, o, i).then((function (t) {
                                        console.log("CometChat Widget: Group joined successfully", t), e({
                                            type: r.CometChat.ACTION_TYPE.TYPE_GROUP,
                                            user: t
                                        })
                                    })).catch((function (t) {
                                        console.log("CometChat Widget Error: ", t), e({type: "", user: {}})
                                    }))
                                }
                            })).catch((function (t) {
                                console.log("CometChat Widget Error: ", t), e({type: "", user: {}})
                            }))
                        }))
                    })), p(this, "fetchSettings", (function () {
                        var e = n.options.appRegion, t = n.options.widgetID,
                            r = "https://widget".concat("", "-").concat(e, ".cometchat.io/v2/widget?id=").concat(t);
                        return fetch(r)
                    })), p(this, "checkForSettings", (function () {
                        return new Promise((function (e, t) {
                            if (n.options.hasOwnProperty("settings") && Object.keys(n.options.settings).length) {
                                var r = "CometChat Widget: Settings already fetched.";
                                console.log(r), e(r)
                            } else n.fetchSettings(n.options.appRegion, n.options.widgetID).then((function (e) {
                                return e.json()
                            })).then((function (r) {
                                if (r.hasOwnProperty("data") && r.data.hasOwnProperty("configuration")) {
                                    n.options.settings = r.data.configuration;
                                    var o = "CometChat Widget: Settings fetched.";
                                    console.log(o), e(o)
                                } else t("Widget settings not found.")
                            })).catch((function (e) {
                                return t(e)
                            }))
                        }))
                    })), p(this, "actionHandler", (function (e, t) {
                        switch (e) {
                            case"onMessageReceived":
                                return void s.Z.triggerHandler("onMessageReceived", {status: "success", response: t});
                            case a.F.OPEN_CHAT:
                                return void s.Z.triggerHandler(a.F.OPEN_CHAT, l({}, t));
                            case a.F.CLOSE_CHAT:
                                return void s.Z.triggerHandler(a.F.CLOSE_CHAT, l({}, t))
                        }
                    })), Object.assign(this.options, t)
                }

                var t, n;
                return t = e, (n = [{
                    key: "render", value: function () {
                        var e = this;
                        return new Promise((function (t, n) {
                            e.getUserOrGroup().then((function (r) {
                                if (!e.options.hasOwnProperty("docked") || !0 !== e.options.docked && "true" !== e.options.docked) {
                                    !1 !== e.options.hasOwnProperty("target") && 0 !== e.options.target.trim().length || n("Target not available.");
                                    var s = document.createElement("div");
                                    s.setAttribute("id", "cometchat__widget"), s.style.width = "100%", s.style.height = "100%", document.querySelector(e.options.target).appendChild(s), e.options.targetElement = s
                                } else {
                                    var a = document.createElement("div");
                                    a.setAttribute("id", "cometchat__widget"), a.style.width = "100%", a.style.height = "100%", document.body.appendChild(a), e.options.targetElement = a
                                }
                                var c = Object.assign({}, e.options, {user: r.user, type: r.type});
                                i.render(o.createElement(d, u({}, c, {actionGenerated: e.actionHandler})), e.options.targetElement, (function () {
                                    t("Widget launched.")
                                }))
                            }))
                        }))
                    }
                }]) && E(t.prototype, n), e
            }();

            function S(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(n), !0).forEach((function (t) {
                        C(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function g(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function C(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var T = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }

                var t, n;
                return t = e, n = [{
                    key: "init", value: function (t) {
                        return new Promise((function (n, o) {
                            if (r.CometChat.isInitialized()) {
                                var i = "CometChat Widget: CometChat already initialized";
                                return console.log(i), void n(i)
                            }
                            if (!t) {
                                var s = "CometChat Widget Error: App ID and Region not available.";
                                return console.error(s), void o(s)
                            }
                            if (!t.appID) {
                                var a = "CometChat Widget Error: App ID not available.";
                                return console.error(a), void o(a)
                            }
                            if (!t.appRegion) {
                                var u = "CometChat Widget Error: Region not available.";
                                return console.error(u), void o(u)
                            }
                            e.appID = t.appID, e.appRegion = t.appRegion, t.authKey && (e.authKey = t.authKey);
                            var c = (new r.CometChat.AppSettingsBuilder).subscribePresenceForAllUsers().setRegion(e.appRegion).build();
                            r.CometChat.init(e.appID, c).then((function (e) {
                                r.CometChat.setSource && r.CometChat.setSource("chat-widget", "web", "reactjs"), console.log("CometChat Widget: CometChat initialised successfully"), n(e)
                            })).catch((function (e) {
                                console.error("CometChat Widget Error: ", e), o(e)
                            }))
                        }))
                    }
                }, {
                    key: "login", value: function (t) {
                        return new Promise((function (n, o) {
                            if (!r.CometChat.isInitialized()) {
                                var i = "CometChat Widget Error: CometChat not initialized.";
                                return console.error(i), void o(i)
                            }
                            if (!t || !t.uid && !t.authToken) {
                                var s = "CometChat Widget Error: uid OR AuthToken is not available.";
                                return console.error(s), void o(s)
                            }
                            var a = [];
                            if (t.authToken) a.push(t.authToken), e.authToken = t.authToken; else if (t.uid) {
                                if (!e.authKey) {
                                    var u = "CometChat Widget Error: AuthKey is not available.";
                                    return console.error(u), void o(u)
                                }
                                e.UID = t.uid, a.push(e.UID, e.authKey)
                            }
                            r.CometChat.login.apply(r.CometChat, a).then((function (e) {
                                if (e) return console.log("CometChat Widget: User logged in successfully"), void n(e);
                                var t = "CometChat Widget Error: Error in login.";
                                return console.error(t), void o(t)
                            })).catch((function (e) {
                                console.error("CometChat Widget Error: ", e), o(e)
                            }))
                        }))
                    }
                }, {
                    key: "logout", value: function () {
                        return new Promise((function (e, t) {
                            r.CometChat.logout().then((function (t) {
                                console.log("CometChat Widget: Logged out successfully."), e(t)
                            })).catch((function (e) {
                                console.error("CometChat Widget Error: ", e), t(e)
                            }))
                        }))
                    }
                }, {
                    key: "createOrUpdateUser", value: function (e) {
                        return this.updateUser(e)
                    }
                }, {
                    key: "updateUser", value: function (t) {
                        return new Promise((function (n, o) {
                            if (!r.CometChat.isInitialized()) {
                                var i = "CometChat Widget Error: CometChat not initialized.";
                                return console.error(i), void o(i)
                            }
                            if (!t) {
                                var s = "CometChat Widget Error: User details not available.";
                                return console.error(s), o(s)
                            }
                            if (!e.authKey) {
                                var a = "CometChat Widget Error: AuthKey is not available.";
                                return console.error(a), o(a)
                            }
                            r.CometChat.updateUser(t, e.authKey).then((function (e) {
                                return console.log("CometChat Widget: User updated successfully.", e), n(e)
                            })).catch((function (i) {
                                if (!i.code || "ERR_UID_NOT_FOUND" !== i.code) return console.error("CometChat Widget Error: ", i), o(i);
                                r.CometChat.createUser(t, e.authKey).then((function (e) {
                                    return console.log("CometChat Widget: User created.", e), n(e)
                                })).catch((function (e) {
                                    return console.error("CometChat Widget Error: ", e), o(e)
                                }))
                            }))
                        }))
                    }
                }, {
                    key: "createOrUpdateGroup", value: function (e) {
                        return this.updateGroup(e)
                    }
                }, {
                    key: "updateGroup", value: function (e) {
                        var t = this;
                        return new Promise((function (n, o) {
                            if (!r.CometChat.isInitialized()) {
                                var i = "CometChat Widget Error: CometChat not initialized.";
                                return console.error(i), o(i)
                            }
                            r.CometChat.getLoggedinUser().then((function (n) {
                                return t.groupValidator(e)
                            })).then((function (e) {
                                return r.CometChat.updateGroup(e)
                            })).then((function (e) {
                                return console.log("CometChat Widget: Group details updated successfully.", e), n(e)
                            })).catch((function (i) {
                                if (!i.code || "ERR_GUID_NOT_FOUND" !== i.code) return console.error("CometChat Widget Error: ", i), o(i);
                                t.groupValidator(e).then((function (e) {
                                    return r.CometChat.createGroup(e)
                                })).then((function (e) {
                                    return console.log("CometChat Widget: Group created.", e), n(e)
                                })).catch((function (e) {
                                    return console.error("CometChat Widget Error: ", e), o(e)
                                }))
                            }))
                        }))
                    }
                }, {
                    key: "launch", value: function (t) {
                        return new Promise((function (n, o) {
                            if (!r.CometChat.isInitialized()) {
                                var i = "CometChat Widget Error: CometChat not initialized";
                                return console.error(i), void o(i)
                            }
                            r.CometChat.getLoggedinUser().then((function (r) {
                                if (null === r || 0 === Object.keys(r).length) {
                                    var i = "CometChat Widget Error: User not logged in.";
                                    return console.error(i), void o(i)
                                }
                                if (!t.widgetID) {
                                    var s = "CometChat Widget Error: widgetID is not available.";
                                    return console.error(s), void o(s)
                                }
                                var a = h(h({}, t), {}, {appID: e.appID, appRegion: e.appRegion, loggedInUser: r}),
                                    u = new f(a);
                                u.checkForSettings().then((function (e) {
                                    u.render().then((function (e) {
                                        console.log("CometChat Widget: ", e), n(e)
                                    })).catch((function (e) {
                                        console.error("CometChat Widget Error: ", e), o(e)
                                    }))
                                })).catch((function (e) {
                                    console.error("CometChat Widget Error: ", e), o(e)
                                }))
                            })).catch((function (e) {
                                console.error("CometChat Widget Error: ", e), o(e)
                            }))
                        }))
                    }
                }, {
                    key: "chatWithUser", value: function (e) {
                        e ? (e = e.toString(), s.Z.triggerHandler("chatWithUser", {uid: e})) : console.error("CometChat Widget Error: uid not available")
                    }
                }, {
                    key: "chatWithGroup", value: function (e) {
                        e ? (e = e.toString(), s.Z.triggerHandler("chatWithGroup", {guid: e})) : console.error("CometChat Widget Error: guid not available")
                    }
                }, {
                    key: "callUser", value: function (e) {
                        e ? (e = e.toString(), s.Z.triggerHandler("callUser", {uid: e})) : console.error("CometChat Widget Error: uid not available")
                    }
                }, {
                    key: "callGroup", value: function (e) {
                        e ? (e = e.toString(), s.Z.triggerHandler("callGroup", {guid: e})) : console.error("CometChat Widget Error: guid not available")
                    }
                }, {
                    key: "openOrCloseChat", value: function (e) {
                        var t = e ? "onOpenChat" : "onCloseChat";
                        s.Z.triggerHandler(t, {flag: e})
                    }
                }, {
                    key: "localize", value: function (e) {
                        e.trim().length ? s.Z.triggerHandler("localize", {lang: e}) : console.error("CometChat Widget Error: language not available")
                    }
                }], null && g(t.prototype, null), n && g(t, n), e
            }();
            C(T, "appID", void 0), C(T, "appRegion", void 0), C(T, "authKey", void 0), C(T, "widgetID", void 0), C(T, "settings", {}), C(T, "on", s.Z.on), C(T, "CometChat", r.CometChat), C(T, "groupValidator", (function (e) {
                return new Promise((function (t, n) {
                    if (!e) {
                        var o = "CometChat Widget Error: Group details not available.";
                        return console.error(o), n(o)
                    }
                    if (!(e instanceof r.CometChat.Group)) {
                        if (!e.guid) {
                            var i = "CometChat Widget Error: guid is not available.";
                            return console.error(i), n(i)
                        }
                        if (!e.groupName) {
                            var s = "CometChat Widget Error: groupName is not available.";
                            return console.error(s), n(s)
                        }
                        if (!e.groupType) {
                            var a = "CometChat Widget Error: groupType is not available.";
                            return console.error(a), n(a)
                        }
                        var u = "";
                        if (e.groupType === r.CometChat.GROUP_TYPE.PASSWORD) {
                            if (!e.password) {
                                var c = "CometChat Widget Error: password is not available.";
                                return console.error(c), n(c)
                            }
                            u = e.password
                        }
                        return t(new r.CometChat.Group(e.guid, e.groupName, e.groupType, u))
                    }
                    t(e)
                }))
            }))
        }, 3671: (e, t, n) => {
            "use strict";
            n.d(t, {F: () => r, t: () => o});
            var r = {OPEN_CHAT: "openChat", CLOSE_CHAT: "closeChat"},
                o = {WIDGET_SETTINGS: {STYLE: "style", SIDEBAR: "sidebar", MAIN: "main"}}
        }, 4963: e => {
            e.exports = function (e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e
            }
        }, 7722: (e, t, n) => {
            var r = n(6314)("unscopables"), o = Array.prototype;
            null == o[r] && n(7728)(o, r, {}), e.exports = function (e) {
                o[r][e] = !0
            }
        }, 3328: e => {
            e.exports = function (e, t, n, r) {
                if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
                return e
            }
        }, 7007: (e, t, n) => {
            var r = n(5286);
            e.exports = function (e) {
                if (!r(e)) throw TypeError(e + " is not an object!");
                return e
            }
        }, 9315: (e, t, n) => {
            var r = n(2110), o = n(875), i = n(2337);
            e.exports = function (e) {
                return function (t, n, s) {
                    var a, u = r(t), c = o(u.length), l = i(s, c);
                    if (e && n != n) {
                        for (; c > l;) if ((a = u[l++]) != a) return !0
                    } else for (; c > l; l++) if ((e || l in u) && u[l] === n) return e || l || 0;
                    return !e && -1
                }
            }
        }, 4398: (e, t, n) => {
            "use strict";
            var r = n(4963), o = n(5286), i = n(7242), s = [].slice, a = {}, u = function (e, t, n) {
                if (!(t in a)) {
                    for (var r = [], o = 0; o < t; o++) r[o] = "a[" + o + "]";
                    a[t] = Function("F,a", "return new F(" + r.join(",") + ")")
                }
                return a[t](e, n)
            };
            e.exports = Function.bind || function (e) {
                var t = r(this), n = s.call(arguments, 1), a = function () {
                    var r = n.concat(s.call(arguments));
                    return this instanceof a ? u(t, r.length, r) : i(t, r, e)
                };
                return o(t.prototype) && (a.prototype = t.prototype), a
            }
        }, 1488: (e, t, n) => {
            var r = n(2032), o = n(6314)("toStringTag"), i = "Arguments" == r(function () {
                return arguments
            }());
            e.exports = function (e) {
                var t, n, s;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                    try {
                        return e[t]
                    } catch (e) {
                    }
                }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
            }
        }, 2032: e => {
            var t = {}.toString;
            e.exports = function (e) {
                return t.call(e).slice(8, -1)
            }
        }, 5645: e => {
            var t = e.exports = {version: "2.6.11"};
            "number" == typeof __e && (__e = t)
        }, 2811: (e, t, n) => {
            "use strict";
            var r = n(9275), o = n(681);
            e.exports = function (e, t, n) {
                t in e ? r.f(e, t, o(0, n)) : e[t] = n
            }
        }, 741: (e, t, n) => {
            var r = n(4963);
            e.exports = function (e, t, n) {
                if (r(e), void 0 === t) return e;
                switch (n) {
                    case 1:
                        return function (n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function (n, r) {
                            return e.call(t, n, r)
                        };
                    case 3:
                        return function (n, r, o) {
                            return e.call(t, n, r, o)
                        }
                }
                return function () {
                    return e.apply(t, arguments)
                }
            }
        }, 1355: e => {
            e.exports = function (e) {
                if (null == e) throw TypeError("Can't call method on  " + e);
                return e
            }
        }, 7057: (e, t, n) => {
            e.exports = !n(4253)((function () {
                return 7 != Object.defineProperty({}, "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }))
        }, 2457: (e, t, n) => {
            var r = n(5286), o = n(3816).document, i = r(o) && r(o.createElement);
            e.exports = function (e) {
                return i ? o.createElement(e) : {}
            }
        }, 4430: e => {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }, 5541: (e, t, n) => {
            var r = n(7184), o = n(4548), i = n(4682);
            e.exports = function (e) {
                var t = r(e), n = o.f;
                if (n) for (var s, a = n(e), u = i.f, c = 0; a.length > c;) u.call(e, s = a[c++]) && t.push(s);
                return t
            }
        }, 2985: (e, t, n) => {
            var r = n(3816), o = n(5645), i = n(7728), s = n(7234), a = n(741), u = function (e, t, n) {
                var c, l, E, p, d = e & u.F, f = e & u.G, S = e & u.S, h = e & u.P, g = e & u.B,
                    C = f ? r : S ? r[t] || (r[t] = {}) : (r[t] || {}).prototype, T = f ? o : o[t] || (o[t] = {}),
                    _ = T.prototype || (T.prototype = {});
                for (c in f && (n = t), n) E = ((l = !d && C && void 0 !== C[c]) ? C : n)[c], p = g && l ? a(E, r) : h && "function" == typeof E ? a(Function.call, E) : E, C && s(C, c, E, e & u.U), T[c] != E && i(T, c, p), h && _[c] != E && (_[c] = E)
            };
            r.core = o, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
        }, 4253: e => {
            e.exports = function (e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        }, 3218: (e, t, n) => {
            "use strict";
            var r = n(7007);
            e.exports = function () {
                var e = r(this), t = "";
                return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
            }
        }, 3531: (e, t, n) => {
            var r = n(741), o = n(8851), i = n(6555), s = n(7007), a = n(875), u = n(9002), c = {}, l = {},
                E = e.exports = function (e, t, n, E, p) {
                    var d, f, S, h, g = p ? function () {
                        return e
                    } : u(e), C = r(n, E, t ? 2 : 1), T = 0;
                    if ("function" != typeof g) throw TypeError(e + " is not iterable!");
                    if (i(g)) {
                        for (d = a(e.length); d > T; T++) if ((h = t ? C(s(f = e[T])[0], f[1]) : C(e[T])) === c || h === l) return h
                    } else for (S = g.call(e); !(f = S.next()).done;) if ((h = o(S, C, f.value, t)) === c || h === l) return h
                };
            E.BREAK = c, E.RETURN = l
        }, 18: (e, t, n) => {
            e.exports = n(3825)("native-function-to-string", Function.toString)
        }, 3816: e => {
            var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = t)
        }, 9181: e => {
            var t = {}.hasOwnProperty;
            e.exports = function (e, n) {
                return t.call(e, n)
            }
        }, 7728: (e, t, n) => {
            var r = n(9275), o = n(681);
            e.exports = n(7057) ? function (e, t, n) {
                return r.f(e, t, o(1, n))
            } : function (e, t, n) {
                return e[t] = n, e
            }
        }, 639: (e, t, n) => {
            var r = n(3816).document;
            e.exports = r && r.documentElement
        }, 1734: (e, t, n) => {
            e.exports = !n(7057) && !n(4253)((function () {
                return 7 != Object.defineProperty(n(2457)("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }))
        }, 7242: e => {
            e.exports = function (e, t, n) {
                var r = void 0 === n;
                switch (t.length) {
                    case 0:
                        return r ? e() : e.call(n);
                    case 1:
                        return r ? e(t[0]) : e.call(n, t[0]);
                    case 2:
                        return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                    case 3:
                        return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                    case 4:
                        return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
                }
                return e.apply(n, t)
            }
        }, 9797: (e, t, n) => {
            var r = n(2032);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
                return "String" == r(e) ? e.split("") : Object(e)
            }
        }, 6555: (e, t, n) => {
            var r = n(2803), o = n(6314)("iterator"), i = Array.prototype;
            e.exports = function (e) {
                return void 0 !== e && (r.Array === e || i[o] === e)
            }
        }, 4302: (e, t, n) => {
            var r = n(2032);
            e.exports = Array.isArray || function (e) {
                return "Array" == r(e)
            }
        }, 5286: e => {
            e.exports = function (e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        }, 8851: (e, t, n) => {
            var r = n(7007);
            e.exports = function (e, t, n, o) {
                try {
                    return o ? t(r(n)[0], n[1]) : t(n)
                } catch (t) {
                    var i = e.return;
                    throw void 0 !== i && r(i.call(e)), t
                }
            }
        }, 9988: (e, t, n) => {
            "use strict";
            var r = n(2503), o = n(681), i = n(2943), s = {};
            n(7728)(s, n(6314)("iterator"), (function () {
                return this
            })), e.exports = function (e, t, n) {
                e.prototype = r(s, {next: o(1, n)}), i(e, t + " Iterator")
            }
        }, 2923: (e, t, n) => {
            "use strict";
            var r = n(4461), o = n(2985), i = n(7234), s = n(7728), a = n(2803), u = n(9988), c = n(2943), l = n(468),
                E = n(6314)("iterator"), p = !([].keys && "next" in [].keys()), d = "keys", f = "values",
                S = function () {
                    return this
                };
            e.exports = function (e, t, n, h, g, C, T) {
                u(n, t, h);
                var _, A, I, R = function (e) {
                        if (!p && e in v) return v[e];
                        switch (e) {
                            case d:
                            case f:
                                return function () {
                                    return new n(this, e)
                                }
                        }
                        return function () {
                            return new n(this, e)
                        }
                    }, y = t + " Iterator", m = g == f, O = !1, v = e.prototype, N = v[E] || v["@@iterator"] || g && v[g],
                    L = N || R(g), P = g ? m ? R("entries") : L : void 0, M = "Array" == t && v.entries || N;
                if (M && (I = l(M.call(new e))) !== Object.prototype && I.next && (c(I, y, !0), r || "function" == typeof I[E] || s(I, E, S)), m && N && N.name !== f && (O = !0, L = function () {
                    return N.call(this)
                }), r && !T || !p && !O && v[E] || s(v, E, L), a[t] = L, a[y] = S, g) if (_ = {
                    values: m ? L : R(f),
                    keys: C ? L : R(d),
                    entries: P
                }, T) for (A in _) A in v || i(v, A, _[A]); else o(o.P + o.F * (p || O), t, _);
                return _
            }
        }, 7462: (e, t, n) => {
            var r = n(6314)("iterator"), o = !1;
            try {
                var i = [7][r]();
                i.return = function () {
                    o = !0
                }, Array.from(i, (function () {
                    throw 2
                }))
            } catch (e) {
            }
            e.exports = function (e, t) {
                if (!t && !o) return !1;
                var n = !1;
                try {
                    var i = [7], s = i[r]();
                    s.next = function () {
                        return {done: n = !0}
                    }, i[r] = function () {
                        return s
                    }, e(i)
                } catch (e) {
                }
                return n
            }
        }, 5436: e => {
            e.exports = function (e, t) {
                return {value: t, done: !!e}
            }
        }, 2803: e => {
            e.exports = {}
        }, 4461: e => {
            e.exports = !1
        }, 4728: (e, t, n) => {
            var r = n(3953)("meta"), o = n(5286), i = n(9181), s = n(9275).f, a = 0,
                u = Object.isExtensible || function () {
                    return !0
                }, c = !n(4253)((function () {
                    return u(Object.preventExtensions({}))
                })), l = function (e) {
                    s(e, r, {value: {i: "O" + ++a, w: {}}})
                }, E = e.exports = {
                    KEY: r, NEED: !1, fastKey: function (e, t) {
                        if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!i(e, r)) {
                            if (!u(e)) return "F";
                            if (!t) return "E";
                            l(e)
                        }
                        return e[r].i
                    }, getWeak: function (e, t) {
                        if (!i(e, r)) {
                            if (!u(e)) return !0;
                            if (!t) return !1;
                            l(e)
                        }
                        return e[r].w
                    }, onFreeze: function (e) {
                        return c && E.NEED && u(e) && !i(e, r) && l(e), e
                    }
                }
        }, 4351: (e, t, n) => {
            var r = n(3816), o = n(4193).set, i = r.MutationObserver || r.WebKitMutationObserver, s = r.process,
                a = r.Promise, u = "process" == n(2032)(s);
            e.exports = function () {
                var e, t, n, c = function () {
                    var r, o;
                    for (u && (r = s.domain) && r.exit(); e;) {
                        o = e.fn, e = e.next;
                        try {
                            o()
                        } catch (r) {
                            throw e ? n() : t = void 0, r
                        }
                    }
                    t = void 0, r && r.enter()
                };
                if (u) n = function () {
                    s.nextTick(c)
                }; else if (!i || r.navigator && r.navigator.standalone) if (a && a.resolve) {
                    var l = a.resolve(void 0);
                    n = function () {
                        l.then(c)
                    }
                } else n = function () {
                    o.call(r, c)
                }; else {
                    var E = !0, p = document.createTextNode("");
                    new i(c).observe(p, {characterData: !0}), n = function () {
                        p.data = E = !E
                    }
                }
                return function (r) {
                    var o = {fn: r, next: void 0};
                    t && (t.next = o), e || (e = o, n()), t = o
                }
            }
        }, 3499: (e, t, n) => {
            "use strict";
            var r = n(4963);

            function o(e) {
                var t, n;
                this.promise = new e((function (e, r) {
                    if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                    t = e, n = r
                })), this.resolve = r(t), this.reject = r(n)
            }

            e.exports.f = function (e) {
                return new o(e)
            }
        }, 5345: (e, t, n) => {
            "use strict";
            var r = n(7057), o = n(7184), i = n(4548), s = n(4682), a = n(508), u = n(9797), c = Object.assign;
            e.exports = !c || n(4253)((function () {
                var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
                return e[n] = 7, r.split("").forEach((function (e) {
                    t[e] = e
                })), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r
            })) ? function (e, t) {
                for (var n = a(e), c = arguments.length, l = 1, E = i.f, p = s.f; c > l;) for (var d, f = u(arguments[l++]), S = E ? o(f).concat(E(f)) : o(f), h = S.length, g = 0; h > g;) d = S[g++], r && !p.call(f, d) || (n[d] = f[d]);
                return n
            } : c
        }, 2503: (e, t, n) => {
            var r = n(7007), o = n(5588), i = n(4430), s = n(9335)("IE_PROTO"), a = function () {
            }, u = function () {
                var e, t = n(2457)("iframe"), r = i.length;
                for (t.style.display = "none", n(639).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; r--;) delete u.prototype[i[r]];
                return u()
            };
            e.exports = Object.create || function (e, t) {
                var n;
                return null !== e ? (a.prototype = r(e), n = new a, a.prototype = null, n[s] = e) : n = u(), void 0 === t ? n : o(n, t)
            }
        }, 9275: (e, t, n) => {
            var r = n(7007), o = n(1734), i = n(1689), s = Object.defineProperty;
            t.f = n(7057) ? Object.defineProperty : function (e, t, n) {
                if (r(e), t = i(t, !0), r(n), o) try {
                    return s(e, t, n)
                } catch (e) {
                }
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        }, 5588: (e, t, n) => {
            var r = n(9275), o = n(7007), i = n(7184);
            e.exports = n(7057) ? Object.defineProperties : function (e, t) {
                o(e);
                for (var n, s = i(t), a = s.length, u = 0; a > u;) r.f(e, n = s[u++], t[n]);
                return e
            }
        }, 8693: (e, t, n) => {
            var r = n(4682), o = n(681), i = n(2110), s = n(1689), a = n(9181), u = n(1734),
                c = Object.getOwnPropertyDescriptor;
            t.f = n(7057) ? c : function (e, t) {
                if (e = i(e), t = s(t, !0), u) try {
                    return c(e, t)
                } catch (e) {
                }
                if (a(e, t)) return o(!r.f.call(e, t), e[t])
            }
        }, 9327: (e, t, n) => {
            var r = n(2110), o = n(616).f, i = {}.toString,
                s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function (e) {
                return s && "[object Window]" == i.call(e) ? function (e) {
                    try {
                        return o(e)
                    } catch (e) {
                        return s.slice()
                    }
                }(e) : o(r(e))
            }
        }, 616: (e, t, n) => {
            var r = n(189), o = n(4430).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function (e) {
                return r(e, o)
            }
        }, 4548: (e, t) => {
            t.f = Object.getOwnPropertySymbols
        }, 468: (e, t, n) => {
            var r = n(9181), o = n(508), i = n(9335)("IE_PROTO"), s = Object.prototype;
            e.exports = Object.getPrototypeOf || function (e) {
                return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
            }
        }, 189: (e, t, n) => {
            var r = n(9181), o = n(2110), i = n(9315)(!1), s = n(9335)("IE_PROTO");
            e.exports = function (e, t) {
                var n, a = o(e), u = 0, c = [];
                for (n in a) n != s && r(a, n) && c.push(n);
                for (; t.length > u;) r(a, n = t[u++]) && (~i(c, n) || c.push(n));
                return c
            }
        }, 7184: (e, t, n) => {
            var r = n(189), o = n(4430);
            e.exports = Object.keys || function (e) {
                return r(e, o)
            }
        }, 4682: (e, t) => {
            t.f = {}.propertyIsEnumerable
        }, 3160: (e, t, n) => {
            var r = n(2985), o = n(5645), i = n(4253);
            e.exports = function (e, t) {
                var n = (o.Object || {})[e] || Object[e], s = {};
                s[e] = t(n), r(r.S + r.F * i((function () {
                    n(1)
                })), "Object", s)
            }
        }, 7643: (e, t, n) => {
            var r = n(616), o = n(4548), i = n(7007), s = n(3816).Reflect;
            e.exports = s && s.ownKeys || function (e) {
                var t = r.f(i(e)), n = o.f;
                return n ? t.concat(n(e)) : t
            }
        }, 188: e => {
            e.exports = function (e) {
                try {
                    return {e: !1, v: e()}
                } catch (e) {
                    return {e: !0, v: e}
                }
            }
        }, 94: (e, t, n) => {
            var r = n(7007), o = n(5286), i = n(3499);
            e.exports = function (e, t) {
                if (r(e), o(t) && t.constructor === e) return t;
                var n = i.f(e);
                return (0, n.resolve)(t), n.promise
            }
        }, 681: e => {
            e.exports = function (e, t) {
                return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
            }
        }, 4408: (e, t, n) => {
            var r = n(7234);
            e.exports = function (e, t, n) {
                for (var o in t) r(e, o, t[o], n);
                return e
            }
        }, 7234: (e, t, n) => {
            var r = n(3816), o = n(7728), i = n(9181), s = n(3953)("src"), a = n(18), u = "toString",
                c = ("" + a).split(u);
            n(5645).inspectSource = function (e) {
                return a.call(e)
            }, (e.exports = function (e, t, n, a) {
                var u = "function" == typeof n;
                u && (i(n, "name") || o(n, "name", t)), e[t] !== n && (u && (i(n, s) || o(n, s, e[t] ? "" + e[t] : c.join(String(t)))), e === r ? e[t] = n : a ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t], o(e, t, n)))
            })(Function.prototype, u, (function () {
                return "function" == typeof this && this[s] || a.call(this)
            }))
        }, 7375: (e, t, n) => {
            var r = n(5286), o = n(7007), i = function (e, t) {
                if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
            };
            e.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, r) {
                    try {
                        (r = n(741)(Function.call, n(8693).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
                    } catch (e) {
                        t = !0
                    }
                    return function (e, n) {
                        return i(e, n), t ? e.__proto__ = n : r(e, n), e
                    }
                }({}, !1) : void 0), check: i
            }
        }, 2974: (e, t, n) => {
            "use strict";
            var r = n(3816), o = n(9275), i = n(7057), s = n(6314)("species");
            e.exports = function (e) {
                var t = r[e];
                i && t && !t[s] && o.f(t, s, {
                    configurable: !0, get: function () {
                        return this
                    }
                })
            }
        }, 2943: (e, t, n) => {
            var r = n(9275).f, o = n(9181), i = n(6314)("toStringTag");
            e.exports = function (e, t, n) {
                e && !o(e = n ? e : e.prototype, i) && r(e, i, {configurable: !0, value: t})
            }
        }, 9335: (e, t, n) => {
            var r = n(3825)("keys"), o = n(3953);
            e.exports = function (e) {
                return r[e] || (r[e] = o(e))
            }
        }, 3825: (e, t, n) => {
            var r = n(5645), o = n(3816), i = "__core-js_shared__", s = o[i] || (o[i] = {});
            (e.exports = function (e, t) {
                return s[e] || (s[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: r.version,
                mode: n(4461) ? "pure" : "global",
                copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
            })
        }, 8364: (e, t, n) => {
            var r = n(7007), o = n(4963), i = n(6314)("species");
            e.exports = function (e, t) {
                var n, s = r(e).constructor;
                return void 0 === s || null == (n = r(s)[i]) ? t : o(n)
            }
        }, 4193: (e, t, n) => {
            var r, o, i, s = n(741), a = n(7242), u = n(639), c = n(2457), l = n(3816), E = l.process,
                p = l.setImmediate, d = l.clearImmediate, f = l.MessageChannel, S = l.Dispatch, h = 0, g = {},
                C = function () {
                    var e = +this;
                    if (g.hasOwnProperty(e)) {
                        var t = g[e];
                        delete g[e], t()
                    }
                }, T = function (e) {
                    C.call(e.data)
                };
            p && d || (p = function (e) {
                for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
                return g[++h] = function () {
                    a("function" == typeof e ? e : Function(e), t)
                }, r(h), h
            }, d = function (e) {
                delete g[e]
            }, "process" == n(2032)(E) ? r = function (e) {
                E.nextTick(s(C, e, 1))
            } : S && S.now ? r = function (e) {
                S.now(s(C, e, 1))
            } : f ? (i = (o = new f).port2, o.port1.onmessage = T, r = s(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function (e) {
                l.postMessage(e + "", "*")
            }, l.addEventListener("message", T, !1)) : r = "onreadystatechange" in c("script") ? function (e) {
                u.appendChild(c("script")).onreadystatechange = function () {
                    u.removeChild(this), C.call(e)
                }
            } : function (e) {
                setTimeout(s(C, e, 1), 0)
            }), e.exports = {set: p, clear: d}
        }, 2337: (e, t, n) => {
            var r = n(1467), o = Math.max, i = Math.min;
            e.exports = function (e, t) {
                return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
            }
        }, 1467: e => {
            var t = Math.ceil, n = Math.floor;
            e.exports = function (e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e)
            }
        }, 2110: (e, t, n) => {
            var r = n(9797), o = n(1355);
            e.exports = function (e) {
                return r(o(e))
            }
        }, 875: (e, t, n) => {
            var r = n(1467), o = Math.min;
            e.exports = function (e) {
                return e > 0 ? o(r(e), 9007199254740991) : 0
            }
        }, 508: (e, t, n) => {
            var r = n(1355);
            e.exports = function (e) {
                return Object(r(e))
            }
        }, 1689: (e, t, n) => {
            var r = n(5286);
            e.exports = function (e, t) {
                if (!r(e)) return e;
                var n, o;
                if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
                if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
                if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
                throw TypeError("Can't convert object to primitive value")
            }
        }, 3953: e => {
            var t = 0, n = Math.random();
            e.exports = function (e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + n).toString(36))
            }
        }, 575: (e, t, n) => {
            var r = n(3816).navigator;
            e.exports = r && r.userAgent || ""
        }, 6074: (e, t, n) => {
            var r = n(3816), o = n(5645), i = n(4461), s = n(8787), a = n(9275).f;
            e.exports = function (e) {
                var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
                "_" == e.charAt(0) || e in t || a(t, e, {value: s.f(e)})
            }
        }, 8787: (e, t, n) => {
            t.f = n(6314)
        }, 6314: (e, t, n) => {
            var r = n(3825)("wks"), o = n(3953), i = n(3816).Symbol, s = "function" == typeof i;
            (e.exports = function (e) {
                return r[e] || (r[e] = s && i[e] || (s ? i : o)("Symbol." + e))
            }).store = r
        }, 9002: (e, t, n) => {
            var r = n(1488), o = n(6314)("iterator"), i = n(2803);
            e.exports = n(5645).getIteratorMethod = function (e) {
                if (null != e) return e[o] || e["@@iterator"] || i[r(e)]
            }
        }, 6997: (e, t, n) => {
            "use strict";
            var r = n(7722), o = n(5436), i = n(2803), s = n(2110);
            e.exports = n(2923)(Array, "Array", (function (e, t) {
                this._t = s(e), this._i = 0, this._k = t
            }), (function () {
                var e = this._t, t = this._k, n = this._i++;
                return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
            }), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
        }, 5115: (e, t, n) => {
            var r = n(2985);
            r(r.S + r.F, "Object", {assign: n(5345)})
        }, 7476: (e, t, n) => {
            var r = n(508), o = n(7184);
            n(3160)("keys", (function () {
                return function (e) {
                    return o(r(e))
                }
            }))
        }, 8838: (e, t, n) => {
            var r = n(2985);
            r(r.S, "Object", {setPrototypeOf: n(7375).set})
        }, 6253: (e, t, n) => {
            "use strict";
            var r = n(1488), o = {};
            o[n(6314)("toStringTag")] = "z", o + "" != "[object z]" && n(7234)(Object.prototype, "toString", (function () {
                return "[object " + r(this) + "]"
            }), !0)
        }, 851: (e, t, n) => {
            "use strict";
            var r, o, i, s, a = n(4461), u = n(3816), c = n(741), l = n(1488), E = n(2985), p = n(5286), d = n(4963),
                f = n(3328), S = n(3531), h = n(8364), g = n(4193).set, C = n(4351)(), T = n(3499), _ = n(188),
                A = n(575), I = n(94), R = "Promise", y = u.TypeError, m = u.process, O = m && m.versions,
                v = O && O.v8 || "", N = u.Promise, L = "process" == l(m), P = function () {
                }, M = o = T.f, w = !!function () {
                    try {
                        var e = N.resolve(1), t = (e.constructor = {})[n(6314)("species")] = function (e) {
                            e(P, P)
                        };
                        return (L || "function" == typeof PromiseRejectionEvent) && e.then(P) instanceof t && 0 !== v.indexOf("6.6") && -1 === A.indexOf("Chrome/66")
                    } catch (e) {
                    }
                }(), D = function (e) {
                    var t;
                    return !(!p(e) || "function" != typeof (t = e.then)) && t
                }, U = function (e, t) {
                    if (!e._n) {
                        e._n = !0;
                        var n = e._c;
                        C((function () {
                            for (var r = e._v, o = 1 == e._s, i = 0, s = function (t) {
                                var n, i, s, a = o ? t.ok : t.fail, u = t.resolve, c = t.reject, l = t.domain;
                                try {
                                    a ? (o || (2 == e._h && G(e), e._h = 1), !0 === a ? n = r : (l && l.enter(), n = a(r), l && (l.exit(), s = !0)), n === t.promise ? c(y("Promise-chain cycle")) : (i = D(n)) ? i.call(n, u, c) : u(n)) : c(r)
                                } catch (e) {
                                    l && !s && l.exit(), c(e)
                                }
                            }; n.length > i;) s(n[i++]);
                            e._c = [], e._n = !1, t && !e._h && b(e)
                        }))
                    }
                }, b = function (e) {
                    g.call(u, (function () {
                        var t, n, r, o = e._v, i = Y(e);
                        if (i && (t = _((function () {
                            L ? m.emit("unhandledRejection", o, e) : (n = u.onunhandledrejection) ? n({
                                promise: e,
                                reason: o
                            }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", o)
                        })), e._h = L || Y(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v
                    }))
                }, Y = function (e) {
                    return 1 !== e._h && 0 === (e._a || e._c).length
                }, G = function (e) {
                    g.call(u, (function () {
                        var t;
                        L ? m.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({promise: e, reason: e._v})
                    }))
                }, k = function (e) {
                    var t = this;
                    t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), U(t, !0))
                }, x = function (e) {
                    var t, n = this;
                    if (!n._d) {
                        n._d = !0, n = n._w || n;
                        try {
                            if (n === e) throw y("Promise can't be resolved itself");
                            (t = D(e)) ? C((function () {
                                var r = {_w: n, _d: !1};
                                try {
                                    t.call(e, c(x, r, 1), c(k, r, 1))
                                } catch (e) {
                                    k.call(r, e)
                                }
                            })) : (n._v = e, n._s = 1, U(n, !1))
                        } catch (e) {
                            k.call({_w: n, _d: !1}, e)
                        }
                    }
                };
            w || (N = function (e) {
                f(this, N, R, "_h"), d(e), r.call(this);
                try {
                    e(c(x, this, 1), c(k, this, 1))
                } catch (e) {
                    k.call(this, e)
                }
            }, (r = function (e) {
                this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
            }).prototype = n(4408)(N.prototype, {
                then: function (e, t) {
                    var n = M(h(this, N));
                    return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = L ? m.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && U(this, !1), n.promise
                }, catch: function (e) {
                    return this.then(void 0, e)
                }
            }), i = function () {
                var e = new r;
                this.promise = e, this.resolve = c(x, e, 1), this.reject = c(k, e, 1)
            }, T.f = M = function (e) {
                return e === N || e === s ? new i(e) : o(e)
            }), E(E.G + E.W + E.F * !w, {Promise: N}), n(2943)(N, R), n(2974)(R), s = n(5645).Promise, E(E.S + E.F * !w, R, {
                reject: function (e) {
                    var t = M(this);
                    return (0, t.reject)(e), t.promise
                }
            }), E(E.S + E.F * (a || !w), R, {
                resolve: function (e) {
                    return I(a && this === s ? N : this, e)
                }
            }), E(E.S + E.F * !(w && n(7462)((function (e) {
                N.all(e).catch(P)
            }))), R, {
                all: function (e) {
                    var t = this, n = M(t), r = n.resolve, o = n.reject, i = _((function () {
                        var n = [], i = 0, s = 1;
                        S(e, !1, (function (e) {
                            var a = i++, u = !1;
                            n.push(void 0), s++, t.resolve(e).then((function (e) {
                                u || (u = !0, n[a] = e, --s || r(n))
                            }), o)
                        })), --s || r(n)
                    }));
                    return i.e && o(i.v), n.promise
                }, race: function (e) {
                    var t = this, n = M(t), r = n.reject, o = _((function () {
                        S(e, !1, (function (e) {
                            t.resolve(e).then(n.resolve, r)
                        }))
                    }));
                    return o.e && r(o.v), n.promise
                }
            })
        }, 2139: (e, t, n) => {
            var r = n(2985), o = n(2503), i = n(4963), s = n(7007), a = n(5286), u = n(4253), c = n(4398),
                l = (n(3816).Reflect || {}).construct, E = u((function () {
                    function e() {
                    }

                    return !(l((function () {
                    }), [], e) instanceof e)
                })), p = !u((function () {
                    l((function () {
                    }))
                }));
            r(r.S + r.F * (E || p), "Reflect", {
                construct: function (e, t) {
                    i(e), s(t);
                    var n = arguments.length < 3 ? e : i(arguments[2]);
                    if (p && !E) return l(e, t, n);
                    if (e == n) {
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3])
                        }
                        var r = [null];
                        return r.push.apply(r, t), new (c.apply(e, r))
                    }
                    var u = n.prototype, d = o(a(u) ? u : Object.prototype), f = Function.apply.call(e, d, t);
                    return a(f) ? f : d
                }
            })
        }, 6774: (e, t, n) => {
            n(7057) && "g" != /./g.flags && n(9275).f(RegExp.prototype, "flags", {configurable: !0, get: n(3218)})
        }, 6108: (e, t, n) => {
            "use strict";
            n(6774);
            var r = n(7007), o = n(3218), i = n(7057), s = "toString", a = /./.toString, u = function (e) {
                n(7234)(RegExp.prototype, s, e, !0)
            };
            n(4253)((function () {
                return "/a/b" != a.call({source: "a", flags: "b"})
            })) ? u((function () {
                var e = r(this);
                return "/".concat(e.source, "/", "flags" in e ? e.flags : !i && e instanceof RegExp ? o.call(e) : void 0)
            })) : a.name != s && u((function () {
                return a.call(this)
            }))
        }, 5767: (e, t, n) => {
            "use strict";
            var r = n(3816), o = n(9181), i = n(7057), s = n(2985), a = n(7234), u = n(4728).KEY, c = n(4253),
                l = n(3825), E = n(2943), p = n(3953), d = n(6314), f = n(8787), S = n(6074), h = n(5541), g = n(4302),
                C = n(7007), T = n(5286), _ = n(508), A = n(2110), I = n(1689), R = n(681), y = n(2503), m = n(9327),
                O = n(8693), v = n(4548), N = n(9275), L = n(7184), P = O.f, M = N.f, w = m.f, D = r.Symbol, U = r.JSON,
                b = U && U.stringify, Y = d("_hidden"), G = d("toPrimitive"), k = {}.propertyIsEnumerable,
                x = l("symbol-registry"), K = l("symbols"), F = l("op-symbols"), B = Object.prototype,
                V = "function" == typeof D && !!v.f, H = r.QObject, J = !H || !H.prototype || !H.prototype.findChild,
                j = i && c((function () {
                    return 7 != y(M({}, "a", {
                        get: function () {
                            return M(this, "a", {value: 7}).a
                        }
                    })).a
                })) ? function (e, t, n) {
                    var r = P(B, t);
                    r && delete B[t], M(e, t, n), r && e !== B && M(B, t, r)
                } : M, W = function (e) {
                    var t = K[e] = y(D.prototype);
                    return t._k = e, t
                }, z = V && "symbol" == typeof D.iterator ? function (e) {
                    return "symbol" == typeof e
                } : function (e) {
                    return e instanceof D
                }, q = function (e, t, n) {
                    return e === B && q(F, t, n), C(e), t = I(t, !0), C(n), o(K, t) ? (n.enumerable ? (o(e, Y) && e[Y][t] && (e[Y][t] = !1), n = y(n, {enumerable: R(0, !1)})) : (o(e, Y) || M(e, Y, R(1, {})), e[Y][t] = !0), j(e, t, n)) : M(e, t, n)
                }, X = function (e, t) {
                    C(e);
                    for (var n, r = h(t = A(t)), o = 0, i = r.length; i > o;) q(e, n = r[o++], t[n]);
                    return e
                }, Q = function (e) {
                    var t = k.call(this, e = I(e, !0));
                    return !(this === B && o(K, e) && !o(F, e)) && (!(t || !o(this, e) || !o(K, e) || o(this, Y) && this[Y][e]) || t)
                }, $ = function (e, t) {
                    if (e = A(e), t = I(t, !0), e !== B || !o(K, t) || o(F, t)) {
                        var n = P(e, t);
                        return !n || !o(K, t) || o(e, Y) && e[Y][t] || (n.enumerable = !0), n
                    }
                }, Z = function (e) {
                    for (var t, n = w(A(e)), r = [], i = 0; n.length > i;) o(K, t = n[i++]) || t == Y || t == u || r.push(t);
                    return r
                }, ee = function (e) {
                    for (var t, n = e === B, r = w(n ? F : A(e)), i = [], s = 0; r.length > s;) !o(K, t = r[s++]) || n && !o(B, t) || i.push(K[t]);
                    return i
                };
            V || (a((D = function () {
                if (this instanceof D) throw TypeError("Symbol is not a constructor!");
                var e = p(arguments.length > 0 ? arguments[0] : void 0), t = function (n) {
                    this === B && t.call(F, n), o(this, Y) && o(this[Y], e) && (this[Y][e] = !1), j(this, e, R(1, n))
                };
                return i && J && j(B, e, {configurable: !0, set: t}), W(e)
            }).prototype, "toString", (function () {
                return this._k
            })), O.f = $, N.f = q, n(616).f = m.f = Z, n(4682).f = Q, v.f = ee, i && !n(4461) && a(B, "propertyIsEnumerable", Q, !0), f.f = function (e) {
                return W(d(e))
            }), s(s.G + s.W + s.F * !V, {Symbol: D});
            for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) d(te[ne++]);
            for (var re = L(d.store), oe = 0; re.length > oe;) S(re[oe++]);
            s(s.S + s.F * !V, "Symbol", {
                for: function (e) {
                    return o(x, e += "") ? x[e] : x[e] = D(e)
                }, keyFor: function (e) {
                    if (!z(e)) throw TypeError(e + " is not a symbol!");
                    for (var t in x) if (x[t] === e) return t
                }, useSetter: function () {
                    J = !0
                }, useSimple: function () {
                    J = !1
                }
            }), s(s.S + s.F * !V, "Object", {
                create: function (e, t) {
                    return void 0 === t ? y(e) : X(y(e), t)
                },
                defineProperty: q,
                defineProperties: X,
                getOwnPropertyDescriptor: $,
                getOwnPropertyNames: Z,
                getOwnPropertySymbols: ee
            });
            var ie = c((function () {
                v.f(1)
            }));
            s(s.S + s.F * ie, "Object", {
                getOwnPropertySymbols: function (e) {
                    return v.f(_(e))
                }
            }), U && s(s.S + s.F * (!V || c((function () {
                var e = D();
                return "[null]" != b([e]) || "{}" != b({a: e}) || "{}" != b(Object(e))
            }))), "JSON", {
                stringify: function (e) {
                    for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
                    if (n = t = r[1], (T(t) || void 0 !== e) && !z(e)) return g(t) || (t = function (e, t) {
                        if ("function" == typeof n && (t = n.call(this, e, t)), !z(t)) return t
                    }), r[1] = t, b.apply(U, r)
                }
            }), D.prototype[G] || n(7728)(D.prototype, G, D.prototype.valueOf), E(D, "Symbol"), E(Math, "Math", !0), E(r.JSON, "JSON", !0)
        }, 8351: (e, t, n) => {
            var r = n(2985), o = n(7643), i = n(2110), s = n(8693), a = n(2811);
            r(r.S, "Object", {
                getOwnPropertyDescriptors: function (e) {
                    for (var t, n, r = i(e), u = s.f, c = o(r), l = {}, E = 0; c.length > E;) void 0 !== (n = u(r, t = c[E++])) && a(l, t, n);
                    return l
                }
            })
        }, 9665: (e, t, n) => {
            n(6074)("asyncIterator")
        }, 1181: (e, t, n) => {
            for (var r = n(6997), o = n(7184), i = n(7234), s = n(3816), a = n(7728), u = n(2803), c = n(6314), l = c("iterator"), E = c("toStringTag"), p = u.Array, d = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, f = o(d), S = 0; S < f.length; S++) {
                var h, g = f[S], C = d[g], T = s[g], _ = T && T.prototype;
                if (_ && (_[l] || a(_, l, p), _[E] || a(_, E, g), u[g] = p, C)) for (h in r) _[h] || i(_, h, r[h], !0)
            }
        }, 7418: e => {
            "use strict";
            var t = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;

            function o(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }

            e.exports = function () {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
                        return t[e]
                    })).join("")) return !1;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                        r[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function (e, i) {
                for (var s, a, u = o(e), c = 1; c < arguments.length; c++) {
                    for (var l in s = Object(arguments[c])) n.call(s, l) && (u[l] = s[l]);
                    if (t) {
                        a = t(s);
                        for (var E = 0; E < a.length; E++) r.call(s, a[E]) && (u[a[E]] = s[a[E]])
                    }
                }
                return u
            }
        }, 4448: (e, t, n) => {
            "use strict";
            var r = n(7294), o = n(7418), i = n(3840);

            function s(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            if (!r) throw Error(s(227));
            var a = new Set, u = {};

            function c(e, t) {
                l(e, t), l(e + "Capture", t)
            }

            function l(e, t) {
                for (u[e] = t, e = 0; e < t.length; e++) a.add(t[e])
            }

            var E = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                d = Object.prototype.hasOwnProperty, f = {}, S = {};

            function h(e, t, n, r, o, i, s) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
            }

            var g = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
                g[e] = new h(e, 0, !1, e, null, !1, !1)
            })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) {
                var t = e[0];
                g[t] = new h(t, 1, !1, e[1], null, !1, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
                g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
                g[e] = new h(e, 2, !1, e, null, !1, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
                g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
                g[e] = new h(e, 3, !0, e, null, !1, !1)
            })), ["capture", "download"].forEach((function (e) {
                g[e] = new h(e, 4, !1, e, null, !1, !1)
            })), ["cols", "rows", "size", "span"].forEach((function (e) {
                g[e] = new h(e, 6, !1, e, null, !1, !1)
            })), ["rowSpan", "start"].forEach((function (e) {
                g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1)
            }));
            var C = /[\-:]([a-z])/g;

            function T(e) {
                return e[1].toUpperCase()
            }

            function _(e, t, n, r) {
                var o = g.hasOwnProperty(t) ? g[t] : null;
                (null !== o ? 0 === o.type : !r && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) || (function (e, t, n, r) {
                    if (null == t || function (e, t, n, r) {
                        if (null !== n && 0 === n.type) return !1;
                        switch (typeof t) {
                            case"function":
                            case"symbol":
                                return !0;
                            case"boolean":
                                return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                            default:
                                return !1
                        }
                    }(e, t, n, r)) return !0;
                    if (r) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                    }
                    return !1
                }(t, n, o, r) && (n = null), r || null === o ? function (e) {
                    return !!d.call(S, e) || !d.call(f, e) && (p.test(e) ? S[e] = !0 : (f[e] = !0, !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }

            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
                var t = e.replace(C, T);
                g[t] = new h(t, 1, !1, e, null, !1, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
                var t = e.replace(C, T);
                g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
                var t = e.replace(C, T);
                g[t] = new h(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
            })), ["tabIndex", "crossOrigin"].forEach((function (e) {
                g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1)
            })), g.xlinkHref = new h("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
                g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0)
            }));
            var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, I = 60103, R = 60106, y = 60107, m = 60108,
                O = 60114, v = 60109, N = 60110, L = 60112, P = 60113, M = 60120, w = 60115, D = 60116, U = 60121,
                b = 60128, Y = 60129, G = 60130, k = 60131;
            if ("function" == typeof Symbol && Symbol.for) {
                var x = Symbol.for;
                I = x("react.element"), R = x("react.portal"), y = x("react.fragment"), m = x("react.strict_mode"), O = x("react.profiler"), v = x("react.provider"), N = x("react.context"), L = x("react.forward_ref"), P = x("react.suspense"), M = x("react.suspense_list"), w = x("react.memo"), D = x("react.lazy"), U = x("react.block"), x("react.scope"), b = x("react.opaque.id"), Y = x("react.debug_trace_mode"), G = x("react.offscreen"), k = x("react.legacy_hidden")
            }
            var K, F = "function" == typeof Symbol && Symbol.iterator;

            function B(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof (e = F && e[F] || e["@@iterator"]) ? e : null
            }

            function V(e) {
                if (void 0 === K) try {
                    throw Error()
                } catch (e) {
                    var t = e.stack.trim().match(/\n( *(at )?)/);
                    K = t && t[1] || ""
                }
                return "\n" + K + e
            }

            var H = !1;

            function J(e, t) {
                if (!e || H) return "";
                H = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t) if (t = function () {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error()
                        }
                    }), "object" == typeof Reflect && Reflect.construct) {
                        try {
                            Reflect.construct(t, [])
                        } catch (e) {
                            var r = e
                        }
                        Reflect.construct(e, [], t)
                    } else {
                        try {
                            t.call()
                        } catch (e) {
                            r = e
                        }
                        e.call(t.prototype)
                    } else {
                        try {
                            throw Error()
                        } catch (e) {
                            r = e
                        }
                        e()
                    }
                } catch (e) {
                    if (e && r && "string" == typeof e.stack) {
                        for (var o = e.stack.split("\n"), i = r.stack.split("\n"), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];) a--;
                        for (; 1 <= s && 0 <= a; s--, a--) if (o[s] !== i[a]) {
                            if (1 !== s || 1 !== a) do {
                                if (s--, 0 > --a || o[s] !== i[a]) return "\n" + o[s].replace(" at new ", " at ")
                            } while (1 <= s && 0 <= a);
                            break
                        }
                    }
                } finally {
                    H = !1, Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? V(e) : ""
            }

            function j(e) {
                switch (e.tag) {
                    case 5:
                        return V(e.type);
                    case 16:
                        return V("Lazy");
                    case 13:
                        return V("Suspense");
                    case 19:
                        return V("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return J(e.type, !1);
                    case 11:
                        return J(e.type.render, !1);
                    case 22:
                        return J(e.type._render, !1);
                    case 1:
                        return J(e.type, !0);
                    default:
                        return ""
                }
            }

            function W(e) {
                if (null == e) return null;
                if ("function" == typeof e) return e.displayName || e.name || null;
                if ("string" == typeof e) return e;
                switch (e) {
                    case y:
                        return "Fragment";
                    case R:
                        return "Portal";
                    case O:
                        return "Profiler";
                    case m:
                        return "StrictMode";
                    case P:
                        return "Suspense";
                    case M:
                        return "SuspenseList"
                }
                if ("object" == typeof e) switch (e.$$typeof) {
                    case N:
                        return (e.displayName || "Context") + ".Consumer";
                    case v:
                        return (e._context.displayName || "Context") + ".Provider";
                    case L:
                        var t = e.render;
                        return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                    case w:
                        return W(e.type);
                    case U:
                        return W(e._render);
                    case D:
                        t = e._payload, e = e._init;
                        try {
                            return W(e(t))
                        } catch (e) {
                        }
                }
                return null
            }

            function z(e) {
                switch (typeof e) {
                    case"boolean":
                    case"number":
                    case"object":
                    case"string":
                    case"undefined":
                        return e;
                    default:
                        return ""
                }
            }

            function q(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function X(e) {
                e._valueTracker || (e._valueTracker = function (e) {
                    var t = q(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        r = "" + e[t];
                    if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                        var o = n.get, i = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0, get: function () {
                                return o.call(this)
                            }, set: function (e) {
                                r = "" + e, i.call(this, e)
                            }
                        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
                            getValue: function () {
                                return r
                            }, setValue: function (e) {
                                r = "" + e
                            }, stopTracking: function () {
                                e._valueTracker = null, delete e[t]
                            }
                        }
                    }
                }(e))
            }

            function Q(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(), r = "";
                return e && (r = q(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }

            function $(e) {
                if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }

            function Z(e, t) {
                var n = t.checked;
                return o({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }

            function ee(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                n = z(null != t.value ? t.value : n), e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }

            function te(e, t) {
                null != (t = t.checked) && _(e, "checked", t, !1)
            }

            function ne(e, t) {
                te(e, t);
                var n = z(t.value), r = t.type;
                if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? oe(e, t.type, n) : t.hasOwnProperty("defaultValue") && oe(e, t.type, z(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }

            function re(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
            }

            function oe(e, t, n) {
                "number" === t && $(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }

            function ie(e, t) {
                return e = o({children: void 0}, t), (t = function (e) {
                    var t = "";
                    return r.Children.forEach(e, (function (e) {
                        null != e && (t += e)
                    })), t
                }(t.children)) && (e.children = t), e
            }

            function se(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + z(n), t = null, o = 0; o < e.length; o++) {
                        if (e[o].value === n) return e[o].selected = !0, void (r && (e[o].defaultSelected = !0));
                        null !== t || e[o].disabled || (t = e[o])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function ae(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(s(91));
                return o({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
            }

            function ue(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children, t = t.defaultValue, null != n) {
                        if (null != t) throw Error(s(92));
                        if (Array.isArray(n)) {
                            if (!(1 >= n.length)) throw Error(s(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""), n = t
                }
                e._wrapperState = {initialValue: z(n)}
            }

            function ce(e, t) {
                var n = z(t.value), r = z(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
            }

            function le(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }

            var Ee = "http://www.w3.org/1999/xhtml";

            function pe(e) {
                switch (e) {
                    case"svg":
                        return "http://www.w3.org/2000/svg";
                    case"math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function de(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? pe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }

            var fe, Se, he = (Se = function (e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t; else {
                    for ((fe = fe || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fe.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function () {
                    return Se(e, t)
                }))
            } : Se);

            function ge(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
                }
                e.textContent = t
            }

            var Ce = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }, Te = ["Webkit", "ms", "Moz", "O"];

            function _e(e, t, n) {
                return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || Ce.hasOwnProperty(e) && Ce[e] ? ("" + t).trim() : t + "px"
            }

            function Ae(e, t) {
                for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
                    var r = 0 === n.indexOf("--"), o = _e(n, t[n], r);
                    "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
                }
            }

            Object.keys(Ce).forEach((function (e) {
                Te.forEach((function (t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ce[t] = Ce[e]
                }))
            }));
            var Ie = o({menuitem: !0}, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });

            function Re(e, t) {
                if (t) {
                    if (Ie[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(s(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(s(60));
                        if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
                    }
                    if (null != t.style && "object" != typeof t.style) throw Error(s(62))
                }
            }

            function ye(e, t) {
                if (-1 === e.indexOf("-")) return "string" == typeof t.is;
                switch (e) {
                    case"annotation-xml":
                    case"color-profile":
                    case"font-face":
                    case"font-face-src":
                    case"font-face-uri":
                    case"font-face-format":
                    case"font-face-name":
                    case"missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }

            function me(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }

            var Oe = null, ve = null, Ne = null;

            function Le(e) {
                if (e = Zr(e)) {
                    if ("function" != typeof Oe) throw Error(s(280));
                    var t = e.stateNode;
                    t && (t = to(t), Oe(e.stateNode, e.type, t))
                }
            }

            function Pe(e) {
                ve ? Ne ? Ne.push(e) : Ne = [e] : ve = e
            }

            function Me() {
                if (ve) {
                    var e = ve, t = Ne;
                    if (Ne = ve = null, Le(e), t) for (e = 0; e < t.length; e++) Le(t[e])
                }
            }

            function we(e, t) {
                return e(t)
            }

            function De(e, t, n, r, o) {
                return e(t, n, r, o)
            }

            function Ue() {
            }

            var be = we, Ye = !1, Ge = !1;

            function ke() {
                null === ve && null === Ne || (Ue(), Me())
            }

            function xe(e, t) {
                var n = e.stateNode;
                if (null === n) return null;
                var r = to(n);
                if (null === r) return null;
                n = r[t];
                e:switch (t) {
                    case"onClick":
                    case"onClickCapture":
                    case"onDoubleClick":
                    case"onDoubleClickCapture":
                    case"onMouseDown":
                    case"onMouseDownCapture":
                    case"onMouseMove":
                    case"onMouseMoveCapture":
                    case"onMouseUp":
                    case"onMouseUpCapture":
                    case"onMouseEnter":
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && "function" != typeof n) throw Error(s(231, t, typeof n));
                return n
            }

            var Ke = !1;
            if (E) try {
                var Fe = {};
                Object.defineProperty(Fe, "passive", {
                    get: function () {
                        Ke = !0
                    }
                }), window.addEventListener("test", Fe, Fe), window.removeEventListener("test", Fe, Fe)
            } catch (Se) {
                Ke = !1
            }

            function Be(e, t, n, r, o, i, s, a, u) {
                var c = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, c)
                } catch (e) {
                    this.onError(e)
                }
            }

            var Ve = !1, He = null, Je = !1, je = null, We = {
                onError: function (e) {
                    Ve = !0, He = e
                }
            };

            function ze(e, t, n, r, o, i, s, a, u) {
                Ve = !1, He = null, Be.apply(We, arguments)
            }

            function qe(e) {
                var t = e, n = e;
                if (e.alternate) for (; t.return;) t = t.return; else {
                    e = t;
                    do {
                        0 != (1026 & (t = e).flags) && (n = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }

            function Xe(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
                }
                return null
            }

            function Qe(e) {
                if (qe(e) !== e) throw Error(s(188))
            }

            function $e(e) {
                if (!(e = function (e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = qe(e))) throw Error(s(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ;) {
                        var o = n.return;
                        if (null === o) break;
                        var i = o.alternate;
                        if (null === i) {
                            if (null !== (r = o.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (o.child === i.child) {
                            for (i = o.child; i;) {
                                if (i === n) return Qe(o), e;
                                if (i === r) return Qe(o), t;
                                i = i.sibling
                            }
                            throw Error(s(188))
                        }
                        if (n.return !== r.return) n = o, r = i; else {
                            for (var a = !1, u = o.child; u;) {
                                if (u === n) {
                                    a = !0, n = o, r = i;
                                    break
                                }
                                if (u === r) {
                                    a = !0, r = o, n = i;
                                    break
                                }
                                u = u.sibling
                            }
                            if (!a) {
                                for (u = i.child; u;) {
                                    if (u === n) {
                                        a = !0, n = i, r = o;
                                        break
                                    }
                                    if (u === r) {
                                        a = !0, r = i, n = o;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!a) throw Error(s(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(s(190))
                    }
                    if (3 !== n.tag) throw Error(s(188));
                    return n.stateNode.current === n ? e : t
                }(e))) return null;
                for (var t = e; ;) {
                    if (5 === t.tag || 6 === t.tag) return t;
                    if (t.child) t.child.return = t, t = t.child; else {
                        if (t === e) break;
                        for (; !t.sibling;) {
                            if (!t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }
                return null
            }

            function Ze(e, t) {
                for (var n = e.alternate; null !== t;) {
                    if (t === e || t === n) return !0;
                    t = t.return
                }
                return !1
            }

            var et, tt, nt, rt, ot = !1, it = [], st = null, at = null, ut = null, ct = new Map, lt = new Map, Et = [],
                pt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

            function dt(e, t, n, r, o) {
                return {blockedOn: e, domEventName: t, eventSystemFlags: 16 | n, nativeEvent: o, targetContainers: [r]}
            }

            function ft(e, t) {
                switch (e) {
                    case"focusin":
                    case"focusout":
                        st = null;
                        break;
                    case"dragenter":
                    case"dragleave":
                        at = null;
                        break;
                    case"mouseover":
                    case"mouseout":
                        ut = null;
                        break;
                    case"pointerover":
                    case"pointerout":
                        ct.delete(t.pointerId);
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                        lt.delete(t.pointerId)
                }
            }

            function St(e, t, n, r, o, i) {
                return null === e || e.nativeEvent !== i ? (e = dt(t, n, r, o, i), null !== t && null !== (t = Zr(t)) && tt(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
            }

            function ht(e) {
                var t = $r(e.target);
                if (null !== t) {
                    var n = qe(t);
                    if (null !== n) if (13 === (t = n.tag)) {
                        if (null !== (t = Xe(n))) return e.blockedOn = t, void rt(e.lanePriority, (function () {
                            i.unstable_runWithPriority(e.priority, (function () {
                                nt(n)
                            }))
                        }))
                    } else if (3 === t && n.stateNode.hydrate) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }

            function gt(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var n = $t(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n) return null !== (t = Zr(n)) && tt(t), e.blockedOn = n, !1;
                    t.shift()
                }
                return !0
            }

            function Ct(e, t, n) {
                gt(e) && n.delete(t)
            }

            function Tt() {
                for (ot = !1; 0 < it.length;) {
                    var e = it[0];
                    if (null !== e.blockedOn) {
                        null !== (e = Zr(e.blockedOn)) && et(e);
                        break
                    }
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = $t(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) {
                            e.blockedOn = n;
                            break
                        }
                        t.shift()
                    }
                    null === e.blockedOn && it.shift()
                }
                null !== st && gt(st) && (st = null), null !== at && gt(at) && (at = null), null !== ut && gt(ut) && (ut = null), ct.forEach(Ct), lt.forEach(Ct)
            }

            function _t(e, t) {
                e.blockedOn === t && (e.blockedOn = null, ot || (ot = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Tt)))
            }

            function At(e) {
                function t(t) {
                    return _t(t, e)
                }

                if (0 < it.length) {
                    _t(it[0], e);
                    for (var n = 1; n < it.length; n++) {
                        var r = it[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== st && _t(st, e), null !== at && _t(at, e), null !== ut && _t(ut, e), ct.forEach(t), lt.forEach(t), n = 0; n < Et.length; n++) (r = Et[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < Et.length && null === (n = Et[0]).blockedOn;) ht(n), null === n.blockedOn && Et.shift()
            }

            function It(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
            }

            var Rt = {
                animationend: It("Animation", "AnimationEnd"),
                animationiteration: It("Animation", "AnimationIteration"),
                animationstart: It("Animation", "AnimationStart"),
                transitionend: It("Transition", "TransitionEnd")
            }, yt = {}, mt = {};

            function Ot(e) {
                if (yt[e]) return yt[e];
                if (!Rt[e]) return e;
                var t, n = Rt[e];
                for (t in n) if (n.hasOwnProperty(t) && t in mt) return yt[e] = n[t];
                return e
            }

            E && (mt = document.createElement("div").style, "AnimationEvent" in window || (delete Rt.animationend.animation, delete Rt.animationiteration.animation, delete Rt.animationstart.animation), "TransitionEvent" in window || delete Rt.transitionend.transition);
            var vt = Ot("animationend"), Nt = Ot("animationiteration"), Lt = Ot("animationstart"),
                Pt = Ot("transitionend"), Mt = new Map, wt = new Map,
                Dt = ["abort", "abort", vt, "animationEnd", Nt, "animationIteration", Lt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Pt, "transitionEnd", "waiting", "waiting"];

            function Ut(e, t) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n], o = e[n + 1];
                    o = "on" + (o[0].toUpperCase() + o.slice(1)), wt.set(r, t), Mt.set(r, o), c(o, [r])
                }
            }

            (0, i.unstable_now)();
            var bt = 8;

            function Yt(e) {
                if (0 != (1 & e)) return bt = 15, 1;
                if (0 != (2 & e)) return bt = 14, 2;
                if (0 != (4 & e)) return bt = 13, 4;
                var t = 24 & e;
                return 0 !== t ? (bt = 12, t) : 0 != (32 & e) ? (bt = 11, 32) : 0 != (t = 192 & e) ? (bt = 10, t) : 0 != (256 & e) ? (bt = 9, 256) : 0 != (t = 3584 & e) ? (bt = 8, t) : 0 != (4096 & e) ? (bt = 7, 4096) : 0 != (t = 4186112 & e) ? (bt = 6, t) : 0 != (t = 62914560 & e) ? (bt = 5, t) : 67108864 & e ? (bt = 4, 67108864) : 0 != (134217728 & e) ? (bt = 3, 134217728) : 0 != (t = 805306368 & e) ? (bt = 2, t) : 0 != (1073741824 & e) ? (bt = 1, 1073741824) : (bt = 8, e)
            }

            function Gt(e, t) {
                var n = e.pendingLanes;
                if (0 === n) return bt = 0;
                var r = 0, o = 0, i = e.expiredLanes, s = e.suspendedLanes, a = e.pingedLanes;
                if (0 !== i) r = i, o = bt = 15; else if (0 != (i = 134217727 & n)) {
                    var u = i & ~s;
                    0 !== u ? (r = Yt(u), o = bt) : 0 != (a &= i) && (r = Yt(a), o = bt)
                } else 0 != (i = n & ~s) ? (r = Yt(i), o = bt) : 0 !== a && (r = Yt(a), o = bt);
                if (0 === r) return 0;
                if (r = n & ((0 > (r = 31 - Vt(r)) ? 0 : 1 << r) << 1) - 1, 0 !== t && t !== r && 0 == (t & s)) {
                    if (Yt(t), o <= bt) return t;
                    bt = o
                }
                if (0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - Vt(t)), r |= e[n], t &= ~o;
                return r
            }

            function kt(e) {
                return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }

            function xt(e, t) {
                switch (e) {
                    case 15:
                        return 1;
                    case 14:
                        return 2;
                    case 12:
                        return 0 === (e = Kt(24 & ~t)) ? xt(10, t) : e;
                    case 10:
                        return 0 === (e = Kt(192 & ~t)) ? xt(8, t) : e;
                    case 8:
                        return 0 === (e = Kt(3584 & ~t)) && 0 === (e = Kt(4186112 & ~t)) && (e = 512), e;
                    case 2:
                        return 0 === (t = Kt(805306368 & ~t)) && (t = 268435456), t
                }
                throw Error(s(358, e))
            }

            function Kt(e) {
                return e & -e
            }

            function Ft(e) {
                for (var t = [], n = 0; 31 > n; n++) t.push(e);
                return t
            }

            function Bt(e, t, n) {
                e.pendingLanes |= t;
                var r = t - 1;
                e.suspendedLanes &= r, e.pingedLanes &= r, (e = e.eventTimes)[t = 31 - Vt(t)] = n
            }

            var Vt = Math.clz32 ? Math.clz32 : function (e) {
                    return 0 === e ? 32 : 31 - (Ht(e) / Jt | 0) | 0
                }, Ht = Math.log, Jt = Math.LN2, jt = i.unstable_UserBlockingPriority, Wt = i.unstable_runWithPriority,
                zt = !0;

            function qt(e, t, n, r) {
                Ye || Ue();
                var o = Qt, i = Ye;
                Ye = !0;
                try {
                    De(o, e, t, n, r)
                } finally {
                    (Ye = i) || ke()
                }
            }

            function Xt(e, t, n, r) {
                Wt(jt, Qt.bind(null, e, t, n, r))
            }

            function Qt(e, t, n, r) {
                var o;
                if (zt) if ((o = 0 == (4 & t)) && 0 < it.length && -1 < pt.indexOf(e)) e = dt(null, e, t, n, r), it.push(e); else {
                    var i = $t(e, t, n, r);
                    if (null === i) o && ft(e, r); else {
                        if (o) {
                            if (-1 < pt.indexOf(e)) return e = dt(i, e, t, n, r), void it.push(e);
                            if (function (e, t, n, r, o) {
                                switch (t) {
                                    case"focusin":
                                        return st = St(st, e, t, n, r, o), !0;
                                    case"dragenter":
                                        return at = St(at, e, t, n, r, o), !0;
                                    case"mouseover":
                                        return ut = St(ut, e, t, n, r, o), !0;
                                    case"pointerover":
                                        var i = o.pointerId;
                                        return ct.set(i, St(ct.get(i) || null, e, t, n, r, o)), !0;
                                    case"gotpointercapture":
                                        return i = o.pointerId, lt.set(i, St(lt.get(i) || null, e, t, n, r, o)), !0
                                }
                                return !1
                            }(i, e, t, n, r)) return;
                            ft(e, r)
                        }
                        Mr(e, t, r, null, n)
                    }
                }
            }

            function $t(e, t, n, r) {
                var o = me(r);
                if (null !== (o = $r(o))) {
                    var i = qe(o);
                    if (null === i) o = null; else {
                        var s = i.tag;
                        if (13 === s) {
                            if (null !== (o = Xe(i))) return o;
                            o = null
                        } else if (3 === s) {
                            if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                            o = null
                        } else i !== o && (o = null)
                    }
                }
                return Mr(e, t, r, o, n), null
            }

            var Zt = null, en = null, tn = null;

            function nn() {
                if (tn) return tn;
                var e, t, n = en, r = n.length, o = "value" in Zt ? Zt.value : Zt.textContent, i = o.length;
                for (e = 0; e < r && n[e] === o[e]; e++) ;
                var s = r - e;
                for (t = 1; t <= s && n[r - t] === o[i - t]; t++) ;
                return tn = o.slice(e, 1 < t ? 1 - t : void 0)
            }

            function rn(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }

            function on() {
                return !0
            }

            function sn() {
                return !1
            }

            function an(e) {
                function t(t, n, r, o, i) {
                    for (var s in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(s) && (t = e[s], this[s] = t ? t(o) : o[s]);
                    return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? on : sn, this.isPropagationStopped = sn, this
                }

                return o(t.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = on)
                    }, stopPropagation: function () {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = on)
                    }, persist: function () {
                    }, isPersistent: on
                }), t
            }

            var un, cn, ln, En = {
                    eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
                        return e.timeStamp || Date.now()
                    }, defaultPrevented: 0, isTrusted: 0
                }, pn = an(En), dn = o({}, En, {view: 0, detail: 0}), fn = an(dn), Sn = o({}, dn, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: On,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function (e) {
                        return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                    },
                    movementX: function (e) {
                        return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (un = e.screenX - ln.screenX, cn = e.screenY - ln.screenY) : cn = un = 0, ln = e), un)
                    },
                    movementY: function (e) {
                        return "movementY" in e ? e.movementY : cn
                    }
                }), hn = an(Sn), gn = an(o({}, Sn, {dataTransfer: 0})), Cn = an(o({}, dn, {relatedTarget: 0})),
                Tn = an(o({}, En, {animationName: 0, elapsedTime: 0, pseudoElement: 0})), _n = an(o({}, En, {
                    clipboardData: function (e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData
                    }
                })), An = an(o({}, En, {data: 0})), In = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                }, Rn = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                }, yn = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

            function mn(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = yn[e]) && !!t[e]
            }

            function On() {
                return mn
            }

            var vn = an(o({}, dn, {
                key: function (e) {
                    if (e.key) {
                        var t = In[e.key] || e.key;
                        if ("Unidentified" !== t) return t
                    }
                    return "keypress" === e.type ? 13 === (e = rn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Rn[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: On,
                charCode: function (e) {
                    return "keypress" === e.type ? rn(e) : 0
                },
                keyCode: function (e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function (e) {
                    return "keypress" === e.type ? rn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            })), Nn = an(o({}, Sn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            })), Ln = an(o({}, dn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: On
            })), Pn = an(o({}, En, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), Mn = an(o({}, Sn, {
                deltaX: function (e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                }, deltaY: function (e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                }, deltaZ: 0, deltaMode: 0
            })), wn = [9, 13, 27, 32], Dn = E && "CompositionEvent" in window, Un = null;
            E && "documentMode" in document && (Un = document.documentMode);
            var bn = E && "TextEvent" in window && !Un, Yn = E && (!Dn || Un && 8 < Un && 11 >= Un),
                Gn = String.fromCharCode(32), kn = !1;

            function xn(e, t) {
                switch (e) {
                    case"keyup":
                        return -1 !== wn.indexOf(t.keyCode);
                    case"keydown":
                        return 229 !== t.keyCode;
                    case"keypress":
                    case"mousedown":
                    case"focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Kn(e) {
                return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
            }

            var Fn = !1, Bn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

            function Vn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Bn[e.type] : "textarea" === t
            }

            function Hn(e, t, n, r) {
                Pe(r), 0 < (t = Dr(t, "onChange")).length && (n = new pn("onChange", "change", null, n, r), e.push({
                    event: n,
                    listeners: t
                }))
            }

            var Jn = null, jn = null;

            function Wn(e) {
                mr(e, 0)
            }

            function zn(e) {
                if (Q(eo(e))) return e
            }

            function qn(e, t) {
                if ("change" === e) return t
            }

            var Xn = !1;
            if (E) {
                var Qn;
                if (E) {
                    var $n = "oninput" in document;
                    if (!$n) {
                        var Zn = document.createElement("div");
                        Zn.setAttribute("oninput", "return;"), $n = "function" == typeof Zn.oninput
                    }
                    Qn = $n
                } else Qn = !1;
                Xn = Qn && (!document.documentMode || 9 < document.documentMode)
            }

            function er() {
                Jn && (Jn.detachEvent("onpropertychange", tr), jn = Jn = null)
            }

            function tr(e) {
                if ("value" === e.propertyName && zn(jn)) {
                    var t = [];
                    if (Hn(t, jn, e, me(e)), e = Wn, Ye) e(t); else {
                        Ye = !0;
                        try {
                            we(e, t)
                        } finally {
                            Ye = !1, ke()
                        }
                    }
                }
            }

            function nr(e, t, n) {
                "focusin" === e ? (er(), jn = n, (Jn = t).attachEvent("onpropertychange", tr)) : "focusout" === e && er()
            }

            function rr(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return zn(jn)
            }

            function or(e, t) {
                if ("click" === e) return zn(t)
            }

            function ir(e, t) {
                if ("input" === e || "change" === e) return zn(t)
            }

            var sr = "function" == typeof Object.is ? Object.is : function (e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }, ar = Object.prototype.hasOwnProperty;

            function ur(e, t) {
                if (sr(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                var n = Object.keys(e), r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++) if (!ar.call(t, n[r]) || !sr(e[n[r]], t[n[r]])) return !1;
                return !0
            }

            function cr(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function lr(e, t) {
                var n, r = cr(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length, e <= t && n >= t) return {node: r, offset: t - e};
                        e = n
                    }
                    e:{
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = cr(r)
                }
            }

            function Er(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Er(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function pr() {
                for (var e = window, t = $(); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" == typeof t.contentWindow.location.href
                    } catch (e) {
                        n = !1
                    }
                    if (!n) break;
                    t = $((e = t.contentWindow).document)
                }
                return t
            }

            function dr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }

            var fr = E && "documentMode" in document && 11 >= document.documentMode, Sr = null, hr = null, gr = null,
                Cr = !1;

            function Tr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                Cr || null == Sr || Sr !== $(r) || (r = "selectionStart" in (r = Sr) && dr(r) ? {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }, gr && ur(gr, r) || (gr = r, 0 < (r = Dr(hr, "onSelect")).length && (t = new pn("onSelect", "select", null, t, n), e.push({
                    event: t,
                    listeners: r
                }), t.target = Sr)))
            }

            Ut("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Ut("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Ut(Dt, 2);
            for (var _r = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Ar = 0; Ar < _r.length; Ar++) wt.set(_r[Ar], 0);
            l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Rr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));

            function yr(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n, function (e, t, n, r, o, i, a, u, c) {
                    if (ze.apply(this, arguments), Ve) {
                        if (!Ve) throw Error(s(198));
                        var l = He;
                        Ve = !1, He = null, Je || (Je = !0, je = l)
                    }
                }(r, t, void 0, e), e.currentTarget = null
            }

            function mr(e, t) {
                t = 0 != (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n], o = r.event;
                    r = r.listeners;
                    e:{
                        var i = void 0;
                        if (t) for (var s = r.length - 1; 0 <= s; s--) {
                            var a = r[s], u = a.instance, c = a.currentTarget;
                            if (a = a.listener, u !== i && o.isPropagationStopped()) break e;
                            yr(o, a, c), i = u
                        } else for (s = 0; s < r.length; s++) {
                            if (u = (a = r[s]).instance, c = a.currentTarget, a = a.listener, u !== i && o.isPropagationStopped()) break e;
                            yr(o, a, c), i = u
                        }
                    }
                }
                if (Je) throw e = je, Je = !1, je = null, e
            }

            function Or(e, t) {
                var n = no(t), r = e + "__bubble";
                n.has(r) || (Pr(t, e, 2, !1), n.add(r))
            }

            var vr = "_reactListening" + Math.random().toString(36).slice(2);

            function Nr(e) {
                e[vr] || (e[vr] = !0, a.forEach((function (t) {
                    Rr.has(t) || Lr(t, !1, e, null), Lr(t, !0, e, null)
                })))
            }

            function Lr(e, t, n, r) {
                var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, i = n;
                if ("selectionchange" === e && 9 !== n.nodeType && (i = n.ownerDocument), null !== r && !t && Rr.has(e)) {
                    if ("scroll" !== e) return;
                    o |= 2, i = r
                }
                var s = no(i), a = e + "__" + (t ? "capture" : "bubble");
                s.has(a) || (t && (o |= 4), Pr(i, e, o, t), s.add(a))
            }

            function Pr(e, t, n, r) {
                var o = wt.get(t);
                switch (void 0 === o ? 2 : o) {
                    case 0:
                        o = qt;
                        break;
                    case 1:
                        o = Xt;
                        break;
                    default:
                        o = Qt
                }
                n = o.bind(null, t, n, e), o = void 0, !Ke || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: o
                }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {passive: o}) : e.addEventListener(t, n, !1)
            }

            function Mr(e, t, n, r, o) {
                var i = r;
                if (0 == (1 & t) && 0 == (2 & t) && null !== r) e:for (; ;) {
                    if (null === r) return;
                    var s = r.tag;
                    if (3 === s || 4 === s) {
                        var a = r.stateNode.containerInfo;
                        if (a === o || 8 === a.nodeType && a.parentNode === o) break;
                        if (4 === s) for (s = r.return; null !== s;) {
                            var u = s.tag;
                            if ((3 === u || 4 === u) && ((u = s.stateNode.containerInfo) === o || 8 === u.nodeType && u.parentNode === o)) return;
                            s = s.return
                        }
                        for (; null !== a;) {
                            if (null === (s = $r(a))) return;
                            if (5 === (u = s.tag) || 6 === u) {
                                r = i = s;
                                continue e
                            }
                            a = a.parentNode
                        }
                    }
                    r = r.return
                }
                !function (e, t, n) {
                    if (Ge) return e();
                    Ge = !0;
                    try {
                        be(e, t, n)
                    } finally {
                        Ge = !1, ke()
                    }
                }((function () {
                    var r = i, o = me(n), s = [];
                    e:{
                        var a = Mt.get(e);
                        if (void 0 !== a) {
                            var u = pn, c = e;
                            switch (e) {
                                case"keypress":
                                    if (0 === rn(n)) break e;
                                case"keydown":
                                case"keyup":
                                    u = vn;
                                    break;
                                case"focusin":
                                    c = "focus", u = Cn;
                                    break;
                                case"focusout":
                                    c = "blur", u = Cn;
                                    break;
                                case"beforeblur":
                                case"afterblur":
                                    u = Cn;
                                    break;
                                case"click":
                                    if (2 === n.button) break e;
                                case"auxclick":
                                case"dblclick":
                                case"mousedown":
                                case"mousemove":
                                case"mouseup":
                                case"mouseout":
                                case"mouseover":
                                case"contextmenu":
                                    u = hn;
                                    break;
                                case"drag":
                                case"dragend":
                                case"dragenter":
                                case"dragexit":
                                case"dragleave":
                                case"dragover":
                                case"dragstart":
                                case"drop":
                                    u = gn;
                                    break;
                                case"touchcancel":
                                case"touchend":
                                case"touchmove":
                                case"touchstart":
                                    u = Ln;
                                    break;
                                case vt:
                                case Nt:
                                case Lt:
                                    u = Tn;
                                    break;
                                case Pt:
                                    u = Pn;
                                    break;
                                case"scroll":
                                    u = fn;
                                    break;
                                case"wheel":
                                    u = Mn;
                                    break;
                                case"copy":
                                case"cut":
                                case"paste":
                                    u = _n;
                                    break;
                                case"gotpointercapture":
                                case"lostpointercapture":
                                case"pointercancel":
                                case"pointerdown":
                                case"pointermove":
                                case"pointerout":
                                case"pointerover":
                                case"pointerup":
                                    u = Nn
                            }
                            var l = 0 != (4 & t), E = !l && "scroll" === e,
                                p = l ? null !== a ? a + "Capture" : null : a;
                            l = [];
                            for (var d, f = r; null !== f;) {
                                var S = (d = f).stateNode;
                                if (5 === d.tag && null !== S && (d = S, null !== p && null != (S = xe(f, p)) && l.push(wr(f, S, d))), E) break;
                                f = f.return
                            }
                            0 < l.length && (a = new u(a, c, null, n, o), s.push({event: a, listeners: l}))
                        }
                    }
                    if (0 == (7 & t)) {
                        if (u = "mouseout" === e || "pointerout" === e, (!(a = "mouseover" === e || "pointerover" === e) || 0 != (16 & t) || !(c = n.relatedTarget || n.fromElement) || !$r(c) && !c[Xr]) && (u || a) && (a = o.window === o ? o : (a = o.ownerDocument) ? a.defaultView || a.parentWindow : window, u ? (u = r, null !== (c = (c = n.relatedTarget || n.toElement) ? $r(c) : null) && (c !== (E = qe(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (u = null, c = r), u !== c)) {
                            if (l = hn, S = "onMouseLeave", p = "onMouseEnter", f = "mouse", "pointerout" !== e && "pointerover" !== e || (l = Nn, S = "onPointerLeave", p = "onPointerEnter", f = "pointer"), E = null == u ? a : eo(u), d = null == c ? a : eo(c), (a = new l(S, f + "leave", u, n, o)).target = E, a.relatedTarget = d, S = null, $r(o) === r && ((l = new l(p, f + "enter", c, n, o)).target = d, l.relatedTarget = E, S = l), E = S, u && c) e:{
                                for (p = c, f = 0, d = l = u; d; d = Ur(d)) f++;
                                for (d = 0, S = p; S; S = Ur(S)) d++;
                                for (; 0 < f - d;) l = Ur(l), f--;
                                for (; 0 < d - f;) p = Ur(p), d--;
                                for (; f--;) {
                                    if (l === p || null !== p && l === p.alternate) break e;
                                    l = Ur(l), p = Ur(p)
                                }
                                l = null
                            } else l = null;
                            null !== u && br(s, a, u, l, !1), null !== c && null !== E && br(s, E, c, l, !0)
                        }
                        if ("select" === (u = (a = r ? eo(r) : window).nodeName && a.nodeName.toLowerCase()) || "input" === u && "file" === a.type) var h = qn; else if (Vn(a)) if (Xn) h = ir; else {
                            h = rr;
                            var g = nr
                        } else (u = a.nodeName) && "input" === u.toLowerCase() && ("checkbox" === a.type || "radio" === a.type) && (h = or);
                        switch (h && (h = h(e, r)) ? Hn(s, h, n, o) : (g && g(e, a, r), "focusout" === e && (g = a._wrapperState) && g.controlled && "number" === a.type && oe(a, "number", a.value)), g = r ? eo(r) : window, e) {
                            case"focusin":
                                (Vn(g) || "true" === g.contentEditable) && (Sr = g, hr = r, gr = null);
                                break;
                            case"focusout":
                                gr = hr = Sr = null;
                                break;
                            case"mousedown":
                                Cr = !0;
                                break;
                            case"contextmenu":
                            case"mouseup":
                            case"dragend":
                                Cr = !1, Tr(s, n, o);
                                break;
                            case"selectionchange":
                                if (fr) break;
                            case"keydown":
                            case"keyup":
                                Tr(s, n, o)
                        }
                        var C;
                        if (Dn) e:{
                            switch (e) {
                                case"compositionstart":
                                    var T = "onCompositionStart";
                                    break e;
                                case"compositionend":
                                    T = "onCompositionEnd";
                                    break e;
                                case"compositionupdate":
                                    T = "onCompositionUpdate";
                                    break e
                            }
                            T = void 0
                        } else Fn ? xn(e, n) && (T = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (T = "onCompositionStart");
                        T && (Yn && "ko" !== n.locale && (Fn || "onCompositionStart" !== T ? "onCompositionEnd" === T && Fn && (C = nn()) : (en = "value" in (Zt = o) ? Zt.value : Zt.textContent, Fn = !0)), 0 < (g = Dr(r, T)).length && (T = new An(T, e, null, n, o), s.push({
                            event: T,
                            listeners: g
                        }), (C || null !== (C = Kn(n))) && (T.data = C))), (C = bn ? function (e, t) {
                            switch (e) {
                                case"compositionend":
                                    return Kn(t);
                                case"keypress":
                                    return 32 !== t.which ? null : (kn = !0, Gn);
                                case"textInput":
                                    return (e = t.data) === Gn && kn ? null : e;
                                default:
                                    return null
                            }
                        }(e, n) : function (e, t) {
                            if (Fn) return "compositionend" === e || !Dn && xn(e, t) ? (e = nn(), tn = en = Zt = null, Fn = !1, e) : null;
                            switch (e) {
                                case"paste":
                                    return null;
                                case"keypress":
                                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                        if (t.char && 1 < t.char.length) return t.char;
                                        if (t.which) return String.fromCharCode(t.which)
                                    }
                                    return null;
                                case"compositionend":
                                    return Yn && "ko" !== t.locale ? null : t.data;
                                default:
                                    return null
                            }
                        }(e, n)) && 0 < (r = Dr(r, "onBeforeInput")).length && (o = new An("onBeforeInput", "beforeinput", null, n, o), s.push({
                            event: o,
                            listeners: r
                        }), o.data = C)
                    }
                    mr(s, t)
                }))
            }

            function wr(e, t, n) {
                return {instance: e, listener: t, currentTarget: n}
            }

            function Dr(e, t) {
                for (var n = t + "Capture", r = []; null !== e;) {
                    var o = e, i = o.stateNode;
                    5 === o.tag && null !== i && (o = i, null != (i = xe(e, n)) && r.unshift(wr(e, i, o)), null != (i = xe(e, t)) && r.push(wr(e, i, o))), e = e.return
                }
                return r
            }

            function Ur(e) {
                if (null === e) return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }

            function br(e, t, n, r, o) {
                for (var i = t._reactName, s = []; null !== n && n !== r;) {
                    var a = n, u = a.alternate, c = a.stateNode;
                    if (null !== u && u === r) break;
                    5 === a.tag && null !== c && (a = c, o ? null != (u = xe(n, i)) && s.unshift(wr(n, u, a)) : o || null != (u = xe(n, i)) && s.push(wr(n, u, a))), n = n.return
                }
                0 !== s.length && e.push({event: t, listeners: s})
            }

            function Yr() {
            }

            var Gr = null, kr = null;

            function xr(e, t) {
                switch (e) {
                    case"button":
                    case"input":
                    case"select":
                    case"textarea":
                        return !!t.autoFocus
                }
                return !1
            }

            function Kr(e, t) {
                return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }

            var Fr = "function" == typeof setTimeout ? setTimeout : void 0,
                Br = "function" == typeof clearTimeout ? clearTimeout : void 0;

            function Vr(e) {
                (1 === e.nodeType || 9 === e.nodeType && null != (e = e.body)) && (e.textContent = "")
            }

            function Hr(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break
                }
                return e
            }

            function Jr(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--
                        } else "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }

            var jr = 0, Wr = Math.random().toString(36).slice(2), zr = "__reactFiber$" + Wr, qr = "__reactProps$" + Wr,
                Xr = "__reactContainer$" + Wr, Qr = "__reactEvents$" + Wr;

            function $r(e) {
                var t = e[zr];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if (t = n[Xr] || n[zr]) {
                        if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = Jr(e); null !== e;) {
                            if (n = e[zr]) return n;
                            e = Jr(e)
                        }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }

            function Zr(e) {
                return !(e = e[zr] || e[Xr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }

            function eo(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(s(33))
            }

            function to(e) {
                return e[qr] || null
            }

            function no(e) {
                var t = e[Qr];
                return void 0 === t && (t = e[Qr] = new Set), t
            }

            var ro = [], oo = -1;

            function io(e) {
                return {current: e}
            }

            function so(e) {
                0 > oo || (e.current = ro[oo], ro[oo] = null, oo--)
            }

            function ao(e, t) {
                oo++, ro[oo] = e.current, e.current = t
            }

            var uo = {}, co = io(uo), lo = io(!1), Eo = uo;

            function po(e, t) {
                var n = e.type.contextTypes;
                if (!n) return uo;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var o, i = {};
                for (o in n) i[o] = t[o];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
            }

            function fo(e) {
                return null != e.childContextTypes
            }

            function So() {
                so(lo), so(co)
            }

            function ho(e, t, n) {
                if (co.current !== uo) throw Error(s(168));
                ao(co, t), ao(lo, n)
            }

            function go(e, t, n) {
                var r = e.stateNode;
                if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
                for (var i in r = r.getChildContext()) if (!(i in e)) throw Error(s(108, W(t) || "Unknown", i));
                return o({}, n, r)
            }

            function Co(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || uo, Eo = co.current, ao(co, e), ao(lo, lo.current), !0
            }

            function To(e, t, n) {
                var r = e.stateNode;
                if (!r) throw Error(s(169));
                n ? (e = go(e, t, Eo), r.__reactInternalMemoizedMergedChildContext = e, so(lo), so(co), ao(co, e)) : so(lo), ao(lo, n)
            }

            var _o = null, Ao = null, Io = i.unstable_runWithPriority, Ro = i.unstable_scheduleCallback,
                yo = i.unstable_cancelCallback, mo = i.unstable_shouldYield, Oo = i.unstable_requestPaint,
                vo = i.unstable_now, No = i.unstable_getCurrentPriorityLevel, Lo = i.unstable_ImmediatePriority,
                Po = i.unstable_UserBlockingPriority, Mo = i.unstable_NormalPriority, wo = i.unstable_LowPriority,
                Do = i.unstable_IdlePriority, Uo = {}, bo = void 0 !== Oo ? Oo : function () {
                }, Yo = null, Go = null, ko = !1, xo = vo(), Ko = 1e4 > xo ? vo : function () {
                    return vo() - xo
                };

            function Fo() {
                switch (No()) {
                    case Lo:
                        return 99;
                    case Po:
                        return 98;
                    case Mo:
                        return 97;
                    case wo:
                        return 96;
                    case Do:
                        return 95;
                    default:
                        throw Error(s(332))
                }
            }

            function Bo(e) {
                switch (e) {
                    case 99:
                        return Lo;
                    case 98:
                        return Po;
                    case 97:
                        return Mo;
                    case 96:
                        return wo;
                    case 95:
                        return Do;
                    default:
                        throw Error(s(332))
                }
            }

            function Vo(e, t) {
                return e = Bo(e), Io(e, t)
            }

            function Ho(e, t, n) {
                return e = Bo(e), Ro(e, t, n)
            }

            function Jo() {
                if (null !== Go) {
                    var e = Go;
                    Go = null, yo(e)
                }
                jo()
            }

            function jo() {
                if (!ko && null !== Yo) {
                    ko = !0;
                    var e = 0;
                    try {
                        var t = Yo;
                        Vo(99, (function () {
                            for (; e < t.length; e++) {
                                var n = t[e];
                                do {
                                    n = n(!0)
                                } while (null !== n)
                            }
                        })), Yo = null
                    } catch (t) {
                        throw null !== Yo && (Yo = Yo.slice(e + 1)), Ro(Lo, Jo), t
                    } finally {
                        ko = !1
                    }
                }
            }

            var Wo = A.ReactCurrentBatchConfig;

            function zo(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = o({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }

            var qo = io(null), Xo = null, Qo = null, $o = null;

            function Zo() {
                $o = Qo = Xo = null
            }

            function ei(e) {
                var t = qo.current;
                so(qo), e.type._context._currentValue = t
            }

            function ti(e, t) {
                for (; null !== e;) {
                    var n = e.alternate;
                    if ((e.childLanes & t) === t) {
                        if (null === n || (n.childLanes & t) === t) break;
                        n.childLanes |= t
                    } else e.childLanes |= t, null !== n && (n.childLanes |= t);
                    e = e.return
                }
            }

            function ni(e, t) {
                Xo = e, $o = Qo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (Ds = !0), e.firstContext = null)
            }

            function ri(e, t) {
                if ($o !== e && !1 !== t && 0 !== t) if ("number" == typeof t && 1073741823 !== t || ($o = e, t = 1073741823), t = {
                    context: e,
                    observedBits: t,
                    next: null
                }, null === Qo) {
                    if (null === Xo) throw Error(s(308));
                    Qo = t, Xo.dependencies = {lanes: 0, firstContext: t, responders: null}
                } else Qo = Qo.next = t;
                return e._currentValue
            }

            var oi = !1;

            function ii(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {pending: null},
                    effects: null
                }
            }

            function si(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }

            function ai(e, t) {
                return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
            }

            function ui(e, t) {
                if (null !== (e = e.updateQueue)) {
                    var n = (e = e.shared).pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }
            }

            function ci(e, t) {
                var n = e.updateQueue, r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var o = null, i = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var s = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === i ? o = i = s : i = i.next = s, n = n.next
                        } while (null !== n);
                        null === i ? o = i = t : i = i.next = t
                    } else o = i = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: o,
                        lastBaseUpdate: i,
                        shared: r.shared,
                        effects: r.effects
                    }, void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
            }

            function li(e, t, n, r) {
                var i = e.updateQueue;
                oi = !1;
                var s = i.firstBaseUpdate, a = i.lastBaseUpdate, u = i.shared.pending;
                if (null !== u) {
                    i.shared.pending = null;
                    var c = u, l = c.next;
                    c.next = null, null === a ? s = l : a.next = l, a = c;
                    var E = e.alternate;
                    if (null !== E) {
                        var p = (E = E.updateQueue).lastBaseUpdate;
                        p !== a && (null === p ? E.firstBaseUpdate = l : p.next = l, E.lastBaseUpdate = c)
                    }
                }
                if (null !== s) {
                    for (p = i.baseState, a = 0, E = l = c = null; ;) {
                        u = s.lane;
                        var d = s.eventTime;
                        if ((r & u) === u) {
                            null !== E && (E = E.next = {
                                eventTime: d,
                                lane: 0,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            });
                            e:{
                                var f = e, S = s;
                                switch (u = t, d = n, S.tag) {
                                    case 1:
                                        if ("function" == typeof (f = S.payload)) {
                                            p = f.call(d, p, u);
                                            break e
                                        }
                                        p = f;
                                        break e;
                                    case 3:
                                        f.flags = -4097 & f.flags | 64;
                                    case 0:
                                        if (null == (u = "function" == typeof (f = S.payload) ? f.call(d, p, u) : f)) break e;
                                        p = o({}, p, u);
                                        break e;
                                    case 2:
                                        oi = !0
                                }
                            }
                            null !== s.callback && (e.flags |= 32, null === (u = i.effects) ? i.effects = [s] : u.push(s))
                        } else d = {
                            eventTime: d,
                            lane: u,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null
                        }, null === E ? (l = E = d, c = p) : E = E.next = d, a |= u;
                        if (null === (s = s.next)) {
                            if (null === (u = i.shared.pending)) break;
                            s = u.next, u.next = null, i.lastBaseUpdate = u, i.shared.pending = null
                        }
                    }
                    null === E && (c = p), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = E, ba |= a, e.lanes = a, e.memoizedState = p
                }
            }

            function Ei(e, t, n) {
                if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
                    var r = e[t], o = r.callback;
                    if (null !== o) {
                        if (r.callback = null, r = n, "function" != typeof o) throw Error(s(191, o));
                        o.call(r)
                    }
                }
            }

            var pi = (new r.Component).refs;

            function di(e, t, n, r) {
                n = null == (n = n(r, t = e.memoizedState)) ? t : o({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
            }

            var fi = {
                isMounted: function (e) {
                    return !!(e = e._reactInternals) && qe(e) === e
                }, enqueueSetState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = su(), o = au(e), i = ai(r, o);
                    i.payload = t, null != n && (i.callback = n), ui(e, i), uu(e, o, r)
                }, enqueueReplaceState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = su(), o = au(e), i = ai(r, o);
                    i.tag = 1, i.payload = t, null != n && (i.callback = n), ui(e, i), uu(e, o, r)
                }, enqueueForceUpdate: function (e, t) {
                    e = e._reactInternals;
                    var n = su(), r = au(e), o = ai(n, r);
                    o.tag = 2, null != t && (o.callback = t), ui(e, o), uu(e, r, n)
                }
            };

            function Si(e, t, n, r, o, i, s) {
                return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, s) : !(t.prototype && t.prototype.isPureReactComponent && ur(n, r) && ur(o, i))
            }

            function hi(e, t, n) {
                var r = !1, o = uo, i = t.contextType;
                return "object" == typeof i && null !== i ? i = ri(i) : (o = fo(t) ? Eo : co.current, i = (r = null != (r = t.contextTypes)) ? po(e, o) : uo), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = fi, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
            }

            function gi(e, t, n, r) {
                e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fi.enqueueReplaceState(t, t.state, null)
            }

            function Ci(e, t, n, r) {
                var o = e.stateNode;
                o.props = n, o.state = e.memoizedState, o.refs = pi, ii(e);
                var i = t.contextType;
                "object" == typeof i && null !== i ? o.context = ri(i) : (i = fo(t) ? Eo : co.current, o.context = po(e, i)), li(e, n, o, r), o.state = e.memoizedState, "function" == typeof (i = t.getDerivedStateFromProps) && (di(e, t, i, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && fi.enqueueReplaceState(o, o.state, null), li(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.flags |= 4)
            }

            var Ti = Array.isArray;

            function _i(e, t, n) {
                if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag) throw Error(s(309));
                            var r = n.stateNode
                        }
                        if (!r) throw Error(s(147, e));
                        var o = "" + e;
                        return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : ((t = function (e) {
                            var t = r.refs;
                            t === pi && (t = r.refs = {}), null === e ? delete t[o] : t[o] = e
                        })._stringRef = o, t)
                    }
                    if ("string" != typeof e) throw Error(s(284));
                    if (!n._owner) throw Error(s(290, e))
                }
                return e
            }

            function Ai(e, t) {
                if ("textarea" !== e.type) throw Error(s(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
            }

            function Ii(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.lastEffect;
                        null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.flags = 8
                    }
                }

                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), r = r.sibling;
                    return null
                }

                function r(e, t) {
                    for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                    return e
                }

                function o(e, t) {
                    return (e = Ku(e, t)).index = 0, e.sibling = null, e
                }

                function i(t, n, r) {
                    return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags = 2, n) : r : (t.flags = 2, n) : n
                }

                function a(t) {
                    return e && null === t.alternate && (t.flags = 2), t
                }

                function u(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Hu(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
                }

                function c(e, t, n, r) {
                    return null !== t && t.elementType === n.type ? ((r = o(t, n.props)).ref = _i(e, t, n), r.return = e, r) : ((r = Fu(n.type, n.key, n.props, null, e.mode, r)).ref = _i(e, t, n), r.return = e, r)
                }

                function l(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ju(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
                }

                function E(e, t, n, r, i) {
                    return null === t || 7 !== t.tag ? ((t = Bu(n, e.mode, r, i)).return = e, t) : ((t = o(t, n)).return = e, t)
                }

                function p(e, t, n) {
                    if ("string" == typeof t || "number" == typeof t) return (t = Hu("" + t, e.mode, n)).return = e, t;
                    if ("object" == typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case I:
                                return (n = Fu(t.type, t.key, t.props, null, e.mode, n)).ref = _i(e, null, t), n.return = e, n;
                            case R:
                                return (t = Ju(t, e.mode, n)).return = e, t
                        }
                        if (Ti(t) || B(t)) return (t = Bu(t, e.mode, n, null)).return = e, t;
                        Ai(e, t)
                    }
                    return null
                }

                function d(e, t, n, r) {
                    var o = null !== t ? t.key : null;
                    if ("string" == typeof n || "number" == typeof n) return null !== o ? null : u(e, t, "" + n, r);
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case I:
                                return n.key === o ? n.type === y ? E(e, t, n.props.children, r, o) : c(e, t, n, r) : null;
                            case R:
                                return n.key === o ? l(e, t, n, r) : null
                        }
                        if (Ti(n) || B(n)) return null !== o ? null : E(e, t, n, r, null);
                        Ai(e, n)
                    }
                    return null
                }

                function f(e, t, n, r, o) {
                    if ("string" == typeof r || "number" == typeof r) return u(t, e = e.get(n) || null, "" + r, o);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case I:
                                return e = e.get(null === r.key ? n : r.key) || null, r.type === y ? E(t, e, r.props.children, o, r.key) : c(t, e, r, o);
                            case R:
                                return l(t, e = e.get(null === r.key ? n : r.key) || null, r, o)
                        }
                        if (Ti(r) || B(r)) return E(t, e = e.get(n) || null, r, o, null);
                        Ai(t, r)
                    }
                    return null
                }

                function S(o, s, a, u) {
                    for (var c = null, l = null, E = s, S = s = 0, h = null; null !== E && S < a.length; S++) {
                        E.index > S ? (h = E, E = null) : h = E.sibling;
                        var g = d(o, E, a[S], u);
                        if (null === g) {
                            null === E && (E = h);
                            break
                        }
                        e && E && null === g.alternate && t(o, E), s = i(g, s, S), null === l ? c = g : l.sibling = g, l = g, E = h
                    }
                    if (S === a.length) return n(o, E), c;
                    if (null === E) {
                        for (; S < a.length; S++) null !== (E = p(o, a[S], u)) && (s = i(E, s, S), null === l ? c = E : l.sibling = E, l = E);
                        return c
                    }
                    for (E = r(o, E); S < a.length; S++) null !== (h = f(E, o, S, a[S], u)) && (e && null !== h.alternate && E.delete(null === h.key ? S : h.key), s = i(h, s, S), null === l ? c = h : l.sibling = h, l = h);
                    return e && E.forEach((function (e) {
                        return t(o, e)
                    })), c
                }

                function h(o, a, u, c) {
                    var l = B(u);
                    if ("function" != typeof l) throw Error(s(150));
                    if (null == (u = l.call(u))) throw Error(s(151));
                    for (var E = l = null, S = a, h = a = 0, g = null, C = u.next(); null !== S && !C.done; h++, C = u.next()) {
                        S.index > h ? (g = S, S = null) : g = S.sibling;
                        var T = d(o, S, C.value, c);
                        if (null === T) {
                            null === S && (S = g);
                            break
                        }
                        e && S && null === T.alternate && t(o, S), a = i(T, a, h), null === E ? l = T : E.sibling = T, E = T, S = g
                    }
                    if (C.done) return n(o, S), l;
                    if (null === S) {
                        for (; !C.done; h++, C = u.next()) null !== (C = p(o, C.value, c)) && (a = i(C, a, h), null === E ? l = C : E.sibling = C, E = C);
                        return l
                    }
                    for (S = r(o, S); !C.done; h++, C = u.next()) null !== (C = f(S, o, h, C.value, c)) && (e && null !== C.alternate && S.delete(null === C.key ? h : C.key), a = i(C, a, h), null === E ? l = C : E.sibling = C, E = C);
                    return e && S.forEach((function (e) {
                        return t(o, e)
                    })), l
                }

                return function (e, r, i, u) {
                    var c = "object" == typeof i && null !== i && i.type === y && null === i.key;
                    c && (i = i.props.children);
                    var l = "object" == typeof i && null !== i;
                    if (l) switch (i.$$typeof) {
                        case I:
                            e:{
                                for (l = i.key, c = r; null !== c;) {
                                    if (c.key === l) {
                                        switch (c.tag) {
                                            case 7:
                                                if (i.type === y) {
                                                    n(e, c.sibling), (r = o(c, i.props.children)).return = e, e = r;
                                                    break e
                                                }
                                                break;
                                            default:
                                                if (c.elementType === i.type) {
                                                    n(e, c.sibling), (r = o(c, i.props)).ref = _i(e, c, i), r.return = e, e = r;
                                                    break e
                                                }
                                        }
                                        n(e, c);
                                        break
                                    }
                                    t(e, c), c = c.sibling
                                }
                                i.type === y ? ((r = Bu(i.props.children, e.mode, u, i.key)).return = e, e = r) : ((u = Fu(i.type, i.key, i.props, null, e.mode, u)).ref = _i(e, r, i), u.return = e, e = u)
                            }
                            return a(e);
                        case R:
                            e:{
                                for (c = i.key; null !== r;) {
                                    if (r.key === c) {
                                        if (4 === r.tag && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
                                            n(e, r.sibling), (r = o(r, i.children || [])).return = e, e = r;
                                            break e
                                        }
                                        n(e, r);
                                        break
                                    }
                                    t(e, r), r = r.sibling
                                }
                                (r = Ju(i, e.mode, u)).return = e, e = r
                            }
                            return a(e)
                    }
                    if ("string" == typeof i || "number" == typeof i) return i = "" + i, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = o(r, i)).return = e, e = r) : (n(e, r), (r = Hu(i, e.mode, u)).return = e, e = r), a(e);
                    if (Ti(i)) return S(e, r, i, u);
                    if (B(i)) return h(e, r, i, u);
                    if (l && Ai(e, i), void 0 === i && !c) switch (e.tag) {
                        case 1:
                        case 22:
                        case 0:
                        case 11:
                        case 15:
                            throw Error(s(152, W(e.type) || "Component"))
                    }
                    return n(e, r)
                }
            }

            var Ri = Ii(!0), yi = Ii(!1), mi = {}, Oi = io(mi), vi = io(mi), Ni = io(mi);

            function Li(e) {
                if (e === mi) throw Error(s(174));
                return e
            }

            function Pi(e, t) {
                switch (ao(Ni, t), ao(vi, e), ao(Oi, mi), e = t.nodeType) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : de(null, "");
                        break;
                    default:
                        t = de(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                so(Oi), ao(Oi, t)
            }

            function Mi() {
                so(Oi), so(vi), so(Ni)
            }

            function wi(e) {
                Li(Ni.current);
                var t = Li(Oi.current), n = de(t, e.type);
                t !== n && (ao(vi, e), ao(Oi, n))
            }

            function Di(e) {
                vi.current === e && (so(Oi), so(vi))
            }

            var Ui = io(0);

            function bi(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 != (64 & t.flags)) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }

            var Yi = null, Gi = null, ki = !1;

            function xi(e, t) {
                var n = ku(5, null, null, 0);
                n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
            }

            function Ki(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
                    case 13:
                    default:
                        return !1
                }
            }

            function Fi(e) {
                if (ki) {
                    var t = Gi;
                    if (t) {
                        var n = t;
                        if (!Ki(e, t)) {
                            if (!(t = Hr(n.nextSibling)) || !Ki(e, t)) return e.flags = -1025 & e.flags | 2, ki = !1, void (Yi = e);
                            xi(Yi, n)
                        }
                        Yi = e, Gi = Hr(t.firstChild)
                    } else e.flags = -1025 & e.flags | 2, ki = !1, Yi = e
                }
            }

            function Bi(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                Yi = e
            }

            function Vi(e) {
                if (e !== Yi) return !1;
                if (!ki) return Bi(e), ki = !0, !1;
                var t = e.type;
                if (5 !== e.tag || "head" !== t && "body" !== t && !Kr(t, e.memoizedProps)) for (t = Gi; t;) xi(e, t), t = Hr(t.nextSibling);
                if (Bi(e), 13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(s(317));
                    e:{
                        for (e = e.nextSibling, t = 0; e;) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        Gi = Hr(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        Gi = null
                    }
                } else Gi = Yi ? Hr(e.stateNode.nextSibling) : null;
                return !0
            }

            function Hi() {
                Gi = Yi = null, ki = !1
            }

            var Ji = [];

            function ji() {
                for (var e = 0; e < Ji.length; e++) Ji[e]._workInProgressVersionPrimary = null;
                Ji.length = 0
            }

            var Wi = A.ReactCurrentDispatcher, zi = A.ReactCurrentBatchConfig, qi = 0, Xi = null, Qi = null, $i = null,
                Zi = !1, es = !1;

            function ts() {
                throw Error(s(321))
            }

            function ns(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++) if (!sr(e[n], t[n])) return !1;
                return !0
            }

            function rs(e, t, n, r, o, i) {
                if (qi = i, Xi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wi.current = null === e || null === e.memoizedState ? Ls : Ps, e = n(r, o), es) {
                    i = 0;
                    do {
                        if (es = !1, !(25 > i)) throw Error(s(301));
                        i += 1, $i = Qi = null, t.updateQueue = null, Wi.current = Ms, e = n(r, o)
                    } while (es)
                }
                if (Wi.current = Ns, t = null !== Qi && null !== Qi.next, qi = 0, $i = Qi = Xi = null, Zi = !1, t) throw Error(s(300));
                return e
            }

            function os() {
                var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
                return null === $i ? Xi.memoizedState = $i = e : $i = $i.next = e, $i
            }

            function is() {
                if (null === Qi) {
                    var e = Xi.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = Qi.next;
                var t = null === $i ? Xi.memoizedState : $i.next;
                if (null !== t) $i = t, Qi = e; else {
                    if (null === e) throw Error(s(310));
                    e = {
                        memoizedState: (Qi = e).memoizedState,
                        baseState: Qi.baseState,
                        baseQueue: Qi.baseQueue,
                        queue: Qi.queue,
                        next: null
                    }, null === $i ? Xi.memoizedState = $i = e : $i = $i.next = e
                }
                return $i
            }

            function ss(e, t) {
                return "function" == typeof t ? t(e) : t
            }

            function as(e) {
                var t = is(), n = t.queue;
                if (null === n) throw Error(s(311));
                n.lastRenderedReducer = e;
                var r = Qi, o = r.baseQueue, i = n.pending;
                if (null !== i) {
                    if (null !== o) {
                        var a = o.next;
                        o.next = i.next, i.next = a
                    }
                    r.baseQueue = o = i, n.pending = null
                }
                if (null !== o) {
                    o = o.next, r = r.baseState;
                    var u = a = i = null, c = o;
                    do {
                        var l = c.lane;
                        if ((qi & l) === l) null !== u && (u = u.next = {
                            lane: 0,
                            action: c.action,
                            eagerReducer: c.eagerReducer,
                            eagerState: c.eagerState,
                            next: null
                        }), r = c.eagerReducer === e ? c.eagerState : e(r, c.action); else {
                            var E = {
                                lane: l,
                                action: c.action,
                                eagerReducer: c.eagerReducer,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === u ? (a = u = E, i = r) : u = u.next = E, Xi.lanes |= l, ba |= l
                        }
                        c = c.next
                    } while (null !== c && c !== o);
                    null === u ? i = r : u.next = a, sr(r, t.memoizedState) || (Ds = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
                }
                return [t.memoizedState, n.dispatch]
            }

            function us(e) {
                var t = is(), n = t.queue;
                if (null === n) throw Error(s(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch, o = n.pending, i = t.memoizedState;
                if (null !== o) {
                    n.pending = null;
                    var a = o = o.next;
                    do {
                        i = e(i, a.action), a = a.next
                    } while (a !== o);
                    sr(i, t.memoizedState) || (Ds = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
                }
                return [i, r]
            }

            function cs(e, t, n) {
                var r = t._getVersion;
                r = r(t._source);
                var o = t._workInProgressVersionPrimary;
                if (null !== o ? e = o === r : (e = e.mutableReadLanes, (e = (qi & e) === e) && (t._workInProgressVersionPrimary = r, Ji.push(t))), e) return n(t._source);
                throw Ji.push(t), Error(s(350))
            }

            function ls(e, t, n, r) {
                var o = va;
                if (null === o) throw Error(s(349));
                var i = t._getVersion, a = i(t._source), u = Wi.current, c = u.useState((function () {
                    return cs(o, t, n)
                })), l = c[1], E = c[0];
                c = $i;
                var p = e.memoizedState, d = p.refs, f = d.getSnapshot, S = p.source;
                p = p.subscribe;
                var h = Xi;
                return e.memoizedState = {refs: d, source: t, subscribe: r}, u.useEffect((function () {
                    d.getSnapshot = n, d.setSnapshot = l;
                    var e = i(t._source);
                    if (!sr(a, e)) {
                        e = n(t._source), sr(E, e) || (l(e), e = au(h), o.mutableReadLanes |= e & o.pendingLanes), e = o.mutableReadLanes, o.entangledLanes |= e;
                        for (var r = o.entanglements, s = e; 0 < s;) {
                            var u = 31 - Vt(s), c = 1 << u;
                            r[u] |= e, s &= ~c
                        }
                    }
                }), [n, t, r]), u.useEffect((function () {
                    return r(t._source, (function () {
                        var e = d.getSnapshot, n = d.setSnapshot;
                        try {
                            n(e(t._source));
                            var r = au(h);
                            o.mutableReadLanes |= r & o.pendingLanes
                        } catch (e) {
                            n((function () {
                                throw e
                            }))
                        }
                    }))
                }), [t, r]), sr(f, n) && sr(S, t) && sr(p, r) || ((e = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: ss,
                    lastRenderedState: E
                }).dispatch = l = vs.bind(null, Xi, e), c.queue = e, c.baseQueue = null, E = cs(o, t, n), c.memoizedState = c.baseState = E), E
            }

            function Es(e, t, n) {
                return ls(is(), e, t, n)
            }

            function ps(e) {
                var t = os();
                return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: ss,
                    lastRenderedState: e
                }).dispatch = vs.bind(null, Xi, e), [t.memoizedState, e]
            }

            function ds(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                }, null === (t = Xi.updateQueue) ? (t = {lastEffect: null}, Xi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
            }

            function fs(e) {
                return e = {current: e}, os().memoizedState = e
            }

            function Ss() {
                return is().memoizedState
            }

            function hs(e, t, n, r) {
                var o = os();
                Xi.flags |= e, o.memoizedState = ds(1 | t, n, void 0, void 0 === r ? null : r)
            }

            function gs(e, t, n, r) {
                var o = is();
                r = void 0 === r ? null : r;
                var i = void 0;
                if (null !== Qi) {
                    var s = Qi.memoizedState;
                    if (i = s.destroy, null !== r && ns(r, s.deps)) return void ds(t, n, i, r)
                }
                Xi.flags |= e, o.memoizedState = ds(1 | t, n, i, r)
            }

            function Cs(e, t) {
                return hs(516, 4, e, t)
            }

            function Ts(e, t) {
                return gs(516, 4, e, t)
            }

            function _s(e, t) {
                return gs(4, 2, e, t)
            }

            function As(e, t) {
                return "function" == typeof t ? (e = e(), t(e), function () {
                    t(null)
                }) : null != t ? (e = e(), t.current = e, function () {
                    t.current = null
                }) : void 0
            }

            function Is(e, t, n) {
                return n = null != n ? n.concat([e]) : null, gs(4, 2, As.bind(null, t, e), n)
            }

            function Rs() {
            }

            function ys(e, t) {
                var n = is();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && ns(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            }

            function ms(e, t) {
                var n = is();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && ns(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            }

            function Os(e, t) {
                var n = Fo();
                Vo(98 > n ? 98 : n, (function () {
                    e(!0)
                })), Vo(97 < n ? 97 : n, (function () {
                    var n = zi.transition;
                    zi.transition = 1;
                    try {
                        e(!1), t()
                    } finally {
                        zi.transition = n
                    }
                }))
            }

            function vs(e, t, n) {
                var r = su(), o = au(e), i = {lane: o, action: n, eagerReducer: null, eagerState: null, next: null},
                    s = t.pending;
                if (null === s ? i.next = i : (i.next = s.next, s.next = i), t.pending = i, s = e.alternate, e === Xi || null !== s && s === Xi) es = Zi = !0; else {
                    if (0 === e.lanes && (null === s || 0 === s.lanes) && null !== (s = t.lastRenderedReducer)) try {
                        var a = t.lastRenderedState, u = s(a, n);
                        if (i.eagerReducer = s, i.eagerState = u, sr(u, a)) return
                    } catch (e) {
                    }
                    uu(e, o, r)
                }
            }

            var Ns = {
                readContext: ri,
                useCallback: ts,
                useContext: ts,
                useEffect: ts,
                useImperativeHandle: ts,
                useLayoutEffect: ts,
                useMemo: ts,
                useReducer: ts,
                useRef: ts,
                useState: ts,
                useDebugValue: ts,
                useDeferredValue: ts,
                useTransition: ts,
                useMutableSource: ts,
                useOpaqueIdentifier: ts,
                unstable_isNewReconciler: !1
            }, Ls = {
                readContext: ri, useCallback: function (e, t) {
                    return os().memoizedState = [e, void 0 === t ? null : t], e
                }, useContext: ri, useEffect: Cs, useImperativeHandle: function (e, t, n) {
                    return n = null != n ? n.concat([e]) : null, hs(4, 2, As.bind(null, t, e), n)
                }, useLayoutEffect: function (e, t) {
                    return hs(4, 2, e, t)
                }, useMemo: function (e, t) {
                    var n = os();
                    return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                }, useReducer: function (e, t, n) {
                    var r = os();
                    return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }).dispatch = vs.bind(null, Xi, e), [r.memoizedState, e]
                }, useRef: fs, useState: ps, useDebugValue: Rs, useDeferredValue: function (e) {
                    var t = ps(e), n = t[0], r = t[1];
                    return Cs((function () {
                        var t = zi.transition;
                        zi.transition = 1;
                        try {
                            r(e)
                        } finally {
                            zi.transition = t
                        }
                    }), [e]), n
                }, useTransition: function () {
                    var e = ps(!1), t = e[0];
                    return fs(e = Os.bind(null, e[1])), [e, t]
                }, useMutableSource: function (e, t, n) {
                    var r = os();
                    return r.memoizedState = {
                        refs: {getSnapshot: t, setSnapshot: null},
                        source: e,
                        subscribe: n
                    }, ls(r, e, t, n)
                }, useOpaqueIdentifier: function () {
                    if (ki) {
                        var e = !1, t = function (e) {
                            return {$$typeof: b, toString: e, valueOf: e}
                        }((function () {
                            throw e || (e = !0, n("r:" + (jr++).toString(36))), Error(s(355))
                        })), n = ps(t)[1];
                        return 0 == (2 & Xi.mode) && (Xi.flags |= 516, ds(5, (function () {
                            n("r:" + (jr++).toString(36))
                        }), void 0, null)), t
                    }
                    return ps(t = "r:" + (jr++).toString(36)), t
                }, unstable_isNewReconciler: !1
            }, Ps = {
                readContext: ri,
                useCallback: ys,
                useContext: ri,
                useEffect: Ts,
                useImperativeHandle: Is,
                useLayoutEffect: _s,
                useMemo: ms,
                useReducer: as,
                useRef: Ss,
                useState: function () {
                    return as(ss)
                },
                useDebugValue: Rs,
                useDeferredValue: function (e) {
                    var t = as(ss), n = t[0], r = t[1];
                    return Ts((function () {
                        var t = zi.transition;
                        zi.transition = 1;
                        try {
                            r(e)
                        } finally {
                            zi.transition = t
                        }
                    }), [e]), n
                },
                useTransition: function () {
                    var e = as(ss)[0];
                    return [Ss().current, e]
                },
                useMutableSource: Es,
                useOpaqueIdentifier: function () {
                    return as(ss)[0]
                },
                unstable_isNewReconciler: !1
            }, Ms = {
                readContext: ri,
                useCallback: ys,
                useContext: ri,
                useEffect: Ts,
                useImperativeHandle: Is,
                useLayoutEffect: _s,
                useMemo: ms,
                useReducer: us,
                useRef: Ss,
                useState: function () {
                    return us(ss)
                },
                useDebugValue: Rs,
                useDeferredValue: function (e) {
                    var t = us(ss), n = t[0], r = t[1];
                    return Ts((function () {
                        var t = zi.transition;
                        zi.transition = 1;
                        try {
                            r(e)
                        } finally {
                            zi.transition = t
                        }
                    }), [e]), n
                },
                useTransition: function () {
                    var e = us(ss)[0];
                    return [Ss().current, e]
                },
                useMutableSource: Es,
                useOpaqueIdentifier: function () {
                    return us(ss)[0]
                },
                unstable_isNewReconciler: !1
            }, ws = A.ReactCurrentOwner, Ds = !1;

            function Us(e, t, n, r) {
                t.child = null === e ? yi(t, null, n, r) : Ri(t, e.child, n, r)
            }

            function bs(e, t, n, r, o) {
                n = n.render;
                var i = t.ref;
                return ni(t, o), r = rs(e, t, n, r, i, o), null === e || Ds ? (t.flags |= 1, Us(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, Zs(e, t, o))
            }

            function Ys(e, t, n, r, o, i) {
                if (null === e) {
                    var s = n.type;
                    return "function" != typeof s || xu(s) || void 0 !== s.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Fu(n.type, null, r, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = s, Gs(e, t, s, r, o, i))
                }
                return s = e.child, 0 == (o & i) && (o = s.memoizedProps, (n = null !== (n = n.compare) ? n : ur)(o, r) && e.ref === t.ref) ? Zs(e, t, i) : (t.flags |= 1, (e = Ku(s, r)).ref = t.ref, e.return = t, t.child = e)
            }

            function Gs(e, t, n, r, o, i) {
                if (null !== e && ur(e.memoizedProps, r) && e.ref === t.ref) {
                    if (Ds = !1, 0 == (i & o)) return t.lanes = e.lanes, Zs(e, t, i);
                    0 != (16384 & e.flags) && (Ds = !0)
                }
                return Ks(e, t, n, r, i)
            }

            function ks(e, t, n) {
                var r = t.pendingProps, o = r.children, i = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode) if (0 == (4 & t.mode)) t.memoizedState = {baseLanes: 0}, hu(0, n); else {
                    if (0 == (1073741824 & n)) return e = null !== i ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {baseLanes: e}, hu(0, e), null;
                    t.memoizedState = {baseLanes: 0}, hu(0, null !== i ? i.baseLanes : n)
                } else null !== i ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, hu(0, r);
                return Us(e, t, o, n), t.child
            }

            function xs(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 128)
            }

            function Ks(e, t, n, r, o) {
                var i = fo(n) ? Eo : co.current;
                return i = po(t, i), ni(t, o), n = rs(e, t, n, r, i, o), null === e || Ds ? (t.flags |= 1, Us(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, Zs(e, t, o))
            }

            function Fs(e, t, n, r, o) {
                if (fo(n)) {
                    var i = !0;
                    Co(t)
                } else i = !1;
                if (ni(t, o), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), hi(t, n, r), Ci(t, n, r, o), r = !0; else if (null === e) {
                    var s = t.stateNode, a = t.memoizedProps;
                    s.props = a;
                    var u = s.context, c = n.contextType;
                    c = "object" == typeof c && null !== c ? ri(c) : po(t, c = fo(n) ? Eo : co.current);
                    var l = n.getDerivedStateFromProps,
                        E = "function" == typeof l || "function" == typeof s.getSnapshotBeforeUpdate;
                    E || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (a !== r || u !== c) && gi(t, s, r, c), oi = !1;
                    var p = t.memoizedState;
                    s.state = p, li(t, r, s, o), u = t.memoizedState, a !== r || p !== u || lo.current || oi ? ("function" == typeof l && (di(t, n, l, r), u = t.memoizedState), (a = oi || Si(t, n, a, r, p, u, c)) ? (E || "function" != typeof s.UNSAFE_componentWillMount && "function" != typeof s.componentWillMount || ("function" == typeof s.componentWillMount && s.componentWillMount(), "function" == typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" == typeof s.componentDidMount && (t.flags |= 4)) : ("function" == typeof s.componentDidMount && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = c, r = a) : ("function" == typeof s.componentDidMount && (t.flags |= 4), r = !1)
                } else {
                    s = t.stateNode, si(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : zo(t.type, a), s.props = c, E = t.pendingProps, p = s.context, u = "object" == typeof (u = n.contextType) && null !== u ? ri(u) : po(t, u = fo(n) ? Eo : co.current);
                    var d = n.getDerivedStateFromProps;
                    (l = "function" == typeof d || "function" == typeof s.getSnapshotBeforeUpdate) || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (a !== E || p !== u) && gi(t, s, r, u), oi = !1, p = t.memoizedState, s.state = p, li(t, r, s, o);
                    var f = t.memoizedState;
                    a !== E || p !== f || lo.current || oi ? ("function" == typeof d && (di(t, n, d, r), f = t.memoizedState), (c = oi || Si(t, n, c, r, p, f, u)) ? (l || "function" != typeof s.UNSAFE_componentWillUpdate && "function" != typeof s.componentWillUpdate || ("function" == typeof s.componentWillUpdate && s.componentWillUpdate(r, f, u), "function" == typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(r, f, u)), "function" == typeof s.componentDidUpdate && (t.flags |= 4), "function" == typeof s.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" != typeof s.componentDidUpdate || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), "function" != typeof s.getSnapshotBeforeUpdate || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = f), s.props = r, s.state = f, s.context = u, r = c) : ("function" != typeof s.componentDidUpdate || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), "function" != typeof s.getSnapshotBeforeUpdate || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 256), r = !1)
                }
                return Bs(e, t, n, r, i, o)
            }

            function Bs(e, t, n, r, o, i) {
                xs(e, t);
                var s = 0 != (64 & t.flags);
                if (!r && !s) return o && To(t, n, !1), Zs(e, t, i);
                r = t.stateNode, ws.current = t;
                var a = s && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1, null !== e && s ? (t.child = Ri(t, e.child, null, i), t.child = Ri(t, null, a, i)) : Us(e, t, a, i), t.memoizedState = r.state, o && To(t, n, !0), t.child
            }

            function Vs(e) {
                var t = e.stateNode;
                t.pendingContext ? ho(0, t.pendingContext, t.pendingContext !== t.context) : t.context && ho(0, t.context, !1), Pi(e, t.containerInfo)
            }

            var Hs, Js, js, Ws = {dehydrated: null, retryLane: 0};

            function zs(e, t, n) {
                var r, o = t.pendingProps, i = Ui.current, s = !1;
                return (r = 0 != (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)), r ? (s = !0, t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (i |= 1), ao(Ui, 1 & i), null === e ? (void 0 !== o.fallback && Fi(t), e = o.children, i = o.fallback, s ? (e = qs(t, e, i, n), t.child.memoizedState = {baseLanes: n}, t.memoizedState = Ws, e) : "number" == typeof o.unstable_expectedLoadTime ? (e = qs(t, e, i, n), t.child.memoizedState = {baseLanes: n}, t.memoizedState = Ws, t.lanes = 33554432, e) : ((n = Vu({
                    mode: "visible",
                    children: e
                }, t.mode, n, null)).return = t, t.child = n)) : (e.memoizedState, s ? (o = function (e, t, n, r, o) {
                    var i = t.mode, s = e.child;
                    e = s.sibling;
                    var a = {mode: "hidden", children: n};
                    return 0 == (2 & i) && t.child !== s ? ((n = t.child).childLanes = 0, n.pendingProps = a, null !== (s = n.lastEffect) ? (t.firstEffect = n.firstEffect, t.lastEffect = s, s.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = Ku(s, a), null !== e ? r = Ku(e, r) : (r = Bu(r, i, o, null)).flags |= 2, r.return = t, n.return = t, n.sibling = r, t.child = n, r
                }(e, t, o.children, o.fallback, n), s = t.child, i = e.child.memoizedState, s.memoizedState = null === i ? {baseLanes: n} : {baseLanes: i.baseLanes | n}, s.childLanes = e.childLanes & ~n, t.memoizedState = Ws, o) : (n = function (e, t, n, r) {
                    var o = e.child;
                    return e = o.sibling, n = Ku(o, {
                        mode: "visible",
                        children: n
                    }), 0 == (2 & t.mode) && (n.lanes = r), n.return = t, n.sibling = null, null !== e && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n
                }(e, t, o.children, n), t.memoizedState = null, n))
            }

            function qs(e, t, n, r) {
                var o = e.mode, i = e.child;
                return t = {
                    mode: "hidden",
                    children: t
                }, 0 == (2 & o) && null !== i ? (i.childLanes = 0, i.pendingProps = t) : i = Vu(t, o, 0, null), n = Bu(n, o, r, null), i.return = e, n.return = e, i.sibling = n, e.child = i, n
            }

            function Xs(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                null !== n && (n.lanes |= t), ti(e.return, t)
            }

            function Qs(e, t, n, r, o, i) {
                var s = e.memoizedState;
                null === s ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: o,
                    lastEffect: i
                } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o, s.lastEffect = i)
            }

            function $s(e, t, n) {
                var r = t.pendingProps, o = r.revealOrder, i = r.tail;
                if (Us(e, t, r.children, n), 0 != (2 & (r = Ui.current))) r = 1 & r | 2, t.flags |= 64; else {
                    if (null !== e && 0 != (64 & e.flags)) e:for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && Xs(e, n); else if (19 === e.tag) Xs(e, n); else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    r &= 1
                }
                if (ao(Ui, r), 0 == (2 & t.mode)) t.memoizedState = null; else switch (o) {
                    case"forwards":
                        for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === bi(e) && (o = n), n = n.sibling;
                        null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Qs(t, !1, o, n, i, t.lastEffect);
                        break;
                    case"backwards":
                        for (n = null, o = t.child, t.child = null; null !== o;) {
                            if (null !== (e = o.alternate) && null === bi(e)) {
                                t.child = o;
                                break
                            }
                            e = o.sibling, o.sibling = n, n = o, o = e
                        }
                        Qs(t, !0, n, null, i, t.lastEffect);
                        break;
                    case"together":
                        Qs(t, !1, null, null, void 0, t.lastEffect);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function Zs(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies), ba |= t.lanes, 0 != (n & t.childLanes)) {
                    if (null !== e && t.child !== e.child) throw Error(s(153));
                    if (null !== t.child) {
                        for (n = Ku(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ku(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }
                return null
            }

            function ea(e, t) {
                if (!ki) switch (e.tailMode) {
                    case"hidden":
                        t = e.tail;
                        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case"collapsed":
                        n = e.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }

            function ta(e, t, n) {
                var r = t.pendingProps;
                switch (t.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return null;
                    case 1:
                        return fo(t.type) && So(), null;
                    case 3:
                        return Mi(), so(lo), so(co), ji(), (r = t.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (Vi(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), null;
                    case 5:
                        Di(t);
                        var i = Li(Ni.current);
                        if (n = t.type, null !== e && null != t.stateNode) Js(e, t, n, r), e.ref !== t.ref && (t.flags |= 128); else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(s(166));
                                return null
                            }
                            if (e = Li(Oi.current), Vi(t)) {
                                r = t.stateNode, n = t.type;
                                var a = t.memoizedProps;
                                switch (r[zr] = t, r[qr] = a, n) {
                                    case"dialog":
                                        Or("cancel", r), Or("close", r);
                                        break;
                                    case"iframe":
                                    case"object":
                                    case"embed":
                                        Or("load", r);
                                        break;
                                    case"video":
                                    case"audio":
                                        for (e = 0; e < Ir.length; e++) Or(Ir[e], r);
                                        break;
                                    case"source":
                                        Or("error", r);
                                        break;
                                    case"img":
                                    case"image":
                                    case"link":
                                        Or("error", r), Or("load", r);
                                        break;
                                    case"details":
                                        Or("toggle", r);
                                        break;
                                    case"input":
                                        ee(r, a), Or("invalid", r);
                                        break;
                                    case"select":
                                        r._wrapperState = {wasMultiple: !!a.multiple}, Or("invalid", r);
                                        break;
                                    case"textarea":
                                        ue(r, a), Or("invalid", r)
                                }
                                for (var c in Re(n, a), e = null, a) a.hasOwnProperty(c) && (i = a[c], "children" === c ? "string" == typeof i ? r.textContent !== i && (e = ["children", i]) : "number" == typeof i && r.textContent !== "" + i && (e = ["children", "" + i]) : u.hasOwnProperty(c) && null != i && "onScroll" === c && Or("scroll", r));
                                switch (n) {
                                    case"input":
                                        X(r), re(r, a, !0);
                                        break;
                                    case"textarea":
                                        X(r), le(r);
                                        break;
                                    case"select":
                                    case"option":
                                        break;
                                    default:
                                        "function" == typeof a.onClick && (r.onclick = Yr)
                                }
                                r = e, t.updateQueue = r, null !== r && (t.flags |= 4)
                            } else {
                                switch (c = 9 === i.nodeType ? i : i.ownerDocument, e === Ee && (e = pe(n)), e === Ee ? "script" === n ? ((e = c.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = c.createElement(n, {is: r.is}) : (e = c.createElement(n), "select" === n && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[zr] = t, e[qr] = r, Hs(e, t), t.stateNode = e, c = ye(n, r), n) {
                                    case"dialog":
                                        Or("cancel", e), Or("close", e), i = r;
                                        break;
                                    case"iframe":
                                    case"object":
                                    case"embed":
                                        Or("load", e), i = r;
                                        break;
                                    case"video":
                                    case"audio":
                                        for (i = 0; i < Ir.length; i++) Or(Ir[i], e);
                                        i = r;
                                        break;
                                    case"source":
                                        Or("error", e), i = r;
                                        break;
                                    case"img":
                                    case"image":
                                    case"link":
                                        Or("error", e), Or("load", e), i = r;
                                        break;
                                    case"details":
                                        Or("toggle", e), i = r;
                                        break;
                                    case"input":
                                        ee(e, r), i = Z(e, r), Or("invalid", e);
                                        break;
                                    case"option":
                                        i = ie(e, r);
                                        break;
                                    case"select":
                                        e._wrapperState = {wasMultiple: !!r.multiple}, i = o({}, r, {value: void 0}), Or("invalid", e);
                                        break;
                                    case"textarea":
                                        ue(e, r), i = ae(e, r), Or("invalid", e);
                                        break;
                                    default:
                                        i = r
                                }
                                Re(n, i);
                                var l = i;
                                for (a in l) if (l.hasOwnProperty(a)) {
                                    var E = l[a];
                                    "style" === a ? Ae(e, E) : "dangerouslySetInnerHTML" === a ? null != (E = E ? E.__html : void 0) && he(e, E) : "children" === a ? "string" == typeof E ? ("textarea" !== n || "" !== E) && ge(e, E) : "number" == typeof E && ge(e, "" + E) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (u.hasOwnProperty(a) ? null != E && "onScroll" === a && Or("scroll", e) : null != E && _(e, a, E, c))
                                }
                                switch (n) {
                                    case"input":
                                        X(e), re(e, r, !1);
                                        break;
                                    case"textarea":
                                        X(e), le(e);
                                        break;
                                    case"option":
                                        null != r.value && e.setAttribute("value", "" + z(r.value));
                                        break;
                                    case"select":
                                        e.multiple = !!r.multiple, null != (a = r.value) ? se(e, !!r.multiple, a, !1) : null != r.defaultValue && se(e, !!r.multiple, r.defaultValue, !0);
                                        break;
                                    default:
                                        "function" == typeof i.onClick && (e.onclick = Yr)
                                }
                                xr(n, r) && (t.flags |= 4)
                            }
                            null !== t.ref && (t.flags |= 128)
                        }
                        return null;
                    case 6:
                        if (e && null != t.stateNode) js(0, t, e.memoizedProps, r); else {
                            if ("string" != typeof r && null === t.stateNode) throw Error(s(166));
                            n = Li(Ni.current), Li(Oi.current), Vi(t) ? (r = t.stateNode, n = t.memoizedProps, r[zr] = t, r.nodeValue !== n && (t.flags |= 4)) : ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[zr] = t, t.stateNode = r)
                        }
                        return null;
                    case 13:
                        return so(Ui), r = t.memoizedState, 0 != (64 & t.flags) ? (t.lanes = n, t) : (r = null !== r, n = !1, null === e ? void 0 !== t.memoizedProps.fallback && Vi(t) : n = null !== e.memoizedState, r && !n && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Ui.current) ? 0 === wa && (wa = 3) : (0 !== wa && 3 !== wa || (wa = 4), null === va || 0 == (134217727 & ba) && 0 == (134217727 & Ya) || pu(va, La))), (r || n) && (t.flags |= 4), null);
                    case 4:
                        return Mi(), null === e && Nr(t.stateNode.containerInfo), null;
                    case 10:
                        return ei(t), null;
                    case 17:
                        return fo(t.type) && So(), null;
                    case 19:
                        if (so(Ui), null === (r = t.memoizedState)) return null;
                        if (a = 0 != (64 & t.flags), null === (c = r.rendering)) if (a) ea(r, !1); else {
                            if (0 !== wa || null !== e && 0 != (64 & e.flags)) for (e = t.child; null !== e;) {
                                if (null !== (c = bi(e))) {
                                    for (t.flags |= 64, ea(r, !1), null !== (a = c.updateQueue) && (t.updateQueue = a, t.flags |= 4), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; null !== n;) e = r, (a = n).flags &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, null === (c = a.alternate) ? (a.childLanes = 0, a.lanes = e, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = c.childLanes, a.lanes = c.lanes, a.child = c.child, a.memoizedProps = c.memoizedProps, a.memoizedState = c.memoizedState, a.updateQueue = c.updateQueue, a.type = c.type, e = c.dependencies, a.dependencies = null === e ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), n = n.sibling;
                                    return ao(Ui, 1 & Ui.current | 2), t.child
                                }
                                e = e.sibling
                            }
                            null !== r.tail && Ko() > Ka && (t.flags |= 64, a = !0, ea(r, !1), t.lanes = 33554432)
                        } else {
                            if (!a) if (null !== (e = bi(c))) {
                                if (t.flags |= 64, a = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), ea(r, !0), null === r.tail && "hidden" === r.tailMode && !c.alternate && !ki) return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null
                            } else 2 * Ko() - r.renderingStartTime > Ka && 1073741824 !== n && (t.flags |= 64, a = !0, ea(r, !1), t.lanes = 33554432);
                            r.isBackwards ? (c.sibling = t.child, t.child = c) : (null !== (n = r.last) ? n.sibling = c : t.child = c, r.last = c)
                        }
                        return null !== r.tail ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = Ko(), n.sibling = null, t = Ui.current, ao(Ui, a ? 1 & t | 2 : 1 & t), n) : null;
                    case 23:
                    case 24:
                        return gu(), null !== e && null !== e.memoizedState != (null !== t.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (t.flags |= 4), null
                }
                throw Error(s(156, t.tag))
            }

            function na(e) {
                switch (e.tag) {
                    case 1:
                        fo(e.type) && So();
                        var t = e.flags;
                        return 4096 & t ? (e.flags = -4097 & t | 64, e) : null;
                    case 3:
                        if (Mi(), so(lo), so(co), ji(), 0 != (64 & (t = e.flags))) throw Error(s(285));
                        return e.flags = -4097 & t | 64, e;
                    case 5:
                        return Di(e), null;
                    case 13:
                        return so(Ui), 4096 & (t = e.flags) ? (e.flags = -4097 & t | 64, e) : null;
                    case 19:
                        return so(Ui), null;
                    case 4:
                        return Mi(), null;
                    case 10:
                        return ei(e), null;
                    case 23:
                    case 24:
                        return gu(), null;
                    default:
                        return null
                }
            }

            function ra(e, t) {
                try {
                    var n = "", r = t;
                    do {
                        n += j(r), r = r.return
                    } while (r);
                    var o = n
                } catch (e) {
                    o = "\nError generating stack: " + e.message + "\n" + e.stack
                }
                return {value: e, source: t, stack: o}
            }

            function oa(e, t) {
                try {
                    console.error(t.value)
                } catch (e) {
                    setTimeout((function () {
                        throw e
                    }))
                }
            }

            Hs = function (e, t) {
                for (var n = t.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode); else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === t) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }, Js = function (e, t, n, r) {
                var i = e.memoizedProps;
                if (i !== r) {
                    e = t.stateNode, Li(Oi.current);
                    var s, a = null;
                    switch (n) {
                        case"input":
                            i = Z(e, i), r = Z(e, r), a = [];
                            break;
                        case"option":
                            i = ie(e, i), r = ie(e, r), a = [];
                            break;
                        case"select":
                            i = o({}, i, {value: void 0}), r = o({}, r, {value: void 0}), a = [];
                            break;
                        case"textarea":
                            i = ae(e, i), r = ae(e, r), a = [];
                            break;
                        default:
                            "function" != typeof i.onClick && "function" == typeof r.onClick && (e.onclick = Yr)
                    }
                    for (E in Re(n, r), n = null, i) if (!r.hasOwnProperty(E) && i.hasOwnProperty(E) && null != i[E]) if ("style" === E) {
                        var c = i[E];
                        for (s in c) c.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                    } else "dangerouslySetInnerHTML" !== E && "children" !== E && "suppressContentEditableWarning" !== E && "suppressHydrationWarning" !== E && "autoFocus" !== E && (u.hasOwnProperty(E) ? a || (a = []) : (a = a || []).push(E, null));
                    for (E in r) {
                        var l = r[E];
                        if (c = null != i ? i[E] : void 0, r.hasOwnProperty(E) && l !== c && (null != l || null != c)) if ("style" === E) if (c) {
                            for (s in c) !c.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                            for (s in l) l.hasOwnProperty(s) && c[s] !== l[s] && (n || (n = {}), n[s] = l[s])
                        } else n || (a || (a = []), a.push(E, n)), n = l; else "dangerouslySetInnerHTML" === E ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, null != l && c !== l && (a = a || []).push(E, l)) : "children" === E ? "string" != typeof l && "number" != typeof l || (a = a || []).push(E, "" + l) : "suppressContentEditableWarning" !== E && "suppressHydrationWarning" !== E && (u.hasOwnProperty(E) ? (null != l && "onScroll" === E && Or("scroll", e), a || c === l || (a = [])) : "object" == typeof l && null !== l && l.$$typeof === b ? l.toString() : (a = a || []).push(E, l))
                    }
                    n && (a = a || []).push("style", n);
                    var E = a;
                    (t.updateQueue = E) && (t.flags |= 4)
                }
            }, js = function (e, t, n, r) {
                n !== r && (t.flags |= 4)
            };
            var ia = "function" == typeof WeakMap ? WeakMap : Map;

            function sa(e, t, n) {
                (n = ai(-1, n)).tag = 3, n.payload = {element: null};
                var r = t.value;
                return n.callback = function () {
                    Ha || (Ha = !0, Ja = r), oa(0, t)
                }, n
            }

            function aa(e, t, n) {
                (n = ai(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" == typeof r) {
                    var o = t.value;
                    n.payload = function () {
                        return oa(0, t), r(o)
                    }
                }
                var i = e.stateNode;
                return null !== i && "function" == typeof i.componentDidCatch && (n.callback = function () {
                    "function" != typeof r && (null === ja ? ja = new Set([this]) : ja.add(this), oa(0, t));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {componentStack: null !== e ? e : ""})
                }), n
            }

            var ua = "function" == typeof WeakSet ? WeakSet : Set;

            function ca(e) {
                var t = e.ref;
                if (null !== t) if ("function" == typeof t) try {
                    t(null)
                } catch (t) {
                    Uu(e, t)
                } else t.current = null
            }

            function la(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        return;
                    case 1:
                        if (256 & t.flags && null !== e) {
                            var n = e.memoizedProps, r = e.memoizedState;
                            t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : zo(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                        }
                        return;
                    case 3:
                        return void (256 & t.flags && Vr(t.stateNode.containerInfo));
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        return
                }
                throw Error(s(163))
            }

            function Ea(e, t, n) {
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                            e = t = t.next;
                            do {
                                if (3 == (3 & e.tag)) {
                                    var r = e.create;
                                    e.destroy = r()
                                }
                                e = e.next
                            } while (e !== t)
                        }
                        if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                            e = t = t.next;
                            do {
                                var o = e;
                                r = o.next, 0 != (4 & (o = o.tag)) && 0 != (1 & o) && (Mu(n, e), Pu(n, e)), e = r
                            } while (e !== t)
                        }
                        return;
                    case 1:
                        return e = n.stateNode, 4 & n.flags && (null === t ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : zo(n.type, t.memoizedProps), e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), void (null !== (t = n.updateQueue) && Ei(n, t, e));
                    case 3:
                        if (null !== (t = n.updateQueue)) {
                            if (e = null, null !== n.child) switch (n.child.tag) {
                                case 5:
                                    e = n.child.stateNode;
                                    break;
                                case 1:
                                    e = n.child.stateNode
                            }
                            Ei(n, t, e)
                        }
                        return;
                    case 5:
                        return e = n.stateNode, void (null === t && 4 & n.flags && xr(n.type, n.memoizedProps) && e.focus());
                    case 6:
                    case 4:
                    case 12:
                        return;
                    case 13:
                        return void (null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && At(n)))));
                    case 19:
                    case 17:
                    case 20:
                    case 21:
                    case 23:
                    case 24:
                        return
                }
                throw Error(s(163))
            }

            function pa(e, t) {
                for (var n = e; ;) {
                    if (5 === n.tag) {
                        var r = n.stateNode;
                        if (t) "function" == typeof (r = r.style).setProperty ? r.setProperty("display", "none", "important") : r.display = "none"; else {
                            r = n.stateNode;
                            var o = n.memoizedProps.style;
                            o = null != o && o.hasOwnProperty("display") ? o.display : null, r.style.display = _e("display", o)
                        }
                    } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps; else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === e) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === e) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }

            function da(e, t) {
                if (Ao && "function" == typeof Ao.onCommitFiberUnmount) try {
                    Ao.onCommitFiberUnmount(_o, t)
                } catch (e) {
                }
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                            var n = e = e.next;
                            do {
                                var r = n, o = r.destroy;
                                if (r = r.tag, void 0 !== o) if (0 != (4 & r)) Mu(t, n); else {
                                    r = t;
                                    try {
                                        o()
                                    } catch (e) {
                                        Uu(r, e)
                                    }
                                }
                                n = n.next
                            } while (n !== e)
                        }
                        break;
                    case 1:
                        if (ca(t), "function" == typeof (e = t.stateNode).componentWillUnmount) try {
                            e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                        } catch (e) {
                            Uu(t, e)
                        }
                        break;
                    case 5:
                        ca(t);
                        break;
                    case 4:
                        Ta(e, t)
                }
            }

            function fa(e) {
                e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null
            }

            function Sa(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }

            function ha(e) {
                e:{
                    for (var t = e.return; null !== t;) {
                        if (Sa(t)) break e;
                        t = t.return
                    }
                    throw Error(s(160))
                }
                var n = t;
                switch (t = n.stateNode, n.tag) {
                    case 5:
                        var r = !1;
                        break;
                    case 3:
                    case 4:
                        t = t.containerInfo, r = !0;
                        break;
                    default:
                        throw Error(s(161))
                }
                16 & n.flags && (ge(t, ""), n.flags &= -17);
                e:t:for (n = e; ;) {
                    for (; null === n.sibling;) {
                        if (null === n.return || Sa(n.return)) {
                            n = null;
                            break e
                        }
                        n = n.return
                    }
                    for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                        if (2 & n.flags) continue t;
                        if (null === n.child || 4 === n.tag) continue t;
                        n.child.return = n, n = n.child
                    }
                    if (!(2 & n.flags)) {
                        n = n.stateNode;
                        break e
                    }
                }
                r ? ga(e, n, t) : Ca(e, n, t)
            }

            function ga(e, t, n) {
                var r = e.tag, o = 5 === r || 6 === r;
                if (o) e = o ? e.stateNode : e.stateNode.instance, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Yr)); else if (4 !== r && null !== (e = e.child)) for (ga(e, t, n), e = e.sibling; null !== e;) ga(e, t, n), e = e.sibling
            }

            function Ca(e, t, n) {
                var r = e.tag, o = 5 === r || 6 === r;
                if (o) e = o ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e); else if (4 !== r && null !== (e = e.child)) for (Ca(e, t, n), e = e.sibling; null !== e;) Ca(e, t, n), e = e.sibling
            }

            function Ta(e, t) {
                for (var n, r, o = t, i = !1; ;) {
                    if (!i) {
                        i = o.return;
                        e:for (; ;) {
                            if (null === i) throw Error(s(160));
                            switch (n = i.stateNode, i.tag) {
                                case 5:
                                    r = !1;
                                    break e;
                                case 3:
                                case 4:
                                    n = n.containerInfo, r = !0;
                                    break e
                            }
                            i = i.return
                        }
                        i = !0
                    }
                    if (5 === o.tag || 6 === o.tag) {
                        e:for (var a = e, u = o, c = u; ;) if (da(a, c), null !== c.child && 4 !== c.tag) c.child.return = c, c = c.child; else {
                            if (c === u) break e;
                            for (; null === c.sibling;) {
                                if (null === c.return || c.return === u) break e;
                                c = c.return
                            }
                            c.sibling.return = c.return, c = c.sibling
                        }
                        r ? (a = n, u = o.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(u) : a.removeChild(u)) : n.removeChild(o.stateNode)
                    } else if (4 === o.tag) {
                        if (null !== o.child) {
                            n = o.stateNode.containerInfo, r = !0, o.child.return = o, o = o.child;
                            continue
                        }
                    } else if (da(e, o), null !== o.child) {
                        o.child.return = o, o = o.child;
                        continue
                    }
                    if (o === t) break;
                    for (; null === o.sibling;) {
                        if (null === o.return || o.return === t) return;
                        4 === (o = o.return).tag && (i = !1)
                    }
                    o.sibling.return = o.return, o = o.sibling
                }
            }

            function _a(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        var n = t.updateQueue;
                        if (null !== (n = null !== n ? n.lastEffect : null)) {
                            var r = n = n.next;
                            do {
                                3 == (3 & r.tag) && (e = r.destroy, r.destroy = void 0, void 0 !== e && e()), r = r.next
                            } while (r !== n)
                        }
                        return;
                    case 1:
                        return;
                    case 5:
                        if (null != (n = t.stateNode)) {
                            r = t.memoizedProps;
                            var o = null !== e ? e.memoizedProps : r;
                            e = t.type;
                            var i = t.updateQueue;
                            if (t.updateQueue = null, null !== i) {
                                for (n[qr] = r, "input" === e && "radio" === r.type && null != r.name && te(n, r), ye(e, o), t = ye(e, r), o = 0; o < i.length; o += 2) {
                                    var a = i[o], u = i[o + 1];
                                    "style" === a ? Ae(n, u) : "dangerouslySetInnerHTML" === a ? he(n, u) : "children" === a ? ge(n, u) : _(n, a, u, t)
                                }
                                switch (e) {
                                    case"input":
                                        ne(n, r);
                                        break;
                                    case"textarea":
                                        ce(n, r);
                                        break;
                                    case"select":
                                        e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (i = r.value) ? se(n, !!r.multiple, i, !1) : e !== !!r.multiple && (null != r.defaultValue ? se(n, !!r.multiple, r.defaultValue, !0) : se(n, !!r.multiple, r.multiple ? [] : "", !1))
                                }
                            }
                        }
                        return;
                    case 6:
                        if (null === t.stateNode) throw Error(s(162));
                        return void (t.stateNode.nodeValue = t.memoizedProps);
                    case 3:
                        return void ((n = t.stateNode).hydrate && (n.hydrate = !1, At(n.containerInfo)));
                    case 12:
                        return;
                    case 13:
                        return null !== t.memoizedState && (xa = Ko(), pa(t.child, !0)), void Aa(t);
                    case 19:
                        return void Aa(t);
                    case 17:
                        return;
                    case 23:
                    case 24:
                        return void pa(t, null !== t.memoizedState)
                }
                throw Error(s(163))
            }

            function Aa(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new ua), t.forEach((function (t) {
                        var r = Yu.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r))
                    }))
                }
            }

            function Ia(e, t) {
                return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && null !== (t = t.memoizedState) && null === t.dehydrated
            }

            var Ra = Math.ceil, ya = A.ReactCurrentDispatcher, ma = A.ReactCurrentOwner, Oa = 0, va = null, Na = null,
                La = 0, Pa = 0, Ma = io(0), wa = 0, Da = null, Ua = 0, ba = 0, Ya = 0, Ga = 0, ka = null, xa = 0,
                Ka = 1 / 0;

            function Fa() {
                Ka = Ko() + 500
            }

            var Ba, Va = null, Ha = !1, Ja = null, ja = null, Wa = !1, za = null, qa = 90, Xa = [], Qa = [], $a = null,
                Za = 0, eu = null, tu = -1, nu = 0, ru = 0, ou = null, iu = !1;

            function su() {
                return 0 != (48 & Oa) ? Ko() : -1 !== tu ? tu : tu = Ko()
            }

            function au(e) {
                if (0 == (2 & (e = e.mode))) return 1;
                if (0 == (4 & e)) return 99 === Fo() ? 1 : 2;
                if (0 === nu && (nu = Ua), 0 !== Wo.transition) {
                    0 !== ru && (ru = null !== ka ? ka.pendingLanes : 0), e = nu;
                    var t = 4186112 & ~ru;
                    return 0 == (t &= -t) && 0 == (t = (e = 4186112 & ~e) & -e) && (t = 8192), t
                }
                return e = Fo(), e = xt(0 != (4 & Oa) && 98 === e ? 12 : e = function (e) {
                    switch (e) {
                        case 99:
                            return 15;
                        case 98:
                            return 10;
                        case 97:
                        case 96:
                            return 8;
                        case 95:
                            return 2;
                        default:
                            return 0
                    }
                }(e), nu)
            }

            function uu(e, t, n) {
                if (50 < Za) throw Za = 0, eu = null, Error(s(185));
                if (null === (e = cu(e, t))) return null;
                Bt(e, t, n), e === va && (Ya |= t, 4 === wa && pu(e, La));
                var r = Fo();
                1 === t ? 0 != (8 & Oa) && 0 == (48 & Oa) ? du(e) : (lu(e, n), 0 === Oa && (Fa(), Jo())) : (0 == (4 & Oa) || 98 !== r && 99 !== r || (null === $a ? $a = new Set([e]) : $a.add(e)), lu(e, n)), ka = e
            }

            function cu(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }

            function lu(e, t) {
                for (var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
                    var u = 31 - Vt(a), c = 1 << u, l = i[u];
                    if (-1 === l) {
                        if (0 == (c & r) || 0 != (c & o)) {
                            l = t, Yt(c);
                            var E = bt;
                            i[u] = 10 <= E ? l + 250 : 6 <= E ? l + 5e3 : -1
                        }
                    } else l <= t && (e.expiredLanes |= c);
                    a &= ~c
                }
                if (r = Gt(e, e === va ? La : 0), t = bt, 0 === r) null !== n && (n !== Uo && yo(n), e.callbackNode = null, e.callbackPriority = 0); else {
                    if (null !== n) {
                        if (e.callbackPriority === t) return;
                        n !== Uo && yo(n)
                    }
                    15 === t ? (n = du.bind(null, e), null === Yo ? (Yo = [n], Go = Ro(Lo, jo)) : Yo.push(n), n = Uo) : n = 14 === t ? Ho(99, du.bind(null, e)) : Ho(n = function (e) {
                        switch (e) {
                            case 15:
                            case 14:
                                return 99;
                            case 13:
                            case 12:
                            case 11:
                            case 10:
                                return 98;
                            case 9:
                            case 8:
                            case 7:
                            case 6:
                            case 4:
                            case 5:
                                return 97;
                            case 3:
                            case 2:
                            case 1:
                                return 95;
                            case 0:
                                return 90;
                            default:
                                throw Error(s(358, e))
                        }
                    }(t), Eu.bind(null, e)), e.callbackPriority = t, e.callbackNode = n
                }
            }

            function Eu(e) {
                if (tu = -1, ru = nu = 0, 0 != (48 & Oa)) throw Error(s(327));
                var t = e.callbackNode;
                if (Lu() && e.callbackNode !== t) return null;
                var n = Gt(e, e === va ? La : 0);
                if (0 === n) return null;
                var r = n, o = Oa;
                Oa |= 16;
                var i = _u();
                for (va === e && La === r || (Fa(), Cu(e, r)); ;) try {
                    Ru();
                    break
                } catch (t) {
                    Tu(e, t)
                }
                if (Zo(), ya.current = i, Oa = o, null !== Na ? r = 0 : (va = null, La = 0, r = wa), 0 != (Ua & Ya)) Cu(e, 0); else if (0 !== r) {
                    if (2 === r && (Oa |= 64, e.hydrate && (e.hydrate = !1, Vr(e.containerInfo)), 0 !== (n = kt(e)) && (r = Au(e, n))), 1 === r) throw t = Da, Cu(e, 0), pu(e, n), lu(e, Ko()), t;
                    switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
                        case 0:
                        case 1:
                            throw Error(s(345));
                        case 2:
                            Ou(e);
                            break;
                        case 3:
                            if (pu(e, n), (62914560 & n) === n && 10 < (r = xa + 500 - Ko())) {
                                if (0 !== Gt(e, 0)) break;
                                if (((o = e.suspendedLanes) & n) !== n) {
                                    su(), e.pingedLanes |= e.suspendedLanes & o;
                                    break
                                }
                                e.timeoutHandle = Fr(Ou.bind(null, e), r);
                                break
                            }
                            Ou(e);
                            break;
                        case 4:
                            if (pu(e, n), (4186112 & n) === n) break;
                            for (r = e.eventTimes, o = -1; 0 < n;) {
                                var a = 31 - Vt(n);
                                i = 1 << a, (a = r[a]) > o && (o = a), n &= ~i
                            }
                            if (n = o, 10 < (n = (120 > (n = Ko() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Ra(n / 1960)) - n)) {
                                e.timeoutHandle = Fr(Ou.bind(null, e), n);
                                break
                            }
                            Ou(e);
                            break;
                        case 5:
                            Ou(e);
                            break;
                        default:
                            throw Error(s(329))
                    }
                }
                return lu(e, Ko()), e.callbackNode === t ? Eu.bind(null, e) : null
            }

            function pu(e, t) {
                for (t &= ~Ga, t &= ~Ya, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                    var n = 31 - Vt(t), r = 1 << n;
                    e[n] = -1, t &= ~r
                }
            }

            function du(e) {
                if (0 != (48 & Oa)) throw Error(s(327));
                if (Lu(), e === va && 0 != (e.expiredLanes & La)) {
                    var t = La, n = Au(e, t);
                    0 != (Ua & Ya) && (n = Au(e, t = Gt(e, t)))
                } else n = Au(e, t = Gt(e, 0));
                if (0 !== e.tag && 2 === n && (Oa |= 64, e.hydrate && (e.hydrate = !1, Vr(e.containerInfo)), 0 !== (t = kt(e)) && (n = Au(e, t))), 1 === n) throw n = Da, Cu(e, 0), pu(e, t), lu(e, Ko()), n;
                return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ou(e), lu(e, Ko()), null
            }

            function fu(e, t) {
                var n = Oa;
                Oa |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Oa = n) && (Fa(), Jo())
                }
            }

            function Su(e, t) {
                var n = Oa;
                Oa &= -2, Oa |= 8;
                try {
                    return e(t)
                } finally {
                    0 === (Oa = n) && (Fa(), Jo())
                }
            }

            function hu(e, t) {
                ao(Ma, Pa), Pa |= t, Ua |= t
            }

            function gu() {
                Pa = Ma.current, so(Ma)
            }

            function Cu(e, t) {
                e.finishedWork = null, e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1, Br(n)), null !== Na) for (n = Na.return; null !== n;) {
                    var r = n;
                    switch (r.tag) {
                        case 1:
                            null != (r = r.type.childContextTypes) && So();
                            break;
                        case 3:
                            Mi(), so(lo), so(co), ji();
                            break;
                        case 5:
                            Di(r);
                            break;
                        case 4:
                            Mi();
                            break;
                        case 13:
                        case 19:
                            so(Ui);
                            break;
                        case 10:
                            ei(r);
                            break;
                        case 23:
                        case 24:
                            gu()
                    }
                    n = n.return
                }
                va = e, Na = Ku(e.current, null), La = Pa = Ua = t, wa = 0, Da = null, Ga = Ya = ba = 0
            }

            function Tu(e, t) {
                for (; ;) {
                    var n = Na;
                    try {
                        if (Zo(), Wi.current = Ns, Zi) {
                            for (var r = Xi.memoizedState; null !== r;) {
                                var o = r.queue;
                                null !== o && (o.pending = null), r = r.next
                            }
                            Zi = !1
                        }
                        if (qi = 0, $i = Qi = Xi = null, es = !1, ma.current = null, null === n || null === n.return) {
                            wa = 1, Da = t, Na = null;
                            break
                        }
                        e:{
                            var i = e, s = n.return, a = n, u = t;
                            if (t = La, a.flags |= 2048, a.firstEffect = a.lastEffect = null, null !== u && "object" == typeof u && "function" == typeof u.then) {
                                var c = u;
                                if (0 == (2 & a.mode)) {
                                    var l = a.alternate;
                                    l ? (a.updateQueue = l.updateQueue, a.memoizedState = l.memoizedState, a.lanes = l.lanes) : (a.updateQueue = null, a.memoizedState = null)
                                }
                                var E = 0 != (1 & Ui.current), p = s;
                                do {
                                    var d;
                                    if (d = 13 === p.tag) {
                                        var f = p.memoizedState;
                                        if (null !== f) d = null !== f.dehydrated; else {
                                            var S = p.memoizedProps;
                                            d = void 0 !== S.fallback && (!0 !== S.unstable_avoidThisFallback || !E)
                                        }
                                    }
                                    if (d) {
                                        var h = p.updateQueue;
                                        if (null === h) {
                                            var g = new Set;
                                            g.add(c), p.updateQueue = g
                                        } else h.add(c);
                                        if (0 == (2 & p.mode)) {
                                            if (p.flags |= 64, a.flags |= 16384, a.flags &= -2981, 1 === a.tag) if (null === a.alternate) a.tag = 17; else {
                                                var C = ai(-1, 1);
                                                C.tag = 2, ui(a, C)
                                            }
                                            a.lanes |= 1;
                                            break e
                                        }
                                        u = void 0, a = t;
                                        var T = i.pingCache;
                                        if (null === T ? (T = i.pingCache = new ia, u = new Set, T.set(c, u)) : void 0 === (u = T.get(c)) && (u = new Set, T.set(c, u)), !u.has(a)) {
                                            u.add(a);
                                            var _ = bu.bind(null, i, c, a);
                                            c.then(_, _)
                                        }
                                        p.flags |= 4096, p.lanes = t;
                                        break e
                                    }
                                    p = p.return
                                } while (null !== p);
                                u = Error((W(a.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                            }
                            5 !== wa && (wa = 2), u = ra(u, a), p = s;
                            do {
                                switch (p.tag) {
                                    case 3:
                                        i = u, p.flags |= 4096, t &= -t, p.lanes |= t, ci(p, sa(0, i, t));
                                        break e;
                                    case 1:
                                        i = u;
                                        var A = p.type, I = p.stateNode;
                                        if (0 == (64 & p.flags) && ("function" == typeof A.getDerivedStateFromError || null !== I && "function" == typeof I.componentDidCatch && (null === ja || !ja.has(I)))) {
                                            p.flags |= 4096, t &= -t, p.lanes |= t, ci(p, aa(p, i, t));
                                            break e
                                        }
                                }
                                p = p.return
                            } while (null !== p)
                        }
                        mu(n)
                    } catch (e) {
                        t = e, Na === n && null !== n && (Na = n = n.return);
                        continue
                    }
                    break
                }
            }

            function _u() {
                var e = ya.current;
                return ya.current = Ns, null === e ? Ns : e
            }

            function Au(e, t) {
                var n = Oa;
                Oa |= 16;
                var r = _u();
                for (va === e && La === t || Cu(e, t); ;) try {
                    Iu();
                    break
                } catch (t) {
                    Tu(e, t)
                }
                if (Zo(), Oa = n, ya.current = r, null !== Na) throw Error(s(261));
                return va = null, La = 0, wa
            }

            function Iu() {
                for (; null !== Na;) yu(Na)
            }

            function Ru() {
                for (; null !== Na && !mo();) yu(Na)
            }

            function yu(e) {
                var t = Ba(e.alternate, e, Pa);
                e.memoizedProps = e.pendingProps, null === t ? mu(e) : Na = t, ma.current = null
            }

            function mu(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return, 0 == (2048 & t.flags)) {
                        if (null !== (n = ta(n, t, Pa))) return void (Na = n);
                        if (24 !== (n = t).tag && 23 !== n.tag || null === n.memoizedState || 0 != (1073741824 & Pa) || 0 == (4 & n.mode)) {
                            for (var r = 0, o = n.child; null !== o;) r |= o.lanes | o.childLanes, o = o.sibling;
                            n.childLanes = r
                        }
                        null !== e && 0 == (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t))
                    } else {
                        if (null !== (n = na(t))) return n.flags &= 2047, void (Na = n);
                        null !== e && (e.firstEffect = e.lastEffect = null, e.flags |= 2048)
                    }
                    if (null !== (t = t.sibling)) return void (Na = t);
                    Na = t = e
                } while (null !== t);
                0 === wa && (wa = 5)
            }

            function Ou(e) {
                var t = Fo();
                return Vo(99, vu.bind(null, e, t)), null
            }

            function vu(e, t) {
                do {
                    Lu()
                } while (null !== za);
                if (0 != (48 & Oa)) throw Error(s(327));
                var n = e.finishedWork;
                if (null === n) return null;
                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
                e.callbackNode = null;
                var r = n.lanes | n.childLanes, o = r, i = e.pendingLanes & ~o;
                e.pendingLanes = o, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= o, e.mutableReadLanes &= o, e.entangledLanes &= o, o = e.entanglements;
                for (var a = e.eventTimes, u = e.expirationTimes; 0 < i;) {
                    var c = 31 - Vt(i), l = 1 << c;
                    o[c] = 0, a[c] = -1, u[c] = -1, i &= ~l
                }
                if (null !== $a && 0 == (24 & r) && $a.has(e) && $a.delete(e), e === va && (Na = va = null, La = 0), 1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, null !== r) {
                    if (o = Oa, Oa |= 32, ma.current = null, Gr = zt, dr(a = pr())) {
                        if ("selectionStart" in a) u = {
                            start: a.selectionStart,
                            end: a.selectionEnd
                        }; else e:if (u = (u = a.ownerDocument) && u.defaultView || window, (l = u.getSelection && u.getSelection()) && 0 !== l.rangeCount) {
                            u = l.anchorNode, i = l.anchorOffset, c = l.focusNode, l = l.focusOffset;
                            try {
                                u.nodeType, c.nodeType
                            } catch (e) {
                                u = null;
                                break e
                            }
                            var E = 0, p = -1, d = -1, f = 0, S = 0, h = a, g = null;
                            t:for (; ;) {
                                for (var C; h !== u || 0 !== i && 3 !== h.nodeType || (p = E + i), h !== c || 0 !== l && 3 !== h.nodeType || (d = E + l), 3 === h.nodeType && (E += h.nodeValue.length), null !== (C = h.firstChild);) g = h, h = C;
                                for (; ;) {
                                    if (h === a) break t;
                                    if (g === u && ++f === i && (p = E), g === c && ++S === l && (d = E), null !== (C = h.nextSibling)) break;
                                    g = (h = g).parentNode
                                }
                                h = C
                            }
                            u = -1 === p || -1 === d ? null : {start: p, end: d}
                        } else u = null;
                        u = u || {start: 0, end: 0}
                    } else u = null;
                    kr = {focusedElem: a, selectionRange: u}, zt = !1, ou = null, iu = !1, Va = r;
                    do {
                        try {
                            Nu()
                        } catch (e) {
                            if (null === Va) throw Error(s(330));
                            Uu(Va, e), Va = Va.nextEffect
                        }
                    } while (null !== Va);
                    ou = null, Va = r;
                    do {
                        try {
                            for (a = e; null !== Va;) {
                                var T = Va.flags;
                                if (16 & T && ge(Va.stateNode, ""), 128 & T) {
                                    var _ = Va.alternate;
                                    if (null !== _) {
                                        var A = _.ref;
                                        null !== A && ("function" == typeof A ? A(null) : A.current = null)
                                    }
                                }
                                switch (1038 & T) {
                                    case 2:
                                        ha(Va), Va.flags &= -3;
                                        break;
                                    case 6:
                                        ha(Va), Va.flags &= -3, _a(Va.alternate, Va);
                                        break;
                                    case 1024:
                                        Va.flags &= -1025;
                                        break;
                                    case 1028:
                                        Va.flags &= -1025, _a(Va.alternate, Va);
                                        break;
                                    case 4:
                                        _a(Va.alternate, Va);
                                        break;
                                    case 8:
                                        Ta(a, u = Va);
                                        var I = u.alternate;
                                        fa(u), null !== I && fa(I)
                                }
                                Va = Va.nextEffect
                            }
                        } catch (e) {
                            if (null === Va) throw Error(s(330));
                            Uu(Va, e), Va = Va.nextEffect
                        }
                    } while (null !== Va);
                    if (A = kr, _ = pr(), T = A.focusedElem, a = A.selectionRange, _ !== T && T && T.ownerDocument && Er(T.ownerDocument.documentElement, T)) {
                        null !== a && dr(T) && (_ = a.start, void 0 === (A = a.end) && (A = _), "selectionStart" in T ? (T.selectionStart = _, T.selectionEnd = Math.min(A, T.value.length)) : (A = (_ = T.ownerDocument || document) && _.defaultView || window).getSelection && (A = A.getSelection(), u = T.textContent.length, I = Math.min(a.start, u), a = void 0 === a.end ? I : Math.min(a.end, u), !A.extend && I > a && (u = a, a = I, I = u), u = lr(T, I), i = lr(T, a), u && i && (1 !== A.rangeCount || A.anchorNode !== u.node || A.anchorOffset !== u.offset || A.focusNode !== i.node || A.focusOffset !== i.offset) && ((_ = _.createRange()).setStart(u.node, u.offset), A.removeAllRanges(), I > a ? (A.addRange(_), A.extend(i.node, i.offset)) : (_.setEnd(i.node, i.offset), A.addRange(_))))), _ = [];
                        for (A = T; A = A.parentNode;) 1 === A.nodeType && _.push({
                            element: A,
                            left: A.scrollLeft,
                            top: A.scrollTop
                        });
                        for ("function" == typeof T.focus && T.focus(), T = 0; T < _.length; T++) (A = _[T]).element.scrollLeft = A.left, A.element.scrollTop = A.top
                    }
                    zt = !!Gr, kr = Gr = null, e.current = n, Va = r;
                    do {
                        try {
                            for (T = e; null !== Va;) {
                                var R = Va.flags;
                                if (36 & R && Ea(T, Va.alternate, Va), 128 & R) {
                                    _ = void 0;
                                    var y = Va.ref;
                                    if (null !== y) {
                                        var m = Va.stateNode;
                                        switch (Va.tag) {
                                            case 5:
                                                _ = m;
                                                break;
                                            default:
                                                _ = m
                                        }
                                        "function" == typeof y ? y(_) : y.current = _
                                    }
                                }
                                Va = Va.nextEffect
                            }
                        } catch (e) {
                            if (null === Va) throw Error(s(330));
                            Uu(Va, e), Va = Va.nextEffect
                        }
                    } while (null !== Va);
                    Va = null, bo(), Oa = o
                } else e.current = n;
                if (Wa) Wa = !1, za = e, qa = t; else for (Va = r; null !== Va;) t = Va.nextEffect, Va.nextEffect = null, 8 & Va.flags && ((R = Va).sibling = null, R.stateNode = null), Va = t;
                if (0 === (r = e.pendingLanes) && (ja = null), 1 === r ? e === eu ? Za++ : (Za = 0, eu = e) : Za = 0, n = n.stateNode, Ao && "function" == typeof Ao.onCommitFiberRoot) try {
                    Ao.onCommitFiberRoot(_o, n, void 0, 64 == (64 & n.current.flags))
                } catch (e) {
                }
                if (lu(e, Ko()), Ha) throw Ha = !1, e = Ja, Ja = null, e;
                return 0 != (8 & Oa) || Jo(), null
            }

            function Nu() {
                for (; null !== Va;) {
                    var e = Va.alternate;
                    iu || null === ou || (0 != (8 & Va.flags) ? Ze(Va, ou) && (iu = !0) : 13 === Va.tag && Ia(e, Va) && Ze(Va, ou) && (iu = !0));
                    var t = Va.flags;
                    0 != (256 & t) && la(e, Va), 0 == (512 & t) || Wa || (Wa = !0, Ho(97, (function () {
                        return Lu(), null
                    }))), Va = Va.nextEffect
                }
            }

            function Lu() {
                if (90 !== qa) {
                    var e = 97 < qa ? 97 : qa;
                    return qa = 90, Vo(e, wu)
                }
                return !1
            }

            function Pu(e, t) {
                Xa.push(t, e), Wa || (Wa = !0, Ho(97, (function () {
                    return Lu(), null
                })))
            }

            function Mu(e, t) {
                Qa.push(t, e), Wa || (Wa = !0, Ho(97, (function () {
                    return Lu(), null
                })))
            }

            function wu() {
                if (null === za) return !1;
                var e = za;
                if (za = null, 0 != (48 & Oa)) throw Error(s(331));
                var t = Oa;
                Oa |= 32;
                var n = Qa;
                Qa = [];
                for (var r = 0; r < n.length; r += 2) {
                    var o = n[r], i = n[r + 1], a = o.destroy;
                    if (o.destroy = void 0, "function" == typeof a) try {
                        a()
                    } catch (e) {
                        if (null === i) throw Error(s(330));
                        Uu(i, e)
                    }
                }
                for (n = Xa, Xa = [], r = 0; r < n.length; r += 2) {
                    o = n[r], i = n[r + 1];
                    try {
                        var u = o.create;
                        o.destroy = u()
                    } catch (e) {
                        if (null === i) throw Error(s(330));
                        Uu(i, e)
                    }
                }
                for (u = e.current.firstEffect; null !== u;) e = u.nextEffect, u.nextEffect = null, 8 & u.flags && (u.sibling = null, u.stateNode = null), u = e;
                return Oa = t, Jo(), !0
            }

            function Du(e, t, n) {
                ui(e, t = sa(0, t = ra(n, t), 1)), t = su(), null !== (e = cu(e, 1)) && (Bt(e, 1, t), lu(e, t))
            }

            function Uu(e, t) {
                if (3 === e.tag) Du(e, e, t); else for (var n = e.return; null !== n;) {
                    if (3 === n.tag) {
                        Du(n, e, t);
                        break
                    }
                    if (1 === n.tag) {
                        var r = n.stateNode;
                        if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === ja || !ja.has(r))) {
                            var o = aa(n, e = ra(t, e), 1);
                            if (ui(n, o), o = su(), null !== (n = cu(n, 1))) Bt(n, 1, o), lu(n, o); else if ("function" == typeof r.componentDidCatch && (null === ja || !ja.has(r))) try {
                                r.componentDidCatch(t, e)
                            } catch (e) {
                            }
                            break
                        }
                    }
                    n = n.return
                }
            }

            function bu(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), t = su(), e.pingedLanes |= e.suspendedLanes & n, va === e && (La & n) === n && (4 === wa || 3 === wa && (62914560 & La) === La && 500 > Ko() - xa ? Cu(e, 0) : Ga |= n), lu(e, t)
            }

            function Yu(e, t) {
                var n = e.stateNode;
                null !== n && n.delete(t), 0 == (t = 0) && (0 == (2 & (t = e.mode)) ? t = 1 : 0 == (4 & t) ? t = 99 === Fo() ? 1 : 2 : (0 === nu && (nu = Ua), 0 === (t = Kt(62914560 & ~nu)) && (t = 4194304))), n = su(), null !== (e = cu(e, t)) && (Bt(e, t, n), lu(e, n))
            }

            function Gu(e, t, n, r) {
                this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function ku(e, t, n, r) {
                return new Gu(e, t, n, r)
            }

            function xu(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function Ku(e, t) {
                var n = e.alternate;
                return null === n ? ((n = ku(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
            }

            function Fu(e, t, n, r, o, i) {
                var a = 2;
                if (r = e, "function" == typeof e) xu(e) && (a = 1); else if ("string" == typeof e) a = 5; else e:switch (e) {
                    case y:
                        return Bu(n.children, o, i, t);
                    case Y:
                        a = 8, o |= 16;
                        break;
                    case m:
                        a = 8, o |= 1;
                        break;
                    case O:
                        return (e = ku(12, n, t, 8 | o)).elementType = O, e.type = O, e.lanes = i, e;
                    case P:
                        return (e = ku(13, n, t, o)).type = P, e.elementType = P, e.lanes = i, e;
                    case M:
                        return (e = ku(19, n, t, o)).elementType = M, e.lanes = i, e;
                    case G:
                        return Vu(n, o, i, t);
                    case k:
                        return (e = ku(24, n, t, o)).elementType = k, e.lanes = i, e;
                    default:
                        if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                            case v:
                                a = 10;
                                break e;
                            case N:
                                a = 9;
                                break e;
                            case L:
                                a = 11;
                                break e;
                            case w:
                                a = 14;
                                break e;
                            case D:
                                a = 16, r = null;
                                break e;
                            case U:
                                a = 22;
                                break e
                        }
                        throw Error(s(130, null == e ? e : typeof e, ""))
                }
                return (t = ku(a, n, t, o)).elementType = e, t.type = r, t.lanes = i, t
            }

            function Bu(e, t, n, r) {
                return (e = ku(7, e, r, t)).lanes = n, e
            }

            function Vu(e, t, n, r) {
                return (e = ku(23, e, r, t)).elementType = G, e.lanes = n, e
            }

            function Hu(e, t, n) {
                return (e = ku(6, e, null, t)).lanes = n, e
            }

            function Ju(e, t, n) {
                return (t = ku(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }

            function ju(e, t, n) {
                this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Ft(0), this.expirationTimes = Ft(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ft(0), this.mutableSourceEagerHydrationData = null
            }

            function Wu(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {$$typeof: R, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n}
            }

            function zu(e, t, n, r) {
                var o = t.current, i = su(), a = au(o);
                e:if (n) {
                    t:{
                        if (qe(n = n._reactInternals) !== n || 1 !== n.tag) throw Error(s(170));
                        var u = n;
                        do {
                            switch (u.tag) {
                                case 3:
                                    u = u.stateNode.context;
                                    break t;
                                case 1:
                                    if (fo(u.type)) {
                                        u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break t
                                    }
                            }
                            u = u.return
                        } while (null !== u);
                        throw Error(s(171))
                    }
                    if (1 === n.tag) {
                        var c = n.type;
                        if (fo(c)) {
                            n = go(n, c, u);
                            break e
                        }
                    }
                    n = u
                } else n = uo;
                return null === t.context ? t.context = n : t.pendingContext = n, (t = ai(i, a)).payload = {element: e}, null !== (r = void 0 === r ? null : r) && (t.callback = r), ui(o, t), uu(o, a, i), a
            }

            function qu(e) {
                if (!(e = e.current).child) return null;
                switch (e.child.tag) {
                    case 5:
                    default:
                        return e.child.stateNode
                }
            }

            function Xu(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }

            function Qu(e, t) {
                Xu(e, t), (e = e.alternate) && Xu(e, t)
            }

            function $u(e, t, n) {
                var r = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null;
                if (n = new ju(e, t, null != n && !0 === n.hydrate), t = ku(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0), n.current = t, t.stateNode = n, ii(t), e[Xr] = n.current, Nr(8 === e.nodeType ? e.parentNode : e), r) for (e = 0; e < r.length; e++) {
                    var o = (t = r[e])._getVersion;
                    o = o(t._source), null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, o] : n.mutableSourceEagerHydrationData.push(t, o)
                }
                this._internalRoot = n
            }

            function Zu(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }

            function ec(e, t, n, r, o) {
                var i = n._reactRootContainer;
                if (i) {
                    var s = i._internalRoot;
                    if ("function" == typeof o) {
                        var a = o;
                        o = function () {
                            var e = qu(s);
                            a.call(e)
                        }
                    }
                    zu(t, s, e, o)
                } else {
                    if (i = n._reactRootContainer = function (e, t) {
                        if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild;) e.removeChild(n);
                        return new $u(e, 0, t ? {hydrate: !0} : void 0)
                    }(n, r), s = i._internalRoot, "function" == typeof o) {
                        var u = o;
                        o = function () {
                            var e = qu(s);
                            u.call(e)
                        }
                    }
                    Su((function () {
                        zu(t, s, e, o)
                    }))
                }
                return qu(s)
            }

            function tc(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Zu(t)) throw Error(s(200));
                return Wu(e, t, null, n)
            }

            Ba = function (e, t, n) {
                var r = t.lanes;
                if (null !== e) if (e.memoizedProps !== t.pendingProps || lo.current) Ds = !0; else {
                    if (0 == (n & r)) {
                        switch (Ds = !1, t.tag) {
                            case 3:
                                Vs(t), Hi();
                                break;
                            case 5:
                                wi(t);
                                break;
                            case 1:
                                fo(t.type) && Co(t);
                                break;
                            case 4:
                                Pi(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                r = t.memoizedProps.value;
                                var o = t.type._context;
                                ao(qo, o._currentValue), o._currentValue = r;
                                break;
                            case 13:
                                if (null !== t.memoizedState) return 0 != (n & t.child.childLanes) ? zs(e, t, n) : (ao(Ui, 1 & Ui.current), null !== (t = Zs(e, t, n)) ? t.sibling : null);
                                ao(Ui, 1 & Ui.current);
                                break;
                            case 19:
                                if (r = 0 != (n & t.childLanes), 0 != (64 & e.flags)) {
                                    if (r) return $s(e, t, n);
                                    t.flags |= 64
                                }
                                if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), ao(Ui, Ui.current), r) break;
                                return null;
                            case 23:
                            case 24:
                                return t.lanes = 0, ks(e, t, n)
                        }
                        return Zs(e, t, n)
                    }
                    Ds = 0 != (16384 & e.flags)
                } else Ds = !1;
                switch (t.lanes = 0, t.tag) {
                    case 2:
                        if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = po(t, co.current), ni(t, n), o = rs(null, t, r, e, o, n), t.flags |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof) {
                            if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, fo(r)) {
                                var i = !0;
                                Co(t)
                            } else i = !1;
                            t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, ii(t);
                            var a = r.getDerivedStateFromProps;
                            "function" == typeof a && di(t, r, a, e), o.updater = fi, t.stateNode = o, o._reactInternals = t, Ci(t, r, e, n), t = Bs(null, t, r, !0, i, n)
                        } else t.tag = 0, Us(null, t, o, n), t = t.child;
                        return t;
                    case 16:
                        o = t.elementType;
                        e:{
                            switch (null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = (i = o._init)(o._payload), t.type = o, i = t.tag = function (e) {
                                if ("function" == typeof e) return xu(e) ? 1 : 0;
                                if (null != e) {
                                    if ((e = e.$$typeof) === L) return 11;
                                    if (e === w) return 14
                                }
                                return 2
                            }(o), e = zo(o, e), i) {
                                case 0:
                                    t = Ks(null, t, o, e, n);
                                    break e;
                                case 1:
                                    t = Fs(null, t, o, e, n);
                                    break e;
                                case 11:
                                    t = bs(null, t, o, e, n);
                                    break e;
                                case 14:
                                    t = Ys(null, t, o, zo(o.type, e), r, n);
                                    break e
                            }
                            throw Error(s(306, o, ""))
                        }
                        return t;
                    case 0:
                        return r = t.type, o = t.pendingProps, Ks(e, t, r, o = t.elementType === r ? o : zo(r, o), n);
                    case 1:
                        return r = t.type, o = t.pendingProps, Fs(e, t, r, o = t.elementType === r ? o : zo(r, o), n);
                    case 3:
                        if (Vs(t), r = t.updateQueue, null === e || null === r) throw Error(s(282));
                        if (r = t.pendingProps, o = null !== (o = t.memoizedState) ? o.element : null, si(e, t), li(t, r, null, n), (r = t.memoizedState.element) === o) Hi(), t = Zs(e, t, n); else {
                            if ((i = (o = t.stateNode).hydrate) && (Gi = Hr(t.stateNode.containerInfo.firstChild), Yi = t, i = ki = !0), i) {
                                if (null != (e = o.mutableSourceEagerHydrationData)) for (o = 0; o < e.length; o += 2) (i = e[o])._workInProgressVersionPrimary = e[o + 1], Ji.push(i);
                                for (n = yi(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 1024, n = n.sibling
                            } else Us(e, t, r, n), Hi();
                            t = t.child
                        }
                        return t;
                    case 5:
                        return wi(t), null === e && Fi(t), r = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, a = o.children, Kr(r, o) ? a = null : null !== i && Kr(r, i) && (t.flags |= 16), xs(e, t), Us(e, t, a, n), t.child;
                    case 6:
                        return null === e && Fi(t), null;
                    case 13:
                        return zs(e, t, n);
                    case 4:
                        return Pi(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ri(t, null, r, n) : Us(e, t, r, n), t.child;
                    case 11:
                        return r = t.type, o = t.pendingProps, bs(e, t, r, o = t.elementType === r ? o : zo(r, o), n);
                    case 7:
                        return Us(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return Us(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e:{
                            r = t.type._context, o = t.pendingProps, a = t.memoizedProps, i = o.value;
                            var u = t.type._context;
                            if (ao(qo, u._currentValue), u._currentValue = i, null !== a) if (u = a.value, 0 == (i = sr(u, i) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, i) : 1073741823))) {
                                if (a.children === o.children && !lo.current) {
                                    t = Zs(e, t, n);
                                    break e
                                }
                            } else for (null !== (u = t.child) && (u.return = t); null !== u;) {
                                var c = u.dependencies;
                                if (null !== c) {
                                    a = u.child;
                                    for (var l = c.firstContext; null !== l;) {
                                        if (l.context === r && 0 != (l.observedBits & i)) {
                                            1 === u.tag && ((l = ai(-1, n & -n)).tag = 2, ui(u, l)), u.lanes |= n, null !== (l = u.alternate) && (l.lanes |= n), ti(u.return, n), c.lanes |= n;
                                            break
                                        }
                                        l = l.next
                                    }
                                } else a = 10 === u.tag && u.type === t.type ? null : u.child;
                                if (null !== a) a.return = u; else for (a = u; null !== a;) {
                                    if (a === t) {
                                        a = null;
                                        break
                                    }
                                    if (null !== (u = a.sibling)) {
                                        u.return = a.return, a = u;
                                        break
                                    }
                                    a = a.return
                                }
                                u = a
                            }
                            Us(e, t, o.children, n), t = t.child
                        }
                        return t;
                    case 9:
                        return o = t.type, r = (i = t.pendingProps).children, ni(t, n), r = r(o = ri(o, i.unstable_observedBits)), t.flags |= 1, Us(e, t, r, n), t.child;
                    case 14:
                        return i = zo(o = t.type, t.pendingProps), Ys(e, t, o, i = zo(o.type, i), r, n);
                    case 15:
                        return Gs(e, t, t.type, t.pendingProps, r, n);
                    case 17:
                        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : zo(r, o), null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, fo(r) ? (e = !0, Co(t)) : e = !1, ni(t, n), hi(t, r, o), Ci(t, r, o, n), Bs(null, t, r, !0, e, n);
                    case 19:
                        return $s(e, t, n);
                    case 23:
                    case 24:
                        return ks(e, t, n)
                }
                throw Error(s(156, t.tag))
            }, $u.prototype.render = function (e) {
                zu(e, this._internalRoot, null, null)
            }, $u.prototype.unmount = function () {
                var e = this._internalRoot, t = e.containerInfo;
                zu(null, e, null, (function () {
                    t[Xr] = null
                }))
            }, et = function (e) {
                13 === e.tag && (uu(e, 4, su()), Qu(e, 4))
            }, tt = function (e) {
                13 === e.tag && (uu(e, 67108864, su()), Qu(e, 67108864))
            }, nt = function (e) {
                if (13 === e.tag) {
                    var t = su(), n = au(e);
                    uu(e, n, t), Qu(e, n)
                }
            }, rt = function (e, t) {
                return t()
            }, Oe = function (e, t, n) {
                switch (t) {
                    case"input":
                        if (ne(e, n), t = n.name, "radio" === n.type && null != t) {
                            for (n = e; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var o = to(r);
                                    if (!o) throw Error(s(90));
                                    Q(r), ne(r, o)
                                }
                            }
                        }
                        break;
                    case"textarea":
                        ce(e, n);
                        break;
                    case"select":
                        null != (t = n.value) && se(e, !!n.multiple, t, !1)
                }
            }, we = fu, De = function (e, t, n, r, o) {
                var i = Oa;
                Oa |= 4;
                try {
                    return Vo(98, e.bind(null, t, n, r, o))
                } finally {
                    0 === (Oa = i) && (Fa(), Jo())
                }
            }, Ue = function () {
                0 == (49 & Oa) && (function () {
                    if (null !== $a) {
                        var e = $a;
                        $a = null, e.forEach((function (e) {
                            e.expiredLanes |= 24 & e.pendingLanes, lu(e, Ko())
                        }))
                    }
                    Jo()
                }(), Lu())
            }, be = function (e, t) {
                var n = Oa;
                Oa |= 2;
                try {
                    return e(t)
                } finally {
                    0 === (Oa = n) && (Fa(), Jo())
                }
            };
            var nc = {Events: [Zr, eo, to, Pe, Me, Lu, {current: !1}]},
                rc = {findFiberByHostInstance: $r, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom"},
                oc = {
                    bundleType: rc.bundleType,
                    version: rc.version,
                    rendererPackageName: rc.rendererPackageName,
                    rendererConfig: rc.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: A.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function (e) {
                        return null === (e = $e(e)) ? null : e.stateNode
                    },
                    findFiberByHostInstance: rc.findFiberByHostInstance || function () {
                        return null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null
                };
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!ic.isDisabled && ic.supportsFiber) try {
                    _o = ic.inject(oc), Ao = ic
                } catch (Se) {
                }
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nc, t.createPortal = tc, t.findDOMNode = function (e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" == typeof e.render) throw Error(s(188));
                    throw Error(s(268, Object.keys(e)))
                }
                return null === (e = $e(t)) ? null : e.stateNode
            }, t.flushSync = function (e, t) {
                var n = Oa;
                if (0 != (48 & n)) return e(t);
                Oa |= 1;
                try {
                    if (e) return Vo(99, e.bind(null, t))
                } finally {
                    Oa = n, Jo()
                }
            }, t.hydrate = function (e, t, n) {
                if (!Zu(t)) throw Error(s(200));
                return ec(null, e, t, !0, n)
            }, t.render = function (e, t, n) {
                if (!Zu(t)) throw Error(s(200));
                return ec(null, e, t, !1, n)
            }, t.unmountComponentAtNode = function (e) {
                if (!Zu(e)) throw Error(s(40));
                return !!e._reactRootContainer && (Su((function () {
                    ec(null, null, e, !1, (function () {
                        e._reactRootContainer = null, e[Xr] = null
                    }))
                })), !0)
            }, t.unstable_batchedUpdates = fu, t.unstable_createPortal = function (e, t) {
                return tc(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
            }, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
                if (!Zu(n)) throw Error(s(200));
                if (null == e || void 0 === e._reactInternals) throw Error(s(38));
                return ec(e, t, n, !1, r)
            }, t.version = "17.0.2"
        }, 3935: (e, t, n) => {
            "use strict";
            !function e() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (e) {
                    console.error(e)
                }
            }(), e.exports = n(4448)
        }, 2408: (e, t, n) => {
            "use strict";
            var r = n(7418), o = 60103, i = 60106;
            t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
            var s = 60109, a = 60110, u = 60112;
            t.Suspense = 60113;
            var c = 60115, l = 60116;
            if ("function" == typeof Symbol && Symbol.for) {
                var E = Symbol.for;
                o = E("react.element"), i = E("react.portal"), t.Fragment = E("react.fragment"), t.StrictMode = E("react.strict_mode"), t.Profiler = E("react.profiler"), s = E("react.provider"), a = E("react.context"), u = E("react.forward_ref"), t.Suspense = E("react.suspense"), c = E("react.memo"), l = E("react.lazy")
            }
            var p = "function" == typeof Symbol && Symbol.iterator;

            function d(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            var f = {
                isMounted: function () {
                    return !1
                }, enqueueForceUpdate: function () {
                }, enqueueReplaceState: function () {
                }, enqueueSetState: function () {
                }
            }, S = {};

            function h(e, t, n) {
                this.props = e, this.context = t, this.refs = S, this.updater = n || f
            }

            function g() {
            }

            function C(e, t, n) {
                this.props = e, this.context = t, this.refs = S, this.updater = n || f
            }

            h.prototype.isReactComponent = {}, h.prototype.setState = function (e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error(d(85));
                this.updater.enqueueSetState(this, e, t, "setState")
            }, h.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, g.prototype = h.prototype;
            var T = C.prototype = new g;
            T.constructor = C, r(T, h.prototype), T.isPureReactComponent = !0;
            var _ = {current: null}, A = Object.prototype.hasOwnProperty,
                I = {key: !0, ref: !0, __self: !0, __source: !0};

            function R(e, t, n) {
                var r, i = {}, s = null, a = null;
                if (null != t) for (r in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (s = "" + t.key), t) A.call(t, r) && !I.hasOwnProperty(r) && (i[r] = t[r]);
                var u = arguments.length - 2;
                if (1 === u) i.children = n; else if (1 < u) {
                    for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2];
                    i.children = c
                }
                if (e && e.defaultProps) for (r in u = e.defaultProps) void 0 === i[r] && (i[r] = u[r]);
                return {$$typeof: o, type: e, key: s, ref: a, props: i, _owner: _.current}
            }

            function y(e) {
                return "object" == typeof e && null !== e && e.$$typeof === o
            }

            var m = /\/+/g;

            function O(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function (e) {
                    var t = {"=": "=0", ":": "=2"};
                    return "$" + e.replace(/[=:]/g, (function (e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function v(e, t, n, r, s) {
                var a = typeof e;
                "undefined" !== a && "boolean" !== a || (e = null);
                var u = !1;
                if (null === e) u = !0; else switch (a) {
                    case"string":
                    case"number":
                        u = !0;
                        break;
                    case"object":
                        switch (e.$$typeof) {
                            case o:
                            case i:
                                u = !0
                        }
                }
                if (u) return s = s(u = e), e = "" === r ? "." + O(u, 0) : r, Array.isArray(s) ? (n = "", null != e && (n = e.replace(m, "$&/") + "/"), v(s, t, n, "", (function (e) {
                    return e
                }))) : null != s && (y(s) && (s = function (e, t) {
                    return {$$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
                }(s, n + (!s.key || u && u.key === s.key ? "" : ("" + s.key).replace(m, "$&/") + "/") + e)), t.push(s)), 1;
                if (u = 0, r = "" === r ? "." : r + ":", Array.isArray(e)) for (var c = 0; c < e.length; c++) {
                    var l = r + O(a = e[c], c);
                    u += v(a, t, n, l, s)
                } else if ("function" == typeof (l = function (e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null
                }(e))) for (e = l.call(e), c = 0; !(a = e.next()).done;) u += v(a = a.value, t, n, l = r + O(a, c++), s); else if ("object" === a) throw t = "" + e, Error(d(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
                return u
            }

            function N(e, t, n) {
                if (null == e) return e;
                var r = [], o = 0;
                return v(e, r, "", "", (function (e) {
                    return t.call(n, e, o++)
                })), r
            }

            function L(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    t = t(), e._status = 0, e._result = t, t.then((function (t) {
                        0 === e._status && (t = t.default, e._status = 1, e._result = t)
                    }), (function (t) {
                        0 === e._status && (e._status = 2, e._result = t)
                    }))
                }
                if (1 === e._status) return e._result;
                throw e._result
            }

            var P = {current: null};

            function M() {
                var e = P.current;
                if (null === e) throw Error(d(321));
                return e
            }

            var w = {
                ReactCurrentDispatcher: P,
                ReactCurrentBatchConfig: {transition: 0},
                ReactCurrentOwner: _,
                IsSomeRendererActing: {current: !1},
                assign: r
            };
            t.Children = {
                map: N, forEach: function (e, t, n) {
                    N(e, (function () {
                        t.apply(this, arguments)
                    }), n)
                }, count: function (e) {
                    var t = 0;
                    return N(e, (function () {
                        t++
                    })), t
                }, toArray: function (e) {
                    return N(e, (function (e) {
                        return e
                    })) || []
                }, only: function (e) {
                    if (!y(e)) throw Error(d(143));
                    return e
                }
            }, t.Component = h, t.PureComponent = C, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w, t.cloneElement = function (e, t, n) {
                if (null == e) throw Error(d(267, e));
                var i = r({}, e.props), s = e.key, a = e.ref, u = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (a = t.ref, u = _.current), void 0 !== t.key && (s = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                    for (l in t) A.call(t, l) && !I.hasOwnProperty(l) && (i[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l])
                }
                var l = arguments.length - 2;
                if (1 === l) i.children = n; else if (1 < l) {
                    c = Array(l);
                    for (var E = 0; E < l; E++) c[E] = arguments[E + 2];
                    i.children = c
                }
                return {$$typeof: o, type: e.type, key: s, ref: a, props: i, _owner: u}
            }, t.createContext = function (e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: a,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {$$typeof: s, _context: e}, e.Consumer = e
            }, t.createElement = R, t.createFactory = function (e) {
                var t = R.bind(null, e);
                return t.type = e, t
            }, t.createRef = function () {
                return {current: null}
            }, t.forwardRef = function (e) {
                return {$$typeof: u, render: e}
            }, t.isValidElement = y, t.lazy = function (e) {
                return {$$typeof: l, _payload: {_status: -1, _result: e}, _init: L}
            }, t.memo = function (e, t) {
                return {$$typeof: c, type: e, compare: void 0 === t ? null : t}
            }, t.useCallback = function (e, t) {
                return M().useCallback(e, t)
            }, t.useContext = function (e, t) {
                return M().useContext(e, t)
            }, t.useDebugValue = function () {
            }, t.useEffect = function (e, t) {
                return M().useEffect(e, t)
            }, t.useImperativeHandle = function (e, t, n) {
                return M().useImperativeHandle(e, t, n)
            }, t.useLayoutEffect = function (e, t) {
                return M().useLayoutEffect(e, t)
            }, t.useMemo = function (e, t) {
                return M().useMemo(e, t)
            }, t.useReducer = function (e, t, n) {
                return M().useReducer(e, t, n)
            }, t.useRef = function (e) {
                return M().useRef(e)
            }, t.useState = function (e) {
                return M().useState(e)
            }, t.version = "17.0.2"
        }, 7294: (e, t, n) => {
            "use strict";
            e.exports = n(2408)
        }, 53: (e, t) => {
            "use strict";
            var n, r, o, i;
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var s = performance;
                t.unstable_now = function () {
                    return s.now()
                }
            } else {
                var a = Date, u = a.now();
                t.unstable_now = function () {
                    return a.now() - u
                }
            }
            if ("undefined" == typeof window || "function" != typeof MessageChannel) {
                var c = null, l = null, E = function () {
                    if (null !== c) try {
                        var e = t.unstable_now();
                        c(!0, e), c = null
                    } catch (e) {
                        throw setTimeout(E, 0), e
                    }
                };
                n = function (e) {
                    null !== c ? setTimeout(n, 0, e) : (c = e, setTimeout(E, 0))
                }, r = function (e, t) {
                    l = setTimeout(e, t)
                }, o = function () {
                    clearTimeout(l)
                }, t.unstable_shouldYield = function () {
                    return !1
                }, i = t.unstable_forceFrameRate = function () {
                }
            } else {
                var p = window.setTimeout, d = window.clearTimeout;
                if ("undefined" != typeof console) {
                    var f = window.cancelAnimationFrame;
                    "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" != typeof f && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                }
                var S = !1, h = null, g = -1, C = 5, T = 0;
                t.unstable_shouldYield = function () {
                    return t.unstable_now() >= T
                }, i = function () {
                }, t.unstable_forceFrameRate = function (e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < e ? Math.floor(1e3 / e) : 5
                };
                var _ = new MessageChannel, A = _.port2;
                _.port1.onmessage = function () {
                    if (null !== h) {
                        var e = t.unstable_now();
                        T = e + C;
                        try {
                            h(!0, e) ? A.postMessage(null) : (S = !1, h = null)
                        } catch (e) {
                            throw A.postMessage(null), e
                        }
                    } else S = !1
                }, n = function (e) {
                    h = e, S || (S = !0, A.postMessage(null))
                }, r = function (e, n) {
                    g = p((function () {
                        e(t.unstable_now())
                    }), n)
                }, o = function () {
                    d(g), g = -1
                }
            }

            function I(e, t) {
                var n = e.length;
                e.push(t);
                e:for (; ;) {
                    var r = n - 1 >>> 1, o = e[r];
                    if (!(void 0 !== o && 0 < m(o, t))) break e;
                    e[r] = t, e[n] = o, n = r
                }
            }

            function R(e) {
                return void 0 === (e = e[0]) ? null : e
            }

            function y(e) {
                var t = e[0];
                if (void 0 !== t) {
                    var n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e:for (var r = 0, o = e.length; r < o;) {
                            var i = 2 * (r + 1) - 1, s = e[i], a = i + 1, u = e[a];
                            if (void 0 !== s && 0 > m(s, n)) void 0 !== u && 0 > m(u, s) ? (e[r] = u, e[a] = n, r = a) : (e[r] = s, e[i] = n, r = i); else {
                                if (!(void 0 !== u && 0 > m(u, n))) break e;
                                e[r] = u, e[a] = n, r = a
                            }
                        }
                    }
                    return t
                }
                return null
            }

            function m(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }

            var O = [], v = [], N = 1, L = null, P = 3, M = !1, w = !1, D = !1;

            function U(e) {
                for (var t = R(v); null !== t;) {
                    if (null === t.callback) y(v); else {
                        if (!(t.startTime <= e)) break;
                        y(v), t.sortIndex = t.expirationTime, I(O, t)
                    }
                    t = R(v)
                }
            }

            function b(e) {
                if (D = !1, U(e), !w) if (null !== R(O)) w = !0, n(Y); else {
                    var t = R(v);
                    null !== t && r(b, t.startTime - e)
                }
            }

            function Y(e, n) {
                w = !1, D && (D = !1, o()), M = !0;
                var i = P;
                try {
                    for (U(n), L = R(O); null !== L && (!(L.expirationTime > n) || e && !t.unstable_shouldYield());) {
                        var s = L.callback;
                        if ("function" == typeof s) {
                            L.callback = null, P = L.priorityLevel;
                            var a = s(L.expirationTime <= n);
                            n = t.unstable_now(), "function" == typeof a ? L.callback = a : L === R(O) && y(O), U(n)
                        } else y(O);
                        L = R(O)
                    }
                    if (null !== L) var u = !0; else {
                        var c = R(v);
                        null !== c && r(b, c.startTime - n), u = !1
                    }
                    return u
                } finally {
                    L = null, P = i, M = !1
                }
            }

            var G = i;
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
                e.callback = null
            }, t.unstable_continueExecution = function () {
                w || M || (w = !0, n(Y))
            }, t.unstable_getCurrentPriorityLevel = function () {
                return P
            }, t.unstable_getFirstCallbackNode = function () {
                return R(O)
            }, t.unstable_next = function (e) {
                switch (P) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = P
                }
                var n = P;
                P = t;
                try {
                    return e()
                } finally {
                    P = n
                }
            }, t.unstable_pauseExecution = function () {
            }, t.unstable_requestPaint = G, t.unstable_runWithPriority = function (e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = P;
                P = e;
                try {
                    return t()
                } finally {
                    P = n
                }
            }, t.unstable_scheduleCallback = function (e, i, s) {
                var a = t.unstable_now();
                switch (s = "object" == typeof s && null !== s && "number" == typeof (s = s.delay) && 0 < s ? a + s : a, e) {
                    case 1:
                        var u = -1;
                        break;
                    case 2:
                        u = 250;
                        break;
                    case 5:
                        u = 1073741823;
                        break;
                    case 4:
                        u = 1e4;
                        break;
                    default:
                        u = 5e3
                }
                return e = {
                    id: N++,
                    callback: i,
                    priorityLevel: e,
                    startTime: s,
                    expirationTime: u = s + u,
                    sortIndex: -1
                }, s > a ? (e.sortIndex = s, I(v, e), null === R(O) && e === R(v) && (D ? o() : D = !0, r(b, s - a))) : (e.sortIndex = u, I(O, e), w || M || (w = !0, n(Y))), e
            }, t.unstable_wrapCallback = function (e) {
                var t = P;
                return function () {
                    var n = P;
                    P = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        P = n
                    }
                }
            }
        }, 3840: (e, t, n) => {
            "use strict";
            e.exports = n(53)
        }
    }, i = {};

    function s(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {id: e, exports: {}};
        return o[e].call(t.exports, t, t.exports, s), t.exports
    }

    return s.m = o, s.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return s.d(t, {a: t}), t
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function (n, r) {
        if (1 & r && (n = this(n)), 8 & r) return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule) return n;
            if (16 & r && "function" == typeof n.then) return n
        }
        var o = Object.create(null);
        s.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var a = 2 & r && n; "object" == typeof a && !~e.indexOf(a); a = t(a)) Object.getOwnPropertyNames(a).forEach((e => i[e] = () => n[e]));
        return i.default = () => n, s.d(o, i), o
    }, s.d = (e, t) => {
        for (var n in t) s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
    }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((t, n) => (s.f[n](e, t), t)), [])), s.u = e => e + ".chunk." + {
        1: "11a5c4417f0b558f65a6",
        2: "de9c330db6c82eeab35a",
        3: "45fd8f5d9b334849d12a",
        4: "34807c077b1d36015bc2",
        5: "2b53b3dc6ff4a06f8ba0",
        6: "c608db4114f5cad8cc0f",
        7: "6664ae2ba77211b2a427",
        8: "0b9c41e225c1af32938d",
        9: "29bbb2fb88370fb314ac",
        10: "1cc8d672498d0f6aa2d2"
    }[e] + ".js", s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, r = "CometChatWidget:", s.l = (e, t, o, i) => {
        if (n[e]) n[e].push(t); else {
            var a, u;
            if (void 0 !== o) for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                var E = c[l];
                if (E.getAttribute("src") == e || E.getAttribute("data-webpack") == r + o) {
                    a = E;
                    break
                }
            }
            a || (u = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, s.nc && a.setAttribute("nonce", s.nc), a.setAttribute("data-webpack", r + o), a.src = e), n[e] = [t];
            var p = (t, r) => {
                a.onerror = a.onload = null, clearTimeout(d);
                var o = n[e];
                if (delete n[e], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(r))), t) return t(r)
            }, d = setTimeout(p.bind(null, void 0, {type: "timeout", target: a}), 12e4);
            a.onerror = p.bind(null, a.onerror), a.onload = p.bind(null, a.onload), u && document.head.appendChild(a)
        }
    }, s.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, s.p = "https://widget-js.cometchat.io/v3/", (() => {
        var e = {0: 0};
        s.f.j = (t, n) => {
            var r = s.o(e, t) ? e[t] : void 0;
            if (0 !== r) if (r) n.push(r[2]); else {
                var o = new Promise(((n, o) => {
                    r = e[t] = [n, o]
                }));
                n.push(r[2] = o);
                var i = s.p + s.u(t), a = new Error;
                s.l(i, (n => {
                    if (s.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                        var o = n && ("load" === n.type ? "missing" : n.type), i = n && n.target && n.target.src;
                        a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", a.name = "ChunkLoadError", a.type = o, a.request = i, r[1](a)
                    }
                }), "chunk-" + t, t)
            }
        };
        var t = (t, n) => {
            for (var r, o, [i, a, u] = n, c = 0, l = []; c < i.length; c++) o = i[c], s.o(e, o) && e[o] && l.push(e[o][0]), e[o] = 0;
            for (r in a) s.o(a, r) && (s.m[r] = a[r]);
            for (u && u(s), t && t(n); l.length;) l.shift()()
        }, n = self.webpackChunkCometChatWidget = self.webpackChunkCometChatWidget || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })(), s(7226)
})().default;
//# sourceMappingURL=cometchatwidget.js.map