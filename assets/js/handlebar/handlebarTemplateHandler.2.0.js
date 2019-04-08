//var appsettingsobject = require("./../appsettings.js");
var handelbarhelpers = require('./handlebarHelpers.js');

const InjecthtmlTemplate = () => {
	function inject(targetClass, usetemplateName, currentdata, callback) {
		handelbarhelpers.init();

		$.get(
			usetemplateName,
			function(data) {
				var temptpl = Handlebars.compile(data);
				$(targetClass).html(temptpl(currentdata));
				callback();
			},
			'html'
		);
	}

	return {
		injectTemplate: inject
	};
};

export default InjecthtmlTemplate;
