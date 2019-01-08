'use strict';

/**
 * Theme. Payment Target.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_getRepoData() {
	let org = $('article').data('org-login');
	let file = 'https://api.github.com/orgs/' + org +
	'?client_id=dc386b8a5c899639d885' +
	'&client_secret=47995b7755b2f20379c133ae9409e0177f377988';

	$.getJSON(file, function (data) {
		const orgName = data.name;
		$('[data-org-info="name"]').text(orgName);
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
