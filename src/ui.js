const profile = document.querySelector("#profile");
const avatar = document.querySelector("#avatar");
const displayName = document.querySelector("#display-name");
const bio = document.querySelector("#bio");
const repoCount = document.querySelector("#repo-count");
const profileLink = document.querySelector("#profile-link");
const repoList = document.querySelector("#repo-list");


export function hideProfile() {
	profile.hidden = true;
}

export function renderProfile(data) {
	avatar.src = data.avatar_url;
	avatar.alt = `${data.login}'s GitHub avatar`;
	displayName.textContent = data.name || data.login;
	bio.textContent = data.bio || "No bio provided.";
	repoCount.textContent = data.public_repos;
	profileLink.href = data.html_url;
	profile.hidden = false;
}

export function renderRepositories(repositories) {
	repoList.replaceChildren();

	if (repositories.length === 0) {
		const emptyMessage = document.createElement("li");
		emptyMessage.className = "empty-message";
		emptyMessage.textContent = "This user has no public repositories.";

		repoList.appendChild(emptyMessage);
		return;
	}

	for (const repository of repositories) {
		const listItem = document.createElement("li");
		listItem.className = "repo-card";

		const link = document.createElement("a");
		link.className = "repo-link";
		link.textContent = repository.name;
		link.href = repository.html_url;
		link.target = "_blank";
		link.rel = "noopener noreferrer";

		const description = document.createElement("p");
		description.className = "repo-description";
		description.textContent = repository.description || "No description available.";

		listItem.appendChild(link);
		listItem.appendChild(description);
		repoList.appendChild(listItem);
	}
}
