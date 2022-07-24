const CT = async (req, res, next) => {
    console.log('CT');
    req.params.time =  await new Date()
    next();
};
const finalResponse = async (req, res, next) => {
    console.log("here")
    res.json({time: req.params.time})
}

module.exports = {CT, finalResponse}