const validateStudent = (req, res, next) =>{
    const {firstName, lastName, email} = req.body;
    if(!firstName || !lastName || !email) return res.status(400).send('Missing requested fields name or age ..!')

    next();
};

const validateClass = (req, res, next) =>{
    const {name, teacher} = req.body;
    if(!name || !teacher){
        return res.status(400).send('Missing name or teacher..!')
    }
    next()
};

module.exports = {validateClass, validateStudent};