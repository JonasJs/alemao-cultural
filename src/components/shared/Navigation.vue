<template>
	<nav class="navbar navbar-expand-lg ">
		<div class="container">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
				<span class="fa fa-bars" aria-hidden="true"></span>
			</button>
			<router-link to="/" class="navbar-brand" href="#">Alemão Cultura</router-link>

			<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
				<ul class="navbar-nav ml-auto mt-2 mt-lg-0">
					<li class="nav-item active">
						<router-link to="/" class="nav-link">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/" class="nav-link">Buscar Eventos</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/" class="nav-link">Categorias</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/" class="nav-link">Sobre</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/" class="nav-link">Contato</router-link>
					</li>
				</ul>

				<router-link to="/entrar" class="btn buttonBase button-base-custom">Entrar</router-link>
				<router-link to="/cadastre-se" class="btn buttonBase">cadastre-se</router-link>

			</div>
		</div>
	</nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
     
    }
  }
}


</script>
