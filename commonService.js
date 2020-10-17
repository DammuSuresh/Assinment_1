angular.module('chatBox').service('commonService',function(){
  // var commonService = this;
    
   this._login= function(data){
        return new Promise(function(resolve,reject){
          if(data){
            localStorage.setItem('userData',JSON.stringify(data));
            resolve('Loggedin Success !!');  
          }else{
             reject('Some Error');
          }
        });      
    };
    this.getUserData = function(){
        return new Promise((res,reject)=>{
            let userinfo = JSON.parse(localStorage.getItem('userData'));
            if(userinfo){
                res({status:200,'data':userinfo});
            }else{
               reject({status:400,'Message':'Bad Request'});
            }
        });
    };
    this.saveUserData= function(data,fngenratesysdata){
        return new Promise(function(resolve,reject){
            if(data){
                resolve(data);
                fngenratesysdata();
            }else{
                reject('Please enter valid data');
            }
        });      
    };
    
});