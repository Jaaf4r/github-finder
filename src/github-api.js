export async function fetchRepositories(username) {
	const url =
		`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;

	const response = await fetch(url);
	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(`${response.status}: ${errorData.message}`);
	}
	const data = await response.json();
	return data;
}

export async function fetchProfile(username) {
	const url = `https://api.github.com/users/${username}`;

	const response = await fetch(url);
	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(`${response.status}: ${errorData.message}`);
	}
	const data = await response.json();
	return data;
}
