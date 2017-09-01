module.exports = {

    getUsers: (req, res) => {
        req.app.get('db').get_users().then(response => {
            res.send(response)
        })
    },
    getVehicles: (req, res) => {
        req.app.get('db').get_vehicles().then(response => {
            res.send(response)
        })
    },
    getVehiclesByYear: (req, res) => {
        req.app.get('db').get_vehicles_by_year().then(response => {
            res.send(response)
        })
    },
    addUser: (req, res) => {
        const newUser = [
            req.body.name,
            req.body.email
        ]
        req.app.get('db').add_user(newUser).then(response => {
            res.send(response)
        })
    },
    addVehicle: (req, res) => {
        const newVehicle = [
            req.body.make,
            req.body.model,
            req.body.year,
            req.body.owner_id
        ]
        req.app.get('db').add_vehicle(newVehicle).then(response => {
            res.send(response)
        })
    },
    getVehicleCount: (req, res) => {
        const count = [
            req.params.userId
        ]
        req.app.get('db').vehicle_count(count).then(response => {
            res.send(response)
        })
    },
    getVehicleById: (req, res) => {
        const id = [
            req.params.userId
        ]
        req.app.get('db').vehicle_id(id).then(response => {
            res.send(response)
        })
    },
    findAllVehicles: (req, res) => {
        if (req.query.userEmail) {
            req.app.get('db').find_vehicle_email([req.query.userEmail]).then(response => {
                res.send(response)
            })
        } else if (req.query.userFirstStart) {
            const first = req.query.userFirstStart;
            req.app.get('db').find_vehicle_first_name([first + '%']).then(resp => {
                res.send(resp)
            })
        }
    },
    changeOwner: (req, res) => {
        const change = [
            Number(req.params.vehicleId),
            Number(req.params.userId)
        ]
        req.app.get('db').change_owner(change).then(response => {
            res.send(response)
        })
    },
    removeOwner: (req, res) => {
        const owner = [
            req.params.userId,
            req.params.vehicleId
        ]
        req.app.get('db').remove_owner(owner).then(response => {
            res.send(response)
        })
    },
    removeVehicle: (req, res) => {
        req.app.get('db').remove_vehicle([req.params.vehicleId]).then(response => {
            res.send(response)
        })
    }

}