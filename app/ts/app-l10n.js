(function () {
    ;
    var platformTranslations = {
        "CHAT_SENT": {
            "en": "Chat sent",
            "iw": "צט נשלח",
            "pt": "",
            "zh": "对话发送",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Mensaje enviado"
        },
        "FB_FRIENDS_ACTION_INVITE": {
            "en": "Invite",
            "iw": "הזמן",
            "pt": "Convidar",
            "zh": "邀请",
            "el": "Πρόσκληση",
            "fr": "Invitez",
            "hi": "आमंत्रण",
            "es": "Invitar"
        },
        "FB_FRIENDS_DID_NOT_INSTALL_APP": {
            "en": "We're sorry, but it looks like none of your friends has this app installed.",
            "iw": "החברים שלך לא התקינו את האפליקציה",
            "pt": "Desculpe, mas parece que nenhum dos seus amigos tem esse aplicativo instalado.",
            "zh": "不好意思，你朋友们都没安装这个程序",
            "el": "Δυστυχώς, κανένας από την λίστα φίλων σας, δεν έχει εγκαταστήσει την εφαρμογή.",
            "fr": "Nous sommes désolés , mais il ressemble à aucun de vos amis a cette application installée",
            "hi": "हमें खेद है, लेकिन यह अपने दोस्तों में से कोई तरह लग रहा है स्थापित इस एप्लिकेशन है",
            "es": "Ninguno de tus amigos tiene el app instalado"
        },
        "FB_FRIENDS_FILTER_CANCEL": {
            "en": "Cancel",
            "iw": "בטל",
            "pt": "Cancelar",
            "zh": "取消",
            "el": "Ακύρωση",
            "fr": "Annuler",
            "hi": "रद्द करना",
            "es": "Cancelar"
        },
        "FB_FRIENDS_SHARE": {
            "en": "Share",
            "iw": "שתף",
            "pt": "",
            "zh": "分享",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Compartir"
        },
        "FB_FRIENDS_TITLE": {
            "en": "Facebook",
            "iw": "חברים",
            "pt": "Amigos",
            "zh": "脸书上的朋友",
            "el": "Φίλοι",
            "fr": "Amis",
            "hi": "दोस्तो",
            "es": "Facebook"
        },
        "IN_APP_NOTIFICATION_GAME_INVITE_BODY": {
            "en": "{{PLAYER_NAME}} wants to play with you!",
            "iw": "{{PLAYER_NAME}} רוצה לשחק איתך!",
            "pt": "{{PLAYER_NAME}} quer jogar com você!",
            "zh": "{{PLAYER_NAME}}想和你一起玩",
            "el": "",
            "fr": "{{PLAYER_NAME}} veut jouer avec vous!",
            "hi": "{{PLAYER_NAME}} आप के साथ खेलना चाहता है!",
            "es": "{{PLAYER_NAME}} quiere jugar contigo!"
        },
        "IN_APP_NOTIFICATION_GAME_INVITE_TITLE": {
            "en": "Game invite",
            "iw": "הזמנה למשחק",
            "pt": "Convite",
            "zh": "游戏邀请",
            "el": "",
            "fr": "Jeu Inviter",
            "hi": "खेल आमंत्रण",
            "es": "Invitar a jugar"
        },
        "IN_APP_NOTIFICATION_GOT_FB_ERROR": {
            "en": "We received an error from Facebook, please try again later.",
            "iw": "היתה שגיאה בפייסבוק. נסה שוב אחר כך",
            "pt": "Nós recebemos um erro do Facebook. Por favor tente novamente mais tarde.",
            "zh": "错误，请重试",
            "el": "Προκλήθηκε σφάλμα από την μεριά του Facebook, παρακαλώ προσπαθήστε αργότερα.",
            "fr": "Nous avons reçu une erreur de Facebook , s'il vous plaît réessayer plus tard .",
            "hi": "हम फेसबुक से एक त्रुटि प्राप्त किया, बाद में पुन: प्रयास करें ।",
            "es": "Recibimos un error de Facebook, intenta otra vez mas tarde"
        },
        "IN_APP_NOTIFICATION_MOVE_SENT_CREATE_NEW_MATCH": {
            "en": "Move sent, and no more moves to make in any game. Click to create new game.",
            "iw": "מסע נשלח. לחץ כדי להתחיל משחק חדש",
            "pt": "",
            "zh": "最后回合结束，点击开始新的游戏",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Jugada enviada; no hay jugadas por hacer en otros juegos. Haz click para crear un nuevo juego."
        },
        "IN_APP_NOTIFICATION_MOVE_SENT_LOAD_NEXT_MATCH": {
            "en": "Move sent. Click to make a move in the next game.",
            "iw": "מסע נשלח. לחץ כדי לעשות מסע במשחק הבא",
            "pt": "",
            "zh": "操作已发送，请在下一场游戏中进行操作",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Jugada enviada; haz click para hacer una movida en el siguente juego."
        },
        "IN_APP_NOTIFICATION_TOO_MANY_MATCHES_DISMISS_ENDED_MATCHES": {
            "en": "You have too many games. Click here to quit games that ended.",
            "iw": "יש לך יותר מידי משחקים. לחץ כאן כדי לבטל משחקים שנגמרו כבר",
            "pt": "Você tem muitos jogos em progresso. Clique aqui para sair de partidas encerradas.",
            "zh": "你有太多局，请点这来退出已结束的",
            "el": "Έχετε πολλά ενεργά παιχνίδια. Κάντε κλίκ εδώ για να κλείσετε κάποια από τα παιχνίδια που έχουν τελειώσει.",
            "fr": "Vous avez trop de jeux . Cliquez ici pour arrêter de jeux qui se sont terminées",
            "hi": "आप भी कई खेल है । समाप्त हो गया है कि खेल को छोड़ने के लिए यहां क्लिक करें।",
            "es": "Tienes demasiados juegos abiertos. Haz click para cerrar juegos terminados."
        },
        "IN_APP_NOTIFICATION_YOU_WERE_BLOCKED": {
            "en": "You were blocked and therefore you can't send chat or start a new match with the blocking player.",
            "iw": "מישהו חסם אותך ואינך יכול לשלוח צט",
            "pt": "",
            "zh": "你被屏蔽了，所以你不能聊天或者匹配屏蔽了的玩家",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "You were blocked and therefore you can't send chat or start a new match with the blocking player."
        },
        "MAIN_FEEDBACK_AND_BUGS_TITLE": {
            "en": "Feedback",
            "iw": "משוב",
            "pt": "Comentários e erros",
            "zh": "反馈",
            "el": "",
            "fr": "Commentaires et bogues",
            "hi": "आपके सुझाव और कीड़े",
            "es": "Feedback"
        },
        "MAIN_INVITE_FRIENDS_TITLE": {
            "en": "Facebook friends",
            "iw": "הזמן חבר למשחק",
            "pt": "Convide os seus amigos para jogar",
            "zh": "邀请朋友来玩",
            "el": "Καλέστε τους φίλους σας για ένα παιχνίδι.",
            "fr": "Invitez vos amis pour un jeu",
            "hi": "एक खेल के लिए अपने मित्रों को आमंत्रित करें",
            "es": "Amigos de Facebook"
        },
        "MAIN_LOG_IN_WITH_FACEBOOK": {
            "en": "Log in with Facebook",
            "iw": "כנס עם פייסבוק",
            "pt": "Entrar com Facebook",
            "zh": "登陆脸书",
            "el": "Συνδεθείτε με λογαριασμό Facebook.",
            "fr": "Se connecter avec Facebook",
            "hi": "फ़ेसबुक लॉगिन करें",
            "es": "Iniciar sesion con Facebook"
        },
        "MAIN_LOG_OUT_FROM_FACEBOOK": {
            "en": "Log out from Facebook",
            "iw": "צא מפייסבוק",
            "pt": "Sair do Facebook",
            "zh": "退出脸书",
            "el": "Αποσυνδεθείτε από το Facebook.",
            "fr": "Déconnecter de Facebook",
            "hi": "फेसबुक से लॉग आउट करें",
            "es": "Cerrar sesion de Facebook"
        },
        "MAIN_MATCH_GROUP_ENDED_MATCHES": {
            "en": "Ended Games",
            "iw": "משחקים שנגמרו",
            "pt": "Partidas terminadas",
            "zh": "已结束游戏",
            "el": "Ολοκληρωμένα παιχνίδια",
            "fr": "Jeux terminés",
            "hi": "समाप्त हो गया खेल",
            "es": "Juegos terminados"
        },
        "MAIN_MATCH_GROUP_OPPONENT_TURN_MATCHES": {
            "en": "Opponent turn",
            "iw": "תור היריב",
            "pt": "",
            "zh": "对方回合",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Turno del oponente"
        },
        "MAIN_MATCH_GROUP_YOUR_TURN_MATCHES": {
            "en": "Your turn",
            "iw": "תורך",
            "pt": "",
            "zh": "你的回合",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Tu turno"
        },
        "MAIN_MATCH_LAST_MOVE_ON": {
            "en": "Last move:",
            "iw": "מסע אחרון:",
            "pt": "Última jogada",
            "zh": "最后一步",
            "el": "Τελευταία κίνηση:",
            "fr": "Dernier coup",
            "hi": "पिछले कदम :",
            "es": "Ultima jugada:"
        },
        "MAIN_MATCH_STARTED_ON": {
            "en": "Started:",
            "iw": "המשחק התחיל:",
            "pt": "Começo",
            "zh": "开始",
            "el": "Ξεκίνησε:",
            "fr": "A débuté",
            "hi": "आरंभ:",
            "es": "Empezo:"
        },
        "MAIN_NEW_AUTO_MATCH_EXPLANATION": {
            "en": "Let us find an opponent for you automatically.",
            "iw": "שחק נגד יריב אקראי",
            "pt": "Jogar contra um oponente escolhido ao acaso",
            "zh": "随机选择对手",
            "el": "Παίξτε εναντίον τυχαίων αντιπάλων.",
            "fr": "Jouer contre des adversaires choisis au hasard",
            "hi": "बेतरतीब ढंग से चुनी प्रतिद्वंद्वी के खिलाफ खेलते हैं।",
            "es": "Encontrar un oponente automaticamente"
        },
        "MAIN_NEW_AUTO_MATCH_TITLE": {
            "en": "Random opponent",
            "iw": "יריב אקראי",
            "pt": "Novo jogo contra um oponente escolhido ao acaso",
            "zh": "自动找对手的新一局",
            "el": "Νέο παιχνίδι εναντίον τυχαίου αντιπάλου",
            "fr": "Nouveau jeu auto- adversaire",
            "hi": "नई ऑटो - प्रतिद्वंद्वी खेल",
            "es": "Oponente aleatorio"
        },
        "MAIN_NEW_MATCH_GROUP_TITLE": {
            "en": "New game",
            "iw": "משחק חדש",
            "pt": "Novo jogo",
            "zh": "新一局",
            "el": "Νέο παιχνίδι",
            "fr": "Nouveau jeu",
            "hi": "नया खेल",
            "es": "Nuevo juego"
        },
        "MAIN_PASS_AND_PLAY_EXPLANATION": {
            "en": "Players will use the same phone/tablet.",
            "iw": "כמה שחקנים ישחקו עם אותו טלפון",
            "pt": "Todos os jogadores vão jogar no mesmo telefone/tablet.",
            "zh": "在一台机器上玩",
            "el": "Πολλαπλοί παίχτες στην ίδια συσκευή.",
            "fr": "Plusieurs joueurs joueront sur le même portable/ tablette",
            "hi": "कई खिलाड़ियों के एक ही फोन / टेबलेट पर खेलेंगे।",
            "es": "Los jugadores usaran el mismo telefono/tablet"
        },
        "MAIN_PASS_AND_PLAY_TITLE": {
            "en": "Play together on one device",
            "iw": "שחקו ביחד על מכשיר אחד",
            "pt": "Mais de um jogador no mesmo telefone",
            "zh": "在一台机器上玩",
            "el": "Παίξτε μαζί στην ίδια συσκευή.",
            "fr": "Jouer ensemble sur un seul appareil",
            "hi": "एक डिवाइस पर एक साथ खेलते हैं",
            "es": "Jugar contos en un dispositivo"
        },
        "MAIN_PRACTICE_EXPLANATION": {
            "en": "Play against the computer.",
            "iw": "שחק נגד המחשב",
            "pt": "Jogar contra o computador",
            "zh": "和电脑玩",
            "el": "Παίξτε εναντίον του υπολογιστή.",
            "fr": "Jouer contre l'ordinateur",
            "hi": "कंप्यूटर के खिलाफ खेलते हैं।",
            "es": "Jugar contra la computadora"
        },
        "MAIN_PRACTICE_TITLE": {
            "en": "Practice",
            "iw": "התאמן",
            "pt": "Praticar",
            "zh": "练习",
            "el": "Εξάσκηση.",
            "fr": "Entrainez",
            "hi": "अभ्यास",
            "es": "Practicar"
        },
        "MAIN_SHARE_INVITE_LINK_TITLE": {
            "en": "Share an invite link with your friends",
            "iw": "שתף הזמנה למשחק עם חבריך",
            "pt": "",
            "zh": "分享链接给你的好友",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Compartir un link de invitacion con tus amigos."
        },
        "MATCH_DELETE": {
            "en": "Delete game",
            "iw": "מחק את המשחק",
            "pt": "",
            "zh": "删除当前游戏",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Borrar juego"
        },
        "MATCH_LOAD_NEXT": {
            "en": "Load next game",
            "iw": "טען את המשחק הבא",
            "pt": "",
            "zh": "载入下场游戏",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Cargar siguiente juego"
        },
        "MATCH_NEW_GAME": {
            "en": "New game",
            "iw": "משחק חדש",
            "pt": "",
            "zh": "新游戏",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Nueva partida"
        },
        "MATCH_RESIGN_AND_DELETE": {
            "en": "Resign and delete game",
            "iw": "צא והפסד את המשחק",
            "pt": "",
            "zh": "重新分配并删除游戏",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Renunciar y borrar juego"
        },
        "MATCH_SHARE_PRINTSCREEN": {
            "en": "Share printscreen",
            "iw": "שתף צילום מסך",
            "pt": "",
            "zh": "分享截屏",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Compartir pantalla"
        },
        "MATCH_START_REMATCH": {
            "en": "Rematch: start a new game with {{OPPONENTS_NAME}}",
            "iw": "התחל משחק חדש עם {{OPPONENTS_NAME}",
            "pt": "",
            "zh": "新比赛：与{{OPPONENTS_NAME}}开始新游戏",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Revancha: nuevo juego con {{OPPONENTS_NAME}}"
        },
        "MATCH_STATUS_CANCELED": {
            "en": "Game canceled",
            "iw": "משחק בוטל",
            "pt": "Jogo cancelado",
            "zh": "游戏取消",
            "el": "Το παιχνίδι ακυρώθηκε",
            "fr": "Jeu annulé",
            "hi": "खेल रद्द",
            "es": "Juego cancelado"
        },
        "MATCH_STATUS_COMPUTER'S_TURN": {
            "en": "Computer's turn",
            "iw": "תור המחשב",
            "pt": "Turno do computador",
            "zh": "该电脑下了",
            "el": "Σειρά του υπολογιστή",
            "fr": "Le tour de l'ordinateur",
            "hi": "कंप्यूटर की बारी",
            "es": "Turno de la computadoa"
        },
        "MATCH_STATUS_COMPUTER_WON": {
            "en": "Computer won",
            "iw": "המחשב ניצח",
            "pt": "O computador ganhou",
            "zh": "电脑赢了",
            "el": "Ο υπολογιστής κέρδισε",
            "fr": "Computer a gagné",
            "hi": "कम्प्यूटर जीता",
            "es": "Computadora ganó"
        },
        "MATCH_STATUS_ENDED_IN_TIE": {
            "en": "Tie",
            "iw": "תיקו",
            "pt": "Empate",
            "zh": "平局",
            "el": "Ισοπαλία",
            "fr": "Nul",
            "hi": "खेल टाई",
            "es": "Empate"
        },
        "MATCH_STATUS_OPPONENT'S_TURN": {
            "en": "Opponent's turn",
            "iw": "תור היריב",
            "pt": "Vez do oponente",
            "zh": "对方回合",
            "el": "Σειρά του αντιπάλου",
            "fr": "Le tour de l'adversaire",
            "hi": "प्रतिद्वंद्वी की बारी",
            "es": "Turno del oponente"
        },
        "MATCH_STATUS_OPPONENT'S_TURN_WITH_NAME": {
            "en": "{{OPPONENT_NAME}}'s turn",
            "iw": "תור {{OPPONENT_NAME}}",
            "pt": "Vez do(a) {{OPPONENT_NAME}}",
            "zh": "{{OPPONENT_NAME}}回合",
            "el": "Σειρά του/της {{OPPONENT_NAME}}",
            "fr": "Le tour de {OPPONENT_NAME}}",
            "hi": "{{OPPONENT_NAME}} की बारी",
            "es": "Turno de {{OPPONENT_NAME}}"
        },
        "MATCH_STATUS_OPPONENT_WON": {
            "en": "Opponent won",
            "iw": "היריב נצח",
            "pt": "O seu oponente ganhou",
            "zh": "对方赢了",
            "el": "Ο αντίπαλος κέρδισε",
            "fr": "L'adversaire gagne",
            "hi": "प्रतिद्वंद्वी जीता",
            "es": "Oponente ganó"
        },
        "MATCH_STATUS_OPPONENT_WON_WITH_NAME": {
            "en": "{{OPPONENT_NAME}} won",
            "iw": "{{OPPONENT_NAME}} נצח",
            "pt": "{{OPPONENT_NAME}} ganhou",
            "zh": "{OPPONENT_NAME}}贏了",
            "el": "Ο/Η {{OPPONENT_NAME}} κέρδισε",
            "fr": "{{OPPONENT_NAME}}  gagne",
            "hi": "{{OPPONENT_NAME}} जीता",
            "es": "{{OPPONENT_NAME}} ganó"
        },
        "MATCH_STATUS_PASS_AND_PLAY_PLAYER_NUM_WON": {
            "en": "Player {{PLAYER_NUMBER}} won",
            "iw": "שחקן  {{PLAYER_NUMBER}} נצח",
            "pt": "Jogador(a) {{PLAYER_NUMBER}} ganhou",
            "zh": "{{PLAYER_NUMBER}}赢了",
            "el": "Ο παίχτης με αριθμό Player {{PLAYER_NUMBER}} κέρδισε",
            "fr": "Joueur {{PLAYER_NUMBER}} gagne",
            "hi": "प्लेयर {{PLAYER_NUMBER}} जीता",
            "es": "Player {{PLAYER_NUMBER}} ganó"
        },
        "MATCH_STATUS_PASS_AND_PLAY_TURN_OF_PLAYER_NUM": {
            "en": "Turn of player {{PLAYER_NUMBER}}",
            "iw": "תור שחקן {{PLAYER_NUMBER}}",
            "pt": "Vez do(a) jogador(a) {{PLAYER_NUMBER}}",
            "zh": "{{PLAYER_NUMBER}}回合",
            "el": "Σειρά του παίχτη {{PLAYER_NUMBER}}",
            "fr": "Le tour de joueur {{PLAYER_NUMBER}}",
            "hi": "खिलाड़ी {{PLAYER_NUMBER}} की बारी",
            "es": "Turno de jugador no. {{PLAYER_NUMBER}}"
        },
        "MATCH_STATUS_YOUR_TURN": {
            "en": "Your turn",
            "iw": "תורך",
            "pt": "Sua vez",
            "zh": "该你下了",
            "el": "Είναι η σειρά σας",
            "fr": "Votre tour",
            "hi": "आपकी बारी",
            "es": "Tu turno"
        },
        "MATCH_STATUS_YOU_WON": {
            "en": "You won!",
            "iw": "נצחת!",
            "pt": "Você ganhou!",
            "zh": "你赢了",
            "el": "Είστε ο νικητής!",
            "fr": "Vous gagné!",
            "hi": "आप जीते!",
            "es": "Ganaste!"
        },
        "MODAL_BUTTON_BLOCK": {
            "en": "Block player from sending chats or invites",
            "iw": "חסום את השחקן",
            "pt": "",
            "zh": "阻止用户发送消息或邀请",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Bloquear jugador de mandar invitaciones o chats"
        },
        "MODAL_BUTTON_CLOSE": {
            "en": "Close",
            "iw": "סגור",
            "pt": "Fechar",
            "zh": "关闭",
            "el": "Κλείσιμο",
            "fr": "Fermez",
            "hi": "बंद करे",
            "es": "Cerrar"
        },
        "MODAL_BUTTON_INVITE_TO_NEW_MATCH": {
            "en": "New game",
            "iw": "משחק חדש",
            "pt": "",
            "zh": "新游戏",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Juego nuevo"
        },
        "MODAL_BUTTON_SAVE": {
            "en": "Save",
            "iw": "שמור",
            "pt": "Salvar",
            "zh": "保存",
            "el": "Αποθήκευση",
            "fr": "Sauvegarder",
            "hi": "सहेजें",
            "es": "Salvar"
        },
        "MODAL_BUTTON_SEND_CHAT": {
            "en": "Send",
            "iw": "שלח",
            "pt": "",
            "zh": "发送",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Mandar"
        },
        "MODAL_BUTTON_SEND_FEEDBACK_AND_BUGS": {
            "en": "Send feedback",
            "iw": "משוב",
            "pt": "Enviar comentário",
            "zh": "发送反馈",
            "el": "Στείλτε την άποψη σας",
            "fr": "Envoyez vos remarques",
            "hi": "प्रतिक्रिया भेजें",
            "es": "Mandar feedback"
        },
        "MODAL_BUTTON_UNBLOCK": {
            "en": "Unblock player: allow chats or invites",
            "iw": "בטל חסימה",
            "pt": "",
            "zh": "解除阻止：允许发送消息或邀请",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Desbloquear jugador: permitir chats e invitaciones"
        },
        "MODAL_FEEDBACK_AND_BUGS_PLACEHOLDER_TEXT": {
            "en": "Enter your feedback here, and add your email if you want a reply :)",
            "iw": "משוב",
            "pt": "Entre aqui o seu comentário e o seu email se você quiser que nós lhe respondemos",
            "zh": "在这里输入你的反馈，如果你想要收到回复那么请填写你的电子邮件",
            "el": "Εισάγεται την άποψη σας εδώ και άμα περιμένετε κάποιου είδους απάντηση εισάγεται την ηλεκτρονική σαςδιεύθυνση",
            "fr": "Entrez vos commentaires ici , et d'ajouter votre e-mail si vous souhaitez une réponse :)",
            "hi": "यहाँ अपनी प्रतिक्रिया दर्ज करें, और आप एक जवाब चाहते हैं, तो आपके ईमेल जोड़ने :)",
            "es": "Escribe tu feedback aqui, incluye tu e-mail si quieres una respuesta :)"
        },
        "MODAL_TITLE_FEEDBACK_AND_BUGS": {
            "en": "Feedback",
            "iw": "משוב",
            "pt": "Comentários",
            "zh": "反馈",
            "el": "Απόψεις και σφάλματα.",
            "fr": "Commentaire",
            "hi": "प्रतिक्रिया",
            "es": "Feedback"
        },
        "MODAL_TITLE_MATCH_OVER": {
            "en": "Game over",
            "iw": "משחק נגמר",
            "pt": "Fim do jogo",
            "zh": "游戏结束",
            "el": "Λήξη παιχνιδιού",
            "fr": "Jeu terminé",
            "hi": "खेल खत्म",
            "es": "Juego terminado"
        },
        "MODAL_TITLE_USER_INFO": {
            "en": "Your user info",
            "iw": "פרטי משתמש",
            "pt": "Suas Informações",
            "zh": "你的用户信息",
            "el": "Πληροφορίες χρήστη",
            "fr": "Vos informations de l'utilisateur",
            "hi": "आपका उपयोगकर्ता की जानकारी",
            "es": "Tu informacion de perfil"
        },
        "MODAL_USER_INFO_NAME": {
            "en": "Name",
            "iw": "שם",
            "pt": "Nome",
            "zh": "名称",
            "el": "Όνομα",
            "fr": "Nom",
            "hi": "नाम",
            "es": "Nombre"
        },
        "MODAL_USER_INFO_USERNAME": {
            "en": "User name",
            "iw": "שם משתמש",
            "pt": "Nome de usuário",
            "zh": "用户名称",
            "el": "",
            "fr": "Le nom d'utilisateur",
            "hi": "उपयोगकर्ता नाम",
            "es": "Nombre de usuario"
        },
        "MODAL_USER_INFO_USERNAME_WAS_TAKEN": {
            "en": "This user name was already selected by someone else. Please choose another user name.",
            "iw": "שם משתמש הזה כבר נבחר על ידי מישהו אחר. בחר שם משתמש אחר בבקשה",
            "pt": "Esse nome de usuário já foi escolhido por uma outra pessoa. Por favor, escolha um novo nome de usuário.",
            "zh": "这个用户已经被其他用户选择了。请选择另一个用户",
            "el": "",
            "fr": "Ce nom d'utilisateur a déjà été sélectionné par quelqu'un d'autre . S'il vous plaît choisir un autre nom d'utilisateur.",
            "hi": "यह उपयोगकर्ता नाम पहले से ही किसी और के द्वारा चुना गया था। एक अन्य उपयोगकर्ता के नाम का चयन करें।",
            "es": "Este nombre de usuario no esta disponible. Por favor escoge otro nombre."
        },
        "PUSH_NOTIFICATION_CHAT_MESSAGE_NOTIFICATION_TITLE": {
            "en": "Message from {{OPPONENT_NAME}}:",
            "iw": "הודעה מ {{OPPONENTS_NAME}",
            "pt": "",
            "zh": "来自{{OPPONENT_NAME}}的消息",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Mensaje de {{OPPONENT_NAME}}:"
        },
        "PUSH_NOTIFICATION_MATCH_ENDED_TIE_NOTIFICATION_BODY": {
            "en": "Game with {{OPPONENT_NAME}} ended in a tie",
            "iw": "{{OPPONENT_NAME}} עשה מסע אחרון",
            "pt": "Jogo contra {{OPPONENT_NAME}} terminou em empate",
            "zh": "与{{OPPONENT_NAME}}的一局以平局结束",
            "el": "Ο χρήστης  {{OPPONENT_NAME}} έκανε την τελευταία κίνηση",
            "fr": "Jeu avec {{OPPONENT_NAME}} terminé par un match nul",
            "hi": "{{OPPONENT_NAME}} के साथ खेल एक टाई में समाप्त हो गया",
            "es": "Juego con {{OPPONENT_NAME}} termino empatado"
        },
        "PUSH_NOTIFICATION_MATCH_ENDED_TIE_NOTIFICATION_TITLE": {
            "en": "Game ended in a tie",
            "iw": "משחק נגמר בתיקו",
            "pt": "Jogo terminou em empate",
            "zh": "平局",
            "el": "Το παιχνίδι έληξε σε ισοπαλία",
            "fr": "Jeu terminé en égalité",
            "hi": "खेल एक टाई में समाप्त हो गया",
            "es": "Juego termino empatado"
        },
        "PUSH_NOTIFICATION_MATCH_ENDED_YOU_LOST_NOTIFICATION_BODY": {
            "en": "{{OPPONENT_NAME}} won",
            "iw": "{{OPPONENT_NAME}} נצח",
            "pt": "{{OPPONENT_NAME}} ganhou",
            "zh": "{{OPPONENT_NAME}}贏了",
            "el": "Ο/Η \t{{OPPONENT_NAME}} κέρδισε",
            "fr": "{{OPPONENT_NAME}} gagné",
            "hi": "{{ OPPONENT_NAME }} जीता",
            "es": "{{OPPONENT_NAME}} ganó"
        },
        "PUSH_NOTIFICATION_MATCH_ENDED_YOU_LOST_NOTIFICATION_TITLE": {
            "en": "You lost",
            "iw": "הפסדת",
            "pt": "Você perdeu",
            "zh": "你输了",
            "el": "Χάσατε",
            "fr": "Vous perdu",
            "hi": "आप हार गए",
            "es": "Perdiste"
        },
        "PUSH_NOTIFICATION_MATCH_ENDED_YOU_WON_NOTIFICATION_BODY": {
            "en": "You won against {{OPPONENT_NAME}}!",
            "iw": "{{OPPONENT_NAME}} הפסיד",
            "pt": "Você ganhou contra {{OPPONENT_NAME}}!",
            "zh": "你贏了{{OPPONENT_NAME}}!",
            "el": "Ο/Η \t{{OPPONENT_NAME}} έχασε",
            "fr": "Vous avez gagné contre {{OPPONENT_NAME}} !",
            "hi": "आप {{OPPONENT_NAME}} के खिलाफ जीता  !",
            "es": "Ganaste contra {{OPPONENT_NAME}}!"
        },
        "PUSH_NOTIFICATION_MATCH_ENDED_YOU_WON_NOTIFICATION_TITLE": {
            "en": "You won",
            "iw": "נצחת",
            "pt": "Você ganhou",
            "zh": "你赢了",
            "el": "Είστε ο νικητής",
            "fr": "Vous gagné",
            "hi": "आप जीते",
            "es": "Ganaste"
        },
        "PUSH_NOTIFICATION_NEW_MATCH_NOTIFICATION_BODY": {
            "en": "{{OPPONENT_NAME}} invited you to play",
            "iw": "{{OPPONENT_NAME}} הזמין אותך למשחק",
            "pt": "{{OPPONENT_NAME}} te convidou para jogar",
            "zh": "{{OPPONENT_NAME}}邀請你来玩",
            "el": "Ο/Η \t{{OPPONENT_NAME}} σας προσκάλεσε να παίξετε",
            "fr": "{{OPPONENT_NAME}} vous invité à jouer",
            "hi": "{{OPPONENT_NAME}} खेलने के लिए आपको आमंत्रित किया",
            "es": "{{OPPONENT_NAME}} te invito a jugar"
        },
        "PUSH_NOTIFICATION_NEW_MATCH_NOTIFICATION_TITLE": {
            "en": "New game",
            "iw": "משחק חדש",
            "pt": "Novo Jogo",
            "zh": "新一局",
            "el": "Νέο παιχνίδι",
            "fr": "Nouveau jeu",
            "hi": "नया खेल",
            "es": "Nuevo juego"
        },
        "PUSH_NOTIFICATION_OPPONENT_QUIT_NOTIFICATION_BODY": {
            "en": "{{OPPONENT_NAME}} quit",
            "iw": "{{OPPONENT_NAME}} עזב",
            "pt": "{{OPPONENT_NAME}} saiu da partida",
            "zh": "{{OPPONENT_NAME}}退出了",
            "el": "Ο/Η \t{{OPPONENT_NAME}} παραιτήθηκε",
            "fr": "{{OPPONENT_NAME}} quitter",
            "hi": "{{OPPONENT_NAME}} छोड़ने",
            "es": "{{OPPONENT_NAME}} renunció"
        },
        "PUSH_NOTIFICATION_OPPONENT_QUIT_NOTIFICATION_TITLE": {
            "en": "You won",
            "iw": "נצחת",
            "pt": "Você ganhou",
            "zh": "你赢了",
            "el": "Είστε ο νικητής",
            "fr": "Vous gagné",
            "hi": "आप जीते",
            "es": "Ganaste"
        },
        "PUSH_NOTIFICATION_YOUR_TURN_NOTIFICATION_BODY": {
            "en": "{{OPPONENT_NAME}} just played",
            "iw": "{{OPPONENT_NAME}} שחק",
            "pt": "{{OPPONENT_NAME}} acabou de jogar",
            "zh": "{{OPPONENT_NAME}}刚刚下了一步",
            "el": "Ο/Η \t{{OPPONENT_NAME}} εκτέλεσε μια κίνηση",
            "fr": "{{OPPONENT_NAME}} vient de jouer",
            "hi": "{{OPPONENT_NAME}}  हाल ही में खेला",
            "es": "{{OPPONENT_NAME}} hizo una jugada"
        },
        "PUSH_NOTIFICATION_YOUR_TURN_NOTIFICATION_TITLE": {
            "en": "Your turn",
            "iw": "תורך",
            "pt": "Sua vez",
            "zh": "该你下了",
            "el": "Είναι η σειρά σας",
            "fr": "Votre tour",
            "hi": "आपकी बारी",
            "es": "Tu turno"
        },
        "SHARE_INTENT_GAME_INVITE_MESSAGE": {
            "en": "I want to play {{GAME_NAME}} with you!",
            "iw": "אני רוצה לשחק {{GAME_NAME}} איתך!",
            "pt": "Eu quero jogar {{GAME_NAME}} com você!",
            "zh": "我想和你一起玩{{GAME_NAME}}!!",
            "el": "",
            "fr": "Je veux jouer {{GAME_NAME}} avec vous!",
            "hi": "मैं तुम्हारे साथ {{GAME_NAME}} खेलना चाहता हूँ!",
            "es": "Quiero jugar {{GAME_NAME}} contigo!"
        },
        "SHARE_INTENT_GAME_INVITE_SUBJECT": {
            "en": "Invitation to play {{GAME_NAME}}!",
            "iw": "הזמנה למשחק {{GAME_NAME}}!",
            "pt": "Convite para jogar {{GAME_NAME}}!",
            "zh": "邀請你来玩{{GAME_NAME}}!!",
            "el": "",
            "fr": "Invitation à jouer {{GAME_NAME}} !",
            "hi": "निमंत्रण {{GAME_NAME}} खेलने के लिए !",
            "es": "Invitacion para jugar {{GAME_NAME}}!"
        },
        "SHARE_INTENT_WON_GAME_MESSAGE": {
            "en": "I won a game of {{GAME_NAME}}! Let's see if you can win against me!",
            "iw": "נצחתי במשחק {{GAME_NAME}}! בוא נראה אם אתה יכול לנצח אותי!",
            "pt": "Eu ganhei uma partida de {{GAME_NAME}}! Vamos ver se você consegue ganhar contra mim",
            "zh": "我贏了一局{{GAME_NAME}}! 你赢得了我吗?",
            "el": "",
            "fr": "Je gagné un jeu de {{GAME_NAME}} ! Voyons voir si vous pouvez gagner contre moi !",
            "hi": "मैं {{GAME_NAME}} का एक खेल जीता ! तुम मेरे खिलाफ जीत सकते हैं तो चलो देखते हैं !",
            "es": "Gane un juego de {{GAME_NAME}}! Vamos a ver si puedes ganar contra mi!"
        },
        "SHARE_INTENT_WON_GAME_SUBJECT": {
            "en": "I won a game of {{GAME_NAME}}!",
            "iw": "נצחתי במשחק {{GAME_NAME}}!",
            "pt": "Eu ganhei uma partida de {{GAME_NAME}}!",
            "zh": "我贏了一局{{GAME_NAME}}!",
            "el": "",
            "fr": "Je gagné un jeu de {{GAME_NAME}} !",
            "hi": "मैं {{GAME_NAME}} का एक खेल जीता !",
            "es": "Gane un partido de {{GAME_NAME}}!"
        },
        "SHARE_INTENT_WON_GAME_TAKE_SCREENSHOT": {
            "en": "Share a screenshot of your victory",
            "iw": "שתף צילום מסך של הנצחון שלך",
            "pt": "Compartilhe a imagem da sua vitória",
            "zh": "分享你的胜利画面",
            "el": "",
            "fr": "Partager une capture d'écran de votre victoire",
            "hi": "अपनी जीत के एक स्क्रीनशॉट साझा करें",
            "es": "Comparte la pantalla de tu victoria"
        },
        "SHARE_INTENT_WON_GAME_TAKE_SCREENSHOT_MAY_TAKE_TIME": {
            "en": "Taking a screenshot may take a couple of seconds",
            "iw": "צילום מסך יכול לקחת כמה שניות",
            "pt": "Tirar a foto da sua tela pode demorar alguns segundos",
            "zh": "屏幕截图也许需要几秒钟",
            "el": "",
            "fr": "Prendre une capture d'écran peut prendre quelques secondes",
            "hi": "एक स्क्रीनशॉट लेने में कुछ सेकंड लग सकते हैं",
            "es": "Tomar la captura de pantalla puede tomar unos momentos."
        },
        "TO_MAIN_MENU": {
            "en": "Go to main menu",
            "iw": "חזור לתפריט הראשי",
            "pt": "",
            "zh": "前往主菜单",
            "el": "",
            "fr": "",
            "hi": "",
            "es": "Ir a menu principal"
        },
        "UNKNOWN_PLAYER_NAME": {
            "en": "Unknown",
            "iw": "מישהו",
            "pt": "Desconhecido",
            "zh": "未知",
            "el": "Άγνωστο",
            "fr": "Inconnu",
            "hi": "अज्ञात",
            "es": "Desconocido"
        },
    };
    gamingPlatform.main.l10n().setTranslations(platformTranslations);
})();
//# sourceMappingURL=app-l10n.js.map