function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
        if (!response.ok) {
            throw error('ERROR');
        }
        return data = response.json();
    }).then(data => {
        // console.log(data);
        // appendData(data);
        const html = data.map(user => {
            return `
                <div class="user">
                    <div class="">
                        <div>
                            <p>Name: ${user.name}</p>
                            <p>Email: ${user.email}</p>
                        </div>
                        <div>
                            <button onClick="fetchPosts(${user.id})" class="btn btn-primary">Get User's Posts</button>
                        </div>  
                    </div>
                </div>
            `
        }).join('');
        // console.log(html);
        document
            .querySelector('#app')
            .insertAdjacentHTML('afterbegin', html);
    }).catch(error => {
        console.log(error);
    });


}

fetchData();

// function myFunction() {
//     // document.getElementById("demo").innerHTML = "Hello World";
// }

function fetchPosts(userId) {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId).then(response => {
        if (!response.ok) {
            throw error('ERROR');
        }

        return data = response.json();
    }).then(data => {
        const posts = data.map(post => {
            return `
            <div>
                <p class="font-weight-bold">Title:<br> <span>${post.title}</span> </p>
                <p class="font-weight-bold">Body: <br> <span>${post.body}</span></p>
            </div>`
        });
        document
            .querySelector('#posts')
            .insertAdjacentHTML('afterbegin', posts);
        console.log(data)
    }).catch(error => {
        console.log(error);
    });


}

// const fetchDataBtn = document.getElementById('fetchdata')
// const result = document.getElementById('result')

// // gets data from API and sets the content of #result div
// const getData = function () {
//     result.innerText = 'Loading....'
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             result.innerText = JSON.stringify(data, null, 2)
//         })
//         .catch(error => console.log(error))
// }

// // add event listener for #fetchdata button
// if (fetchDataBtn) {
//     fetchDataBtn.addEventListener('click', getData);
// }
// fetchDataBtn.addEventListener('click', getData)

fetchPosts();