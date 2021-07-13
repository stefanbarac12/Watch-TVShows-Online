// Prikazuje home page div
function prikaziHome() {
	location.hash = 'Home';
	selectAllRadio();

	const heroDiv = document.getElementById('hero');
	heroDiv.style.display = 'block';

	const sectionText = document.getElementById('section-text');
	sectionText.style.display = 'block';
	sectionText.innerHTML = `
	<h3 style="font-size: 1.17em;">Watch Movies Online Free</h3>
	<p id="main-text" style="font-size: 16px";>Just a better place to watch movies online for free. It allows you to watch movies
	online in high quality for free. No registration is required. The content is updated daily with fast
	streaming servers, multi-language subtitles supported. Just open fmovies.to and watch your favorite
	movies, tv-shows. We have almost any movie, tv-shows you want to watch! <br><br>
	Please bookmark fmovies.name to update about fmovies domains. <br>
	Please help us by sharing this site with your friends. Thanks!</p>`;

	ukloniPrikazaneDivove();
	prikaziEverything();
	currentLoopLeftNav(0);
	removeCurrentRightNav();
}

// Prikazuje movies page div
function prikaziMovies() {
	location.hash = 'Movies';
	selectAllRadio();

	const heroDiv = document.getElementById('hero');
	heroDiv.style.display = 'none';

	const sectionText = document.getElementById('section-text');
	sectionText.style.display = 'block';
	sectionText.innerHTML = '<h3 style="font-size: 50px; margin: 0 0 30px 60px;">Movies</h3>';

	ukloniPrikazaneDivove();
	prikaziFilterTVShows('Movie');
	currentLoopLeftNav(1);
	removeCurrentRightNav();
}

// Prikazuje series page div
function prikaziSeries() {
	location.hash = 'Series';
	selectAllRadio();

	const heroDiv = document.getElementById('hero');
	heroDiv.style.display = 'none';

	const sectionText = document.getElementById('section-text');
	sectionText.style.display = 'block';
	sectionText.innerHTML = '<h3 style="font-size: 50px; margin: 0 0 30px 60px;">Series</h3>';

	ukloniPrikazaneDivove();
	prikaziFilterTVShows('Series');
	currentLoopLeftNav(2);
	removeCurrentRightNav();
}

// Prikazuje cartoons page div
function prikaziCartoons() {
	location.hash = 'Cartoons';
	selectAllRadio();

	const heroDiv = document.getElementById('hero');
	heroDiv.style.display = 'none';

	const sectionText = document.getElementById('section-text');
	sectionText.style.display = 'block';
	sectionText.innerHTML = '<h3 style="font-size: 50px; margin: 0 0 30px 60px;">Cartoons</h3>';

	ukloniPrikazaneDivove();
	prikaziFilterTVShows('Cartoon');
	currentLoopLeftNav(3);
	removeCurrentRightNav();
}

// Prikazuje animes page div
function prikaziAnimes() {
	location.hash = 'Animes';
	selectAllRadio();

	const heroDiv = document.getElementById('hero');
	heroDiv.style.display = 'none';

	const sectionText = document.getElementById('section-text');
	sectionText.style.display = 'block';
	sectionText.innerHTML = '<h3 style="font-size: 50px; margin: 0 0 30px 60px;">Animes</h3>';

	ukloniPrikazaneDivove();
	prikaziFilterTVShows('Anime');
	currentLoopLeftNav(4);
	removeCurrentRightNav();
}

// Prikazuje watchnow div
function ukloniPrikazaneDivove() {
	const watchNowDiv = document.getElementById('watch-now-div');
	watchNowDiv.style.display = 'none';
	watchNowDiv.innerHTML = '';

	const myListTable = document.getElementById('my-list-table');
	myListTable.style.display = 'none';

	const moviesCardDiv = document.getElementById('movies-card-div');
	moviesCardDiv.style.display = 'grid';

	const komentarWrapper = document.getElementById('komentar-wrapper');
	komentarWrapper.style.display = 'none';

	const filterBtnDiv = document.querySelector('.filter-btn-div');
	filterBtnDiv.style.display = 'flex';
}

// Prikazuje watchlist div
function prikaziMyList() {
	location.hash = 'Watchlist';
	currentLoopRightNav(3);
	removeCurrentLeftNav();

	const searchIcon = document.querySelector('#search-icon');

	searchIcon.onclick = () => {
		prikaziHome();
		deSelectAllRadio();
		searchElement();
	}
	const watchNowDiv = document.getElementById('watch-now-div');
	watchNowDiv.style.display = 'none';

	const myListTable = document.getElementById('my-list-table');
	myListTable.style.display = 'block';

	const heroDiv = document.getElementById('hero');
	heroDiv.style.display = 'none';

	const sectionText = document.getElementById('section-text');
	sectionText.style.display = 'block';
	sectionText.innerHTML = '<h3 style="font-size: 50px; margin: 0 0 30px 60px;">My Watchlist</h3>';

	const moviesCardDiv = document.getElementById('movies-card-div');
	moviesCardDiv.style.display = 'none';

	const filterBtnDiv = document.querySelector('.filter-btn-div');
	filterBtnDiv.style.display = 'none';

	const komentarWrapper = document.getElementById('komentar-wrapper');
	komentarWrapper.style.display = 'none';
}

// Prikazuje watchnow div
function prikaziWatchNow() {
	scrollWindow(0, 0);
	removeCurrentLeftNav();

	const search = document.querySelector('#search').value = '';
	const searchIcon = document.querySelector('#search-icon');

	searchIcon.onclick = () => {
		prikaziHome();
		deSelectAllRadio();
		searchElement();
	}

	const watchNowDiv = document.getElementById('watch-now-div');
	watchNowDiv.style.display = 'block';

	const myListTable = document.getElementById('my-list-table');
	myListTable.style.display = 'none';

	const heroDiv = document.getElementById('hero');
	heroDiv.style.display = 'none';

	const sectionText = document.getElementById('section-text');
	sectionText.style.display = 'none';
	sectionText.innerHTML = '<h3 style="font-size: 40px">My List</h3>';

	const moviesCardDiv = document.getElementById('movies-card-div');
	moviesCardDiv.style.display = 'none';

	const filterBtnDiv = document.querySelector('.filter-btn-div');
	filterBtnDiv.style.display = 'none';

	const komentarWrapper = document.getElementById('komentar-wrapper');
	komentarWrapper.style.display = 'flex';

	prikaziKomentare();
	prikaziBubble();
}

// Stavlja current klasu na right-nav
function currentLoopRightNav(num) {
	const nav = document.getElementById('right-nav');
	const deca = nav.children;

	for (let i = 0; i < deca.length; i++) {
		deca[i].classList.remove('current');
	}
	deca[num].classList.add('current');
}

// Stavlja current klasu na left-nav
function currentLoopLeftNav(num) {
	const nav = document.getElementById('left-nav');
	const deca = nav.children;

	for (let i = 0; i < deca.length; i++) {
		deca[i].classList.remove('current');
	}
	deca[num].classList.add('current');
}

// Uklanja current klasu sa left-nava
function removeCurrentLeftNav() {
	const nav = document.getElementById('left-nav');
	const deca = nav.children;

	for (let i = 0; i < deca.length; i++) {
		deca[i].classList.remove('current');
	}
}

// Uklanja current klasu sa right-nava
function removeCurrentRightNav() {
	const nav = document.getElementById('right-nav');
	const deca = nav.children;

	for (let i = 0; i < deca.length; i++) {
		deca[i].classList.remove('current');
	}
}

