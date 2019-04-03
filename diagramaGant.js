const Tarea = (function()
{
	const _id = new WeakMap();
	const _fechaInicio = new WeakMap();
	const _fechaTermino = new WeakMap();
	const _nombre = new WeakMap();
	const _tipo = new WeakMap();
	const _avance = new WeakMap();
	const _padre = new WeakMap();
	const _prdecesor = new WeakMap();

	class Tarea
	{
		constructor(id, fechaInicio, fechaTermino, nombre, avance, padre, predecesor)
		{
			_id.set(this, id);
			_fechaInicio.set(this, fechaInicio);
			_fechaTermino.set(this, fechaTermino);
			_nombre.set(this, nombre);
			_avance.set(this, avance);
			_padre.set(this, padre);
			_prdecesor.set(this, predecesor);
		}

		getId()
		{
			return _id.get(this);
		}

		getFechaInicio()
		{
			return _fechaInicio.get(this);
		}

		getFechaTermino()
		{
			return _fechaTermino.get(this);
		}

		getAvance()
		{
			return _avance.get(this);
		}

		getPadre()
		{
			return _padre.get(this);
		}

		getPredecesor()
		{
			return _prdecesor.get(this);
		}

		getTipo()
		{
			return _tipo.get(this);
		}

		getTiempoRestante()
		{
			//Verificamos si el año de la fecha Inicial es el mismo de la fecha Termino 
			if(_fechaInicio.get(this).getFullYear() != _fechaTermino.get(this).getFullYear())
			{
				//Si no es el mismo año, se resta la Termino a la Inicial y lo guardamos
				let aniosRes = _fechaTermino.get(this).getFullYear() - _fechaInicio.get(this).getFullYear();
			}

			//Verificamos si el mes de la fecha Inicial es el mismo de la fecha Termino 
			if (_fechaInicio.get(this).getMonth() != _fechaTermino.get(this).getMonth()) 
			{
				//Si no es el mismo mes, se resta la Termino a la Inicial y lo guardamos
				let mesesRes = _fechaTermino.get(this).getMonth() - _fechaInicio.get(this).getMonth();
				
				//si es negativo, lo hacemos positivo
				if (mesesRes<0) 
				{
					mesesRes = mesesRes * (-1);
				}	
			}

			//Verificamos si el dia de la fecha Inicial es el mismo de la fecha Termino
			if (_fechaInicio.get(this).getDate() != _fechaTermino.get(this).getDate()) 
			{
				//Si no es el mismo dia, se resta la Termino a la Inicial y lo guardamos
				let diasRes = _fechaTermino.get(this).getDate() - _fechaInicio.get(this).getDate();
				
				//si es negativo, lo hacemos positivo
				if (diasRes<0) 
				{
					diasRes = diasRes * (-1);
				}	
			}
		}

		agregarTarea()
		{

		}

		dibujarTarea()
		{

		}

		ocultarHijos()
		{

		}

		eliminarTarea()
		{

		}

		agregarResponsable()
		{

		}

		modificarAvance()
		{

		}

		asignarPadre()
		{

		}
	}

	return Tarea;

}());

function crearTarea()
{
	let fecha1 = new Date(2019, 0, 25);
	let fecha2 = new Date(2020, 5, 12);
	let tarea = new Tarea(0, fecha1, fecha2, "Tarea1", 10, null, null); //crear objeto

	alert(tarea.getFechaInicio());
}