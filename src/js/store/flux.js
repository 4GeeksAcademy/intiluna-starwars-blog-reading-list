const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			characters: [],
			planets: [],
			starships:[],
			detalle:{},
			favoritos: [],
			

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
				
				
				
			},

			// get characters
			getCharacters:()=> {
				fetch("https://www.swapi.tech/api/people", {
					method: "GET"
				})
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => setStore({ characters: data.results }))
					.catch(error => console.log(error));
			},

			// get planets
			getPlanets:()=> {
				fetch("https://www.swapi.tech/api/planets", {
					method: "GET"
				})
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => setStore({ planets: data.results }))
					.catch(error => console.log(error));
			},

			// get starships
			getStarships:()=> {
				fetch("https://www.swapi.tech/api/starships", {
					method: "GET"
				})
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => setStore({ starships: data.results }))
					.catch(error => console.log(error));
			},

			// get detalle
			getDetalle:(type,id)=> {
				fetch(`https://www.swapi.tech/api/${type}/${id}`, {
					method: "GET"
				})
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => setStore({ detalle: data.result.properties }))
					.catch(error => console.log(error));
			},

			addToFavoritos:(name)=>{
				setStore({favoritos: getStore().favoritos.concat(name)})
			},

			deleteFromFavoritos:(name)=>{
				setStore({favoritos: getStore().favoritos.filter((elemento)=>elemento!=name)})
				//const nuevaLista = tareasApi.filter((elemento)=>elemento!=item)
        
			},

			handleFavorito:(name)=>{
				//e.preventDefault();
				if(getStore().favoritos.indexOf(name) !==-1 ){
				console.log("favorito ya existe...eliminamos")
				getActions().deleteFromFavoritos(name)


				} else {
				getActions().addToFavoritos(name);
				}
		
        
			}

			
		}
	};
};

export default getState;
