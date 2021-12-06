const request = require('supertest')
const app = require('../../src/server')
const { sequelize } = require('../../models')

describe('Users', () => {
  afterAll(()=>{
    sequelize.close()
  })

  test('GET /api/users shows all users', async () => {
    const response = await request(app)
      .get('/api/users')
      
    expect(response.status).toBe(200)
    expect(response.body.total).toBe(1)
    expect(Array.isArray(response.body.items)).toEqual(true)
    expect(response.body.items.length).toEqual(response.body.total)
    expect(response.body.items[0].id).toBeDefined()
    expect(response.body.items[0].firstName).toBe('John')
    expect(response.body.items[0].lastName).toBe('Doe')
    expect(response.body.items[0].email).toBe('john.doe@example.com')
    expect(response.body.items[0].createdAt).toBeDefined()
    expect(response.body.items[0].updatedAt).toBeDefined()
    expect(response.body.items[0].deletedAt).toBeNull()
  })
})
