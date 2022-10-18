const Mock = require('mockjs')

const BookList = []
const count = 100

for(let i = 0; i < count; i ++) {
    BookList.push(Mock.mock({
        id: '@increment',
        isbn: '@guid',
        name: '@title',
        author: '@cname',
        translator: '@cname',
        'price|1-100.1-2':50.00,
        publish_date: '@date(yyyy-MM-dd)',
        purchase_date: '@date(yyyy-MM-dd)'
    }))
}

module.exports = [
    {
        url: '/my-family/library/book/list',
        type: 'get',
        response: config => {
            const {page = 1, limit = 20} = config.query
            const pageList = BookList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
            return {
                code: 20000,
                data: {
                    total: BookList.length,
                    items: pageList
                }
            }
        }
    },
]