# React Foundation

A mini React project with Dashboard, Users, Products, and Settings pages.

## Getting Started

```bash
npm install
npm start
```

App runs on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── api/
│   ├── apiClient.js       # Axios instance with interceptors
│   ├── userService.js     # User API calls
│   └── productService.js  # Product API calls
├── components/
│   ├── Layout.jsx         # App shell
│   ├── Sidebar.jsx        # Navigation sidebar
│   ├── PageHeader.jsx     # Top bar per page
│   ├── StatCard.jsx       # Metric card
│   ├── Badge.jsx          # Status badge
│   └── Button.jsx         # Reusable button
├── hooks/
│   ├── useUsers.js        # Fetch and manage users state
│   └── useProducts.js     # Fetch and manage products state
├── pages/
│   ├── Dashboard.jsx
│   ├── Users.jsx
│   ├── Products.jsx
│   └── Settings.jsx
├── App.jsx                # Routes
└── index.js
```

## Environment Variables

| Variable                 | Default                     |
| ------------------------ | --------------------------- |
| `REACT_APP_API_BASE_URL` | `http://localhost:3000/api` |

## Build

```bash
npm run build
```
