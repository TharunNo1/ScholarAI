from fastapi import FastAPI
from app.api import pdf, qa 
from typing import Union

app = FastAPI()

# Registering PDF router
app.include_router(pdf.router, prefix="/pdf")
# Registering QA router
app.include_router(qa.router, prefix="/qa")

