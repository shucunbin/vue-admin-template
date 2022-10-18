import request from '@/utils/request'

export function fetchList(query) {
    return request({
        url: '/my-family/library/book/list',
        method: 'get',
        params: query
    })
}