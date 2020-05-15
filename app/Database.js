
/**
 * Database Implementation
 */

// In-memory 
const dataRepo = []

module.exports = 
class Database {

    find (query) {
        return dataRepo.filter(x => {
            if (query == null || query == undefined) return true
            JSON.stringify(x) == JSON.stringify(query)   // comparing properties equality
        }) 
    }

    findById (id) {
        return dataRepo.find(x => x.id === id)
    }

    findAll () {
        return dataRepo
    }

    create (data) {
        dataRepo.push(data)
        return data
    }

    update (id, data) {
        const prev = this.findById(id)
        Object.assign(prev, data)
        return prev
    }

    delete (id) {
        const item = this.findById(id)
        dataRepo.splice(item, 1)
    }

}