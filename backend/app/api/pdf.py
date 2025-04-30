from fastapi import APIRouter, File, UploadFile
from app.services.pdf_service import extract_text_from_pdf
from app.models.schemas import PdfResponse
from fastapi import HTTPException

router = APIRouter()

@router.post("/upload-pdf", response_model=PdfResponse)
async def upload_pdf(file: UploadFile = File(...)):
    contents = await file.read()
    try:
        text = extract_text_from_pdf(contents)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    return PdfResponse(text=text)
