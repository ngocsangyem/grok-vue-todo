# Vue 3 Todo App with Tailwind CSS and Pinia

This is a simple todo application built with Vue 3, TypeScript, Tailwind CSS, and Pinia for state management. It includes features like adding, deleting, and filtering todos, along with dark/light mode support and smooth animations using `@vueuse/motion`.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new todos with a simple form
- Delete todos with an undo option
- Filter todos by status: All, Completed, Incomplete, Deleted
- Dark and light mode support with theme persistence
- Smooth animations for creating, deleting, and filtering todos
- Responsive design with Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [yarn](https://yarnpkg.com/) (version 6 or higher)
- [Vite](https://vitejs.dev/) (bundler)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. Install dependencies:

    ```bash
    yarn install
    ```

3. Start the development server:

    ```bash
    yarn dev
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Usage

Here’s how to use the todo app:

- **Add a Todo**: Type your task in the input field and press "Add" or hit Enter.
- **Delete a Todo**: Click the "Delete" button next to a todo. You can undo the deletion from the "Deleted" filter.
- **Filter Todos**: Use the filter buttons to view todos by status (All, Completed, Incomplete, Deleted).
- **Toggle Theme**: Click the theme switch button (sun/moon icon) to switch between light and dark mode.

## Project Structure

The project is organized as follows:

```bash
todo-app/
├── public/                # Static assets (e.g., favicon, images)
├── src/
│   ├── assets/            # CSS and other assets
│   ├── components/        # Vue components
│   │   ├── TodoForm.vue      # Form for adding todos
│   │   ├── TodoFilterControls.vue # Buttons for filtering todos
│   │   ├── TodoList.vue      # List of todos
│   │   └── TodoItem.vue      # Individual todo item
│   ├── stores/            # Pinia stores
│   │   └── todo.ts        # Todo state management
│   ├── types/             # TypeScript types
│   │   └── todo.ts        # Todo type definitions
│   └── App.vue            # Main app component
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Project dependencies and scripts
```

## Technologies Used

- [Vue 3](https://vuejs.org/) - Front-end framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Pinia](https://pinia.vuejs.org/) - State management
- [Vite](https://vitejs.dev/) - Build tool
- [@vueuse/core](https://vueuse.org/) - Utilities for Vue (e.g., dark mode, local storage)
- [@vueuse/motion](https://motion.vueuse.org/) - Animation utilities
- [@heroicons/vue](https://heroicons.com/) - Icons for the theme switch

## Contributing

We welcome contributions! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/your-feature
    ```

3. Make your changes.
4. Commit your changes:

    ```bash
    git commit -m 'Add your feature'
    ```

5. Push to the branch:

    ```bash
    git push origin feature/your-feature
    ```

6. Open a pull request.

Please ensure your code adheres to the project's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Next step
...