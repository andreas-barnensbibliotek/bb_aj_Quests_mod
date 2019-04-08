const appsettings = () => {
	// Localhost
	// let _apiserver = 'http://localhost:59015';
	// let _dnnURL = 'http://localdev.kivdev.se';
	// DEV1
	let _apiserver = 'http://dev1.barnensbibliotek.se:8080';
	let _dnnURL = 'http://dev1.barnensbibliotek.se';

	//DEV NYTT SERVER
	//let _apiserver = "http://dev1.barnensbibliotek.se:8080";
	//let _dnnURL = "http://nytt.barnensbibliotek.se";

	//Live SERVER
	//let _apiserver = "https://www2.barnensbibliotek.se";
	//let _dnnURL = "https://www.barnensbibliotek.se";

	let _devkey = 'alf';
	let _apidevkeyend = '/devkey/' + _devkey + '/?type=json';
	let _localOrServerURL = '';
	let _htmltemplateURL = '/desktopModules/bb_aj_Quest_mod/htmltemplates/';

	//// HANDLEBAR TEMPLATE
	let _hb_questinfo_template =
		_dnnURL + _htmltemplateURL + 'questinfoTemplate.txt';

	let _hb_questRegistrerat_template =
		_dnnURL + _htmltemplateURL + 'questRegistreratTemplate.txt';

	let _hb_questUnRegistrerat_template =
		_dnnURL + _htmltemplateURL + 'questUnRegistreratTemplate.txt';

	let _hb_ListQuest_template =
		_dnnURL + _htmltemplateURL + 'listQuestTemplate.txt';
	//// API
	let _fn_questinfo = function() {
		return _apiserver + '/Api_v3.1/quest/typ/Qinf' + _apidevkeyend;
	};
	let _fn_chkquestexist = function() {
		return _apiserver + '/Api_v3.1/quest/typ/chkQ' + _apidevkeyend;
	};
	let _fn_ListAllQuest = function() {
		return _apiserver + '/Api_v3.1/quest/typ/LstQ' + _apidevkeyend;
	};
	let _fn_RegisterQuest = function() {
		return _apiserver + '/Api_v3.1/quest/typ/regQ' + _apidevkeyend;
	};
	let _fn_unRegisterQuest = function() {
		return _apiserver + '/Api_v3.1/quest/typ/rmQ' + _apidevkeyend;
	};

	// let _fn_delBooklist = function (booklistid, userid) {
	//     return _apiserver + "/Api_v3.1/booklist/typ/delbooklist/blistid/" + booklistid + "/value/0/uid/" + userid + _apidevkeyend;
	// };

	//// API

	// let _fn_delskrivbokenItem = function () {
	//     return _apiserver + "/Api_v3.1/skrivboken/typ/deleteskrivbok/devkey/" + _devkey //+ _apidevkeyend;
	// };

	// let _fn_delBoktipsItem = function () {
	//     return _apiserver + "/Api_v3.1/boktips/typ/deleteboktips/devkey/" + _devkey //+ _apidevkeyend;
	// };

	// INSTÄLLNINAR
	// AVATAR src
	// let _fn_avatar = function (userid) {
	//     return _apiserver + "/Api_v3.1/settings/cmdtyp/get/uid/" + userid + "/setid/0/setval/0/devkey/" + _devkey + "/?type=jsonp";
	// };

	// // användarens senaste boktips
	// let _fn_userlatestboktips = function (userid) {
	//     return _apiserver + "/Api_v3.1/boktips/typ/ByUserIdLatest/val/" + userid + "/txtval/0/devkey/" + _devkey + "/?type=jsonp";
	// }

	return {
		apiserver: _apiserver,
		dnnURL: _dnnURL,
		localOrServerURL: _localOrServerURL,
		htmltemplateurl: _dnnURL + _htmltemplateURL,
		devkey: _devkey,
		handlebartemplate: {
			hb_questinfo_tmp: _hb_questinfo_template,
			hb_questReg_tmp: _hb_questRegistrerat_template,
			hb_questUnReg_tmp: _hb_questUnRegistrerat_template,
			hb_listQuest_tmp: _hb_ListQuest_template
		},
		api: {
			questlist: {
				questinfo: _fn_questinfo,
				chkquest: _fn_chkquestexist,
				listQuest: _fn_ListAllQuest
			},
			questcommand: {
				regQuest: _fn_RegisterQuest,
				unregQuest: _fn_unRegisterQuest
			},
			devkeyend: _apidevkeyend
		},
		debug: 'false'
	};
};

export default appsettings;
