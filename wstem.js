const descriptionLinks = document.querySelectorAll('.description-link');

// add click event listener to each description link
descriptionLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    
    const descriptionContent = document.querySelector('.description-content');

    
    descriptionContent.style.display = descriptionContent.style.display === 'none' ? 'block' : 'none';
  });
});


const partnershipsLinks = document.querySelectorAll('.partnerships-link');

partnershipsLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const partnershipsContent = document.querySelector('.partnerships-content');
    partnershipsContent.style.display = partnershipsContent.style.display === 'none' ? 'block' : 'none';
  });
});


const girlTeamLinks = document.querySelectorAll('.girl-team-link');

girlTeamLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const girlTeamContent = document.querySelector('.girl-team-content');
    girlTeamContent.style.display = girlTeamContent.style.display === 'none' ? 'block' : 'none';
  });
});

// repeat the same steps for member links
const memberLinks = document.querySelectorAll('.member-link');

memberLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // get the corresponding member content by using the link's href attribute
    const memberId = this.getAttribute('href');
    const memberContent = document.querySelector(memberId);

    
    memberContent.style.display = memberContent.style.display === 'none' ? 'block' : 'none';
  });
});