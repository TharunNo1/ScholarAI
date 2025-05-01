from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import PDFDocument
import fitz

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/upload-pdf")
async def upload_pdf(pdf: UploadFile = File(...), db: Session = Depends(get_db)):
    contents = await pdf.read()

    # Save text from PDF
    with open("temp.pdf", "wb") as f:
        f.write(contents)

    doc = fitz.open("temp.pdf")
    text = "\n".join([page.get_text() for page in doc])

    # Create and store record
    pdf_record = PDFDocument(filename=pdf.filename, content=text)
    db.add(pdf_record)
    db.commit()
    db.refresh(pdf_record)

    return {"pdf_id": pdf_record.pdf_id}
