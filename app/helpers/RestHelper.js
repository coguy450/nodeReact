var $ = require('jquery');

module.exports = {
    get: function(url){
        return new Promise(function(success,failure){
            $.ajax({
                url:url,
                dataType:"json",
                success:success,
                error:failure
            })
        })
    },
    post: function(url,data){
        return new Promise(function(success,failure){
            $.ajax({
                url:url,
                type:"POST",
                data:data,
                success:success,
                error:failure
            })
        })
    },
    patch: function(url,data){
        return new Promise(function(success,failure){
            $.ajax({
                url:url,
                type:"PATCH",
                data:data,
                success:success,
                error:failure
            })
        })
    },
    del: function(url){
        return new Promise(function(success,failure){
            $.ajax({
                url:url,
                type:"DELETE",
                success:success,
                error:failure
            })
        })
    }

};