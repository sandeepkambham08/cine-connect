<script lang="ts">
	import '../app.postcss'
</script>

<div class="safe-area-height bg-base text-on-base min-h-screen">
	<div class="safe-area-top-padding">
		<slot />
	</div>
</div>

<style>
	.safe-area-top-padding {
		padding-top: env(safe-area-inset-top);
	}

	.safe-area-height {
		height: max(3rem + env(safe-area-inset-top), 5rem);
	}
</style>
