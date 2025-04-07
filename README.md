# Project Management Application

This is a **Project Management application** built with **React** that allows users to efficiently manage projects and tasks. The application provides an intuitive and user-friendly interface to create and manage multiple projects, track tasks within each project, and organize work in an efficient way.

---
![1](https://github.com/user-attachments/assets/26a1c0bb-47c7-4a4a-a550-2a7476a24e3d)

## Key Features:

- **Create and manage multiple projects**, where each project has:
  - A **title**
  - A **description**
  - A **due date**
  - A **unique ID**

- **For each project**, users can:
  - **Add multiple tasks**
  - **Delete individual tasks**
  - **Delete the entire project**
  - **View all tasks** associated with that specific project

- **Proper Isolation**:
  - Projects and tasks are properly isolated (tasks only appear in their respective projects).
  - Each project and task has a **unique identifier**.

- **Clean UI** with separate views for:
  - **Project list**
  - **Project creation form**
  - **Project details with tasks**
  - **Empty state** when no project is selected

---

## State Management:

- **Projects** are stored in the main `App` component.
- **Tasks** are managed per project using a nested state structure.
- All data relationships are maintained, i.e., tasks belong to specific projects.

---

## Features in Detail:

1. **Project Creation**:
   - You can create new projects by providing a title, description, and due date.

2. **Task Management**:
   - For each project, you can add, delete, and view tasks.
   - Each task can be individually managed within its respective project.

3. **Project Deletion**:
   - You can delete an entire project, including all its associated tasks.

4. **State Structure**:
   - The application uses **React state** to manage projects and tasks.
   - The state structure is nested to ensure that tasks are stored within their respective projects.

---

## Project Installation:

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/project-management-app.git
