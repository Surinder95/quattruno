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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            // console.log("did routing")
            // window.location.href="/login";

        })
}




=======
            console.log('Registered!')
        })
}

>>>>>>> parent of 76447cd6... minor update
=======
>>>>>>> parent of cf464a44... ignore it
            console.log('Registered!')
        })
}

<<<<<<< HEAD
=======
>>>>>>> parent of 76447cd6... minor update
=======
            console.log('Registered!')
        })
}

>>>>>>> parent of 76447cd6... minor update
=======
            console.log('Registered!')
        })
}

>>>>>>> parent of 76447cd6... minor update
export const upload = newBook =>{

>>>>>>> parent of cf464a44... ignore it
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        .post('/login', {
=======
        .post('login', {
>>>>>>> parent of 76447cd6... minor update
=======
        .post('login', {
>>>>>>> parent of 76447cd6... minor update
=======
        .post('login', {
>>>>>>> parent of 76447cd6... minor update
=======
        .post('login', {
>>>>>>> parent of 76447cd6... minor update
            email: user.email,
            password: user.password

>>>>>>> parent of cf464a44... ignore it
        .post('/notes', {
            image: newNote.image,
            course: newNote.course,
            title: newNote.title,
            teacher: newNote.teacher,
            description: newNote.description
            // .post('login', {
            //     email: user.email,
            //     password: user.password
        })
        .then(res => {
            console.log('Uploaded')
        })
}

