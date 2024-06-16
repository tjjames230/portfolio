export { init };
import { updateHeaderActiveLink, mobileNavInit } from "./components/header";
import { scrollToTop } from "./components/toTopBtn";

function init() {
	updateHeaderActiveLink();
	scrollToTop();
}
