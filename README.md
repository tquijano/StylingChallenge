# Styling Challenge

This repo contains an implementation of the **Styling Challenge** using React with Vite, TypeScript and SCSS modules. The project is focused on achieving pixel-perfect design following the Figma disposed to, responsive layout, and styled components as specified in the challenge requirements.

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (>= 18.x)
- **Yarn** (>= 1.22.x)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/tquijano/StylingChallenge
   cd StylingChallenge
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn start
   ```
4. Open your browser and navigate to [Vite Dev port on localhost](http://localhost:5173) *http://localhost:5173*

## Expected Output
Once the development server is running, you should see the Firm Facts component properly rendered and positioned on the page according to the provided design.

## Components
1. Facts component:
  - Implements a grid layout for cards.
  - Centered horizontally and positioned 100px from the top.
2. Card component:
  - Variants:
    + `default`: Changes background color on hover.
    + `border`: Changes border color on hover.
3. Button component:
  - Variants:
    + `default`: Single-line text, truncated without ellipsis.
    + `icon`: icon: Includes an icon, supports one or two lines of text, truncates text with ellipsis.

## Styling
- SCSS modules are used for styling all components.
- Responsive scaling is applied between 768px and 1680px screen widths.

**Thank you for considering me for the application of this test. I truly appreciate the opportunity!**
