var e2eTests;
(function (e2eTests) {
    var GAME_ID = "6000581957124096-0";
    // All tests use GAME_ID which is text-tictactoe (owned by Yoav Zibin).
    // I'm using a test game so auto-match won't interfere with real players.
    // Moreover, the test game is configured with facebook appId that is for domain http://localhost:9000/
    // So it's possible to test FB login. You can use my FB test account: email='yz44@nyu.edu', pass='testfbaccount'.
    // test-tictactoe supports English&Hebrew.
    // to-do: make it support all languages supported by the platform.
    var Logging;
    (function (Logging) {
        function getFunctionName(myFunction) {
            if (typeof myFunction !== 'function')
                throw new Error("You can ONLY pass a function to getFunctionName");
            return /^function\s+([\w\$]+)\s*\(/.exec(myFunction.toString())[1];
        }
        function addLogToFunction(moduleName) {
            return function (myFunction) {
                willDoLog("Calling " + moduleName + "." + getFunctionName(myFunction));
            };
        }
        function addPrecallToFunction(precall, myFunction) {
            return function () {
                precall(myFunction);
                return myFunction.apply(null, arguments);
            };
        }
        function addPrecall(precall, object) {
            for (var key in object) {
                var val = object[key];
                // I only want to log mutating methods (to avoid clutter).
                if (key.indexOf('expect') === 0)
                    continue;
                if (key.indexOf('is') === 0)
                    continue;
                if (key.indexOf('get') === 0)
                    continue;
                if (typeof val !== 'function')
                    throw new Error("You should ONLY export functions");
                object[key] = addPrecallToFunction(precall, val);
            }
        }
        function addLoggin(moduleName, object) {
            addPrecall(addLogToFunction(moduleName), object);
        }
        Logging.addLoggin = addLoggin;
    })(Logging || (Logging = {}));
    var gameinvitePage;
    (function (gameinvitePage) {
        function getInviteText() {
            return id('invite_text').getText();
        }
        gameinvitePage.getInviteText = getInviteText;
        function getCurrentLanguageCode() {
            return getValueAttribute(model('currentLanguage'));
        }
        gameinvitePage.getCurrentLanguageCode = getCurrentLanguageCode;
        function clickOnLanguageOption(languageName) {
            click(element(by.cssContainingText('option', languageName)));
        }
        gameinvitePage.clickOnLanguageOption = clickOnLanguageOption;
    })(gameinvitePage || (gameinvitePage = {}));
    Logging.addLoggin("gameinvitePage", gameinvitePage);
    var mainPage;
    (function (mainPage) {
        function expectVisible() {
            expectDisplayed(getOpenNewMatchModal());
        }
        mainPage.expectVisible = expectVisible;
        function getGameName() {
            return id('game_name').getText();
        }
        mainPage.getGameName = getGameName;
        function getMyAvatarImg() {
            return id('my_avatar_img');
        }
        mainPage.getMyAvatarImg = getMyAvatarImg;
        function openMyInfoModal() {
            click(getMyAvatarImg());
            return myInfoModal;
        }
        mainPage.openMyInfoModal = openMyInfoModal;
        function getOpenNewMatchModal() {
            return id('open_new_match_modal');
        }
        mainPage.getOpenNewMatchModal = getOpenNewMatchModal;
        function openNewMatchModal() {
            click(getOpenNewMatchModal());
            return newMatchModal;
        }
        mainPage.openNewMatchModal = openNewMatchModal;
        function expectNoMatches() {
            expectMatchCounts({ yourTurn: 0, opponentTurn: 0, ended: 0 });
        }
        mainPage.expectNoMatches = expectNoMatches;
        function expectMatchCounts(counts) {
            expectToBe(allElements(by.repeater('main.yourTurnMatches()')).count(), counts.yourTurn);
            expectToBe(allElements(by.repeater('main.opponentTurnMatches()')).count(), counts.opponentTurn);
            expectToBe(allElements(by.repeater('main.endedMatches()')).count(), counts.ended);
        }
        mainPage.expectMatchCounts = expectMatchCounts;
        function clickMatchIndex(index) {
            click(allElementsByNgClick('match.load()').get(index));
        }
        mainPage.clickMatchIndex = clickMatchIndex;
    })(mainPage || (mainPage = {}));
    Logging.addLoggin("mainPage", mainPage);
    var playPage;
    (function (playPage) {
        function expectVisible() {
            expectDisplayed(getToggleTopBar());
        }
        playPage.expectVisible = expectVisible;
        function getMatchStatusText() {
            return id('match_status_text').getText();
        }
        playPage.getMatchStatusText = getMatchStatusText;
        function getPlayerImg(playerIndex) {
            return element(by.repeater('main.currentMatch().getPlayers').row(playerIndex));
        }
        playPage.getPlayerImg = getPlayerImg;
        function openInfoModalForPlayerIndex(playerIndex) {
            click(getPlayerImg(playerIndex));
            return playerInfoModal;
        }
        playPage.openInfoModalForPlayerIndex = openInfoModalForPlayerIndex;
        function getOpenExtraMatchOptions() {
            return id('open_extra_match_options_modal');
        }
        playPage.getOpenExtraMatchOptions = getOpenExtraMatchOptions;
        function openExtraMatchOptions() {
            click(getOpenExtraMatchOptions());
            return extraMatchOptionsModal;
        }
        playPage.openExtraMatchOptions = openExtraMatchOptions;
        function getToggleTopBar() {
            return id('toggle_top_bar');
        }
        playPage.getToggleTopBar = getToggleTopBar;
        function toggleTopBar() {
            click(getToggleTopBar());
        }
        playPage.toggleTopBar = toggleTopBar;
    })(playPage || (playPage = {}));
    Logging.addLoggin("playPage", playPage);
    var extraMatchOptionsModal;
    (function (extraMatchOptionsModal) {
        function expectVisible() {
            expectDisplayed(getClose());
        }
        extraMatchOptionsModal.expectVisible = expectVisible;
        function getGotoMain() {
            return id('extra_match_options_goto_main');
        }
        extraMatchOptionsModal.getGotoMain = getGotoMain;
        function gotoMain() {
            click(getGotoMain());
            waitForElementToDisappear(getClose());
        }
        extraMatchOptionsModal.gotoMain = gotoMain;
        function getOpenNewMatchModal() {
            return id('extra_match_options_open_new_match_modal');
        }
        extraMatchOptionsModal.getOpenNewMatchModal = getOpenNewMatchModal;
        function openNewMatchModal() {
            click(getOpenNewMatchModal());
            return newMatchModal;
        }
        extraMatchOptionsModal.openNewMatchModal = openNewMatchModal;
        function getSharePrintscreen() {
            return id('share_invite_link_with_printscreen');
        }
        extraMatchOptionsModal.getSharePrintscreen = getSharePrintscreen;
        function sharePrintscreen() {
            click(getSharePrintscreen());
        }
        extraMatchOptionsModal.sharePrintscreen = sharePrintscreen;
        function getDismissMatch() {
            return id('dismiss_match');
        }
        extraMatchOptionsModal.getDismissMatch = getDismissMatch;
        function dismissMatch() {
            click(getDismissMatch());
            waitForElementToDisappear(getClose());
        }
        extraMatchOptionsModal.dismissMatch = dismissMatch;
        function getLoadNext() {
            return id('load_next');
        }
        extraMatchOptionsModal.getLoadNext = getLoadNext;
        function loadNext() {
            click(getLoadNext());
            waitForElementToDisappear(getClose());
        }
        extraMatchOptionsModal.loadNext = loadNext;
        function getClose() {
            return id('close_extra_match_options_modal');
        }
        extraMatchOptionsModal.getClose = getClose;
        function close() {
            click(getClose());
            waitForElementToDisappear(getClose());
        }
        extraMatchOptionsModal.close = close;
    })(extraMatchOptionsModal || (extraMatchOptionsModal = {}));
    Logging.addLoggin("extraMatchOptionsModal", extraMatchOptionsModal);
    var gameOverModal;
    (function (gameOverModal) {
        function expectVisible() {
            expectDisplayed(getClose());
        }
        gameOverModal.expectVisible = expectVisible;
        function getMatchOverTitle() {
            return id('game_over_match_title').getText();
        }
        gameOverModal.getMatchOverTitle = getMatchOverTitle;
        function getMatchOverStatus() {
            return id('game_over_match_status').getText();
        }
        gameOverModal.getMatchOverStatus = getMatchOverStatus;
        function getShareInviteLinkAfterVictory() {
            return id('share_invite_link_after_victory');
        }
        gameOverModal.getShareInviteLinkAfterVictory = getShareInviteLinkAfterVictory;
        function shareInviteLinkAfterVictory() {
            click(getShareInviteLinkAfterVictory());
        }
        gameOverModal.shareInviteLinkAfterVictory = shareInviteLinkAfterVictory;
        function getDismissAndRematch() {
            return id('game_over_dismiss_and_rematch');
        }
        gameOverModal.getDismissAndRematch = getDismissAndRematch;
        function dismissAndRematch() {
            click(getDismissAndRematch());
            waitForElementToDisappear(getClose());
        }
        gameOverModal.dismissAndRematch = dismissAndRematch;
        function getClose() {
            return id('close_game_over_modal');
        }
        gameOverModal.getClose = getClose;
        function close() {
            click(getClose());
            waitForElementToDisappear(getClose());
        }
        gameOverModal.close = close;
    })(gameOverModal || (gameOverModal = {}));
    Logging.addLoggin("gameOverModal", gameOverModal);
    var friendsInvitePage;
    (function (friendsInvitePage) {
        function expectVisible() {
            expectDisplayed(getGotoMain());
        }
        friendsInvitePage.expectVisible = expectVisible;
        function getGotoMain() {
            return id('invite_friends_goto_main');
        }
        friendsInvitePage.getGotoMain = getGotoMain;
        function gotoMain() {
            click(getGotoMain());
            waitForElementToDisappear(getGotoMain());
        }
        friendsInvitePage.gotoMain = gotoMain;
        function getStartNameFilter() {
            return id('start_name_filter');
        }
        friendsInvitePage.getStartNameFilter = getStartNameFilter;
        function startNameFilter() {
            click(getStartNameFilter());
        }
        friendsInvitePage.startNameFilter = startNameFilter;
        function getCancelNameFilter() {
            return id('cancel_name_filter');
        }
        friendsInvitePage.getCancelNameFilter = getCancelNameFilter;
        function cancelNameFilter() {
            click(getCancelNameFilter());
        }
        friendsInvitePage.cancelNameFilter = cancelNameFilter;
        function getNameFilterModel() {
            return model('facebookFriendsFilter');
        }
        function getNameFilter() {
            return getValueAttribute(getNameFilterModel());
        }
        friendsInvitePage.getNameFilter = getNameFilter;
        function setNameFilter(newUserName) {
            replaceKeys(getNameFilterModel(), newUserName);
        }
        friendsInvitePage.setNameFilter = setNameFilter;
        function expectFriendsCounts(count) {
            expectToBe(allElements(by.repeater('main.fb().friends()')).count(), count);
        }
        friendsInvitePage.expectFriendsCounts = expectFriendsCounts;
        function getFriendName(friendIndex) {
            return allElements(by.css('.friends-list .name')).get(friendIndex);
        }
        friendsInvitePage.getFriendName = getFriendName;
        function inviteFriend(friendIndex) {
            return allElements(by.css('.friends-list .invite-button')).get(friendIndex);
        }
        friendsInvitePage.inviteFriend = inviteFriend;
        function getFbLogin() {
            return id('invite_friends_fb_login');
        }
        friendsInvitePage.getFbLogin = getFbLogin;
        function fbLogin() {
            click(getFbLogin());
        }
        friendsInvitePage.fbLogin = fbLogin;
        function getNoFriendsMessage() {
            return id('no_friends_msg').getText();
        }
        friendsInvitePage.getNoFriendsMessage = getNoFriendsMessage;
    })(friendsInvitePage || (friendsInvitePage = {}));
    Logging.addLoggin("friendsInvitePage", friendsInvitePage);
    var notifications;
    (function (notifications) {
        function clickNotificationWithIndex(notificationIndex) {
            click(allElementsByNgClick("notification.onClick()").get(notificationIndex));
        }
        notifications.clickNotificationWithIndex = clickNotificationWithIndex;
        function closeNotificationWithIndex(notificationIndex) {
            click(allElementsByNgClick('notification.onClose()').get(notificationIndex));
        }
        notifications.closeNotificationWithIndex = closeNotificationWithIndex;
        function getNotificationsCount() {
            return allElements(by.repeater('main.notifications()')).count();
        }
        notifications.getNotificationsCount = getNotificationsCount;
        function expectNoNotifications() {
            expectToBe(notifications.getNotificationsCount(), 0);
        }
        notifications.expectNoNotifications = expectNoNotifications;
        function expectMaybeGameinviteNotification() {
            // There might be a gameinvite notification from some failed previous tests,
            // if so, just close it.
            getNotificationsCount().then(runInSameBrowser(function (count) {
                expect(count == 0 || count == 1).toBeTruthy();
                if (count == 1) {
                    expectGameInvite();
                    closeNotificationWithIndex(0);
                }
            }));
        }
        notifications.expectMaybeGameinviteNotification = expectMaybeGameinviteNotification;
        function getTitle(notificationIndex) {
            return allElementsByNgIf('notification.title()').get(notificationIndex).getText();
        }
        notifications.getTitle = getTitle;
        function getMessage(notificationIndex) {
            return allElementsByNgIf('notification.message()').get(notificationIndex).getText();
        }
        notifications.getMessage = getMessage;
        function expectMoveSent_CreateNewMatch() {
            // (Regular en l10n is: "Move sent, and no more moves to make in any game. Click to create new game.")
            expectOneNotificationWithMessageId("IN_APP_NOTIFICATION_MOVE_SENT_CREATE_NEW_MATCH");
        }
        notifications.expectMoveSent_CreateNewMatch = expectMoveSent_CreateNewMatch;
        function expectMoveSent_LoadNextMatch() {
            expectOneNotificationWithMessageId("IN_APP_NOTIFICATION_MOVE_SENT_LOAD_NEXT_MATCH");
        }
        notifications.expectMoveSent_LoadNextMatch = expectMoveSent_LoadNextMatch;
        function expectTooManyMatches_DismissEndedMatches() {
            expectOneNotificationWithMessageId("IN_APP_NOTIFICATION_TOO_MANY_MATCHES_DISMISS_ENDED_MATCHES");
        }
        notifications.expectTooManyMatches_DismissEndedMatches = expectTooManyMatches_DismissEndedMatches;
        function expectYouWereBlockedInNotificationIndex(notificationIndex) {
            waitForElement(allElementsByNgClick('notification.onClose()').get(notificationIndex));
            l10n.expectTranslate(getMessage(notificationIndex), "IN_APP_NOTIFICATION_YOU_WERE_BLOCKED");
        }
        notifications.expectYouWereBlockedInNotificationIndex = expectYouWereBlockedInNotificationIndex;
        function expectOneNotificationWithMessageId(messageId) {
            expectOneNotification("", messageId);
        }
        notifications.expectOneNotificationWithMessageId = expectOneNotificationWithMessageId;
        function expectGameInvite() {
            expectOneNotificationWithTitleId("IN_APP_NOTIFICATION_GAME_INVITE_TITLE");
        }
        notifications.expectGameInvite = expectGameInvite;
        function expectOneNotificationWithTitleId(titleId) {
            expectOneNotification(titleId, "");
        }
        notifications.expectOneNotificationWithTitleId = expectOneNotificationWithTitleId;
        function expectOneNotification(titleId, messageId, interpolationParams) {
            waitForElement(allElementsByNgClick('notification.onClose()').get(0));
            expectToBe(getNotificationsCount(), 1);
            if (titleId) {
                l10n.expectTranslate(getTitle(0), titleId, interpolationParams);
            }
            if (messageId) {
                l10n.expectTranslate(getMessage(0), messageId, interpolationParams);
            }
        }
        notifications.expectOneNotification = expectOneNotification;
    })(notifications || (notifications = {}));
    Logging.addLoggin("notifications", notifications);
    var newMatchModal;
    (function (newMatchModal) {
        function expectVisible() {
            expectDisplayed(getClose());
        }
        newMatchModal.expectVisible = expectVisible;
        function waitTillClosed() {
            waitForElementToDisappear(getClose());
        }
        newMatchModal.waitTillClosed = waitTillClosed;
        function getStartRematch() {
            return id('start_rematch');
        }
        newMatchModal.getStartRematch = getStartRematch;
        function startRematch() {
            click(getStartRematch());
            waitTillClosed();
        }
        newMatchModal.startRematch = startRematch;
        function getStartAutoMatch() {
            return id('start_multiplayer_auto_match');
        }
        newMatchModal.getStartAutoMatch = getStartAutoMatch;
        function startAutoMatch() {
            click(getStartAutoMatch());
            waitTillClosed();
        }
        newMatchModal.startAutoMatch = startAutoMatch;
        function getGotoInviteFriends() {
            return id('goto_invite_friends');
        }
        newMatchModal.getGotoInviteFriends = getGotoInviteFriends;
        function gotoInviteFriends() {
            click(getGotoInviteFriends());
        }
        newMatchModal.gotoInviteFriends = gotoInviteFriends;
        function getShareInviteLink() {
            return id('share_invite_link_no_printscreen');
        }
        newMatchModal.getShareInviteLink = getShareInviteLink;
        function shareInviteLink() {
            click(getShareInviteLink());
        }
        newMatchModal.shareInviteLink = shareInviteLink;
        function getStartPractice() {
            return id('start_practice');
        }
        newMatchModal.getStartPractice = getStartPractice;
        function startPractice() {
            click(getStartPractice());
            waitTillClosed();
        }
        newMatchModal.startPractice = startPractice;
        function getStartPassAndPlay() {
            return id('start_pass_and_play');
        }
        newMatchModal.getStartPassAndPlay = getStartPassAndPlay;
        function startPassAndPlay() {
            click(getStartPassAndPlay());
            waitTillClosed();
        }
        newMatchModal.startPassAndPlay = startPassAndPlay;
        function getClose() {
            return id('close_new_match_modal');
        }
        newMatchModal.getClose = getClose;
        function close() {
            click(getClose());
            waitTillClosed();
        }
        newMatchModal.close = close;
    })(newMatchModal || (newMatchModal = {}));
    Logging.addLoggin("newMatchModal", newMatchModal);
    var playerInfoModal;
    (function (playerInfoModal) {
        function isPresent() {
            return getClose().isPresent();
        }
        playerInfoModal.isPresent = isPresent;
        function expectVisible() {
            expectDisplayed(getClose());
        }
        playerInfoModal.expectVisible = expectVisible;
        function getDisplayName() {
            return id('player_info_name').getText();
        }
        playerInfoModal.getDisplayName = getDisplayName;
        // to-do: add chat, invite to new match
        function getNewGame() {
            return id('player_info_invite_to_match');
        }
        playerInfoModal.getNewGame = getNewGame;
        function inviteToNewGame() {
            click(getNewGame());
        }
        playerInfoModal.inviteToNewGame = inviteToNewGame;
        function getPlayerBlocked() {
            return id('player_info_toggle_blocking');
        }
        playerInfoModal.getPlayerBlocked = getPlayerBlocked;
        function blockPlayer() {
            click(getPlayerBlocked());
        }
        playerInfoModal.blockPlayer = blockPlayer;
        function getClose() {
            return id('close_player_info');
        }
        playerInfoModal.getClose = getClose;
        function close() {
            click(getClose());
            waitForElementToDisappear(getClose());
        }
        playerInfoModal.close = close;
    })(playerInfoModal || (playerInfoModal = {}));
    Logging.addLoggin("playerInfoModal", playerInfoModal);
    var myInfoModal;
    (function (myInfoModal) {
        function expectVisible() {
            expectDisplayed(getSubmit());
        }
        myInfoModal.expectVisible = expectVisible;
        function getSubmit() {
            return id('my_info_submit');
        }
        myInfoModal.getSubmit = getSubmit;
        // Save changes done in my info modal
        function submit() {
            click(getSubmit());
            // Submitting still keeps the modal open until we verify that the username is unique,
            // and if it's not (and we have an e2e test for it), then it shows an error and keeps myInfoModal open.
            // So we can't do this: waitForElementToDisappear(getSubmit());
        }
        myInfoModal.submit = submit;
        function getCancel() {
            return id('my_info_cancel');
        }
        myInfoModal.getCancel = getCancel;
        // Cancel changes and close my info modal
        function cancel() {
            click(getCancel());
            waitForElementToDisappear(getCancel());
        }
        myInfoModal.cancel = cancel;
        function getTitle() {
            return id('my_info_title').getText();
        }
        myInfoModal.getTitle = getTitle;
        function getCurrentLanguageCode() {
            return getValueAttribute(model('currentLanguage'));
        }
        myInfoModal.getCurrentLanguageCode = getCurrentLanguageCode;
        function clickOnLanguageOption(languageName) {
            click(element(by.cssContainingText('option', languageName)));
        }
        myInfoModal.clickOnLanguageOption = clickOnLanguageOption;
        function getNewDisplayNameModel() {
            return model('newDisplayName');
        }
        myInfoModal.getNewDisplayNameModel = getNewDisplayNameModel;
        function setNewDisplayName(newDisplayName) {
            replaceKeys(getNewDisplayNameModel(), newDisplayName);
        }
        myInfoModal.setNewDisplayName = setNewDisplayName;
        function getNewDisplayName() {
            return getValueAttribute(getNewDisplayNameModel());
        }
        myInfoModal.getNewDisplayName = getNewDisplayName;
        function getNewUserNameModel() {
            return model('newUserName');
        }
        myInfoModal.getNewUserNameModel = getNewUserNameModel;
        function setNewUserName(newUserName) {
            replaceKeys(getNewUserNameModel(), newUserName);
        }
        myInfoModal.setNewUserName = setNewUserName;
        function getNewUserName() {
            return getValueAttribute(getNewUserNameModel());
        }
        myInfoModal.getNewUserName = getNewUserName;
        function getUserNameWasTaken() {
            return id("my_info_username_was_taken");
        }
        myInfoModal.getUserNameWasTaken = getUserNameWasTaken;
        function getFbLogin() {
            return id('my_info_fb_login');
        }
        myInfoModal.getFbLogin = getFbLogin;
        function fbLogin() {
            click(getFbLogin());
        }
        myInfoModal.fbLogin = fbLogin;
        function getOpenFeedbackModal() {
            return id('open_feedback_modal');
        }
        myInfoModal.getOpenFeedbackModal = getOpenFeedbackModal;
        function openFeedbackModal() {
            click(getOpenFeedbackModal());
            return feedbackModal;
        }
        myInfoModal.openFeedbackModal = openFeedbackModal;
    })(myInfoModal || (myInfoModal = {}));
    Logging.addLoggin("myInfoModal", myInfoModal);
    var feedbackModal;
    (function (feedbackModal) {
        function expectVisible() {
            expectDisplayed(getClose());
        }
        feedbackModal.expectVisible = expectVisible;
        function getFeedbackModel() {
            return model('feedbackText');
        }
        feedbackModal.getFeedbackModel = getFeedbackModel;
        function getFeedback() {
            return getValueAttribute(getFeedbackModel());
        }
        feedbackModal.getFeedback = getFeedback;
        function setFeedback(feedbackText) {
            getFeedbackModel().sendKeys(feedbackText);
        }
        feedbackModal.setFeedback = setFeedback;
        function getClose() {
            return id('close_feedback_modal');
        }
        feedbackModal.getClose = getClose;
        function close() {
            click(getClose());
            waitForElementToDisappear(getClose());
        }
        feedbackModal.close = close;
    })(feedbackModal || (feedbackModal = {}));
    Logging.addLoggin("feedbackModal", feedbackModal);
    var tictactoe;
    (function (tictactoe) {
        var isInGameIframe = false;
        function run(func) {
            currBrowser.driver.switchTo().frame('game_iframe');
            // Sometimes it takes for the game_iframe some time to load.
            waitForElement(element(by.id('e2e_test_div_0x0')));
            isInGameIframe = true;
            func();
            currBrowser.driver.switchTo().defaultContent(); // you are now outside any iframes
            isInGameIframe = false;
        }
        tictactoe.run = run;
        function expectPieceKindDisplayed(row, col, pieceKind, isDisplayed) {
            check(isInGameIframe);
            var elem = element(by.id('e2e_test_piece' + pieceKind + '_' + row + 'x' + col));
            // Careful when using animations and asserting isDisplayed:
            // Originally, my animation started from {opacity: 0;}
            // And then the image wasn't displayed.
            // I changed it to start from {opacity: 0.1;}
            if (isDisplayed) {
                expectDisplayed(elem);
            }
            else {
                expectNotPresent(elem);
            }
        }
        tictactoe.expectPieceKindDisplayed = expectPieceKindDisplayed;
        function expectPiece(row, col, expectedPieceKind) {
            check(isInGameIframe);
            expectPieceKindDisplayed(row, col, 'X', expectedPieceKind === "X");
            expectPieceKindDisplayed(row, col, 'O', expectedPieceKind === "O");
        }
        tictactoe.expectPiece = expectPiece;
        function expectBoard(board) {
            check(isInGameIframe);
            // I can't use gameLogic.ROWS/COLS (instead of 3) because gameLogic is not defined
            // in end-to-end tests.
            for (var row = 0; row < 3; row++) {
                for (var col = 0; col < 3; col++) {
                    expectPiece(row, col, board[row][col]);
                }
            }
        }
        tictactoe.expectBoard = expectBoard;
        function expectEmptyBoard() {
            check(isInGameIframe);
            expectBoard([['', '', ''],
                ['', '', ''],
                ['', '', '']]);
        }
        tictactoe.expectEmptyBoard = expectEmptyBoard;
        function clickDivAndExpectPiece(row, col, expectedPieceKind) {
            check(isInGameIframe);
            var elem = element(by.id('e2e_test_div_' + row + 'x' + col));
            click(elem);
            expectPiece(row, col, expectedPieceKind);
        }
        tictactoe.clickDivAndExpectPiece = clickDivAndExpectPiece;
    })(tictactoe || (tictactoe = {}));
    // Module to l10n platform strings based on the latest default translations.
    // This way I don't need to update the tests if I make small changes in the text.
    var l10n;
    (function (l10n) {
        function expectTranslate(actual, translationId, interpolationParams, languageCode) {
            var script = 'return gamingPlatform.$rootScope.main.l10n().translate(' + JSON.stringify(translationId) +
                (interpolationParams ? "," + JSON.stringify(interpolationParams) : "") +
                (languageCode ? "," + JSON.stringify(languageCode) : "") + ")";
            log("Executing script in " + getBrowserName(currBrowser) + ":\n" + script);
            currBrowser.executeScript(script).then(function (text) {
                log("L10n of " + translationId + " is " + text);
                expectToBe(actual, text);
            });
        }
        l10n.expectTranslate = expectTranslate;
    })(l10n || (l10n = {}));
    var lastTest;
    var JasmineOverrides;
    (function (JasmineOverrides) {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
        var jasmineAny = jasmine;
        var executeMock = jasmineAny.Spec.prototype.execute;
        var jasmineSpec = jasmineAny.Spec;
        jasmineSpec.prototype.execute = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            lastTest = this.result;
            executeMock.apply(this, args);
        };
        log('jasmine-version:' + jasmineAny.version ? jasmineAny.version : jasmine.getEnv().versionString());
        // Pause for expect failures
        var originalAddExpectationResult = jasmineSpec.prototype.addExpectationResult;
        jasmineSpec.prototype.addExpectationResult = function () {
            if (!arguments[0]) {
                // Sadly, getStacktrace() is not helpful since it points to jasmine's internals: jasmine-core/jasmine.js:894:25
                // But if there was an error, the stack trace is in arguments[1].error.stack.
                error("\n\nFailure in test:\n" +
                    arguments[1].message + "\n" +
                    (arguments[1].error ? " stacktrace=\n\n" + arguments[1].error.stack : '') +
                    "\n\n\n" +
                    " Failure arguments=" + JSON.stringify(arguments));
            }
            return originalAddExpectationResult.apply(this, arguments);
        };
        // Pause on exception
        protractor.promise.controlFlow().on('uncaughtException', function (e) {
            error('Unhandled error: ' + e);
        });
    })(JasmineOverrides || (JasmineOverrides = {}));
    // Common functions
    var currBrowser = browser;
    var secondBrowser = browser.forkNewDriverInstance();
    function getBrowserName(b) {
        return b === secondBrowser ? "browser2" : "browser1";
    }
    function setFirstBrowser() {
        currBrowser = browser;
    }
    function runInSecondBrowser(fn) {
        runInBrowser(secondBrowser, fn);
    }
    function runInBrowser(b, fn) {
        var oldBrowser = currBrowser;
        currBrowser = b;
        try {
            fn();
        }
        finally {
            currBrowser = oldBrowser;
        }
    }
    function runInSameBrowser(fn) {
        var b = currBrowser;
        return function (t) {
            runInBrowser(b, function () { fn(t); });
        };
    }
    function check(value) {
        if (!value)
            throw new Error("Check failed");
    }
    function regexEscape(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
    function getStacktrace() {
        return (new Error()).stack;
    }
    function element(locator) {
        return currBrowser.element(locator);
    }
    function allElements(locator) {
        var e = currBrowser.element;
        return e.all(locator);
    }
    function allElementsByNgClick(clickExpression) {
        return allElements(by.css('div[ng-click="' + clickExpression + '"]'));
    }
    function allElementsByNgIf(ifExpression) {
        return allElements(by.css('div[ng-if="' + ifExpression + '"]'));
    }
    function waitForElement(elem) {
        var elemName = getElementName(elem);
        willDoLog("waitForElement " + elemName);
        // Wait until it becomes displayed. It might not be displayed right now
        // because it takes some time to pass messages via postMessage between game and platform.
        currBrowser.driver.wait(function () { return elem.isDisplayed().then(function (isDisplayed) { return elem.isEnabled().then(function (isEnabled) { return isDisplayed && isEnabled; }); }); }, 10000).then(function () {
            // success
        }, function () {
            // failure
            error("Failed waitForElement: " + elemName + " args=" + JSON.stringify(arguments));
        });
        expectToBe(elem.isDisplayed(), true);
    }
    function waitForElementToDisappear(elem) {
        var elemName = getElementName(elem);
        willDoLog("waitForElementToDisappear " + elemName);
        // Wait until it becomes displayed. It might not be displayed right now
        // because it takes some time to pass messages via postMessage between game and platform.
        currBrowser.driver.wait(function () { return elem.isPresent().then(function (isPresent) { return !isPresent; }); }, 10000).then(function () {
            // success
        }, function () {
            // failure
            error("Failed waitForElementToDisappear: " + elemName + " args=" + JSON.stringify(arguments));
        });
        expectToBe(elem.isPresent(), false);
    }
    function getElementName(elem) {
        return getBrowserName(currBrowser) + "." + elem.locator();
    }
    var startedExecutionTime = new Date().getTime();
    function log(msg) {
        var now = new Date().getTime();
        console.log("After " + (now - startedExecutionTime) + " milliseconds: " + msg);
    }
    function error(msg) {
        log(msg);
        currBrowser.pause();
    }
    function willDoLog(msg) {
        msg += ' in ' + getBrowserName(currBrowser);
        log("Will do: " + msg);
        call(function () {
            log("Doing: " + msg);
        });
    }
    function call(fn) {
        currBrowser.call(fn);
    }
    function id(idWithoutTestPrefix) {
        if (idWithoutTestPrefix.indexOf("test_") === 0) {
            throw new Error("You called id('test_XXX'), but you should call without the 'test_' prefix!");
        }
        return element(by.id('test_' + idWithoutTestPrefix));
    }
    function model(idWithoutAppDotModelDot) {
        return element(by.model('main.model().' + idWithoutAppDotModelDot));
    }
    // For <input> elements: replaces the text inside the element with newStr.
    function replaceKeys(elem, newStr) {
        waitForElement(elem);
        elem.clear();
        elem.sendKeys(newStr);
    }
    function getValueAttribute(elem) {
        return getAttribute(elem, 'value');
    }
    function getAttribute(elem, attributeName) {
        waitForElement(elem);
        return elem.getAttribute(attributeName);
    }
    function click(elem) {
        waitForElement(elem);
        var msg = ' on ' + getElementName(elem);
        var stacktrace = getStacktrace();
        willDoLog("Click" + msg);
        elem.click().then(function () {
            // successfully clicked on element.
        }, function () {
            // Failed to click, sometimes because it takes some time to close an overlay model, e.g.,
            //Element is not clickable at point (983, 58). Other element would receive the click: <div class="overlayModal ng-scope" ng-click="modal.backdrop($event)" ng-if="modal.isShowing()" aria-hidden="true">...</div>
            error("Failed clicking" + msg + " stacktrace=" + stacktrace + " arguments=" + JSON.stringify(arguments));
        });
    }
    function expectToBe(p, val) {
        var stacktrace = getStacktrace();
        p.then(function (v) {
            // If an expectation is not met, we'll pause the browser so we can see what's happening.
            if (v !== val) {
                error("Had a failed expectation: expected '" + v + "' to be '" + val + "' stacktrace=" + stacktrace);
            }
        });
        expect(p).toBe(val);
    }
    function expectToContain(p, substr) {
        var stacktrace = getStacktrace();
        p.then(function (v) {
            // If an expectation is not met, we'll pause the browser so we can see what's happening.
            if (v.indexOf(substr) === -1) {
                error("Had a failed expectation: expected '" + v + "' to contain '" + substr + "' in stacktrace=" + stacktrace);
            }
        });
        expect(p).toContain(substr);
    }
    function expectDisplayed(element) {
        waitForElement(element);
        expectToBe(element.isDisplayed(), true);
    }
    function expectNotPresent(element) {
        expectToBe(element.isPresent(), false);
    }
    /* https://github.com/angular/protractor/blob/master/docs/toc.md */
    // In examples online you'll see "webdriver"; remember to replace it with "protractor".
    describe('App ', function () {
        var browser1NameStr = getUserNameForBrowser(1);
        var browser2NameStr = getUserNameForBrowser(2);
        function getUserNameForBrowser(browserNumber) {
            // Max length allowed in my platform is 30 chars
            // "testBrowser1 015542174922302365" is already 31 chars.
            var name = 'testBr' + browserNumber + ' ' + ('' + Math.random()).substr(2);
            check(name.match(/^testBr[0-9][ ][0-9]+$/).length == 1);
            check(name.length <= 30);
            return name;
        }
        function loadAppAndCloseMyInfoModalAndMaybeGameinviteNotification() {
            loadApp();
            // Before closing any notification (like gameinvite), we need to close my info modal
            myInfoModal.getCancel().isPresent().then(runInSameBrowser(function (isMyInfoModalDisplayed) {
                if (isMyInfoModalDisplayed)
                    myInfoModal.cancel();
            }));
            notifications.expectMaybeGameinviteNotification();
        }
        beforeEach(function () {
            log('\n\n\nRunning test: ' + lastTest.fullName);
            loadAppAndCloseMyInfoModalAndMaybeGameinviteNotification();
            checkNoErrorInLogs();
        });
        afterEach(function () {
            checkPostTestInvariant();
            checkNoErrorInLogs();
        });
        function checkNoErrorInLogs() {
            expectEmptyBrowserLogs(browser);
            expectEmptyBrowserLogs(secondBrowser);
        }
        function checkInvariantsInCurrBrowser(isPostTest) {
            expectEmptyBrowserLogs(currBrowser);
            var b = currBrowser;
            var project = getProject(b);
            if (project === 'app') {
                willDoLog("Start checkInvariantsInCurrBrowser for app");
                // All tests must go back to main page, and cleanup after themselves,
                // i.e., have no matches and no open notifications.
                mainPage.expectVisible();
                if (isPostTest)
                    mainPage.expectNoMatches(); // Ok to have matches before loadApp()
                notifications.expectNoNotifications();
                willDoLog("End checkInvariantsInCurrBrowser");
            }
        }
        function checkInvariantsInAllBrowsers(isPostTest) {
            checkInvariantsInCurrBrowser(isPostTest);
            runInSecondBrowser(function () {
                checkInvariantsInCurrBrowser(isPostTest);
            });
        }
        function checkPreLoadAppInvariantInCurrBrowser() {
            log("Checking pre-loadApp() invariants in " + getBrowserName(currBrowser) + ": that all browsers are back in main page, and that there are no notifications; it's ok to have matches.");
            checkInvariantsInCurrBrowser(false);
        }
        function checkPostTestInvariant() {
            log("Checking post-test invariants: that all browsers are back in main page, and that there are no notifications and no matches.");
            checkInvariantsInAllBrowsers(true);
        }
        setPosition(browser, 0, 0);
        setPosition(secondBrowser, 450, 0);
        setSize(browser);
        setSize(secondBrowser);
        function setPosition(b, x, y) {
            b.driver.manage().window().setPosition(x, y);
        }
        function setSize(b) {
            // We want to set iPhone4 size (320x480), because this is the smallest size I support.
            // However, chrome desktop browser (on Mac) can't have width smaller than 400 anyway
            // (see http://stackoverflow.com/questions/8681903/browser-doesnt-scale-below-400px)
            // Moreover, setSize includes also the browser's address bar and buttons, so it's not the real size.
            // The real width&height are set in protractor.conf:
            // 'chromeOptions': { "mobileEmulation": { "deviceName": "Apple iPhone 4" } }
            // So this size just needs to be bigger than 320x(480+address-bar+chrome-tabs)
            b.driver.manage().window().setSize(400, 600);
        }
        function expectEmptyBrowserLogs(b) {
            b.manage().logs().get('browser').then(function (browserLog) {
                // See if there are any errors (warnings are ok)
                var hasErrors = false;
                for (var _i = 0, browserLog_1 = browserLog; _i < browserLog_1.length; _i++) {
                    var log_1 = browserLog_1[_i];
                    var level = log_1.level.name;
                    if (level === 'INFO' || level === 'WARNING')
                        continue; // (warnings are ok)
                    hasErrors = true;
                }
                if (hasErrors) {
                    // This log produces too much clutter:
                    log('\n\n\nlog: ' + require('util').inspect(browserLog) + "\n\n\n");
                    // So it's better to pause, and look and console.
                    error(getBrowserName(b) + " has a warning/error in the logs. Opens the developer console in the browsers and look at the logs.");
                }
            });
        }
        var browserNameToProject = {};
        function getProject(b) {
            return browserNameToProject[getBrowserName(b)];
        }
        function getPage(url) {
            var browserName = getBrowserName(currBrowser);
            willDoLog("Loading " + url + " in " + browserName);
            if (url.substr(0, 1) !== '/') {
                throw new Error("Url must start with /, but url=" + url);
            }
            var withoutInitialSlash = url.substr(1);
            var project = withoutInitialSlash.substr(0, withoutInitialSlash.indexOf('/'));
            if (project !== 'app' && project !== 'gameinvite' && project !== 'gamedeveloper') {
                throw new Error("Url for an unknown project: project=" + project + " url=" + url);
            }
            var previousProject = browserNameToProject[browserName];
            if (previousProject) {
                checkPreLoadAppInvariantInCurrBrowser();
            }
            browserNameToProject[browserName] = project;
            currBrowser.get(url);
        }
        function startAutoMatch(retryNumber) {
            mainPage.expectNoMatches();
            if (retryNumber >= 5) {
                throw new Error("Tried already 5 times to create an auto-match with an unknown opponent");
            }
            mainPage.openNewMatchModal().startAutoMatch();
        }
        function makeMoveAndDismissMatch() {
            tictactoe.run(function () {
                tictactoe.clickDivAndExpectPiece(2, 2, 'O');
            });
            playPage.openExtraMatchOptions().dismissMatch();
        }
        // Creates one auto-match with an unknown opponent.
        // Auto-match is tricky because if some previous test failed then the server
        // may have a pending auto match (or if someone else is doing an e2e test concurrently).
        // So if it happens, I resign the match and wait (exponential backoff)
        function createAutoMatch(retryNumber) {
            log("\n\n createAutoMatch retryNumber=" + retryNumber);
            startAutoMatch(retryNumber);
            // If we have an auto-match with an unknown opponent, then the opponent is the second player.
            // Two options:
            // 1) I was matched with someone, and then the second player is me, so clicking on the img opens *my info*.
            // 2) I was matched with unknown opponent, and then the second player is unknown, so clicking on the img opens *player info*.
            playPage.openInfoModalForPlayerIndex(1).isPresent().then(function (isPresent) {
                if (!isPresent) {
                    // Option 1: so *my info* is opened.
                    log("\n\n No luck in createAutoMatch: I was hoping not to be matched, but first-browser was auto-matched. Making a move and dismissing match and retrying.\n\n");
                    myInfoModal.cancel();
                    // Make any move and resign (I make a move so these auto matches will be cleaned up)
                    makeMoveAndDismissMatch(); // will take me back to main menu
                    createAutoMatch(retryNumber + 1);
                }
                else {
                    // Option 2: *player info* is open.
                    // Close player info.
                    playerInfoModal.close();
                    // yippie! make a move
                    tictactoe.run(function () {
                        tictactoe.expectEmptyBoard();
                        tictactoe.clickDivAndExpectPiece(0, 0, "X");
                        tictactoe.clickDivAndExpectPiece(1, 1, ""); // You can only make one move (double checking it's not single player)
                    });
                    notifications.expectMoveSent_CreateNewMatch();
                    notifications.clickNotificationWithIndex(0);
                    newMatchModal.close();
                    playPage.openExtraMatchOptions().gotoMain();
                    continueAfterAutoMatch();
                }
            });
        }
        function continueAfterAutoMatch() {
            log("\n\n continueAfterAutoMatch");
            setFirstBrowser();
            // Verify we have exactly one auto-match with an unknown opponent.
            mainPage.expectMatchCounts({ yourTurn: 0, opponentTurn: 1, ended: 0 });
            // Do auto-match in the second browser, which should match up the two browsers,
            // unless the first browser message didn't get yet to AppEngine (or we conflicted with some other auto-match).
            createAutoMatchWithFirstBrowser(0);
        }
        function createAutoMatchWithFirstBrowser(retryNumber) {
            log("\n\n createAutoMatchWithFirstBrowser retryNumber=" + retryNumber);
            runInSecondBrowser(function () {
                loadApp();
                notifications.expectNoNotifications();
                startAutoMatch(retryNumber);
                // Should be:
                // First browser is the first player, and second browser is the second player.
                // So clicking on the first player should open player info modal (and not "my info modal"),
                // with the first player displayName.
                playPage.openInfoModalForPlayerIndex(0).isPresent().then(function (isPresent) {
                    runInSecondBrowser(function () {
                        if (!isPresent) {
                            log("\n\n No luck #1 in createAutoMatchWithFirstBrowser: I was hoping to be matched, but second-browser wasn't auto-matched with anyone. Just dismissing match and retrying.\n\n");
                            // It opened my player info, so I'm just dismissing the match and retrying.
                            myInfoModal.cancel();
                            playPage.openExtraMatchOptions().dismissMatch(); // will take me back to main menu
                            createAutoMatchWithFirstBrowser(retryNumber + 1);
                        }
                        else {
                            // There is a tiny chance second browser was auto-matched with someone else (not first browser)
                            playerInfoModal.getDisplayName().then(function (otherPlayerName) {
                                runInSecondBrowser(function () {
                                    playerInfoModal.close();
                                    if (otherPlayerName.indexOf(browser1NameStr) === -1) {
                                        log("\n\n No luck #2 in createAutoMatchWithFirstBrowser: I was hoping to be matched with first-browser, but second-browser was auto-matched with someone else. Making a move, dismissing match and retrying.\n\n");
                                        // Make any move and resign (I make a move so these auto matches will be cleaned up)
                                        makeMoveAndDismissMatch(); // will take me back to main menu
                                    }
                                    else {
                                        // yippie
                                        continueAfterAutoMatchWithFirstBrowser();
                                    }
                                });
                            });
                        }
                    });
                });
            });
        }
        function continueAfterAutoMatchWithFirstBrowser() {
            log("\n\n continueAfterAutoMatchWithFirstBrowser");
            setFirstBrowser();
            runInSecondBrowser(function () {
                // yippie! make a move
                tictactoe.run(function () {
                    tictactoe.expectBoard([['X', '', ''],
                        ['', '', ''],
                        ['', '', '']]);
                    tictactoe.clickDivAndExpectPiece(1, 1, "O");
                    tictactoe.clickDivAndExpectPiece(2, 2, ""); // You can only make one move (double checking it's not single player)
                });
                notifications.expectMoveSent_CreateNewMatch();
                playPage.openExtraMatchOptions().gotoMain();
                mainPage.expectMatchCounts({ yourTurn: 0, opponentTurn: 1, ended: 0 });
            });
            loadApp();
            notifications.expectOneNotification("PUSH_NOTIFICATION_YOUR_TURN_NOTIFICATION_TITLE", "PUSH_NOTIFICATION_YOUR_TURN_NOTIFICATION_BODY", { OPPONENT_NAME: browser2NameStr });
            notifications.closeNotificationWithIndex(0);
            mainPage.expectMatchCounts({ yourTurn: 1, opponentTurn: 0, ended: 0 });
            dismissOnlyMatch();
            runInSecondBrowser(function () {
                loadApp();
                notifications.expectOneNotification("PUSH_NOTIFICATION_OPPONENT_QUIT_NOTIFICATION_TITLE", "PUSH_NOTIFICATION_OPPONENT_QUIT_NOTIFICATION_BODY", { OPPONENT_NAME: browser1NameStr });
                notifications.closeNotificationWithIndex(0);
                mainPage.expectMatchCounts({ yourTurn: 0, opponentTurn: 0, ended: 1 });
                mainPage.clickMatchIndex(0);
                // Will show gameOverModal
                gameOverModal.expectVisible();
                gameOverModal.close();
                playPage.openExtraMatchOptions().dismissMatch();
                mainPage.expectNoMatches();
            });
        }
        function dismissOnlyMatch() {
            mainPage.clickMatchIndex(0);
            playPage.openExtraMatchOptions().dismissMatch(); // will go to main menu.
            mainPage.expectNoMatches();
        }
        function loadApp() {
            // ChannelApi keeps an HTTP connection open, which causes protractor to fail after 10 seconds with:
            // Error Timed out waiting for Protractor to synchronize with the page
            // So we turn off channel API (isProtractor=true does that).
            getPage('/app/index.html?onlyGameId=' + GAME_ID + '&isProtractor=true&testBrowserName=' + getBrowserName(currBrowser));
        }
        function oneTimeInitInBothBrowsers() {
            // The first time the app loads, we show "my user info modal" (but in beforeEach I close myInfo modal to close possible gameinvite notification)
            runInSecondBrowser(function () {
                loadAppAndCloseMyInfoModalAndMaybeGameinviteNotification();
            });
            changeDisplayAndUserName(browser1NameStr);
            runInSecondBrowser(function () {
                changeDisplayAndUserName(browser2NameStr);
            });
        }
        function changeDisplayAndUserName(newName) {
            // Sets my displayName and userName to browser1NameStr.
            mainPage.openMyInfoModal();
            // Verify that initially the name starts with Guest-, and userName is empty.
            expectToContain(myInfoModal.getNewDisplayName(), "Guest-");
            expectToBe(myInfoModal.getNewUserName(), '');
            // Change displayName and userName to newName.
            myInfoModal.setNewDisplayName(newName);
            myInfoModal.setNewUserName(newName);
            myInfoModal.submit();
        }
        // This test must be first because it requires an empty local-storage,
        // and following tests assume the displayName and userName were changed.
        it('one-time initialization: shows "my user info modal" when loading an app for the first time, and changes displayName&userName in the first browser', function () {
            oneTimeInitInBothBrowsers();
            // Verify displayName and userName changed.
            mainPage.openMyInfoModal();
            expectToBe(myInfoModal.getNewDisplayName(), browser1NameStr);
            expectToBe(myInfoModal.getNewUserName(), browser1NameStr);
        });
        it('can change displayName&userName, and cancel changes', function () {
            mainPage.openMyInfoModal();
            var someOtherName = "foobar" + Math.random();
            myInfoModal.setNewDisplayName(someOtherName);
            myInfoModal.setNewUserName(someOtherName);
            // Canceling so displayName and userName should not change.
            myInfoModal.cancel();
            mainPage.openMyInfoModal();
            // Verifying displayName and userName did not change.
            expectToBe(myInfoModal.getNewDisplayName(), browser1NameStr);
            expectToBe(myInfoModal.getNewUserName(), browser1NameStr);
        });
        it('will show a warning when browser2 change its userName to the userName of browser1', function () {
            // Testing that one can't select a username that was taken by someone else.
            runInSecondBrowser(function () {
                loadApp();
                notifications.expectNoNotifications();
                mainPage.openMyInfoModal();
                var usernameWasTaken = myInfoModal.getUserNameWasTaken();
                expectToBe(myInfoModal.getNewUserName(), browser2NameStr);
                expectNotPresent(usernameWasTaken);
                myInfoModal.setNewUserName(browser1NameStr);
                myInfoModal.submit();
                expectDisplayed(usernameWasTaken);
                l10n.expectTranslate(usernameWasTaken.getText(), 'MODAL_USER_INFO_USERNAME_WAS_TAKEN');
                expect(myInfoModal.getNewUserName()).toMatch(regexEscape(browser1NameStr) + "[0-9]+"); // We add some random number at the end as a suggestion
                myInfoModal.cancel();
                // Verify that username didn't change
                mainPage.openMyInfoModal();
                expectToBe(myInfoModal.getNewUserName(), browser2NameStr);
            });
        });
        it('can open feedback modal', function () {
            // Testing opening feedback (but not sending it, to avoid getting a feedback email)
            mainPage.openMyInfoModal().openFeedbackModal();
            feedbackModal.setFeedback("Some feedback text");
            feedbackModal.close();
            myInfoModal.cancel();
        });
        it('can switch languages and it localize correctly', function () {
            mainPage.openMyInfoModal();
            // Testing changing a langague (English->Hebrew->English), and making sure l10n worked.
            l10n.expectTranslate(myInfoModal.getTitle(), "MODAL_TITLE_USER_INFO", {}, "en");
            expectToBe(myInfoModal.getCurrentLanguageCode(), 'string:en');
            myInfoModal.clickOnLanguageOption('עברית'); // Selecting language Hebrew
            expectToBe(myInfoModal.getCurrentLanguageCode(), 'string:iw');
            l10n.expectTranslate(myInfoModal.getTitle(), "MODAL_TITLE_USER_INFO", {}, "iw");
            myInfoModal.clickOnLanguageOption('English'); // Selecting language English
            l10n.expectTranslate(myInfoModal.getTitle(), "MODAL_TITLE_USER_INFO", {}, "en");
            // to-do: add a test that language was switch in TicTacToe game (i.e., that the rules' language was changed)
        });
        it('can go to practice play page, click on back button and it will go back to main menu', function () {
            mainPage.openNewMatchModal().startPractice();
            currBrowser.navigate().back();
            mainPage.expectVisible();
        });
        it('can auto-match', function () {
            mainPage.expectNoMatches();
            createAutoMatch(0);
        });
        it('can toggle top bar (in practice play page)', function () {
            mainPage.openNewMatchModal().startPractice();
            playPage.toggleTopBar();
            expectNotPresent(playPage.getOpenExtraMatchOptions());
            playPage.toggleTopBar();
            expectDisplayed(playPage.getOpenExtraMatchOptions());
            playPage.openExtraMatchOptions().gotoMain();
        });
        it('can make a move in a practice TicTacToe match, and restart it', function () {
            mainPage.openNewMatchModal().startPractice();
            // Make a move in TicTacToe!
            tictactoe.run(function () {
                tictactoe.expectEmptyBoard();
                tictactoe.clickDivAndExpectPiece(1, 0, "X");
                // wait for AI to make at least one move
                // For some reason waitForElement doesn't work, but elementsLocated does work. Weird...
                currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x0')), 10000);
                tictactoe.expectPiece(0, 0, 'O'); // AI played at position 0x0
            });
            // Restart a new practice match.
            playPage.openExtraMatchOptions().openNewMatchModal().startPractice();
            tictactoe.run(function () {
                tictactoe.expectEmptyBoard();
            });
            playPage.openExtraMatchOptions().gotoMain();
        });
        it('can finish a passAndPlay TicTacToe match, restart it, and go back to main menu', function () {
            mainPage.openNewMatchModal().startPassAndPlay();
            tictactoe.run(function () {
                tictactoe.expectEmptyBoard();
                // End game with X winning.
                for (var col = 0; col < 2; col++) {
                    tictactoe.clickDivAndExpectPiece(1, col, "X");
                    tictactoe.clickDivAndExpectPiece(2, col, "O");
                }
                // Winning move
                tictactoe.clickDivAndExpectPiece(1, 2, "X");
                tictactoe.expectBoard([['', '', ''],
                    ['X', 'X', 'X'],
                    ['O', 'O', '']]);
            });
            expectDisplayed(id('game_over_match_status'));
            gameOverModal.close(); // Will restart a new passAndPlay
            tictactoe.run(function () {
                tictactoe.expectEmptyBoard();
                tictactoe.clickDivAndExpectPiece(0, 0, "X");
                tictactoe.clickDivAndExpectPiece(1, 1, "O");
            });
            // Restart passAndPlay
            playPage.openExtraMatchOptions().openNewMatchModal().startPassAndPlay();
            tictactoe.run(function () {
                tictactoe.expectEmptyBoard();
            });
            playPage.openExtraMatchOptions().gotoMain();
        });
        it('from darrenlevy@: can go to passAndPlay, make move, go to Invite Friends and go back to main menu', function () {
            mainPage.openNewMatchModal().startPassAndPlay();
            tictactoe.run(function () {
                tictactoe.clickDivAndExpectPiece(0, 0, 'X');
            });
            playPage.openExtraMatchOptions().openNewMatchModal().gotoInviteFriends();
            friendsInvitePage.gotoMain();
            mainPage.expectVisible();
        });
        it('from Prasoon Goyal & Rachita Hajela: can go to practice, open game invite in 2nd browser, back to main menu', function () {
            mainPage.openNewMatchModal().startPractice();
            runInSecondBrowser(function () {
                getPage('/gameinvite/?' + browser1NameStr + '=testtictactoe');
                var interpolationParams = { GAME_NAME: "test-tictactoe", PLAYER_NAME: browser1NameStr };
                var translationId = "GAME_INVITE_PLAYER_NAME_WANTS_TO_PLAY_GAME_NAME_WITH_YOU";
                l10n.expectTranslate(gameinvitePage.getInviteText(), translationId, interpolationParams);
                loadApp();
                notifications.expectOneNotification('IN_APP_NOTIFICATION_GAME_INVITE_TITLE', 'IN_APP_NOTIFICATION_GAME_INVITE_BODY', interpolationParams);
                notifications.closeNotificationWithIndex(0);
            });
            playPage.openExtraMatchOptions().gotoMain();
        });
        it('from DiegoRincon: can finish a practice TicTacToe match and go back to main menu', function () {
            mainPage.openNewMatchModal().startPractice();
            tictactoe.run(function () {
                tictactoe.expectEmptyBoard();
                tictactoe.clickDivAndExpectPiece(1, 0, "X");
                // wait for AI to make at least one move
                // For some reason waitForElement doesn't work, but elementsLocated does work. Weird...
                currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x0')), 10000);
                tictactoe.expectPiece(0, 0, 'O'); // AI played at position 0x0
                tictactoe.clickDivAndExpectPiece(2, 0, "X");
                currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x1')), 10000);
                tictactoe.expectPiece(0, 1, 'O'); // AI played at position 0x0
                tictactoe.clickDivAndExpectPiece(1, 1, "X");
                currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x2')), 10000);
                tictactoe.expectPiece(0, 2, 'O'); // AI played at position 0x0
            });
            expectDisplayed(id('game_over_match_status'));
            gameOverModal.close();
            playPage.openExtraMatchOptions().gotoMain();
        });
        it('from ismailmustafa and pdhar (team Carrom)@: can finish a passAndPlay match, go to the main menu, finish a practice match, and go back to main menu', function () {
            mainPage.openNewMatchModal().startPassAndPlay();
            // Run game to completion
            tictactoe.run(function () {
                tictactoe.expectEmptyBoard();
                var isX = true;
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        if (i == 2 && j == 1)
                            break;
                        tictactoe.clickDivAndExpectPiece(i, j, isX ? 'X' : 'O');
                        isX = !isX;
                    }
                }
                tictactoe.expectBoard([['X', 'O', 'X'],
                    ['O', 'X', 'O'],
                    ['X', '', '']]);
            });
            // Check for game over modal, close, and go to main
            expectDisplayed(id('game_over_match_status'));
            gameOverModal.close();
            playPage.openExtraMatchOptions().gotoMain();
            // Start a practice match
            mainPage.openNewMatchModal().startPractice();
            tictactoe.run(function () {
                tictactoe.clickDivAndExpectPiece(1, 1, 'X');
                currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x0')), 10000);
                tictactoe.clickDivAndExpectPiece(2, 2, 'X');
                currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x2')), 10000);
                tictactoe.clickDivAndExpectPiece(2, 1, 'X');
                currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x1')), 10000);
                tictactoe.expectBoard([['O', 'O', 'O'],
                    ['', 'X', ''],
                    ['', 'X', 'X']]);
            });
            // Check for game over modal, close, and go to main
            expectDisplayed(id('game_over_match_status'));
            gameOverModal.close();
            playPage.openExtraMatchOptions().gotoMain();
        });
        it('from pioneers team (Hung-Ting Wen): single-player game ends in win/lose', function () {
            mainPage.openNewMatchModal().startPassAndPlay();
            tictactoe.run(function () {
                /**
                 * First test case: X won
                 */
                tictactoe.expectEmptyBoard();
                tictactoe.clickDivAndExpectPiece(0, 0, 'X');
                tictactoe.clickDivAndExpectPiece(1, 2, 'O');
                tictactoe.clickDivAndExpectPiece(1, 1, 'X');
                tictactoe.clickDivAndExpectPiece(2, 1, 'O');
                //Winning move
                tictactoe.clickDivAndExpectPiece(2, 2, 'X');
                tictactoe.expectBoard([['X', '', ''],
                    ['', 'X', 'O'],
                    ['', 'O', 'X']]);
            });
            expectDisplayed(id('game_over_match_status'));
            l10n.expectTranslate(gameOverModal.getMatchOverStatus(), 'MATCH_STATUS_OPPONENT_WON_WITH_NAME', { OPPONENT_NAME: 'PLAYER_X' });
            gameOverModal.close();
            tictactoe.run(function () {
                /**
                 * Second test case: O won
                 */
                tictactoe.expectEmptyBoard();
                tictactoe.clickDivAndExpectPiece(0, 0, 'X');
                tictactoe.clickDivAndExpectPiece(1, 1, 'O');
                tictactoe.clickDivAndExpectPiece(1, 2, 'X');
                tictactoe.clickDivAndExpectPiece(0, 2, 'O');
                tictactoe.clickDivAndExpectPiece(2, 1, 'X');
                //Winning move
                tictactoe.clickDivAndExpectPiece(2, 0, 'O');
                tictactoe.expectBoard([['X', '', 'O'],
                    ['', 'O', 'X'],
                    ['O', 'X', '']]);
            });
            expectDisplayed(id('game_over_match_status'));
            l10n.expectTranslate(gameOverModal.getMatchOverStatus(), 'MATCH_STATUS_OPPONENT_WON_WITH_NAME', { OPPONENT_NAME: 'PLAYER_O' });
            //Cleanup
            gameOverModal.close();
            playPage.openExtraMatchOptions().gotoMain();
        });
        it('from pioneers team (Hung-Ting Wen): single player game ends in a tie', function () {
            mainPage.openNewMatchModal().startPassAndPlay();
            tictactoe.run(function () {
                /**
                 * Third test case: tie
                 */
                tictactoe.expectEmptyBoard();
                for (var col = 0; col < 2; col++) {
                    tictactoe.clickDivAndExpectPiece(0, col, 'X');
                    tictactoe.clickDivAndExpectPiece(1, col, 'O');
                }
                tictactoe.clickDivAndExpectPiece(1, 2, 'X');
                tictactoe.clickDivAndExpectPiece(0, 2, 'O');
                tictactoe.clickDivAndExpectPiece(2, 0, 'X');
                tictactoe.clickDivAndExpectPiece(2, 2, 'O');
                tictactoe.clickDivAndExpectPiece(2, 1, 'X');
                tictactoe.expectBoard([['X', 'X', 'O'],
                    ['O', 'O', 'X'],
                    ['X', 'X', 'O']]);
            });
            expectDisplayed(id('game_over_match_status'));
            l10n.expectTranslate(gameOverModal.getMatchOverStatus(), 'MATCH_STATUS_ENDED_IN_TIE', {});
            //Cleanup
            gameOverModal.close();
            playPage.openExtraMatchOptions().gotoMain();
        });
        it('from Shuang Wang (Enclosed Combat team): can start a match from gameinvite, player1 blocks player2, and player2 receives block message when invite player1 to a new game', function () {
            getPage('/gameinvite/?' + browser2NameStr + '=testtictactoe');
            loadApp();
            notifications.clickNotificationWithIndex(0);
            playPage.openInfoModalForPlayerIndex(1);
            playerInfoModal.blockPlayer();
            playerInfoModal.close();
            playPage.openExtraMatchOptions().dismissMatch();
            runInSecondBrowser(function () {
                getPage('/gameinvite/?' + browser1NameStr + '=testtictactoe');
                loadApp();
                notifications.clickNotificationWithIndex(0);
                playPage.openInfoModalForPlayerIndex(1);
                playerInfoModal.inviteToNewGame();
                notifications.expectNoNotifications();
                tictactoe.run(function () {
                    tictactoe.expectEmptyBoard();
                    tictactoe.clickDivAndExpectPiece(0, 0, 'X');
                });
                notifications.expectYouWereBlockedInNotificationIndex(1);
                expect(notifications.getNotificationsCount()).toBe(2);
                notifications.closeNotificationWithIndex(1);
                notifications.closeNotificationWithIndex(0);
                playPage.openExtraMatchOptions().dismissMatch();
                mainPage.clickMatchIndex(0);
                playPage.openExtraMatchOptions().dismissMatch();
            });
        });
        it('can invite using userName', function () {
            runInSecondBrowser(function () {
                getPage('/gameinvite/?' + browser1NameStr + '=testtictactoe');
                var interpolationParams = { GAME_NAME: "test-tictactoe", PLAYER_NAME: browser1NameStr };
                var translationId = "GAME_INVITE_PLAYER_NAME_WANTS_TO_PLAY_GAME_NAME_WITH_YOU";
                l10n.expectTranslate(gameinvitePage.getInviteText(), translationId, interpolationParams);
                loadApp();
                notifications.expectOneNotification('IN_APP_NOTIFICATION_GAME_INVITE_TITLE', 'IN_APP_NOTIFICATION_GAME_INVITE_BODY', interpolationParams);
                // to-do: actually start a match from gameinvite.
                notifications.closeNotificationWithIndex(0);
            });
        });
        it('can switch languages in gameinvite and it localize correctly', function () {
            runInSecondBrowser(function () {
                getPage('/gameinvite/?' + browser1NameStr + '=testtictactoe');
                expectDisplayed(id('gameHeader320x50Url'));
                // Testing changing a langague (English->Hebrew->English), and making sure l10n worked.
                var englishInterpolationParams = { GAME_NAME: "test-tictactoe", PLAYER_NAME: browser1NameStr };
                var translationId = "GAME_INVITE_PLAYER_NAME_WANTS_TO_PLAY_GAME_NAME_WITH_YOU";
                var hebrewInterpolationParams = { GAME_NAME: "HEBREW-test-tictactoe", PLAYER_NAME: browser1NameStr };
                l10n.expectTranslate(gameinvitePage.getInviteText(), translationId, englishInterpolationParams, "en");
                expectToBe(gameinvitePage.getCurrentLanguageCode(), 'string:en');
                gameinvitePage.clickOnLanguageOption('עברית'); // Selecting language Hebrew
                expectToBe(gameinvitePage.getCurrentLanguageCode(), 'string:iw');
                l10n.expectTranslate(gameinvitePage.getInviteText(), translationId, hebrewInterpolationParams, "iw");
                gameinvitePage.clickOnLanguageOption('English');
                l10n.expectTranslate(gameinvitePage.getInviteText(), translationId, englishInterpolationParams, "en");
            });
        });
        function expectModel(ngModel, toBe) {
            expect(element(by.model(ngModel)).getAttribute('value')).toBe(toBe);
        }
        it('gameDeveloper login', function () {
            runInSecondBrowser(function () {
                getPage('/gamedeveloper/gameDeveloper.html');
                expectModel('developerLogin.email', '');
            });
        });
        it('gameDeveloper main', function () {
            runInSecondBrowser(function () {
                // Test game developer account is:
                getPage('/gamedeveloper/gameDeveloper.html#/developer/6000581957124096/3363110773855931519');
                expectModel('developerMain.gameDeveloperInfo.gameDeveloperEmail', 'yoav.zibin+testtictactoe@gmail.com');
            });
        });
        it('gameDeveloper test-tictactoe', function () {
            runInSecondBrowser(function () {
                getPage('/gamedeveloper/gameDeveloper.html#/developer/6000581957124096/3363110773855931519/6000581957124096-0');
                expectModel('developerGame.game.phonegapAppName', 'test-tictactoe');
            });
        });
        it('cleanup any remaining gameinvites', function () {
            runInSecondBrowser(function () {
                loadAppAndCloseMyInfoModalAndMaybeGameinviteNotification();
            });
        });
    });
})(e2eTests || (e2eTests = {}));
//# sourceMappingURL=e2e_tests.js.map