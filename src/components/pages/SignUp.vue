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
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Senha</label>
							<input type="password" class="form-control" placeholder="Password" v-mode="password">
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Digite sua Senha Novamente</label>
							<input type="password" class="form-control" placeholder="Password" v-mode="repeatPassword">
							<small>{{ passwordError }}</small>
						</div>
						<div class="login-buttons">
							<router-link to="" class="btn buttonBase ">cadastre-se</router-link>
							<router-link to="/entrar" class="btn buttonBase button-base-custom">Entrar</router-link>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: 'SignUp',
  data (){
    return {
    	email: '',
    	emailError: false,

    	password: '',
    	repeatPassword: '',
    	passwordError: ''
    }
  },
  methods:{

  }
}
</script>
