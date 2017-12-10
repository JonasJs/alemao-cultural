<template>
	<section class="login">
		<div class="container">
			<div class="row box-login">
				<div class="col-6 box-login-logo">
					<a class="navbar-brand" href="#">Alemãaao Cultura</a>
				</div>
				<div class="col-6 box-login-form">
					<form>
						<h2>Cadastro</h2>
						<hr>
						<div class="form-group">
							<label for="exampleInputEmail1">Email</label>
							<input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Digite seu email" v-model="email">
							<small>{{ emailError }}</small>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Senha</label>
							<input type="password" class="form-control" placeholder="Password" v-model="password">
							<p class="regra">Senha com mais de 6 caracteres</p>

						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Digite sua Senha Novamente</label>
							<input type="password" class="form-control" placeholder="Password" v-model="repeatPassword">
							<small>{{ passwordError }}</small>
						</div>
						<div class="login-buttons">
							<button class="btn buttonBase" v-on:click="SignUp()">cadastre-se</button>
							<router-link to="/entrar" class="btn buttonBase button-base-custom">Entrar</router-link>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
// Adiciona o firebase
import { auth } from '../../firebase/firebase';

export default {
	name: 'SignUp',
	data (){
		return {
			email: '',
			emailError: '',

			password: '',
			repeatPassword: '',
			passwordError: '',

			validation: false
		}
	},
	methods:{
		SignUp(){
			//Validação da email
			if(this.email == ''){
				this.emailError = 'Por Favor digite seu email'
			}else{
				this.emailError = ''
			}
			//Validação da senha
			if(this.password != this.repeatPassword) {
				this.passwordError = '*A sua senha não correspondem';

			}else if(this.password == '' || this.repeatPassword == ''){
				this.passwordError = '*Por favor preencha o campo de senha';

			}else if(this.password.length < 6){
				this.passwordError = '*Sua senha deve ter mais de 6 caracteres';
			
			}else{
				this.passwordError = '';
				//Registra os usuarios
				 auth.createUserWithEmailAndPassword(this.email, this.password).then(
					(user) => {
						this.$router.replace('profile');
					},
					(err)=>{
						console.log('Ops' + err.message);
					}
				);
			}
		}
	}
}
</script>
<style>	
	small{
		color: #cb0707;
	}
	.regra{
		font-size: 10px;
    	color: #b7b8b8;
	}
</style>