// Funkcija koja pravi singup modal
function singup() {
	gsap.fromTo("#form-div", { x: 0, scale: 0 }, { duration: 0.5, x: 0, ease: 'rough', scale: 1 });

	const formDiv = document.getElementById('form-div');
	formDiv.innerHTML = '';
	formDiv.style.height = '680px';
	formDiv.style.width = '320px';

	const singupH1 = document.createElement('h1');
	singupH1.innerHTML = '- SING UP -';
	singupH1.id = 'sing-up-h1';

	const pftfb = document.createElement('p');
	pftfb.innerHTML = 'Are you ready to start your journey?';
	pftfb.style.textAlign = 'center';
	pftfb.style.margin = ' 30px 0';

	const textBoxSingup = document.createElement('div');
	textBoxSingup.classList = 'text-box';

	const ninjaIcon = document.createElement('i');
	ninjaIcon.classList = 'fas fa-user-ninja';
	ninjaIcon.id = 'singup-ninja-icon';

	const singupUserName = document.createElement('input');
	singupUserName.placeholder = 'Username';
	singupUserName.classList = 'input';
	singupUserName.id = 'singup-username';
	singupUserName.onfocus = () => {
		//kad je fokusiran username input uklanja eyeiconslash sa password inputa
		eyeIconSlash.style.display = 'none';
		eyeIconSlash2.style.display = 'none';
	}

	const textBoxSingup2 = document.createElement('div');
	textBoxSingup2.classList = 'text-box';

	const emailIcon = document.createElement('i');
	emailIcon.classList = 'fas fa-envelope';
	emailIcon.id = 'singup-email-icon';

	const singupEmail = document.createElement('input');
	singupEmail.placeholder = 'Email Adress';
	singupEmail.classList = 'input';
	singupEmail.id = 'singup-email';
	singupEmail.onfocus = () => {
		//kad je fokusiran punoime input uklanja eyeiconslash sa password inputa
		eyeIconSlash.style.display = 'none';
		eyeIconSlash2.style.display = 'none';
	}

	const textBoxSingup3 = document.createElement('div');
	textBoxSingup3.classList = 'text-box';

	const lockIcon = document.createElement('i');
	lockIcon.classList = 'fas fa-lock';
	lockIcon.id = 'singin-lock-icon-1';


	const singupPass = document.createElement('input');
	singupPass.placeholder = 'Password';
	singupPass.type = 'password';
	singupPass.classList = 'input';
	singupPass.id = 'singup-pass';
	singupPass.onfocus = () => {
		//kad je fokusiran passowrd input uklanja eyeiconslash sa confirmpassword inputa
		eyeIconSlash.style.display = 'block';
		eyeIconSlash2.style.display = 'none';
	}

	const textBoxSingup4 = document.createElement('div');
	textBoxSingup4.classList = 'text-box';

	const lockIcon2 = document.createElement('i');
	lockIcon2.classList = "fas fa-lock";
	lockIcon2.id = 'singin-lock-icon-2';

	const singupConfirmPass = document.createElement('input');
	singupConfirmPass.placeholder = 'Repeat Password';
	singupConfirmPass.type = 'password';
	singupConfirmPass.classList = 'input';
	singupConfirmPass.style.marginBottom = '0px';
	singupConfirmPass.id = 'singup-confirm-pass';
	singupConfirmPass.onfocus = () => {
		//kad je fokusiran confirmpassword input uklanja eyeiconslash sa password inputa
		eyeIconSlash2.style.display = 'block';
		eyeIconSlash.style.display = 'none';
	}

	const generatePassowrd = document.createElement('p');
	generatePassowrd.innerHTML = `
	Generate Password? <a style="cursor: pointer;" onclick="getPassowrd();">Click here!</a>`;
	generatePassowrd.style.textAlign = 'center';
	generatePassowrd.style.margin = '30px 0 0 0';

	const btnSingup = document.createElement('button');
	btnSingup.id = 'btn-confirm'
	btnSingup.innerHTML = 'SING UP'
	btnSingup.id = 'singup-btn';
	btnSingup.onclick = () => {
		handleSingup();
	}

	const btnGoBack = document.createElement('p');
	btnGoBack.innerHTML = 'Already registered? <a href="#">Sing in</a>';
	btnGoBack.style.textAlign = 'center';
	btnGoBack.style.margin = '0';
	btnGoBack.onclick = () => {
		prikaziLogin();
	}

	const eyeIcon = document.createElement('i');
	eyeIcon.classList = 'fas fa-eye';
	eyeIcon.id = 'eye-icon-1';
	eyeIcon.style.cursor = 'pointer';
	eyeIcon.style.position = 'absolute';
	eyeIcon.style.right = '10%';

	const eyeIcon2 = document.createElement('i');
	eyeIcon2.classList = 'fas fa-eye';
	eyeIcon2.style.cursor = 'pointer';
	eyeIcon2.style.position = 'absolute';
	eyeIcon2.style.right = '10%';

	const eyeIconSlash = document.createElement('i');
	eyeIconSlash.classList = 'fas fa-eye-slash';
	eyeIconSlash.id = 'eye-icon-slash-1';
	eyeIconSlash.style.display = 'none';
	eyeIconSlash.onclick = () => {
		let x = document.getElementById('singup-pass');
		if (x.type === 'password') {
			x.type = 'text';
			eyeIconSlash.classList = 'fas fa-eye';
		}
		else {
			x.type = 'password';
			eyeIconSlash.classList = 'fas fa-eye-slash';
		}
	}

	const eyeIconSlash2 = document.createElement('i');
	eyeIconSlash2.classList = 'fas fa-eye-slash';
	eyeIconSlash2.id = 'eye-icon-slash-2';
	eyeIconSlash2.style.display = 'none';
	eyeIconSlash2.onclick = () => {
		let x = document.getElementById('singup-confirm-pass');
		if (x.type === 'password') {
			x.type = 'text';
			eyeIconSlash2.classList = 'fas fa-eye';
		}
		else {
			x.type = "password";
			eyeIconSlash2.classList = 'fas fa-eye-slash';
		}
	}

	const closeModalIcon = document.createElement('i');
	closeModalIcon.classList = 'fas fa-times';
	closeModalIcon.id = 'close-modal'
	closeModalIcon.onclick = () => {
		closeModal();
	}

	formDiv.appendChild(closeModalIcon);
	formDiv.appendChild(singupH1);
	formDiv.appendChild(pftfb);
	formDiv.appendChild(textBoxSingup);
	formDiv.appendChild(textBoxSingup2);
	formDiv.appendChild(textBoxSingup3);
	formDiv.appendChild(textBoxSingup4);
	formDiv.appendChild(generatePassowrd);
	formDiv.appendChild(btnSingup);
	formDiv.appendChild(btnGoBack);

	textBoxSingup.appendChild(ninjaIcon);
	textBoxSingup.appendChild(singupUserName);

	textBoxSingup2.appendChild(emailIcon);
	textBoxSingup2.appendChild(singupEmail);
	textBoxSingup3.appendChild(lockIcon);
	textBoxSingup3.appendChild(singupPass);
	textBoxSingup3.appendChild(eyeIconSlash);

	textBoxSingup4.appendChild(lockIcon2);
	textBoxSingup4.appendChild(singupConfirmPass);
	textBoxSingup4.appendChild(eyeIconSlash2);
}

// Funkcija koja pravi login modal
function prikaziLogin() {
	gsap.fromTo("#form-div", { x: 0, scale: 0 }, { duration: 0.5, x: 0, ease: 'rough', scale: 1 });

	const modal = document.getElementById('modal');
	modal.style.display = 'block';

	const formDiv = document.getElementById('form-div');
	formDiv.style.height = '580px';
	formDiv.style.width = '300px';
	formDiv.innerHTML = '';

	const formDivH1 = document.createElement('h1');
	formDivH1.innerHTML = '- LOGIN -';
	formDivH1.id = 'login-h1';

	const pText = document.createElement('p');
	pText.style.textAlign = 'center';
	pText.innerHTML = 'Hey, you can also continiue with:';

	const socialMediaDiv = document.createElement('div');
	socialMediaDiv.id = 'social-media';

	const facebookIcon = document.createElement('i');
	facebookIcon.classList = 'fab fa-facebook-square';

	const googleIcon = document.createElement('i');
	googleIcon.classList = 'fab fa-google';

	const emailIcon = document.createElement('i');
	emailIcon.classList = 'fas fa-envelope';

	const textBox = document.createElement('div');
	textBox.classList = 'text-box';

	const inputUser = document.createElement('input');
	inputUser.classList = 'input';
	inputUser.placeholder = 'Username';
	inputUser.id = 'user';

	const userIcon = document.createElement('i');
	userIcon.classList = 'fas fa-user';
	userIcon.id = 'login-user-icon';

	const textBox2 = document.createElement('div');
	textBox2.classList = 'text-box';

	const inputPass = document.createElement('input');
	inputPass.id = 'password';
	inputPass.type = 'password';
	inputPass.classList = 'input';
	inputPass.placeholder = 'Password';

	const lockIcon = document.createElement('i');
	lockIcon.classList = 'fas fa-lock';
	lockIcon.id = 'login-lock-icon';

	const btnLogin = document.createElement('button');
	btnLogin.innerHTML = 'LOGIN';
	btnLogin.id = 'btn-login';
	btnLogin.onclick = () => {
		login();
	}

	const btnSingup = document.createElement('p');
	btnSingup.innerHTML = `
	Not registered? <a onclick="singup()" href="#">Create an account.</a>`;

	btnSingup.onclick = () => {
		singup();
	}

	const fypText = document.createElement('p');
	fypText.innerHTML = `Forgot your password?<a href="#"> Click here!</a>`;

	const warningDiv = document.createElement('div');
	warningDiv.id = 'warning';

	const closeModalIcon = document.createElement('i');
	closeModalIcon.classList = 'fas fa-times';
	closeModalIcon.id = 'close-modal'
	closeModalIcon.onclick = () => {
		closeModal();
	}

	formDiv.appendChild(closeModalIcon);
	formDiv.appendChild(formDivH1);
	formDiv.appendChild(pText);
	formDiv.appendChild(socialMediaDiv);
	socialMediaDiv.appendChild(facebookIcon);
	socialMediaDiv.appendChild(googleIcon);
	socialMediaDiv.appendChild(emailIcon);
	formDiv.appendChild(textBox);
	textBox.appendChild(userIcon);
	textBox.appendChild(inputUser);

	formDiv.appendChild(textBox2);
	textBox2.appendChild(lockIcon);
	textBox2.appendChild(inputPass);
	formDiv.appendChild(fypText);
	formDiv.appendChild(btnLogin);
	formDiv.appendChild(btnSingup);
	document.body.appendChild(warningDiv);
}

// Funkcija koja prikazuje display za Add / Delete TVShows
function addAndDeleteDisplay() {
	gsap.fromTo("#form-div", { x: 0, scale: 0 }, { duration: 0.5, x: 0, ease: 'rough', scale: 1 });

	const modal = document.getElementById('modal');
	modal.style.display = 'block';

	const formDiv = document.getElementById('form-div');
	formDiv.style.height = '300px';
	formDiv.style.width = '400px';
	formDiv.innerHTML = '';

	const h1 = document.createElement('h1');
	h1.innerHTML = 'Add / Delete TVShows';
	h1.id = 'login-h1';

	const addBtn = document.createElement('button');
	addBtn.innerHTML = 'Add a TVShow';
	addBtn.id = 'btn-login';
	addBtn.onclick = () => {
		prikaziAddTVShowsInputs();
	}

	const deleteBtn = document.createElement('button');
	deleteBtn.innerHTML = 'Delete a TVShow';
	deleteBtn.id = 'btn-login';
	deleteBtn.onclick = () => {
		prikaziDeleteTVShowsInputs();
	}

	const closeModalIcon = document.createElement('i');
	closeModalIcon.classList = 'fas fa-times';
	closeModalIcon.id = 'close-modal'
	closeModalIcon.onclick = () => {
		closeModal();
	}

	formDiv.appendChild(h1);
	formDiv.appendChild(addBtn);
	formDiv.appendChild(deleteBtn);
	formDiv.appendChild(closeModalIcon);
}

