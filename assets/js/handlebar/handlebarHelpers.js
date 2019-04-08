//var _ = require("lodash");
//var $ = require("jquery");
//var appsettingsobject = require("./../appsettings.js");
//var appsettings = appsettingsobject.config;

module.exports = {
	init: function() {
		Handlebars.registerHelper('userRegQuest', function(
			questcompleted,
			uppdrag
		) {
			let retobj = '';
			switch (questcompleted) {
				case -1:
					retobj = '<i class="icon-plus" style="color:#ccc;"></i> ' + uppdrag;
					break;
				case 0:
					retobj =
						'<i class="icon-ok-circle" style="color:orange;"></i> ' + uppdrag;
					break;
				case 1:
					retobj =
						'<i class="icon-ok" style="color:green;"></i> ' +
						uppdrag +
						' <span style="color:green;"> - KLART</span>';
					break;
				default:
			}

			return retobj;
		});

		Handlebars.registerHelper('userRegQuestlist', function(
			questcompleted,
			uppdrag
		) {
			let retobj = '';
			switch (questcompleted) {
				case 1:
					retobj =
						'<i class="icon-ok" style="color:green;"></i> ' +
						uppdrag +
						' <span style="color:green;"> - KLART</span>';
					break;
				default:
					retobj =
						'<i class="icon-ok-circle" style="color:#666;"></i> ' + uppdrag;
					break;
			}

			return retobj;
		});

		Handlebars.registerHelper('userRegQuestInfo', function(questcompleted) {
			let retobj = '';
			switch (questcompleted) {
				case -1:
					retobj =
						'<i class="icon-plus" style="color:#ccc;"></i> Inte registrerat!';
					break;
				case 0:
					retobj =
						'<i class="icon-ok-circle" style="color:orange;"></i> Inte klart!';
					break;
				case 1:
					retobj =
						'<span style="color:green;"> <i class="icon-ok"></i> Klart!</span>';
					break;
			}

			return retobj;
		});

		Handlebars.registerHelper('regUnreg', function(quid, questcompleted) {
			let retobj = '';

			switch (questcompleted) {
				case -1:
					retobj =
						'<button id="bb_aj_confirm" data-questid="' +
						quid +
						'">Registrera uppdrag</button>';
					break;

				case 0:
					retobj =
						'<button id="bb_aj_unconfirm" data-questid="' +
						quid +
						'">Avregistrera uppdrag</button>';
					break;

				case 1:
					retobj =
						'<div class="bb_aj_questFormCompleted"><h4>Uppdraget ' +
						String.fromCharCode(228) +
						'r klart!</h4></div>';
					break;
			}

			return retobj;
		});
	}
};
