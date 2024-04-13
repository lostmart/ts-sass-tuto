# TypeScript Tutorial

Welcome to this TypeScript repository! This project is designed as an educational resource to help learners understand and apply TypeScript and some advanced JavaScript concepts, including factory functions and conditional classes. This tutorial is aimed at beginners and intermediate developers who are interested in enhancing their web development skills.

## Purpose

The purpose of this repository is to provide a structured tutorial that demonstrates the practical application of TypeScript in building more maintainable and scalable web applications. It is also intended to illustrate the use of factory functions and conditional classes, which are powerful patterns for creating flexible and reusable code.

## What You Will Learn

- **TypeScript Basics:** Learn the syntax and basic constructs of TypeScript, how it enhances JavaScript, and its benefits in large-scale projects.
- **Factory Functions:** Explore how to use factory functions to create objects with similar structures but distinct behaviors.
- **Conditional Classes:** Discover how to dynamically assign classes based on certain conditions to manipulate elements effectively.

## Installation

To get started with this tutorial, you'll need to clone this repository and install the necessary dependencies.

```bash
git clone https://github.com/lostmart/ts-sass-tuto
cd ts-sass-tuto
npm install
```

## Example of a TypeScript Factory Function

This example shows how a factory function in TypeScript might be structured to create objects with different properties but similar methods.

```typescript
function createPerson(name: string, age: number) {
	return {
		name: name,
		age: age,
		describe: function () {
			return `${this.name} is ${this.age} years old.`
		},
	}
}

const person1 = createPerson("Alice", 30)
console.log(person1.describe()) // Output: Alice is 30 years old.
```

## Deplyment test

Here you can find the deployed version of this page:
[Deployment](https://lostmart.github.io/ts-sass-tuto/public/)

## Contributing

Contributions to this tutorial are welcome! Whether you're looking to fix bugs, enhance the lessons, or add new sections, your input is valuable. Please submit a pull request or open an issue to discuss your ideas.
