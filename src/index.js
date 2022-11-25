import { getUsers } from "./APi/userApi";

// Populate table of users via API call

// get users from API
getUsers().then((result) => {
	// declare user body
	let usersBody = "";

	// loop through users
	result.forEach((user) => {
		// add user to user body with template literal
		usersBody += `
            <tr>
                <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
                <td>${user.id}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
            </tr>
        `;
	});

	// add user body to table
	global.document.getElementById("users").innerHTML = usersBody;
});
