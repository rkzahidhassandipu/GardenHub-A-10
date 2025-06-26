# Shartips API Backend

This is the backend for the Shartips platform. It provides RESTful APIs to handle user-submitted tips (called "shartips") and user profiles. The backend is built using **Node.js**, **Express**, and **MongoDB**, and supports authentication and authorization for secure access to resources.

## Features

### 1. Shartips API

This API allows users to **create**, **read**, **update**, **delete**, and **like** tips. Each tip can be marked as public or private, and visibility is managed accordingly.

#### Endpoints

##### GET `/shartips`
- Returns all **public** tips.
- If user is authenticated, also returns their **private** tips.

##### GET `/shartips/:id`
- Fetches a **single tip by ID**, including its details (used for the detail view).

##### POST `/shartips`
- Creates a new tip.
- Requires authentication.

##### PUT `/shartips/:id`
- Updates an existing tip.
- Only the owner of the tip can update it.
- Requires authentication.

##### PATCH `/shartips/:id/like`
- Increments the `like` count of a tip.
- Requires authentication.

##### DELETE `/shartips/:id`
- Deletes a tip.
- Only the owner of the tip can delete it.
- Requires authentication.

---

### 2. User Profile API

This API provides access to user profile information.

#### Endpoints

##### GET `/users`
- Returns all user profiles.
- Public endpoint (or can be restricted to admin based on project requirement).

---

## Data Models

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
