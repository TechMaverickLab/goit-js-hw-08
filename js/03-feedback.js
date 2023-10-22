/* global document, localStorage */
import throttle from 'lodash.throttle';

const refs = {
	form: document.querySelector('.feedback-form'),
	email: document.querySelector('[name="email"]'),
	message: document.querySelector('[name="message"]'),
};

const FEEDBACK_FORM_STATE = 'feedback-form-state';

const lastValidEmail = localStorage.getItem('lastValidEmail') || '';
updateEmailPlaceholder();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

refs.email.addEventListener('focus', updateEmailPlaceholder);
refs.email.addEventListener('blur', clearEmailPlaceholder);
refs.email.addEventListener('blur', () => {
	refs.email.removeAttribute('title');
});
refs.email.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' && lastValidEmail) {
		refs.email.value = lastValidEmail;
		event.preventDefault();
	}
});

populateTextarea();
  
function updateEmailPlaceholder() {
	if (refs.email.value === '') {
		refs.email.placeholder = lastValidEmail || 'you@example.com';
	}
}

function clearEmailPlaceholder() {
	refs.email.placeholder = '';
}

function onFormInput() {
	const email = refs.email.value;
	const message = refs.message.value;
  
	const formData = {
		email,
		message,
	};
  
	localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
}
  
function onFormSubmit(e) {
	e.preventDefault();
	
	if (!refs.form.checkValidity()) {
		refs.email.reportValidity();
		return;
	}

	const email = refs.email.value;
	const message = refs.message.value;

	console.log({ email, message });
	e.currentTarget.reset();
	localStorage.removeItem(FEEDBACK_FORM_STATE);
	localStorage.removeItem('lastValidEmail');
	updateEmailPlaceholder();
}
  
function populateTextarea() {
	const savedMessage = localStorage.getItem(FEEDBACK_FORM_STATE);
  
	if (savedMessage) {
		const parsedMessage = JSON.parse(savedMessage);
		refs.email.value = parsedMessage.email;
		refs.message.value = parsedMessage.message;
	}
}
