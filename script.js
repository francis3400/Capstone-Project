const openNav = document.querySelector('.openbtn');
const closeNav = document.querySelector('.closebtn');
const mobileLinks = document.querySelectorAll('.mobile-nav');
const speakers = document.querySelector('.div-3');
const showMoreButton = document.querySelector('.show-more');
const width = window.innerWidth;
const isDesktop = width > 768;
let isShowMore = false;

openNav.addEventListener('click', () => {
  document.getElementById('menu-list').style.width = '250px';
});
closeNav.addEventListener('click', () => {
  document.getElementById('menu-list').style.width = '0';
});

mobileLinks.forEach((item) => {
  item.addEventListener('click', () => {
    document.getElementById('menu-list').style.width = '0';
  });
});

const data = [
  {
    id: 0,
    name: 'Honey Ogudeyi',
    images: 'images/speaker_01.png',
    post: 'Director Aruwa Capital Management',
    details:
      'Aruwa Capital management established for the management of capitals, and published her seminal book. The need of Capital Investment in 2020.',
  },
  {
    id: 1,
    name: 'Fola Olatunji',
    images: 'images/speaker_02.png',
    post: 'Director and Founder the growth mindset, and a Pan African activist',
    details:
      'As the main the pioneer of growth mindset, Seyi has been able to educate and sancitize a lot of people in Technology and how to think by themselves towards achieveing and impacting the society',
  },
  {
    id: 2,
    name: 'Uche Francis',
    images: 'images/speaker_03.png',
    post: 'CEO Stacks Investment Capitals',
    details:
      'Francis is the Executive Director of Stacks Energies and Investments, the aim of stacks is developing and building a susstainable economy through the use of creative thinking and development',
  },
  {
    id: 3,
    name: 'Benjamin Dada',
    images: 'images/speaker_04.png',
    post: 'Organiser Beaureu of Finance Forum Abuja, Chapter.',
    details:
      'Benjamin Dada have helped created a lot of channel to empower young people in personal development and resourceful thinking to achieve the best results',
  },
  {
    id: 4,
    name: 'Abisola Oladepo',
    images: 'images/speaker_05.png',
    post: 'President of Young Entrepreneurs Forum Abuja, Chapter.',
    details:
      'Experts on training young people in entrepreneurial development and management. Also, Patnered with Jezco Oil and Gas in alliance to personal growth and development',
  },
  {
    id: 5,
    name: 'Keturrah Dukka',
    images: 'images/speaker_06.png',
    post: 'CEO of Creative Arts, and convener of Faith in the Society.',
    details:
      'Keturrah had been leading open-source projects on creative arts and personal empowerment and development',
  },
];

const loadSpeakers = (item) => {
  let display = ' ';
  let data = item;
  if (!isDesktop) {
    if (isShowMore) {
      data = item;
    } else {
      data = item.slice(0, 2);
    }
  }
  data.forEach(({ name, images, post, details }) => {
    display += `
    <div class="speech-div-2">
        <div class="speech-div">
          <img class="speech-image" src=${images} alt="speaker-1"/>
        <div class="speech-1">
            <h3>${name}</h3>
        <p class="speech-italics">${post}</p>
           <div class="guide_2"></div>
           <p class="speech-bold">${details}</p>
        </div>
        </div>
        </div>`;
  });
  speakers.innerHTML = display;
};
// loadSpeakers(data);
window.addEventListener('DOMContentLoaded', () => {
  loadSpeakers(data);
});

showMoreButton.addEventListener('click', () => {
  isShowMore = !isShowMore;
  loadSpeakers(data);
  if (isShowMore) {
    showMoreButton.innerHTML = 'show less';
  } else {
    showMoreButton.innerHTML = 'show more';
  }
});
