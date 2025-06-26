# Gardening Community & Resource Hub

**Live Site:** [https://gardeners-a1082.web.app/](https://gardeners-a1082.web.app/)

A community platform for gardening enthusiasts to share tips (called “Shartips”), ask questions, join events, and connect with others over shared interests like composting, hydroponics, and more.

---

## 🌱 Features

- 🔐 **User Authentication**: Email/password & Google auth via Firebase
- 🚪 **Public & Private Routes**: Tip sharing, user dashboard, tip detail views
- ✍️ **Create, Edit, Delete Tips**: Authenticated users can manage their own tips
- 📊 **Browse Tips**: Public tips displayed with filters & detail view
- 🔥 **Trending Tips & Featured Gardeners**: Highlight active community members
- 👍 **Like System**: Real-time like updates stored in MongoDB
- 🌗 **Dark/Light Theme Toggle**
- 💡 **Enhanced UI**: With Lottie animations, React Tooltips, Swiper.js, etc.
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop

---

## 🛠️ Technologies Used

| Frontend | Backend |
|----------|---------|
| React.js | Node.js + Express |
| Firebase Auth | MongoDB Atlas |
| Tailwind CSS | Vercel (deployment) |
| React Router | RESTful API (Shartips) |
| Swiper.js | JWT-based auth (optional) |

---

# 🚀 Shartips API – Backend

This is the backend for the Gardening Hub's "Shartips" system — allowing users to create, read, update, delete, and like tips.

---

## 🧩 API Endpoints

### 🔍 Tips

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/shartips` | Get all public tips + user's private tips (if logged in) |
| GET | `/shartips/:id` | Get a single tip by ID |
| POST | `/shartips` | Create a new tip (auth required) |
| PUT | `/shartips/:id` | Update a tip (only owner, auth required) |
| PATCH | `/shartips/:id/like` | Like a tip (auth required) |
| DELETE | `/shartips/:id` | Delete a tip (only owner, auth required) |

---

### 👤 Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users (public or admin-only based on config) |

---




# Gardening Hub

---

## 💻 How to Run Locally

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/gardening-hub.git
cd gardening-hub
```

# 2. Frontend Setup

```bash
cd client
npm install
npm run dev
```
# 3. Backend Setup
```bash
cd server
npm install
npm dev
```

4. Environment Variables
Frontend (client/.env)
```bash
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

Backend (server/.env)
```bash
PORT=5000
DB_USER=yourMongoUser
DB_PASS=yourMongoPassword
JWT_SECRET=yourSecretKey
```

## 🗃️ Data Models

### Shartip

```json
{
  "_id": "string",
  "title": "string",
  "content": "string",
  "likes": 0,
  "userId": "string",
  "visibility": "public" | "private",
  "createdAt": "date",
  "updatedAt": "date"
}
```

🙋‍♂️ Author
Raihan Uddin

💻 MERN Stack Developer | 🎨 Graphic Designer

📍 Based in Malaysia

📧 Email: rkrazzakhan01731@gmail.com

