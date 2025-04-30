# app/services/pdf_service.py
import fitz  # PyMuPDF
from app.core.logging import logger

def extract_text_from_pdf(pdf_bytes: bytes) -> str:
    try:
        doc = fitz.open(stream=pdf_bytes, filetype="pdf")
        if not doc or doc.page_count == 0:
            logger.warning("Empty PDF uploaded.")
            return "No content found in PDF."

        text = ""
        for page in doc:
            text += page.get_text("text")
        return text.strip()
    except Exception as e:
        logger.error(f"Failed to extract PDF text: {e}")
        raise ValueError("Invalid or corrupt PDF file.")
