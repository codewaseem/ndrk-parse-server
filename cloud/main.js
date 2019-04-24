Parse.Cloud.define("deleteUserByEmail", async function (request, response) {
    Parse.Cloud.useMasterKey();
    var email = request.params.email;
    var query = new Parse.Query(Parse.User);
    query.equalTo("email", email);

    try {
        let user = await query.first();
        let deletedUser = await user.destroy({useMasterKey:true});

        return deletedUser;
    } catch(e) {
       return e;
    }
});