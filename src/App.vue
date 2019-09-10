<template>
	<div id="app">
		<nav class="navbar navbar-dark bg-primary">
  			<a class="navbar-brand" href="#">Buscador de empresa</a>
		</nav>

		<div class="container">
			<div id="error">
				<p>{{ statusText }}</p>
			</div>
			<form @submit.prevent="salvar">
				<div>
					<label>Digite o CNPJ: </label>
					<input type="text" id="cnpj" name="" v-model="cnpj">
					<button>Buscar</button>
				</div>
				
				<div id="data_situacao">
					<label>Data situação: </label>
					{{ company.data_situacao }}	
				</div>

				<div id="atividade_principal">
					<table class="table">
						<thead>
						    <tr>
						      <th scope="col">Código</th>
						      <th scope="col">Atividade principal</th>
						    </tr>
						</thead>
						<tbody v-for="atividade in company.atividade_principal">
							<tr>
							  <th scope="row">{{ atividade.code }}</th>
						      <td>{{ atividade.text }}</td>
						    </tr>
						</tbody>
					</table>
				</div>

				<div id="atividades_secundarias">
					<table class="table">
						<thead>
						    <tr>
						      <th scope="col">Código</th>
						      <th scope="col">Atividades secundárias</th>
						    </tr>
						</thead>
						<tbody v-for="atividade in company.atividades_secundarias">
							<tr>
						      <th scope="row">{{ atividade.code }}</th>
						      <td>{{ atividade.text }}</td>
						    </tr>
						</tbody>
					</table>
				</div>

				<div id="bairro">
					<label>Bairro: </label>
					{{ company.bairro }}
				</div>

				<div id="capital_social">
					<label>Capital social: </label>
					{{ company.capital_social }}
				</div>

				<div id="cep">
					<label>CEP:</label>
					{{ company.cep }}
				</div>

				<div id="cnpj">
					<label>CNPJ: </label>
					{{ company.cnpj }}
				</div>

				<div id="complemento">
					<label>Complemento:</label>
					{{ company.complemento }}
				</div>

				<div id="data_situacao">
					<label>Data situação:</label>
					{{ company.data_situacao }}
				</div>

				<div id="data_situacao_especial">
					<label>Data situação especial:</label>
					{{ company.data_situacao_especial }}
				</div>

				<div id="email">
					<label>E-mail:</label>
					{{ company.email }}
				</div>

				<div id="fantasia">
					<label>Fantasia:</label>
					{{ company.fantasia }}
				</div>
			</form>
		</div>
	</div>
</template>

<script>

  import Company from './services/company'

  export default{	

  	data(){

  		return {
  			cnpj: '',
  			company: '',
  			statusText: ''
  		}
  	},

  	mounted(){
	    /*

	    */
	},

	methods:{
		salvar(){
			Company.show(this.cnpj).then(resposta =>{
				
				//console.log(resposta.data)
				this.company = resposta.data
				this.cnpj = ''
				this.statusText = ''
			}).catch(e => {
				
				this.statusText = e.response.statusText
			})
		}
	}
  }

</script>

<style>

</style>
