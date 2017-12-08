<template>
	<nav class="navbar navbar-expand-lg ">
		<div class="container">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<a class="navbar-brand" href="#">Alemão Cultura</a>

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
				<button type="button" class="btn buttonBase button-base-custom">
					<router-link to="/entrar">Entrar</router-link>
				</button>
				<button type="button" class="btn buttonBase">
					<router-link to="/cadastre-se">cadastre-se</router-link>
				</button>

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
