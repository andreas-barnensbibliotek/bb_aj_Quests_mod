import modalhandler from '../Helper/Modal_plugin';
import questinfoHandler from '../components/questInfo';

const QuestEventHandler = userid => {
	// bind functions
	let qinfohandler = questinfoHandler();
	let mod = modalhandler();
	let ModalcontcssID = '#bb_aj_GenericModalContainer';

	//cacheDom
	let $bb_aj_Questlist = $('.bb_aj_Questlist');
	let $userid = $('.kk_aj_userid');
	let $bb_aj_GenericModalContainer = $(ModalcontcssID);

	//bind events
	$bb_aj_Questlist.on('click', '.bb_aj_regQuest', showQuestInfo);
	$bb_aj_GenericModalContainer.on('click', '#bb_aj_confirm', registerQuest);
	$bb_aj_GenericModalContainer.on('click', '#bb_aj_unconfirm', unregisterQuest);
	// functions
	function showQuestInfo(event) {
		let qid = $(this).attr('data-questid');
		let Userid = $userid.html();

		qinfohandler.getQuestInfo(qid, Userid, () => {
			mod.open();
		});

		return false;
	}

	function registerQuest(event) {
		let qid = $(this).attr('data-questid');
		let Userid = $userid.html();

		if (Userid > 0) {
			qinfohandler.registerQuest(qid, Userid, () => {
				setTimeout(() => {
					ListQuest();
					mod.close();
				}, 3000);
			});
		}

		return false;
	}

	function unregisterQuest(event) {
		let qid = $(this).attr('data-questid');
		let Userid = $userid.html();

		if (Userid > 0) {
			qinfohandler.unregisterQuest(qid, Userid, () => {
				setTimeout(() => {
					ListQuest();
					mod.close();
				}, 3000);
			});
		}

		return false;
	}

	function ListQuest() {
		let userid = $userid.html();

		if (userid > 0) {
			qinfohandler.listQuest(userid, () => {});
		}

		return false;
	}

	return {
		listaallaQuest: ListQuest
	};
};
export default QuestEventHandler;
