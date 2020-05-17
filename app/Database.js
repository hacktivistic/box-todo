
/**
 * Database Implementation
 */

// In-memory 
const dataRepo = []

module.exports = 
class Database {

    find (query) {
        return dataRepo.filter(x => {
            if (!query) return true
            for (let key in query) {
                if (query[key] !== x[key]) return false
            }
            return true
        }) 
    }

    findById (id) {
        return dataRepo.find(x => x.id === id)
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