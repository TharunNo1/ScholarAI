# 🧠 Scholar AI – AI-Powered Research Assistant

Scholar AI is a simple tool that lets users upload PDFs and ask questions about their contents. It uses a local LLM served via Ollama to generate context-based responses.

## Features

- Upload PDF files
- Ask natural language questions about uploaded PDFs
- Get answers from a local LLM (e.g., Mistral via Ollama)
- Simple, clean React + Tailwind CSS UI

## Tech Stack

**Frontend:** React, Tailwind CSS, Axios  
**Backend:** FastAPI, Python  
**LLM Server:** Ollama (e.g., Mistral model)

## Getting Started

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend Setup

```bash
cd frontend/scholar-ai
npm install
npm run dev
```
Expected UI View:
![image](https://github.com/user-attachments/assets/f6ce5193-9065-443a-91b8-063c7967a893)

### Start Ollama (Local LLM)

```bash
ollama serve
ollama run mistral
```

## Usage

1. Open your browser at [http://localhost:5173](http://localhost:5173)
2. Upload a PDF using the button
3. Ask a question based on its content
4. View the answer generated by the local LLM

## 🪪 License

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**. See the [LICENSE](https://www.gnu.org/licenses/gpl-3.0.en.html) for more information.