// Funckija koja prikazuje dispaly za Addovanje TVShows-a
function prikaziAddTVShowsInputs() {
	gsap.fromTo("#form-div", { x: 0, scale: 0 }, { duration: 0.5, x: 0, ease: 'rough', scale: 1 });

	const modal = document.getElementById('modal');
	modal.style.display = 'block';

	const formDiv = document.getElementById('form-div');
	formDiv.style.height = '720px';
	formDiv.style.width = '500px';
	formDiv.innerHTML = '';

	const h1 = document.createElement('h1');
	h1.innerHTML = 'Add a TVShows';
	h1.id = 'login-h1';

	const inputTime = document.createElement('input');
	inputTime.classList = 'input';
	inputTime.placeholder = 'Time';
	inputTime.id = 'time';

	const inputQuality = document.createElement('input');
	inputQuality.classList = 'input';
	inputQuality.placeholder = 'Quality';
	inputQuality.id = 'quality';

	const inputPoster = document.createElement('input');
	inputPoster.classList = 'input';
	inputPoster.placeholder = 'Poster';
	inputPoster.id = 'poster';

	const inputTitle = document.createElement('input');
	inputTitle.classList = 'input';
	inputTitle.placeholder = 'Title';
	inputTitle.id = 'title';

	const inputStars = document.createElement('input');
	inputStars.classList = 'input';
	inputStars.placeholder = 'Stars';
	inputStars.id = 'stars';

	const inputYear = document.createElement('input');
	inputYear.classList = 'input';
	inputYear.placeholder = 'Year';
	inputYear.id = 'year';

	const inputDesc = document.createElement('input');
	inputDesc.classList = 'input';
	inputDesc.placeholder = 'Description';
	inputDesc.id = 'desc';

	const inputCountry = document.createElement('input');
	inputCountry.classList = 'input';
	inputCountry.placeholder = 'Country';
	inputCountry.id = 'country';

	const inputGenre = document.createElement('input');
	inputGenre.classList = 'input';
	inputGenre.placeholder = 'Genre';
	inputGenre.id = 'genre';

	const inputType = document.createElement('input');
	inputType.classList = 'input';
	inputType.placeholder = 'Type';
	inputType.id = 'type';

	const inputDirector = document.createElement('input');
	inputDirector.classList = 'input';
	inputDirector.placeholder = 'Director';
	inputDirector.id = 'director';

	const inputCast = document.createElement('input');
	inputCast.classList = 'input';
	inputCast.placeholder = 'Cast';
	inputCast.id = 'cast';

	const closeModalIcon = document.createElement('i');
	closeModalIcon.classList = 'fas fa-times';
	closeModalIcon.id = 'close-modal'
	closeModalIcon.onclick = () => {
		closeModal();
	}

	const goBackIcon = document.createElement('i');
	goBackIcon.classList = 'fas fa-arrow-left';
	goBackIcon.id = 'go-back'
	goBackIcon.onclick = () => {
		addAndDeleteDisplay();
	}

	const addBtn = document.createElement('button');
	addBtn.innerHTML = 'Add TVShow';
	addBtn.id = 'btn-login';
	addBtn.style.width = '45%';
	addBtn.style.marginRight = '45px';
	addBtn.onclick = () => {
		dodajTVshow();
	}

	const cancleBtn = document.createElement('button');
	cancleBtn.innerHTML = 'Cancle';
	cancleBtn.id = 'btn-login';
	cancleBtn.style.width = '45%';
	cancleBtn.onclick = () => {
		input.forEach(el => {
			el.value = '';
		});
	}

	formDiv.appendChild(h1);
	formDiv.appendChild(inputTime);
	formDiv.appendChild(inputQuality);
	formDiv.appendChild(inputPoster);
	formDiv.appendChild(inputTitle);
	formDiv.appendChild(inputStars);
	formDiv.appendChild(inputYear);
	formDiv.appendChild(inputDesc);
	formDiv.appendChild(inputCountry);
	formDiv.appendChild(inputGenre);
	formDiv.appendChild(inputType);
	formDiv.appendChild(inputDirector);
	formDiv.appendChild(inputCast);
	formDiv.appendChild(addBtn);
	formDiv.appendChild(closeModalIcon);
	formDiv.appendChild(cancleBtn);
	formDiv.appendChild(goBackIcon);

	let input = document.querySelectorAll('#form-div input');

	input.forEach(el => {
		el.style.width = '45%';
		el.style.margin = '20px 8px';
	});
}

// Funkcija koja prikazuje display za brisanje TVShows-a
function prikaziDeleteTVShowsInputs() {
	gsap.fromTo("#form-div", { x: 0, scale: 0 }, { duration: 0.5, x: 0, ease: 'rough', scale: 1 });

	const modal = document.getElementById('modal');
	modal.style.display = 'block';

	const formDiv = document.getElementById('form-div');
	formDiv.style.height = '320px';
	formDiv.style.width = '400px';
	formDiv.innerHTML = '';

	const h1 = document.createElement('h1');
	h1.innerHTML = 'Delete a TVShows';
	h1.id = 'login-h1';
	h1.style.marginBottom = '60px';

	const inputDelete = document.createElement('input');
	inputDelete.classList = 'input';
	inputDelete.placeholder = 'Delete by name';
	inputDelete.id = 'delete-input';

	const deleteBtn = document.createElement('button');
	deleteBtn.innerHTML = 'Delete TVShow';
	deleteBtn.id = 'btn-login';
	deleteBtn.style.width = '45%';
	deleteBtn.onclick = () => {
		deleteTVshow();
	}

	const cancleBtn = document.createElement('button');
	cancleBtn.innerHTML = 'Cancle';
	cancleBtn.id = 'btn-login';
	cancleBtn.style.width = '45%';
	cancleBtn.style.marginLeft = '40px';
	cancleBtn.onclick = () => {
		inputDelete.value = '';
	}

	const closeModalIcon = document.createElement('i');
	closeModalIcon.classList = 'fas fa-times';
	closeModalIcon.id = 'close-modal'
	closeModalIcon.onclick = () => {
		closeModal();
	}

	const goBackIcon = document.createElement('i');
	goBackIcon.classList = 'fas fa-arrow-left';
	goBackIcon.id = 'go-back'
	goBackIcon.onclick = () => {
		addAndDeleteDisplay();
	}

	formDiv.appendChild(h1);
	formDiv.appendChild(inputDelete);
	formDiv.appendChild(deleteBtn);
	formDiv.appendChild(cancleBtn);
	formDiv.appendChild(closeModalIcon);
	formDiv.appendChild(goBackIcon);
}

// Funckija koja brise TVShows
function deleteTVshow() {
	const deleteInput = document.querySelector('#delete-input').value;
	for (let i = 0; i < TVShows.length; i++) {
		if (TVShows[i].title === deleteInput) {
			TVShows.splice(i, 1);

			prikaziHome();
			closeModal();
			addedVideoWarningFunc(`${deleteInput} has been deleted from TVShows!`);
			return;

		}
	}
	addedVideoWarningFunc(`${deleteInput} doesn't exist try something else!`);
}

// Funckija koja dodaje novi TVShows
function dodajTVshow() {
	const inputTime = document.querySelector('#time').value;
	const inputQuality = document.querySelector('#quality').value;
	const inputPoster = document.querySelector('#poster').value;
	const inputTitle = document.querySelector('#title').value;
	const inputStars = document.querySelector('#stars').value;
	const inputYear = document.querySelector('#year').value;
	const inputDesc = document.querySelector('#desc').value;
	const inputCountry = document.querySelector('#country').value;
	const inputGenre = document.querySelector('#genre').value;
	const inputType = document.querySelector('#type').value;
	const inputDirector = document.querySelector('#director').value;
	const inputCast = document.querySelector('#cast').value;

	let newTVshow = new TVShow(
		inputTime,
		inputQuality,
		inputPoster,
		inputTitle,
		inputStars,
		inputYear,
		inputDesc,
		inputCountry,
		inputGenre,
		inputType,
		inputDirector,
		inputCast
	);

	if (
		inputTime === '' ||
		inputQuality === '' ||
		inputPoster === '' ||
		inputTitle === '' ||
		inputStars === '' ||
		inputYear === '' ||
		inputDesc === '' ||
		inputCountry === '' ||
		inputGenre === '' ||
		inputType === '' ||
		inputDirector === '' ||
		inputCast === ''
	) {
		addedVideoWarningFunc(`All inputs must be filled out!`);
	} else {
		addedVideoWarningFunc(`${inputTitle} has been added to TVshows!`);
		closeModal();

		TVShows.unshift(newTVshow);
		prikaziHome();

		const input = document.querySelectorAll('#form-div input');
		input.forEach(el => {
			el.value = '';
		});
	}
}

// Funkcija koja sluzi za zatvaranje modala
function closeModal() {
	const modal = document.querySelector('#modal');

	gsap.fromTo("#form-div", { x: 0, scale: 1 }, { duration: 0.5, x: 0, ease: 'rough', scale: 0 });
	setTimeout(() => {
		modal.style.display = 'none';
	}, 300);
}

//Pravi random passowrd od 16 karaktera
function getPassowrd() {
	let eyeIconShow = document.getElementById('eye-icon-slash-1');
	eyeIconShow.style.display = 'block';
	eyeIconShow.classList = 'fas fa-eye';

	let changeType = document.getElementById('singup-pass');
	changeType.type = 'text';

	let chars = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*';
	let password = '';

	for (let i = 0; i < 12; i++) {
		let r = Math.floor(Math.random() * chars.length);
		password += chars[r];
	}
	document.getElementById('singup-pass').value = password;
}

