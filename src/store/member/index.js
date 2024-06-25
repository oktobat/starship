export default {
    state : {
        oUser : [ {email:'tsalt@hanmail.net', pw:'1234'}], // [ {email:'', pw:''} ]
        message : false,
        logined : null, // { email:"", pw:"" }
        prevPath : null,
    },
    mutations : {
        fnRegisterUser(state, payload){
            let findEmail = false
            let { email, pw } = payload
            state.oUser.map((item)=>{
                if (item.email==email) {
                    findEmail = true
                }
            })
            if (!findEmail) {
                state.oUser.push({email, pw})
                console.log(state.oUser)
                state.message = true
            } else {
                state.message = false
            }
        },
        fnLogin(state, payload){
            let { email, pw } = payload
            state.oUser.map((item)=>{
                if (item.email==email && item.pw==pw){
                    state.logined = { email, pw }
                }
            })
        },
        savePrevPath(state, payload){
            state.prevPath = payload
        },
        fnLogout(state){
            state.logined = null
        },
        fnModifyUser(state, payload){
            let {email, pw} = payload
            state.oUser.map((item)=>{
                if (item.email==email){
                    item.pw = pw
                }
            })
        },
        fnRemoveUser(state, payload){
            state.oUser = state.oUser.filter(user=>user.email!==payload)
        }
    },
    actions : { },
    getters : {
        fnGetOuser : state => state.oUser,
        fnGetMessage : state => state.message,
        fnGetLogined : state => state.logined,
        fnGetPrevPath : state => state.prevPath,
    }
}