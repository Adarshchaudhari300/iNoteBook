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
# iNoteBook

iNoteBook is a modern productivity web application providing secure sign-in, notes management, image gallery, real-time chat, and profile management. Streamline your daily workflow and collaboration with intuitive features all in one place.

---

## Features

### 🚪 Secure Authentication
- Login securely to manage your personal workspace.  
- All operations and data are private and tied to user accounts.  
![Profile Management and Authentication][attached_image:2]

### 📝 Notes Management
- Create, edit, and delete notes easily.  
- Organize notes, add descriptions, optional tags, and mark notes as important.  
- View your collection organized by creation date and importance flag.  
![Notes Dashboard][attached_image:2]

### 🖼️ Image Gallery
- Upload images securely from your device.  
- Preview images, view file details, and easily refresh your gallery.  
- Manage your collection with title, description, upload date, and size metadata.  
![Home / Image Gallery][attached_image:1]

### 💬 Real-Time Chat
- Chat instantly with friends who use iNoteBook.  
- Online/offline status indication.  
- Send, receive, and delete messages in a clean interface.  
![Chat Interface][attached_image:3]

### 👤 Profile Management
- Edit your profile info, including email and password.  
- View activity stats: notes and images saved.  
![Profile Management][attached_image:2]

---

## Getting Started

1. **Clone the repository**
    ```
    git clone https://github.com/yourusername/inotebook.git
    cd inotebook
    ```
2. **Install dependencies**
    ```
    npm install
    ```
3. **Start the development server**
    ```
    npm start
    ```
    Application runs at `http://localhost:3000`.

---

## Usage

- Sign in with your registered email.
- Create/manage notes via the Notes section.
- Upload/view images in the Images tab.
- Chat using the Messages tab.
- Update profile and password in the Profile section.

---

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Real-Time:** Socket.io
- **Authentication:** JWT

---

## Contributing

Pull requests are welcome! For significant changes, open an issue first to discuss your ideas.

---

## License

This project is licensed under the MIT License.

---

### Screenshots

#### Gallery Section
<img width="1221" height="683" alt="Screenshot 2025-09-10 212249" src="https://github.com/user-attachments/assets/037e8f58-bac6-4cb4-913e-eba9e8bb266e" />

#### Image Upload Section
<img width="1600" height="900" alt="Screenshot (49)" src="https://github.com/user-attachments/assets/bbaa380c-a93c-450d-9648-448cccf2dcc3" />

#### Notes Section
<img width="1221" height="689" alt="Screenshot 2025-09-10 212304" src="https://github.com/user-attachments/assets/260762d5-d4c8-4235-ad7c-52c28d9ecab9" />
#### About US
<img width="1600" height="900" alt="Screenshot (47)" src="https://github.com/user-attachments/assets/104aa033-9257-417f-8048-b4b97b6674f0" />


#### Chat Section
<img width="1219" height="686" alt="Screenshot 2025-09-10 212257" src="https://github.com/user-attachments/assets/52f1eba5-d61d-4b67-be0b-deec6dea277f" />


#### Profile Section
<img width="1221" height="689" alt="Screenshot 2025-09-10 212312" src="https://github.com/user-attachments/assets/fda4c4c0-e3c5-400a-b5ee-354483ce5577" />



---

> Experience seamless productivity with iNoteBook—a secure, intuitive, and modern solution for managing notes, images, and chat.

