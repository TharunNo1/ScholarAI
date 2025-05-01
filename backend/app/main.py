from fastapi import FastAPI
from app.api import pdf, qa 
from typing import Union
from fastapi.middleware.cors import CORSMiddleware
from app.models import Base
from app.database import engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registering PDF router
app.include_router(pdf.router, prefix="/pdf")
# Registering QA router
app.include_router(qa.router, prefix="/qa")

