from sqlalchemy import Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
import uuid
from datetime import datetime

Base = declarative_base()

class PDFDocument(Base):
    __tablename__ = "pdf_documents"

    pdf_id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    filename = Column(String)
    content = Column(String)  # Optionally store full extracted text
    uploaded_at = Column(DateTime, default=datetime.utcnow)
