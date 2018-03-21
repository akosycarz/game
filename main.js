var game = new Phaser.Game(400, 500);

var mainState = {
	preload: function(){
		//wrzucanie plików z obrazkami i zdjęciami i audio
		game.load.image('bird', 'bird.png');

	},

	create: function () {
		//ustawianie na miejscuobiektów, które mają się pojawić po starcie gry
		game.stage.backgroundColor = '#b8e9f2';// zmieniliśmy kolor tła
		game.physics.startSystem(Phaser.Physics.ARCADE); //włączamy fizykę arkadową

		this.bird = game.add.sprite(100, 400, 'bird');

		game.physics.arcade.enable(this.bird); //grawitacja dotyczy sprita bird

		this.bird.body.gravity.y = 1000;
		var


	},

	upload: function(){
		//co ma się zmieniać w czasie

	},
};

game.state.add('main', mainState);
game.state.start('main');