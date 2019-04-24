Parse.Cloud.define("deleteUserByEmail", function(request, response) {
  Parse.Cloud.useMasterKey();
  var email = request.params.email;
  var query = new Parse.Query(Parse.User);
  query.equalTo("email", email);
  query.first().then(function(user) {
      return user.destroy();
  }).then(function() {
      response.success(user);
  }, function(error) {
      response.error(error);
  });
});