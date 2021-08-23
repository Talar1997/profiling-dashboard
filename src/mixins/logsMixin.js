const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
}

const LEVEL = {
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR',
    CRITICAL: 'CRITICAL',
}

export const logsMixin = {
    methods: {
        computeVariant(level) {
            if (level === LEVEL.INFO) return 'secondary'
            if (level === LEVEL.WARN) return 'primary'
            if (level === LEVEL.ERROR) return 'warning'
            if (level === LEVEL.CRITICAL) return 'danger'
        },

        computeMethodVariant(method) {
            if (method === METHODS.DELETE) return 'danger'
            if (method === METHODS.POST) return 'success'
            if (method === METHODS.PATCH) return 'warning'
        },

        computeMethod(method) {
            if (method === METHODS.POST) return 'CREATE'
            if (method === METHODS.PATCH) return 'UPDATE'
            return method
        },

        computeResourceType(resource) {
            if(typeof resource === 'undefined') return

            resource = resource.replace("/api/v1/", "")
            resource = resource.replace("/", ", id:")
            return resource
        },

        simplifyDate(date) {
            const newDate = new Date(date)
            return `${newDate.toDateString()} ${newDate.toLocaleTimeString()}`
        },
    }
}