function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
        if (!response.ok) {
            throw error('ERROR');
        }
        return data = response.json();
    }).then(data => {
        // console.log(data);
        const html = data.map(user => {
            return `
                <div class="user">
                    <div class="d-flex">
                        <div>
                            <p>Name: ${user.name}</p>
                            <p>Email: ${user.email}</p>
                        </div>
                        <div>
                            <button class="button">Get User's Posts</button>
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