import "./style.css";
import { fetchProfile, fetchRepositories } from "./github-api.js";
import { hideProfile, renderProfile, renderRepositories } from "./ui.js";

const form = document.querySelector("#profile-form");
const usernameInput = document.querySelector("#username");
const searchButton = document.querySelector("#search-button");
const statusInput = document.querySelector("#status");


form.addEventListener("submit", async function (event) {
	event.preventDefault();

	const username = usernameInput.value.trim();
	if (!username) {
		statusInput.textContent = "Please enter a GitHub username.";
		return;
	}

	statusInput.textContent = `Searching for ${username}...`;
	hideProfile();
	searchButton.disabled = true;

	try {
		const [data, repositories] = await Promise.all([
			fetchProfile(username),
			fetchRepositories(username)
		]);

		renderProfile(data);
		renderRepositories(repositories);

		statusInput.textContent = "";
	} catch (error) {
		console.error(error);
		statusInput.textContent = "Could not load that user.";
	} finally {
		searchButton.disabled = false;
	}
});
