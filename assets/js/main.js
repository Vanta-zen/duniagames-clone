'use strict';

// DOM Elements
const loadingOverlay = document.getElementById('loading-overlay');
const chatBtn = document.getElementById('chat-btn');
const chatModal = document.getElementById('chat-modal');
const closeChatBtn = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const sendMessageBtn = document.getElementById('send-message');
const chatMessages = document.getElementById('chat-messages');

// Loading Management
window.addEventListener('load', function() {
    try {
        // Hide loading overlay after page loads
        setTimeout(() => {
            if (loadingOverlay) {
                loadingOverlay.classList.add('hidden');
                // Remove from DOM after transition
                setTimeout(() => {
                    loadingOverlay.style.display = 'none';
                }, 500);
            }
        }, 1000); // Show loading for at least 1 second
    } catch (error) {
        console.error('Error hiding loading overlay:', error);
    }
});

// Chat Modal Functionality
function openChatModal() {
    try {
        if (chatModal) {
            chatModal.classList.add('active');
            chatInput.focus();
        }
    } catch (error) {
        console.error('Error opening chat modal:', error);
    }
}

function closeChatModal() {
    try {
        if (chatModal) {
            chatModal.classList.remove('active');
        }
    } catch (error) {
        console.error('Error closing chat modal:', error);
    }
}

function addMessage(message, isUser = false) {
    try {
        if (!chatMessages || !message.trim()) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'admin-message'}`;
        
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
                <span class="message-time">${currentTime}</span>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    } catch (error) {
        console.error('Error adding message:', error);
    }
}

function sendMessage() {
    try {
        const message = chatInput.value.trim();
        
        if (!message) {
            alert('Please enter a message before sending.');
            return;
        }
        
        // Add user message
        addMessage(message, true);
        chatInput.value = '';
        
        // Simulate admin response after a delay
        setTimeout(() => {
            const adminResponses = [
                "Thank you for your message! How can I assist you further?",
                "I understand your concern. Let me help you with that.",
                "That's a great question! Here's what I can tell you...",
                "I'm here to help! Could you provide more details?",
                "Thanks for reaching out! I'll get back to you shortly.",
                "I appreciate your patience. Let me look into this for you."
            ];
            
            const randomResponse = adminResponses[Math.floor(Math.random() * adminResponses.length)];
            addMessage(randomResponse, false);
        }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
        
    } catch (error) {
        console.error('Error sending message:', error);
        alert('Sorry, there was an error sending your message. Please try again.');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Chat button event listener
        if (chatBtn) {
            chatBtn.addEventListener('click', openChatModal);
        }
        
        // Close chat button event listener
        if (closeChatBtn) {
            closeChatBtn.addEventListener('click', closeChatModal);
        }
        
        // Send message button event listener
        if (sendMessageBtn) {
            sendMessageBtn.addEventListener('click', sendMessage);
        }
        
        // Enter key to send message
        if (chatInput) {
            chatInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    sendMessage();
                }
            });
        }
        
        // Close modal when clicking outside
        if (chatModal) {
            chatModal.addEventListener('click', function(e) {
                if (e.target === chatModal) {
                    closeChatModal();
                }
            });
        }
        
        // Filter buttons functionality
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                try {
                    // Remove active class from all buttons
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                } catch (error) {
                    console.error('Error handling filter button click:', error);
                }
            });
        });
        
        // Join button functionality
        const joinBtns = document.querySelectorAll('.join-btn');
        joinBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                try {
                    const roomName = this.parentElement.querySelector('h4').textContent;
                    alert(`Joining ${roomName}...`);
                    this.textContent = 'Joined!';
                    this.style.background = '#4CAF50';
                    this.disabled = true;
                } catch (error) {
                    console.error('Error handling join button click:', error);
                }
            });
        });
        
        // Play button functionality for videos
        const playBtns = document.querySelectorAll('.play-btn');
        playBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                try {
                    const videoTitle = this.closest('.video-card, .streamer-card').querySelector('h4').textContent;
                    alert(`Playing: ${videoTitle}`);
                } catch (error) {
                    console.error('Error handling play button click:', error);
                }
            });
        });
        
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                try {
                    // Remove active class from all nav links
                    navLinks.forEach(l => l.classList.remove('active'));
                    // Add active class to clicked link
                    this.classList.add('active');
                } catch (error) {
                    console.error('Error handling navigation click:', error);
                }
            });
        });
        
        // Search functionality
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        
        function performSearch() {
            try {
                const query = searchInput.value.trim();
                if (query) {
                    alert(`Searching for: ${query}`);
                    // In a real application, this would trigger actual search functionality
                }
            } catch (error) {
                console.error('Error performing search:', error);
            }
        }
        
        if (searchBtn) {
            searchBtn.addEventListener('click', performSearch);
        }
        
        if (searchInput) {
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    performSearch();
                }
            });
        }
        
    } catch (error) {
        console.error('Error initializing event listeners:', error);
    }
});

// Utility Functions
function formatTime(date) {
    try {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (error) {
        console.error('Error formatting time:', error);
        return 'Now';
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize for responsive behavior
window.addEventListener('resize', debounce(function() {
    try {
        // Adjust chat modal position on mobile
        if (window.innerWidth <= 768 && chatModal) {
            chatModal.style.width = '90%';
            chatModal.style.right = '5%';
            chatModal.style.left = '5%';
        } else if (chatModal) {
            chatModal.style.width = '350px';
            chatModal.style.right = '20px';
            chatModal.style.left = 'auto';
        }
    } catch (error) {
        console.error('Error handling window resize:', error);
    }
}, 250));

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            try {
                // Replace broken images with a placeholder
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzg4OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                this.alt = 'Image not found';
            } catch (error) {
                console.error('Error handling image error:', error);
            }
        });
    });
});

// Console welcome message
console.log('%c🎮 Welcome to DuniaGames Clone! 🎮', 'color: #ff6b35; font-size: 20px; font-weight: bold;');
console.log('%cThis is a clone of the DuniaGames website built with vanilla HTML, CSS, and JavaScript.', 'color: #888; font-size: 14px;');
