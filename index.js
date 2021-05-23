// Add your code here
function submitData(name, email) {
    let userObj = {
        name: name,
        email: email
    }

    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
        },
        body: JSON.stringify(userObj)
    }

    return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
        return response.json()
     })
     .then(function(object) {
         let p = document.createElement('p')
         p.textContent = object.id
         document.querySelector('body').append(p)
     })
     .catch(function(error) {
         let p = document.createElement('p')
         p.textContent = error.message
         document.querySelector('body').append(p)
     })
}
