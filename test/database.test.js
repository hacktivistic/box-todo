require('jest')

const Database = require('../app/Database')

describe('Database Test', () => {

    test('should be able to create, retrieve, update and delete', () => {

        const db = new Database()

        db.create({
            id: 1,
            task: 'Complete Test',
            completed: true
        })
        db.create({
            id: 2,
            task: 'Complete Blog',
            completed: false
        })

        expect(db.find()).toHaveLength(2)
        expect(db.find({    
            completed: false
        })).toHaveLength(1)
        expect(db.find({
            completed: true
        })).toHaveLength(1)
        expect(db.findById(1).task).toBe('Complete Test')

        db.update(2, {
            completed: true
        })

        expect(db.findById(2)).toMatchObject({
            id: 2,
            task: 'Complete Blog',
            completed: true
        })

        db.delete(1)

        expect(db.find()).toHaveLength(1)
        expect(db.find({
            completed: false
        })).toHaveLength(0)
        expect(db.find({
            completed: true
        })).toHaveLength(1)
        expect(db.findById(1)).toBeUndefined()
    })

})