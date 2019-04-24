Parse.Cloud.define("deleteUserByEmail", async function (request, response) {
    Parse.Cloud.useMasterKey();
    var email = request.params.email;
    var query = new Parse.Query(Parse.User);
    query.equalTo("email", email);

    try {
        let user = await query.first();
        let deletedUser = await user.destroy();

        if(deletedUser) {
            response.success(deletedUser);
        }

        else throw new Error("Failed to delete the User");

    } catch(e) {
        response.error(e);
    }
});