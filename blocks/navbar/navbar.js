export default function decorate(block) {
  // Create Navbar Container
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';

  // Create Brand Element
  const brand = document.createElement('a');
  brand.href = '/';
  brand.className = 'navbar-brand';
  brand.textContent = 'BrandName';
  navbar.appendChild(brand);

  // Create Toggle Button for Mobile
  const toggleButton = document.createElement('div');
  toggleButton.className = 'navbar-toggle';
  toggleButton.innerHTML = `
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  `;
  navbar.appendChild(toggleButton);

  // Create Menu
  const menu = document.createElement('div');
  menu.className = 'navbar-menu';

  const navList = document.createElement('ul');
  navList.className = 'navbar-nav';
  const items = ['Home', 'About', 'Services', 'Contact'];

  items.forEach((item) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${item.toLowerCase()}`;
    link.textContent = item;
    listItem.appendChild(link);
    navList.appendChild(listItem);
  });

  menu.appendChild(navList);
  navbar.appendChild(menu);

  // Replace block content with the new navbar
  block.replaceChildren(navbar);

  // Toggle menu on mobile
  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

