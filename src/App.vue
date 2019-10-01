<template>
	<div id="app">
		

		<div class="container">
			<div class="jumbotron text-center">
			  <h1>CNPJ<span><strong style="color: #28a745;">Á</strong></span></h1>
			  <p>Resize this responsive page to see the effect!</p> 
			</div>

			<div style="text-align: center;padding-left: 258px;padding-right: 200px;padding-top: 30px;padding-bottom: 30px;">
				<div id="error">
					<p>{{ statusText }}</p>
				</div>
				
				<form @submit.prevent="salvar" class="form-inline">
					<div class="input-group col-xs-12 col-lg-8">
						<input v-model="cnpj" type="text" id="search_cnpj" class="form-control" placeholder="Digite um CNPJ">
					</div>
					<div class="col-xs-12 col-lg-4">
						<button id="btn_search" type="submit" class="btn btn-primary" style="width: 100%;">Buscar</button>
					</div>
				</form>
			</div>
			
				
				<div class="row">
					<!--<div class="">
						<label>Data situação: </label>
						{{ company.data_situacao }}	
					</div>-->
					
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

				<div class="row">
					
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
				
				<div class="row">
					<div class="col-xs-12 col-lg-12" style="display: grid;">
						<label>Fantasia:</label>
						{{ company.fantasia }}
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-lg-12" style="display: grid;">
						<label>Nome:</label>
						{{ company.nome }}
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-lg-12" style="display: grid;">
						<label>Natureza jurídica:</label>
						{{ company.natureza_juridica }}
					</div>
				</div>
				
				<div class="row">
					<div class="col-xs-12 col-lg-4" style="display: grid;">
						<label>Data abertura:</label><br /> 
						{{ company.abertura }}
					</div>
					<div class="col-xs-12 col-lg-4" style="display: grid;">
						<label>Capital social: </label>
						<label>{{ company.capital_social }}</label>
					</div>
					<div class="col-xs-12 col-lg-4" style="display: grid;">
						<label>CNPJ: </label>
						{{ company.cnpj }}
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-lg-10" style="display: grid;">
						<label>Logradouro:</label>
						{{ company.Logradouro }}
					</div>
					<div class="col-xs-12 col-lg-2" style="display: grid;">
						<label>Número:</label>
						{{ company.numero }}
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-lg-4" style="display: grid;">
						<label>Bairro:</label>
						{{ company.bairro }}
					</div>
					<div class="col-xs-12 col-lg-4" style="display: grid;">
						<label>Complemento:</label>
						{{ company.complemento }}
					</div>
					<div class="col-xs-12 col-lg-4" style="display: grid;">
						<label>CEP:</label>
						{{ company.cep }}
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-lg-4" style="display: grid;">
						<label>Municipio:</label>
						{{ company.municipio }}
					</div>
					<div class="col-xs-12 col-lg-4" style="display: grid;">
						<label>UF:</label>
						{{ company.uf }}
					</div>
					<div class="col-xs-12 col-lg-4" style="display: grid;">
						<label>Tipo:</label>
						{{ company.tipo }}
					</div>	
				</div>
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
				
				console.log(resposta.data)
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
	@font-face {
	     font-family: helveticaneue;
	     src: url('components/courier-prime/Courier Prime.ttf');
	}
	p {
    	font:36px helveticaneue;
	}
</style>
