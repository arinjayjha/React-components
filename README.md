# React Components

This repository contains **React Components**, covering **functional components, class components, props, defaultProps, conditional styling, and external CSS**.

---

## 📌 Functional Component - User Card
**Objective:** Practice JSX, functional components, props, and inline styling.  

### ✅ Requirements:
- Create a `UserCard` functional component.  
- Accept props: `name`, `email`, `age`.  
- Apply **inline CSS** styling for `border`, `padding`, and `background color`.  
- Use **defaultProps** for `age` if not provided.  
- Render at least **3 different UserCard components** inside `App.js`.  

### 🎯 Bonus:
- Conditionally style the background if `age > 30`.  

### 📂 Example Usage:
```jsx
<UserCard name="Kumar" email="kumar@gmail.com" />
<UserCard name="Ravi" email="ravi@example.com" age={38} />
<UserCard name="Sita" email="sita@test.com" age={25} />
```

---

## 📌 Class Component - Welcome Message
**Objective:** Practice class components, props, defaultProps, and internal styling.  

### ✅ Requirements:
- Create a `WelcomeMessage` class component.  
- Accept props: `username`, `greeting`.  
- Use **defaultProps** for greeting (`"Hello"`).  
- Apply **internal CSS** (inside a `<style>` tag in JSX) for `font size`, `color`, and `margin`.  
- Render **2–3 WelcomeMessage components** with different props inside `App.js`.  

### 📂 Example Usage:
```jsx
<WelcomeMessage username="Kumar" greeting="Hi" />
<WelcomeMessage username="Ravi" />
<WelcomeMessage username="Anita" greeting="Welcome" />
```

---

## 📌 Product List with External Styling
**Objective:** Practice props, mapping arrays to JSX, and external CSS.  

### ✅ Requirements:
- Create a `Product` functional component.  
- Accept props: `name`, `price`, `category`.  
- Use an **external CSS file (`Product.css`)** to style product cards with `border`, `shadow`, and `padding`.  
- The `ProductList` component should map through an array of at least **5 products** and render `Product` components.  
- Apply a **different background color** for products in the `"Electronics"` category.  

### 🎯 Bonus:
- Display product names in **UPPERCASE** using JSX expression.  

### 📂 Example Product Data:
```jsx
const products = [
  { name: "Laptop", price: 800, category: "Electronics" },
  { name: "Chair", price: 50, category: "Furniture" },
  { name: "Phone", price: 500, category: "Electronics" },
  { name: "Table", price: 120, category: "Furniture" },
  { name: "Headphones", price: 100, category: "Electronics" },
];
```

---

## 🚀 How to Run
1. Clone this repository:  
   ```bash
   git clone <repo-url>
   cd week-3-react-assignment
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the React app:  
   ```bash
   npm start
   ```

---

## 📖 Concepts Practiced
- Functional & Class Components  
- Props and Default Props  
- Inline, Internal & External Styling  
- Conditional Rendering & Styling  
- Mapping Arrays to JSX  

---
👨‍💻 **Author:** Arinjay Jha
