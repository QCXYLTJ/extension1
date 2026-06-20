import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
ui.dqzw_boss_cssText = () => {
	let style = document.createElement('style')
		, url = 'extension/大权在握'
		, config = get.configOL(
			'mode_exclusive_layout',
			'dqzw_guihuaxishuang'
		)
		, width = document.body.offsetWidth
		, originalWidth = width * game.documentZoom * .65
		, wideScreen = originalWidth > 600
		, OLUI = lib.config.extension_OLUI_enable;
	if (ui.dqzw_boss_style)
		ui.dqzw_boss_style.remove();
	ui.dqzw_choice_cardPile = ui.create.div('.dqzw-choice-cardpile', ui.window);
	style.innerHTML = `
        [data-number = '9'] > .player[data-position = '1'] {
            top: 16%;
            left: calc(95% - 65px)
        }
        [data-number = '9'] > .player[data-position = '2'] {
            top: 12%;
            left: calc(90% - ${lib.config.touchscreen ? 155 : 185}px);
        }
        [data-number = '9'] > .player[data-position = '3'] {
            top: 30px;
            left: calc(63% + 20px)
        }
        [data-number = '9'] > .player[data-position = '4'] {
            top: 5px;
            left: calc(50% + 15px)
        }
        [data-number = '9'] > .player[data-position = '5'] {
            top: 5px;
            left: calc(36% + 20px)
	    }
        [data-number = '9'] > .player[data-position = '6'] {
            top: 30px;
            left: calc(23% + 20px)
	    }
        [data-number = '9'] > .player[data-position = '7'] {
            top: 12%;
            left: calc(10% + ${lib.config.touchscreen ? 20 : 30}px)
        }
        [data-number = '9'] > .player[data-position = '8'] {
            top: ${OLUI ? 33 : 16}%;
            left: calc(5% - 75px)
	    }
        .recover:not(.target):not(.glow):not(.selected) {
	        box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 1px, 
	          rgba(10, 155, 67, 1) 0 0 15px, 
	          rgba(10, 155, 67, 1) 0 0 15px !important
	    }			        	   
	    .dqzw-choice-cardpile {
	        position: absolute;
	        left: -20%;
	        bottom: 50%;
	        z-index: 3000
	    }
	    .dqzw-choice-cardpile > * {
	        position: absolute
	    }
	    .dqzw-presentation {
	        display: flex;
            justify-content: center;
            align-items: center;    
            /*flex-wrap: wrap;*/
            transition: none;
            padding: 0 2%;
            --dqzw-presentation-margin: 0
	    }
	    .dqzw-presentation > * {
	        position: relative
	    }
	    .dqzw-presentation > *:not(:last-child) {
            margin-right: var(--dqzw-presentation-margin)
        }
	    .player.selectable.isbutton:not(.target):not(.selected)::before {
	        background: none;
	        box-shadow: none
	    } 
	    .dqzw-boss-buffs {
	        position: relative			        	        
	        /*clip-path: circle(40% at 50% 50%);
            -webkit-clip-path: circle(40% at 50% 50%)*/
	    }
	    .dqzw-boss-buffs-container {
	        display: flex;
	        flex-wrap: wrap-reverse;
            justify-content: center;
            position: absolute;                                
            width: 80%;
            height: 25%;
            z-index: 10
        }
	    #arena:not(.oblongcard) .dqzw-boss-buffs-container {
	        top: -33%;
	        left: 380%
	    }
	    #arena.mobile .dqzw-boss-buffs-container {
	        top: -33%;
	        left: .5%;
	        width: 8%;
	        height: 34%
	    }
	    #arena.oblongcard:not(.mobile) .dqzw-boss-buffs-container {
	        top: -29%;
	        left: 0;
	    }
	    #arena.lslim_player .dqzw-boss-buffs-container {
	        height: 20%			        	    
	    }
	    #arena.oblongcard.decadeUI:not(.mobile) .dqzw-boss-buffs-container {
	        top: -30%
	    }
	    #arena.oblongcard[data-right-layout = on]:not(.mobile) .dqzw-boss-buffs-container {
	        top: -15%;
            left: -97%
	    }
	    .player:not([data-position = '0']) .dqzw-boss-buffs-container {
	        display: none
	    }
        .dqzw-boss-box-loading::after {
            content: '正在加载...';
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;	
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            font-size: 160%;
            background: rgba(0, 0, 0, .3);
        }
        .dqzw-boss-shop-type-button {
	        display: inline-flex;
            justify-content: center;
            align-items: center;
	        position: relative;
	        height: 100%;
	        width: 24%;
	        color: hsl(34, 33%, 18%);
	        text-shadow: none;
	        background-image: url(${url}/image/background/btn_notselected.png);
	        background-size: 100% 100%;
	        margin-right: 1%;
	        overflow: auto
	    }
	    .dqzw-boss-shop-type-button.dqzw-selected {
	        background-image: url(${url}/image/background/btn_selected.png)
	    }
	    .dqzw-boss-shop-commodity-container {
	        display: inline-flex;
	        flex-direction: column;
	        align-items: center;
	        position: relative;			        	        
            height: 100%;
	        width: 24.5%;
	        margin-right: .5%;
	        transform-style: preserve-3d;
	        --price: 100
	    }
	    .dqzw-boss-shop-commodity-container.removing
	    , .dqzw-boss-buffs.removing {
	        width: 0;
	        height: 0
	    }
	    .dqzw-boss-shop-commodity-container > * {
	        position: relative;
	        box-shadow: none;
	        white-space: normal	        	        
	    }
	    .dqzw-boss-shop-commodity-container.dqzw-boss-filter-brightness::after {
	        content: var(--prompt);
	        display: inline-block;
	        position: absolute;			      
	        left: 50%;
	        top: 25%;  	        
	        color: red;
	        text-shadow: none;
	        border: 1px solid red;
	        padding: 1px;
	        z-index: 10;
	        transform: translate(-50%, 50%) translateZ(-5px) rotate(20deg);
	        --prompt: '金币不足'
	    }
	    .dqzw-boss-shop-commodity-container > .dqzw-boss-shop-commodity {
	        display: flex;
	        flex-direction: column;
	        align-items: center;
	        width: 100%;
	        height: 70%;
	        background-size: 100% 100%
	    }
	    .dqzw-boss-shop-commodity-container > .dqzw-boss-shop-commodity-purchase {
	        display: flex;
	        align-items: center;
	        width: 76%;
	        height: 18%;
	        background-image: url(${url}/image/background/btn_purchase.png);
	        background-size: 100% 100%;
	        margin-top: 5%
	    }
	    .dqzw-boss-shop-commodity-purchase > .dqzw-boss-shop-commodity-price {
	        display: inline-flex;
	        justify-content: center;
            align-items: center;
	        left: 38%;
	        height: 100%;
	        width: 60%;
	        color: hsl(39, 43%, 31%);
	        font-family: dqzw_fangzhengzhunyuan;
	        text-shadow: none;
	        overflow: auto   			                
	    }
	    .dqzw-boss-priceChange .dqzw-boss-shop-commodity-purchase::before {
	        content: var(--price);
	        position: fixed;
	        top: 69%;
	        left: 16%;
	        height: 100%;
	        width: 60%;
	        color: hsla(39, 43%, 31%, .6);
	        font-family: dqzw_fangzhengzhunyuan;
	        text-shadow: none;
	        text-decoration: line-through white;
	        transform: scale(.7)
	    }
	    .dqzw-boss-shop-commodity > .text {
	        display: flex;
            justify-content: center;
            align-items: center;
	        position: relative;			        	        
	        height: 14.5%;
	        width: 55%;
	        color: white;
	        text-shadow: 1px 2px 2px hsla(42, 97%, 72%, .7);
	        margin-top: .5%;
	        overflow: auto
	    }
	    .dqzw-boss-shop-commodity > .dqzw-commodity-info {
	        position: relative;
	        height: 78%;
	        width: 96%;
	        margin-top: 2%;
	        overflow-y: auto
	    }
	    .dqzw-commodity-container-enter {
	        position: relative;			        	        
	        margin-left: 100%
	    }
	    :root {
	        --dqzw-boss-mode-start-page-font-size: ${wideScreen ? 3.8 : 4}vh
	    }
	    #window.connect-custom-page > .player
	    , #window.connect-custom-page > .menubutton
	    , #window.connect-custom-page > div > .shadowed
	    , .dqzw-mode-start-connect-players-container > .dqzw-mode-start-connect-players-system > .hidden {
	        display: none
	    }
	    .dqzw-mode-start-connect-players-container:not(.dqzw-mode-start-connect-players-unfold) > .dqzw-mode-start-connect-players-roomPassword {
	        opacity: 0 !important;
            pointer-events: none
	    }
	    .dqzw-mode-start-button {
	        display: flex;
            justify-content: center;
            align-items: center;
	        position: absolute;	
	        right: 5%;
	        bottom: 5%;
	        width: calc(var(--size) * 2);
	        height: calc(var(--size) * 2);
	        background: url(${url}/image/background/back_mode_start_button.png);
	        background-size: 100% 100%;
	        animation: dqzw-boss-unfold 1s linear 2s forwards;
	        clip-path: var(--clip);
            -webkit-clip-path: var(--clip);
            --size: ${wideScreen ? 20 : 24}vh;
	        --clip: polygon(0 0, 0 0, 0 100%, 0 100%);
	        --clip-unfold: polygon(0 0, 100% 0, 100% 100%, 0 100%);
	        --brightness: brightness(1.2);
	        --saturate: saturate(1.5)
	    }
	    .dqzw-mode-start-button:hover {
	        transform: scale(.9)
	    }
	    .dqzw-mode-start-button:hover::before {
	        filter: var(--brightness);
	        -webkit-filter: var(--brightness)
	    }
	    .dqzw-mode-start-button:hover::after {
	        filter: var(--saturate);
	        -webkit-filter: var(--saturate)
	    }
	    .dqzw-mode-start-button::before {
	        content: '';
	        width: var(--size);
	        height: var(--size);
	        background: url(${url}/image/icon/mode_start.png);
	        background-size: 100% 100%;
	        animation: dqzw-boss-unfold .8s linear 3s forwards;
	        clip-path: var(--clip);
            -webkit-clip-path: var(--clip)  	        		
	    }
	    .dqzw-mode-start-button::after {
	        content: '';
	        position: absolute;	
	        right: -12%;
	        bottom: 8%;
	        width: var(--size);
	        height: calc(var(--size) * 1.5);
	        background: url(${url}/image/icon/mode_start_button_fire.png);
	        background-size: 100% 100%;
	        animation: dqzw-boss-unfold .6s linear 3.8s forwards;
	        clip-path: var(--clip);
            -webkit-clip-path: var(--clip)  	        		
	    }
	    .dqzw-mode-start-level-info {
	        position: absolute;	
	        bottom: 4%;
	        left: 20%;
	        width: 60%;
	        height: 16%;
	        background-image: linear-gradient(
                to right 
                , hsla(25, 37%, 27%, 0.1)
                , hsl(25, 37%, 27%) 20% 80%
                , hsla(25, 37%, 27%, 0.1)
            );
            font-family: dqzw_fangzhengzhunyuan;
            animation: dqzw-boss-unfold 1s linear 2s forwards;
	        clip-path: var(--clip);
            -webkit-clip-path: var(--clip);
            --clip: polygon(43% 20%, 6% 52%, 46% 60%, 29% 30%, 46% 59%, 83% 53%, 45% 60%, 7% 52%, 49% 15%);
	        --clip-unfold: polygon(100% 0, 100% 0, 52% 45%, 29% 30%, 100% 0, 100% 100%, 0 100%, 0 0, 61% 0);
	        --filter: blur(0)		        	        
	    }
	    .dqzw-mode-start-level-info > * {
	        color: hsl(39, 87%, 90%);
	        filter: var(--filter2);
	        -webkit-filter: var(--filter2);
	        animation: dqzw-boss-filter 1s linear 2.3s forwards;
	        --filter2: blur(10px)			        	        
	    }
	    .dqzw-mode-start-level-info > .dqzw-mode-start-enemy-info {
	        display: flex;
	        flex-wrap: wrap;
	        position: absolute;	
	        left: 30%;
	        width: 60%;
	        height: 100%       	        
	    }
	    .dqzw-mode-start-level-info > .dqzw-mode-start-enemy-info > *:first-child {
	        display: flex;
	        position: relative;
	        width: 100%;	
	        font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * 1.3);
	        margin: .8% 0
	    }
	    .dqzw-mode-start-level-info > .dqzw-mode-start-enemy-info > *:last-child {
	        display: flex;
	        flex-flow: column wrap;
	        position: relative;
	        width: 100%;			
	        height: 80%;        	        
	        color: hsl(38, 29%, 66%);
	        font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * ${wideScreen ? .6 : .8});
	        overflow: auto			        	       
	    }
	    .dqzw-mode-start-level-info > .dqzw-mode-start-enemy-info > *:last-child > * {
	        display: flex;
	        align-items: center;
	        position: relative;
	        font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * ${wideScreen ? .6 : .8});			        	        
	        width: 35%;
	        height: 35%
	    }
	    .dqzw-mode-start-level-info > .dqzw-mode-start-enemy-info > *:last-child .dqzw-mode-enemy-info-text {
	        font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * ${wideScreen ? .6 : .8});			        	        
	        color: hsl(20, 90%, 41%)
	    }
	    .dqzw-mode-start-level-info > .dqzw-mode-start-level-choose {
	        display: flex;
            justify-content: center;
	        position: absolute;	
	        left: 12%;
	        top: 11.5%;
	        width: calc(11.5% * 1.2);
	        height: calc(66% * 1.2);			        	        
	        color: hsl(36, 91%, 82%);
	        font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * ${wideScreen ? 1.1 : 1.3});
	        font-family: dqzw_hanyiwenhei;
	        text-shadow: 0 0 2px hsla(36, 91%, 82%, .8);
	        padding-top: calc(var(--dqzw-boss-mode-start-page-font-size) * ${wideScreen ? 1.3 : 1.4});
	        clip-path: var(--clip);
            -webkit-clip-path: var(--clip);
	        --clip: polygon(0 0, 100% 0, 100% 55%, 0 55%)
	    }
	    .dqzw-mode-start-level-info > .dqzw-mode-start-level-choose::before {
	        content: '';
	        position: absolute;	
	        top: 15%;
	        width: 65%;
	        height: 65%;
	        box-shadow: 0 0 0 2px hsl(33, 43%, 27%)
	            , 0 0 0 3px hsl(32, 41%, 29%)
	            , 0 0 0 7px hsl(35, 34%, 36%)
	            , 0 0 0 8px hsl(32, 41%, 29%)
	            , 0 0 5px 10px hsl(36, 91%, 82%);
	        border-radius: 100%;			
	        background: linear-gradient(
	            hsl(32, 44%, 24%) 0% 25%,
	            transparent       	   
	        )			        	        
	    }
	    .dqzw-mode-start-level-info > .dqzw-mode-start-switch-button
	    , .dqzw-mode-start-close-btn > .dqzw-mode-start-help-btn {
	        display: flex;
            justify-content: center;
            align-items: center;
	        position: absolute;	
	        left: ${wideScreen ? 17 : 17.5}%;
	        top: 65.5%;
	        width: var(--size);
	        height: var(--size);
	        font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * ${wideScreen ? 1.1 : .9});
	        font-weight: 900;
	        color: hsl(46, 92%, 85%);
	        border: 1px solid hsl(24, 31%, 49%);
	        background: linear-gradient(
	            to bottom right,
	            hsl(23, 35%, 32%),
	            hsl(25, 34%, 42%)
	        );
	        transform: rotate(45deg);
	        --size: 5.5vh
	    }
	    .dqzw-mode-start-level-info > .dqzw-mode-start-switch-button *
	    , .dqzw-mode-start-close-btn > .dqzw-mode-start-help-btn * {
	        transform: rotate(-45deg)
	    }
	    .dqzw-mode-start-close-btn > .dqzw-mode-start-help-btn {
	        left: auto;
	        top: auto;
	        right: 12%
	    }
	    .dqzw-mode-start-system {			        	        
	        display: inline-flex;
            position: absolute;	
	        right: 0;
	        top: 10%			        	        
	    }
	    .dqzw-mode-start-system-button {
	        display: inline-flex;
	        align-items: center;
	        position: relative;
	        font-family: dqzw_hanyiwenhei;			        	        
	        margin-right: 5vw;
	        transition: all 1s;
	        --size: 4vw;
	    }
	    .dqzw-mode-start-system-button > * {
	        position: relative
	    }
	    .dqzw-mode-start-system-icon {
	        display: inline-flex;
            justify-content: center;
            align-items: center;
	        width: var(--size);
	        height: var(--size);
	        color: hsl(46, 92%, 85%);
	        font-family: dqzw_hanyiwenhei;
	        border-radius: 100%;			
	        border: 1px solid hsl(24, 31%, 49%);
	        background: linear-gradient(
	            to bottom,
	            hsl(23, 35%, 32%),
	            hsl(25, 34%, 42%)
	        );
	        margin-right: 1vw;
	        --text: '杀'		        	    
	    }
	    .dqzw-mode-start-system-icon.dqzw-boss-pictorial-manual::after {
	        content: var(--text);
	        display: inline-flex;
            justify-content: center;
            align-items: center;
            position: absolute;	
            left: 20%;
	        width: calc(var(--size) / 2);
	        height: calc(var(--size) / 1.8);
	        color: hsl(24, 39%, 31%);
	        font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * .8);
	        text-shadow: none;
	        background: hsl(45, 55%, 76%);
	        box-shadow: 0 0 0 1px hsl(24, 39%, 31%)
	            , 0 0 0 2px hsl(45, 55%, 76%);
	        border-radius: ${wideScreen ? 8 : 2}px;
	        transform: perspective(500px) rotateY(-40deg)
	    }
	    .dqzw-mode-start-system-icon.dqzw-boss-pictorial-manual::before {
	        content: '';
	        position: absolute;	
	        left: 30%;
	        width: calc(var(--size) / 2);
	        height: calc(var(--size) / 1.8);
	        color: hsl(24, 39%, 31%);
	        font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * .8);
	        text-shadow: none;
	        background: hsl(45, 55%, 76%);
	        box-shadow: 0 0 0 1px hsl(24, 39%, 31%)
	            , 0 0 0 2px hsl(45, 55%, 76%);
	        border-radius: ${wideScreen ? 8 : 2}px;
	        transform: perspective(500px) rotateY(-40deg) rotateX(15deg)			        	       
	    }
	    .dqzw-mode-start-system-icon.dqzw-boss-other::after {
	        content: var(--text);
	        display: inline-flex;
            justify-content: center;
            align-items: center;
            width: calc(var(--size) / 2);
	        height: calc(var(--size) / 1.8);
	        color: hsl(24, 39%, 31%);
	        font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * .8);
	        text-shadow: none;
	        background: hsl(45, 55%, 76%);
	        box-shadow: 0 0 0 1px hsl(24, 39%, 31%)
	            , 0 0 0 2px hsl(45, 55%, 76%);
	        border-radius: ${wideScreen ? 8 : 2}px
	    }
	    .dqzw-mode-start-system-card-pile-set {
	        display: inline-flex;
            justify-content: center;
            align-items: center;
	        position: absolute;	
	        top: 4%;
	        right: 7vw;
	        width: 13vw;
	        height: 6vh;
	        font-family: dqzw_fangzhengzhunyuan;
	        background: hsl(28, 36%, 20%);
	        border-radius: 3px;
	        transition: all 1s
	    }
	    .dqzw-mode-start-system-card-pile-set::before {
	        content: '';
	        right: 6vw;
	        width: 12vw;
	        height: 8vh;
	        background: hsl(28, 36%, 20%);
	        border-radius: 3px
	    }
	    .dqzw-mode-start-system-card-pile-set-btn {
	        display: inline-flex;
            justify-content: center;
            align-items: center;
            position: absolute;	
            top: 5%;
            right: -10%;
	        width: var(--size);
	        height: var(--size);
	        color: hsl(41, 78%, 63%);
	        text-shadow: none;
	        font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * 1.2);
	        font-weight: 800;
	        border: 1px solid hsl(24, 31%, 49%);
	        background: linear-gradient(
	            to bottom right,
	            hsl(23, 35%, 32%),
	            hsl(25, 34%, 42%)
	        );
	        transform: rotate(45deg);
	        transition: all 1s;
	        --size: 5vh
	    }
	    .dqzw-mode-start-system-card-pile-set-btn.dqzw-mode-start-system-card-pile-left-set-btn {
	        left: -10%
	    }
	    .dqzw-mode-start-system-card-pile-set-btn.dqzw-mode-start-system-card-pile-left-set-btn > *:first-child {
	        transform: rotate(-45deg);
	    }
	    .dqzw-mode-start-close-btn {
	        display: flex;
            align-items: center;
            position: absolute;	
            top: 2px;
            left: 2px;
            width: 28vw;
            height: 12vh;
            color: hsl(42, 97%, 75%);
            font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * 1.5);
            font-weight: 800;
            background: linear-gradient(
	            to right,
	            hsla(20, 29%, 20%, .8) 0% 80%,
	            transparent
	        );
            --text: ''
	    }
	    .dqzw-mode-start-close-btn::before {
	        content: '';
	        position: relative;
	        width: 20%;
	        height: 80%;
	        background: linear-gradient(
	            to right,
	            hsl(36, 67%, 61%),
	            hsl(38, 44%, 50%)
	        );
	        margin: 0 4%;
	        pointer-events: none;
	        clip-path: var(--clip);
            -webkit-clip-path: var(--clip);
            --clip: polygon(35% 15%, 35% 40%, 100% 40%, 100% 45%, 100% 85%, 83% 85%, 83% 60%, 35% 60%, 35% 85%, 0 50%)
	    }
	    .dqzw-mode-start-close-btn::after {
	        content: var(--text);
	        font-family: dqzw_yulan;                        
	        position: relative;
	        pointer-events: none
	    }
	    .dqzw-mode-start-mode-switch-btn {
	        display: flex;
	        flex-direction: column;
            align-items: center;
            position: absolute;	
            left: 4%;
            top: 8%;
            width: 10vw;
            height: 30vh;
            --background-color: hsl(36, 40%, 58%)
        }
        .dqzw-mode-start-mode-switch-btn::before {
            content: '';
            position: absolute;	
            width: 100%;
            height: 60%;
            background: linear-gradient(
                to top,
                var(--background-color),
                transparent
            );
            transform: rotateY(89deg);
            transform-origin: center
        }
        .dqzw-mode-start-mode-switch-btn > *:first-child {              
            position: absolute;	
            width: var(--size);
            height: var(--size);
            top: 60%;
            border-radius: 50%;
            box-shadow: inset calc(var(--size) / 6) calc(var(--size) / 3.8) 0 0 var(--background-color);
            transform: rotate(-59deg);
            --size: 5vh
        }
        .dqzw-mode-start-mode-switch-btn > *:first-child::after {
            content: '';
            position: absolute;	
            right: 25%;
            top: 44%;
            width: 40%;
            height: 40%;
            border-radius: 100%;
            background: var(--background-color)
        }
        .dqzw-mode-start-mode-switch-btn > .dqzw-mode-start-mode-switch-box {
            display: flex;
            justify-content: center;
            align-items: center;
	        position: absolute;	
	        top: 92%;
	        width: var(--wh);
	        height: var(--wh);
	        font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * .85);
	        font-weight: 900;
	        color: hsl(46, 92%, 85%);
	        border: 1px solid hsl(24, 31%, 49%);
	        background: linear-gradient(
	            to bottom right,
	            hsl(23, 35%, 32%),
	            hsl(25, 34%, 42%)
	        );
	        transform: rotate(45deg);
	        cursor: pointer;
	        zoom: 1.4;
	        --wh: 8vh
        }			        	 
        .dqzw-mode-start-mode-switch-btn > .dqzw-mode-start-mode-switch-box::before {
            content: '';
            position: absolute;	
            width: 120%;
            height: 120%;
            border: 1px solid hsl(27, 22%, 32%)
        }			
        .dqzw-mode-start-mode-switch-btn > .dqzw-mode-start-mode-switch-box::after {
            content: '切换模式';   
            position: absolute;	
            left: 5%;
            color: hsl(33, 69%, 77%);
            font-family: dqzw_jinshi;
            text-shadow: 0 0 4px hsl(25, 43%, 34%);
            transform: rotate(-45deg)
        }       	      
        .dqzw-mode-start-mode-switch-btn > *:last-child {
            position: absolute;	
            top: 147%;
            width: var(--wh);
            height: var(--wh);
            background: var(--background-color);
            transform: rotate(45deg);
            --wh: 1vw
        } 
        .dqzw-mode-start-mode-switch-btn::after {
            content: '';
            position: absolute;	
            top: 156%;
            width: var(--w);
            height: 60%;
            background: linear-gradient(
                to bottom,
                var(--background-color),
                transparent
            );
            --w: 1vw
        }
        .dqzw-mode-start-connect-players-container {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;	
            left: 90.5%;
            top: 16%;
            width: 60%;
            height: 50%;                 
            background-image: url(${url}/image/background/back_connect_players.png);
            background-size: 100% 100%;
            transition: all 1s                     
        }
        .dqzw-mode-start-connect-players-container > *:first-child {
            right: 97%;
            width: var(--wh);
            height: var(--wh);
            background-image: url(${url}/image/button/connect_players_unfold.png);
            background-size: 100% 100%;
            --wh: 8vh
        }            
        .dqzw-mode-start-connect-players-container > .dqzw-mode-start-connect-players-unfold:first-child {
            transform: rotate(180deg)
        } 
        .dqzw-mode-start-connect-players-container.dqzw-mode-start-connect-players-unfold {
            left: 40%
        }
        .dqzw-mode-start-connect-players-container > .dqzw-mode-start-connect-players-system {
            position: absolute;	
            left: 3.2%;
            top: 14%;
            width: 15%;
            height: 83.5%;
            overflow: scroll
        }       
        .dqzw-mode-start-connect-players-container > .dqzw-mode-start-connect-players-system > * {
            position: relative
        }
        .dqzw-mode-start-connect-players-container > .dqzw-mode-start-connect-players {
            display: flex;
	        flex-flow: column wrap;
	        justify-content: center;
            align-items: center;
            position: absolute;	
            top: 15.5%;
            left: 17%;
            width: 78%;
            height: 63%;
            overflow: scroll
        }
        .dqzw-mode-start-connect-players-container > .dqzw-mode-start-connect-players > .player {
            position: relative;
            /*inset兼容性不行owo*/
            left: auto;
            top: auto;
            right: auto;
            bottom: auto;
            zoom: var(--zoom);
            --zoom: .${wideScreen ? 7 : 45};
            margin: 1.3%
        }
        .dqzw-mode-start-connect-players-container > .dqzw-mode-start-connect-players-ip {
            display: flex;
	        justify-content: center;
	        position: absolute;	
            left: 44%;
            top: 1%;
            width: 12%;
            height: 8%;
            font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * 1.3)
        }                   
        /* 房间号与房间密码 */
        .dqzw-mode-start-connect-players-container > .dqzw-mode-start-connect-players-roomId
        , .dqzw-mode-start-connect-players-container > .dqzw-mode-start-connect-players-roomPassword {
            position: absolute;	
            left: 68%;
            top: 3%;
            color: white;
            text-stroke: 1px black;
            -webkit-text-stroke: 1px black;
            text-shadow: none;
            font-weight: 900;
            font-family: dqzw_hanyiwenhei                 
        }
        .dqzw-mode-start-connect-players-container > .dqzw-mode-start-connect-players-roomPassword {
            left: 12%
        }
        .dqzw-mode-start-connect-players-container > .dqzw-mode-start-connect-players-connect-mode-buttons {
            display: flex;
	        justify-content: space-evenly;
            align-items: center;
            position: absolute;	
            top: 78.5%;
            left: 17%;
            width: 78%;
            height: 14%
        }
        .dqzw-mode-start-connect-players-container > .dqzw-mode-start-connect-players-connect-mode-buttons > .dqzw-mode-start-connect-players-system-button {
            width: 14%;
            height: 90%
        }
        .dqzw-mode-start-connect-players-system-button {
            display: flex;
            justify-content: center;
            align-items: center;    
            position: relative;
            width: 78%;
            height: 14%;
            font-size: calc(var(--dqzw-boss-mode-start-page-font-size) * .85);	        	        
            background-image: url(${url}/image/background/btn_system.png);
            background-size: 100% 100%;
            cursor: pointer
        }
        .dqzw-boss-tip {
	        display: flex;
            justify-content: center;
            align-items: center;
	        position: absolute;	
	        top: -2%;
	        right: -2%;
	        width: var(--size);
	        height: var(--size);
	        background: red;
	        transform: rotate(45deg);
	        --size: 1vh
	    }
	    .dqzw-boss-tip::after {
	        content: '';
	        position: absolute;	
	        width: calc(var(--size) * 1.8);
	        height: calc(var(--size) * 1.8);
	        border: calc(var(--size) / 4) solid red;
	        border-radius: 0;
	        animation: dqzw-boss-flicker 2s infinite linear			        	        
	    }	    	    
    ` + (config ?
			`
      #arena[data-number] > .player[data-position = '0'] {
          bottom: 1%;
          left: calc(95% - 65px)
      }	                        
      #me {
          transform: translateX(-${wideScreen ? 11 : 12}%)
	  }` : '').replace(/(\.+(\d)+|\d+\.+\d+|\d+)v(w|h)/gi,
				function (val) {
					let height = /h$/i.test(val);
					return (document.documentElement['offset' + (height ? 'Height' : 'Width')]
						/ game.documentZoom
						/ 100 * (val.slice(0, -2) / 1.8)).toFixed(2) + 'px';
				}
			);
	document.head.appendChild(style);
	ui.dqzw_boss_style = style;
	return style.innerHTML;
};