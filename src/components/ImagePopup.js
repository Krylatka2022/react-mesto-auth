
function ImagePopup(props){
// ({ card, onClose }) {
	return (
		<section className={`popup popup_type_preview ${props.card ? 'popup_opened' : ''}`} onClick={props.onClose}>
			<div className="popup__preview-container">
				<img className="popup__preview-image" src={props.card && props.card.link} alt={props.card && props.card.name} />
				<button type="button" className="popup__close popup__close_type-preview" onClick={props.onClose}></button>
				<h2 className="popup__preview-title">{props.card && props.card.name}</h2>
			</div>
		</section >
	);
};

export default ImagePopup;