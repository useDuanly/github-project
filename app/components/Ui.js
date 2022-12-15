export class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showMessage(data, cssClass) {
    const $div = document.createElement("div");

    $div.className = cssClass;
    $div.appendChild(document.createTextNode(data.message));
    const $content = document.querySelector(".row");
    const $profile = document.getElementById("profile");
    $content.insertBefore($div, $profile);
  }

  clearMessage() {
    const alertFound = document.querySelector(".alert");

    if (alertFound) {
      alertFound.remove();
    }
  }

  showProfile(data) {
    console.log(data);
    this.profile.innerHTML = `
  
    <section class="card mt-2 animated bounceInLeft">

    <img src="${data.avatar_url}" alt="${data.login} class="card-img-top">
     
    <article class="card-body">
    <h3 class="card-title">${data.name} / ${data.login}</h3>
    <a href="${
      data.html_url
    }" class="btn btn-primary btn-block" target="_blank"> View Profile</a>
    <span class="badge badge-success">
    Followers: ${data.followers}</span>
    <span class="badge badge-primary">
    Following: ${data.following}</span>
    <span class="badge badge-warning">
    Company: ${data.company || "🙇🏻‍♂️"}</span>
    <span class="badge badge-info">
    Blog: ${data.blog || "ops"}</span>
    </article>

    </section>    
     
  
    
    `;
    this.clearMessage();
  }

  showRepo(repo) {
    let template = "";
    console.log(repo);
    repo?.forEach((repos) => {
      template += `
       <div class="card card-body mt-2 animated bounceInUp">
       <div class="row">
         <div class="col-md-6">
        <a href="${repos.html_url}" targe="_bank"> ${repos.name}</a>  
         </div>
         <div class="col-md-6">
          <span class="badge badge-primary">
            Language: ${repos.language}
          </span>
          <span class="badge badge-success">
            Forks: ${repos.forks_count}
         </span>
         </div>
       </div>
       </div>
      `;
    });

    document.getElementById("repositories").innerHTML = template;
  }
}
