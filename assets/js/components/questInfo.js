import serverRequesthandler from '../components/serverRequestHandler';
import appsettingHandler from '../appsettings';

const questinfo = () => {
	let appsettings = appsettingHandler();
	let requestHandler = serverRequesthandler();

	function showQuestinfo(questid, usrid, callback) {
		let requestdata = {
			apiurl: appsettings.api.questlist.questinfo(),
			handlebartemplate: appsettings.handlebartemplate.hb_questinfo_tmp,
			cssID: '#bb_aj_GenericModalContainer',
			postdata: {
				Userid: usrid,
				QuestID: questid
			}
		};

		render(requestdata, callback);
	}

	function isQuestReg(questid, usrid, callback) {
		let requestdata = {
			apiurl: appsettings.api.questlist.questinfo(),
			handlebartemplate: appsettings.handlebartemplate.hb_questReg_tmp,
			cssID: '#bb_aj_GenericModalContainer',
			postdata: {
				Userid: usrid,
				QuestID: questid
			}
		};

		render(requestdata, callback);
	}

	function registerQuestToUser(questid, usrid, callback) {
		let requestdata = {
			apiurl: appsettings.api.questcommand.regQuest(),
			handlebartemplate: appsettings.handlebartemplate.hb_questReg_tmp,
			cssID: '#bb_aj_GenericModalContainer',
			postdata: {
				Userid: usrid,
				QuestID: questid
			}
		};

		render(requestdata, callback);
	}
	function unregisterQuestToUser(questid, usrid, callback) {
		let requestdata = {
			apiurl: appsettings.api.questcommand.unregQuest(),
			handlebartemplate: appsettings.handlebartemplate.hb_questUnReg_tmp,
			cssID: '#bb_aj_GenericModalContainer',
			postdata: {
				Userid: usrid,
				QuestID: questid
			}
		};

		render(requestdata, callback);
	}

	function ListAllQuest(usrid, callback) {
		let requestdata = {
			apiurl: appsettings.api.questlist.listQuest(),
			handlebartemplate: appsettings.handlebartemplate.hb_listQuest_tmp,
			cssID: '#bb_aj_listaAllaQuests',
			postdata: {
				Userid: usrid
			}
		};

		render(requestdata, callback);
	}

	function render(getdata, callback) {
		requestHandler.doPost(getdata, data => {
			callback(data);
		});
	}

	return {
		getQuestInfo: showQuestinfo,
		listQuest: ListAllQuest,
		chkQuest: isQuestReg,
		registerQuest: registerQuestToUser,
		unregisterQuest: unregisterQuestToUser
	};
};
export default questinfo;
