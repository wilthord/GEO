GameStateClass = Class.extend({

	var objGameState;

	startGame:function(){
		objGameState = new GameStateClass();
		objStartUp = new StartUpClass

		objGameState.canvasName = 'gameCanvas';
		objGameState.imageURL.push('spritesSheet.png');

		objStartUp.init(objGameState, finCarga);

	},

	finCarga:function(){
		// TODO RUN GAME
	}

});