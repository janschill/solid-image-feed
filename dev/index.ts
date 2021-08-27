// import { sym } from "rdflib";
import { default as solidImageFeed } from "../src";
// import { handleIncomingRedirect, login, fetch, getDefaultSession } from '@inrupt/solid-client-authn-browser'

// const loginButton = widgets.button(
//   document,
//   undefined,
//   "Login",
//   async function () {
//     const session = await currentSession();
//     const popupUri = "https://solidcommunity.net/common/popup.html";
//     if (!session) {
//       await popupLogin({ popupUri });
//     }
//   }
// );

// const logoutButton = widgets.button(document, undefined, "Logout", () =>
//   logout()
// );

// const loginBanner = document.getElementById("loginBanner");

// trackSession((session) => {
//   if (!session) {
//     loginBanner.innerHTML = "";
//     loginBanner.appendChild(loginButton);
//   } else {
//     loginBanner.innerHTML = `Logged in as ${session.webId}`;
//     loginBanner.appendChild(logoutButton);
//   }
// });
const app = solidImageFeed.render();
document.getElementById("app").replaceWith(app);
