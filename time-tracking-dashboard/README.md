# Time Tracking Dashboard

## Overview
The Time Tracking Dashboard is a web application designed to help users track their activities and monitor their productivity. It provides a user-friendly interface to visualize activity statistics and manage time effectively.

## Features
- **Activity Tracking**: View individual activity statistics through the Activity Card component.
- **Navigation**: Easily navigate through different sections of the dashboard using the Sidebar and Header components.
- **Responsive Design**: The application is styled with global CSS to ensure a consistent look and feel across all devices.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yiro02/DELL.git
   ```
2. Navigate to the project directory:
   ```
   cd time-tracking-dashboard
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```
The build files will be generated in the `dist` directory.

## File Structure
```
time-tracking-dashboard
├── src
│   ├── app
│   │   ├── App.tsx
│   │   ├── components
│   │   │   ├── ActivityCard.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── index.ts
│   │   ├── data
│   │   │   └── stats.ts
│   │   ├── styles
│   │   │   └── globals.css
│   │   └── types
│   │       └── index.ts
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── .gitignore
├── README.md
└── public
    └── favicon.svg
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.