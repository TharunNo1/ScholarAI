import sys 
from loguru import logger

logger.remove()
logger.add(sys.stdout, level="INFO", format="{time} - {level} - {message}")

