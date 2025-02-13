# Pokémon Stats Web Application

A web application built with **React**, **TypeScript**, **TailwindCSS**, and **Zustand** to list Pokémon with their stats. The app allows users to search, filter, and sort Pokémon by name, stats, and type. Data is fetched from the **PokeAPI**.

## Features

- **Search Pokémon by Name**: Search for Pokémon by their name.
- **Filter by Stats**: Filter Pokémon by stats like HP, Attack, Defense, and Speed.
- **Sort by Name or Type**: Sort Pokémon by name or type.
- **Pagination**: Load more Pokémon with a "Load More" button.
- **Persistent Filters**: Filters and sorting preferences are saved across page reloads.

---

## Technologies Used

- **Frontend**:

  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
  - [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework.
  - [Zustand](https://zustand-demo.pmnd.rs/) - A state management library for React.
  - [Vite](https://vitejs.dev/) - A fast build tool for modern web development.

- **API**:
  - [PokeAPI](https://pokeapi.co/) - A RESTful API for Pokémon data.

---

## App Structure

- **Frontend**:

pokemon-stats-app/
├── src/
│ ├── components/
│ │ ├── atoms/ # Basic UI components (Button, Input, Select)
│ │ ├── molecules/ # Combined components (PokemonFilters)
│ │ ├── organisms/ # Complex components (PokemonList)
│ ├── hooks/ # Custom hooks (useHttp)
│ ├── models/ # TypeScript interfaces and models
│ ├── services/ # API service layer (PokemonService)
│ ├── store/ # Zustand store for state management
│ ├── utils/ # Utility functions (filtering, sorting)
│ ├── App.tsx # Main application component
│ ├── main.tsx # Entry point
├── public/ # Static assets
├── .eslintrc.js # ESLint configuration
├── .gitignore # Git ignore file
├── package.json # Project dependencies
├── README.md # Project documentation
├── tsconfig.json # TypeScript configuration
├── vite.config.ts # Vite configuration

---

## How to Use

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. Download it from [here](https://nodejs.org/).
- **Git**: Install Git to clone the repository. Download it from [here](https://git-scm.com/).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/pokemon-stats-app.git
   cd pokemon-stats-app
   ```

---

## App Demo

**Pokemon Stats Demo**: [PokeAPI](https://pokeapi.co/)
