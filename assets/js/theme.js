'use strict';

/**
 * Theme. Payment Target.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_getRepoData() {
	let file = 'https://api.github.com/orgs/factory-08?access_token=bf487b9947632d1701f1a8e776a552c09432d270';
	$.getJSON(file, function (data) {
		const repoName = data.name;
		$('[data-org-info="name"]').text(repoName);
	});
}

/**
 * Loading functions.
 * ---------------------------------------------------------------------------------------------------------------------
 */

$(function () {
	extJS_particlesJS('particles-js', 'assets/js/particles.dark.json');
	extJS_getRepoData();
});
