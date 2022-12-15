import { Github } from "./components/Github";
import { UI } from "./components/Ui";

let client_id = import.meta.env.CLIENT_ID,
  client_secret = import.meta.env.CLIENT_SECRET;
const github = new Github(client_id, client_secret);
const ui = new UI();
const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //buscador
  const textSearch = document.getElementById("textSearch").value;

  if (!textSearch) return false;

  if (textSearch !== "") {
    github
      .fetchUser(textSearch)
      .then((data) => {
        if (data.data.message === "Not Found") {
          ui.showMessage(data, "alert alert-danger mt-2 col-md-12");
        } else {
          ui.showProfile(data.data);
          ui.showRepo(data.dataRepo);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
});
