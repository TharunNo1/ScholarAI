from fastapi import APIRouter
from app.services.llm_service import generate_summary
from app.models.schemas import QaRequest, QaResponse

router = APIRouter()

@router.post("/ask", response_model=QaResponse)
async def ask_question(data: QaRequest):
    answer = generate_summary(data.question + " " + data.context)
    return QaResponse(answer=answer)
