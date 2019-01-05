function getUser(userId, callback) {
    jQuery.ajax({
        method:'GET',
        url:'http://localhost:3005/v1/api/users/'+userId+'?apiKey=5df8e028-ed4c-4d37-9ee2-739183d7a565',
        success:function(data,textStatus, response) {
            
            callback(null,response.status);
        },
        error:function(err) {
            console.log(err)
            //callback(err,null);

        } 
    });
}