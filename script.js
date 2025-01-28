function actividade() {

	let nome = document.getElementById('nome').value
	let tipo = document.getElementById('tipo').value
	let local = document.getElementById('local').value
	let data = document.getElementById('data').value
	const item_tabela = document.getElementById('item_tabela')
	//let th = createElement('th')
	let tr = document.createElement('tr')

	tr.innerHTML = `
		
			<th>${nome}</th>
			<th>${tipo}</th>
			<th>${local}</th>
			<th>${data}<span class="span"></span><button onclick="removerElemento ()" class="btn btn-danger">
				<img src="trash-2.svg">
			</button></th>
	`

	item_tabela.appendChild(tr)
	apagar ()
	//marcador()

	
}

function apagar (){
	let nome = document.getElementById('nome').value =""
	let tipo = document.getElementById('tipo').value =""
	let local = document.getElementById('local').value =""
	let data = document.getElementById('data').value =""


}

function removerElemento (){
	//let remover = document.getElementById('item_tabela')
	let remFilho = document.querySelector('#item_tabela tr')

	//remover.removeChild(remFilho)

	remFilho.remove() 
}

/*function marcador() {
	let marcarEl = document.querySelector('#item_tabela tr')
	
	marcarEl.addEventListener('click', () => {
		marcarEl.classList = 'marcar'

		//alert('ola mundo')
})
} */
