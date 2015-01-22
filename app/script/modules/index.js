define([
		'jquery/jquery.fullPage'
	],
	function(
		fullPage
	) {

		function initView() {
			 $('#fullpage').fullpage();
		}

		function show() {
			initView();
		}

		function preload() {
			return module;
		}
		var module = {
			preload: preload,
			show: show
		};
		return module;
	}
)