# 👤 Next.js Profile Manager & Auth System

A full-stack user authentication and profile management web application built with **Next.js (App Router)**, **NextAuth.js**, **MongoDB / Mongoose**, and **Cloudinary**.

---

## ✨ Features

- **🔐 Dual Authentication Modes**:
  - **Credentials**: Email & Password sign-up and login with password hashing via `bcryptjs`.
  - **OAuth**: One-click Google Sign-In with automated account creation.
- **🛡️ Protected Routes**: Next.js middleware protection using `getToken` to guard authenticated pages and redirect unauthorized traffic.
- **🖼️ Profile Management & Image Upload**:
  - View user profile with avatar and details.
  - Edit profile name and upload new profile pictures directly to **Cloudinary** via server-side buffer streaming.
- **⚡ Real-time Session Sync**: Client session updates immediately reflect database changes using `useSession().update()` and NextAuth JWT trigger hooks.
- **🎨 Modern Dark UI**: Sleek, responsive design built with **Tailwind CSS v4** and **React Icons**.
- **🗄️ Optimized MongoDB Connection**: Global database connection caching prevents duplicate connections across serverless API invocations.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack) |
| **Frontend Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Authentication** | [NextAuth.js v4](https://next-auth.js.org/) |
| **Database** | [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/) |
| **Media Storage** | [Cloudinary](https://cloudinary.com/) (Node.js SDK) |
| **Security & HTTP** | `bcryptjs`, `axios` |

---

## 📁 Project Structure

```text
practiceproject2/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/route.ts   # NextAuth handler (Google & Credentials)
│   │   │   └── register/route.ts        # User registration endpoint
│   │   ├── edit/route.ts                # Profile update & Cloudinary image upload
│   │   └── user/route.ts                # Authenticated user fetch endpoint
│   ├── edit/page.tsx                    # Profile edit page
│   ├── login/page.tsx                   # User login page
│   ├── register/page.tsx                # User registration page
│   ├── layout.tsx                       # Root layout with providers
│   └── page.tsx                         # Dashboard / Home page (protected)
├── context/
│   └── UserContext.tsx                  # Global user state context
├── lib/
│   ├── auth.ts                          # NextAuth configuration & callbacks
│   ├── cloudinary.ts                    # Cloudinary upload stream helper
│   └── db.ts                            # Cached Mongoose connection helper
├── model/
│   └── user.model.ts                    # Mongoose User schema & interface
├── middleware.ts                        # Route protection middleware
├── types.d.ts                           # Global TypeScript declarations
└── next-auth.d.ts                       # NextAuth session type augmentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.18+ or v20+)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), or [yarn](https://yarnpkg.com/)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (or local MongoDB instance)
- A [Cloudinary](https://cloudinary.com/) account
- A [Google Cloud Console](https://console.cloud.google.com/) OAuth 2.0 Client

---

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd practiceproject2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` or `.env.local` file in the root directory:
   ```env
   # MongoDB
   MONGODB_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>"

   # NextAuth
   NEXTAUTH_SECRET="your-generated-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"

   # Google OAuth
   GOOGLE_CLIENT_ID="your-google-client-id.apps.googleusercontent.com"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"

   # Cloudinary
   CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
   CLOUDINARY_API_KEY="your-cloudinary-api-key"
   CLOUDINARY_API_SECRET="your-cloudinary-api-secret"
   ```

   > 💡 You can generate a random secret for `NEXTAUTH_SECRET` using:
   > ```bash
   > openssl rand -base64 32
   > ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🌐 API Reference

| Endpoint | Method | Description | Auth Required |
|---|---|---|:---:|
| `/api/auth/[...nextauth]` | `GET`, `POST` | NextAuth authentication endpoints | ❌ |
| `/api/auth/register` | `POST` | Registers a new user with hashed password | ❌ |
| `/api/user` | `GET` | Returns current authenticated user data | ✅ |
| `/api/edit` | `POST` | Updates user's name and/or avatar via multipart form | ✅ |

---

## 🚢 Deployment Guide (Vercel)

When deploying to [Vercel](https://vercel.com/):

1. **Environment Variables**: Add all variables from your `.env` file to your **Vercel Project Settings > Environment Variables**.
   - Make sure to set `NEXTAUTH_URL` to your production URL:
     ```env
     NEXTAUTH_URL="https://your-app.vercel.app"
     ```
2. **MongoDB Atlas IP Access**:
   - Go to MongoDB Atlas > **Network Access**.
   - Ensure `0.0.0.0/0` (Allow access from anywhere) is allowed so Vercel serverless functions can connect.
3. **Google OAuth Authorized Redirect URIs**:
   - In [Google Cloud Console](https://console.cloud.google.com/) > Credentials > OAuth 2.0 Client IDs:
   - Add your production callback URL under **Authorized redirect URIs**:
     ```text
     https://your-app.vercel.app/api/auth/callback/google
     ```

---

## 📜 Available Scripts

- `npm run dev` — Starts the local dev server with Turbopack.
- `npm run build` — Compiles and builds the application for production.
- `npm run start` — Starts the Next.js production server.
- `npm run lint` — Runs ESLint checks.
