import axios from 'axios'

export const register = newUser => {
    return axios
        .post('/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
        })
        .then(res => {
            console.log('Registered!')
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const uploadBook = newBook => {
    return axios
        .post('/books', {
            image: newBook.image,
            course: newBook.course,
            title: newBook.title,
            price: newBook.price,
            description: newBook.description

        })
        .then(res => {
            console.log('Uploaded')
        })
}

export const uploadNote = newNote => {
    return axios
        .post('/notes', {
            image: newNote.image,
            course: newNote.course,
            title: newNote.title,
            teacher: newNote.teacher,
            description: newNote.description
        })
        .then(res => {
            console.log('Uploaded')
        })
}

