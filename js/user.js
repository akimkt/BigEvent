var user = {
    //后台登录
   login : function(option){
        $.ajax({
            type : 'post',
            url: UserLoginUrl,
            data :option.data,
            //
            success :option.callback
            }
        )
    },
    //后台退出
    loginOut : function(option){
        $.ajax({
            type : 'post',
            url : UserLoginOutUrl,
            success : option.callback
        })
    },
    //用户简略信息获取
    userInfo : function(option){
        // console.log('1')
        $.ajax({
            url : UserInfoUrl,
            success: option.callback
        })
    },

    //获取用户详细信息
    userDetail : function(option){
        $.ajax({
            url : UserDetailUrl,
            success : option.callback
        })
    },
    //修改用户信息
    userEdit:function(option){
        $.ajax({
            type : 'post',
            url : UserEditUrl,
            data : option.data,
            contentType : false,
            processData : false,
            success : option.callback
        })
    }
}