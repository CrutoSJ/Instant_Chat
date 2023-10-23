# Instant Chat

Instant Chat is a real-time chat application that allows users to engage in live conversations seamlessly. It is built using Node.js, React.js, Express, and Chat Engine.io to provide a fast and efficient chat experience. Whether you're looking for a chat application for your website or a standalone chat platform, Instant Chat has you covered.

## Features

- Real-time messaging: Instant Chat provides real-time messaging, ensuring that messages are delivered and received instantly.
- User authentication: Users can create accounts and log in to engage in private and group conversations.
- Personal chats: Chat to individuals and send files.
- Group chats: Create and participate in group chats with friends, family, or colleagues.
- Chat history: Access your chat history to review previous conversations.
- Multimedia support: Share images, videos, and files with ease.
- User-friendly interface: Instant Chat offers an intuitive and visually appealing chat interface for a pleasant user experience.

## Technologies Used

Instant Chat is built using the following technologies:

- Node.js: For server-side logic and real-time capabilities.
- React.js: For building the user interface.
- Express: For creating a RESTful API and handling HTTP requests.
- Chat Engine.io: For real-time chat functionality.

## Installation

To run Instant Chat locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/CrutoSJ/instant-chat.git
   cd instant-chat
   ```

2. Install server dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install client dependencies:

   ```bash
   cd frontend
   npm install
   ```

4. Configure your environment variables in the `.env` file, including your database connection, JWT secret, and any other necessary settings.

5. Start the server:

   ```bash
   cd backend
   npm start
   ```

6. Start the client:

   ```bash
   cd frontend
   npm start
   ```

Your Instant Chat application should now be running locally. You can access it by navigating to [http://localhost:3000](http://localhost:3000) in your web browser.

## Configuration

You will need to configure your Instant Chat application by providing necessary environment variables. Refer to the `.env` file in the `server` directory for configuration options.

## Usage

Once you've set up the application, you can start using Instant Chat:

1. Register a new account or log in if you already have one.
2. Create or join a chat room.
3. Start messaging in real-time with other users.

## Contributing

We welcome contributions to make Instant Chat even better. If you'd like to contribute, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

Instant Chat is open-source and licensed under the [Apache License 2.0 ](LICENSE). You are free to use, modify, and distribute this application as long as you comply with the terms of the license.

Happy chatting with Instant Chat! 🚀📱💬
