# Command Line Todo List with SQL

A command line script called `tasks` that allows the user to manage a list
of tasks from the terminal.

Your `tasks` command should support the following sub-commands:

| command  | description                                            | example usage                          |
|----------|--------------------------------------------------------|----------------------------------------|
| add      | adds the specified task to the database                | ./tasks add Finish reading Flatland |
| list     | lists the incomplete tasks                             | ./tasks list                        |
| done     | deletes the task from the database                     | ./tasks done `<task-id>`            |
| update   | updates a todo with a new description                  | ./tasks update `<task-id>` Buy milk |

## Usage 

- git clone project to your local machine
- run `npm install`
- run `npm run db:setup`
- eg. command `./task list` -> List one todo
