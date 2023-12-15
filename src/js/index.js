const header = document.querySelector('header');
const tabButton = document.querySelectorAll('.nav-link')
const searchInput = document.getElementById('search-input');
let isOpen = false;


window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});
tabButton.forEach(button => {
  button.addEventListener('click', function () {
      // Tıklanan butonun data-bs-target değerini alın
      const targetId = this.getAttribute('data-bs-target');

      // Eşleşen tab-pane elementini bulun
      const targetPane = document.querySelector(targetId);
      if (targetPane) {
          // Tüm tab-panes elementlerinden "show" ve "active" sınıflarını kaldırın
          document.querySelectorAll('.tab-pane').forEach(pane => {
              pane.classList.remove('show', 'active');
          });

          // Tıklanan tab-pane elementine "show" ve "active" sınıflarını ekleyin
          targetPane.classList.add('show', 'active');
      }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll('.tab-link');
  const profileTabLinks = document.querySelectorAll('.profile-nav-link ');
  const navLinks = document.querySelectorAll('.nav-link');

  const tabContents = document.querySelectorAll('.tab-pane');
  const profiletabContents = document.querySelectorAll('.profile-tab-pane');
  const navContents = document.querySelectorAll('.nav-pane');

  function showContent(links, contents, index) {
    console.log(links, contents, index)
      links.forEach(link => link.classList.remove('active', 'show'));

      links[index].classList.add('active', 'show');

      contents.forEach(content => content.classList.remove('show', 'active'));

      contents[index].classList.add('show', 'active');
  }

  tabLinks.forEach((link, index) => {
      link.addEventListener('click', function (event) {
          event.preventDefault(); // Sayfanın yeniden yüklenmesini önle

          showContent(tabLinks, tabContents, index); // Tıklanan tabı göster
      });
  });

  navLinks.forEach((link, index) => {
      link.addEventListener('click', function (event) {
          event.preventDefault(); // Sayfanın yeniden yüklenmesini önle

          showContent(navLinks, navContents, index); // Tıklanan nav'ı göster
      });
  });
  profileTabLinks.forEach((link, index) => {
      link.addEventListener('click', function (event) {
          event.preventDefault(); // Sayfanın yeniden yüklenmesini önle

          showContent(profileTabLinks, tabContents, index); // Tıklanan nav'ı göster
      });
  });

  showContent(tabLinks, tabContents, 0);
  showContent(navLinks, navContents, 0);
  showContent(profileTabLinks, tabContents, 0);
});

// Add event listener to filter items based on input
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const items = dropdownMenu.querySelectorAll('a');

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

function toggleDropdown() {
  isOpen = !isOpen;
  dropdownMenu.classList.toggle('hidden', !isOpen);
}
dropdownButton.addEventListener('click', () => {
  toggleDropdown();
});

toggleDropdown();

function toggleMenu() {
  const mobileNav = document.getElementById('mobile-nav');
  mobileNav.classList.toggle('hidden');
}

function toggleUserDropdown() {
  const userDropdown = document.querySelector('.user-dropdown');
  userDropdown.classList.toggle('hidden');
}
function toggleSearch() {
  const searchInput = document.querySelector('.header-search-box input');
  searchInput.classList.toggle('hidden');
  searchInput.classList.toggle('block');
}