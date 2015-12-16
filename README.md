# default-theme
Default gaming platform theme

Change the "theme" of the platform by overriding the platform html templates</h4>
The platform html has two parts: ng-view that contains the current page (one of 3 possible pages),
and ng-include that has html that is always included on the page.
The 3 pages plus the included html are:
* main page: the first page you see when you load the app
* play page: where you play the game (you only see the platform top bar and the game iframe)
* inviteFriends page: the page to select a FB friend to invite
* included: html that is always on the page, e.g.,
  modal dialogs (showing the user info, feedback dialog, match over dialog),
  in-app notifications, the game iframe, etc.

Finally, <code>gameinvite.us</code> has another template you can customize.
