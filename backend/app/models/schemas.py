from pydantic import BaseModel

class PdfResponse(BaseModel):
    text: str

class QaRequest(BaseModel):
    question: str
    context: str

class QaResponse(BaseModel):
    answer: str
