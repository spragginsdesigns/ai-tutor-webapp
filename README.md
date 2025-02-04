# AI Study Buddy for Kids 🎓

<p align="center">
  An engaging, kid-friendly AI tutor built with Next.js that makes learning fun and interactive.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#how-it-works"><strong>How It Works</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a>
</p>
<br/>

## Features

- 🤗 **Encouraging Learning Environment**
  - Patient, step-by-step guidance
  - Positive reinforcement and celebration of progress
  - Kid-friendly language and engaging emojis

- 🧩 **Interactive Problem Solving**
  - Breaks down complex problems into manageable parts
  - Uses relatable examples (cookies, toys, etc.)
  - Never gives direct answers - guides students to discover solutions

- 📚 **Educational Focus Areas**
  - Math problems with real-world applications
  - Science exploration and discovery
  - Pattern recognition and logical thinking
  - Money management and practical skills

- 🛠️ **Technical Foundation**
  - Built with [Next.js](https://nextjs.org) for optimal performance
  - [AI SDK](https://sdk.vercel.ai/docs) for natural conversations
  - [DeepSeek](https://deepseek.ai) model optimized for tutoring
  - Beautiful UI with [shadcn/ui](https://ui.shadcn.com)

## How It Works

The AI tutor follows core educational principles:

1. **Ask, Don't Tell**
   - Uses open-ended questions
   - Encourages critical thinking
   - Helps students break down problems

2. **Scaffold Understanding**
   - Relates new concepts to familiar examples
   - Builds confidence through gradual progress
   - Makes learning relevant to kids' experiences

3. **Step-by-Step Guidance**
   - Structured problem-solving approach
   - Regular check-ins for understanding
   - Adaptable to each student's pace

## Running Locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-tutor-webapp.git
cd ai-tutor-webapp
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy `.env.example` to `.env` and configure your environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
pnpm dev
```

Your AI tutor should now be running at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env` file with the following variables:

```bash
# Authentication (required for user sessions)
AUTH_SECRET=your-secret-here

# AI Model Configuration
AI_MODEL_KEY=your-api-key-here

# Database (for storing chat history)
DATABASE_URL=your-database-url
```

> Note: Never commit your `.env` file or share your API keys publicly.

## Contributing

We welcome contributions that help make learning more engaging and effective for kids! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
