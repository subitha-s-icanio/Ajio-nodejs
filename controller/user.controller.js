const createUserServices = require("../services/users.services");
module.exports = {
    createUser: async (req, res) => {
        try {
            await createUserServices.createUser(req, res);
        } catch (err) {
            console.log(err)
            var msg = "SOMETHING_WENT_WRONG!";
            return res.status(422).json(responseData(msg, {}, 422));
        }
    },
    getUser: async (req, res) => {
        try {
            await createUserServices.getUser(req, res);
        } catch (err) {
            console.log(err)
            var msg = "SOMETHING_WENT_WRONG!";
            return res.status(422).json(responseData(msg, {}, 422));
        }
    },
    updateUser: async (req, res) => {
        try {
            await createUserServices.updateUser(req,res);
        }
        catch (err) {
            console.log(err)
            var msg = "SOMETHING_WENT_WRONG!"
            return res.status(422).json(responseData(msg, {}, 422));
        }
    },
    deleteUser: async (req,res) => {
        try {
            await createUserServices.deleteUser(req,res);
        }
        catch (err) {
            console.log(err)
            var msg = "SOMETHING_WENT_WRONG!"
            return res.status(422).json(responseData(msg, {}, 422));
        }
    }
}