// === variables ===
const users = [
    { 
      name: 'Tanya',
      surname: 'Sinclair', 
      title: 'UX Engineer',
      message: ` I’ve been interested in coding for a while but never taken the jump, until now.
                I couldn’t recommend this course enough. I’m now in the job of my dreams and so
                xcited about the future. `, 
      avatar: 'images/image-tanya.jpg'
    },
    { 
      name: 'John',
      surname: 'Tarkpor', 
      title: 'Junior Front-end Developer',
      message: ` If you want to lay the best foundation possible I’d recommend taking this course.
                The depth the instructors go into is incredible. I now feel so confident about
                starting up as a professional developer. `, 
      avatar: 'images/image-john.jpg'
    },
    { 
      name: 'Anton',
      surname: 'Baton', 
      title: 'Junior',
      message: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sequi consequuntur 
                   dolores quidem natus dolore, facere fugiat cupiditate, aliquid recusandae quibusdam, 
                   dignissimos vitae ullam ipsam. Explicabo ipsam voluptatem fuga magnam. `, 
      avatar: 'images/image-anton.jpg'
    },
    { 
      name: 'Tom',
      surname: 'Chorston', 
      title: 'Senior Java Developer',
      message: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quos corrupti praesentium 
                       quam nisi ullam at laudantium esse rerum eius? `, 
      avatar: 'images/image-tom.jpg'
    },
];
 
const messageField = document.querySelector('.message');
const authorName = document.querySelector('.author-name');
const authorTitle = document.querySelector('.author-title');
const authorAvatar = document.querySelector('.author-photo');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let sliderCounter = 0;
// === / variables ===

// === functionality ===
function renderData() {
    messageField.innerHTML = users[sliderCounter].message;
    authorName.innerHTML = `${users[sliderCounter].name} ${users[sliderCounter].surname}`;
    authorTitle.innerHTML = users[sliderCounter].title;
    authorAvatar.src = users[sliderCounter].avatar;
}

nextBtn.addEventListener('click', () => {
    if (sliderCounter === users.length - 1) {
        sliderCounter = -1;
    }
    sliderCounter++;
    renderData();
});

prevBtn.addEventListener('click', () => {
    if (sliderCounter <= 0) {
        sliderCounter = users.length;
    }
    sliderCounter--;
    renderData();
});

renderData();
// === / functionality ===
