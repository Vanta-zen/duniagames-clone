# DuniaGames Clone

A modern, responsive clone of the DuniaGames website (https://duniagames.co.id/en) built with vanilla HTML, CSS, and JavaScript.

## 🎮 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, modern design with smooth animations and transitions
- **Interactive Elements**: 
  - Admin chat modal with real-time messaging simulation
  - Filter buttons for game categories
  - Join buttons for community rooms
  - Video play buttons
  - Search functionality
- **Loading Animation**: Full-screen loading overlay with smooth transitions
- **Gaming Sections**:
  - Hero banner with tournament information
  - Flash sale items with badges
  - Tournament listings
  - Video updates grid
  - Latest articles with featured content
  - Streamer content
  - Games community showcase
  - Community chat rooms

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Open `index.html` in your web browser, or serve it using a local web server

### Using a Local Server

For the best experience, serve the files using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📁 Project Structure

```
duniagames-clone/
├── index.html              # Main HTML file
├── README.md               # Project documentation
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/
│       └── placeholder.txt # Image assets directory
```

## 🎨 Design Features

### Color Scheme
- Primary: Dark theme with gradients (#0a0a0a, #1a1a1a, #2d2d2d)
- Accent: Orange gradient (#ff6b35 to #f7931e)
- Text: White (#ffffff) with gray accents (#888)

### Typography
- Font Family: Inter (Google Fonts)
- Responsive font sizes
- Clear hierarchy with proper contrast

### Layout
- CSS Grid and Flexbox for responsive layouts
- Mobile-first approach
- Smooth transitions and hover effects

## ⚡ Functionality

### Admin Chat
- Click the "Admin Chat" button to open the chat modal
- Type messages and press Enter or click Send
- Simulated admin responses with random delays
- Responsive chat interface

### Interactive Elements
- **Filter Buttons**: Switch between game categories
- **Join Buttons**: Join community rooms (simulated)
- **Play Buttons**: Play video content (simulated)
- **Search**: Search functionality (simulated)
- **Navigation**: Active state management

### Loading Experience
- Full-screen loading overlay
- Smooth fade-out transition
- Automatic hiding after page load

## 🔧 Customization

### Adding Images
1. Add your images to the `assets/images/` directory
2. Update the image paths in `index.html`
3. For the loading GIF, save it as `DG-Loading-Icons.gif` in the images directory

### Modifying Styles
- Edit `assets/css/style.css` to customize colors, fonts, and layouts
- The CSS is organized by sections for easy navigation
- Uses CSS custom properties for consistent theming

### Adding Functionality
- Edit `assets/js/main.js` to add new interactive features
- All functions include error handling
- Event listeners are properly managed

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🌟 Key Sections

1. **Header**: Navigation with search and chat access
2. **Hero**: Main banner with tournament information
3. **Flash Sale**: Product showcase with filtering
4. **Tournaments**: Gaming tournament listings
5. **Videos**: Short video content grid
6. **Articles**: News and article updates
7. **Streamers**: Content creator showcase
8. **Community**: Game communities and chat rooms

## 🛠️ Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is for educational purposes only. All content and design elements are inspired by the original DuniaGames website.

## 🤝 Contributing

This is a demonstration project. Feel free to fork and modify for your own learning purposes.

## 📞 Support

If you encounter any issues or have questions about the implementation, please check the browser console for error messages and ensure all files are properly served.

---

**Note**: This is a static clone for demonstration purposes. It does not include backend functionality, real user authentication, or actual payment processing.
