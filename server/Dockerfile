# Use the official Python image as the base
FROM python:3.10

# Set the working directory inside the container
WORKDIR /app

# Copy the entire repository (including setup.py and requirements) into the container
COPY . .

# Install primary dependencies from requirements.txt
RUN pip install -r requirements.txt

# Expose the port the FastAPI server will use
EXPOSE 8020

# Command to run the FastAPI server
CMD ["python", "examples/lightrag_api_openai_compatible_demo.py"]
