from pydantic import BaseModel

from app.models import PDFDocument

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.services.llm_service import run_llm
from app.api.pdf import get_db


router = APIRouter()

class QuestionRequest(BaseModel):
    question: str
    pdf_id: str

@router.post("/ask")
def ask_question(req: QuestionRequest, db: Session = Depends(get_db)):
    record = db.query(PDFDocument).filter_by(pdf_id=req.pdf_id).first()
    if not record:
        print("Not found")
        return {"answer": "PDF not found."}

    pdf_text = record.content

    # Pass pdf_text and question to your Mistral LLM for answering
    answer = run_llm(pdf_text, req.question)

    return {"answer": answer}