const TVShows = [
	new TVShow('139 min', 'HD', 'img/spiderman-3-poster.jpg', 'Spider-man 3', 6.2, 2007, `Peter Parker is finally happy: he is doing well at the school, his girlfriend MJ Watson loves him and the whole city loves his crime-fighting alter-ego Spider-Man, finally bestowing upon him the praise he so rightly deserves. Apart from this, he has made some new foes and...`, 'United States', 'Adventure, Action', 'Movie', 'Sam Raimi', ' Kirsten Dunst, Topher Grace, Tobey Maguire'),
	new TVShow('127 min', 'HD', 'img/spiderman-2-poster.jpg', 'Spider-man 2', 7.3, 2004, `On the verge of a nervous breakdown, Peter Parker, now studying physics at the University of Columbia, learns the hard way that life has just got tougher. It's been only two short years since Norman Osborn's death in Spider-Man (2002), and now, Mary Jane is giving up on Peter, he...`, 'United States', 'Adventure, Action', 'Movie', 'Sam Raimi', ' Kirsten Dunst, Alfred Molina, Tobey Maguire'),
	new TVShow('121 min', 'HD', 'img/spiderman-1-poster.jpg', 'Spider-man', 7.3, 2002, `Based on Marvel Comics' superhero character, this is a story of Peter Parker who is a nerdy high-schooler. He was orphaned as a child, bullied by jocks, and can't confess his crush for his stunning neighborhood girl Mary Jane Watson. To say his life is "miserable" is an understatement. But one...`, 'United States', 'Adventure, Action', 'Movie', 'Sam Raimi', 'Kirsten Dunst, Willem Dafoe, Tobey Maguire'),
	new TVShow('152 min', 'HD', 'img/dark_knight.jpg', 'The Dark Knight', 9.0, 2008, `Gotham's new District Attorney has been elected. His name is Harvey Dent, and he has a radical new agenda that threatens to take down Gotham's organized crime underworld once and for all with an iron fist. But the emergence of the rogue vigilante known as Batman has caused problems...`, 'United States, United Kingdom', 'Adventure, Action', 'Movie', 'Christopher Nolan', `
	Michael Caine, Christian Bale, Ken Watanabe`),
	new TVShow('164 min', 'HD', 'img/the-dark-knight-rises.jpg', 'Dark Knight Rises', 8.4, 2017, `Eight years after the events of The Dark Knight find Gotham at a time of peace. This
	is due to Batman taking the fall for Harvey Dent's murder. However, a new evil force named
	Bane has arrived in Gotham and aims to take over the city and expose...`, 'United States, United Kingdom', 'Drama, Action, Crime', 'Movie', 'Christopher Nolan', `
	Michael Caine, Christian Bale, Ken Watanabe`),
	new TVShow('140 min', 'HD', 'img/batman-begins.jpg', 'Batman Begins', 8.2, 2005, `As a boy, a young Bruce Wayne watched in horror as his millionaire parents were slain in
	front of his eyes, a trauma which led him to become obsessed with revenge, but his chance is
	cruelly taken away from him by fate. After disappearing to the East where...`, 'United States, United Kingdom', 'Adventure, Action', 'Movie', 'Christopher Nolan', `
	Michael Caine, Christian Bale, Ken Watanabe`),
	new TVShow('220 episodes', 'HD', 'img/naruto.jpg', 'Naruto', 8.3, 2002, `Many years ago, in the hidden village of Konoha, lived a great demon fox. When it swung one
	of it's nine tails, a tsunami occurred. The fourth hokage sealed this demon fox inside a boy
	in exchange for his own life. Naruto was that boy, and he grew up with no family, and the...`, 'Japan', 'Super Power, Animation, Comedy, Adventure, Action, Fantasy', 'Anime', 'Masashi Kishimoto', 'Junko Takeuchi, Maile Flanagan, Kate Higgins', 'img/naruto-slideshow.jpg'),
	new TVShow('502 episodes', 'HD', 'img/naruto-shippuden.jpg', 'Naruto Shippuden', 8.6, 2007, `Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval
	and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village...`, 'Japan', 'Super Power, Animation, Comedy, Adventure, Action, Fantasy', 'Anime', 'Masashi Kishimoto', 'Junko Takeuchi, Maile Flanagan, Kate Higgins'),
	new TVShow('366 episodes', 'HD', 'img/bleach.jpg', 'Bleach', 8.1, 2004, `High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper
	powers from Rukia Kuchiki and sets out to save the world from "Hollows"...`, 'Japan', 'Super Power, Animation, Comedy, Adventure, Action, Fantasy', 'Anime', 'Tite Kubo', 'Johnny Yong Bosch, Michelle Ruff, Stephanie Sheh', 'img/bleach-slideshow.jpg'),
	new TVShow('976+ episodes', 'HD', 'img/one-piece.jpg', 'One Piece', 8.7, 1999, `Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest
	treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named
	"One Piece"...."...`, 'Japan', 'Super Power, Animation, Comedy, Adventure, Action, Fantasy', 'Anime', 'Eiichiro Oda', 'Mayumi Tanaka, Tony Beck, Akemi Okamura, Kappei Yamaguchi'),
	new TVShow('5 seasons', 'HD', 'img/7-deadly-sins.png', '7 Deadly Sins', 8.1, 2015, `The "Seven Deadly Sins," a group of evil knights who conspired to overthrow the kingdom of
	Britannia, were said to have been eradicated by the Holy Knights, although some claim that
	they still live...`, 'Japan', 'Super Power, Animation, Comedy, Adventure, Action, Fantasy', 'Anime', 'N / A', 'Yûki Kaji, Aoi Yûki, Tatsuhisa Suzuki, Sora Amamiya'),
	new TVShow('4 seasons', 'HD', 'img/attack-titan.jpg', 'Attack on Titan', 8.9, 2014, `After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse
	the earth of the giant humanoid Titans that have brought humanity to the brink of
	extinction...`, 'Japan', 'Super Power, Animation, Thriller, Adventure, Action', 'Anime', 'N / A', 'Yûki Kaji, Yui Ishikawa, Marina Inoue'),
	new TVShow('8 seasons', 'HD', 'img/game-of-thrones-img.jpg', 'Game of Thrones', 9.3, 2011, `Years after a rebellion spurred by a stolen bride to be and the blind ambitions of a mad
	King, Robert of the house Baratheon sits on the much desired Iron Throne. In the mythical
	land of Westeros, nine noble families fight for every inch of control and every drop of...`, 'United States, United Kingdom', 'Drama, Adventure, Romance, Action, Fantasy', 'Series', 'David Benioff, D.B. Weiss, George R.R. Martin', 'Peter Dinklage, Emilia Clarke, Kit Harington, Sophie Turner', 'img/game-of-thrones.jpg'),
	new TVShow('6 seasons', 'HD', 'img/vikings.jpg', 'Vikings', 8.7, 2014, `Vikings is inspired by the sagas of Viking Ragnar Lothbrok, one of the best-known legendary
	Norse heroes and notorious as the scourge of England and France. The show portrays Ragnar as
	a farmer who rises to fame by successful raids into England, and eventually...`, 'Canada, Ireland', 'Drama, Adventure, Romance, Action, History, War', 'Series', 'Michael Hirst', 'Katheryn Winnick, Gustaf Skarsgård, Alexander Ludwig'),
	new TVShow('6 seasons', 'HD', 'img/power.jpg', 'Power', 8.1, 2014, `"Power" is a visionary drama that straddles the glamorous Manhattan lifestyles of the rich
	and infamous and the underworld of the international drug trade. The cast is led by Omari
	Hardwick as James "Ghost" St. Patrick, a man trying to escape his role as a drug kingpin for
	a legitimized...`, 'United States', 'Drama, Crime, Action', 'Series', 'Courtney A. Kemp', 'Omari Hardwick, Lela Loren, Naturi Naughton', 'img/power-slideshow.jpg'),
	new TVShow('2 seasons', 'HD', 'img/the-witcher.jpg', 'The Witcher', 8.2, 2019, `Geralt of Rivia, a brooding professional monster hunter for hire also known as witcher,
	struggles to keep his humanity in a medieval dark fantasy world ruled by corrupt kings,
	queens and mages, where poverty, violence and intolerance are rampant, normal humans are
	sometimes worse...`, 'United States, Poland', 'Drama, Adventure, Fantasy, Action', 'Series', 'Lauren Schmidt', 'Henry Cavill, Anna Shaffer, Freya Allan'),
	new TVShow('8 seasons', 'HD', 'img/green-arrow.jpg', 'Arrow', 7.5, 2012, `Oliver Queen and his father are lost at sea when their luxury yacht sinks, apparently in a
	storm. His father dies, but Oliver survives for five years on an uncharted island and
	eventually returns home. But he wasn't alone on the island where he learned not only how
	to...`, 'United States', 'Drama, Sci-Fi, Adventure, Action, Crime, Mystery', 'Series', 'Greg BerlantiMarc, GuggenheimAndrew, Kreisberg', 'David Ramsey, Stephen Amell, Emily Bett Rickards, Katie Cassidy'),
	new TVShow('11 seasons', 'HD', 'img/the-walking-dead.jpg', 'The Walking Dead', 7.5, 2012, `The Walking Dead tells the story of the months and years that follow after a zombie
	apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who
	travel in search of a safe and secure home. As the world overrun...`, 'United States', 'Drama, Thriller, Horror, Action', 'Series', 'Frank Darabont, Angela Kang', 'Norman Reedus, Melissa McBride, Lauren Cohan, Josh McDermitt, Christian Serratos, Danai Gurira'),
	new TVShow('24 seassons', 'HD', 'img/south-park.jpg', 'South Park', 8.7, 1997, `In South Park, Colorado, we follow the adventures of four foul-mouthed fourth-graders: Eric Cartman, the rude, obnoxious, sadistic, racist, fat kid; Stan Marsh, a quiet kid with a huge crush on Wendy Testaberger (he usually vomits whenever he talks to her or when something gross...`, 'United States', 'Comedy, Animation', 'Cartoon', 'Trey Parker, Matt Stone, Brian Garden', 'Trey Parker, Matt Stone, Issac Hayes', 'img/southpark-slideshow.jpg'),
	new TVShow('4 seassons', 'HD', 'img/rick-and-morty.jpg', 'Rick and Morty', 9.2, 2013, `Rick Sanchez, a depressed, alcoholic, abusive, madman (who also happens to be a genius scientist with the ability to travel through dimensions) returns to his daughter Beth's life after two decades of being silent between the two. He finds her married to an incompetent, pathetic...`, 'United States', 'Animation, Comedy, Sci-Fi, Adventure', 'Cartoon', 'Dan Harmon, Justin Roiland', 'Justin Roiland, Chriss Parnell, Spencer Grammer', 'img/rick-and-morty-slideshow.jpg'),
	new TVShow('4 seassons', 'HD', 'img/johnny-bravo.jpg', 'Johnny Bravo', 7.2, 1997, `Johnny Bravo (Jeff Bennett) is a dim-witted, narcissistic ne'er-do-well with an immaculately maintained blond pompadour hairstyle, ever-present sunglasses, chiselled body, and an Elvis-like accent. Bravo spends most of his life failing miserably at womanizing and getting into trouble (usually due to the womanizing) than anything else, save...`, 'United States', 'Animation, Comedy, Adventure, Family', 'Cartoon', 'Van Partible, Jed Spingarn, Butch Hartman', 'Jeff Bennett, Brenda Vaccaro, Mae Whitman'),
	new TVShow('1 seassons', 'HD', 'img/dexters-laboratory.jpg', 'Dexter\'s\ Laboratory', 7.9, 1995, `If you ever meet Dexter, you'd probably notice a few things about him: he speaks with an Eastern-European accent, wears a labcoat, and happens to be a boy-genius with an amazing laboratory in his bedroom! The show follows Dexter's adventures, in and out...`, 'United States', 'Animation, Comedy, Adventure, Family', 'Cartoon', 'N / A', 'Christine Cavanaugh, Kath Souice, Jeff Benneft'),
	new TVShow('32 seassons', 'HD', 'img/the-simpsons.jpg', 'The Simpsons', 8.6, 1989, `The Simpsons is the ultimate (if very unorthodox) nuclear family. Homer, the lovable dufus father, stumbles apathetically through his family life and work at the local nuclear power plant. Marge, the overbearing, but responsible mother, Bart, the fourth grade underachiever and...`, 'United States', 'Animation, Comedy, Adventure, Family', 'Cartoon', 'James L. Brooks, Matt Groening, Sam Simon', 'Dan Castellaneta, Nancy Cartwright, Harry Shearer, Julie Kavner'),
	new TVShow('19 seassons', 'HD', 'img/family-guy.jpg', 'Family Guy', 8.1, 1999, `Sick, twisted and politically incorrect, the animated series features the adventures of the Griffin family. Endearingly ignorant Peter and his stay-at-home wife Lois reside in Quahog, R.I., and have three kids. Meg, the eldest child, is a social outcast, and teenage Chris is awkward and clueless when it comes...`, 'United States', 'Animation, Comedy, Adventure, Family', 'Cartoon', 'Seth MacFarlane, David Zuckerman', 'Seth MacFarlane, Alex Borstein, Seth Green, Mila Kunis'),
	new TVShow('110 min', 'HD', 'img/mortal-kombat.jpg', 'Mortal Combat', 6.2, 2021, `MMA fighter Cole Young (Lewis Tan), accustomed to taking a beating for money, is unaware of his heritage-or why Outworld's Emperor Shang Tsung (Chin Han) has sent his best warrior, Sub-Zero (Joe Taslim), an otherworldly Cryomancer, to hunt Cole down. Fearing for his family's safety...`, 'United States, Australia', 'Thriller, Sci-Fi, Adventure, Action, Fantasy', 'Movie', 'Simon McQuoid', 'Tadanobu Asano, Hiroyuki Sanada, Josh Lawson, Nathan Jones, Mehcad Brooks.'),
	new TVShow('139 min', 'HD', 'img/fight-club.jpg', 'Fight Club', 8.8, 1999, `A young urban professional who works for a major car manufacturer can't sleep. Although he doesn't have any of the associated afflictions, he stumbles across support groups as a means to let out whatever emotions he is feeling, which in turn allows him to sleep. But the use... `, 'United States, West Germany', 'Drama, Mystery, Thriller', 'Movie', 'David Fincher', 'Brad Pitt, Edward Norton, Meat Loaf, David Andrews, George Maguire...'),
	new TVShow('117 min', 'HD', 'img/300.jpg', '300', 7.6, 2007, `300 tells the story of the Battle of Thermopylae in 480 B.C. Persians under the rule of King Xerxes have already taken over some of the Hellenic city-states, and now threaten Sparta and Athens. King Leonidas of Sparta is left with two options: he will either have...`, 'United States', 'Action, Fantasy, War', 'Movie', 'Zack Synder', 'David Wenham, Lena Headey, Gerard Butler'),
	new TVShow('242 min', 'HD', 'img/justice-league.jpg', 'Justice League', 8.1, 2021, `Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions. The task proves more difficult...`, 'United States', 'Sci-Fi, Adventure, Action, Fantasy', 'Movie', 'Zack Snyder', 'Connie Nielsen, Robin Wright, Ben Affleck, Henry Cavill, Diane Lane..'),
	new TVShow('162 min', 'HD', 'img/watchmen.jpg', 'Watchmen', 7.6, 2009, `It's 1985 in an alternate reality. The Watchmen - comprised of the Comedian, Dr. Manhattan, Nite Owl II, Ozymandias, Rorschach and Silk Spectre II - are a disparate band of masked superheroes, modeled after the Minutemen, who were masked superheroes of a generation earlier, most of who...`, 'United States', 'Sci-Fi, Action, Mystery', 'Movie', 'Zack Snyder', 'Patrick Wilson, Carla Gugino, Jackie Earle Haley'),
	new TVShow('106min', 'HD', 'img/ipman.jpg', 'Ip Man', 8, 2008, `Dramatizes the life of Yip Man (1893-1972) in the mid to late 1930s. Foshun is a prosperous city with many martial arts schools. Yip, who practices Wing Chun, is the local master. When a rough gang comes to town, it's Yip they must challenge. Then, Japan invades China...`, 'China, Hong Kong', 'Drama, Action, Sport', 'Movie', 'Wilson Yip', 'Simon Yam, Donnie Yen, Siu Wong Fan'),
	new TVShow('4 seassons', 'HD', 'img/tokyo-ghoul.jpg', 'Tokyo Ghoul', 7.8, 2014, `In a present-day society where humans live in fear of ravenous hybrid creatures known as ghouls, and a constant internal war is being fought by the Commission of Counter Ghoul (CCG) to rid Tokyo of its many injustices, eighteen-year-old Ken Kaneki finds himself thrust into a world of...`, 'Japan', 'Drama, Animation, Action, Fantasy, Horror', 'Anime', 'N/A', 'Sora Amamiya, Natsuki Hanae, Michelle Rojas'),
	new TVShow('37 episodes', 'HD', 'img/death-note.jpg', 'Death Note', 9, 2007, `An intelligent high schooler who wants justice in the world and wants to be God of the new world he has created by destroying all evil. He plans on achieving this by using a strange supernatural book that fell from another realm onto earth. He tries to cleanse...`, 'Japan', 'Drama, Thriller, Animation, Crime, Fantasy, Mystery, Horror', 'Anime', 'N/A', 'Mamoru Miyano, Brad Swaile, Vincent Tong'),
	new TVShow('220+ episodes', 'HD', 'img/boruto.jpg', 'Boruto', 7.9, 2017, `Boruto: Naurto the Movie is about the new generation of the Village Hidden in the Leaves. Naurto at last achieved his dream of becoming 7th hokage. During this time he has a son named Boruto, who hates his father. He always complains that his father is never home to be with him...`, 'Japan', 'Animation, Comedy, Adventure, Action', 'Anime', 'Hiroyuki Yamashita', 'Yûko Sanpei, Kokoro Kikuchi, Ryûichi Kijima'),
	new TVShow('2 seasons', 'HD', 'img/hellsing.jpg', 'Hellsing Ultimate', 8.3, 2006, `In flashback, Integra is seen assuming leadership of the Hellsing organization as she resolves a conflict with her uncle with the help of the vampire Alucard. In present day, Alucard goes on a mission to the town of Cheddar to silence a vampiric priest..`, 'Japan', 'Animation, Action, Fantasy, Horror', 'Anime', 'Kohta Hirano', 'Katie Gray, Victoria Harwood, Crispin Freeman'),
	new TVShow('2 seasons', 'HD', 'img/one-punch-man.jpg', 'One Punch Man', 8.8, 2019, `In a world of superhuman beings, Saitama is a unique hero, he can defeat enemies with a single punch. But being just one hero in a world filled with them, his life is empty and hollow: he gets no respect from anyone, he displays a laidback...`, 'Japan', 'Animation, Comedy, Sci-Fi, Action, Fantasy', 'Anime', `Shingo Natsume,Chikara Sakurai,Yosuke Hatta,Shin'ichirô Ushijima,Nobuhiro Mutô,Shun'ichi...`, `Hiroki Yasumoto, Kyle Hebert, Hikaru Midorikawa, Kaito Ishikawa, Todd Haberkorn...`),
	new TVShow('1 season', 'HD', 'img/vinland-saga.jpg', 'Vinland Saga', 8.8, 2019, `A young man named Thorfinn finds himself in a quest for revenge against his father's killer. Firstly indulged in the aparent greatness of war and honor, Thorfinn quickly changes as he endures having to survive alone and then alongside the...`, 'Japan', 'Animation, Adventure, Action, History, War', 'Anime', `Shûhei Yabuta`, `Hiroki Yasumoto, Satoshi Hino, Sayaka Ohara, Akio Ôtsuka, Kenichirô Matsuda...`),
	new TVShow('5 seasons', 'HD', 'img/breaking-bad.jpg', 'Breaking bad', 9.5, 2008, `A young man named Thorfinn finds himself in a quest for revenge against his father's killer. Firstly indulged in the aparent greatness of war and honor, Thorfinn quickly changes as he endures having to survive alone and then alongside the..Walter H. White is a chemistry genius, but works as a chemistry teacher in an Albequerque, New Mexico high school...`, 'United States', 'Drama, Thriller, Crime', 'Series', `Vince Gilligan
	`, `Bryan Cranston, Aaron Paul, Anna Gunn`),
	new TVShow('5 seasons', 'HD', 'img/prison-break.jpg', 'Prison Break', 8.3, 2005, `Follow Lincoln Burrows is currently on death row and scheduled to die in a few months for an assassination his younger brother Michael is convinced he did not commit. With no other options and time winding down, Michael takes drastic measures to get...`, 'United States, United Kingdom', 'Drama, Thriller, Action, Crime, Mystery', 'Series', `Bobby Roth,Kevin Hooks,Dwight H. Little,Nelson McCormick,Karen Gaviola,Michael...`, `Dominic Purcell, Michael Rapaport, Stacy Keach, Robert Knepper, Rockmond Dunbar...`),
	new TVShow('7 seasons', 'HD', 'img/sons-of-anarchy.jpg', 'Sons of Anarchy', 8.3, 2008, `Sons of Anarchy is an adrenaline-charged initiation into the gritty underworld of outlaw motorcycle clubs. Hounded by law enforcement and targeted by ruthless rivals, the Sons of Anarchy face an uncertain and increasingly lawless future. Meanwhile, Jackson 'Jax' Teller (Charlie Hunnam) is torn between...`, 'United States', 'Drama, Thriller, Crime', 'Series', `Kurt Sutter`, `Charlie Hunnam, Katey Sagal, Mark Boone Junior`),
	new TVShow('5 seasons', 'HD', 'img/black-mirror.jpg', 'Black Mirror', 8.8, 2011, `Over the last ten years, technology has transformed almost every aspect of our lives before we've had time to stop and question it. In every home; on every desk; in every palm - a plasma screen; a monitor; a smartphone--a black mirror of our 21st Century existence...`, 'United Kingdom', 'Drama, Thriller, Sci-Fi', 'Series', `Owen Harris,Carl Tibbetts,James Hawes,Otto Bathurst,Euros Lyn,Brian Welsh,Bryn...`, `Owen Harris,Carl Tibbetts,James Hawes,Otto Bathurst,Euros Lyn,Brian Welsh,Bryn...`),
	new TVShow('1 season', 'HD', 'img/chernobyl.jpg', 'Chernobyl', 9.4, 2019, `On April 26, 1986 the Chernobyl nuclear power plant near Pripyat, Ukraine experienced a malfunction which resulted in a core explosion in reactor 4. This miniseries follows Valery Legasov, the lead scientist working to control the disaster, Boris Shcherbina, a Soviet politician representing the...`, 'United States, United Kingdom', 'Drama, History', 'Series', `Johan Renck`, `David Dencik, Jared Harris, Stellan Skarsgård, Emily Watson, Michael Socha...`),
	new TVShow('8 seasons', 'HD', 'img/black-list.jpg', 'The Blacklist', 8, 2013, `Elizabeth Keen lives a happy live with her husband Tom. They are even planning to adopt a baby. Elizabeth wants to go to her new job at the FBI when she is picked up by them and driven to a black-site to meet Raymond Reddington, a master criminal who vanished...`, 'United States', 'Drama, Thriller, Crime, Mystery', 'Series', `N/A`, `James Spader, Amir Arison, Megan Boone, Diego Klattenhoff, Harry Lennix...`),
	new TVShow('5 seasons', 'HD', 'img/samurai-jack.jpg', 'Samurai Jack', 8.5, 2001, `In ancient Japan, the shape-shifting wizard known as Aku (Mako and Greg Baldwin) resurfaces and attacks the nation. When the Emperor is captured, his son is sent to train throughout the world in many forms of discipline and combat. As an adult, he reunites with his mother...`, 'United States', 'Thriller, Animation, Sci-Fi, Adventure, Action, Fantasy', 'Cartoon', `Genndy Tartakovsky,Randy Myers,Robert Alvarez,Rob Renzetti,Chris Savino`, `Rob Paulsen, Kevin Michael Richardson, Jeff Bennett, Grey Griffin, Corey Burton...`),
	new TVShow('13 seasons', 'HD', 'img/spongebob.jpg', 'SpongeBob', 8.2, 1999, `Spongebob Squarepants is a cartoon about a yellow sponge named Spongebob Squarepants who lives underwater in the Pacific Ocean in a two story pineapple house in a town called Bikini Bottom with his neighbor Squidward Tentacles and his best friend Patrick Star. He works at...`, 'United States, United Kingdom, Korea, Canada, Spain', 'Animation, Comedy, Fantasy, Family', 'Cartoon', `Stephen Hillenburg,Tim Hill,Nick Jennings`, `Clancy Brown, Tom Kenny, Dee Bradley Baker, Rodger Bumpass, Carolyn Lawrence...`),
	new TVShow('4 seasons', 'HD', 'img/paf.jpg', 'Phineas and Ferb', 8, 2007, `Phineas Flynn (Vincent Martella) and Ferb Fletcher's (Thomas Brodie-Sangster's) backyard is the neighborhood hotspot for all of their cool inventions. Meanwhile, their elder sister Candace (Ashley Tisdale) is obsessed with busting her brothers for all the inventions...`, 'United States', 'Animation, Comedy, Sci-Fi, Action, Family', 'Cartoon', `Robert Hughes,Zac Moncrief,Jay Lender,Dan Povenmire,Sue Perrotto,Jeff...`, `Thomas Brodie Sangster, Ashley Tisdale, Corey Burton, Madison Pettis, Carlos Alazraqui...`),
	new TVShow('2 seasons', 'HD', 'img/gravityfalls.jpg', 'Gravity Falls', 8.9, 2012, `Twins Dipper and Mabel Pines are sent to spend the summer with their great-uncle, Grunkle Stan, in the mysterious town of Gravity Falls, Ore. Grunkle Stan has the kids help him run The Mystery Shack, the tourist trap that he owns. The twins try to...`, 'United States', 'Animation, Comedy, Adventure, Family, Mystery', 'Cartoon', `Alex Hirsch`, `Kristen Schaal, Jason Ritter, Alex Hirsch`),
	new TVShow('7 seasons', 'HD', 'img/futurama.jpg', 'Futurama', 8.4, 1999, `Philip J. Fry is a twenty-five-year-old delivery boy living in New York City who is cryogenically frozen on New Year's Eve 1999 for one thousand years, where he wakes up in New New York City on December 31, 2999. There, he meets Turanga Leela, a tough but...`, 'United States', 'Animation, Comedy, Sci-Fi, Romance', 'Cartoon', `Peter Avanzino,Bret Haaland,Gregg Vanzo,Ron Hughart,Brian Sheesley,Crystal Chesney,Frank...`, `Lucy Liu, Tress MacNeille, Maurice LaMarche, Leonard Nimoy, Phil LaMarr.`),
	new TVShow('5 seasons', 'HD', 'img/eee.jpg', 'Ed, Edd, n Eddy', 7.4, 1999, `The show revolves around life on a cul-de-sac, focusing on three friends who have nearly identical names: Ed, Edd, and Eddy. Ed is the strongest of the three and the least intelligent, Edd is the smartest and the most socially accepted...`, 'United States, Canada', 'Animation, Comedy, Family', 'Cartoon', `Danny Antonucci,Russ Mooney,Scott Underwood,Marlene Robinson May...`, `Matt Hill, Sam Vincent, Tommy Karlsen, Erin Fitzgerald, Kathleen Barr...`),
];

