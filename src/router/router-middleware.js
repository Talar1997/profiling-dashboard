import {userValidation} from "@/services/user/user-validation"
import {userService} from "@/services/user/user-service"

export function routerMiddleware(to, from, next) {
    const userRole = userValidation.getUserRole()
    const isLoggedIn = userValidation.isUserLoggedIn()
    const path = to.meta.restrictions
    const tryingToLogin = tryingToReachLogin(to.path)

    if(!tryingToLogin){
        if(!isLoggedIn) forwardToLoginPage(next)
        if(isTokenExpired()) invalidate(next)
    }

    if(path.restricted){
        const userEligibleForAccess = path.accessRole.includes(userRole)
        if(!userEligibleForAccess) forwardToDashboard(next)
    }

    document.title = to.meta.title
    next()
}

function tryingToReachLogin(path){
    return path.includes('login')
}

function forwardToLoginPage(next){
    return next('/login')
}

function forwardToDashboard(next){
    return next('/dashboard')
}

function isTokenExpired(){
    return !userValidation.validateTokenTimestamp()
}

function invalidate(next){
    userService.logout()
    return next('/login')
}