# React Expense Tracker

A simple, elegant expense tracking application built with React. This application allows users to add, delete, and track their expenses with a clean user interface.

## Features

- Add new expenses with names and amounts
- Delete existing expenses
- Real-time total expense calculation
- Error boundary handling for robust error management
- Responsive design
- Clean, modern UI with smooth interactions

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/adas1gupta/ReactExpenseTracker.git
cd expense-tracker
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173` (or whatever port Vite assigns)

## Component Structure

- `App.jsx`: Main application component managing state and rendering
- `ErrorBoundary.jsx`: Error handling wrapper component
- `Expense.jsx`: Individual expense item display
- `ExpenseAmount.jsx`: Input component for expense amount
- `ExpenseForm.jsx`: Form component combining name and amount inputs
- `ExpenseName.jsx`: Input component for expense name

## State Management

The application uses React's useState hook for state management. The main state includes:

- `expenses`: Array of expense objects
- `expenseName`: Current expense name input
- `expenseAmount`: Current expense amount input

## Error Handling

The application includes an ErrorBoundary component that catches JavaScript errors anywhere in the child component tree. This ensures a better user experience by:

- Preventing the entire app from crashing
- Displaying a fallback UI
- Logging errors for debugging

## CSS Styling

The application uses a global CSS file (`global.css`) that provides:

- Modern, clean aesthetic
- Responsive design
- Interactive states (hover, focus)
- Consistent spacing and typography
- Mobile-first approach

## Usage

1. Enter an expense name in the "Expense Name" field
2. Enter the amount in the "Expense Amount" field
3. Click "Add" to add the expense to the list
4. To delete an expense, click the "Delete" button next to the expense
5. The total expense amount is automatically calculated and displayed

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with React
- Styled with custom CSS
- Error handling with React Error Boundaries
- State management with React Hooks