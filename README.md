# iNoteBook 📝

**Your secure image and note management solution**

iNoteBook is a comprehensive full-stack web application that provides users with a secure platform for managing notes, images, and real-time messaging. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it offers a modern, responsive interface with robust authentication and data management capabilities.

![iNoteBook Banner](https://img.shields.io/badge/iNoteBook-Your%20Secure%20Management%20Solution-pink?style=for-the-badge)

## ✨ Features

### 🔐 Authentication & Security
- **Secure User Registration & Login**: JWT-based authentication system
- **Profile Management**: Update profile information and profile pictures
- **Password Protection**: Encrypted password storage using bcryptjs
- **Personal User Accounts**: Each user has their own secure space

### 📝 Note Management
- **Create, Edit, Delete Notes**: Full CRUD operations for notes
- **Rich Text Support**: Add titles, descriptions, and tags to notes
- **Smart Organization**: Tag-based categorization system
- **Search & Filter**: Quickly find notes using search functionality
- **Batch Operations**: Select and manage multiple notes at once

### 🖼️ Image Gallery
- **Image Upload & Management**: Store and organize your images securely
- **Drag & Drop Interface**: Easy image uploading with preview
- **Image Metadata**: Add titles, descriptions, and hashtags
- **Gallery View**: Beautiful grid layout for browsing images
- **Batch Editing**: Edit multiple images simultaneously
- **File Size Management**: Compressed image storage for optimal performance

### 💬 Real-time Messaging
- **Live Chat System**: Real-time messaging with Socket.io
- **User Search**: Find and connect with other users
- **Online Status**: See who's currently online
- **Chat History**: Persistent message storage
- **User-friendly Interface**: Clean, modern chat design

### 🎨 User Interface
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Dark/Light Theme**: Toggle between themes for comfortable viewing
- **Navigation**: Easy-to-use navigation bar with quick access to all features
- **Success/Error Alerts**: Real-time feedback for user actions

## 🛠️ Technology Stack

### Frontend
- **React.js 19.0.0**: Modern JavaScript library for building user interfaces
- **React Router DOM**: Client-side routing for single-page application
- **Context API**: State management for global application state
- **Socket.io Client**: Real-time communication
- **Browser Image Compression**: Optimize images before upload
- **CSS3**: Custom styling with responsive design

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling
- **Socket.io**: Real-time bidirectional event-based communication
- **JWT (jsonwebtoken)**: Secure authentication tokens
- **bcryptjs**: Password hashing and encryption
- **Express Validator**: Input validation and sanitization
- **CORS**: Cross-Origin Resource Sharing

## 📁 Project Structure

```
iNoteBook/
├── BackEnd/
│   ├── db.js                 # Database connection
│   ├── index.js              # Server entry point
│   ├── middleware/
│   │   └── fetchuser.js      # JWT authentication middleware
│   ├── models/
│   │   ├── Image.js          # Image schema
│   │   ├── Message.js        # Message schema
│   │   ├── Note.js           # Note schema
│   │   └── User.js           # User schema
│   ├── routes/
│   │   ├── auth.js           # Authentication routes
│   │   ├── images.js         # Image management routes
│   │   ├── messages.js       # Messaging routes
│   │   └── notes.js          # Note management routes
│   └── package.json          # Backend dependencies
│
├── FrontEnd/
│   ├── public/
│   │   ├── index.html        # Main HTML template
│   │   └── ...              # Static assets
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── About.js      # About page
│   │   │   ├── Home.js       # Home dashboard
│   │   │   ├── Login.js      # Login form
│   │   │   ├── SignUp.js     # Registration form
│   │   │   ├── Notes.js      # Notes management
│   │   │   ├── Images.js     # Image gallery
│   │   │   ├── Profile.js    # User profile
│   │   │   ├── Messaging/    # Chat components
│   │   │   └── ...          # Other components
│   │   ├── context/          # React Context providers
│   │   │   ├── notes/        # Notes state management
│   │   │   ├── images/       # Images state management
│   │   │   ├── messages/     # Messages state management
│   │   │   ├── user/         # User state management
│   │   │   └── theme/        # Theme state management
│   │   ├── App.js            # Main App component
│   │   └── index.js          # React entry point
│   └── package.json          # Frontend dependencies
│
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/inotebook.git
   cd inotebook
   ```

2. **Install Backend Dependencies**
   ```bash
   cd BackEnd
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../FrontEnd
   npm install
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the `BackEnd` directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/inotebook
   JWT_SECRET=your_jwt_secret_key_here
   PORT=5000
   ```

5. **Database Setup**
   - Ensure MongoDB is running on your system
   - The application will automatically create the required database and collections

### Running the Application

#### Option 1: Run Both Servers Simultaneously (Recommended)
```bash
cd FrontEnd
npm start
```
This command uses `concurrently` to run both frontend and backend servers.

#### Option 2: Run Servers Separately

**Backend Server:**
```bash
cd BackEnd
npm start
# or for development with auto-restart
npx nodemon index.js
```

**Frontend Server:**
```bash
cd FrontEnd
npm run start1
```

### Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 📱 Usage Guide

### Getting Started
1. **Sign Up**: Create a new account with your email and password
2. **Login**: Access your personal dashboard
3. **Profile Setup**: Add your profile picture and update your information

### Managing Notes
1. Navigate to the **Notes** section
2. Click **"Create New Note"** to add a note
3. Fill in the title, description, and optional tags
4. Use the search and filter options to organize your notes
5. Edit or delete notes using the action buttons

### Image Gallery
1. Go to the **Images** section
2. Upload images using drag & drop or file browser
3. Add titles, descriptions, and hashtags for better organization
4. Use batch editing to modify multiple images at once
5. Browse your gallery with the responsive grid layout

### Real-time Messaging
1. Access the **Messages** section
2. Search for users to start conversations
3. Send and receive messages in real-time
4. See online status of other users
5. View chat history for all conversations

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/createuser` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/getuser` - Get user details

### Notes
- `GET /api/notes/fetchallnotes` - Fetch all user notes
- `POST /api/notes/addnote` - Create new note
- `PUT /api/notes/updatenote/:id` - Update note
- `DELETE /api/notes/deletenote/:id` - Delete note

### Images
- `GET /api/images/fetchallimages` - Fetch all user images
- `POST /api/images/addimage` - Upload new image
- `PUT /api/images/updateimage/:id` - Update image
- `DELETE /api/images/deleteimage/:id` - Delete image

### Messages
- `GET /api/messages/getmessages/:userId` - Fetch messages
- `POST /api/messages/sendmessage` - Send message
- `GET /api/messages/getusers` - Get all users for messaging

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Encryption**: Bcrypt hashing for password security
- **Input Validation**: Server-side validation using Express Validator
- **CORS Protection**: Configured cross-origin resource sharing
- **Private Routes**: Protected routes requiring authentication
- **Data Isolation**: User-specific data access controls

## 🎨 Customization

### Themes
The application supports theme customization through the Theme Context:
- Light and dark mode toggle
- Customizable color schemes
- Responsive design adapts to user preferences

### Styling
- CSS modules for component-specific styling
- Responsive design with mobile-first approach
- Modern UI components with smooth animations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React.js team for the amazing frontend library
- Express.js for the robust backend framework
- MongoDB for the flexible database solution
- Socket.io for real-time communication capabilities
- All contributors and users of this application

## 📞 Support

If you encounter any issues or have questions:
1. Check the existing issues in the repository
2. Create a new issue with detailed description
3. Contact the development team

---

**Made with ❤️ by the iNoteBook Team**

*iNoteBook - Your secure image and note management solution*