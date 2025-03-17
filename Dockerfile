FROM mcr.microsoft.com/playwright:v1.51.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose port for report access
EXPOSE 9323

# Run Playwright tests and serve the report
CMD ["sh", "-c", "npx playwright test --reporter=html && mkdir -p /app/report && cp -r playwright-report/* /app/report"]
