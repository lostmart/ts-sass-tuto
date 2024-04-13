const container = document.querySelector(".container")
users.forEach((user) => {
	container.innerHTML += `<article class="card ${checkColor(user.color)}">
										<figure>
											<img src="./assets/${user.imageUrl}" alt="${user.userName}" />
											<figcaption>
												<h3>${user.userName}</h3>
												<span>${user.post}</span>
											</figcaption>
										</figure>
									</article>
									`
})

function checkColor(color) {
	if (color === 1) {
		return "jefes"
	} else if (color === 2) {
		return "marketing"
	} else if (color === 3) {
		return "communication"
	} else {
		return ""
	}
}
