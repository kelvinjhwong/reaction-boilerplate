# Trello-like Kanban board

This app has a back-end API built with Rails, and front-end UI built with React + Redux.

It currently supports creating boards, listing boards, viewing a board, adding a list, editing a list's name, adding a card to a list, and editing the name of a card.

To run the app locally:

1. Clone the repo
   ```
   $ git clone https://github.com/kelvinjhwong/rello.git
   ```
2. `cd` into the repo
   ```
   $ cd rello
   ```
3. Install Ruby dependencies with Bundler
   ```
   $ bundle install
   ```
4. Install Node.js dependencies with Yarn
   ```
   $ yarn install
   ```
5. Set up the database
   ```
   rails db:setup
   ```
6. Start the PostgreSQL database server
   ```
   sudo service postgresql start
   ```
7. Start the web server
   ```
   $ rails s
   ```
8. Visit the app at `localhost:3000`
