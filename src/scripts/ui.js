// render activator
const activator = document.querySelector('.activator')

const renderActivators = (data, id) => {

  const html = `
    <div data-aos="zoom-in-right" class="activator card col-lg-3 m-1">
      <div class="front">
        <img id="cardImg" src=${data.image} alt=${data.name} class="card-img-top">
      </div>
      <div class="back">
        <div class="card-body">
          <h1 class="text-center">${data.name} </h1>
          <i>${data.title}</i>
          <p class="text-muted text-center">
            <h5 class="text-info">Build Connections</h5>
            <ul class="list-group list-group-horizontal">
              ${data.twitter ?
              `<li class="list-group-item">
                <a class="text-decoration-none" href="${data.twitter}">            
                <img width="30px" src="../assets/icons/twitter.svg" alt="twitter">
                </a>
              </li> `:''
              }
              ${data.linkedin ?
              `<li class="list-group-item">
                <a class="text-decoration-none" href="${data.linkedin}">
                <img width="30px" src="../assets/icons/linkedin.svg" alt="linkedin">
                </a>
              </li> `:''
              }
              ${data.facebook ?
              `<li class="list-group-item">
                <a class="text-decoration-none" href="${data.facebook}">
                <img width="30px" src="../assets/icons/facebook.svg" alt="facebook">
                </a>
              </li> `:''
            }
            ${data.instagram ?
            `<li class="list-group-item">
              <a class="text-decoration-none" href="${data.instagram}">
              <img width="30px" src="../assets/icons/instagram.svg" alt="instagram">
              </a>
            </li> `:''
            }
          </ul>
        </p>
        </div>
      </div>
    </div>
  `;

  activator.innerHTML += html
}