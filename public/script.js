import { users } from "./data.js";
const container = document.querySelector(".container");
if (container) {
    // Now that we've checked, TypeScript knows `container` is not null.
    const divContainer = container;
    users.forEach((user) => {
        divContainer.innerHTML += `<article class="card ${checkColor(user.color)}">
										<figure>
											<img src="./assets/${user.imageUrl}" alt="${user.userName}" />
											<figcaption>
												<h3>${user.userName}</h3>
												<span>${user.post}</span>
											</figcaption>
										</figure>
									</article>
									`;
    });
}
else {
    alert("no container found !!!");
}
function checkColor(color) {
    if (color === 1) {
        return "jefes";
    }
    else if (color === 2) {
        return "marketing";
    }
    else if (color === 3) {
        return "communication";
    }
    else {
        return null;
    }
}
