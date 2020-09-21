$(() => {
  $(".facilitator_btn").click(function (e) {
    $(".login_page").remove();

    let userLinks;

    userLinks = `
      <nav>
        <div class="nv-block">
          <a class="navbar-brand" href="#">Q.a. </a>
          <div class="nv-links">
            <a class="nav-link" href="#" class="browse_btn">Browse</a>
            <a class="nav-link" href="#" class="create_btn">Create</a>
          </div>
          <div class="nv-links-right">
            <a class="nav-link" href="#" id="nv_username">username</a>
            <a class="nav-link" href="#">Login / Register</a>
            <a class="nav-link" href="#">Logout</a>
          </div>
        </div>
      </nav>
      `;

    $("#page-header").append(userLinks);
    e.preventDefault();
  });
});
