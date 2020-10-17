angular.module('chatBox').controller('LoginCtrl',function(commonService,$location){
   this.userObj ={};
//    console.log(commonService);
    this.dologin = function(){
        commonService._login(this.userObj).then(function(resp){
           if(resp){            
            this.userObj ={};
            $location.path('/home');
           }
        }).catch(err=>{
            console.log(err);
        });
    };
    

});