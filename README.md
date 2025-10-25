# Full-Stack Application

A modern full-stack application built with Next.js 14 and FastAPI.

## Tech Stack

- **Frontend**: Next.js 14 (React)
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL

## Project Structure

```
.
├── frontend/           # Next.js application
│   ├── app/           # App router pages
│   └── package.json   # Frontend dependencies
├── backend/           # FastAPI application
│   ├── main.py       # API entry point
│   └── requirements.txt
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- PostgreSQL

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the FastAPI server:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## API Endpoints

- `GET /api/health` - Health check endpoint

## Development

### Backend

The FastAPI backend runs on port 8000 by default. API documentation is automatically generated and available at:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### Frontend

The Next.js frontend uses the App Router and runs on port 3000 by default.

## Deployment

### Backend Deployment

The FastAPI application can be deployed using:
- Docker containers
- Cloud platforms (AWS, GCP, Azure)
- Platform-as-a-Service (Heroku, Railway, Render)

### Frontend Deployment

The Next.js application can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Docker containers

## Environment Variables

### Backend
Create a `.env` file in the backend directory:
```
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

### Frontend
Create a `.env.local` file in the frontend directory:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## License

MIT