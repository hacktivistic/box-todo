/**
 * ToDo Service Provider
 */

class Todo {

    constructor ({ Database, User }) {
        this.TodoRepo = Database
        this.LoggedUser = User
    }

    create (task) {
        return this.TodoRepo.create({
            userId: this.LoggedUser.id,
            text: task,
            completed: false
        })
    }

    retrieve (query) {
        if (query) query.userId = this.LoggedUser.id 
        return this.TodoRepo.find(query)
    }

    update (todoId, data) {
        return this.TodoRepo.update(todoId, data)
    }

    delete (todoId) {
        return this.TodoRepo.delete(todoId)
    }

}

module.exports = Todo