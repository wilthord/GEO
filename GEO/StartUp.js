StartUpClass = Class.extend({

	/**
	* Función a invocar cuando se termine el cargue.
	*/
	finCallBack:function(){},

	/** Variable que maneja las tareas que se han registrado para realizar **/
	tareasPendientes:0,

	/** Varaible que indica cuantas tareas se han realizado **/
	tareasRealizadas:0,

	/** 
	 * Metodo que inicializa el juego, cargue de variables, como el contexto. ademas se cargan las imagenes, animaciones y otros recursos
	 * Parametros
	 * iniGameState : GameStateClass  - Objeto que maneja el estado del juego
	 * GECallBack   : Function()   - Funcion que se llamará cuando el cargue de todos los elementos de inicio del juego estén cargados.
	 *								  Preferiblemente se debe encontrar en GameEngineClass
	 */
	init:function(iniGameState, GECallBack){
		this.registrarCallBack(GECallBack);
		this.obtenerContexto(iniGameState);
		this.cargarImagenes(iniGameState);
		setInterval(this.validarFinCargue, 1000 / 4);	//Invocamos la funcion que valida el proceso de cargue 4 veces por cada segundo
	},


	/**
	* Metodo que registra la función a invocar cuando se termine el cargue.
	*/
	registrarCallBack:function(GECallBack){
		this.finCallBack = GECallBack;
	},

	/**
	 * Metodo que valida si ya se cargaron todos los elementos. se calcula validando si tareasRealizadas===tareasPendientes. 
	 * ¡¡¡IMPORTANTE!!!: la primera invocación a este metodo, se debe realizar luego de establecer tareasPendientes en su valor final.
	 */
	validarFinCargue:function(){

		if(tareasPendientes===tareasRealizadas){
			this.finCallBack();
		}else{
			/** TODO: mostrar el progreso del cargue **/
		}

	}

});