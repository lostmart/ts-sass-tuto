import { users } from "./data.js"
import { IUser } from "./data.js"

const container = document.querySelector(".container") as HTMLDivElement

if (container) {
	// Now that we've checked, TypeScript knows `container` is not null.
	const divContainer = container as HTMLDivElement
	users.forEach((user) => {
		// console.log(articleElement(user))

		const articleCard = articleElement(user)

		articleCard.append(figureElement(user))

		divContainer.append(articleCard)
	})
} else {
	alert("no container found !!!")
}

function figureElement(user: IUser): HTMLElement {
	const figureElem = document.createElement("figure")
	figureElem.append(cardImg(user))

	const figCaption = document.createElement("figcaption")

	const cardTitle = document.createElement("h3")
	cardTitle.innerText = user.userName

	const span = document.createElement("span")
	span.innerText = user.post

	figCaption.append(cardTitle)
	figCaption.append(span)

	figureElem.append(figCaption)

	return figureElem
}

function cardImg(user: IUser): HTMLElement {
	const img = document.createElement("img")
	img.src = `./assets/${user.imageUrl}`
	img.setAttribute("alt", user.userName)
	return img
}

function articleElement(user: IUser): HTMLElement {
	const article = document.createElement("article")
	article.className = "card"
	article.classList.add(checkColor(user.color))
	return article
}

function checkColor(color: number): string {
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