// Konstruktor funkcija za pravljenje TVShows objekata
function TVShow(time, quality, poster, title, stars, year, description, country, genre, type, director, cast, slideshowImg) {
	this.time = time;
	this.quality = quality;
	this.poster = poster;
	this.title = title;
	this.stars = stars;
	this.year = year;
	this.description = description;
	this.country = country;
	this.genre = genre;
	this.type = type;
	this.director = director;
	this.cast = cast;
	this.slideshowImg = slideshowImg;

	this.prikaziSe = () => {
		const moviesCardDiv = document.getElementById('movies-card-div');

		const imageDiv = document.createElement('div');
		imageDiv.classList = 'image-div';

		const poster = document.createElement('img');
		poster.src = this.poster;

		const playButton = document.createElement('div');
		playButton.classList = 'play-button';

		const description = document.createElement('p');
		description.innerHTML = this.description;

		const countryAndGenre = document.createElement('div');
		countryAndGenre.innerHTML = `
		<p><b>Country: </b>${this.country}</p>
		<p><b>Genre: </b>${this.genre}</p>`;

		const br = document.createElement('br');

		const actionsInCard = document.createElement('div');
		actionsInCard.classList = 'actions-in-card';

		const directorAndCast = document.createElement('div');
		directorAndCast.style.display = 'none';

		const director = document.createElement('p');
		director.innerHTML = this.director;

		const cast = document.createElement('p');
		cast.innerHTML = this.cast;

		const watchNowBtn = document.createElement('div');
		watchNowBtn.innerHTML =
			`<i class="fas fa-play"></i>&nbsp;Watch now`;
		watchNowBtn.onclick = () => {
			removeCurrentLeftNav();
			prikaziWatchNow();
			watchNow(this);
		}

		const addToListBtn = document.createElement('div');
		addToListBtn.innerHTML = `<i class="fas fa-heart"></i>&nbsp;Add to List`;
		addToListBtn.onclick = () => {
			addToListDiv(this);
			addToListBtn.innerHTML = `<i class="fas fa-heart"></i>&nbsp;Added`;
		}

		const cardFirstRow = document.createElement('div');
		cardFirstRow.classList = 'card-first-row';
		cardFirstRow.innerHTML = `
		<h1>${this.title}</h1>
		<h3><i class="fas fa-star"></i>&nbsp;${this.stars}</h3>
		<h2>${this.quality}</h2>`;

		const cardSecondRow = document.createElement('div');
		cardSecondRow.classList = 'card-second-row';
		cardSecondRow.innerHTML = `
		<h3>${this.time}</h3>
		<h3><i class="far fa-calendar"></i>&nbsp;&nbsp;${this.year}</h3>
		<h3>${this.type}</h3>`;

		moviesCardDiv.appendChild(imageDiv);
		imageDiv.appendChild(poster);
		imageDiv.appendChild(playButton);
		playButton.appendChild(description);
		playButton.appendChild(countryAndGenre);
		playButton.appendChild(directorAndCast);
		directorAndCast.appendChild(director);
		directorAndCast.appendChild(cast);
		playButton.appendChild(br);
		playButton.appendChild(actionsInCard);

		actionsInCard.appendChild(watchNowBtn);
		actionsInCard.appendChild(addToListBtn);

		imageDiv.appendChild(cardFirstRow);
		imageDiv.appendChild(cardSecondRow);

		return imageDiv;
	}

	this.prikaziSuggestions = () => {
		const suggestions = document.getElementById('suggestions');

		const suggDiv = document.createElement('div');
		suggDiv.classList = 'suggestion-div';
		suggDiv.onclick = () => {
			suggestions.style.display = 'none';

			removeCurrentLeftNav();
			prikaziWatchNow();
			watchNow(this);
		}

		const leftSide = document.createElement('div');
		leftSide.classList = 'left-side';

		const suggPoster = document.createElement('img');
		suggPoster.src = this.poster;

		const suggTitle = document.createElement('h3');
		suggTitle.classList = 'suggestion-h3';
		suggTitle.innerHTML = this.title;

		const rightSide = document.createElement('div');
		rightSide.classList = 'right-side';

		const suggStars = document.createElement('span');
		suggStars.innerHTML = `
		<i class="fas fa-star"></i>&nbsp;${this.stars}`;

		const suggYear = document.createElement('span');
		suggYear.innerHTML = `
		<i class="far fa-calendar"></i>&nbsp;${this.year}`;

		const suggTime = document.createElement('span');
		suggTime.innerHTML = this.time;

		suggestions.appendChild(suggDiv);
		suggDiv.appendChild(leftSide);
		leftSide.appendChild(suggPoster);
		suggDiv.appendChild(rightSide);
		rightSide.appendChild(suggTitle);
		rightSide.appendChild(suggStars);
		rightSide.appendChild(suggYear);
		rightSide.appendChild(suggTime);

		return suggDiv;
	}

	this.prikaziSlideShow = () => {
		const mySlides = document.createElement('div');
		mySlides.classList = 'mySlides fade';

		const slidesImg = document.createElement('img');
		slidesImg.src = this.slideshowImg;
		slidesImg.style.width = '1610px';
		slidesImg.style.height = '690px';

		const slideContent = document.createElement('div');
		slideContent.classList = 'content';

		const slideh1 = document.createElement('h1');
		slideh1.innerHTML = this.title;

		const slideMeta = document.createElement('div');
		slideMeta.id = 'meta';
		slideMeta.innerHTML =
			`<span>${this.quality}</span>
			<span><i class="fas fa-star"></i>&nbsp;${this.stars} stars</span>
			<span>${this.time}</span>
			<span>${this.genre}</span>`;

		const slidePara = document.createElement('p');
		slidePara.innerHTML = this.description;

		const br = document.createElement('br');

		const slideActions = document.createElement('div');
		slideActions.classList = 'actions';

		const watchNowBtn = document.createElement('span');
		watchNowBtn.innerHTML =
			`<i class="fas fa-play"></i>&nbsp;&nbsp;Watch now`;
		watchNowBtn.onclick = () => {
			prikaziWatchNow();
			watchNow(this);
		}

		const addToListBtn = document.createElement('span');
		addToListBtn.innerHTML =
			`<i class="fas fa-heart"></i>&nbsp;&nbsp;Add to List`;
		addToListBtn.onclick = () => {
			addToListBtn.innerHTML = `<i class="fas fa-heart"></i>&nbsp;Added`;
			addToListDiv(this);
		}

		mySlides.appendChild(slidesImg);
		mySlides.appendChild(slideContent);
		slideContent.appendChild(slideh1);
		slideContent.appendChild(slideMeta);
		slideContent.appendChild(slidePara);
		slideContent.appendChild(br);
		slideContent.appendChild(slideActions);
		slideActions.appendChild(watchNowBtn);
		slideActions.appendChild(addToListBtn);
		slideContent.appendChild(br);
		slideContent.appendChild(br);

		return mySlides;
	}
}

