'use strict';

function extJS_getOrgData(org_id) {
	let api;
	const client_id = 'dc386b8a5c899639d885';
	const client_secret = '47995b7755b2f20379c133ae9409e0177f377988';

	api = 'https://api.github.com/orgs/' + org_id +
		'?client_id=' + client_id +
		'&client_secret=' + client_secret;

	return api;
}

function extJS_setOrgData() {
	$('article').each(function () {
		const org_id = $(this).data('org-login');
		const api = extJS_getOrgData(org_id);

		$.getJSON(api, function (data) {
			const avatar = data.avatar_url;
			const description = data.description;
			const name = data.name;
			const repos = data.public_repos;
			const url = data.html_url;
			const created = new Date(data.created_at).toISOString().split("T")[0];
			const updated = new Date(data.updated_at).toISOString().split("T")[0];

			const el_login = $('article[data-org-login="' + org_id + '"]');

			el_login.find('[data-org-info="avatar"]').attr('src', avatar).attr('alt', org_id).attr('title', name);
			el_login.find('[data-org-info="name"]').text(name);
			el_login.find('[data-org-info="description"]').text(description);
			el_login.find('[data-org-info="url"]').attr('href', url).text('@' + org_id);
			el_login.find('[data-org-count="repos"]').text(repos);
			el_login.find('[data-org-time="created"]').text(created);
			el_login.find('[data-org-time="updated"]').text(updated);
		});
	});
}

/**
 * Loading functions.
 * ---------------------------------------------------------------------------------------------------------------------
 */

$(function () {
	//extJS_particlesJS('particles-js', 'assets/js/particles.dark.json');
	extJS_setOrgData();
});
