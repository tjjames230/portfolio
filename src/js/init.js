export { init };
import { updateHeaderActiveLink } from "./components/header";
import { scrollToTop } from "./components/toTopBtn";

function init() {
	updateHeaderActiveLink();
	scrollToTop();
}
