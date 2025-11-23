// JavaScript source code
async function Register() {
    const userName = document.querySelector("#userName")
    const firstName = document.querySelector("#firstName")
    const lastName = document.querySelector("#lastName")
    const password = document.querySelector("#password")
    if (userName.value == "" || password.value == "") {
        alert("Please fill in required fields.")
        return;
    }
    const postData = {
        userName: userName.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value
    };
    const postResponse = await fetch("https://localhost:44393/api/users/Register", {
        method: 'Post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    });
    const dataPost = await postResponse.json();
    sessionStorage.setItem('currentUser', JSON.stringify(dataPost));
    alert("user registered succesfully👍👍!");
}
async function Login() {
    const userName = document.querySelector("#e_userName")
    const password = document.querySelector("#e_password")
    const postData = {
        userName: userName.value,
        password: password.value,
    };
    if (userName.value == "" || password.value == "") {
        alert("Please fill in required fields.")
        return;
    }
    const postResponse = await fetch("https://localhost:44393/api/users/Login", {
        method: 'Post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    });
    if (postResponse.status == 204) {
        alert("error with user details");
    }
    const dataPost = await postResponse.json();
    if (postResponse.ok) {
        alert("user Login succesfully👍👍!");
        sessionStorage.setItem('currentUser', JSON.stringify(dataPost));
        window.location.href = "../update.html";
    }
    else {
        alert("user Login failed!");
    }

}    