import QuestEventHandler from './components/questEvent';
var dt = require('./components/old');

//console.log(ny.skrik());
//(alert(ny.alfvalue);
//let _ = require('lodash');
//dt.testarold('funkar detta');
$(function() {
	let init = () => {
		let qhandler = QuestEventHandler();
		qhandler.listaallaQuest();
	};
	init();
	//alert(' och igen..nu utan ' + ny.skrik(dt.testarold('funkar detta')));
	//console.log('innan jplist2');
	//jplist.init();
});
