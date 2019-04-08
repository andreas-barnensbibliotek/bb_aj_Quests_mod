const ModalHandler = () => {
	let contcssID = '#bb_aj_GenericModalContainer';
	let confirmbuttonID = '#bb_aj_confirm';

	//cacheDom
	let $bb_aj_GenericModalContainer = $(contcssID);

	// EVENT

	// $bb_aj_GenericModalContainer.on('click', confirmbuttonID, Confirmfunction);
	$bb_aj_GenericModalContainer.on('click', '#bb_aj_avbryt', closeModal);
	$bb_aj_GenericModalContainer.on('click', '.bb_aj_closeModal', closeModal);

	// Functions
	function openInModal() {
		$bb_aj_GenericModalContainer.fadeIn('slow');
		return false;
	}
	function closeModal(time) {
		if (time) {
			$bb_aj_GenericModalContainer.fadeOut(time);
		} else {
			$bb_aj_GenericModalContainer.fadeOut('slow');
		}

		return false;
	}
	// function Confirmfunction() {
	// 	alert('comnfirmed: JA!');
	// 	return false;
	// }

	return {
		open: openInModal,
		close: closeModal,
		modalContainer: contcssID,
		modalconfirmbuttonID: confirmbuttonID
	};
};
export default ModalHandler;
