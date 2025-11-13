export const admin = (req, res, next) => {
    //Get the Query 
    const data = req.query.admin;
    const admin = data?.toString();
    if (admin !== 'Anurag') {
        return res.status(400).json({
            message: `You are Not admin`
        });
    }
    next();
};
//# sourceMappingURL=admin.js.map