const StatusSchema = {
    type: String,
    enum: ["active", 'inactive'],
    default: "active"
}

module.exports = {
    StatusSchema
}