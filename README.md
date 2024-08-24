# AI Image Generator

A simple React application that allows users to enter a prompt and generate an AI image using OpenAI's DALL-E API. The app also lets users save the generated image.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Contributing](#contributing)

## Features

- Generate AI images based on user input prompts.
- Save the generated images to your local machine.
- Easy-to-use interface.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (npm comes with Node.js)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bharatbhusal/ai-image-generator.git
   cd ai-image-generator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory of the project and add the following line:

   ```plaintext
   REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
   ```

   Replace `your_openai_api_key_here` with your actual OpenAI API key.

## Usage

1. **Start the development server:**

   ```bash
   npm start
   ```

2. **Open the app:**

   Navigate to `http://localhost:3000` in your browser.

3. **Generate an image:**

   - Enter a prompt in the input field.
   - Click on the "Generate Image" button.
   - Once the image is generated, you can view it and save it by clicking the "Save Image" button.

## Environment Variables

The application requires the following environment variables:

- `REACT_APP_OPENAI_API_KEY`: Your OpenAI API key for generating images.

## Testing

Since this is a front-end project, you can perform manual testing by running the app locally.

1. **Generate an image with a valid prompt:**

   - Enter a descriptive prompt and ensure the image is generated as expected.

2. **Test edge cases:**

   - Enter an empty prompt and check that the app handles it correctly without crashing.
   - Try different prompts to see how the app handles various inputs.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository:**

   Click on the "Fork" button at the top right corner of this page to create a copy of the repository under your own GitHub account.

2. **Clone your fork:**

   ```bash
   git clone https://github.com/bharatbhusal/ai-image-generator.git
   cd ai-image-generator
   ```

3. **Create a new branch:**

   ```bash
   git checkout -b feature-name
   ```

4. **Make your changes:**

   Edit the code, add features, fix bugs, or improve documentation.

5. **Commit your changes:**

   ```bash
   git add .
   git commit -m "Add feature-name"
   ```

6. **Push your changes to your fork:**

   ```bash
   git push origin feature-name
   ```

7. **Submit a pull request:**

   Go to the original repository on GitHub and click on the "Pull Request" button. Submit your pull request with a description of your changes.
