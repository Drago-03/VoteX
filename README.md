# VoteX: AI-Powered Voter Verification System

![VoteX Banner](https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1200&h=400)

VoteX is a cutting-edge voter verification system that leverages AI and biometric technology to streamline the electoral process while maintaining the highest security standards.

## 🚀 Key Features

- **AI-Powered Face Recognition**: Real-time facial verification using advanced Vision AI
- **Biometric Authentication**: Secure fingerprint scanning integrated with Aadhaar API
- **Staff Management Portal**: Comprehensive dashboard for electoral staff
- **Real-time Analytics**: Live verification statistics and monitoring
- **Secure Database**: End-to-end encrypted data storage with row-level security
- **Audit Logging**: Complete verification attempt tracking

## 🛠️ Technology Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **API Integration**: REST APIs
- **State Management**: React Hooks
- **Type Safety**: TypeScript

## 📋 Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Supabase account
- Modern web browser

## 🚦 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/votex.git
   cd votex
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the following variables in `.env`:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Architecture Overview

### System Components

```mermaid
graph TD
    A[Voter] -->|Approaches| B[Verification Device]
    B -->|Captures| C[Face Recognition]
    B -->|Scans| D[Fingerprint]
    C -->|Processes| E[Vision AI]
    D -->|Verifies| F[Aadhaar API]
    E -->|Results| G[Verification Service]
    F -->|Results| G
    G -->|Logs| H[Supabase DB]
    I[Staff] -->|Manages| J[Admin Portal]
    J -->|Queries| H
```

### Database Schema

#### Voters Table
- `id`: UUID (Primary Key)
- `aadhaar_id`: Text (Unique)
- `full_name`: Text
- `face_data`: JSONB
- `biometric_data`: JSONB
- `electoral_roll_number`: Text
- `region_code`: Text
- `created_at`: Timestamp
- `updated_at`: Timestamp

#### Verification Logs Table
- `id`: UUID (Primary Key)
- `voter_id`: UUID (Foreign Key)
- `verification_type`: Text ('face' | 'fingerprint')
- `status`: Text ('success' | 'failed')
- `error_message`: Text
- `verified_by_staff`: Boolean
- `staff_id`: UUID
- `created_at`: Timestamp

## 🔒 Security Features

- Row Level Security (RLS) policies
- Encrypted data storage
- Secure authentication
- Audit logging
- Rate limiting
- Input validation

## 📦 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your hosting platform:
   ```bash
   # Example for Netlify
   netlify deploy --prod
   ```

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Please read [COLLABORATION.md](COLLABORATION.md) for details on our code of conduct and the process for submitting pull requests.