// Filteruje TVShows koji imaju slike za slideshow
const filterSlideshow = TVShows.filter((f) => {
	return f.slideshowImg;
});

// Prikazuje Slideshow na homepage-u
function prikaziSlideShowDiv() {
	const slideshowContainer = document.getElementById('slideshow-container');
	slideshowContainer.innerHTML = '';

	for (let i = 0; i < filterSlideshow.length; i++) {
		slideshowContainer.appendChild(filterSlideshow[i].prikaziSlideShow());
	}
}

prikaziSlideShowDiv();

// Prikazuje kartice TVShows-a ispod input search polja
function prikaziSuggestionsDiv() {
	const suggestions = document.getElementById('suggestions');
	suggestions.innerHTML = '';

	for (let i = 0; i < TVShows.length; i++) {
		suggestions.appendChild(TVShows[i].prikaziSuggestions());
	}
}

prikaziSuggestionsDiv();

// Prikazuje sve TVShows-e
function prikaziEverything() {
	const moviesCardDiv = document.getElementById('movies-card-div');
	moviesCardDiv.innerHTML = '';

	for (let i = 0; i < TVShows.length; i++) {
		moviesCardDiv.appendChild(TVShows[i].prikaziSe());
	}
}

prikaziEverything();

// Funkcija pravi delete X dugme koje brise value unutar search bara u nav-u, takodje radi i ostale manipulacije
function createDelInputValues() {
	const searchInput = document.getElementById('search');
	const rightNav = document.getElementById('right-nav');

	const delInputValues = document.createElement('i');
	delInputValues.classList = 'fas fa-times';
	delInputValues.id = 'del-input-values';
	delInputValues.onclick = () => {
		searchInput.value = '';
		delInputValues.style.visibility = 'hidden';
		searchInput.focus();
	}

	rightNav.appendChild(delInputValues);

	searchInput.onkeyup = () => {
		if (searchInput.value !== '') {
			delInputValues.style.visibility = 'visible';
		}
		else {
			delInputValues.style.visibility = 'hidden';
		}
	}
}

