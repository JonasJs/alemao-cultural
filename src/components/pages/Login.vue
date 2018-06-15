<template>
	<section class="login">
		<div class="container">
			<div class="row box-login">
				<div class="col-6 box-login-logo">
					<a class="navbar-brand" href="#">Alemão Cultura</a>
				</div>
				<div class="col-6 box-login-form">
					
					<form>
						<h2>Login</h2>
						<hr>
						<div class="form-group">
							<label for="exampleInputEmail1">Email</label>
							<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Senha</label>
							<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
						</div>
						<div class="login-buttons">
							<button class="btn buttonBase" v-on:click="login()" >Entrar</button>
							<router-link to="/cadastre-se" class="btn buttonBase button-base-custom">cadastre-se</router-link>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
// Adiciona o firebase
import { auth } from '@/firebase/firebase';
export default {
  name: 'Login',
  data (){
    return {
    	email: '',
    	password: ''
    }
  },
  methods:{
    	login(){
    		auth.signInWithEmailAndPassword(this.email, this.password).then(
    			(user) =>{
					auth.signInWithEmailAndPassword(this.email, this.password).then(
						(user) =>{
							this.$router.replace('perfil/adicionar');	
						}
					)	
    			},
    			(err) =>{
    				console.log('Ops' + err.message);
    			}
    		)
    	}
    }
}
</script>
