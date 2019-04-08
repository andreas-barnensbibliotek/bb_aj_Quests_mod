import serviceApiHandler from '../service/serviceApiHandler.2.0';
import InjecthtmlTemplate from '../handlebar/handlebarTemplateHandler.2.0';

const serverRequesthandler = () => {
	let servce = serviceApiHandler();
	let handlebar = InjecthtmlTemplate();

	function renderPost(getdata, callback) {
		servce.postjsondata(getdata.apiurl, getdata.postdata, data => {
			handlebar.injectTemplate(
				getdata.cssID,
				getdata.handlebartemplate,
				data,
				() => {
					console.log('api kört!');
					callback(data);
				}
			);
		});
	}
	function chkPost(getdata, callback) {
		servce.postjsondata(getdata.apiurl, getdata.postdata, data => {
			console.log('api kört!');
			callback(data);
		});
	}

	return {
		doPost: renderPost,
		chkpost: chkPost
	};
};
export default serverRequesthandler;
