'use strict';

function extJS_getUserOrgs() {
	const api = extJS_getUserOrgsAPI();
	let out;

	$.ajax({
		url: api,
		method: 'get',
		dataType: 'json'
	}).done(function (data) {
		const j = data.length;
		let i = 0;

		for (; i < j; i++) {
			const login = data[i].login;
			const api = extJS_getOrgAPI(login);

			$.ajax({
				url: api,
				method: 'get',
				dataType: 'json',
				beforeSend: function () {
					$('body').append('<div id="data-loader"><span class="icon"><i class="fas fa-cog fa-spin fa-lg"></i></span></div>');
				},
				success: function () {
					$('#get-user-orgs').append(out);
				},
				error: function () {
				},
				complete: function () {
					$('#data-loader').remove();
				}
			}).done(function (data) {
				const login = data.login;
				const avatar = data.avatar_url;
				const description = data.name;

				out = '';
				out += '<div class="columns"><div class="column">';
				out += '<article class="card" data-org-login="' + login + '">';
				out += '<div class="card-content"><div class="media">';
				out += '<div class="media-left"><figure class="image is-64x64"><img title="" src="' + avatar + '" alt="" data-org-info="avatar" /></figure></div>';
				out += '<div class="media-content"><h4 class="title is-4" data-org-info="name"></h4><p class="subtitle is-6"><a href="" data-org-info="url"></a></p></div></div><div class="content"><p data-org-info="description">' + description + '</p>';
				out += '</div></div>';
				out += '</article>';
				out += '</div></div>';
			});
		}
	});
}

$(function () {
	extJS_getUserOrgs();
});