createDelInputValues();

// Prikazuje element koji smo trazili u inputu i prikazuje ga
function searchElement() {
	prikaziHome();
	let search = document.querySelector('#search').value;

	if (search === '') {
		return addedVideoWarningFunc('You must type something!')
	}
	if (search !== '') {
		deSelectAllRadio();
		scrollWindow(0, 1200);
	}


	const filterSelectedInSearch = TVShows.filter((el) => {
		return el.title.toLowerCase().includes(search);
	});

	const moviesCardDiv = document.getElementById('movies-card-div');
	moviesCardDiv.style.display = 'grid';
	moviesCardDiv.innerHTML = '';

	for (let i = 0; i < filterSelectedInSearch.length; i++) {
		moviesCardDiv.appendChild(filterSelectedInSearch[i].prikaziSe());
	}

	if (filterSelectedInSearch.length === 0) {
		noTVShowWarningFunc(`${search} <br> dosen't exist, try something else!`);
	}
}

// Prikazuje TVShows kartice ispod u search inputu
function searchElementCard() {
	const search = document.getElementById('search').value.trim();
	const suggestionDiv = document.querySelectorAll('.suggestion-div');
	const suggestions = document.getElementById('suggestions');

	for (let i = 0; i < suggestionDiv.length; i++) {
		let content = suggestionDiv[i].lastElementChild.firstElementChild.innerHTML;
		if (content.toLowerCase().trim().includes(search)) {
			suggestions.style.display = 'block';
			suggestionDiv[i].style.display = 'flex';
		}
		else {
			suggestionDiv[i].style.display = 'none';
		}
		if (search === '') {
			suggestions.style.display = 'none';
		}
	}
}

// Funkcija koja skariva suggestions kad se klikne bilo gde drugde
function hideSuggestionDiv() {
	const suggestions = document.getElementById('suggestions');
	window.onclick = (e) => {
		if (e.target !== suggestions) {
			suggestions.style.display = 'none';
		}
	}
}

hideSuggestionDiv();

// Funkcija koja skroluje ordejeni element do ordejenog mesta
function scrollWindow(x, y) {
	window.scrollTo(x, y);
}

// Prikazuje komentare div
function prikaziKomentare() {
	const komentarWrapper = document.getElementById('komentar-wrapper');
	komentarWrapper.style.display = 'flex';
	komentarWrapper.innerHTML = '';

	const h2Komentar = document.createElement('h2');
	h2Komentar.innerHTML = 'Comments';

	const komentarName = document.createElement('input');
	komentarName.id = 'komentar-name';
	komentarName.placeholder = 'Enter your name..';
	komentarName.autofocus = true;

	const komentarDesc = document.createElement('textarea');
	komentarDesc.id = 'komentar-desc';
	komentarDesc.placeholder = 'Add a public comment..';
	komentarDesc.autofocus = true;

	const btnComment = document.createElement('button');
	btnComment.id = 'btn-comment'
	btnComment.innerHTML = 'Comment';
	btnComment.onclick = () => {
		dodajKomentar();
	}

	const btnCancle = document.createElement('button');
	btnCancle.id = 'btn-cancle'
	btnCancle.innerHTML = 'Cancle';
	btnCancle.onclick = () => {
		const komentarName = document.getElementById('komentar-name');
		komentarName.value = '';

		const komentarDesc = document.getElementById('komentar-desc');
		komentarDesc.value = '';
	}

	const bubbleWrapper = document.createElement('div');
	bubbleWrapper.id = 'bubble-wrapper';

	const komentarLeftSide = document.createElement('div');
	komentarLeftSide.id = 'komentar-left-side';

	const komentarRightSide = document.createElement('div');
	komentarRightSide.id = 'komentar-right-side';

	komentarWrapper.appendChild(komentarLeftSide);
	komentarWrapper.appendChild(komentarRightSide);
	komentarLeftSide.appendChild(h2Komentar);
	komentarLeftSide.appendChild(komentarName);
	komentarLeftSide.appendChild(komentarDesc);
	komentarLeftSide.appendChild(btnComment);
	komentarLeftSide.appendChild(btnCancle);
	komentarRightSide.appendChild(bubbleWrapper);
}

const komentari = [
	new Komentar('Stefan', 'Komentar 1', new Date()),
	new Komentar('Dragan', 'Komentar 2', new Date()),
	new Komentar('Petar', 'Komentar 3', new Date()),
];

// Pravi konstruktor funkciju za komentare
function Komentar(name, description, date, id) {
	this.date = new Date(date).getDate() + '-' + (new Date(date).getMonth() + 1) + '-' + new Date(date).getFullYear();
	this.time = new Date(date).getHours() + ':' + (new Date(date).getMinutes() < 10 ? '0' : '') + new Date(date).getMinutes();
	this.description = description;
	this.name = name;
	this.id = id;

	this.ispisiKomentare = () => {
		const bubble = document.createElement('div');
		bubble.classList = 'bubble animate__animated animate__fadeIn';

		const h4Name = document.createElement('h4');
		h4Name.innerHTML = `<i class="fas fa-user"></i>${this.name}`;

		const description = document.createElement('p');
		description.innerHTML = this.description;

		const span = document.createElement('span');
		span.innerHTML = `${this.date} - ${this.time}`;

		const trash = document.createElement('i');
		trash.classList = 'fas fa-trash-alt trash';
		trash.onclick = () => {
			izbrisiKomentar(this);
		}

		bubble.appendChild(h4Name);
		bubble.appendChild(description);
		bubble.appendChild(span);
		bubble.appendChild(trash);
		return bubble;
	}
}

// Prikazuje div komentare koju su dodati na dugme
function prikaziBubble() {
	let komentarName = document.getElementById('komentar-name').value = '';
	let komentarDesc = document.getElementById('komentar-desc').value = '';

	const bubbleWrapper = document.getElementById('bubble-wrapper');
	bubbleWrapper.innerHTML = '';
	for (let i = 0; i < komentari.length; i++) {
		bubbleWrapper.appendChild(komentari[i].ispisiKomentare());
	}
}

// Funkcija dodaje komentare na dugme
function dodajKomentar() {
	let komentarName = document.getElementById('komentar-name').value;
	let komentarDesc = document.getElementById('komentar-desc').value;
	let date = new Date();
	console.log(date);
	let id = Math.floor(Math.random() * 30000);

	if (komentarName === '' && komentarDesc === '') {
		return addedVideoWarningFunc(`You must type something!`);
	}

	let komentar = new Komentar(komentarName, komentarDesc, date, id);
	komentari.unshift(komentar);

	prikaziBubble();
}

