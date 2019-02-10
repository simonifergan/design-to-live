        function toggleNav() {
            document.querySelector('.main-nav').classList.toggle('show');
            setTimeout(function () {document.body.classList.toggle('show')}, 600);
        }

        function toggleModal() {
            document.querySelector('.modal-screen').classList.toggle('show');
            document.body.classList.toggle('show');

        }

        function closeModal(ev) {
            document.querySelector('.modal-screen').classList.remove('show');
            document.body.classList.remove('show');
        }

        function toggleDropdownMenu() {
            document.querySelector('.nav-dropdown-content').classList.toggle('show');
        }