// Funkcija koja brise komentare
function izbrisiKomentar(el) {
	el.className = 'animate__animated animate__fadeOut';

	for (let i = 0; i < komentari.length; i++) {
		let trenId = komentari[i].id;
		if (trenId === el.id) {
			komentari.splice(i, 1);
			break;
		}
	}
	prikaziBubble();
}

// Prikazuje TVShows video koji je kliknut na dugme Watch Now i ostalo
function watchNow(el) {
	location.hash = `${el.title}`;

	const watchNowDiv = document.getElementById('watch-now-div');
	watchNowDiv.innerHTML = '';

	const video = document.createElement('video');
	video.src = 'video.mp4';
	video.controls = 'true';

	const watchNowWrapper = document.createElement('div');
	watchNowWrapper.id = 'watch-now-wrapper';

	const leftSide = document.createElement('div');
	const rightSide = document.createElement('div');

	const watchNowPoster = document.createElement('img');
	watchNowPoster.src = el.poster;

	const infoDiv = document.createElement('div');
	infoDiv.classList = 'info-div';

	const watchNowH2 = document.createElement('h2');
	watchNowH2.innerHTML = el.title;

	const watchNowQuality = document.createElement('span');
	watchNowQuality.innerHTML = 'HD';

	const watchNowStars = document.createElement('span');
	watchNowStars.innerHTML = `<i class="fas fa-star"></i>&nbsp;${el.stars}`;

	const watchNowTime = document.createElement('span');
	watchNowTime.innerHTML = el.time;

	const watchNowDescription = document.createElement('p');
	watchNowDescription.innerHTML = `<b>Description: </b>${el.description}`;

	const watchNowCountry = document.createElement('p');
	watchNowCountry.innerHTML = `<b>Coutnry: </b> ${el.country}`;

	const watchNowGenre = document.createElement('p');
	watchNowGenre.innerHTML = `<b>Genre: </b> ${el.genre}`

	const watchNowYear = document.createElement('p');
	watchNowYear.innerHTML = `<b>Release:</b> ${el.year}`;

	const watchNowDirector = document.createElement('p');
	watchNowDirector.innerHTML = `<b>Director:</b> ${el.director}`;

	const watchNowCast = document.createElement('p');
	watchNowCast.innerHTML = `<b>Cast:</b> ${el.cast}`;

	watchNowDiv.appendChild(video);
	watchNowDiv.appendChild(watchNowWrapper);
	watchNowWrapper.appendChild(leftSide);
	watchNowWrapper.appendChild(rightSide);
	leftSide.appendChild(watchNowPoster);
	rightSide.appendChild(watchNowH2);
	rightSide.appendChild(watchNowQuality);
	rightSide.appendChild(watchNowStars);
	rightSide.appendChild(watchNowTime);
	rightSide.appendChild(watchNowDescription);
	rightSide.appendChild(watchNowCountry);
	rightSide.appendChild(watchNowGenre);
	rightSide.appendChild(watchNowYear);
	rightSide.appendChild(watchNowDirector);
	rightSide.appendChild(watchNowCast);
}

// Filteruje da li TVShows sadrzi type: (Movie, Series, Anime, Cartoons)
function prikaziFilterTVShows(type) {
	const filterTVShows = TVShows.filter((el) => {
		return el.type === type;
	});

	const moviesCardDiv = document.getElementById('movies-card-div');
	moviesCardDiv.innerHTML = '';

	for (let i = 0; i < filterTVShows.length; i++) {
		moviesCardDiv.appendChild(filterTVShows[i].prikaziSe());
	}
}

// Funckija za pravljenje slideshowa
let slideIndex = 0;

function showSlides() {
	const slides = document.getElementsByClassName('mySlides');
	const dots = document.getElementsByClassName('dot');
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	slideIndex++;

	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
	setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides();

const addedTVShowsArr = [];

// Prikazuje Watchlist div
function addToListDiv(el) {
	if (addedTVShowsArr.includes(el) === false) {
		addedTVShowsArr.push(el);
		addToListNumber();
		addedVideoWarningFunc(`${el.title} has been added to your watchlist`);

		const myListTable = document.getElementById('my-list-table');

		const myLists = document.createElement('tr');
		myLists.classList = 'my-lists';

		const tdPoster = document.createElement('td');

		const posterList = document.createElement('img');
		posterList.src = el.poster;

		const titleList = document.createElement('td');
		titleList.innerHTML = el.title;

		const starsList = document.createElement('td');
		starsList.innerHTML = `<i class="fas fa-star"></i>&nbsp;${el.stars}`;

		const yearList = document.createElement('td');
		yearList.innerHTML = `<i class="far fa-calendar"></i>&nbsp;&nbsp;${el.year}`

		const typeList = document.createElement('td');
		typeList.innerHTML = el.type;

		const timeList = document.createElement('td');
		timeList.innerHTML = el.time;

		const tdPlay = document.createElement('td');

		const btnPlay = document.createElement('button');
		btnPlay.innerHTML = `<i class="fas fa-play"></i>&nbsp;Watch now`;
		btnPlay.onclick = () => {
			removeCurrentLeftNav();
			prikaziWatchNow();
			watchNow(el);
		}

		const tdDelete = document.createElement('td');

		const btnDelete = document.createElement('button');
		btnDelete.innerHTML = `<i class="fas fa-trash"></i>&nbsp;Remove`;
		btnDelete.onclick = () => {
			addedVideoWarningFunc(`${el.title} has been removed!`);

			setTimeout(() => {
				btnDelete.parentElement.parentElement.remove();
				removeAddedTVshow(el);
			}, 1000);
			myLists.classList = 'animate__animated animate__fadeOut';
		}

		myListTable.appendChild(myLists);
		myLists.appendChild(tdPoster);
		tdPoster.appendChild(posterList);
		myLists.appendChild(titleList);
		myLists.appendChild(starsList);
		myLists.appendChild(yearList);
		myLists.appendChild(timeList);
		myLists.appendChild(typeList);
		myLists.appendChild(tdPlay);
		myLists.appendChild(tdDelete);
		tdPlay.appendChild(btnPlay);
		tdDelete.appendChild(btnDelete);
	} else {
		addedVideoWarningFunc(`${el.title} was already added!`);
	}
}

// Prikazuje broj koliko ste sacuvali u watchlistu
function addToListNumber() {
	const favNumber = document.querySelector('#fav');
	favNumber.innerHTML = `(${addedTVShowsArr.length})`;
}

addToListNumber();

// Funkcija koja brise TVShows is Watchliste
function removeAddedTVshow(el) {
	for (let i = 0; i < addedTVShowsArr.length; i++) {
		let trenTitle = addedTVShowsArr[i].title;
		if (trenTitle === el.title) {
			addedTVShowsArr.splice(i, 1);
			break;
		}
	}
	addToListNumber();
	prikaziMyList();
}

const genres = document.querySelectorAll('.genre');
const years = document.querySelectorAll('.year');

for (let i = 0; i < genres.length; i++) {
	genres[i].addEventListener('click', prikaziGenres);
}

for (let i = 0; i < years.length; i++) {
	years[i].addEventListener('click', prikaziYears);
}

// Filtrira elemnete kad se klikne na (Action, Horror, Drama, itd...)
function prikaziGenres() {
	deSelectAllRadio();
	scrollWindow(0, 990);

	const genre = this.innerHTML;

	const filterTVShowsGenre = TVShows.filter((el) => {
		return el.genre.includes(genre);
	});

	const moviesCardDiv = document.getElementById('movies-card-div');
	moviesCardDiv.style.display = 'grid';
	moviesCardDiv.innerHTML = '';

	for (let i = 0; i < filterTVShowsGenre.length; i++) {
		moviesCardDiv.appendChild(filterTVShowsGenre[i].prikaziSe());
	}

	if (this.innerHTML === 'All') {
		prikaziEverything();
	}
}

// Filtrira elemnete kad se klikne na (1999, 2012, 2005, itd...)
function prikaziYears() {
	deSelectAllRadio();
	scrollWindow(0, 990);

	const year = this.innerHTML;

	const filterTVShowsYear = TVShows.filter((el) => {
		return el.year === parseInt(year);
	});

	const moviesCardDiv = document.getElementById('movies-card-div');
	moviesCardDiv.style.display = 'grid';
	moviesCardDiv.innerHTML = '';

	for (let i = 0; i < filterTVShowsYear.length; i++) {
		moviesCardDiv.appendChild(filterTVShowsYear[i].prikaziSe());
	}

	if (filterTVShowsYear.length === 0) {
		noTVShowWarningFunc(`TVShow form year ${year} <br> dosen't exist, try something else!`);
	}
}

// Prikazuje dole desno u cosku warning div
function addedVideoWarningFunc(text) {
	const videoWarning = document.getElementById('video-warning');

	const videoWarningDiv = document.createElement('p');
	videoWarningDiv.innerHTML = text;
	videoWarningDiv.classList = 'animate__animated animate__lightSpeedInRight added-video-warning';

	videoWarning.appendChild(videoWarningDiv);

	setTimeout(() => {
		videoWarningDiv.classList = 'animate__animated animate__lightSpeedOutRight added-video-warning';
	}, 2000);

	setTimeout(() => {
		videoWarning.removeChild(videoWarningDiv);
	}, 3000);
}

// Kada se pretrazuje TVShow a taj film ne postoji izbacuje warning text
function noTVShowWarningFunc(value) {
	const noTVShowWarning = document.createElement('h2');
	noTVShowWarning.id = 'no-tvshow-warning';
	noTVShowWarning.classList = 'animate__animated animate__tada';
	noTVShowWarning.innerHTML = value;

	const moviesCardDiv = document.querySelector('#movies-card-div');
	moviesCardDiv.appendChild(noTVShowWarning);

	if (moviesCardDiv.contains(noTVShowWarning)) {
		moviesCardDiv.style.display = 'block';
	}
}

// Selektuje samo 'All' radio button;
function selectAllRadio() {
	const radioBtn = document.querySelectorAll('input[type=radio]');
	radioBtn.forEach(el => {
		if (el.id === 'all') {
			el.checked = true;
		}
	});
}

// Deselektuje sve radio buttone
function deSelectAllRadio() {
	const radioBtn = document.querySelectorAll('input[type=radio]');
	radioBtn.forEach(el => el.checked = false);
}


















